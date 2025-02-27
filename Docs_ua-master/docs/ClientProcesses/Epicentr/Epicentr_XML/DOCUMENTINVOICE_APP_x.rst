##########################################################################################################################
**Акт приймання-передачі (DOCUMENTINVOICE_APP)**
##########################################################################################################################

**XML:**

.. code:: xml

  <Document-Invoice>
  <Invoice-Header>
  <InvoiceNumber>2936_docInv_1</InvoiceNumber>
  <InvoiceDate>2022-07-04</InvoiceDate>
  <DocumentFunctionCode>APP</DocumentFunctionCode>
  <ContractNumber>22222</ContractNumber>
  <ContractDate>2022-07-01</ContractDate>
  </Invoice-Header>
  <Invoice-References>
  <ReceivingAdvices>
  <ReceivingAdvice>
  <ReceivingAdviceNumber>2936_des_1</ReceivingAdviceNumber>
  <ReceivingAdviceDate>2022-07-01</ReceivingAdviceDate>
  <ReceivingAdviceTime>12:10</ReceivingAdviceTime>
  </ReceivingAdvice>
  <ReceivingAdvice>
  <ReceivingAdviceNumber>2937_des_2</ReceivingAdviceNumber>
  <ReceivingAdviceDate>2022-07-02</ReceivingAdviceDate>
  <ReceivingAdviceTime>13:30</ReceivingAdviceTime>
  </ReceivingAdvice>
  </ReceivingAdvices>
  </Invoice-References>
  <Invoice-Parties>
  <Buyer>
  <ILN>9864065732181</ILN>
  <TaxID>1234567890</TaxID>
  <Name>FelEx_1</Name>
  <StreetAndNumber>вул.Чистяківська,100</StreetAndNumber>
  <CityName>м.Київ</CityName>
  <PostalCode>64000</PostalCode>
  <UtilizationRegisterNumber>12345670</UtilizationRegisterNumber>
  </Buyer>
  <Seller>
  <ILN>9864065732211</ILN>
  <TaxID>1234445670</TaxID>
  <Name>FelEx_2</Name>
  <StreetAndNumber>вул.Чистяківська,101</StreetAndNumber>
  <CityName>м.Дніпро</CityName>
  <PostalCode>68001</PostalCode>
  <UtilizationRegisterNumber>12345678</UtilizationRegisterNumber>
  </Seller>
  </Invoice-Parties>
  <Invoice-Lines>
  <Line>
  <Line-Item>
  <LineNumber>1</LineNumber>
  <UnloadingPlace>123456789</UnloadingPlace>
  <IdentificationCode>103</IdentificationCode>
  <CargoPlaces>
  <CargoPlace>CD117842996</CargoPlace>
  <CargoPlace>CD117842997</CargoPlace>
  </CargoPlaces>
  <Invoices>
  <Invoice>
  <OriginalInvoiceNumber>2936_ord_1</OriginalInvoiceNumber>
  <OriginalInvoiceDate>2022-07-03</OriginalInvoiceDate>
  </Invoice>
  <Invoice>
  <OriginalInvoiceNumber>2936_ord_2</OriginalInvoiceNumber>
  <OriginalInvoiceDate>2022-07-04</OriginalInvoiceDate>
  </Invoice>
  </Invoices>
  <Orders>
  <Order>
  <BuyerOrderNumber>2936_ord_1</BuyerOrderNumber>
  <BuyerOrderDate>2022-07-03</BuyerOrderDate>
  </Order>
  <Order>
  <BuyerOrderNumber>2936_ord_2</BuyerOrderNumber>
  <BuyerOrderDate>2022-07-04</BuyerOrderDate>
  </Order>
  </Orders>
  <TemperatureMode>1</TemperatureMode>
  <DeclaredQuantity>3</DeclaredQuantity>
  <TransportUnit>1</TransportUnit>
  </Line-Item>
  </Line>
  </Invoice-Lines>
  <Invoice-Summary>
  <TotalLines>1</TotalLines>
  <TotalDeclaredQuantity>3</TotalDeclaredQuantity>
  </Invoice-Summary>
  </Document-Invoice>

