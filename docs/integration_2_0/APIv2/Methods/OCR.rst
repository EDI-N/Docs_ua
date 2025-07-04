######################################################################
OCR API інтеграція
######################################################################


.. contents:: Зміст
    :depth: 2
    :local:

Дана інструкція описує послідовність викликів методів API, призначених для розпізнавання тексту та інтелектуального вилучення даних з документів.

Підтримувані типи документів, які можуть бути завантажені для обробки через API:
    * Рахунок-фактура
    * Накладна (товарна накладна, видаткова накладна)
    * Акт виконаних робіт


Послідовність дій
========================================================

1. Авторизація
--------------------------------------------------------

Для виклику методів API користувач повинен пройти `авторизацію <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

2. Відправка документа на розпізнання
--------------------------------------------------------

**URL**

.. table::

   +------------------+-----------------------------------------------------+
   | **Метод запиту** | POST                                                |
   +------------------+-----------------------------------------------------+
   | **URL запиту**   | https://edo-v2.edin.ua/api/ocr/experimental/v1/send | 
   +------------------+-----------------------------------------------------+

**Headers**

.. table::

   +-------------------+-----------------------------------------------------+
   | **Authorization** | {Session Key}                                       |
   +-------------------+-----------------------------------------------------+
   | **Content-Type**  | application/pdf | image/png | image/jpeg            |
   +-------------------+-----------------------------------------------------+


**REQUEST**

.. table::

   +----------------+--------------------------------------------------------+
   | **JSON Body**  | Байтовий вміст файлу (PDF/зображення)                  |
   +----------------+--------------------------------------------------------+

**RESPONSE**

    * **Positive**: 

      * У відповідь надходить унікальний ідентифікатор (**UUID**) завдання на конвертацію.

    * **Negative:**

        * ``400`` - сервер поверне одну із помилок:

           * **User not configured** - у користувача не налаштовані правила конвертації документів. Зверніться до закріпленого менеджера.
           * **Unsupported content type: {тип, який користувач передав у запиті}** - непідтримуваний тип файлу. Тип файлів, які підтримуються: **"application/pdf"**, **"image/png"**, **"image/jpeg"**.
           * **Request body is empty** - тіло запиту порожнє.

        * ``500`` - внутрішня помилка сервера. Зверніться до технічної підтримки. 

2. Отримання статусу обробки
-----------------------------------------------------------------

Метод рекомендовано викликати не частіше ніж 1 раз на 15 секунд.

**URL**

.. table::

   +------------------+---------------------------------------------------------------------------------+
   | **Метод запиту** | GET                                                                             |
   +------------------+---------------------------------------------------------------------------------+
   | **URL запиту**   | https://edo-v2.edin.ua/api/ocr/experimental/v1/result?task_uuid={UUID завдання} | 
   +------------------+---------------------------------------------------------------------------------+


**Headers**

.. table::

   +-------------------+------------------------------------------------------------+
   | **Authorization** | {Session Key}                                              |
   +-------------------+------------------------------------------------------------+

**RESPONSE**

    * **Positive:**

      * У відповідь надходить статус завдання на конвертацію.

        Можливі статуси обробки завдання: 
            * **"CREATED"** - створено та очікує в черзі;
            * **"PROCESSING"** - в процесі виконання;
            * **"DONE"** — виконано;
            * **"ERROR"** — помилка.
  
    * **Negative:**

        * ``400`` - сервер поверне помилку:

           * **Task not found for uuid: {UUID}** - завдання з вказаним UUID не знайдено.

        * ``500`` - внутрішня помилка сервера. Зверніться до технічної підтримки. 


1. Отримання результату конвертації
--------------------------------------------------------------

Метод викликається після отримання статусу **"DONE"**.

**URL**

.. table::

   +------------------+---------------------------------------------------------------------------------+
   | **Метод запиту** | GET                                                                             |
   +------------------+---------------------------------------------------------------------------------+
   | **URL запиту**   | https://edo-v2.edin.ua/api/ocr/experimental/v1/result?task_uuid={UUID завдання} | 
   +------------------+---------------------------------------------------------------------------------+

**Headers**

.. table::

   +-------------------+------------------------------------------------------------+
   | **Authorization** | {Session Key}                                              |
   +-------------------+------------------------------------------------------------+


**RESPONSE**

   * **Positive:**

        У відповідь надходить: 

            * результат конвертації у вигляді JSON-документа;
            * у заголовках (headers) відповіді присутній параметр X-Doc-Type, який містить визначений тип документа.

    * **Negative:**

        * ``400`` - сервер поверне одну із помилок:

           * **Task is still processing** — завдання в процесі конвертації. Результат недоступний.
           * **Convert document to JSON error** — помилка під час конвертації документа.
           * **Task not found for uuid: {UUID}** — завдання з указаним UUID не знайдено.

        * ``500`` - внутрішня помилка сервера. Зверніться до технічної підтримки. 
  

Приклад структури документів
========================================================

**JSON:**

.. code:: json

    [
        {
            "DocumentName": "Назва документу",
            "Barcode": "штрихкод документу",
            "DocumentType": "000-не визначено; 001-договір; 002-додаткова угода; 003-рахунок/рахунок-фактура; 004-акт/акт виконаних робіт/акт наданих послуг/акт надання послуг; 005-накладна/товарна накладна; 006-видаткова накладна; 007-наряд замовлення.",
            "Document-Header": {
            "Number": "номер додаткової угоди. поле опціональне",
            "Date": "дата документу. формат YYYY-MM-DD. поле опціональне",
            "Location": "місце складання",
            "Route": "маршрут",
            "DeliveryTerms": "умови поставки",
            "DeliveryTime": "час доставки",
            "CarNumber": "номер автомобіля",
            "PayToDate": "сплатити до дати. формат YYYY-MM-DD. поле опціональне"
            },
            "Agreement": [
            {
                "AgreementNumber": "номер договору",
                "AgreementDate": "дата документу. формат YYYY-MM-DD. поле опціональне",
                "Subject": "предмет договору"
            }
            ],
            "Equipment": [
            {
                "Name": "найменування обладнання",
                "Serial": "серійний номер"
            }
            ],
            "AdditionalInfo": [
            {
                "Name": "назва",
                "Value": "значення"
            }
            ],
            "ReasonOfService": [
            "причина виклику"
            ],
            "CompletedWorks": [
            {
                "Name": "Найменування виконаних робіт",
                "Quantity": "кількість",
                "Price": "Вартість"
            }
            ],
            "SpareParts": [
            {
                "Name": "Найменування використаних запасних частин та матеріалів",
                "Quantity": "кількість",
                "Price": "Вартість"
            }
            ],
            "Recommendations": [
            "рекомендації"
            ],
            "Notes": [
            "помітки рукописним шрифтом"
            ],
            "Summary": "короткий зміст документу",
            "Document-Parties": [
            {
                "Role": "роль контрагента: оператор, абонемент, продавець, покупець, ...",
                "ILN": "GLN контрагента",
                "TaxID": "ІПН контрагента",
                "UtilizationRegisterNumber": "ЄДРПОУ контрагента",
                "Name": "назва компанії контрагента",
                "Signature": "наявність підпису відповідальної особи (0 - підпис відсутній, 1 - підпис присутній)",
                "Stamp": "наявність печатки (0 - печатка відсутня, 1 - печатка присутня)",
                "Addreses": [
                {
                    "Type": "тип адреси",
                    "StreetAndNumber": "вулиця/проспект/бульвар і номер будинку контрагента",
                    "CityName": "місто контрагента",
                    "PostalCode": "поштовий код контрагента"
                }
                ],
                "PhoneNumbers": [
                {
                    "Type": "тип телефоного номера",
                    "Phone": "телефоний номер контрагента"
                }
                ],
                "BankAccounts": [
                {
                    "IBAN": "IBAN контрагента",
                    "BankName": "назва банку"
                }
                ],
                "Email": "email",
                "Signer": {
                "Position": "посада підписанта",
                "Name": "ПІП підписанта"
                }
            }
            ],
            "Docement-Lines": [
            {
                "LineNumber": "номер позиції в табличній частині",
                "EAN": "Штрих-код продукту відповідно до стандарту EAN-8 та EAN-13",
                "BuyerItemCode": "Артикул/код товару",
                "CertNumber": "номер сертифікату",
                "ExternalItemCode": "Код товару згідно з довідника УКТ ЗЕД. завжди складається з 10 символів",
                "ItemDescription": "назва товару/послуги",
                "InvoiceQuantity": "Замовлена кількість. десяткове число",
                "UnitOfMeasure": "одиниці виміру",
                "Location": "Локація де проводилась робота чи для якої продається товар",
                "UnitGrossPrice": "Ціна однієї одиниці з ПДВ. десяткове число",
                "UnitNetPrice": "Ціна однієї одиниці без ПДВ. десяткове число",
                "TaxRate": "Ставка ПДВ (20/19/16/14/7/2/0)",
                "TaxCategoryCode": "Код категорії податку:S - стандартний податок; можливі значення TaxRate: 20/19/16/14/7/2 (інакше помилка),E - звільнений від сплати податку; можливі значення TaxRate=0, Z - нульова ставка (0%); можливі значення TaxRate=0",
                "GrossAmount": "Сума з ПДВ по позиції. десяткове число",
                "TaxAmount": "Сума ПДВ по позиції. десяткове число",
                "NetAmount": "Всього без ПДВ. десяткове число"
            }
            ],
            "Document-Summary": {
            "TotalLines": "Кількість рядків в документі",
            "TotalNetAmount": "Загальна сума без ПДВ. десяткове число",
            "TotalTaxAmount": "Сума ПДВ. десяткове число",
            "TotalGrossAmount": "Загальна сума з ПДВ. десяткове число",
            "Tax-Summary": [
                {
                "TaxRate": "Ставка ПДВ (20/19/16/14/7/2/0)",
                "TaxCategoryCode": "Код категорії податку:S - стандартний податок; можливі значення TaxRate: 20/19/16/14/7/2 (інакше помилка),E - звільнений від сплати податку; можливі значення TaxRate=0, Z - нульова ставка (0%); можливі значення TaxRate=0",
                "TaxAmount": "Сума податку для конкретної категорії податку. десяткове число",
                "	": "Оподаткована сума для конкретної категорії податку. десяткове число"
                }
            ]
            }
        }
    ]