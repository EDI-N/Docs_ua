##########################################################################################################################
**Додаток до договору 7Ц (METRO_7C)**
##########################################################################################################################

.. epigraph::

   Додаток до договору 7Ц (METRO_7C)

**XML:**

.. code:: xml

   <?xml version='1.0' encoding='windows-1251'?>
   <Document-ProductCatalogue>
         <ProductCatalogue-Header>
                  <ProductCatalogueNumber>7C_ftpTest_test1_20221017</ProductCatalogueNumber>
                  <ProductCatalogueDate>2022-10-17</ProductCatalogueDate>
                  <PeriodStartDate>2022-10-21</PeriodStartDate>
                  <PeriodEndDate>2022-10-27</PeriodEndDate>
                  <ReviewDeadlineDate>2022-10-16</ReviewDeadlineDate>
                  <PromotionalPriceStartDate>2022-10-21</PromotionalPriceStartDate>
                  <PromotionalPriceEndDate>2022-10-27</PromotionalPriceEndDate>
                  <DocumentFunctionCode>7C</DocumentFunctionCode>
                  <ServiceNumber>HVS1</ServiceNumber>
                  <ServiceName>Послуги зі стимулювання підвищених обсягів продажу товарів Постачальника</ServiceName>
                  <ContractNumber>20059</ContractNumber>
                  <ContractDate>2016-09-01</ContractDate>
                  <ContractDescription>449</ContractDescription>
         </ProductCatalogue-Header>
         <ProductCatalogue-Parties>
                  <Buyer>
                           <ILN>4820086630009</ILN>
                           <Name>ТОВ МЕТРО Кеш енд Кері Україна</Name>
                           <StreetAndNumber>проспект Петра Григоренка, 43</StreetAndNumber>
                           <CityName>Київ</CityName>
                           <PostalCode>02140</PostalCode>
                           <PhoneNumber>+380444921000</PhoneNumber>
                  </Buyer>
                  <Seller>
                           <ILN>9864065732181</ILN>
                           <Name>FelEx_1</Name>
                  </Seller>
                  <Sender>
                           <ILN>4820086630009</ILN>
                  </Sender>
                  <Receiver>
                           <ILN>9864065732181</ILN>
                  </Receiver>
         </ProductCatalogue-Parties>
         <ProductCatalogue-Lines>
                  <Line>
                           <Line-Item>
                                 <LineNumber>1</LineNumber>
         <LineType>1</LineType>
         <EAN>1472583690147</EAN>
         <BuyerItemCode>148342</BuyerItemCode>
         <SupplierItemCode>11111111</SupplierItemCode>
         <PreviousEAN>1472583690146</PreviousEAN>
         <PreviousBuyerItemCode>288795</PreviousBuyerItemCode>
         <PreviousSupplierItemCode>111111115</PreviousSupplierItemCode>
         <ExternalItemCode>3333333333</ExternalItemCode>
         <ItemDescription>MARENGO ВЕРМУТ БІЛИЙ ДЕС 1,0</ItemDescription>
         <ItemType>тип</ItemType>
         <ProductType>372</ProductType>
         <PromotionalQuantity>10</PromotionalQuantity>
         <ProductLifespan>
         <PeriodFormat>формат</PeriodFormat>
         <Period>період</Period>
         </ProductLifespan>
         <UnitOfMeasure>грн</UnitOfMeasure>
         <UnitNetPrice>118.55</UnitNetPrice>
         <NewUnitNetPrice>120.55</NewUnitNetPrice>
         <UnitNetPriceStartDate>2020-01-10</UnitNetPriceStartDate>
         <UnitNetPriceEndDate>2020-01-11</UnitNetPriceEndDate>
         <UnitGrossPrice>1201.2</UnitGrossPrice>
         <NewUnitGrossPrice>1201.2</NewUnitGrossPrice>
         <UnitGrossPriceStartDate>2020-01-10</UnitGrossPriceStartDate>
         <UnitGrossPriceEndDate>2020-01-11</UnitGrossPriceEndDate>
         <PromotionalNetPrice>10.0</PromotionalNetPrice>
         <PromotionalPriceStartDate>2020-01-10</PromotionalPriceStartDate>
         <PromotionalPriceEndDate>2020-01-11</PromotionalPriceEndDate>
         <PromotionalGrossPrice>1201.2</PromotionalGrossPrice>     
         <CommissionAmount>17.78</CommissionAmount>
         <DiscountNetPrice>118.55</DiscountNetPrice>
         <DiscountPriceStartDate>2020-01-10</DiscountPriceStartDate>
         <DiscountPriceEndDate>2020-01-11</DiscountPriceEndDate>
         <DiscountGrossPrice>1201.2</DiscountGrossPrice> 
         <SuggestedPrice>118.55</SuggestedPrice>
         <CompensationNetPrice>119.55</CompensationNetPrice>
         <Discount>11.55</Discount>
         <AgreedQuota>11.55</AgreedQuota>
         <TaxRate>7</TaxRate>
         <PeriodStartDate>2022-10-21</PeriodStartDate>
         <PeriodEndDate>2022-10-27</PeriodEndDate>
         <CostServiceTwo>0.0</CostServiceTwo>
         <CostServiceThree>0.0</CostServiceThree>
         </Line-Item>
                  </Line>
         </ProductCatalogue-Lines>
         <ProductCatalogue-Summary>
                  <TotalLines>1</TotalLines>
         </ProductCatalogue-Summary>
   </Document-ProductCatalogue>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1964803766&single=true" width="1100" height="3200" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	Document-ProductCatalogue	O		Початок документа
   1	ProductCatalogue-Header	O		Початок основного блоку
   1.1	ProductCatalogueNumber	M	Рядок (50)	Номер каталогу продукції
   1.2	ProductCatalogueDate	M	Дата (РРРР-ММ-ДД)	Дата каталогу продукції (дата відправки документа)
   1.3	PeriodStartDate	M	Дата (РРРР-ММ-ДД)	Початок дії каталогу продукції
   1.4	PeriodEndDate	M	Дата (РРРР-ММ-ДД)	Кінець дії каталогу продукції
   1.5	ReviewDeadlineDate	M	Дата (РРРР-ММ-ДД)	Термін подачі на перегляд
   1.6	PromotionalPriceStartDate	M	Дата (РРРР-ММ-ДД)	Початок періоду зниження закупівельної ціни
   1.7	PromotionalPriceEndDate	M	Дата (РРРР-ММ-ДД)	Кінець періоду зниження закупівельної ціни
   1.8	DocumentFunctionCode	M	Рядок (2)	Функціональний код документа
   1.9	CatalogueCurrency	O		Валюта
   1.10	ServiceNumber	M	Рядок (20)	Код послуги
   1.11	ServiceName	M	Рядок (250)	Опис послуги
   1.12	ContractNumber	M	Рядок (10)	Номер контракту
   1.13	ContractDate	M	Дата (РРРР-ММ-ДД)	Дата контракту (дата підписання контракту з постачальником)
   1.14	ContractDescription	M	Рядок (10)	Опис контракту
   1.15	ContractExpiryDate	O	Дата (РРРР-ММ-ДД)	Дата закінчення дії контракту. Поле на даний момент не використовується
   1.16	ContractGLN	O	Число (13)	GLN контракту. Поле на даний момент не використовується
   1.17	SubContractNumber	O	Рядок (20)	Номер договору
   1.18	SubContractDate	O	Рядок (20)	Дата договору
   1.19	AgreementNumber	O	Число (3)	Допустима кількість узгоджень. Поле на даний момент не використовується
   1.20	ItemCategoryNumber	O	Число	Номер категорії позиції
   1.21	AccountNumber	O	Рядок (10)	Id промо
   1.22	PromotionDealNumber	O	Рядок (250)	Номер промо
   1.23	PromotionDealName	O	Рядок (250)	Назва промо
   1.24	PostOfficeNumber	O	Рядок (35)	Метро Пошта №
   1.25	DiscountWorkStatus	O	[0/1]	Робота з ціною зі знижкою: 0-ні, 1-так
   1.26	Comment	O		Коментар (початок блоку)
   1.26.1	Text	O	Рядок	Текст коментара
   1.26.2	LanguageCode	O	Рядок	Код мови
   1.27	Reference	O		Довідка (початок блоку)
   1.27.1	ReferenceNumber	O	Рядок	Номер довідки
   1.27.2	ReferenceDate	O	Рядок	Дата довідки
   1.27.3	ReferenceStatus	O	Рядок	Статус довідки
   2	ProductCatalogue-Parties	O		Блок контрагентів (початок блоку)
   2.1	Buyer	O		Блок покупця (початок блоку)
   2.1.1	ILN	M	Число (13)	GLN покупця (Метро)
   2.1.2	OrderContact	O	Рядок	Договір на замовлення
   2.1.3	SalesAdministration	O	Рядок	Адміністрація продажів
   2.1.4	Name	M	Рядок (175)	Назва (Метро)
   2.1.5	StreetAndNumber	M	Рядок (140)	Назва вулиці та номер (Метро)
   2.1.6	CityName	M	Рядок (35)	Назва міста (Метро)
   2.1.7	PostalCode	O	Рядок (17)	Поштовий індекс
   2.1.8	PhoneNumber	M	Рядок (35)	Номер телефону
   2.2	Seller	O		Блок продавця (початок блоку)
   2.2.1	ILN	M	Число (13)	GLN продавця
   2.2.2	OrderContact	O	Рядок	Договір на замовлення
   2.2.3	SalesAdministration	O	Рядок	Адміністрація продажів
   2.2.4	Name	M	Рядок (175)	Назва продавця
   2.3	Sender	O		Блок відправника (початок блоку)
   2.3.1	ILN	M	Число (13)	GLN відправника
   2.4	Receiver	O		Блок отримувача (початок блоку)
   2.4.1	ILN	M	Число (13)	GLN отримувача
   3	ProductCatalogue-Lines	O		Таблична частина (початок блоку)
   3.1	Line	O		Рядок (початок блоку)
   3.1.1	Line-Item	O		Позиція (початок блоку)
   3.1.1.1	LineNumber	М	Ціле число	номер позиції в табличній частині
   3.1.1.2	LineType	O	[0/1/2/3]	Дія: 0-зміна регулярної ціни, 1-зміна промоціни, 2–добавлення товару, 3-видалення товару. Поле на даний момент не використовується
   3.1.1.3	EAN	O	Число (13)	Штрих-код продукту
   3.1.1.4	BuyerItemCode	M	Рядок (10)	Артикул (внутрішній номер) в БД Метро
   3.1.1.5	SupplierItemCode	O	Рядок	Код клієнта по товару
   3.1.1.6	PreviousBuyerItemCode	O	Рядок (10)	Артикул підгрупи. Поле на даний момент не використовується
   3.1.1.7	ExternalItemCode	O	Число (4-10)	код товару згідно довідника УКТ ЗЕД. Поле на даний момент не використовується
   3.1.1.8	PreviousEAN	O	Рядок	Додатковий штрих-код продукту
   3.1.1.9	PreviousBuyerItemCode	O	Рядок	Додатковий внутрішній артикул
   3.1.1.10	PreviousSupplierItemCode	O	Рядок	Додатковий код клієнта по товару
   3.1.1.11	ItemDescription	M	Рядок (100)	Опис товарної позиції
   3.1.1.12	ItemType	O		Тип позиції. Поле на даний момент не використовується
   3.1.1.13	ProductType	O		Тип товару. Поле на даний момент не використовується
   3.1.1.14	PromotionalQuantity	O	Рядок (50)	Кількість промо товару
   3.1.1.15	ProductLifespan	O		Термін служби продукту (початок блоку). Блок на даний момент не використовується
   3.1.1.15.1	PeriodFormat	O		Формат періоду
   3.1.1.15.2	Period	O		Період
   3.1.1.16	PeriodStartDate	M	Дата (РРРР-ММ-ДД)	Початок періоду дії
   3.1.1.17	PeriodEndDate	M	Дата (РРРР-ММ-ДД)	Кінець періоду дії
   3.1.1.18	UnitOfMeasure	O	Рядок (50)	Одиниця виміру. Поле на даний момент не використовується
   3.1.1.19	UnitNetPrice	M	Позитивне число з плаваючою точкою (2 знака після коми)	Ціна без ПДВ (закупівельна ціна в грн)
   3.1.1.20	NewUnitNetPrice	O	Позитивне число з плаваючою точкою (2 знака після коми)	Нова ціна без ПДВ. Поле на даний момент не використовується
   3.1.1.21	CommissionAmount	O	Позитивне число з плаваючою точкою (2 знака після коми)	Компенсація грн. за шт реалізованого товару
   3.1.1.22	UnitNetPriceStartDate	O	Дата (РРРР-ММ-ДД)	Початок дії ціни (закупівельної ціни)
   3.1.1.23	UnitNetPriceEndDate	O	Дата (РРРР-ММ-ДД)	Кінець дії ціни (закупівельної ціни)
   3.1.1.24	UnitGrossPrice	O	Позитивне число з плаваючою точкою (2 знака після коми)	Ціна з ПДВ. Поле на даний момент не використовується
   3.1.1.25	NewUnitGrossPrice		Позитивне число з плаваючою точкою (2 знака після коми)	Нова ціна з ПДВ. Поле на даний момент не використовується
   3.1.1.26	UnitGrossPriceStartDate	O	Дата (РРРР-ММ-ДД)	Початок дії ціни з ПДВ. Поле на даний момент не використовується
   3.1.1.27	UnitGrossPriceEndDate	O	Дата (РРРР-ММ-ДД)	Кінець дії ціни з ПДВ. Поле на даний момент не використовується
   3.1.1.28	PromotionalNetPrice	O	Позитивне число з плаваючою точкою (2 знака після коми)	Промо ціна без ПДВ (закупівельна ціна (усі магазини)). Поле на даний момент не використовується
   3.1.1.29	PromotionalPriceStartDate	O	Дата (РРРР-ММ-ДД)	Початок дії промо ціни. Поле на даний момент не використовується
   3.1.1.30	PromotionalPriceEndDate	O	Дата (РРРР-ММ-ДД)	Кінець дії промо ціни. Поле на даний момент не використовується
   3.1.1.31	PromotionalGrossPrice	O	Позитивне число з плаваючою точкою (2 знака після коми)	Промо ціна з ПДВ. Поле на даний момент не використовується
   3.1.1.32	DiscountNetPrice	M	Позитивне число з плаваючою точкою (2 знака після коми)	Ціна (закупівельна) зі знижкою без ПДВ в грн.
   3.1.1.33	DiscountPriceStartDate	O	Дата (РРРР-ММ-ДД)	Початок дії ціни зі знижкою. Поле на даний момент не використовується
   3.1.1.34	DiscountPriceEndDate	O	Дата (РРРР-ММ-ДД)	Кінець дії ціни зі знижкою. Поле на даний момент не використовується
   3.1.1.35	DiscountGrossPrice	O	Позитивне число з плаваючою точкою (2 знака після коми)	Ціна зі знижкою з ПДВ. Поле на даний момент не використовується
   3.1.1.36	SuggestedPrice	O	Позитивне число з плаваючою точкою (2 знака після коми)	Рекомендована ціна. Поле на даний момент не використовується
   3.1.1.37	CompensationNetPrice	O	Позитивне число з плаваючою точкою (2 знака після коми)	Компенсаційна ціна. Поле на даний момент не використовується
   3.1.1.38	Discount	O	Позитивне число з плаваючою точкою (2 знака після коми)	Відсоток (%) зміни ціни
   3.1.1.39	AgreedQuota	O	Позитивне число з плаваючою точкою (2 знака після коми)	Узгоджена квота з постачальником
   3.1.1.40	CostServiceTwo	O	Позитивне число з плаваючою точкою (2 знака після коми)	Вартість послуги 2-го цінника за одиницю реалізованого товару (грн без ПДВ)
   3.1.1.41	CostServiceThree	O	Позитивне число з плаваючою точкою (2 знака після коми)	Вартість послуги 3-го цінника за одиницю реалізованого товару (грн без ПДВ)
   3.1.1.42	TaxRate	O	Позитивне число з плаваючою точкою (2 знака після коми)	Ставка податку. Поле на даний момент не використовується
   4	ProductCatalogue-Summary	O		Підсумки (початок блоку)
   4.1	TotalLines	M	Число (5)	Кількість товарних позицій