-------------------------

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSsecP9tUKcSNR_g7heXzG8uYSvVxKvQGc1e35NIFS5-ucGxDHUZPe_IP075HNuYw/pubhtml?gid=2000315996&single=true" width="1500" height="2700" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
  1.1	InvoiceNumber	M	Рядок(35)	Номер документа
  1.2	InvoiceDate	M	yyyy-MM-dd	Дата документа
  1.3	DocumentFunctionCode	M	APP	"Функціональний код типу документа:
  * APP - акт прийому-передачі"
  1.4	ContractNumber	M	Рядок(70)	Номер контракту
  1.5	ContractDate	O	yyyy-MM-dd	Дата контракту
  2	Invoice-Reference	O		Підстава (початок блоку)
  2.1	ReceivingAdvices	O		Резерви (початок блоку)
  2.1.1	ReceivingAdvice	O		Отримане рішення по резерву (початок блоку). Блоків може бути кілька
  2.1.1.1	ReceivingAdviceNumber	O	Рядок(70)	Номер отриманого резерву
  2.1.1.2	ReceivingAdviceDate	O	yyyy-MM-dd	Дата резерву
  2.1.1.3	ReceivingAdviceTime	O	HH:mm	Час резерву
  3	Invoice-Parties	M		Блок контрагентів (початок)
  3.1	Buyer	M		Блок покупця (початок)
  3.1.1	ILN	M	[0-9](13)	GLN Покупця
  3.1.2	TaxID	O	Рядок(70)	Податковий ідентифікатор Покупця
  3.1.3	Name	M	Рядок(175)	Назва Покупця
  3.1.4	StreetAndNumber	O	Рядок(140)	Назва вулиці та номер будинку Покупця
  3.1.5	CityName	O	Рядок(35)	Назва міста Покупця
  3.1.6	PostalCode	O	Рядок(17)	Поштовий індекс Покупця
  3.1.7	UtilizationRegisterNumber	M	Рядок(70)	NIP Покупця
  3.2	Seller	M		Блок продавця (початок)
  3.2.1	ILN	M	[0-9](13)	GLN Продавця
  3.2.2	TaxID	M	Рядок(70)	Податковий ідентифікатор Продавця
  3.2.3	Name	M	Рядок(175)	Назва Продавця
  3.2.4	StreetAndNumber	M	Рядок(140)	Назва вулиці та номер будівлі Продавця
  3.2.5	CityName	M	Рядок(35)	Назва міста Продавця
  3.2.6	PostalCode	M	Рядок(17)	Поштовий індекс Продавця
  3.2.7	UtilizationRegisterNumber	M	Рядок(70)	NIP Продавця
  4	Invoice-Lines	O		Рядки ТН (початок блоку)
  4.1	Line	O		Рядок (початок блоку)
  4.1.1	Line-Item	M		Позиція (початок блоку)
  4.1.1.1	LineNumber	M	Число	Номер рядка
  4.1.1.2	UnloadingPlace	M	[0-9](13)	Місце розвантаження
  4.1.1.3	IdentificationCode	M	Рядок(10)	Код Місця розвантаження
  4.1.1.4	CargoPlaces	M		Грузові місця, (початок блоку). Блок може містити список
  4.1.1.4.1	CargoPlace	M	Рядок(35)	Грузове місце, може бути кілька
  4.1.1.5	Invoices	M		Видаткові накладні (початок блоку)
  4.1.1.5.1	Invoice	O		Видаткова накладна (початок блоку). Блоків може бути кілька
  4.1.1.5.1.1	OriginalInvoiceNumber	M	Рядок(70)	Номер видаткової накладної
  4.1.1.5.1.2	OriginalInvoiceDate	O	yyyy-MM-dd	Дата видаткової накладної
  4.1.1.6	Orders	M		Замовлення (початок блоку)
  4.1.1.6.1	Order	M		Замовлення (початок блоку). Блоків може бути кілька
  4.1.1.6.1.1	BuyerOrderNumber	M	Рядок (35)	Номер замовлення
  4.1.1.6.1.2	BuyerOrderDate	M	yyyy-MM-dd	Дата складання документа Замовлення
  4.1.1.7	TemperatureMode	M	Ціле число	"Температурний режим; може приймати значення:
  * 0 - ні
  * 1 - так"
  4.1.1.8	DeclaredQuantity	O	Число десяткове(2)	Кількість місць
  4.1.1.9	TransportUnit	O	Ціле число	"Транспортний юніт. Можливі значення:
  * 1 - EURO піддон
  * 2 - Короб
  * 3 - Нестандартний"
  5	Invoice-Summary	O		Підсумки (початок блоку)
  5.1	TotalLines	M	Число	Всього рядків
  5.2	TotalDeclaredQuantity	O	Число десяткове(2)	Всього місць