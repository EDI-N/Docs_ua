##########################################################################################################################
**Накладна на повернення (DOCUMENTINVOICE_NP)**
##########################################################################################################################

.. epigraph::

   DOCUMENTINVOICE з DocumentFunctionCode=NP - Накладна на повернення. Мережа інтегровано відправляє документ своїм Постачальникам

**XML:**

.. code:: xml

  <Document-Invoice>
  <Invoice-Header>
  <InvoiceNumber>Test12563</InvoiceNumber>
  <InvoiceDate>2024-04-10</InvoiceDate>
  <InvoiceCurrency>UAH</InvoiceCurrency>
  <DocumentFunctionCode>NP</DocumentFunctionCode>
  <ContractNumber>13117117</ContractNumber>
  <ContractDate>2023-08-30</ContractDate>
  <InternalClientNumber>Впп/ОТ0000921</InternalClientNumber>
  <Info>
  Причина повернення:Некондинційний товар.=Тип договора:постачання=
  </Info>
  <PersonName>Іваненко Людмила Євгеніївна</PersonName>
  </Invoice-Header>
  <Invoice-Reference>
  <TaxInvoice>
  <TaxInvoiceNumber>Пнк/R10007184</TaxInvoiceNumber>
  <TaxInvoiceDate>2024-04-01</TaxInvoiceDate>
  </TaxInvoice>
  <Order>
  <BuyerOrderNumber>Зкз/KR-0000105</BuyerOrderNumber>
  <BuyerOrderDate>2024-03-19</BuyerOrderDate>
  </Order>
  <DeliveryNote>
  <DeliveryNoteNumber>Post125468</DeliveryNoteNumber>
  <DeliveryNoteDate>2024-04-01</DeliveryNoteDate>
  </DeliveryNote>
  </Invoice-Reference>
  <Invoice-Parties>
  <Buyer>
  <ILN>9864066866014</ILN>
  <TaxID>2333243312</TaxID>
  <UtilizationRegisterNumber>32490244</UtilizationRegisterNumber>
  <Name>ТОВ "МММ"</Name>
  <StreetAndNumber>вул. Київська, 1</StreetAndNumber>
  <CityName>м. Київ</CityName>
  <PostalCode>04121</PostalCode>
  <PhoneNumber>(044)206-26-00</PhoneNumber>
  </Buyer>
  <Seller>
  <ILN>9811065732181</ILN>
  <TaxID>1010101016</TaxID>
  <UtilizationRegisterNumber>34114363</UtilizationRegisterNumber>
  <Name>FelEx_1</Name>
  </Seller>
  <DeliveryPoint>
  <ILN>98640611870820</ILN>
  </DeliveryPoint>
  </Invoice-Parties>
  <Invoice-Lines>
  <Line>
  <Line-Item>
  <LineNumber>1</LineNumber>
  <EAN>1212121212121</EAN>
  <BuyerItemCode>70201112</BuyerItemCode>
  <SupplierItemCode>14511987456985</SupplierItemCode>
  <ItemDescription>Радіатор 22К</ItemDescription>
  <InvoiceQuantity>1.000</InvoiceQuantity>
  <UnitOfMeasure>шт</UnitOfMeasure>
  <InvoiceUnitNetPrice>4510.75</InvoiceUnitNetPrice>
  <TaxRate>20.00</TaxRate>
  <TaxCategoryCode>S</TaxCategoryCode>
  <NetAmount>4510.75</NetAmount>
  </Line-Item>
  </Line>
  </Invoice-Lines>
  <Invoice-Summary>
  <TotalLines>1</TotalLines>
  <TotalNetAmount>4510.75</TotalNetAmount>
  <TotalTaxAmount>902.15</TotalTaxAmount>
  <TotalGrossAmount>5412.90</TotalGrossAmount>
  </Invoice-Summary>
  </Document-Invoice>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/1dque7rvcrfWajnLQhlP2qvveTUSY8h42/pubhtml?gid=52901704#gid=52901704&single=true" width="1100" height="1700" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
  1.3	InvoiceCurrency	М	Рядок (3)	Валюта
  1.4	DocumentFunctionCode	М	NP	"Код типу документа:
  NP - Накладна на повернення"
  1.5	ContractNumber	О	Рядок (70)	Номер контракту
  1.6	ContractDate	М	Дата (РРРР-ММ-ДД)	Дата контракту
  1.7	InternalClientNumber	О	Рядок (35)	Внутрішній номер клієнта
  1.8	Info	О	Рядок (175)	Причина повернення
  1.9	PersonName	О	Рядок (75)	Автор документа
  2	Invoice-Reference	M		Підстава (початок блоку)
  2.1	TaxInvoice	М		Податкова накладна (початок блоку)
  2.1.1	TaxInvoiceNumber	М	Рядок (35)	Номер накладної на стороні покупця
  2.1.2	TaxInvoiceDate	М	Дата (РРРР-ММ-ДД)	Дата накладної на стороні покупця
  2.2	Order	М		Замовлення (початок блоку)
  2.2.1	BuyerOrderNumber	М	Рядок (35)	Номер замовлення
  2.2.2	BuyerOrderDate	O	Дата (РРРР-ММ-ДД)	Дата замовлення
  2.3	DeliveryNote	М		Повідомлення про доставку (початок блоку)
  2.3.1	DeliveryNoteNumber	М	Рядок (35)	Номер видаткової постачальника
  2.3.2	DeliveryNoteDate	М	Дата (РРРР-ММ-ДД)	Дата складання документа
  3	Invoice-Parties	M		Блок контрагентів (початок)
  3.1	Buyer	М		Блок покупця (початок)
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
  3.2.6	StreetAndNumber	O	Рядок (140)	вулиця і номер будинку продавця
  3.2.7	CityName	O	Рядок (35)	місто продавця
  3.2.8	PostalCode	O	Рядок (9)	поштовий код продавця
  3.2.9	Country	O	Рядок (3)	код країни продавця (код ISO 3166)
  3.2.10	PhoneNumber	O	Рядок (35)	телефон продавця
  3.3	DeliveryPoint	M		Точка доставки (початок)
  3.3.1	ILN	М	Число (13)	GLN точки доставки
  4	Invoice-Lines	O		Рядки (початок блоку)
  4.1	Line	O		Рядок (початок блоку)
  4.1.1	Line-Item	M		Позиція (початок блоку)
  4.1.1.1	LineNumber	М	Ціле число	номер позиції в табличній частині
  4.1.1.2	EAN	М	Число (14)	Штрих-код продукту
  4.1.1.3	BuyerItemCode	M	Рядок (16)	Артикул в БД покупця
  4.1.1.4	SupplierItemCode	O	Рядок (16)	Артикул постачальника
  4.1.1.5	ExternalItemCode	M	Рядок (4-10)	код товару згідно з довідника УКТ ЗЕД
  4.1.1.6	ItemDescription	М	Рядок (210)	Опис товару
  4.1.1.7	InvoiceQuantity	M	Число позитивне	Замовлена ​​кількість (кількість товару за накладною)
  4.1.1.8	UnitOfMeasure	M	Рядок (3)	Одиниці виміру
  4.1.1.9	InvoiceUnitNetPrice	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Ціна однієї одиниці без ПДВ
  4.1.1.10	TaxRate	O	20/19/16/14/7/2/0	Ставка ПДВ (20%, 19%, 16%, 14%, 7%, 2%, 0%)
  4.1.1.11	TaxCategoryCode	O	S / E / Z	"Код категорії податку:
    S - стандартний податок; можливі значення TaxRate: 20/19/16/14/7/2 (інакше помилка)
  
  E - звільнений від сплати податку; можливі значення TaxRate=0 (інакше помилка)
  
  Z - нульова ставка (0%); можливі значення TaxRate=0 (інакше помилка)"
  4.1.1.12	NetAmount	M	Число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	Сума без ПДВ попозиційно
  5	Invoice-Summary			Підсумки (початок блоку)
  5.1	TotalLines	M	Ціле число	Кількість рядків в документі
  5.2	TotalNetAmount	M	Число з плаваючою точкою (18 знаків до коми, 2 знака після коми)	Загальна сума без ПДВ
  5.3	TotalTaxAmount	M	Число з плаваючою точкою (18 знаків до коми, 2 знака після коми)	Сума ПДВ
  5.4	TotalGrossAmount	M	Число з плаваючою точкою (18 знаків до коми, 2 знака після коми)	Загальна сума з ПДВ

