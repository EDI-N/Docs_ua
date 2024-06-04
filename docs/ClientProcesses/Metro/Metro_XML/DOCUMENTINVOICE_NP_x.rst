##########################################################################################################################
**Накладна на повернення (DOCUMENTINVOICE_NP)**
##########################################################################################################################

.. epigraph::

   DOCUMENTINVOICE з DocumentFunctionCode=NP - Накладна на повернення. Мережа "МЕТРО" відправляє документ своїм Постачальникам

**XML:**

.. code:: xml

  <Document-Invoice>
    <Invoice-Header>
      <InvoiceNumber>1233_ftp_3</InvoiceNumber>
      <InvoiceDate>2023-09-12</InvoiceDate>
      <InvoiceCurrency>UAH</InvoiceCurrency>
      <InvoicePostDate>2023-08-30</InvoicePostDate>
      <InvoicePostTime>14:49</InvoicePostTime>
      <DocumentFunctionCode>NP</DocumentFunctionCode>
      <ContractNumber>13117117</ContractNumber>
      <ContractDate>2023-08-30</ContractDate>
      <InvoiceDateInWords>30 серпня 2023 р.</InvoiceDateInWords>
      <CashRegisterNumber>39</CashRegisterNumber>
      <InternalClientNumber>13117117</InternalClientNumber>
      <AdditionalNumber>242002</AdditionalNumber>
      <InvoicePaymentMeans>Картка</InvoicePaymentMeans>
    </Invoice-Header>
    <Invoice-Reference>
      <TaxInvoice>
        <TaxInvoiceNumber>1639002</TaxInvoiceNumber>
        <TaxInvoiceDate>2023-08-30</TaxInvoiceDate>
      </TaxInvoice>
      <DeliveryNote>
        <DeliveryNoteNumber>1608089</DeliveryNoteNumber>
        <DeliveryNoteDate>2023-08-30</DeliveryNoteDate>
      </DeliveryNote>
    </Invoice-Reference>
    <Invoice-Parties>
      <Buyer>
        <ILN>4820086630009</ILN>
        <TaxID>12345670</TaxID>
        <UtilizationRegisterNumber>12345670</UtilizationRegisterNumber>
        <Name>ТОВ &quot;МЕТРО КЕШ ЕНД КЕРІ УКРАЇНА&quot;</Name>
      </Buyer>
      <Seller>
        <ILN>9864065732181</ILN>
        <TaxID>1010101016</TaxID>
        <UtilizationRegisterNumber>34554363</UtilizationRegisterNumber>
        <Name>FelEx_1</Name>
        <IBAN>UA903052992990004149123456789</IBAN>
      </Seller>
      <DeliveryPoint>
        <ILN>9991027227536</ILN>
        <DeliveryPlace>13117117</DeliveryPlace>
      </DeliveryPoint>
      <Invoicee>
        <ILN>9991027227536</ILN>
      </Invoicee>
      <Payer>
        <ILN>9991027227536</ILN>
      </Payer>
      <SellerHeadquarters>
        <ILN>4820086639941</ILN>
        <StreetAndNumber>ПРОСПЕКТ СТЕПАНА БАНДЕРИ, 26-В (літера Б)</StreetAndNumber>
        <CityName>КИЇВ</CityName>
        <PostalCode>04073</PostalCode>
        <PhoneNumber>0800501401</PhoneNumber>
      </SellerHeadquarters>
    </Invoice-Parties>
    <Invoice-Lines>
      <Line>
        <Line-Item>
          <LineNumber>1</LineNumber>
          <EAN>23141060</EAN>
          <BuyerItemCode>314106</BuyerItemCode>
          <SupplierItemCode>314106</SupplierItemCode>
          <ExternalItemCode>2106909200</ExternalItemCode>
          <ItemDescription>314106 : ОРБІТ БІЛОСНІЖНИЙ 14Г .</ItemDescription>
          <InvoiceQuantity>-1.000</InvoiceQuantity>
          <UnitOfMeasure>PCE</UnitOfMeasure>
          <InvoiceUnitNetPrice>11.33</InvoiceUnitNetPrice>
          <TaxRate>20.00</TaxRate>
          <TaxCategoryCode>S</TaxCategoryCode>
          <TaxAmount>-2.27</TaxAmount>
          <NetAmount>-11.33</NetAmount>
        </Line-Item>
      </Line>
    </Invoice-Lines>
    <Invoice-Summary>
      <TotalLines>1</TotalLines>
      <TotalNetAmount>-30.58</TotalNetAmount>
      <TotalTaxAmount>-6.12</TotalTaxAmount>
      <TotalGrossAmount>-36.70</TotalGrossAmount>
      <Tax-Summary>
        <Tax-Summary-Line>
          <TaxRate>20.00</TaxRate>
          <TaxCategoryCode>S</TaxCategoryCode>
          <TaxAmount>-6.12</TaxAmount>
          <TaxableAmount>-30.58</TaxableAmount>
          <ExciseDuty>0.00</ExciseDuty>
        </Tax-Summary-Line>
      </Tax-Summary>
      <TotalNames>1</TotalNames>
      <TotalExciseDuty>0.00</TotalExciseDuty>
      <TotalCashAmount>0.00</TotalCashAmount>
      <TotalBankAmount>-36.70</TotalBankAmount>
      <TotalAmountInWords>-Тридцять шість гривень 70 копійок</TotalAmountInWords>
    </Invoice-Summary>
  </Document-Invoice>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSG5z6gx6Kf4a5Fd_I8DBiokLiB4Ozyk-5h9rfq9CNPn-vTduTN-kOpxuL7h2VIXg/pubhtml?gid=1518454307&single=true" width="1100" height="2700" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   1	Invoice-Header	М		Заголовна частина
   1.1	InvoiceNumber	М	Рядок (35)	Номер документа
   1.2	InvoiceDate	М	Дата (РРРР-ММ-ДД)	Дата документа
   1.3	InvoiceDateInWords	O	Рядок (175)	Дата накладної словами
   1.4	InvoiceCurrency	М	Рядок (3)	Валюта
   1.5	InvoicePostDate	O	Дата (РРРР-ММ-ДД)	Дата відправки накладної
   1.6	InvoicePostTime	O	Час (год: хв)	Час відправки накладної
   1.7	DocumentFunctionCode	М	NP	"Код типу документа:
   NP - Накладна на повернення"
   1.8	ContractNumber	О	Рядок (70)	Номер контракту
   1.9	ContractDate	М	Дата (РРРР-ММ-ДД)	Дата контракту
   1.10	CashRegisterNumber	О	Рядок (35)	Номер каси
   1.11	InternalClientNumber	О	Рядок (35)	Внутрішній номер клієнта
   1.12	AdditionalNumber	О	Рядок (35)	Додатковий номер
   1.13	InvoicePaymentMeans	О	Рядок (35)	Засіб оплати
   2	Invoice-Reference			Підстава (початок блоку)
   2.1	TaxInvoice	М		Податкова накладна (початок блоку)
   2.1.1	TaxInvoiceNumber	М	Рядок (35)	номер податкової накладної
   2.1.2	TaxInvoiceDate	М	Дата (РРРР-ММ-ДД)	дата податкової накладної (повинна збігатися з датою товарною накладною)
   2.2	DeliveryNote	М		Повідомлення про доставку (початок блоку)
   2.2.1	DeliveryNoteNumber	М	Рядок (35)	Номер документа-підстави
   2.2.2	DeliveryNoteDate	М	Дата (РРРР-ММ-ДД)	Дата складання документа
   3	Invoice-Parties			Блок контрагентів (початок)
   3.1	Buyer			Блок покупця (початок)
   3.1.1	ILN	М	Число (13)	GLN покупця
   3.1.2	TaxID	М	Число (12)	Податковий ідентифікаційний номер покупця
   3.1.3	UtilizationRegisterNumber	М	Число(8,10)	ЄДРПОУ покупця
   3.1.4	Name	М	Рядок (175)	назва покупця
   3.1.5	StreetAndNumber	М	Рядок (35)	вулиця і номер будинку покупця
   3.1.6	CityName	М	Рядок (35)	місто покупця
   3.1.7	PostalCode	М	Рядок (9)	поштовий код покупця
   3.1.8	Country	O	Рядок (3)	код країни покупця (код ISO 3166)
   3.1.9	PhoneNumber	М	Рядок (35)	телефон покупця
   3.2	Seller			Блок продавця (початок)
   3.2.1	ILN	М	Число (13)	GLN продавця
   3.2.2	TaxID	М	Число (12)	Податковий ідентифікаційний номер продавця
   3.2.3	CodeByBuyer	М	Рядок (35)	номер договору на поставку
   3.2.4	UtilizationRegisterNumber	М	Число(8,10)	ЄДРПОУ продавця
   3.2.5	Name	М	Рядок (175)	назва продавця
   3.2.6	StreetAndNumber	М	Рядок (140)	вулиця і номер будинку продавця
   3.2.7	CityName	М	Рядок (35)	місто продавця
   3.2.8	PostalCode	М	Рядок (9)	поштовий код продавця
   3.2.9	Country	O	Рядок (3)	код країни продавця (код ISO 3166)
   3.2.10	PhoneNumber	М	Рядок (35)	телефон продавця
   3.2.11	IBAN	O	"UA + NN + 351005 + XXXXXXXXXXXXXXXXXXX
   UA — (2 літери) — код країни (ГОСТ ISO 3166-1);
   NN — (2 цифри) — контрольне число;
   351005 — (6 цифр) — МФО;
   XXX…XXX — (19 цифр) — рахунок клієнта."	IBAN (міжнародний номер банківського рахунку; використовується при міжнародних розрахунках)
   3.3	SellerHeadquarters	O		Блок головного офісу (початок)
   3.3.1	ILN	O	Число (13)	GLN головного офісу
   3.3.2	LocationNumber	O	Рядок (175)	Назва локації головного офісу
   3.3.3	StreetAndNumber	O	Рядок (175)	Вулиця і номер будинку
   3.3.4	CityName	O	Рядок (35)	Місто
   3.3.5	PostalCode	O	Рядок (9)	Поштовий код
   3.3.6	PhoneNumber	O	Рядок (35)	Телефон
   3.4	DeliveryPoint	M		Точка доставки (початок)
   3.4.1	ILN	М	Число (13)	GLN точки доставки (МЕТРО)
   3.5	Invoicee			Рахунок (початок блоку)
   3.5.1	ILN	M	Число (13)	GLN для виставлення рахунку
   3.6	Payer			Платник (початок блоку)
   3.6.1	ILN	M	Число (13)	GLN платника
   4	Invoice-Lines	O		Рядки (початок блоку)
   4.1	Line	O		Рядок (початок блоку)
   4.1.1	Line-Item	M		Позиція (початок блоку)
   4.1.1.1	LineNumber	М	Ціле число	номер позиції в табличній частині
   4.1.1.2	EAN	М	Число (14)	Штрих-код продукту
   4.1.1.3	BuyerItemCode	M	Рядок (16)	Артикул в БД покупця
   4.1.1.4	SupplierItemCode	M	Рядок (16)	Артикул постачальника
   4.1.1.5	ExternalItemCode	M	Рядок (4-10)	код товару згідно з довідника УКТ ЗЕД
   4.1.1.6	ItemDescription	М	Рядок (210)	Опис товару
   4.1.1.7	InvoiceQuantity	M	Число позитивне	Замовлена ​​кількість (кількість товару за накладною)
   4.1.1.8	UnitOfMeasure	О	Рядок (3)	Одиниці виміру
   4.1.1.9	InvoiceUnitNetPrice	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Ціна однієї одиниці без ПДВ
   4.1.1.10	TaxRate	M	20/19/16/14/7/2/0	Ставка ПДВ (20%, 19%, 16%, 14%, 7%, 2%, 0%)
   4.1.1.11	TaxCategoryCode	O	S / E / Z	"Код категорії податку:
   S - стандартний податок; можливі значення TaxRate: 20/19/16/14/7/2 (інакше помилка)
   
   E - звільнений від сплати податку; можливі значення TaxRate=0 (інакше помилка)
   
   Z - нульова ставка (0%); можливі значення TaxRate=0 (інакше помилка)"
   4.1.1.12	TaxAmount	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Сума ПДВ по артикулу = сума сум без ПДВ по артикулах * ставку (округляється до 2 знаків)
   4.1.1.13	NetAmount	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Всього без ПДВ (обчислюється)
   5	Invoice-Summary			Підсумки (початок блоку)
   5.1	TotalLines	M	Ціле число	Кількість рядків в документі
   5.2	TotalNames	M	Ціле число	Всього найменувань
   5.3	TotalNetAmount	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Загальна сума без ПДВ
   5.4	TotalTaxAmount	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Сума ПДВ
   5.5	TotalGrossAmount	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Загальна сума з ПДВ
   5.6	TotalExciseDuty	O	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Загальна сума акцизного податку
   5.7	TotalCashAmount	O	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Загальна сума готівки
   5.8	TotalBankAmount	O	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Загальна сума банку
   5.9	TotalAmountInWords	O	Рядок (175)	Загальна сума словами
   5.10	Tax-Summary			Податки (початок блоку)
   5.10.1	Tax-Summary-Line	M		Рядок податків (початок блоку)
   5.10.1.1	TaxRate	M	20/19/16/14/7/2/0	Ставка ПДВ (20%, 19%, 16%, 14%, 7%, 2%, 0%)
   5.10.1.2	TaxCategoryCode	O	S / E / Z	"Код категорії податку:
   S - стандартний податок; можливі значення TaxRate: 20/19/16/14/7/2 (інакше помилка)
   
   E - звільнений від сплати податку; можливі значення TaxRate=0 (інакше помилка)
   
   Z - нульова ставка (0%); можливі значення TaxRate=0 (інакше помилка)"
   5.10.1.3	TaxAmount	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Сума податку для кожної категорії податку
   5.10.1.4	TaxableAmount	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Оподаткована сума за обраною категорією податку
   5.10.1.5	ExciseDuty	O	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Акцизний податок
