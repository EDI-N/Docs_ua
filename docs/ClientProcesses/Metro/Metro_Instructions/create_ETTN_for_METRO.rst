
.. rubric:: **Правила заповнення "e-TTH" для мережі "МЕТРО"**

Товарно-транспортна накладна (ТТН) є одним із ключових документів у документообігу між контрагентами. Для того щоб ТТН, передача якої здійснюється через FTP/AS2, була коректно пов’язана з документом-підставою, необхідно дотримуватись відповідних правил її заповнення.

---------

.. contents:: Зміст:
   :depth: 2

---------

**1. Загальні правила**
====================================

**1.1. Наявність документа-підстави**

У процесі обміну документами з мережею **«Метро»** використовується документ **«Транспортна накладна»**. При формуванні ТТН інформація про документ-підставу **«Транспортна накладна»** обов’язково має бути заповнена у блоці **«Супровідні документи»**.

У XML-структурі цей блок визначається як **«AssociatedReferencedDocument»**. 

Поля та правила заповнення:
    *   **"TypeCode"** - код (числове значення) типу документа-підстави (обов’язково):

        * ``780`` - Транспортна накладна (DOCUMENTINVOICE_TNN);

    *   **"ID"** – номер документа-підстави (обов’язково);
    *   **"Remarks"** – UUID документа-підстави на платформі EDIN (опційно);
    *   **"DateTimeString"** – Дата та час документа-підстави (обов’язково).

Номер і дата документа-підстави у блоці **«AssociatedReferencedDocument»** заповнюються відповідно до даних цього документа.
Вони вказуються в тілі цього документа в однойменних тегах (номер і дата) згідно зі специфікацією.

**XML-example**

.. code:: xml

    <ram:AssociatedReferencedDocument>
        <ram:TypeCode>780</ram:TypeCode>
        <ram:ID>GK_40409997_AN12</ram:ID>
        <ram:Remarks>4b39d-656-4d88-bc5d-c5c6879613c9</ram:Remarks>
        <ram:FormattedIssueDateTime>
            <qdt:DateTimeString>2025-01-15T12:00:00+02:00</qdt:DateTimeString>
        </ram:FormattedIssueDateTime>
    </ram:AssociatedReferencedDocument>

**1.2. Заповнення GLN компаній-учасників ТТН**

При формуванні ТТН для кожного з учасників документообігу у **«______TradeParty»** необхідно заповнювати GLN.

Інформація про GLN вноситься до блоку **«SpecifiedGovernmentRegistration»**.

Поля та правила заповнення:
    *   **"ID"** - GLN компанії-учасника;
    *   **"TypeCode"** - значення за замовчуванням: TRADEPARTY_GLN.

.. important::
    GLN у ТТН та документі-підставі мають збігатися.
        * GLN відправника (Sender) заповнюється у блоці **«ConsignorTradeParty»**;
        * GLN отримувача (Recipient) заповнюється у блоках “ConsigneeTradeParty” та **«ConsigneeReceiptLogisticsLocation»**

**XML-example**

.. code:: xml

    <ram:ConsignorTradeParty>
        <ram:ID schemeAgencyID="ЄДРПОУ">3211129</ram:ID>
        <ram:Name>ТОВ "ТЕСТ"</ram:Name>
        <ram:RoleCode>CZ</ram:RoleCode>
        <ram:PostalTradeAddress>
            <ram:PostcodeCode>01168</ram:PostcodeCode>
            <ram:StreetName>вул. Барабашова</ram:StreetName>
            <ram:CityName>Харків</ram:CityName>
            <ram:CountryID>UA</ram:CountryID>
            <ram:CountrySubDivisionName>Харківська</ram:CountrySubDivisionName>
        </ram:PostalTradeAddress>
        <ram:SpecifiedGovernmentRegistration>
            <ram:ID>4820062440004</ram:ID>
            <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
        </ram:SpecifiedGovernmentRegistration>
    </ram:ConsignorTradeParty>

**1.3. Додаткові умови та перевірки ТТН при роботі з мережею «Метро»**

