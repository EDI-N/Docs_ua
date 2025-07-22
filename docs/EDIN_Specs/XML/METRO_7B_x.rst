##########################################################################################################################
**Додаток до договору 7Б (METRO_7B)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/dodatok-do-dogovoru-7b-metro-7b>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Додаток до договору 7Б (METRO_7B)

   **XML:**

   .. code:: xml

   <Document-ProductCatalogue>
      <ProductCatalogue-Header>
         <ProductCatalogueNumber>7B_ftpTest_test3_20211001</ProductCatalogueNumber>
         <ProductCatalogueDate>2021-10-28</ProductCatalogueDate>
         <AdditionalAgreementDate>2021-10-01</AdditionalAgreementDate>
         <ReviewDeadlineDate>2021-10-31</ReviewDeadlineDate>
         <ContractNumber>21554</ContractNumber>
         <ContractDate>2016-02-22</ContractDate>
         <ContractGLN>9991027243437</ContractGLN>
         <ContractDescription>153</ContractDescription>
         <DocumentFunctionCode>7B</DocumentFunctionCode>
         <MessageType>7Б</MessageType>
         <SpecialServices>
            <SpecialService>
               <ServiceNumber>C-01</ServiceNumber>
               <ServiceName>Services on the organization for the goods promotion/ Послуги по організації просування товарів Постачальника</ServiceName>
               <ContractDescription>153</ContractDescription>
               <ItemCategoryNumber>FB106 (153 PUAR)</ItemCategoryNumber>
               <PeriodStartDate>2021-10-01</PeriodStartDate>
               <PeriodEndDate>2021-10-31</PeriodEndDate>
               <ReviewDeadlineDate>2021-10-31</ReviewDeadlineDate>
               <InvoicingPeriod>end of month/ кінець місяця</InvoicingPeriod>
               <ConditionMethod>% from turnover/ % від товарообігу</ConditionMethod>
               <ConditionModels>
                  <ConditionModel>
                     <ConditionValue>0.5</ConditionValue>
                     <TurnoverScale>2000000</TurnoverScale>
                     <Interpolation>YES</Interpolation>
                  </ConditionModel>
                  <ConditionModel>
                     <ConditionValue>1</ConditionValue>
                     <TurnoverScale>3500000</TurnoverScale>
                     <Interpolation>YES</Interpolation>
                  </ConditionModel>
                  <ConditionModel>
                     <ConditionValue>1.5</ConditionValue>
                     <TurnoverScale>5000000</TurnoverScale>
                     <Interpolation>YES</Interpolation>
                  </ConditionModel>
                  <ConditionModel>
                     <ConditionValue>2</ConditionValue>
                     <TurnoverScale>6500000</TurnoverScale>
                     <Interpolation>YES</Interpolation>
                  </ConditionModel>
                  <ConditionModel>
                     <ConditionValue>2.5</ConditionValue>
                     <TurnoverScale>8000000</TurnoverScale>
                     <Interpolation>YES</Interpolation>
                  </ConditionModel>
                  <ConditionModel>
                     <ConditionValue>3</ConditionValue>
                     <TurnoverScale>9500000</TurnoverScale>
                     <Interpolation>YES</Interpolation>
                  </ConditionModel>
               </ConditionModels>
            </SpecialService>
         </SpecialServices>
      </ProductCatalogue-Header>
      <ProductCatalogue-Parties>
         <Buyer>
            <ILN>4820086630009</ILN>
            <Name>ТОВ МЕТРО Кеш енд Кері Україна</Name>
            <CityName>02140, Київ, Україна</CityName>
            <StreetAndNumber>пр-т П. Григоренка, 43</StreetAndNumber>
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
         <DeliveryPoint>
            <ILN>9991027243437</ILN>
            <DeliveryPlace>0</DeliveryPlace>
         </DeliveryPoint>
      </ProductCatalogue-Parties>
      <ProductCatalogue-Lines>
         <Line>
            <Line-Item>
               <ServiceNumber>AD01</ServiceNumber>
               <ServiceName>Advertising services/ Послуги з рекламування товарів Постачальника</ServiceName>
               <ItemCategoryNumber>FB106 (153 PUAR)</ItemCategoryNumber><ContractDescription>153</ContractDescription>
               <PeriodStartDate>2021-10-01</PeriodStartDate>
               <PeriodEndDate>2021-10-31</PeriodEndDate>
               <ReviewDeadlineDate>2021-10-31</ReviewDeadlineDate>
               <InvoicingDate />
               <InvoicingPeriod>end of month UAH/ кінець місяця</InvoicingPeriod><ConditionMethod>% from turnover/ % від товарообігу</ConditionMethod>
               <Amount>5</Amount>
               <Currency>%</Currency>
               <Remarks /></Line-Item>
               <Line-Parties>
                  <Orderer>
                     <ILN>9991027243437</ILN>
                     <OrdererPlace>0</OrdererPlace>
                  </Orderer>
               </Line-Parties>
            </Line>
            <Line>
               <Line-Item>
                  <ServiceNumber>HVS1</ServiceNumber>
                  <ServiceName>High volume sales services/ Послуги зі стимулювання підвищених обсягів продажу товарів Постачальника</ServiceName>
                  <ItemCategoryNumber>FB106 (153 PUAR)</ItemCategoryNumber>
                  <ContractDescription>153</ContractDescription>
                  <PeriodStartDate>2021-10-01</PeriodStartDate>
                  <PeriodEndDate>2021-10-31</PeriodEndDate>
                  <ReviewDeadlineDate>2021-10-31</ReviewDeadlineDate>
                  <InvoicingDate />
                  <InvoicingPeriod>end of month UAH/ кінець місяця</InvoicingPeriod>
                  <ConditionMethod>% from turnover/ % від товарообігу</ConditionMethod>
                  <Amount>2</Amount>
                  <Currency>%</Currency>
                  <Remarks>BMPL</Remarks>
               </Line-Item>
               <Line-Parties>
                  <Orderer>
                     <ILN>9991027243437</ILN>
                     <OrdererPlace>0</OrdererPlace>
                  </Orderer>
               </Line-Parties>
            </Line>
            <Line>
               <Line-Item>
                  <ServiceNumber>PR01</ServiceNumber>
                  <ServiceName>Marketing services (promo-actions)/ Маркетингові послуги стосовно товарів Постачальника (промо-активності)</ServiceName>
                  <ItemCategoryNumber>FB106 (153 PUAR)</ItemCategoryNumber>
                  <ContractDescription>153</ContractDescription>
                  <PeriodStartDate>2021-10-01</PeriodStartDate>
                  <PeriodEndDate>2021-10-31</PeriodEndDate>
                  <ReviewDeadlineDate>2021-10-31</ReviewDeadlineDate>
                  <InvoicingDate />
                  <InvoicingPeriod>according to App#7a / згідно Дод №7а </InvoicingPeriod>
                  <ConditionMethod>% from turnover/ % від товарообігу</ConditionMethod>
                  <Amount>3</Amount>
                  <Currency>%</Currency>
                  <Remarks>promo</Remarks>
               </Line-Item>
               <Line-Parties>
                  <Orderer>
                     <ILN>9991027243437</ILN>
                     <OrdererPlace>0</OrdererPlace>
                  </Orderer>
               </Line-Parties>
            </Line>
            <Line>
               <Line-Item>
                  <ServiceNumber>C-01</ServiceNumber>
                  <ServiceName>Services on the organization for the goods promotion/ Послуги по організації просування товарів Постачальника</ServiceName>
                  <ItemCategoryNumber>FB106 (153 PUAR)</ItemCategoryNumber>
                  <ContractDescription>153</ContractDescription>
                  <PeriodStartDate>2021-10-01</PeriodStartDate>
                  <PeriodEndDate>2021-10-31</PeriodEndDate>
                  <ReviewDeadlineDate>2021-10-31</ReviewDeadlineDate>
                  <InvoicingDate />
                  <InvoicingPeriod>end of month UAH/ кінець місяця</InvoicingPeriod>
                  <ConditionMethod>% from turnover/ % від товарообігу</ConditionMethod>
                  <Amount>2.5</Amount>
                  <Currency>%</Currency>
                  <Remarks />
               </Line-Item>
               <Line-Parties>
                  <Orderer>
                     <ILN>9991027243437</ILN>
                     <OrdererPlace>0</OrdererPlace>
                  </Orderer>
               </Line-Parties>
            </Line>
         </ProductCatalogue-Lines>
         <ProductCatalogue-Summary>
            <TotalLines>4</TotalLines>
         </ProductCatalogue-Summary>
      </Document-ProductCatalogue>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1908091978&single=true" width="1100" height="1750" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   1.2	ProductCatalogueDate	O	Дата (РРРР-ММ-ДД)	Дата каталогу продукції
   1.3	AdditionalAgreementDate	O	Дата (РРРР-ММ-ДД)	Дата підписання додаткової угоди
   1.4	ReviewDeadlineDate	M	Дата (РРРР-ММ-ДД)	Термін подачі на перегляд
   1.5	ContractNumber	O	Рядок (10)	Номер контракту
   1.6	ContractDate	O	Дата (РРРР-ММ-ДД)	Дата контракту
   1.7	ContractGLN	M	Число (13)	GLN контракту
   1.8	ContractDescription	O	Рядок (10)	Область закупівель
   1.9	DocumentFunctionCode	M	Рядок (2)	Функціональний код документа. Допустимі значення: 7B
   1.10	MessageType	O	Рядок (25)	Назва типу документа (7A, цінова специфікація, 7Б…)
   1.11	SpecialServices	O		Спеціальні послуги (початок блоку)
   1.11.1	SpecialService	O		Спеціальна послуга (початок блоку)
   1.11.1.1	ServiceNumber	O	Рядок (20)	Код послуги
   1.11.1.2	ServiceName	O	Рядок (250)	Опис послуги
   1.11.1.3	ContractDescription	O	Рядок (10)	Область закупівель
   1.11.1.4	ItemCategoryNumber	O	Рядок (10)	Визначена група артикулів
   1.11.1.5	PeriodStartDate	O	Дата (РРРР-ММ-ДД)	Початок періоду вистевлення послуги
   1.11.1.6	PeriodEndDate	O	Дата (РРРР-ММ-ДД)	Кінець періоду виставлення послуги
   1.11.1.7	ReviewDeadlineDate	M	Дата (РРРР-ММ-ДД)	Термін подачі на перегляд
   1.11.1.8	InvoicingPeriod	O	Рядок (72)	Дата виставлення рахунку чи періодичність виставлення рахунків
   1.11.1.9	ConditionMethod	O	Рядок (172)	Спосіб визначення вартості послуги, що належить до сплати
   1.11.1.10	ConditionModels	O		Моделі умов (початок блоку)
   1.11.1.10.1	ConditionModel	O		Модель умови (початок блоку)
   1.11.1.10.1.1	ConditionValue	O	Число з плаваючою точкою (2 знаки після коми)	Величина % в залежності від величини досягнутого товарообороту
   1.11.1.10.1.2	TurnoverScale	O	Число з плаваючою точкою (2 знаки після коми)	Необхідна сума досягнення товарообігу у грн.
   1.11.1.10.1.3	Interpolation	O	Рядок (10)	"Використовувати інтерполяцію (такні). Допустимі значення:
   Yes
   
   No"
   2	ProductCatalogue-Parties	O		Блок контрагентів (початок блоку)
   2.1	Buyer	O		Блок покупця (початок блоку)
   2.1.1	ILN	M	Число (13)	GLN покупця (Метро)
   2.1.2	Name	O	Рядок (250)	Назва (Метро)
   2.1.3	CityName	O	Рядок (250)	Назва міста (Метро)
   2.1.4	StreetAndNumber	O	Рядок (250)	Назва вулиці та номер (Метро)
   2.1.5	PhoneNumber	O	Рядок (35)	Номер телефону
   2.2	Seller	O		Блок продавця (початок блоку)
   2.2.1	ILN	M	Число (13)	GLN продавця
   2.2.2	Name	O	Рядок (250)	Назва продавця
   2.3	Sender	O		Блок відправника (початок блоку)
   2.3.1	ILN	M	Число (13)	GLN відправника
   2.4	Receiver	O		Блок отримувача (початок блоку)
   2.4.1	ILN	M	Число (13)	GLN отримувача
   2.5	DeliveryPoint	O		Блок точки доставки (початок блоку)
   2.5.1	ILN	O	Число (13)	GLN точки доставки. Значення вказується для всіх ТЦ
   2.5.2	DeliveryPlace	O	Число (3)	Код точки доставки. Значення вказується для конкретного ТЦ
   3	ProductCatalogue-Lines	O		Таблична частина (початок блоку)
   3.1	Line	O		Рядок (початок блоку)
   3.1.1	Line-Item	O		Позиція (початок блоку)
   3.1.1.1	LineNumber	O	Рядок (5)	Номер позиції
   3.1.1.2	ServiceNumber	O	Рядок (20)	Код послуги
   3.1.1.3	ServiceName	O	Рядок (250)	Опис послуги
   3.1.1.4	ItemCategoryNumber	O	Рядок (10)	Номер категорії позиції
   3.1.1.5	ContractDescription	O	Рядок (10)	Область закупівель
   3.1.1.6	PeriodStartDate	O	Дата (РРРР-ММ-ДД)	Початок періоду виставлення послуги
   3.1.1.7	PeriodEndDate	O	Дата (РРРР-ММ-ДД)	Кінець періоду виставлення послуги
   3.1.1.8	ReviewDeadlineDate	M	Дата (РРРР-ММ-ДД)	Термін подачі на перегляд
   3.1.1.9	InvoicingPeriod	O	Рядок (72)	Дата виставлення рахунку чи періодичність виставлення рахунків
   3.1.1.10	InvoicingDate	O	CCYY-MM-DD	Дата рахунку
   3.1.1.11	ConditionMethod	O	Рядок (172)	Спосіб визначення вартості послуги, що належить до сплати
   3.1.1.12	Amount	O	Число з плаваючою точкою (2 знаки після коми)	Сума
   3.1.1.13	Currency	O	Рядок (10)	Валюта
   3.1.1.14	Remarks	O	Рядок (172)	Додаткова інформація
   3.1.2	Line-Parties	O		Партії (початок блоку)
   3.1.2.1	Orderer	O		Блок замовника (початок блоку)
   3.1.2.1.1	ILN	O	Число (13)	GLN замовника. Значення вказується для всіх ТЦ
   3.1.2.1.2	OrdererPlace	O	Число (3)	Код точки доставки. Значення вказується для конкретного ТЦ
   4	ProductCatalogue-Summary	O		Підсумки (початок блоку)
   4.1	TotalLines	O	Число (5)	Кількість товарних позицій