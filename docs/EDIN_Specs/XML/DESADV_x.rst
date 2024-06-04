##########################################################################################################################
**Повідомлення про відвантаження (DESADV)**
##########################################################################################################################

.. epigraph::

   Повідомлення про відвантаження (DESADV) відправляє постачальник у відповідь на **Замовлення (ORDER)**. При цьому постачальник може змінити кількість замовлених товарних позицій, що поставляються, дату і час поставки, додаткові відомості. Даний документ є аналогом товарно-транспортної накладної (ТТН)

**XML:**

.. code:: xml

   <DESADV>
   <NUMBER>11111</NUMBER>
   <DATE>2023-03-03</DATE>
   <VERSION>2</VERSION>
   <DELIVERYDATE>2023-03-06</DELIVERYDATE>
   <DELIVERYTIME>20:55</DELIVERYTIME>
   <ORDERNUMBER>11111</ORDERNUMBER>
   <ORDERDATE>2023-03-03</ORDERDATE>
   <ORDRSPNUMBER>111</ORDRSPNUMBER>
   <ORDRSPDATE>2023-03-02</ORDRSPDATE>
   <DELIVERYNOTENUMBER>1111</DELIVERYNOTENUMBER>
   <DELIVERYNOTEDATE>2023-03-03</DELIVERYNOTEDATE>
   <RECIPTYPE>1</RECIPTYPE>
   <SUPPLIERORDENUMBER>38392</SUPPLIERORDENUMBER>
   <SUPPLIERORDERDATE>2023-03-04</SUPPLIERORDERDATE>
   <INFO>11111</INFO>
   <WAYBILLNUMBER>1111</WAYBILLNUMBER>
   <WAYBILLDATE>2023-03-07</WAYBILLDATE>
   <PAYMENTTERM>2023-03-08</PAYMENTTERM>
   <SHIPMENTS>1</SHIPMENTS>
   <CAMPAIGNNUMBER>111</CAMPAIGNNUMBER>
   <CAMPAIGNNUMBERDATE>2023-03-01</CAMPAIGNNUMBERDATE>
   <TRANSPORTQUANTITY>1</TRANSPORTQUANTITY>
   <TRANSPORTMARK>Reno Master</TRANSPORTMARK>
   <TRANSPORTID>111111</TRANSPORTID>
   <TRANSPORTERNAME>Сергій</TRANSPORTERNAME>
   <TRANSPORTERTYPE>31</TRANSPORTERTYPE>
   <TRANSPORTTYPE>30</TRANSPORTTYPE>
   <PACKAGEWIGHT>40.50</PACKAGEWIGHT>
   <TOTALPACKAGES>40.30</TOTALPACKAGES>
   <TOTALPALLETS>60.40</TOTALPALLETS>
   <PACKAGEWEIGHT>39.50</PACKAGEWEIGHT>
   <HEAD>
      <SUPPLIER>9864066822430</SUPPLIER>
      <SUPPLIERNAME>Василій</SUPPLIERNAME>
      <BUYER>9864065740902</BUYER>
      <BUYERCODE>43562211</BUYERCODE>
      <DELIVERYPLACE>9864065740902</DELIVERYPLACE>
      <FINALRECIPIENT>9864065740902</FINALRECIPIENT>
      <SENDER>9864065740902</SENDER>
      <SENDERNAME>Василій</SENDERNAME>
      <SENDERPHONE>380955678484</SENDERPHONE>
      <SENDERCITY>Київ</SENDERCITY>
      <SENDERADRESS>вул.Чистяківська 40</SENDERADRESS>
      <RECIPIENT>9864066822430</RECIPIENT>
      <EDIINTERCHANGEID>11111</EDIINTERCHANGEID>
   <PACKINGSEQUENCE>
      <HIERARCHICALID>1</HIERARCHICALID>
   <POSITION>
      <POSITIONNUMBER>1</POSITIONNUMBER>
      <PRODUCT>0433779142</PRODUCT>
      <PRODUCTIDSUPPLIER>91421</PRODUCTIDSUPPLIER>
      <IDPRODUCER>57683929</IDPRODUCER>
      <PRODUCTIDBUYER>1222653</PRODUCTIDBUYER>
      <DELIVEREDQUANTITY>12</DELIVEREDQUANTITY>
      <DELIVEREDUNIT>BH</DELIVEREDUNIT>
      <ORDEREDQUANTITY>12</ORDEREDQUANTITY>
      <ORDERUNIT>BH</ORDERUNIT>
      <ADVICEPRICE>100.34</ADVICEPRICE>
      <SSCC>111849204958843245</SSCC>
      <PARTYNAME>Янтарь</PARTYNAME>
      <INVOICEDQUANTITY>70</INVOICEDQUANTITY>
      <INVOICEUNIT>шт</INVOICEUNIT>
      <AMOUNT>34188.00</AMOUNT>
      <AMOUNTWITHVAT>1111.00</AMOUNTWITHVAT>
      <PORTAL_CERT>349558323943289</PORTAL_CERT>
      <CUSTOMSTARIFFNUMBER>1111111</CUSTOMSTARIFFNUMBER>
      <PRICE>308.000000</PRICE>
      <PRICEWITHVAT>369.60</PRICEWITHVAT>
      <DISCOUNT>10</DISCOUNT>
      <TAXRATE>20</TAXRATE>
      <CONDITIONSTATUS>346</CONDITIONSTATUS>
      <DESCRIPTION>Ковбаска копчена</DESCRIPTION>
      <PACKAGEID>1111</PACKAGEID>
      <PARTNUMBER>0949050453</PARTNUMBER>
      <SERIALNUMBER>11111</SERIALNUMBER>
      <MINIMUMORDERQUANTITY>11</MINIMUMORDERQUANTITY>
      <GOODDATE>2023-03-08</GOODDATE>
      <BRUTTOWEIGHT>50.30</BRUTTOWEIGHT>
   <CERTIFICATES>
      <CERTNUMBER>4242DF3232395811</CERTNUMBER>
      <CERTTYPE>SES</CERTTYPE>
      <BATCHNUMBER>номер патрії</BATCHNUMBER>
      <CERTSTARTDATE>2023-03-08</CERTSTARTDATE>
      <CERTENDDATE>2023-03-09</CERTENDDATE>
      <URL>url</URL>
      <PRODUCTS>
         <PRODUCTCODE>0433779142</PRODUCTCODE>
         <PRODUCTCODE>0433779142</PRODUCTCODE>
      </PRODUCTS>
   </CERTIFICATES>
   </POSITION>
   </PACKINGSEQUENCE>
   </HEAD>
   </DESADV>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1507937531&single=true" width="1100" height="2800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	DESADV			Початок документа
   1	NUMBER	M	Рядок (50)	Номер повідомлення про відвантаження
   2	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   3	VERSION	O	Ціле позитивне число	Версія документа (на рівні одного ланцюжка документів). При заміні документа (номер документа зберігається) потрібно збільшувати значення на одиницю (n+1)
   4	DELIVERYDATE	M	Дата (РРРР-ММ-ДД)	Дата поставки
   5	DELIVERYTIME	O	Час (год: хв)	Час поставки
   6	ORDERNUMBER	M	Рядок (50)	Номер замовлення
   7	ORDERDATE	M	Дата (РРРР-ММ-ДД)	Дата замовлення
   8	ORDRSPNUMBER	O	Рядок (16)	Номер підтвердження замовлення
   9	ORDRSPDATE	O	Дата (РРРР-ММ-ДД)	Дата підтвердження замовлення
   10	DELIVERYNOTENUMBER	M	Рядок (16)	Номер накладної
   11	DELIVERYNOTEDATE	M	Дата (РРРР-ММ-ДД)	Дата накладної
   12	RECIPTYPE	О	Рядок (1)	Доступні значення: 0 - «Пряма поставка на АТБ» (за замовчуванням), 1 - «Поставка зі складів Логістик Юніон».
   13	SUPPLIERORDENUMBER	O	Рядок (35)	Номер замовлення в обліковій системі постачальника
   14	SUPPLIERORDERDATE	O	Дата (РРРР-ММ-ДД)	Дата повідомлення про відвантаження
   15	INFO	O	Рядок (70)	Вільний текст
   16	WAYBILLNUMBER	O	Рядок (70)	Номер транспортної накладної
   17	WAYBILLDATE	O	Дата (РРРР-ММ-ДД)	Дата транспортної накладної
   18	PAYMENTTERM	O	Дата (РРРР-ММ-ДД)	Кінцева дата оплати товару
   19	SHIPMENTS	O	Рядок (1)	Перевезення
   20	CAMPAIGNNUMBER	O	Рядок (70)	Номер договору на поставку
   21	CAMPAIGNNUMBERDATE	O	Дата (РРРР-ММ-ДД)	Дата договору
   22	TRANSPORTQUANTITY	O (O/M для Розетка)	Число позитивне	Кількість машин. Для Розетка: Загальна кількість повідомлень про відвантаження на замовлення. Якщо одне з полей TRANSPORTID чи TRANSPORTQUANTITY заповнено, то інше автоматично є обов’язковим.
   23	TRANSPORTMARK	O	Рядок (70)	Марка машини
   24	TRANSPORTID	O (O/M для Розетка)	Рядок (70)	Номер транспортного засобу. Для Розетка: Порядковий номер повідомлення про відвантаження. Якщо одне з полей TRANSPORTID чи TRANSPORTQUANTITY заповнено, то інше автоматично є обов’язковим.
   25	TRANSPORTERNAME	O	Рядок (70)	Ім’я водія
   26	TRANSPORTERTYPE	O	Рядок (70)	Тип транспорту
   27	TRANSPORTTYPE	О	Рядок (2, 3)	Тип транспортування: 20 - залізничний, 30 - дорожній, 40 - повітряний, 60 - спарений, 100 - кур’єрська служба
   28	PACKAGEWIGHT	O	Число десяткове	Вага
   29	TOTALPACKAGES	О(M-для Метро РЦ)	Число десяткове	Кількість коробів
   30	TOTALPALLETS	О(M-для Метро РЦ)	Число десяткове	Кількість палет
   31	PACKAGEWEIGHT	O	Decimal (18,3) / Розділення крапкою	Вага по накладній
   32	HEAD			Початок основного блоку
   32.1	SUPPLIER	M	Число (13)	GLN постачальника
   32.2	SUPPLIERNAME	O	Рядок (70)	Ім’я постачальника
   32.3	BUYER	M	Число (13)	GLN покупця
   32.4	BUYERCODE	O	Рядок (35)	Код покупця
   32.5	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   32.6	FINALRECIPIENT	O	Число (13)	GLN кінцевого консигнатора
   32.7	SENDER	M	Число (13)	GLN відправника повідомлення
   32.8	SENDERNAME	O	Рядок (70)	Ім’я відправника
   32.9	SENDERPHONE	O	Рядок (35)	Телефон відправника
   32.10	SENDERCITY	O	Рядок (70)	Місто відправника
   32.11	SENDERADRESS	O	Рядок (70)	Адреса відправника
   32.12	RECIPIENT	M	Число (13)	GLN одержувача повідомлення
   32.13	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   32.14	PACKINGSEQUENCE			Робота з товарними позиціями (початок блоку)
   32.14.1	HIERARCHICALID	M	Число позитивне	Номер ієрархії упаковки
   32.14.2	POSITION			Товарні позиції (початок блоку)
   32.14.2.1	POSITIONNUMBER	M	Число позитивне	Номер товарної позиції
   32.14.2.2	PRODUCT	M	Число (8, 10, 14)	Штрихкод продукту
   32.14.2.3	PRODUCTIDSUPPLIER	О	Рядок (16)	Артикул в БД постачальника
   32.14.2.4	IDPRODUCER	О	Рядок (8)	Код виробника
   32.14.2.5	PRODUCTIDBUYER	О	Рядок (16)	Артикул в БД покупця
   32.14.2.6	BUYERNUMBER	О	Число ціле (16)	Внутрішній системний номер артикулу в БД покупця
   32.14.2.7	DELIVEREDQUANTITY	M	Число позитивне	кількість, що поставляється
   32.14.2.8	DELIVEREDUNIT	О	Рядок (3)	Одиниці виміру
   32.14.2.9	QUANTITYOFCUINTU	O	Число позитивне	Кількість в упаковці
   32.14.2.10	ORDEREDQUANTITY	О	Число позитивне	Замовлена кількість
   32.14.2.11	ORDERUNIT	O	Рядок (3)	Одиниці виміру
   32.14.2.12	ADVICEPRICE	O	Число ціле з трьома знаками після коми	Рекомендована ціна (державою)
   32.14.2.13	SSCC	O	Число (18)	Серійний код транспортної упаковки
   32.14.2.14	PARTYNAME	O	Рядок (70)	Назва виробника
   32.14.2.15	INVOICEDQUANTITY	O	Число позитивне	Кількість за рахунком
   32.14.2.16	INVOICEUNIT	O	Рядок (3)	Одиниці виміру
   32.14.2.17	AMOUNT	O	Число десяткове	Сума товару без ПДВ
   32.14.2.18	AMOUNTWITHVAT	O	Число десяткове	Сума товару з ПДВ
   32.14.2.19	PORTAL_CERT	О	Рядок (30)	Номер сертифікату
   32.14.2.20	CUSTOMSTARIFFNUMBER	О (M-для Розетка)	Число (4-10)	Код УКТЗЕД / Номер державної митної декларації (ВМД)
   32.14.2.21	PRICE	O	Число десяткове	Ціна продукту без ПДВ
   32.14.2.22	PRICEWITHVAT	О	Число десяткове	Ціна продукту з ПДВ
   32.14.2.23	DISCOUNT	O	Число позитивне	Знижка
   32.14.2.24	TAXRATE	О (M-для Socar)	20/19/16/14/7/2/0	Ставка ПДВ (20%, 19%, 16%, 14%, 7%, 2%, 0%)
   32.14.2.25	CONDITIONSTATUS	О	Рядок (3)	Статус кондиції
   32.14.2.26	DESCRIPTION	О	Рядок (70)	Опис продукту
   32.14.2.27	PACKAGEID	O	Рядок	Ідентифікатор упаковки
   32.14.2.28	PARTNUMBER	O	Рядок (35)	Номер партії
   32.14.2.29	SERIALNUMBER	О	Рядок	Серійний номер, особливість для мед. постачальників
   32.14.2.30	GOODDATE	О	Рядок	Термін придатності, особливість для мед. постачальників
   32.14.2.31	MINIMUMORDERQUANTITY	O	Число позитивне	Мінімальна замовлена кількість
   32.14.2.32	GOODDATE	O	Дата (РРРР-ММ-ДД)	Термін придатності
   32.14.2.33	BRUTTOWEIGHT	O	Decimal (18,3) / Розділення крапкою	Вага брутто
   32.14.3	CERTIFICATES	О		Дані вкладеного до товарної позиції сертифікату (початок блоку). Може містити кілька сертифікатів
   32.14.3.1	CERTNUMBER	M	Рядок (16)	Номер документа (може містити спец. символи)
   32.14.3.2	CERTTYPE	M	Рядок (3)	"Тип сертифіката, доступні значення:
   * SS - сертифікат відповідності
   * SK - свідоцтво якості
   * DI - декларація імпортера
   * SES - свідоцтво СЕВ (Санітарно-епідеміологічний висновок)
   * DP - декларація виробника
   * KS - карантинний сертифікат
   * AFK - акт фітосанітарного контролю
   * FS - фітосанітарний сертифікат
   * SFE - свідоцтво фітосанітарної експертизи
   * PLI - протокол лабораторних випробувань
   * EZ - експертний висновок
   * ST - сертифікат типу"
   32.14.3.3	BATCHNUMBER	О	Рядок (100)	Номер партії, на яку видано сертифікат
   32.14.3.4	CERTSTARTDATE	M	Дата (РРРР-ММ-ДД)	Дата початку дії сертифіката
   32.14.3.5	CERTENDDATE	O	Дата (РРРР-ММ-ДД)	Дата закінчення дії сертифіката
   32.14.3.6	URL	M	Рядок (70)	Пряме хеш-посилання на скан-копію. В XML передається з амперсандом - & amp;
   32.14.3.7	PRODUCTS	O		Товарні позиції (початок блоку)
   32.14.3.7.1	PRODUCTCODE	O	Число (8, 10, 14)	Штрихкод підв'язаної позиції до сертифікату





   приховали типу
   32.14.2.33	OCERTS	О		Дані вкладеного до товарної позиції сертифікату (початок блоку). Може містити кілька сертифікатів [CERT]
   32.14.2.33.1	CERT	О		Початок блоку під один конкретний сертифікат
   32.14.2.33.1.1	CERT_NUM	O…M	Рядок (16)	Поле обов’язкове лише за використання блоку CERT. Номер документа (може містити спец. символи)
   32.14.2.33.1.2	CERT_TYPE	O…M	Рядок (3)	Поле обов’язкове лише за використання блоку CERT. Тип сертифіката * SS - сертифікат відповідності * SK - свідоцтво якості * DI - декларація імпортера * SES - свідоцтво СЕВ (Санітарно-епідеміологічний висновок) * DP - декларація виробника * KS - карантинний сертифікат * AFK - акт фітосанітарного контролю * FS - фітосанітарний сертифікат * SFE - свідоцтво фітосанітарної експертизи * PLI - протокол лабораторних випробувань * EZ - експертний висновок * ST - сертифікат типу
   32.14.2.33.1.3	BATCH	O	Рядок (100)	Номер партії, на яку видано сертифікат
   32.14.2.33.1.4	START_DATE	O…M	Дата (YYYY-MM-DD)	Поле обов’язкове лише за використання блоку CERT. Дата початку дії сертифіката
   32.14.2.33.1.5	END_DATE	O	Дата (YYYY-MM-DD)	Дата закінчення дії сертифіката
   32.14.2.33.1.6	URL	O…M	Рядок (70)	Поле обов’язкове лише за використання блоку CERT. Пряме хеш-посилання на скан-копію. В XML передається з амперсандом - & amp;
   32.14.2.33.1.7	URL	O	Рядок (70)	друге і наступні хеш-посилання на скан-копії з ЕЦП. В XML передається з амперсандом - & amp;