*   Заборонено зазначати в ТТН інформацію про вартість товарів.

    Поля, які мають лишитись порожніми: **"Ціна з ПДВ"**, **"Ціна без ПДВ"**, **"Сума з ПДВ"** та **"Сума без ПДВ"** зазначаються в тегах:

        *   ``IncludedSupplyChainConsignmentItem.ApplicableNote.Content`` (з кодом PRICE_WITH_VAT);
        *   ``IncludedSupplyChainConsignmentItem.TariffQuantity``;
        *   ``IncludedSupplyChainConsignmentItem.InvoiceAmount``;
        *   ``IncludedSupplyChainConsignmentItem.ApplicableNote.Content`` (з кодом SUM_WITHOUT_VAT).

*   Заборонено Вантажовідправнику надсилати ТТН з однаковим номером більше ніж один раз у межах календарного року.

**1.4. Дефолтна логіка обробки документів**

Для коректного визначення зв’язків між документами, а також правильної обробки ТТН зі сторони мережі **«Метро»**, необхідно дотримуватись правил заповнення тіла ТТН, описаних у пунктах вище (п.1.1. та п.1.2).

Якщо хоча б один із пунктів не виконано, до ТТН застосовується дефолтна логіка обробки:

    *   Якщо не вказано документ-підставу, ТТН буде оброблена в системі EDIN, але через неможливість визначити пакет документів для неї буде створено новий пакет.
    *   Якщо не вказано GLN вантажовідправника та/або вантажоотримувача, пошук документа-підстави здійснюватиметься в межах основного GLN компанії.
        Якщо пакет документів не знайдено, для ТТН буде створено новий пакет.

.. note::
    **Основний GLN** – має унікальний ЄДРПОУ на рівні платформи EDIN та використовується для документів, що потребують підпису КЕП. Він створюється автоматично при реєстрації на платформі EDI Network.

**2. Зміни згідно з наказом №1332**
====================================

**2.1. Новий блок: «Відомості про транспортний засіб»** 

У ТТН необхідно заповнити інформацію про транспортний засіб, який бере участь у перевезенні. Ця інформація вноситься в поле **«Відомості про транспортний засіб (автомобіль / автопоїзд / комбінований транспортний засіб)»** (у структурі ТТН — блок ``ram:IncludedNote``).

Поля та правила заповнення:
    *   **Довжина** - загальна довжина автопоїзда. Вимірюється від переднього бампера автомобіля до заднього бампера останнього авто / причепа / напівпричепа. Вказується в метрах.
   
        *   ``ram:ContentCode.listAgencyID`` - ``vehicle_length`` (дефолт);
        *   ``ram:ContentCode.value`` – значення (число);
        *   ``ram:Content`` – код ролі учасника = ``CZ`` (дефолт).

    *   **Ширина(максимальна)** – максимальна ширина автопоїзда в метрах.
   
        *   ``ram:ContentCode.listAgencyID`` – ``vehicle_width`` (дефолт);
        *   ``ram:ContentCode.value`` – значення (число);
        *   ``ram:Content``  – код ролі учасника = ``CZ`` (дефолт).

    *   **Висота (максимальна)** – максимальна висота автопоїзда в метрах.
    
        *   ``ram:ContentCode.listAgencyID`` – ``vehicle_height`` (дефолт);
        *   ``ram:ContentCode.value`` – значення (число);
        *   ``ram:Content`` – код ролі учасника = ``CZ`` (дефолт).

    *   **Загальна маса з вантажем** – загальна маса транспортного засобу відповідно до технічного паспорта та маси вантажу (з урахуванням тари) або загальна маса за результатами зважування.
    
        *   ``ram:ContentCode.listAgencyID`` – ``gross_vehicle_weight_with_cargo`` (дефолт);
        *   ``ram:ContentCode.value`` – значення (число);
        *   ``ram:Content`` – код ролі учасника = ``CZ`` (дефолт).

**XML-example**

.. code:: xml

    <ExchangedDocument>            
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="vehicle_length">11.32</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="vehicle_width">3.3</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="vehicle_height">25</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="gross_vehicle_weight_with_cargo">3322</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>

**2.2. Нові поля для блоку «Загальні дані»**

У ТТН зазначається загальна інформація про вантаж, що перевозиться. 
Дані вносяться до блоків **«SpecifiedSupplyChainConsignment»** та **«IncludedNote»** в полях: **"Маса брутто"**, **"Загальна сума з ПДВ"**, **"Сума ПДВ"** та **"Кількість місць"**. 

