##########################################################################################################################
**Інструкція з доставки (INSDES)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/instrukciia-z-dostavki-insdes>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Інструкція з доставки (INSDES) відправляється покупцем постачальнику із зазначенням того, яку продукцію і її кількість необхідно доставити в зазначений термін

   **XML:**

   .. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <INSDES>
   <NUMBER>111111</NUMBER>
   <DATE>2023-07-19</DATE>
   <DELIVERYDATE>2023-07-03</DELIVERYDATE>
   <DELIVERYTIME>10:12</DELIVERYTIME>
   <ORDERNUMBER>121212</ORDERNUMBER>
   <ORDERDATE>2023-07-04</ORDERDATE>
   <CAMPAIGNNUMBER>343443</CAMPAIGNNUMBER>
   <AMOUNT>111000</AMOUNT>
   <CURRENCY>UAH</CURRENCY>
   <DELIVERYINFO>інформація</DELIVERYINFO>
   <CONTACTS>
   <NAME>Іван</NAME>
   <EMAIL>ivan123@gmail.com</EMAIL>
   <FAX>ivan123@gmail.com</FAX>
   <TELEPHONE>+380956834300</TELEPHONE>
   </CONTACTS>
   <TRANSPORTERTYPE>31</TRANSPORTERTYPE>
   <TOTALAMOUNT>1234561.2</TOTALAMOUNT>
   <HEAD>
      <ORDEREDBY>1111111111116</ORDEREDBY>
      <LOGISTICPROVIDER>9864065732181</LOGISTICPROVIDER>
      <SUPPLIER>1111111111116</SUPPLIER>
      <BUYER>9864065732181</BUYER>
      <DELIVERYPLACE>1111111111116</DELIVERYPLACE>
      <SENDER>9864065732181</SENDER>
      <RECIPIENT>1111111111116</RECIPIENT>
      <EDIINTERCHANGEID>11111</EDIINTERCHANGEID>
      <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <PRODUCT>1231231002</PRODUCT>
         <PRODUCTIDSUPPLIER>22222</PRODUCTIDSUPPLIER>
         <PRODUCTIDBUYER>333333</PRODUCTIDBUYER>
         <QUANTITY>10</QUANTITY>
         <QUANTITYOFCUINTU>45</QUANTITYOFCUINTU>
         <QUANTITYUNIT>CEN</QUANTITYUNIT>     
         <SSCC>098640657300000002</SSCC>
         <AMOUNT>1200.00</AMOUNT>
         <DELIVERYDATE>2023-03-06</DELIVERYDATE>
         <DELIVERYTIME>20:55</DELIVERYTIME>
         <DELIVERYPLACE>9864065712664</DELIVERYPLACE>
         <INFO>Додаткова інформація</INFO>
         <PRICE>456.000000</PRICE>
         <VAT>20</VAT> 
      </POSITION>
   </HEAD>
   </INSDES>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=563628615&single=true" width="1100" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	INSDES			Початок документа
   1	NUMBER	М	Рядок (16)	Номер документа
   2	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   3	TIME	О	Час (год: хв)	Час документа
   4	DELIVERYDATE	О	Дата (РРРР-ММ-ДД)	Дата доставки
   5	DELIVERYTIME	О	Час (год: хв)	Час доставки
   6	DELIVERYINFO	О	Рядок (70)	Інформація з доставки
   7	ORDERNUMBER	О	Рядок (16)	Номер замовлення
   8	ORDERDATE	О	Дата (РРРР-ММ-ДД)	Дата замовлення
   9	CAMPAIGNNUMBER	О	Рядок (35)	Номер договору на поставку
   10	AMOUNT	О	Число десяткове	Ціна
   11	CURRENCY	О	Рядок (3)	Код валюти
   12	CONTACT			Контактна інформація (початок блоку)
   12.1	NAME	О	Рядок (70)	Ім’я
   12.2	EMAIL	О	Рядок (70)	Електронна пошта
   12.3	FAX	О	Рядок (70)	Факс
   12.4	TELEPHONE	О	Рядок (70)	Телефон
   13	TRANSPORTTYPE	О	Рядок (3)	Тип транспортування: 20 - залізничний, 30 - дорожній, 40 - повітряний, 60 - спарений, 100 - кур’єрська служба
   14	TOTALAMOUNT	О	Число десяткове	Загальна ціна продукції, що поставляється
   15	CURRENCY	О	Рядок (3)	Код валюти
   16	HEAD			Початок основного блоку
   16.1	ORDEREDBY	М	Число (13)	Замовник
   16.2	LOGISTICPROVIDER	М	Число (13)	Провайдер логістичних послуг
   16.3	SUPPLIER	О	Число (13)	Постачальник
   16.4	BUYER	О	Число (13)	Покупець
   16.5	DELIVERYPLACE	M	Число (13)	Місце доставки
   16.6	SENDER	M	Число (13)	Відправник
   16.7	RECIPIENT	M	Число (13)	Одержувач
   16.8	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   16.9	POSITION			Товарні позиції (початок блоку)
   16.9.1	POSITIONNUMBER	М	Число позитивне	Номер позиції
   16.9.2	PRODUCT	М	Число (8, 10, 14)	Штрих-код продукту
   16.9.3	PRODUCTIDSUPPLIER	О	Рядок (35)	Артикул в БД постачальника
   16.9.4	PRODUCTIDBUYER	О	Рядок (35)	Артикул в БД покупця
   16.9.5	QUANTITY	М	Число позитивне	кількість, що поставляється
   16.9.6	QUANTITYOFCUINTU	O	Число позитивне	Кількість в упаковці
   16.9.7	QUANTITYUNIT	О	Рядок (3)	Одиниці виміру
   16.9.8	SSCC	О	Число (14, 18)	Штрих-код транспортної упаковки
   16.9.9	AMOUNT	О	Число десяткове	Ціна
   16.9.10	DELIVERYDATE	О	Дата (РРРР-ММ-ДД)	Дата доставки даної продукції
   16.9.11	DELIVERYTIME	О	Час (год: хв)	Час доставки
   16.9.12	DELIVERYPLACE	M	Число (13)	Місце доставки
   16.9.13	INFO	О	Рядок (70)	Примітка
   16.9.14	PRICE	O	Число десяткове	Ціна продукту
   16.9.15	PRICE	O	Число десяткове	Ціна продукту
   16.9.16	VAT	O	Число позитивне	Ставка ПДВ,%
