##########################################################################################################################
**Акт приймання наданих послуг (DOCINVOICEACT)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/akt-priimannia-nadanix-poslug-docinvoiceact>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Акт приймання наданих послуг (DOCINVOICEACT)

   **XML:**

   .. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <Document-Invoice>
   <Invoice-Header>
      <InvoiceNumber>5670242(4)</InvoiceNumber>
      <InvoiceDate>2020-01-10</InvoiceDate>
      <InvoiceTime>14:14</InvoiceTime>
      <DocumentFunctionCode>O</DocumentFunctionCode>
      <ContractType>HVS1</ContractType>
      <ContractNumber>112/20/365925</ContractNumber>
      <ContractDate>2020-01-09</ContractDate>
   </Invoice-Header>
   <Invoice-References>
      <Invoice/>
      <TaxInvoice>
         <TaxInvoiceNumber>5670542</TaxInvoiceNumber>
         <PromotionDealNumber>MP31</PromotionDealNumber>
         <TaxInvoiceDate>2020-01-10</TaxInvoiceDate>
         <SalesDepartmentNumber>5670541</SalesDepartmentNumber>
         <CorrectionPromotionDealNumber>5670541</CorrectionPromotionDealNumber>
         <CorrectionSalesDepartmentNumber>56705411</CorrectionSalesDepartmentNumber>
         <CorrectionTaxInvoiceNumber>5670541</CorrectionTaxInvoiceNumber>
         <CorrectionTaxInvoiceDate>2020-01-11</CorrectionTaxInvoiceDate>
      </TaxInvoice>
   <ReceivingAdvice>
   <ReceivingAdviceNumber>777_des_3</ReceivingAdviceNumber>
   <ReceivingAdviceDate>2020-01-10</ReceivingAdviceDate>
   <DeliveryDate>2022-07-03</DeliveryDate>
   </ReceivingAdvice>
   </Invoice-References>
   <Invoice-Parties>
      <Buyer>
         <ILN>9864232324065</ILN>
         <CodeBySeller>21554</CodeBySeller>
         <TaxID>9000999909</TaxID>
         <VatPayerCertificate>32049196510</VatPayerCertificate>
         <UtilizationRegisterNumber>0957042</UtilizationRegisterNumber>
         <Name>FELEX TEST Bogdan 2</Name>
         <StreetAndNumber>Юрид адрес</StreetAndNumber>
         <CityName>Троещина</CityName>
         <PostalCode>47298</PostalCode>
         <Country>Україна</Country>
         <PhoneNumber>0990110555</PhoneNumber>
      </Buyer>
      <Seller>
         <ILN>9864232301905</ILN>
         <TaxID>8888866666</TaxID>
         <VatPayerCertificate>320491926510</VatPayerCertificate>
         <UtilizationRegisterNumber>34554363</UtilizationRegisterNumber>
         <Name>FELEX TEST Bogdan</Name>
         <StreetAndNumber>Хорош</StreetAndNumber>
         <CityName>Троещина</CityName>
         <PostalCode>38484</PostalCode>
         <Country>Україна</Country>
         <PhoneNumber>0935855599</PhoneNumber>
         <FinancialInformation>
         <BankIdentifierCode>380805</BankIdentifierCode>
         <BankAccount>26004439987</BankAccount>
         <BankName>АТ Райффайзен Банк Аваль<BankName>
         <IBAN>UA613808050000000026004439987</IBAN>
         </FinancialInformation>
      <ContactInformation>
                  <ContactFunction>Комірник</ContactFunction>
                  <ManagingPerson>Ярослав</ManagingPerson>
                  <ManagingPersonFather>Сергійович</ManagingPersonFather>
                  <PhoneNumber>0951111111</PhoneNumber>
               </ContactInformation>
      </Seller>
   </Invoice-Parties>
   <Invoice-Lines>
      <Line>
         <Line-Item>
         <LineNumber>1</LineNumber>
         <EAN>147258369</EAN>
         <SupplierItemCode>11111111</SupplierItemCode>
         <ExternalItemCode>3333333333</ExternalItemCode>         
         <ServiceName>Послуги зі стимулювання підвищених обсягів продажу товарів Постачальника</ServiceName>
         <UnitOfMeasure>грн</UnitOfMeasure>
         <UnitNetPrice>1001.0</UnitNetPrice>
         <UnitGrossPrice>1201.2</UnitGrossPrice>
         <TaxRate>20</TaxRate>
         <TaxCategoryCode>S</TaxCategoryCode>
         <GrossAmount>1201.2</GrossAmount>
         <TaxAmount>2002.0</TaxAmount>
         <NetAmount>1001.0</NetAmount>
         </Line-Item>
      </Line>
   </Invoice-Lines>
   <Invoice-Summary>
      <TotalLines>1</TotalLines>
      <TotalNetAmount>1001.0</TotalNetAmount>
      <TotalTaxAmount>200.2</TotalTaxAmount>
      <TotalGrossAmount>1201.2</TotalGrossAmount>
   </Invoice-Summary>
   </Document-Invoice>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1134972309&single=true" width="1100" height="2400" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	Document-Invoice			Початок документа
   1	Invoice-Header	M		Заголовна частина (початок блоку)
   1.1	InvoiceNumber	M	Рядок(35)	Номер документа
   1.2	InvoiceDate	M	yyyy-MM-dd	Дата документа
   1.3	InvoiceTime	O	HH:mm	Час документа
   1.4	DocumentFunctionCode	M	O» | «C	Функціональний код документа; допустимі значення: «O» - оригінал, «C» - коригування
   1.5	ContractType	M	Рядок(70)	Тип контракту
   1.6	ContractNumber	M	Рядок(70)	Номер контракту
   1.7	ContractDate	O	yyyy-MM-dd	Дата контракту
   2	Invoice-References	O		Виноски з рахунку (початок блоку)
   2.1	Invoice	O		Рахунок (початок блоку)
   2.1.1	OriginalInvoiceNumber	O	Рядок(70)	Номер оригінального рахунку
   2.1.2	OriginalInvoiceDate	O	yyyy-MM-dd	Дата оригінального рахунку
   2.2	TaxInvoice	O		Податки (початок блоку)
   2.2.1	TaxInvoiceNumber	M	Рядок(70)	Номер податкової накладної
   2.2.2	PromotionDealNumber	O	Рядок(70)	Номер угоди
   2.2.3	SalesDepartmentNumber	O	Рядок(70)	Номер відділу продажу
   2.2.4	TaxInvoiceDate	M	yyyy-MM-dd	Дата податкової накладної
   2.2.5	CorrectionTaxInvoiceNumber	O	Рядок(70)	Номер коригувальної податкової накладної
   2.2.6	CorrectionPromotionDealNumber	O	Рядок(70)	Номер коригованої угоди
   2.2.7	CorrectionSalesDepartmentNumber	O	Рядок(70)	Коригований номер відділу продажу
   2.2.8	CorrectionTaxInvoiceDate	O	yyyy-MM-dd	Номер коригованої податкової накладної
   2.3	ReceivingAdvice	O		Отримане рішення (початок блоку)
   2.3.1	ReceivingAdviceNumber	O	Рядок(70)	Номер отриманого рішення
   2.3.2	ReceivingAdviceDate	O	yyyy-MM-dd	Дата отриманого рішення
   2.3.3	DeliveryDate	O	yyyy-MM-dd	Дата отримання
   3	Invoice-Parties	M		Контрагенти (початок блоку)
   3.1	Buyer	M		Покупець (початок блоку)
   3.1.1	ILN	M	[0-9](13)	GLN Покупця
   3.1.2	CodeBySeller	M	Рядок(35)	Код Покупця від Покупця
   3.1.3	TaxID	O	Рядок(70)	Податковий ідентифікатор Покупця
   3.1.4	Name	M	Рядок(175)	Назва Покупця
   3.1.5	StreetAndNumber	O	Рядок(140)	Назва вулиці та номер будинку Покупця
   3.1.6	CityName	O	Рядок(35)	Назва міста Покупця
   3.1.7	PostalCode	O	Рядок(17)	Поштовий індекс Покупця
   3.1.8	Country	O	Рядок(10)	Країна Покупця (згідно ISO 3166)
   3.1.9	VatPayerCertificate	O	Рядок(70)	Свідоцтво платника Покупця
   3.1.10	UtilizationRegisterNumber	M	Рядок(70)	NIP Покупця
   3.1.11	FinancialInformation	O		Фінансова інформація (початок блоку)
   3.1.11.1	BankIdentifierCode	O	Рядок(11)	Ідентифікаційний код банку Покупця
   3.1.11.2	BankAccount	O	Рядок(17)	Банківський рахунок Покупця
   3.1.11.3	BankName	O	Рядок(70)	Назва банку Покупця
   3.1.11.4	IBAN	O	Рядок(35)	IBAN Покупця
   3.1.12	ContactInformation	O		Контакти (початок блоку)
   3.1.12.1	ContactFunction	O	Рядок(512)	Контакт Покупця
   3.1.12.2	ManagingPerson	O	Рядок(17)	Менеджер Покупця
   3.1.12.3	ManagingPersonFather	O	Рядок(35)	По батькові менеджера Покупця
   3.1.12.4	PhoneNumber	O	Рядок(512)	Номер телефону Покупця
   3.2	Seller	M		Продавець (початок блоку)
   3.2.1	ILN	M	[0-9](13)	GLN Продавця
   3.2.2	TaxID	M	Рядок(70)	Податковий ідентифікатор Продавця
   3.2.3	Name	M	Рядок(175)	Назва Продавця
   3.2.4	StreetAndNumber	M	Рядок(140)	Назва вулиці та номер будівлі Продавця
   3.2.5	CityName	M	Рядок(35)	Назва міста Продавця
   3.2.6	PostalCode	M	Рядок(17)	Поштовий індекс Продавця
   3.2.7	Country	M	Рядок(10)	Країна Продавця (згідно ISO 3166)
   3.2.8	VatPayerCertificate	M	Рядок(70)	Свідоцтво платника Продавця
   3.2.9	UtilizationRegisterNumber	M	Рядок(70)	NIP Продавця
   3.2.10	FinancialInformation	O		Фінансова інформація (початок блоку)
   3.2.10.1	BankIdentifierCode	M	Рядок(11)	Ідентифікаційний код банку Продавця
   3.2.10.2	BankAccount	M	Рядок(17)	Банківський рахунок Продавця
   3.2.10.3	BankName	M	Рядок(70)	Назва банку Продавця
   3.2.10.4	IBAN	O	Рядок(35)	IBAN Продавця
   3.2.11	ContactInformation	O		Контакти (початок блоку)
   3.2.11.1	ContactFunction	O	Рядок(512)	Контакт Продавця
   3.2.11.2	ManagingPerson	O	Рядок(17)	Менеджер Продавця
   3.2.11.3	ManagingPersonFather	O	Рядок(35)	По батькові менеджера Продавця
   3.2.11.4	PhoneNumber	O	Рядок(512)	Номер телефону Продавця
   3.2.12	IBAN	O	"UA + NN + 351005 + XXXXXXXXXXXXXXXXXXX
   UA — (2 літери) — код країни (ГОСТ ISO 3166-1);
   NN — (2 цифри) — контрольне число;
   351005 — (6 цифр) — МФО;
   XXX…XXX — (19 цифр) — рахунок клієнта."	IBAN (міжнародний номер банківського рахунку; використовується при міжнародних розрахунках)
   4	Invoice-Lines	O		Таблична частина (початок блоку)
   4.1	Line	O		Рядок (початок блоку)
   4.1.1	Line-Item	M		Пункт в рядку (початок блоку)
   4.1.1.1	LineNumber	M	Число	Номер рядка
   4.1.1.2	EAN	O	[0-9](14)	EAN
   4.1.1.3	BuyerItemCode	O	Рядок(35)	Код товару Покупця
   4.1.1.4	SupplierItemCode	O	Рядок(35)	Код товару Постачальника
   4.1.1.5	ExternalItemCode	O	Рядок(35)	Зовнішній код товару
   4.1.1.6	PlaceOfWork	O	Рядок(256)	Місце роботи
   4.1.1.7	ServiceName	M	Рядок(512)	Назва послуги
   4.1.1.8	DeclaredQuantity	O	Число десяткове(2)	Задекларована кількість
   4.1.1.9	UnitOfMeasure	O	Рядок(3)	Одиниця виміру
   4.1.1.10	UnitNetPrice	O	Число десяткове(3)	Одинична ціна нетто
   4.1.1.11	UnitGrossPrice	O	Число десяткове(3)	Одинична валова ціна
   4.1.1.12	TaxRate	O	Число десяткове(2)	Ставка податку
   4.1.1.13	TaxCategoryCode	O	Рядок(3)	Код податкової категорії
   4.1.1.14	NetAmount	M	Число десяткове(3)	Чиста сума
   4.1.1.15	GrossAmount	M	Число десяткове(3)	Валова сума
   4.1.1.16	TaxAmount	M	Число десяткове(3)	Сума податку
   5	Invoice-Summary	O		Всього (початок блоку)
   5.1	TotalLines	M	Число	Всього рядків
   5.2	TotalAmountDue	O	Число десяткове(2)	Загальна сума до сплати
   5.3	TotalNetAmount	M	Число десяткове(3)	Загальна чиста сума
   5.4	TotalGrossAmount	M	Число десяткове(3)	Загальна валова сума
   5.5	TotalTaxAmount	M	Число десяткове(3)	Загальна сума податку
   5.6	Tax-Summary	O		Податків загалом (початок блоку)
   5.6.1	Tax-Summary-Line	O		Податків в позиції (початок блоку)
   5.6.1.1	TaxRate	O	Число десяткове(2)	Ставка податку
   5.6.1.2	TaxCategoryCode	O	Рядок(3)	Код податкової категорії
   5.6.1.3	TaxAmount	O	Число десяткове(3)	Сума податку
   5.6.1.4	TaxableAmount	O	Число десяткове(3)	Податкова сума
   5.6.1.5	GrossAmount	O	Число десяткове(3)	Валова сума
