##########################################################################################################################
**Акт розбіжностей (DOCCORINVOICE)**
##########################################################################################################################

**XML:**

.. code:: xml

  <Document-Invoice>
  <Invoice-Header>
  <InvoiceNumber>455</InvoiceNumber>
  <InvoiceDate>2023-03-08</InvoiceDate>
  <InvoiceCurrency>UAH</InvoiceCurrency>
  <DocumentFunctionCode>CVN</DocumentFunctionCode>
  <ContractNumber>1034ДТ</ContractNumber>
  <ContractDate>2023-01-01</ContractDate>
  <CorrectionReason>NRC</CorrectionReason>
  </Invoice-Header>
  <Invoice-Reference>
  <Order>
  <BuyerOrderNumber>Зкз/KC-0009272</BuyerOrderNumber>
  <BuyerOrderDate>2023-02-09</BuyerOrderDate>
  </Order>
  <DeliveryNote>
  <DeliveryNoteNumber>Зкз/KC-0009272</DeliveryNoteNumber>
  <DeliveryNoteDate>2023-02-09</DeliveryNoteDate>
  </DeliveryNote>
  </Invoice-Reference>
  <Invoice-Parties>
  <Buyer>
  <ILN>9864066866014</ILN>
  <TaxID>1010101014</TaxID>
  <UtilizationRegisterNumber>34554362</UtilizationRegisterNumber>
  <Name>Епіцентр</Name>
  </Buyer>
  <Seller>
  <ILN>4820065650004</ILN>
  <TaxID>325729524123</TaxID>
  <UtilizationRegisterNumber>32572955</UtilizationRegisterNumber>
  <Name>Приватне підприємство "Максимус"</Name>
  </Seller>
  <DeliveryPoint>
  <ILN>9864066870738</ILN>
  <Name>KC Київ-6</Name>
  <CityName>Київ</CityName>
  <StreetAndNumber>вул. Берковецька, 6-В</StreetAndNumber>
  <PostalCode>04655</PostalCode>
  </DeliveryPoint>
  </Invoice-Parties>
  <Invoice-Lines>
  <Line>
  <Line-Item>
  <LineNumber>1</LineNumber>
  <EAN>8008343200011</EAN>
  <BuyerItemCode>61601329</BuyerItemCode>
  <ExternalItemCode>12345</ExternalItemCode>
  <ItemDescription>
  Паста з Твердих Сортів Пшениці Капелліні 500г ТМ RUMMO
  </ItemDescription>
  <InvoiceQuantity>24.000</InvoiceQuantity>
  <BuyerUnitOfMeasure>шт</BuyerUnitOfMeasure>
  <InvoiceUnitNetPrice>61.33</InvoiceUnitNetPrice>
  <TaxRate>20</TaxRate>
  <TaxAmount>294.38</TaxAmount>
  <NetAmount>1471.92</NetAmount>
  <CorrectionInvoiceUnitNetPrice>55.00</CorrectionInvoiceUnitNetPrice>
  <CorrectionNetAmount>1320.00</CorrectionNetAmount>
  <CorrectionInvoiceUnitGrossPrice>66.00</CorrectionInvoiceUnitGrossPrice>
  <CorrectionTaxAmount>264.00</CorrectionTaxAmount>
  <CorrectionGrossAmount>1584.00</CorrectionGrossAmount>
  </Line-Item>
  </Line>
  <Line>
  <Line-Item>
  <LineNumber>2</LineNumber>
  <EAN>8008343200134</EAN>
  <BuyerItemCode>61601330</BuyerItemCode>
  <ExternalItemCode>12345</ExternalItemCode>
  <ItemDescription>
  Паста з Твердих Сортів Пшениці Лінгвіні 500г №13 ТМ RUMMO
  </ItemDescription>
  <InvoiceQuantity>24.000</InvoiceQuantity>
  <BuyerUnitOfMeasure>шт</BuyerUnitOfMeasure>
  <InvoiceUnitNetPrice>61.33</InvoiceUnitNetPrice>
  <TaxRate>20</TaxRate>
  <TaxAmount>294.38</TaxAmount>
  <NetAmount>1471.92</NetAmount>
  <CorrectionInvoiceUnitNetPrice>54.00</CorrectionInvoiceUnitNetPrice>
  <CorrectionNetAmount>1296.00</CorrectionNetAmount>
  <CorrectionInvoiceUnitGrossPrice>64.80</CorrectionInvoiceUnitGrossPrice>
  <CorrectionTaxAmount>259.20</CorrectionTaxAmount>
  <CorrectionGrossAmount>1555.20</CorrectionGrossAmount>
  </Line-Item>
  </Line>
  <Line>
  <Line-Item>
  <LineNumber>3</LineNumber>
  <EAN>8008343221054</EAN>
  <BuyerItemCode>61601331</BuyerItemCode>
  <ExternalItemCode>12345</ExternalItemCode>
  <ItemDescription>
  Паста з Твердих Сортів Пшениці Палья Фєно 250г N°105 ТМ RUMMO
  </ItemDescription>
  <InvoiceQuantity>12.000</InvoiceQuantity>
  <BuyerUnitOfMeasure>шт</BuyerUnitOfMeasure>
  <InvoiceUnitNetPrice>70.00</InvoiceUnitNetPrice>
  <TaxRate>20</TaxRate>
  <TaxAmount>168.00</TaxAmount>
  <NetAmount>840.00</NetAmount>
  <CorrectionInvoiceUnitNetPrice>56.00</CorrectionInvoiceUnitNetPrice>
  <CorrectionNetAmount>672.00</CorrectionNetAmount>
  <CorrectionInvoiceUnitGrossPrice>67.20</CorrectionInvoiceUnitGrossPrice>
  <CorrectionTaxAmount>134.40</CorrectionTaxAmount>
  <CorrectionGrossAmount>806.40</CorrectionGrossAmount>
  </Line-Item>
  </Line>
  </Invoice-Lines>
  <Invoice-Summary>
  <TotalLines>3</TotalLines>
  <TotalNetAmount>3783.84</TotalNetAmount>
  <TotalTaxAmount>-3783.84</TotalTaxAmount>
  <TotalGrossAmount>0</TotalGrossAmount>
  <Tax-Summary>
  <Tax-Summary-Line>
  <TaxRate>20.00</TaxRate>
  <TaxAmount>3264.65</TaxAmount>
  <TaxableAmount>16323.24</TaxableAmount>
  <CorrectionTaxAmount>657.60</CorrectionTaxAmount>
  <CorrectionTaxableAmount>3288.00</CorrectionTaxableAmount>
  <CorrectionGrossAmount>3945.60</CorrectionGrossAmount>
  </Tax-Summary-Line>
  </Tax-Summary>
  </Invoice-Summary>
  </Document-Invoice>

