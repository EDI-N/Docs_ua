##########################################################################################################################
**Підтвердження замовлення (ORDRSP)**
##########################################################################################################################

.. epigraph::

   **Підтвердження замовлення (ORDRSP)** відправляється у відповідь на прийнятий документ **Замовлення (ORDER)**. Основною особливістю **Підтвердження замовлення** є уточнення про постачання по кожній товарній позиції: чи буде товар доставлений; чи змінилася кількість/ціна чи буде відмова від поставки товарної позиції?


**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <ORDRSP>
   <NUMBER>999999999</NUMBER>
   <DATE>2021-11-23</DATE>
   <TIME>19:44</TIME>
   <ORDERNUMBER>999999999</ORDERNUMBER>
   <ORDERDATE>2021-11-23</ORDERDATE>
   <DELIVERYDATE>2021-12-03</DELIVERYDATE>
   <DELIVERYTIME>20:20</DELIVERYTIME>
   <SPECIFICATIONNUMBER>2</SPECIFICATIONNUMBER>
   <SPECIFICATIONDATE>2023-03-01</SPECIFICATIONDATE>
   <SHIPMENTDATE>2023-03-07</SHIPMENTDATE>
   <CURRENCY>UAH</CURRENCY>
   <LIMES>
      <LIMESNAME>1111</LIMESNAME>
      <DATEFROM>2023-03-07</DATEFROM>
      <TIMEFROM>20:50</TIMEFROM>
      <DATETO>2023-03-07</DATETO>
      <TIMETO>19:51</TIMETO>
   </LIMES>
   <VAT>20</VAT>
   <ACTION>29</ACTION>
   <TRANSPORTATIONPAYMENTTYPE>погодинна</TRANSPORTATIONPAYMENTTYPE>
   <TRANSPORTATIONCONDITION>умови транспортування</TRANSPORTATIONCONDITION>
   <TOTALPACKAGES>110</TOTALPACKAGES>
   <TOTALPACKAGESSPACE>13</TOTALPACKAGESSPACE>
   <TRANSPORTQUANTITY>12</TRANSPORTQUANTITY>
   <DOCTYPE>O</DOCTYPE>
   <SUPORDER>номер 123</SUPORDER>
   <KDKNUM>40817810099910004312</KDKNUM>
   <ORDRTYPE>ORIGINAL</ORDRTYPE>
   <INFO>Інформація</INFO>
   <REASONINFO>текст</REASONINFO>
   <CAMPAIGNNUMBER>9999999</CAMPAIGNNUMBER>
   <HEAD>
      <BUYER>9864232399278</BUYER>
      <BUYERCODE>43562211</BUYERCODE>
      <SUPPLIER>9864232399285</SUPPLIER>
      <DELIVERYPLACE>9864232399278</DELIVERYPLACE>
      <FINALRECIPIENT>9864232399278</FINALRECIPIENT>
      <INVOICEPARTNER>9864232399278</INVOICEPARTNER>
      <SENDER>9864232399285</SENDER>
      <RECIPIENT>9864232399278</RECIPIENT>
      <CONSIGNEE>9864232399278</CONSIGNEE>
      <RECIPIENTCODE>51112212</RECIPIENTCODE>
      <RECIPIENTNAME>Василій</RECIPIENTNAME>
      <RECIPIENTCONTACTFACE>Іванов Сергій Миколайович</RECIPIENTCONTACTFACE>
      <RECIPIENTPHONE>+380955678484</RECIPIENTPHONE>
      <RECIPIENTCITY>Київ</RECIPIENTCITY>
      <RECIPIENTADRESS>вул.Чистяківська 40</RECIPIENTADRESS>
      <DELIVERYTERMS>3 дні</DELIVERYTERMS>
      <EDIINTERCHANGEID>999999999</EDIINTERCHANGEID>
      <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <PRODUCT>12345678</PRODUCT>
         <PRODUCTIDBUYER>1114447</PRODUCTIDBUYER>
         <PRODUCTIDSUPPLIER>91421</PRODUCTIDSUPPLIER>
         <ORDRSPUNIT>PCE</ORDRSPUNIT>
         <CUSTOMSTARIFFNUMBER>8528529190</CUSTOMSTARIFFNUMBER>
         <DESCRIPTION>Кoвбаса копчена</DESCRIPTION>
         <MAXORDERPRICE>20.50</MAXORDERPRICE>
         <PRICE>11.11115</PRICE>
         <PRICEWITHVAT>20.6</PRICEWITHVAT>
         <DISCOUNT>10</DISCOUNT>
         <VAT>20</VAT>
         <EXPAIRYDATE>рік</EXPAIRYDATE>
         <AMOUNT>1486.89</AMOUNT>
         <AMOUNTWITHVAT>1780.15</AMOUNTWITHVAT>
         <TAXAMOUNT>294.60</TAXAMOUNT>
         <QUANTITYOFCUINTU>111</QUANTITYOFCUINTU>
         <PRODUCTTYPE>1</PRODUCTTYPE>
         <ORDEREDQUANTITY>99</ORDEREDQUANTITY>
         <ACCEPTEDQUANTITY>99</ACCEPTEDQUANTITY>
         <MINIMUMORDERQUANTITY>11</MINIMUMORDERQUANTITY>
         <MAXIMUMORDERQUANTITY>111</MAXIMUMORDERQUANTITY>
         <INFO>вільний текст</INFO>
         <CONDITIONSTATUS>346</CONDITIONSTATUS>
         <PACKAGEID>1111</PACKAGEID>
         <COUNTRYORIGIN>AD</COUNTRYORIGIN>
         <LATESTDELIVERYDATE>2023-03-07</LATESTDELIVERYDATE>
         <CALIBRE>30</CALIBRE>
      <PACKING>
         <PACKINGTYPE>тип</PACKINGTYPE>
         <PACKINGQUANTITY>3</PACKINGQUANTITY>
         <PACKINGUNIT>20</PACKINGUNIT>
      </PACKING>
      </POSITION>
   </HEAD>
   </ORDRSP>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/1dque7rvcrfWajnLQhlP2qvveTUSY8h42/pubhtml?gid=2090499753&single=true" width="1100" height="2300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	ORDRSP			Початок документа
   1	NUMBER	M	Рядок (50)	Номер підтвердження замовлення
   2	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   3	TIME	O	Час (год: хв)	Час створення документа
   4	ORDERNUMBER	M	Рядок (50)	Номер замовлення
   5	ORDERDATE	M	Дата (РРРР-ММ-ДД)	Дата замовлення
   6	DELIVERYDATE	M	Дата (РРРР-ММ-ДД)	Дата доставки
   7	DELIVERYTIME	O	Час (год: хв)	Час поставки
   8	SPECIFICATIONNUMBER	O	Рядок (10)	Номер специфікації
   9	SPECIFICATIONDATE	O	Дата (РРРР-ММ-ДД)	Дата специфікації
   10	SHIPMENTDATE	O	Дата (РРРР-ММ-ДД)	Дата відвантаження
   11	CURRENCY	O	Рядок (3)	Код валюти
   12	LIMES			Деталі транспорту (початок блоку)
   12.1	LIMESNAME	O	Рядок (70)	Назва рампи
   12.2	DATEFROM	O	Дата (РРРР-ММ-ДД)	Дата прибуття транспорту
   12.3	TIMEFROM	O	Час (год: хв)	Час прибуття транспорту
   12.4	DATETO	O	Дата (РРРР-ММ-ДД)	Дата закінчення відвантаження
   12.5	TIMETO	O	Час (год: хв)	Час закінчення відвантаження
   13	VAT	O	Число позитивне	Ставка ПДВ,%
   14	ACTION	О	« 4 »,« 5 »,« 27 »,« 29 »	4 - поставка змінена, 5 - заміна документа, 29 - поставка прийнята, 27 - поставка не прийнята
   15	TRANSPORTATIONPAYMENTTYPE	O	Рядок (30)	Умови оплати
   16	TRANSPORTATIONCONDITION	O	Рядок (35)	Умови транспортування
   17	TOTALPACKAGES	O	Число десяткове	Кількість упаковок / Упаковка
   18	TOTALPACKAGESSPACE	O	Число десяткове	Кількість місць для упаковок
   19	TRANSPORTQUANTITY	O	Число позитивне	Кількість машин
   20	DOCTYPE	О	Рядок (1)	"Тип документа:
   O - оригінал
   R - заміна 
   D - видалення"
   21	SUPORDER	O	Рядок (35)	Номер замовлення постачальника
   22	KDKNUM	O	Рядок (35)	Номер загального замовлення КДК
   23	ORDRTYPE	O	Рядок (35)	Тип замовлення
   24	INFO	O	Рядок (70)	Вільний текст
   25	REASONINFO	O	Рядок (70)	Додаткова інформація
   26	CAMPAIGNNUMBER	O	Рядок (70)	Номер договору
   27	HEAD			Початок основного блоку
   27.1	BUYER	M	Число (13)	GLN покупця
   27.2	BUYERCODE	O	Рядок (35)	Код покупця
   27.3	SUPPLIER	M	Число (13)	GLN постачальника
   27.4	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   27.5	FINALRECIPIENT	O	Число (13)	GLN кінцевого консигнатора
   27.6	INVOICEPARTNER	O	Число (13)	GLN платника
   27.7	SENDER	M	Число (13)	GLN відправника повідомлення
   27.8	RECIPIENT	M	Число (13)	GLN одержувача повідомлення
   27.9	CONSIGNEE	O	Число (13)	GLN вантажоодержувача
   27.10	RECIPIENTCODE	O	Рядок (35)	Код отримувача
   27.11	RECIPIENTNAME	O	Рядок (70)	Ім’я одержувача
   27.12	RECIPIENTCONTACTFACE	O	Рядок (70)	Контактна особа
   27.13	RECIPIENTPHONE	O	Рядок (35)	Телефон одержувача
   27.14	RECIPIENTCITY	O	Рядок (35)	Місто одержувача
   27.15	RECIPIENTADRESS	O	Рядок (70)	Адреса одержувача
   27.16	DELIVERYTERMS	O	Число позитивне	Терміни доставки (в днях)
   27.17	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції (Унікальний номер, що генерується відправником)
   27.18	POSITION			Товарні позиції (початок блоку)
   27.18.1	POSITIONNUMBER	M	Число позитивне	Номер товарної позиції (Порядковий номер товарної позиції в документі (1, 2, 3, 4 … n))
   27.18.2	PRODUCT	M	Число (8, 10, 14)	Штрих-код продукту
   27.18.3	PRODUCTIDBUYER	O	Рядок (16)	Артикул в БД покупця
   27.18.4	PRODUCTIDSUPPLIER	O	Рядок (16)	Артикул в БД постачальника
   27.18.5	ORDRSPUNIT	O	Рядок (3)	Одиниці виміру
   27.18.6	CUSTOMSTARIFFNUMBER	О	Число позитивне	Код УКТЗЕД для кожної позиції
   27.18.7	DESCRIPTION	O	Рядок (70)	Опис продукту
   27.18.8	MAXORDERPRICE	O	Число десяткове (18,2)	Максимальна роздрібна ціна (МРЦ)
   27.18.9	PRICE	O	Число десяткове (5 знаків після коми)	Ціна продукту без ПДВ
   27.18.10	PRICEWITHVAT	O	Число десяткове (5 знаків після коми)	Ціна продукту з ПДВ
   27.18.11	DISCOUNT	О	Число десяткове (5 знаків після коми)	Знижка
   27.18.12	VAT	O	Рядок (3)	Ставка ПДВ,%
   27.18.13	EXPAIRYDATE	O	Рядок (30)	Гарантійний термін
   27.18.14	AMOUNT	O	Число десяткове (5 знаків після коми)	Сума товару без ПДВ
   27.18.15	AMOUNTWITHVAT	O	Число десяткове (5 знаків після коми)	Сума товару з ПДВ
   27.18.16	TAXAMOUNT	М	Число десяткове	ПДВ
   27.18.17	QUANTITYOFCUINTU	O	Число позитивне	Кількість в упаковці
   27.18.18	PRODUCTTYPE	M	« 1 »,« 2 »,« 3 »	"1 - товар буде поставлений без змін
   2 - зміна замовленої кількості
   3 - відмовлено в постачанні"
   27.18.19	ORDEREDQUANTITY	M	Число позитивне	Замовлена кількість
   27.18.20	ACCEPTEDQUANTITY	M	Число позитивне	Наявна кількість
   27.18.21	MINIMUMORDERQUANTITY	O	Число позитивне	Мінімальна замовлена кількість
   27.18.22	MAXIMUMORDERQUANTITY	О	Число позитивне	Максимально допустима відвантажувана кількість
   27.18.23	INFO	O	Рядок (70)	Вільний текст
   27.18.24	CONDITIONSTATUS	О	Рядок (3)	Статус кондиції
   27.18.25	PACKAGEID	O	Рядок	Ідентифікатор упаковки
   27.18.26	COUNTRYORIGIN	О	Рядок (2)	Країна виробник
   27.18.27	CALIBRE	О	Число позитивне	Калібр упаковки string (30)
   27.18.28	DIAMETER	O	Число десяткове (2 знаки після коми)	Діаметр виробу в мм
   27.18.29	WALL_THICKNESS	O	Число десяткове (2 знаки після коми)	Товщина стінки в мм
   27.18.30	LT_MINUS	O	Число десяткове (3 знаки після коми)	Допуск на поріз продукції в мінус
   27.18.31	LT_PLUS	O	Число десяткове (3 знаки після коми)	Допуск на поріз продукції в плюс
   27.18.32	UOM_ALLOY_SURCHAGE	O	Рядок (3)	Одиниця виміру, для доплати при сплаві. (за послуги, транспортування, поріз, тощо)
   27.18.33	ALLOY_SURCHARGE	O	Число десяткове (3 знаки після коми)	Доплата за сплав
   27.18.34	UOM_ESC_SURCHAGE	O	Рядок (3)	Одиниці виміру, від яких розраховується Інфляційна надбавка (за зберігання)
   27.18.35	ESC_SURCHARGE	O	Число десяткове (3 знаки після коми)	Надбавка
   27.18.36	THIRDPARTY_SURCHARGE	O	Число десяткове (3 знаки після коми)	Доплата за приймання третьою стороною
   27.18.28	PACKING			Упаковка (початок блоку)
   27.18.28.1	PACKINGTYPE	O	Рядок (3)	Тип упаковки
   27.18.28.2	PACKINGQUANTITY	O	Число позитивне	Кількість упаковок
   27.18.28.3	PACKINGUNIT	O	Число позитивне	Пакувальник
