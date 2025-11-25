##########################################################################################################################
**Видаткова накладна (DOCUMENTINVOICE_DRN)**
##########################################################################################################################

**XML:**

.. code:: xml

  <Document-Invoice>
  <Invoice-Header>
  <InvoiceNumber>3222_3</InvoiceNumber>
  <InvoiceDate>2022-09-08</InvoiceDate>
  <DocumentFunctionCode>DRN</DocumentFunctionCode>
  <ContractNumber>12312564</ContractNumber>
  <ContractDate>2022-12-21</ContractDate>
  </Invoice-Header>
  <Invoice-Reference>
  <Order>
  <BuyerOrderNumber>ftp_3037_1</BuyerOrderNumber>
  <BuyerOrderDate>2022-09-08</BuyerOrderDate>
  </Order>
  <TaxInvoice>
  <TaxInvoiceDate>2022-09-08</TaxInvoiceDate>
  </TaxInvoice>
  </Invoice-Reference>
  <Invoice-Parties>
  <Buyer>
  <ILN>9864066866014</ILN>
  <TaxID>1010101014</TaxID>
  <UtilizationRegisterNumber>34554362</UtilizationRegisterNumber>
  <Name>Епіцентр</Name>
  <StreetAndNumber>ул Улица</StreetAndNumber>
  <CityName>г Городок</CityName>
  <PostalCode>102030</PostalCode>
  <PhoneNumber>#</PhoneNumber>
  </Buyer>
  <Seller>
  <ILN>9864065732181</ILN>
  <TaxID>1234567890</TaxID>
  <CodeByBuyer>12312564</CodeByBuyer>
  <UtilizationRegisterNumber>34554363</UtilizationRegisterNumber>
  <Name>FelEx_1</Name>
  <StreetAndNumber>ул. Умница, 3</StreetAndNumber>
  <CityName>г. Херсон</CityName>
  <PostalCode>453278</PostalCode>
  <PhoneNumber>380930000000</PhoneNumber>
  </Seller>
  <DeliveryPoint>
  <ILN>9864066866014</ILN>
  <Name>Ваша Компанія</Name>
  <CityName>г Городок</CityName>
  <StreetAndNumber>ул Улица</StreetAndNumber>
  <PostalCode>102030</PostalCode>
  </DeliveryPoint>
  </Invoice-Parties>
  <Invoice-Lines>
  <Line>
  <Line-Item>
  <LineNumber>1</LineNumber>
  <EAN>1472583690147</EAN>
  <BuyerItemCode>11111111</BuyerItemCode>
  <ExternalItemCode>3333333333</ExternalItemCode>
  <ItemDescription>drink1</ItemDescription>
  <InvoiceQuantity>3.000</InvoiceQuantity>
  <BuyerUnitOfMeasure>шт</BuyerUnitOfMeasure>
  <InvoiceUnitGrossPrice>540</InvoiceUnitGrossPrice>
  <InvoiceUnitNetPrice>450.00</InvoiceUnitNetPrice>
  <TaxRate>20</TaxRate>
  <TaxCategoryCode>S</TaxCategoryCode>
  <GrossAmount>1620.00</GrossAmount>
  <TaxAmount>270.00</TaxAmount>
  <NetAmount>1350.000000</NetAmount>
  </Line-Item>
  </Line>
  </Invoice-Lines>
  <Invoice-Summary>
  <TotalLines>1</TotalLines>
  <TotalNetAmount>1350.00</TotalNetAmount>
  <TotalTaxAmount>270.00</TotalTaxAmount>
  <TotalGrossAmount>1620.00</TotalGrossAmount>
  </Invoice-Summary>
  </Document-Invoice>

