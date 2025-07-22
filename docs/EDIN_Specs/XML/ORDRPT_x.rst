##########################################################################################################################
**Повідомлення про штрафні санкції (ORDRPT)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/povidomlennia-pro-strafni-sankciyi-ordrpt>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Повідомлення про штрафні санкції (ORDRPT)

   **XML:**

   .. code:: xml

   <?xml version="1.0"?>
   <Document-OrdersReport>
         <OrdersReport-Header>
            <OrdersReportNumber>5670241</OrdersReportNumber>
            <OrdersReportDate>2020-01-09</OrdersReportDate>
            <OrdersReportTime>14:14</OrdersReportTime>
            <DocumentFunctionCode>C</DocumentFunctionCode>
            <ContractType>PDEF</ContractType>
            <ContractNumber>112/20/365924</ContractNumber>
            <ContractDate>2020-01-09</ContractDate>
         </OrdersReport-Header>
         <OrdersReport-Parties>
            <Buyer>
               <ILN>4824000000349</ILN>
               <CodeBySeller>20054</CodeBySeller>
               <TaxID>320491926511</TaxID>
               <UtilizationRegisterNumber>32000576</UtilizationRegisterNumber>
               <Name>ПЛЮС ТОВ</Name>
               <StreetAndNumber>стрит</StreetAndNumber>
                  <CityName>м. Київ</CityName>
                  <PostalCode>02140</PostalCode>
               <Country>Україна</Country>
               <PhoneNumber>0444922100</PhoneNumber>
               <VatPayerCertificate>320400026511</VatPayerCertificate>
            </Buyer>
            <Seller>
               <ILN>4820000030009</ILN>
               <TaxID>100000847</TaxID>
               <UtilizationRegisterNumber>32000199</UtilizationRegisterNumber>
               <Name>ТОВ "МЕТРО КЕШ ЕНД КЕРІ УКРАЇНА"</Name>
               <StreetAndNumber>пр-т Петра Григоренка, 43</StreetAndNumber>
               <CityName>м.Київ</CityName>
               <PostalCode>02140</PostalCode>
               <Country>Україна</Country>
               <PhoneNumber>0444922101</PhoneNumber>
               <VatPayerCertificate>320400026510</VatPayerCertificate>
               <FinancialInformation>
                  <BankIdentifierCode>380005</BankIdentifierCode>
                  <BankAccount>26000039987</BankAccount>
                  <BankName>АТ "Райффайзен Банк Аваль"</BankName>
                  <IBAN>UA613808050000000000004439987</IBAN>
               </FinancialInformation>
               <ContactInformation>
                  <ContactFunction>Комірник</ContactFunction>
                  <ManagingPerson>Ярослав</ManagingPerson>
                  <ManagingPersonFather>Сергійович</ManagingPersonFather>
                  <PhoneNumber>0951111111</PhoneNumber>
               </ContactInformation>
            </Seller>
         </OrdersReport-Parties>
         <OrdersReport-Lines>
            <Line>
               <Line-Item>
                  <LineNumber>1</LineNumber>
                  <ItemDescription>Штрафні санкції, що застосовуються до Постачальника за порушення умов Договору</ItemDescription>
                  <PenaltyAmount>90.11</PenaltyAmount>
               </Line-Item>
            </Line>
         </OrdersReport-Lines>
         <OrdersReport-Summary>
            <TotalLines>1</TotalLines>
            <TotalPenaltyAmount>90.11</TotalPenaltyAmount>
         </OrdersReport-Summary>
      </Document-OrdersReport>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1948051215&single=true" width="1100" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </embed>

   -------------------------

   .. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

   .. [#] елементи структури мають наступний вигляд:

   * параметрЗіЗначенням;
   * **об'єктЗПараметрами**;
   * :orange:`масивОб'єктів`;
   * жовтим фоном виділяються комірки, в яких відбувались останні зміни

.. data from table (remember to renew time to time)

.. raw:: html

   <!-- <div>I	Document-OrdersReport	M		Початок документа
   1	OrdersReport-Header	M		Заголовна частина (початок блоку)
   1.1	OrdersReportNumber	M	Рядок(35)	Номер документа
   1.2	OrdersReportDate	M	YYYY-MM-DD	Дата документа
   1.3	OrdersReportTime	O	hh:mm	Час документа
   1.4	DocumentFunctionCode	O	Рядок(3)	Функціональний код документа; допустимі значення: «O» - оригінал, «C» - коригування
   1.5	ContractType	M	Рядок(70)	Тип контракту
   1.6	ContractNumber	M	Рядок(70)	Номер контракту
   1.7	ContractDate	O	YYYY-MM-DD	Дата контракту
   2	OrdersReport-Parties	M		Контрагенти (початок блоку)
   2.1	Buyer	M		Покупець (початок блоку)
   2.1.1	ILN	M	Рядок(13)	GLN Покупця
   2.1.2	CodeBySeller	M	Рядок(35)	Код Покупця від Продавця
   2.1.3	TaxID	O	Рядок(35)	Податковий ідентифікатор Покупця
   2.1.4	UtilizationRegisterNumber	M	Рядок(35)	NIP Покупця
   2.1.5	Name	M	Рядок(175)	Назва Покупця
   2.1.6	StreetAndNumber	O	Рядок(175)	Назва вулиці та номер будівлі Покупця
   2.1.7	CityName	O	Рядок(35)	Назва міста Покупця
   2.1.8	PostalCode	O	Рядок(9)	Поштовий індекс Покупця
   2.1.9	Country	O	Рядок(3)	Країна Покупця (згідно ISO 3166)
   2.1.10	PhoneNumber	O	Рядок(35)	Номер телефону Покупця
   2.1.11	VatPayerCertificate	O	Рядок(70)	Свідоцтво платника Покупця
   2.2	Seller	M		Продавець (початок блоку)
   2.2.1	ILN	M	Рядок(13)	GLN Продавця
   2.2.2	TaxID	M	Рядок(35)	Податковий ідентифікатор Продавця
   2.2.3	UtilizationRegisterNumber	M	Рядок(35)	NIP Продавця
   2.2.4	Name	M	Рядок(175)	Назва Продавця
   2.2.5	StreetAndNumber	O	Рядок(175)	Назва вулиці та номер будівлі Продавця
   2.2.6	CityName	M	Рядок(35)	Назва міста Продавця
   2.2.7	PostalCode	M	Рядок(9)	Поштовий індекс Продавця
   2.2.8	Country	M	Рядок(3)	Країна Продавця (згідно ISO 3166)
   2.2.9	PhoneNumber	O	Рядок(35)	Номер телефону Продавця
   2.2.10	VatPayerCertificate	O	Рядок(70)	Свідоцтво платника Продавця
   2.2.11	FinancialInformation	O		Фінансова інформація (початок блоку)
   2.2.11.1	BankIdentifierCode	M	Рядок(11)	Ідентифікаційний код банку Продавця
   2.2.11.2	BankAccount	M	Рядок(17)	Банківський рахунок Продавця
   2.2.11.3	BankName	M	Рядок(70)	Назва банку Продавця
   2.2.11.4	IBAN	O	Рядок(35)	IBAN Продавця
   2.2.12	ContactInformation	O		Контакти (початок блоку)
   2.2.12.1	ContactFunction	O	Рядок(512)	Контакт Продавця
   2.2.12.2	ManagingPerson	O	Рядок(17)	Менеджер Продавця
   2.2.12.3	ManagingPersonFather	O	Рядок(35)	По батькові менеджера Продавця
   2.2.12.4	PhoneNumber	O	Рядок(512)	Номер телефону Продавця
   3	OrdersReport-Lines	M		Таблична частина (початок блоку)
   3.1	Line	M		Рядок (початок блоку)
   3.1.1	Line-Item	M		Пункт в рядку (початок блоку)
   3.1.1.1	LineNumber	M	[0-9](5)	Номер рядка
   3.1.1.2	ItemDescription	O	Рядок(256)	Опис пункту (товару)
   3.1.1.3	PenaltyAmount	M	Число десяткове(2)	Сума штрафу
   4	OrdersReport-Summary	M		Всього (початок блоку)
   4.1	TotalLines	M	[0-9](5)	Всього рядків
   4.2	TotalPenaltyAmount	M	Число десяткове(2)	Загальна сума штрафу
