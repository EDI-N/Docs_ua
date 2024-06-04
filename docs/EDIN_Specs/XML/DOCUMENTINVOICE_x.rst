##########################################################################################################################
**Товарна накладна/коригувальна товарна накладна/цінова накладна/видаткова накладна (DOCUMENTINVOICE)**
##########################################################################################################################

.. epigraph::

   DOCUMENTINVOICE - Товарна накладна.Документ може бути створений на підставі RECADV

**XML:**

.. code:: xml

   <Document-Invoice>
   <Invoice-Header>
   <InvoiceNumber>TEST1</InvoiceNumber>
   <InvoiceDate>2023-04-01</InvoiceDate>
   <InvoiceCurrency>UAH</InvoiceCurrency>
   <InvoicePostDate>2020-01-10</InvoicePostDate>
   <InvoicePostTime>14:14</InvoicePostTime>
   <DocumentFunctionCode>TN</DocumentFunctionCode>
   <ContractNumber>12312564</ContractNumber>
   <ContractDate>2023-04-25</ContractDate>
   </Invoice-Header>
   <Invoice-Reference>
   <Order>
   <BuyerOrderNumber>ftp_3037_1</BuyerOrderNumber>
   <BuyerOrderDate>2022-09-08</BuyerOrderDate>
   </Order>
   <TaxInvoice>
   <TaxInvoiceNumber>5670542</TaxInvoiceNumber>
   <TaxInvoiceDate>2020-01-10</TaxInvoiceDate>
   </TaxInvoice>
   <DespatchAdvice>
   <DespatchAdviceNumber>2936_des_1</DespatchAdviceNumber>
   </DespatchAdvice>
   <ReceivingAdvice>
   <ReceivingAdviceNumber>777_des_3</ReceivingAdviceNumber>
   <DeliveryDate>2022-07-03</DeliveryDate>
   </ReceivingAdvice>
   </Invoice-Reference>
   <Invoice-Parties>
   <Buyer>
   <ILN>9864232324065</ILN>
   <TaxID>9000999909</TaxID>
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
   <EAN>14725836901471</EAN>
   <BuyerItemCode>11111111</BuyerItemCode>
   <ExternalItemCode>3333333333</ExternalItemCode>
   <ItemDescription>drink1</ItemDescription>
   <InvoiceQuantity>3.000</InvoiceQuantity>
   <BuyerUnitOfMeasure>шт</BuyerUnitOfMeasure>
   <InvoiceUnitNetPrice>456.00</InvoiceUnitNetPrice>
   <TaxRate>7</TaxRate>
   <TaxCategoryCode>S</TaxCategoryCode>
   <GrossAmount>1201.2</GrossAmount>
   <TaxAmount>95.76</TaxAmount>
   <NetAmount>1368.00</NetAmount>
   </Line-Item>
   </Line>
   </Invoice-Lines>
   <Invoice-Summary>
   <TotalLines>1</TotalLines>
   <TotalNetAmount>1001</TotalNetAmount>
   <TotalTaxAmount>200.2</TotalTaxAmount>
   <TotalGrossAmount>1201.2</TotalGrossAmount>
   <Tax-Summary>
   <Tax-Summary-Line>
   <TaxRate>7.00</TaxRate>
   <TaxAmount>200.2</TaxAmount>
   <TaxableAmount>200.5</TaxableAmount>
   </Tax-Summary-Line>
   </Tax-Summary>
   </Invoice-Summary>
   </Document-Invoice>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1518454307&single=true" width="1100" height="2600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   1.6	DocumentFunctionCode	М	TN/CTN/PRN/DRN	"Код типу документа:
   TN - товарна накладна
   
   CTN - коригувальна товарна накладна
   
   PRN- Цінова накладна
   
   DRN - Видаткова накладна"
   1.7	ContractNumber	О	Рядок (16)	номер договору на поставку
   1.8	ContractDate	М	Дата (РРРР-ММ-ДД)	дата контракту
   2	Invoice-Reference			Підстава (початок блоку)
   2.1	Order			Замовлення (початок блоку)
   2.1.1	BuyerOrderNumber	О	Число (6-10)	Номер замовлення
   2.1.2	BuyerOrderDate	О	Дата (РРРР-ММ-ДД)	Дата замовлення
   2.2	TaxInvoice	М		Податкова накладна (початок блоку)
   2.2.1	TaxInvoiceNumber	М	Рядок (35)	номер податкової накладної
   2.2.2	TaxInvoiceDate	М	Дата (РРРР-ММ-ДД)	дата податкової накладної (повинна збігатися з датою товарною накладною)
   2.3	DespatchAdvice	М		Повідомлення про відвантаження (початок блоку)
   2.3.1	DespatchAdviceNumber	М	Рядок (16)	Номер повідомлення про відвантаження
   2.4	ReceivingAdvice			Повідомлення про прийом (початок блоку)
   2.4.1	ReceivingAdviceNumber	М	Рядок (16)	Номер повідомлення про прийом (RECADV). У разі коригування повернення, має бути вказаний номер акта на повернення
   2.4.2	DeliveryDate	O	Дата (РРРР-ММ-ДД)	Дата приймання. В разі коригування повернення, має бути вказана дата акту на повернення
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
   3.3	DeliveryPoint	M		Точка доставки (початок)
   3.3.1	ILN	М	Число (13)	GLN точки доставки (МЕТРО)
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
   4.1.1.3	BuyerItemCode	О/M	Рядок (16)	Артикул в БД покупця. Поле обов’язкове, якщо отримувач ТМ Метро
   4.1.1.4	ExternalItemCode	M	Рядок (4-10)	код товару згідно з довідника УКТ ЗЕД
   4.1.1.5	ItemDescription	М	Рядок (210)	Опис товару
   4.1.1.6	InvoiceQuantity	M	Число позитивне	Замовлена ​​кількість (кількість товару за накладною)
   4.1.1.7	BuyerUnitOfMeasure	О	Рядок (10)	Одиниці виміру згідно Класифікатора системи позначень одиниць вимірювання та обліку (КСПОВО) (шт. – штука; уп. – упаковка; л. – літр; послуга; кг. – кілограм; г. – грам…)
   4.1.1.8	UnitOfMeasure	О	Рядок (3)	Одиниці виміру
   4.1.1.9	InvoiceUnitGrossPrice	O	Decimal (18,2)	Ціна однієї одиниці з ПДВ
   4.1.1.10	InvoiceUnitNetPrice	M	Число позитивне	Ціна однієї одиниці без ПДВ
   4.1.1.11	TaxRate	M	20/19/16/14/7/2/0	Ставка ПДВ (20%, 19%, 16%, 14%, 7%, 2%, 0%)
   4.1.1.12	TaxCategoryCode	O	S / E / Z	"Код категорії податку:
   S - стандартний податок; можливі значення TaxRate: 20/19/16/14/7/2 (інакше помилка)
   
   E - звільнений від сплати податку; можливі значення TaxRate=0 (інакше помилка)
   
   Z - нульова ставка (0%); можливі значення TaxRate=0 (інакше помилка)"
   4.1.1.13	GrossAmount	O	Decimal (18,2)	Сума з ПДВ
   4.1.1.14	TaxAmount	M	Число позитивне	Сума ПДВ по артикулу = сума сум без ПДВ по артикулах * ставку (округляється до 2 знаків)
   4.1.1.15	NetAmount	M	Число позитивне	Всього без ПДВ (обчислюється)
   5	Invoice-Summary			Підсумки (початок блоку)
   5.1	TotalLines	M	Ціле число	Кількість рядків в документі
   5.2	TotalNetAmount	M	Число позитивне	Загальна сума без ПДВ
   5.3	TotalTaxAmount	M	Число позитивне	Сума ПДВ
   5.4	TotalGrossAmount	M	Число позитивне	Загальна сума з ПДВ
   5.5	Tax-Summary			Податки (початок блоку)
   5.5.1	Tax-Summary-Line			Рядок податків (початок блоку)
   5.5.1.1	TaxRate	M	20/19/16/14/7/2/0	Ставка ПДВ (20%, 19%, 16%, 14%, 7%, 2%, 0%)
   5.5.1.2	TaxCategoryCode	O	S / E / Z	"Код категорії податку:
   S - стандартний податок; можливі значення TaxRate: 20/19/16/14/7/2 (інакше помилка)
   
   E - звільнений від сплати податку; можливі значення TaxRate=0 (інакше помилка)
   
   Z - нульова ставка (0%); можливі значення TaxRate=0 (інакше помилка)"
   5.5.1.3	TaxAmount	M	Число позитивне	Сума податку для кожної категорії податку
   5.5.1.4	TaxableAmount	M	Число позитивне	Оподаткована сума за обраною категорією податку
