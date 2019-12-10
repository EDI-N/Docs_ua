#################################################################################################
**Додавання документа в комплект документів (в пакет)**
#################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

.. important:: 
    Логіка виконання методу може мінятися: якщо "Header" відсутній, у відповідь на успішний запит прийдуть дані по всьому комплекту документів (пакету) - об'єкт **Package**; якщо ж в "Header" запиту вибрати (передати) один з response-object-type, то: 
     - **uuid** - GUID документа; у відповідь на успішний запит прийде тільки GUID документа (documentUuid);
     - **document** - дані документів; у відповідь на успішний запит прийде тільки об'єкт з даними документа (DocumentStore)
    
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                **HTTP PUT**                                                |
+==============================================================+============================================================================================================+
| **Content-Type**                                             | application/form-data/json (тіло HTTP запиту в form-data /тіло відповіді в json форматі)                   |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | **https://doc.edi-n.com/bdoc/store/package/document**                                                      |
|                                                              |                                                                                                            |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
|                                                              |                                                                                                            |
|                                                              | **Обов'язкові url-параметри:**                                                                             |
|                                                              |                                                                                                            |
|                                                              | **package_id** - ID комплекта                                                                              |
|                                                              |                                                                                                            |
|                                                              | **document_type_id** - ID типу комплекту документів, в котрий додається документ                           |
|                                                              |                                                                                                            |
|                                                              | **Опціональні url-параметри:**                                                                             |
|                                                              |                                                                                                            |
|                                                              | **document_date** - дата документу форматі UNIX TimeStamp                                                  |
|                                                              |                                                                                                            |
|                                                              | **document_number** - номер документу                                                                      |
|                                                              |                                                                                                            |
|                                                              | **comment** - коментар                                                                                     |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
***********************************************************

``REQUEST``

В цьому методі у тіло **запиту** в form-data передається файл (тільки один file розміром менше 5 Mb) документа, який необхідно додати.

``RESPONSE``

У **відповідь** передаються дані комплекту (объект **Package**).

Таблиця 1 - Опис параметрів об'єкта **Package**

.. csv-table:: 
  :file: for_csv/Package.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Contract**

.. csv-table:: 
  :file: for_csv/Contract.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **DocumentStore**

.. csv-table:: 
  :file: for_csv/DocumentStore.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Package2Dictionaries**

.. csv-table:: 
  :file: for_csv/Package2Dictionaries.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **Package2ExtraField**

.. csv-table:: 
  :file: for_csv/Package2ExtraField.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **Dictionary**

.. csv-table:: 
  :file: for_csv/Dictionary.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0 

**Приклади**
*********************************

**При використанні методу json-тіло запиту відсутнє (дані передавати не потрібно)**

--------------

Приклад тіла **відповіді** в json форматі 

.. code:: ruby

  {
      "packageId": 1966,
      "senderCompanyId": 2,
      "recipientCompanyId": 8,
      "senderCompany": {
          "companyId": 2,
          "accountId": 4,
          "name": "Державне підприємство НИВА",
          "code": "20820657",
          "isApproved": 1,
          "isSignedOffer": 1,
          "isActive": 1,
      },
      "recipientCompany": {
          "companyId": 8,
          "accountId": 6,
          "name": "Анткевич Г.В.",
          "code": "2131767363",
          "isApproved": 1,
          "isSignedOffer": 1,
          "isActive": 1,
      },
      "contract": {
          "contractId": 10,
          "number": "2000",
          "contractName": "Владелец \"ДП НИВА\" - Клиент \"Анткевич\"",
          "date": 1530403200,
          "ownerCompany": {
              "companyId": 2,
              "accountId": 4,
              "name": "Державне підприємство НИВА",
              "code": "20820657",
              "isApproved": 0,
              "isSignedOffer": 0,
              "isActive": 1,
          },
          "clientCompany": {
              "companyId": 8,
              "accountId": 6,
              "name": "Анткевич Г.В.",
              "code": "2131767363",
              "isApproved": 0,
              "isSignedOffer": 0,
              "isActive": 1,
          },
          "description": "Владелец \"ДП НИВА\" - Клиент \"Анткевич\"",
          "expiredDate": 1598659200,
          "status": 2,
      },
      "packageTypeId": 8,
      "dateCreated": 1540286988,
      "dateChanged": 1540287270,
      "status": 1,
      "archive": 0,
      "packageNumber": "1540286988",
      "documents": [
          {
              "documentId": 20,
              "packageId": 13,
              "documentType": {
                  "documentId": 5,
                  "companyId": 1,
                  "name": "Інвойс",
                  "code": "11006",
                  "isActive": 1,
              },
              "number": "1515757306",
              "date": 1515715200,
              "signsCount": 1,
              "status": 2,
              "bodies": [
                  {
                      "bodyId": 20,
                      "documentId": 20,
                      "fileName": "Воросы по БД (ответы).docx",
                      "signBodies": [
                          {
                              "signId": 36,
                              "bodyId": 20,
                              "info": {
                                  "ownerInfo": "O=Тестова організація \"Тест Б\";OU=ТестовийБ;…
                                  "issuer": "O=ТОВ \"КС\";OU=ЦСК;CN=АЦСК ТОВ \"КС\";Serial=UA
                                  "issuerCN": "АЦСК ТОВ \"КС\"",
                                  "subjAddress": "22222, м. Київ, вул. Тестова, 2, оф.2",
                                  "subjDRFOCode": "",
                                  "subjEDRPOUCode": "22332233",
                                  "subjEMail": "stamp@m.ail",
                                  "subjFullName": "Іванов Іван Петрович",
                                  "subjLocality": "Київ",
                                  "subjOrg": "Тестова організація \"Тест Б\"",
                                  "subjOrgUnit": "ТестовийБ",
                                  "subjPhone": "(222) 222222",
                                  "subjTitle": "печатка тестовий директор"
                              }
                          }
                      ]
                  }
              ]
              "isReadFromApi": 0,
              "documentUuid": "c48233b5-2e08-4a46-92f6-04bbb8e9ca8e"
          },
      ],
      "package2Dictionaries": [
          {
              "packageId": 1,
              "dictionaryId": 3,
              "dictionary": {
                  "dictionaryId": 3,
                  "companyId": 1,
                  "name": "Відділення",
                  "code": "DEPARTMENT",
                  "isActive": 1,
                  "values": [
                      {
                          "valueId": 27,
                          "dictionaryId": 3,
                          "name": "Херсон. Базове.",
                          "code": "1621",
                          "isActive": 1
                      }
                  ]
              }
          }
      ],
      "extraFields": [
          {
              "packageId": 37,
              "fillType": 3,
              "required": 1,
              "extraField": {
                  "fieldId": 31,
                  "companyId": 27,
                  "name": "NumDogovor",
                  "description": "№ договора поставки",
                  "dataType": 1,
                  "status": 1,
                  "value": "21312фыва1ё"
              }
      "contractDictionaries": [
          {
              "contractId": 1,
              "dictionaryId": 1,
              "dictionary": {
                  "dictionaryId": 1,
                  "companyId": 1,
                  "name": "Сегмент клієнта",
                  "code": "SEGMENT",
                  "isActive": 1,
                  "values": [
                      {
                          "valueId": 1,
                          "dictionaryId": 1,
                          "name": "Мідмаркет",
                          "code": "01",
                          "isActive": 1
                      }
                  ]
              }
          }
      ],
      "isRead": 0,
      "isReadFromApi": 0,
      "isReadyForSend": 1,
      "packageDirection": 2,
      "packageUuid": "693ffb23-6b13-4d49-999d-7368e7069c2a"
  }



