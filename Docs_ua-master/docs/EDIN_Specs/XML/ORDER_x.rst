##########################################################################################################################
**Замовлення (ORDER)**
##########################################################################################################################

.. epigraph::

   Замовлення (ORDER) на поставку відправляє покупець постачальнику, вказуючи штрих-код продукту, його опис, замовлену кількість, ціну та іншу необхідну інформацію.


**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <ORDER>
   <DOCUMENTNAME>220</DOCUMENTNAME>
   <NUMBER>test2</NUMBER>
   <DATE>2020-12-07</DATE>
   <ACTION>4</ACTION>
   <VERSION>1</VERSION>
   <PROMO>0</PROMO>
   <DELIVERYDATE>2020-12-15</DELIVERYDATE>
   <DELIVERYTIME>20:20</DELIVERYTIME>
   <SHIPMENTDATE>2023-03-06</SHIPMENTDATE>
   <SHIPMENTTIME>20:30</SHIPMENTTIME>
   <CAMPAIGNNUMBER>111111</CAMPAIGNNUMBER>
   <CAMPAIGNNUMBERDATE>2023-03-02</CAMPAIGNNUMBERDATE>
   <CURRENCY>UAH</CURRENCY>
   <TRANSPORTQUANTITY>1</TRANSPORTQUANTITY>
   <ORDERREFERENCENUMBER>123456789</ORDERREFERENCENUMBER>
   <LIMES>
      <LIMESNAME>назва</LIMESNAME>
      <DATEFROM>2023-03-07</DATEFROM>
      <TIMEFROM>20:00</TIMEFROM>
      <DATETO>2023-03-07</DATETO>
      <TIMETO>20:30</TIMETO>
   </LIMES>
   <VAT>20</VAT>
   <TRANSPORTATIONTYPES>перевезення</TRANSPORTATIONTYPES>
   <TRANSPORTATIONMEANS>авто</TRANSPORTATIONMEANS>
   <TRANSPORTATIONCONDITION>умова</TRANSPORTATIONCONDITION> 
   <TRANSPORTATIONPAYMENTTYPE>погодинна</TRANSPORTATIONPAYMENTTYPE>
   <TRANSPORTATIONROUTE>маршрут</TRANSPORTATIONROUTE>
   <BLANKETORDERNUMBER>12345</BLANKETORDERNUMBER>
   <INFOCODED>41322267</INFOCODED>
   <DOCTYPE>O</DOCTYPE>
   <CORRNUMBER>12</CORRNUMBER>
   <SUPORDER>номер 123</SUPORDER>
   <KDKNUM>40817810099910004312</KDKNUM>
   <ORDRTYPE>ORIGINAL</ORDRTYPE>
   <INFO>інформація</INFO>
   <PREORDER>
      <PREORDERNUM>12543</PREORDERNUM>
   </PREORDER>  
   <EARLIESTDELIVERYDATE>2023-03-06</EARLIESTDELIVERYDATE>
   <LATESTDELIVERYDATE>2023-03-10</LATESTDELIVERYDATE>
   <HEAD>
      <SUPPLIER>9101010101035</SUPPLIER>
      <BUYER>9101010101042</BUYER>
      <BUYERCODE>43562211</BUYERCODE>
      <BRANCHCODE>442AA1</BRANCHCODE>
      <DELIVERYPLACE>9101010101042</DELIVERYPLACE>
      <FINALRECIPIENT>9101010101042</FINALRECIPIENT>
      <ORDERPARTNER>9101010101042</ORDERPARTNER>
      <INVOICEPARTNER>9101010101042</INVOICEPARTNER>
      <SENDER>9101010101042</SENDER>
      <RECIPIENT>9101010101035</RECIPIENT>
      <CONSIGNEE>9101010101035</CONSIGNEE>
      <RECIPIENTCODE>51112212</RECIPIENTCODE>
      <RECIPIENTNAME>Василій</RECIPIENTNAME>
      <INFO>текст</INFO>
      <DISCOUNTVALUE>10</DISCOUNTVALUE>
      <RECIPIENTCONTACTFACE>Іванов Сергій Миколайович</RECIPIENTCONTACTFACE>
      <RECIPIENTPHONE>+380955678484</RECIPIENTPHONE>
      <RECIPIENTCITY>Київ</RECIPIENTCITY>
      <RECIPIENTADRESS>вул.Чистяківська 40</RECIPIENTADRESS>
      <EDIINTERCHANGEID>test2</EDIINTERCHANGEID>
      <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <PRODUCT>5903333337</PRODUCT>
         <PRODUCTIDSUPPLIER>8444400</PRODUCTIDSUPPLIER>
         <PRODUCTIDBUYER>1117444</PRODUCTIDBUYER>
         <BUYERPARTNUMBER>111</BUYERPARTNUMBER>
         <ORDEREDQUANTITY>2</ORDEREDQUANTITY>
         <QUANTITYOFCUINTU>11</QUANTITYOFCUINTU>
         <ORDERUNIT>PCE</ORDERUNIT>
         <QUANTITYOFPACKS>11</QUANTITYOFPACKS>
         <ORDERPRICE>30.210000</ORDERPRICE>
         <PRICEWITHVAT>36.25</PRICEWITHVAT>
         <AMOUNT>11111.00</AMOUNT>
         <AMOUNTWITHVAT>111111.00</AMOUNTWITHVAT>
         <VAT>20</VAT>
         <CLAIMEDDELIVERYDATE>2023-03-01</CLAIMEDDELIVERYDATE>
         <CLAIMEDDELIVERYTIME>20:20</CLAIMEDDELIVERYTIME>
         <DELIVERYPLACE>9864232377986</DELIVERYPLACE>
         <INFOCODED>4112121</INFOCODED>
         <MINIMUMORDERQUANTITY>11</MINIMUMORDERQUANTITY>
         <MAXIMUMORDERQUANTITY>111</MAXIMUMORDERQUANTITY>
         <PRODUCTIONCODE>47251</PRODUCTIONCODE>
         <POSITIONKGM>5</POSITIONKGM>
         <INFO>вільний текст</INFO>
         <COMPAIGNNUMBER>12457847334</COMPAIGNNUMBER>
         <EARLIESTDELIVERYDATE>2023-03-06</EARLIESTDELIVERYDATE>
         <LATESTDELIVERYDATE>2023-03-10</LATESTDELIVERYDATE>
         <LATESTDELIVERYTIME>20:20</LATESTDELIVERYTIME>
         <CONDITIONSTATUS>346</CONDITIONSTATUS>
         <PACKAGEID>1234689876</PACKAGEID>
         <CATEGORYNAME>ТОВ &quot;Геберит Трейдинг&quot;</CATEGORYNAME>
         <BRENDNAME>Kolo PL</BRENDNAME>
         <GROUPNAME>Kolo PL furniture</GROUPNAME>
         <NOVELTY>0</NOVELTY>
         <COUNTPIECESINBOX>1</COUNTPIECESINBOX>
         <COUNTBOXESINLAYER>3</COUNTBOXESINLAYER>
         <COUNTPERPALLET>4</COUNTPERPALLET>
         <WEIGHT>5.6</WEIGHT>
         <PALLETS>2</PALLETS>
         <COUNTRYORIGIN>20</COUNTRYORIGIN>
         <CALIBRE>30</CALIBRE>
         <PRICEWITHDISCOUNT>10.50</PRICEWITHDISCOUNT>
         <BOXESCOUNT>2</BOXESCOUNT>
         <CHARACTERISTIC>
         <SERVICEDESCRIPTION>Послуги з доставки товару</SERVICEDESCRIPTION>
         <DESCRIPTION>REKORD ШафкаУмивал60см, білий глянець</DESCRIPTION>
         </CHARACTERISTIC>
         <PACKING>
         <PACKINGTYPE>тип</PACKINGTYPE>
         <PACKINGQUANTITY>3</PACKINGQUANTITY>
         <PACKINGUNIT>20</PACKINGUNIT>
         </PACKING>
      </POSITION>
   </HEAD>
   <EXCHANGE_SCHEMA_TYPE>0</EXCHANGE_SCHEMA_TYPE>
   </ORDER>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=254043882&single=true" width="1100" height="2750" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	ORDER			Початок документа
   1	DOCUMENTNAME	O	Число позитивне	Назва документа (220 -замовлення)
   2	NUMBER	М	Рядок (50)	Номер замовлення
   3	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   4	ACTION	О	« 4 »,« 5 »,« 27 »,« 29 »	4 - поставка змінена, 5 - заміна документа, 29 - поставка прийнята, 27 - поставка не прийнята
   5	EXCHANGE_SCHEMA_TYPE	O		лише для Фоззі: схема документообігу: 0-звичайна, 1-особлива
   6	VERSION	O	Число позитивне	Версія замовлення
   7	PROMO	O	« 0 »,« 1 »	Акція: 0 - немає, 1 - є
   8	DELIVERYDATE	М	Дата (РРРР-ММ-ДД)	Дата поставки
   9	DELIVERYTIME	O	Час (год: хв)	Час поставки
   10	SHIPMENTDATE	O	Дата (РРРР-ММ-ДД)	Дата відвантаження
   11	SHIPMENTTIME	O	Час (год: хв)	Час відвантаження
   12	CAMPAIGNNUMBER	O	Рядок (70)	Номер договору на поставку
   13	CAMPAIGNNUMBERDATE	O	Дата (РРРР-ММ-ДД)	Дата договору
   14	CURRENCY	O	Рядок (3)	Код валюти
   15	TRANSPORTQUANTITY	O	Число позитивне	Кількість машин
   16	ORDERREFERENCENUMBER	O	Рядок (16)	Унікальний номер замовлення для відстеження
   17	LIMES			Деталі транспорту (початок блоку)
   17.1	LIMESNAME	O	Рядок (70)	Назва рампи
   17.2	DATEFROM	O	Дата (РРРР-ММ-ДД)	Дата прибуття транспорту
   17.3	TIMEFROM	O	Час (год: хв)	Час прибуття транспорту
   17.4	DATETO	O	Дата (РРРР-ММ-ДД)	Дата закінчення відвантаження
   17.5	TIMETO	O	Час (год: хв)	Час закінчення відвантаження
   18	VAT	O	Число позитивне	Ставка ПДВ,%
   19	TRANSPORTATIONTYPES	O	Рядок (35)	Вид транспортування
   20	TRANSPORTATIONMEANS	O	Рядок (70)	Транспортний засіб
   21	TRANSPORTATIONCONDITION	O	Рядок (70)	Умови транспортування
   22	TRANSPORTATIONPAYMENTTYPE	O	Рядок (35)	Тип оплати доставки (Умови оплати)
   23	TRANSPORTATIONROUTE	O	Рядок (70)	Маршрут доставки
   24	BLANKETORDERNUMBER	O	Рядок (35)	Номер бланкового замовлення
   25	INFOCODED	O	Рядок (35)	Інфокод
   26	DOCTYPE	O	Рядок (1)	"Тип документа:
   O - оригінал,
   R - заміна,
   D - видалення,
   F - фіктивність замовлення,
   PO - попереднє замовлення,
   OS - замовлення на послугу / маркетинг"
   27	CORRNUMBER			
   28	SUPORDER	O	Рядок (35)	Номер замовлення постачальника
   29	KDKNUM	O	Рядок (35)	Номер загального замовлення КДК
   30	ORDRTYPE	O	Рядок (35)	Тип замовлення
   31	INFO	O	Рядок (70)	Вільний текст
   32	PREORDER	O		Попередні замовлення (початок блоку)
   32.1	PREORDERNUM	O	Рядок (10)	Номер першого Попереднього замовлення (тег може бути використаний декілька разів)
   33	EARLIESTDELIVERYDATE	O	Дата (РРРР-ММ-ДД)	Поставка не раніше зазначеної дати
   34	LATESTDELIVERYDATE	O	Дата (РРРР-ММ-ДД)	Поставка не пізніше зазначеної дати
   35	HEAD			Початок основного блоку
   35.1	SUPPLIER	M	Число (13)	GLN постачальника
   35.2	BUYER	M	Число (13)	GLN покупця
   35.3	BUYERCODE	O	Рядок (35)	Код покупця
   35.4	BRANCHCODE	O	Рядок	Код філіалу (для Нова Лінія та ЕПІЦЕНТР К )
   35.5	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   35.6	FINALRECIPIENT	O	Число (13)	GLN кінцевого консигнатора
   35.7	ORDERPARTNER	O	Число (13)	GLN замовника
   35.8	INVOICEPARTNER	O	Число (13)	GLN платника
   35.9	SENDER	M	Число (13)	GLN відправника повідомлення
   35.10	RECIPIENT	M	Число (13)	GLN одержувача повідомлення
   35.11	CONSIGNEE	О	Число (13)	GLN вантажоодержувача
   35.12	RECIPIENTCODE	O	Рядок (35)	Код отримувача
   35.13	RECIPIENTNAME	O	Рядок (70)	Ім’я одержувача
   35.14	INFO	O	Рядок (70)	Вільний текст
   35.15	DISCOUNTVALUE	O	Число позитивне	Розмір знижки
   35.16	RECIPIENTCONTACTFACE	O	Рядок (70)	Контактна особа
   35.17	RECIPIENTPHONE	O	Рядок (35)	Телефон одержувача
   35.18	RECIPIENTCITY	O	Рядок (35)	Місто одержувача
   35.19	RECIPIENTADRESS	O	Рядок (70)	Адреса одержувача
   35.20	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   35.21	POSITION			Товарні позиції (початок блоку)
   35.21.1	POSITIONNUMBER	М	Число позитивне	Номер товарної позиції
   35.21.2	PRODUCT	M	Число (8, 10, 14)	Штрихкод продукту
   35.21.3	PRODUCTIDSUPPLIER	O	Рядок (16)	Артикул в БД
   35.21.4	PRODUCTIDBUYER	O	Рядок (16)	Артикул в БД покупця
   35.21.5	BUYERPARTNUMBER	О	Рядок (16)	Внутрішній системний номер артикулу в БД покупця
   35.21.6	ORDEREDQUANTITY	M	Число позитивне	Замовлена ​​кількість
   35.21.7	QUANTITYOFCUINTU	О	Число позитивне	Кількість в упаковці
   35.21.8	ORDERUNIT	О	Рядок (3)	Одиниці виміру
   35.21.9	QUANTITYOFPACKS	О	Число позитивне	Кількість упаковок
   35.21.10	ORDERPRICE	O	Число десяткове	Ціна продукту без ПДВ
   35.21.11	PRICEWITHVAT	O	Число десяткове	Ціна продукту з ПДВ
   35.21.12	AMOUNT	O	Число десяткове	Сума товару (без ПДВ)
   35.21.13	AMOUNTWITHVAT	О	Число десяткове	Сума товару (з ПДВ)
   35.21.14	VAT	O	Число десяткове	Ставка ПДВ,%
   35.21.15	CLAIMEDDELIVERYDATE	O	Дата (РРРР-ММ-ДД)	Оголошена дата доставки
   35.21.16	CLAIMEDDELIVERYTIME	O	Час (год: хв)	Оголошений час доставки
   35.21.17	DELIVERYPLACE	О	Число (13)	GLN кінцевого місця доставки
   35.21.18	INFOCODED	O	Рядок (35)	Інфокод
   35.21.19	MINIMUMORDERQUANTITY	O	Число позитивне	Мінімальна замовлена кількість
   35.21.20	MAXIMUMORDERQUANTITY	O	Число позитивне	Максимально допустима відвантажувана кількість
   35.21.21	PRODUCTIONCODE	О	Рядок (16)	Код алкогольної продукції
   35.21.22	POSITIONKGM	O		Всього кілограм по позиції
   35.21.23	INFO	O	Рядок (90)	Вільний текст
   35.21.24	COMPAIGNNUMBER	O	Рядок (70)	Номер постачальника
   35.21.25	EARLIESTDELIVERYDATE	O	Дата (РРРР-ММ-ДД)	Поставка не раніше зазначеної дати
   35.21.26	LATESTDELIVERYDATE	O	Дата (РРРР-ММ-ДД)	Поставка не пізніше зазначеної дати
   35.21.27	LATESTDELIVERYTIME	O	Час (год: хв)	Поставка не пізніше зазначеного часу
   35.21.28	CONDITIONSTATUS	О	Рядок (3)	Статус кондиції
   35.21.29	PACKAGEID	O	Рядок	Ідентифікатор упаковки
   35.21.30	CATEGORYNAME	O	Рядок (70)	Найменування категорії товару
   35.21.31	BRENDNAME	O	Рядок (70)	Найменування бренду
   35.21.32	GROUPNAME			Найменування групи товару
   35.21.33	NOVELTY	O		Новинка
   35.21.34	COUNTPIECESINBOX	O	Число позитивне	Кількість частин в упаковці
   35.21.35	COUNTBOXESINLAYER	O	Число позитивне	Кількість упаковок на 1 рівні
   35.21.36	COUNTPERPALLET	O	Число позитивне	Кількість на палеті
   35.21.37	WEIGHT	O	Число десяткове	Вага
   35.21.38	PALLETS	O	Число позитивне	Кількість палет
   35.21.39	COUNTRYORIGIN	О	Рядок (2)	Країна виробник
   35.21.40	CALIBRE	O	Число позитивне	Діаметр
   35.21.41	PRICEWITHDISCOUNT	O	Число десяткове	Ціна з урахуванням знижки
   35.21.42	BOXESCOUNT	O	Число позитивне	Кількість упаковок
   35.21.43	DIAMETER	O	Число десяткове (2 знаки після коми)	Діаметр виробу в мм
   35.21.44	WALL_THICKNESS	O	Число десяткове (2 знаки після коми)	Товщина стінки в мм
   35.21.45	LT_MINUS	O	Число десяткове (3 знаки після коми)	Допуск на поріз продукції в мінус
   35.21.46	LT_PLUS	O	Число десяткове (3 знаки після коми)	Допуск на поріз продукції в плюс
   35.21.47	UOM_ALLOY_SURCHAGE	O	Рядок (3)	Одиниця виміру, для доплати при сплаві. (за послуги, транспортування, поріз, тощо)
   35.21.48	ALLOY_SURCHARGE	O	Число десяткове (3 знаки після коми)	Доплата за сплав
   35.21.49	UOM_ESC_SURCHAGE	O	Рядок (3)	Одиниці виміру, від яких розраховується Інфляційна надбавка (за зберігання)
   35.21.50	ESC_SURCHARGE	O	Число десяткове (3 знаки після коми)	Надбавка
   35.21.43	CHARACTERISTIC			Характеристики (початок блоку)
   35.21.43.1	SERVICEDESCRIPTION	О/M	Рядок (500)	Назва послуги. Поле обов’язкове тільки для Замовлення послуги (ORDER з полем DOCTYPE=OS)
   35.21.43.2	DESCRIPTION	О	Рядок (70)	Опис продукту
   35.21.44	PACKING			Упаковка (початок блоку)
   35.21.44.1	PACKINGTYPE	O	Рядок (3)	Тип упаковки
   35.21.44.2	PACKINGQUANTITY	O	Число позитивне	Кількість упаковок
   35.21.44.3	PACKINGUNIT	O	Число позитивне	Пакувальник
