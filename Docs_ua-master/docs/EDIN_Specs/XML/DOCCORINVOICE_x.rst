##########################################################################################################################
**Коригування до товарної накладної (DOCCORINVOICE)**
##########################################################################################################################

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <Document-Invoice>
   <Invoice-Header>
   <InvoiceNumber>TEST1</InvoiceNumber>
   <InvoiceDate>2023-04-01</InvoiceDate>
   <InvoiceCurrency>UAH</InvoiceCurrency>
   <InvoicePostDate>2020-01-10</InvoicePostDate>
   <InvoicePostTime>14:14</InvoicePostTime>
   <DocumentFunctionCode>CVN</DocumentFunctionCode>
   <ContractNumber>12312564</ContractNumber>
   <ContractDate>2023-04-25</ContractDate>
   <CorrectionReason>NAC</CorrectionReason>
   </Invoice-Header>
   <Invoice-Reference>
   <Order>
   <BuyerOrderNumber>ftp_3037_1</BuyerOrderNumber>
   <BuyerOrderDate>2022-09-08</BuyerOrderDate>
   </Order>
   <TaxInvoice>
   <TaxInvoiceNumber>5670542</TaxInvoiceNumber>
   <TaxInvoiceDate>2020-01-10</TaxInvoiceDate>
   <CorrectionTaxInvoiceNumber>5670541</CorrectionTaxInvoiceNumber>
   <CorrectionTaxInvoiceDate>2020-01-11</CorrectionTaxInvoiceDate>
   </TaxInvoice>
   <DespatchAdvice>
   <DespatchAdviceNumber>2936_des_1</DespatchAdviceNumber>
   </DespatchAdvice>
   <ReceivingAdvice>
   <ReceivingAdviceNumber>777_des_3</ReceivingAdviceNumber>
   <DeliveryDate>2022-07-03</DeliveryDate>
   </ReceivingAdvice>
   <DeliveryNote>
   <DeliveryNoteNumber>ftp_3037_1</DeliveryNoteNumber>
   <DeliveryNoteDate>2022-09-08</DeliveryNoteDate>
   </DeliveryNote>
   </Invoice-Reference>
   <Invoice-Parties>
   <Buyer>
   <ILN>9864232324065</ILN>
   <TaxID>9000999909</TaxID>
   <VatPayerCertificate>32049196510</VatPayerCertificate>
   <UtilizationRegisterNumber>0957042</UtilizationRegisterNumber>
   <Name>FELEX TEST Bogdan 2</Name>
   <StreetAndNumber>Юр адреса</StreetAndNumber>
   <CityName>Kiev</CityName>
   <PostalCode>47298</PostalCode>
   <Country>UA</Country>
   <PhoneNumber>0990110555</PhoneNumber>
   </Buyer>
   <Seller>
   <ILN>9864065732181</ILN>
   <CodeByBuyer>215547</CodeByBuyer>
   <UtilizationRegisterNumber>34554362</UtilizationRegisterNumber>
   <Name>Епіцентр</Name>
   <StreetAndNumber>ул Улица</StreetAndNumber>
   <CityName>г Городок</CityName>
   <PostalCode>102030</PostalCode>
   <PhoneNumber>380000000000</PhoneNumber>
   <IBAN>UA613808050000000026004439987</IBAN>
   </Seller>
   <DeliveryPoint>
   <ILN>9864066866014</ILN>
   <Name>Епіцентр</Name>
   <DeliveryPlace>г Городок</DeliveryPlace>
   </DeliveryPoint>
   <Invoicee>
   <ILN>9864065732231</ILN>
   </Invoicee>
   <Payer>
   <ILN>9864065732211</ILN>
   </Payer>
   </Invoice-Parties>
   <Invoice-Lines>
   <Line>
   <Line-Item>
   <LineNumber>1</LineNumber>
   <EAN>1472583690147</EAN>
   <BuyerItemCode>11111111</BuyerItemCode>
   <ExternalItemCode>3333333333</ExternalItemCode>
   <ItemDescription>drink1</ItemDescription>
   <InvoiceQuantity>3.00/InvoiceQuantity>
   <BuyerUnitOfMeasure>шт</BuyerUnitOfMeasure>
   <InvoiceUnitNetPrice>456.00</InvoiceUnitNetPrice>
   <TaxRate>7</TaxRate>
   <TaxCategoryCode>S</TaxCategoryCode>
   <TaxAmount>95.76</TaxAmount>
   <NetAmount>1368.00</NetAmount>
   <CorrectionInvoiceQuantity>-1</CorrectionInvoiceQuantity>
   <CorrectionNetAmount>-456.00</CorrectionNetAmount>
   <CorrectionTaxAmount>-31.92</CorrectionTaxAmount>
   <CorrectionGrossAmount>-487.92</CorrectionGrossAmount>
   <AcceptedInvoiceQuantity>2.00</AcceptedInvoiceQuantity>
   </Line-Item>
   </Line>
   </Invoice-Lines>
   <Invoice-Summary>
   <TotalLines>1</TotalLines>
   <TotalNetAmount>1001.0</TotalNetAmount>
   <TotalTaxAmount>200.2</TotalTaxAmount>
   <TotalGrossAmount>1201.2</TotalGrossAmount>
   <Tax-Summary>
   <Tax-Summary-Line>
   <TaxAmount>200.2</TaxAmount>
   <TaxableAmount>200.5</TaxableAmount>
   <CorrectionTaxAmount>-31.92</CorrectionTaxAmount>
   <CorrectionTaxableAmount>-456.00</CorrectionTaxableAmount>
   <CorrectionGrossAmount>-487.92</CorrectionGrossAmount>
   </Tax-Summary-Line>
   </Tax-Summary>
   </Invoice-Summary>
   </Document-Invoice>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=780785696&single=true" width="1100" height="2600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   1	Invoice-Header	М		Початок основного блоку
   1.1	InvoiceNumber	М	Число (15)	номер ТН
   1.2	InvoiceDate	М	Дата (РРРР-ММ-ДД)	дата ТН
   1.3	InvoiceCurrency	М	Рядок (3)	валюта
   1.4	InvoicePostDate	O	Дата (РРРР-ММ-ДД)	дата відправки ТН
   1.5	InvoicePostTime	O	Час (год: хв)	час відправки ТН
   1.6	DocumentFunctionCode	М	TN/CTN	Код типу документа: TN - товарна накладна CTN - коригувальна товарна накладна
   1.7	ContractNumber	О	Рядок (16)	номер договору на поставку
   1.8	ContractDate	М	Дата (РРРР-ММ-ДД)	дата контракту
   1.9	CorrectionReason	М	NAC / PAC, NRC / PRC	причина коригування: NAC - коригування приймання на - PAC - коригування приймання на + NRC - коригування повернення на - PRC - коригування повернення на +
   2	Invoice-Reference			Підстава (початок блоку)
   2.1	Order			Замовлення (початок блоку)
   2.1.1	BuyerOrderNumber	О	Число (6-10)	Номер замовлення
   2.1.2	BuyerOrderDate	О	Дата (РРРР-ММ-ДД)	Дата замовлення
   2.2	TaxInvoice	М		Податкова накладна (початок блоку)
   2.2.1	TaxInvoiceNumber	М	Рядок (35)	номер податкової накладної
   2.2.2	TaxInvoiceDate	М	Дата (РРРР-ММ-ДД)	дата податкової накладної (повинна збігатися з датою товарної накладної)
   2.2.3	CorrectionTaxInvoiceNumber	М	Рядок (35)	Номер коригування до податкової накладної (РКНН)
   2.2.4	CorrectionTaxInvoiceDate	М	Дата (РРРР-ММ-ДД)	Дата коригування до податкової накладної (РКНН)
   2.3	DespatchAdvice	М		Повідомлення про відвантаження (початок блоку)
   2.3.1	DespatchAdviceNumber	М	Рядок (16)	Номер повідомлення про відвантаження
   2.4	ReceivingAdvice			Повідомлення про прийом (початок блоку)
   2.4.1	ReceivingAdviceNumber	М	Рядок (16)	номер повідомлення про прийом (RECADV). У разі коригування повернення, має бути вказаний номер акта на повернення. Для Мережі МЕТРО замість номера повідомлення про прийом указується номер повернення з metrolink!
   2.4.2	DeliveryDate	O	Дата (РРРР-ММ-ДД)	Дата приймання. В разі коригування повернення записується дата акту на повернення
   2.5	DeliveryNote	M		Повідомлення про доставку (початок блоку)
   2.5.1	DeliveryNoteNumber	M		Номер документа-підстави
   2.5.2	DeliveryNoteDate	M		Дата складання документа
   3	Invoice-Parties			Блок контрагентів (початок)
   3.1	Buyer			Блок покупця (початок)
   3.1.1	ILN	М	Число (13)	GLN покупця
   3.1.2	TaxID	М	Число (12)	Податковий ідентифікаційний номер покупця
   3.1.3	VatPayerCertificate	O	Рядок (35)	Номер платника ПДВ
   3.1.4	UtilizationRegisterNumber	М	Число(8,10)	ЄДРПОУ покупця
   3.1.5	Name	М	Рядок (175)	назва покупця
   3.1.6	StreetAndNumber	М	Рядок (35)	вулиця і номер будинку покупця
   3.1.7	CityName	М	Рядок (35)	місто покупця
   3.1.8	PostalCode	М	Рядок (9)	поштовий код покупця
   3.1.9	Country	O	Рядок (3)	код країни покупця (код ISO 3166)
   3.1.10	PhoneNumber	М	Рядок (35)	телефон покупця
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
   3.3	DeliveryPoint	M		Точка доставки (початок блоку)
   3.3.1	ILN	М	Число (13)	GLN точки доставки. Для Мережі МЕТРО обов’язково вказується реальний GLN, де/звідки здійснюється прийомка/повернення
   3.3.2	DeliveryPlace	М	Рядок (35)	код точки доставки (не повинен перевищувати два знаки)
   3.4	Invoicee			Рахунок (початок блоку)
   3.4.1	ILN	M	Число (13)	GLN для виставлення рахунку
   3.5	Payer			Платник (початок блоку)
   3.5.1	ILN	M	Число (13)	GLN платника
   4	Invoice-Lines			Рядки ТН (початок блоку)
   4.1	Line			Рядок (початок блоку)
   4.1.1	Line-Item			Позиція (початок блоку)
   4.1.1.1	LineNumber	М	Ціле число	номер позиції в табличній частині
   4.1.1.2	EAN	М	Число (14)	Штрих-код продукту
   4.1.1.3	BuyerItemCode	O	Строка (16)	Артикул в БД покупця
   4.1.1.4	ExternalItemCode	О	Рядок (18)	код товару згідно з довідника УКТ ЗЕД
   4.1.1.5	ItemDescription	М	Рядок (210)	Опис товару
   4.1.1.6	InvoiceQuantity	M	Число позитивне	Замовлена кількість (кількість товару за накладною)
   4.1.1.7	UnitOfMeasure	О	Рядок (3)	Одиниці виміру
   4.1.1.8	InvoiceUnitNetPrice	M	Число позитивне	Ціна однієї одиниці без ПДВ
   4.1.1.9	TaxRate	M	Число позитивне	Ставка ПДВ (20%, 7%, 0%)
   4.1.1.10	TaxCategoryCode	M	E/S	Код категорії податку: E - звільнений від сплати податку S - стандартний податок
   4.1.1.11	TaxAmount	M	Число позитивне	Сума ПДВ по артикулу = сума сум без ПДВ по артикулах * ставку (округляється до 2 знаків)
   4.1.1.12	NetAmount	M	Число позитивне	Всього без ПДВ (обчислюється)
   4.1.1.13	AcceptedInvoiceQuantity	O	Decimal (18,3)	Прийнята кількість
   4.1.1.14	CorrectionInvoiceQuantity	M / -	Число позитивне	Кількість товару за коригувальною накладною. Поле обов’язкове і повинне бути присутнім в документі тільки в разі Коригування кількості
   4.1.1.15	CorrectionInvoiceUnitNetPrice	M / -	Число десяткове	Ціна товару за коригувальною накладною. Поле обов’язкове і повинне бути присутнім в документі тільки в разі Цінових коригувань
   4.1.1.16	CorrectionNetAmount	M	Число десяткове	Сума без ПДВ з урахуванням коригування
   5	Invoice-Summary			Підсумки (початок блоку)
   5.1	TotalLines	M	Ціле число	Кількість рядків в документі
   5.2	TotalNetAmount	M	Число позитивне	Загальна сума без ПДВ
   5.3	TotalTaxAmount	M	Число позитивне	Сума ПДВ
   5.4	TotalGrossAmount	M	Число позитивне	Загальна сума з ПДВ
   5.5	Tax-Summary			Податки (початок блоку)
   5.5.1	Tax-Summary-Line			Рядок податків (початок блоку)
   5.5.1.1	TaxRate	M	Число позитивне	Розмір податку
   5.5.1.2	TaxCategoryCode	M	E/S	Код категорії податку: E - звільнений від сплати податку S - стандартний податок
   5.5.1.3	TaxAmount	M	Число позитивне	Сума податку для кожної категорії податку
   5.5.1.4	TaxableAmount	M	Число позитивне	Оподаткована сума за обраною категорією податку
   5.5.1.5	CorrectionTaxAmount	M	Число позитивне	Коригувальна сума податку для кожної категорії податку
   5.5.1.6	CorrectionTaxableAmount	M	Число позитивне	Коригувальна оподаткована сума за обраною категорією податку
   5.5.1.7	CorrectionGrossAmount	M	Число позитивне	Коригувальна сума з ПДВ