-------------------------

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/1dque7rvcrfWajnLQhlP2qvveTUSY8h42/edit?gid=106206968#gid=106206968&single=true" width="1100" height="1900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
  1.1	InvoiceNumber	М	Рядок (16)	Номер видаткової накладної
  1.2	InvoiceDate	М	Дата (РРРР-ММ-ДД)	Дата накладної
  1.3	DocumentFunctionCode	М	DRN	Код документа (константа)
  1.4	ContractNumber	M	Рядок (35)	Номер договору
  1.5	ContractDate	М	Дата (РРРР-ММ-ДД)	Дата договору
  1.6	InvoiceCurrency	O	Рядок (3)	валюта
  1.7	InvoicePostDate	O	Дата (РРРР-ММ-ДД)	дата відправки
  1.8	InvoicePostTime	O	Час (год: хв)	час відправки
  2	Invoice-Reference			Підстава (початок блоку)
  2.1	Order			Замовлення (початок блоку)
  2.1.1	BuyerOrderNumber	M	Рядок (35)	Номер замовлення
  2.1.2	BuyerOrderDate	M	Дата (РРРР-ММ-ДД)	Дата замовлення
  2.2	TaxInvoice	М		Податкова накладна (початок блоку)
  2.2.1	TaxInvoiceNumber	O	Рядок (35)	номер податкової накладної
  2.2.2	TaxInvoiceDate	O	Дата (РРРР-ММ-ДД)	дата податкової накладної (повинна збігатися з датою товарною накладною)
  2.3	DespatchAdvice	М		Повідомлення про відвантаження (початок блоку)
  2.3.1	DespatchAdviceNumber	O	Рядок (16)	Номер повідомлення про відвантаження
  2.4	ReceivingAdvice			Повідомлення про прийом (початок блоку)
  2.4.1	ReceivingAdviceNumber	O	Рядок (16)	Номер повідомлення про прийом (RECADV). У разі коригування повернення, має бути вказаний номер акта на повернення
  2.4.2	DeliveryDate	O	Дата (РРРР-ММ-ДД)	Дата приймання. В разі коригування повернення, має бути вказана дата акту на повернення
  3	Invoice-Parties	M		Блок контрагентів (початок)
  3.1	Buyer	M		Блок покупця (початок)
  3.1.1	ILN	М	Число (13)	GLN покупця
  3.1.2	TaxID	М	Число (12)	Податковий ідентифікаційний номер покупця
  3.1.3	UtilizationRegisterNumber	М	Число(8,10)	ЄДРПОУ покупця
  3.1.4	Name	М	Рядок (175)	назва покупця
  3.1.5	StreetAndNumber	М	Рядок (35)	вулиця і номер будинку покупця
  3.1.6	CityName	М	Рядок (35)	місто покупця
  3.1.7	PostalCode	М	Рядок (9)	поштовий код покупця
  3.1.8	Country	O	Рядок (3)	код країни покупця (код ISO 3166)
  3.1.9	PhoneNumber	М	Рядок (35)	телефон покупця
  3.2	Seller	M		Блок продавця (початок)
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
  3.3	DeliveryPoint	M		Точка доставки (початок)
  3.3.1	ILN	М	Число (13)	GLN точки доставки (МЕТРО)
  3.3.2	Name	O	Рядок (175)	назва продавця
  3.3.3	StreetAndNumber	M	Рядок (140)	вулиця і номер будинку продавця
  3.3.4	CityName	М	Рядок (35)	місто продавця
  3.3.5	PostalCode	O	Рядок (9)	поштовий код продавця
  4	Invoice-Lines			Рядки ТН (початок блоку)
  4.1	Line			Рядок (початок блоку)
  4.1.1	Line-Item			Позиція (початок блоку)
  4.1.1.1	LineNumber	М	Ціле число	номер позиції в табличній частині
  4.1.1.2	EAN	М	Число (14)	Штрих-код продукту
  4.1.1.3	BuyerItemCode	M	Рядок (16)	Артикул в БД покупця
  4.1.1.4	ExternalItemCode	M	Рядок (4-10)	код товару згідно з довідника УКТ ЗЕД
  4.1.1.5	ItemDescription	М	Рядок (210)	Опис товару
  4.1.1.6	InvoiceQuantity	M	Число позитивне	Замовлена ​​кількість (кількість товару за накладною)
  4.1.1.7	BuyerUnitOfMeasure	M	Рядок (10)	Одиниці виміру
  4.1.1.8	UnitOfMeasure	О	Рядок (10)	Одиниці виміру
  4.1.1.9	InvoiceUnitGrossPrice	M	Decimal (18,2)	Ціна однієї одиниці з ПДВ
  4.1.1.10	InvoiceUnitNetPrice	M	Число позитивне	Ціна однієї одиниці без ПДВ
  4.1.1.11	TaxRate	M	20/19/16/14/7/2/0	Ставка ПДВ (20%, 19%, 16%, 14%, 7%, 2%, 0%)
  4.1.1.12	TaxCategoryCode	M	S / E / Z	"Код категорії податку:
    S - стандартний податок; можливі значення TaxRate: 20/19/16/14/7/2 (інакше помилка)

  E - звільнений від сплати податку; можливі значення TaxRate=0 (інакше помилка)

  Z - нульова ставка (0%); можливі значення TaxRate=0 (інакше помилка)"
  4.1.1.13	GrossAmount	M	Decimal (18,2)	Сума з ПДВ
  4.1.1.14	TaxAmount	M	Число позитивне	Сума ПДВ по артикулу = сума сум без ПДВ по артикулах * ставку (округляється до 2 знаків)
  4.1.1.15	NetAmount	M	Число позитивне	Всього без ПДВ (обчислюється)
  5	Invoice-Summary			Підсумки (початок блоку)
  5.1	TotalLines	M	Ціле число	Кількість рядків в документі
  5.2	TotalNetAmount	M	Число позитивне	Загальна сума без ПДВ
  5.3	TotalTaxAmount	M	Число позитивне	Сума ПДВ
  5.4	TotalGrossAmount	M	Число позитивне	Загальна сума з ПДВ