Поля та правила заповнення блоку **«SpecifiedSupplyChainConsignment»**:
    *   **Маса брутто** – загальна маса брутто вантажу в кілограмах.

        *   ``ram:GrossWeightMeasure.unitCode`` – ``KGM`` (дефолт);
        *   ``ram:GrossWeightMeasure.value`` – значення (число).
    
    *   **Усього відпущено на загальну суму з ПДВ** – числове значення загальної суми з ПДВ у гривнях.
    
        *   ``ram:AssociatedInvoiceAmount.currencyID`` – ``UAH`` (дефолт);
        *   ``ram:AssociatedInvoiceAmount.value`` – значення (число).
    
    *   **Кількість місць** – числове значення загальної кількості місць вантажу.
    
        *   ``ram:ConsignmentItemQuantity`` – значення (число).

**XML-example**

.. code:: xml

    <ram:GrossWeightMeasure unitCode="KGM">3</ram:GrossWeightMeasure>
    <ram:AssociatedInvoiceAmount currencyID="UAH">4</ram:AssociatedInvoiceAmount>
    <ram:ConsignmentItemQuantity>4</ram:ConsignmentItemQuantity>

Поля та правила заповнення блоку **«IncludedNote»**:
    *   **Сума ПДВ (числове значення)** – сума ПДВ у гривнях.

        *   ``ram:ContentCode.listAgencyID`` – ``vatAmount`` (дефолт);
        *   ``ram:ContentCode.value`` – значення (число);
        *   ``ram:Content`` – код ролі учасника = ``CZ`` (дефолт).

    *   **Сума ПДВ (прописом)** – сума ПДВ у гривнях словами.

        *   ``ram:ContentCode.listAgencyID`` – ``vatAmount_text`` (дефолт);
        *   ``ram:ContentCode.value`` – текст (рядок);
        *   ``ram:Content`` – код ролі учасника = ``CZ`` (дефолт).

    *   **Маса брутто (прописом)** – загальна маса брутто вантажу в кілограмах словами.

        *   ``ram:ContentCode.listAgencyID`` – ``grossWeightMeasure_text`` (дефолт);
        *   ``ram:ContentCode.value`` – текст (рядок);
        *   ``ram:Content`` – код ролі учасника = ``CZ`` (дефолт).

    *   **Усього відпущено на загальну суму з ПДВ (прописом)** – сума з ПДВ у гривнях словами.

        *   ``ram:ContentCode.listAgencyID`` – ``associatedInvoiceAmount_text`` (дефолт);
        *   ``ram:ContentCode.value`` – текст (рядок);
        *   ``ram:Content`` – код ролі учасника = CZ (дефолт).

    *   **Кількість місць (прописом)** – загальна кількість місць вантажу словами.

        *   ``ram:ContentCode.listAgencyID`` – ``consignmentItemQuantity_text`` (дефолт);
        *   ``ram:ContentCode.value`` – текст (рядок);
        *   ``ram:Content`` – код ролі учасника = ``CZ`` (дефолт).

**XML-example**

.. code:: xml

    <ExchangedDocument> 
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="vatAmount">2332</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="vehicle_length">11.32</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="vehicle_width">3.3</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="vehicle_height">25</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
          	<ram:ContentCode listAgencyID="gross_vehicle_weight_with_cargo">34322</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
          	<ram:ContentCode listAgencyID="consignmentItemQuantity_text">чотири</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="grossWeightMeasure_text">три цілих</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>
        <ram:IncludedNote>
            <ram:ContentCode listAgencyID="associatedInvoiceAmount_text">чотири грн 0 коп</ram:ContentCode>
            <ram:Content>CZ</ram:Content>
        </ram:IncludedNote>

**2.3. Нові поля для блоку "Відомості про вантаж"**

У ТТН додано нові поля для зазначення відомостей про вантаж у блоці **"IncludedSupplyChainConsignmentItem"** в полях: **"Ідентифікаційний номер тварини, від якої отримано сировину"**, 
**"Вид тварини"** та **"Температурний режим транспортування"**.