-------------------------

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSsecP9tUKcSNR_g7heXzG8uYSvVxKvQGc1e35NIFS5-ucGxDHUZPe_IP075HNuYw/pubhtml?gid=1325074909&single=true" width="1100" height="2200" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
  1.1	InvoiceNumber	М	Рядок (16)	Номер Акта розбіжностей
  1.2	InvoiceDate	М	Дата (РРРР-ММ-ДД)	Дата Акта розбіжностей
  1.3	DocumentFunctionCode	М	CVN	Код документа (константа)
  1.4	ContractNumber	M	Рядок (35)	Номер договору
  1.5	ContractDate	М	Дата (РРРР-ММ-ДД)	Дата договору
  1.6	CorrectionReason	М	NAC / NRC	"причина коригування:
    NAC - коригування кількості

  NRC - коригування ціни"
  2	Invoice-Reference			Підстава (початок блоку)
  2.1	Order			Замовлення (початок блоку)
  2.1.1	BuyerOrderNumber	M	Рядок (35)	Номер замовлення
  2.1.2	BuyerOrderDate	M	Дата (РРРР-ММ-ДД)	Дата замовлення
  2.2	DeliveryNote	M		Повідомлення про доставку (початок блоку)
  2.2.1	DeliveryNoteNumber	M		Номер документа-підстави
  2.2.2	DeliveryNoteDate	M		Дата складання документа
  3	Invoice-Parties	M		Блок контрагентів (початок)
  3.1	Buyer	M		Блок покупця (початок)
  3.1.1	ILN	М	Число (13)	GLN покупця
  3.1.2	TaxID	М	Число (12)	Податковий ідентифікаційний номер покупця
  3.1.3	UtilizationRegisterNumber	М	Число(8,10)	ЄДРПОУ покупця
  3.1.4	Name	М	Рядок (60)	назва покупця
  3.1.5	StreetAndNumber	М	Рядок (35)	вулиця і номер будинку покупця
  3.1.6	CityName	М	Рядок (35)	місто покупця
  3.1.7	PostalCode	М	Рядок (9)	поштовий код покупця
  3.1.8	Country	O	Рядок (3)	код країни покупця (код ISO 3166)
  3.1.9	PhoneNumber	М	Рядок (35)	телефон покупця
  3.2	Seller	M		Блок продавця (початок)
  3.2.1	ILN	М	Число (13)	GLN продавця
  3.2.2	TaxID	М	Число (12)	Податковий ідентифікаційний номер продавця
  3.2.3	UtilizationRegisterNumber	М	Число(8,10)	ЄДРПОУ продавця
  3.2.4	Name	М	Рядок (60)	назва продавця
  3.2.5	StreetAndNumber	М	Рядок (140)	вулиця і номер будинку продавця
  3.2.6	CityName	М	Рядок (35)	місто продавця
  3.2.7	PostalCode	М	Рядок (9)	поштовий код продавця
  3.2.8	Country	O	Рядок (3)	код країни продавця (код ISO 3166)
  3.2.9	PhoneNumber	М	Рядок (35)	телефон продавця
  3.3	DeliveryPoint	M		Точка доставки (початок блоку)
  3.3.1	ILN	M	Число (13)	Глобальний номер розташування (GLN) точки доставки
  3.3.2	Name	O	Рядок (80)	Юридична особа об’єкту доставки
  3.3.3	CityName	M	Рядок (35)	Місто
  3.3.4	StreetAndNumber	M	Рядок (140)	Вулиця і номер будинку
  3.3.5	PostalCode	O	Рядок (9)	Поштовий код
  4	Invoice-Lines			Рядки ТН (початок блоку)
  4.1	Line			Рядок (початок блоку)
  4.1.1	Line-Item			Позиція (початок блоку)
  4.1.1.1	LineNumber	М	Ціле число (3)	номер позиції в табличній частині
  4.1.1.2	EAN	М	Число (13)	Штрих-код продукту
  4.1.1.3	BuyerItemCode	M	Строка (10)	Артикул в БД покупця
  4.1.1.4	ExternalItemCode	M	Рядок (4-10)	код товару згідно з довідника УКТ ЗЕД
  4.1.1.5	ItemDescription	М	Рядок (50)	Опис товару
  4.1.1.6	InvoiceQuantity	M	Decimal (18,3)	Замовлена кількість (кількість товару за накладною)
  4.1.1.7	BuyerUnitOfMeasure	M	Рядок (10)	Одиниці виміру
  4.1.1.8	InvoiceUnitNetPrice	M	Decimal (18,5)	Ціна однієї одиниці без ПДВ
  4.1.1.9	TaxRate	M	Число позитивне	Ставка ПДВ (20%, 7%, 0%)
  4.1.1.10	TaxAmount	O	Decimal (18,2)	Сума ПДВ по артикулу
  4.1.1.11	NetAmount	O	Decimal (18,2)	Сума без ПДВ
  4.1.1.12	AcceptedInvoiceQuantity	M	Decimal (18,3)	Прийнята кількість
  4.1.1.13	CorrectionInvoiceQuantity	M / -	Positive decimal (18,3)	Кількість товару за коригувальною накладною. Поле обов’язкове і повинне бути присутнім в документі тільки в разі Коригування кількості
  4.1.1.14	CorrectionInvoiceUnitNetPrice	M / -	Positive decimal (18,2)	Ціна товару без ПДВ за коригувальною накладною. Поле обов’язкове і повинне бути присутнім в документі тільки в разі Цінових коригувань
  4.1.1.15	CorrectionInvoiceUnitGrossPrice	M / -	Positive decimal (18,2)	Ціна товару з ПДВ за коригувальною накладною. Поле обов’язкове і повинне бути присутнім в документі тільки в разі Цінових коригувань
  4.1.1.16	CorrectionNetAmount	M	Decimal (18,2)	Сума без ПДВ з урахуванням коригування
  4.1.1.17	CorrectionTaxAmount	M	Decimal (18,2)	Сума ПДВ з урахуванням коригування
  4.1.1.18	CorrectionGrossAmount	M	Decimal (18,2)	Сума з ПДВ з урахуванням коригування
  4.1.1.19	ReasonRejection			Причина розбіжності (початок блоку)
  4.1.1.19.1	ReasonCode	М	Число(2)	"Код причини повернення:
  * 1 - Зіпсований;
  * 2 - Брак;
  * 3 - Бій;
  * 4 - Невідповідність ціни;
  * 5 - Відсутність в замовленні;
  * 6 - Недовіз;
  * 7 - Без документів;
  * 8 - Пересорт;
  * 9 - Невідповідність штрих-коду;
  * 10 - Відсутність в БД;
  * 11 - Нетоварний вигляд;
  * 12 - Бомбаж;
  * 13 - Розвакуумація;
  * 14 - Понад заказу;
  * 15 - Невідповідність назви;
  * 16 - Невідповідність грамовки;
  * 17 - Відсутність сертифікатів;
  * 18 - Відсутність терміну придатності;
  * 19 - Відсутність ветеринарного свідоцтва;
  * 20 - Відсутність акцизних марок;
  * 21 - Відсутність інформаціі для покупців;
  * 22 - Відсутність рекомендованої ціни на тютюнових виробах;
  * 23 - Відсутність дати виготовлення;
  * 24 - Відсутність кінцевого терміну реалізації;
  * 25 - Надлишки;
  * 26 - Малий термін;
  * 27 - Протерміновано;
  * 99 - Вільний текст"
  4.1.1.19.2	ReasonText	M	Рядок (75)	Вільний текст вказання причини розбіжності товару
  5	Invoice-Summary			Підсумки (початок блоку)
  5.1	TotalLines	M	Ціле число (4)	Кількість рядків в документі
  5.2	Tax-Summary			Податки (початок блоку)
  5.2.1	Tax-Summary-Line			Рядок податків (початок блоку)
  5.2.1.1	TaxRate	O	Число позитивне	Ставка ПДВ (20%, 7%, 0%)
  5.2.1.2	TaxAmount	O	Decimal (18,2)	Сума податку для кожної категорії податку
  5.2.1.3	TaxableAmount	O	Decimal (18,2)	Оподаткована сума за обраною категорією податку
  5.2.1.4	CorrectionTaxAmount	M	Decimal (18,2)	Загальна сума коригування ПДВ
  5.2.1.5	CorrectionTaxableAmount	M	Decimal (18,2)	Загальна сума коригування без ПДВ
  5.2.1.6	CorrectionGrossAmount	M	Decimal (18,2)	Загальна сума коригування з ПДВ