Поля та правила заповнення:
    *   **"Ідентифікаційний номер тварини, від якої отримано сировину"**:
    
        *   ``ram:ApplicableNote.contentCode`` – ``ANIMAL_ID``;
        *   ``ram:ApplicableNote.content`` – значення.
    
    *   **Вид тварини**:

        *   ``ram:ApplicableNote.contentCode`` – ``ANIMAL_TYPE``;
        *   ``ram:ApplicableNote.content`` – значення.

    *   **"Температурний режим транспортування"**:

        *   Мінімальна температура: 

            *  ``ram:ApplicableNote.contentCode`` – ``TRANSPORTATION_MIN_TEMPERATURE``;
            *  ``ram:ApplicableNote.content`` – значення.

        *   Максимальна температура:

            *  ``ram:ApplicableNote.contentCode`` – ``TRANSPORTATION_MAX_TEMPERATURE``;
            *  ``ram:ApplicableNote.content`` - значення.

**XML-example**

.. code:: xml

    <ram:ApplicableNote>
        <ram:ContentCode>ANIMAL_ID</ram:ContentCode>
        <ram:Content>Ідентифікаційний номер тварини від якої отримано сировину</ram:Content>
    </ram:ApplicableNote>
    <ram:ApplicableNote>
        <ram:ContentCode>ANIMAL_TYPE</ram:ContentCode>
        <ram:Content>Вид тварини </ram:Content>
    </ram:ApplicableNote>
    <ram:ApplicableNote>
        <ram:ContentCode>TRANSPORTATION_MIN_TEMPERATURE</ram:ContentCode>
        <ram:Content>-22</ram:Content>
    </ram:ApplicableNote>
    <ram:ApplicableNote>
        <ram:ContentCode>TRANSPORTATION_MAX_TEMPERATURE</ram:ContentCode>
        <ram:Content>+231</ram:Content>
    </ram:ApplicableNote>

**2.4. Нове поле – "Код УНЗР"**

**УНЗР** (унікальний номер запису в Єдиному державному демографічному реєстрі) – це ідентифікатор, який присвоюється громадянам України під час оформлення ID-картки або закордонного паспорта.
Код УНЗР вноситься до ТТН на рівні блоків **“______TradeParty”** у блоці **“SpecifiedGovernmentRegistration”** для всіх учасників документа та окремо для водія (за наявності).

Поля та правила заповнення:
    *   Для компанії:

        *   **ID** - код УНЗР (якщо є) Формат: ХХХХХХХХ-ХХХХХ;
        *   **TypeCode** – TRADEPARTY_UNZR (дефолтне значення).

    *   Для водія:

        *  **ID** – код УНЗР (якщо є) Формат: ХХХХХХХХ-ХХХХХ;
        *  **TypeCode** – DRIVER_UNZR (дефолтне значення).

**XML-example**

.. code:: xml

    <ram:CarrierTradeParty>
        <ram:ID schemeAgencyID="ЄДРПОУ">AA111111</ram:ID>
        <ram:Name>Мій Вантажовідправник</ram:Name>
        <ram:RoleCode>CA</ram:RoleCode>
        <ram:PostalTradeAddress>
            <ram:PostcodeCode>993564</ram:PostcodeCode>
            <ram:StreetName>вул. Нічна, б. 2</ram:StreetName>
            <ram:CityName>c. Дніпровське</ram:CityName>
            <ram:CountryID>UA</ram:CountryID>
            <ram:CountrySubDivisionName>Чернігівська обл., Чернігівський р-н</ram:CountrySubDivisionName>
        </ram:PostalTradeAddress>
        <ram:SpecifiedGovernmentRegistration>
            <ram:ID>9864065745518</ram:ID>
            <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
        </ram:SpecifiedGovernmentRegistration>
        <ram:SpecifiedGovernmentRegistration>
            <ram:ID>9864065745519</ram:ID>
            <ram:TypeCode>DRIVER_GLN</ram:TypeCode>
        </ram:SpecifiedGovernmentRegistration>
        <ram:SpecifiedGovernmentRegistration>
            <ram:ID>19940112-35121</ram:ID>
            <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
        </ram:SpecifiedGovernmentRegistration>
        <ram:SpecifiedGovernmentRegistration>
            <ram:ID>19940113-35120</ram:ID>
            <ram:TypeCode>DRIVER_UNZR</ram:TypeCode>
        </ram:SpecifiedGovernmentRegistration>
    </ram:CarrierTradeParty>

