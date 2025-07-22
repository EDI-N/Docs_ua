##########################################################################################################################
**Інструкція з транспортування (IFTMIN)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/instrukciia-z-transportuvannia-iftmin>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Інструкція з транспортування (IFTMIN) відправляється замовником оператору логістичних послуг. В даному документі вказуються остаточні деталі поставки

   **XML:**

   .. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <IFTMIN>
   <NUMBER>1_7</NUMBER>
   <DATE>2021-02-26</DATE>
   <DELIVERYDATE>2020-09-25</DELIVERYDATE>
   <DELIVERYTIME>07:16</DELIVERYTIME>
   <ORDERNUMBER>1111</ORDERNUMBER>
   <DOCTYPE>O</DOCTYPE>
   <DOCUMENT>
      <DOCITEM>
         <DOCTYPE>ON</DOCTYPE>
         <DOCNUMBER>914_ord_3</DOCNUMBER>
         <DOCNUMBERTN>1</DOCNUMBERTN>
         <DOCNUMBERTN>2</DOCNUMBERTN>
      </DOCITEM>
   </DOCUMENT>
   <INSUARENCEVALUE>10.15</INSUARENCEVALUE>
   <DECLAREDVALUE>10.30</DECLAREDVALUE>
   <CASHONDELIVERY>11.30</CASHONDELIVERY>
   <TOTALPACKAGES>10.10</TOTALPACKAGES>
   <PLACEOFDESPATCH>місце відвантаження</PLACEOFDESPATCH>
   <CONSIGNORNUMBER>ТОВ</CONSIGNORNUMBER>
   <CUSTOMERNUMBER>123456789000</CUSTOMERNUMBER>
   <COMPAIGNNUMBER>12335</COMPAIGNNUMBER>
   <EQUIPMENTTYPE>10.10</EQUIPMENTTYPE>
   <EQUIPMENTQUANTITY>10.10</EQUIPMENTQUANTITY>
   <TOTALWEIGHT>10.10</TOTALWEIGHT>
   <TOTALWEIGHTUNITS>кг</TOTALWEIGHTUNITS>
   <INFO>Додаткова інформація</INFO>
   <HEAD>
      <CONSIGNOR>9864065732181</CONSIGNOR>
      <DELIVERYPLACE>4824034000005</DELIVERYPLACE>
      <SENDER>9864065732181</SENDER>
      <RECIPIENT>4824034000005</RECIPIENT>
      <POSITIONS>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <PRODUCT>1111111</PRODUCT>
         <DELIVEREDQUANTITY>11111</DELIVEREDQUANTITY>
         <SSCC>098640672200000009</SSCC>
         <PACKAGETYPE>201</PACKAGETYPE>
         <PACKAGEQUANTITY>3</PACKAGEQUANTITY>
         <PACKAGEQUANTITYUNITS>кг</PACKAGEQUANTITYUNITS>
         <PACKAGEWIGHT>5</PACKAGEWIGHT>
         <PACKAGEWEIGHTUNITS>кг</PACKAGEWEIGHTUNITS>
         <DELIVERYPLACE>4824034000005</DELIVERYPLACE>
         <DESCRIPTION>drink1</DESCRIPTION>
         <INFO>Додаткова інформація</INFO>
         <PRODUCTIDBUYER>333333</PRODUCTIDBUYER>
         <MAXPACKAGEQUANTITY>6</MAXPACKAGEQUANTITY>
      </POSITIONS>
   </HEAD>
   </IFTMIN>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=59439049&single=true" width="1100" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	IFTMIN			Початок документа
   1	NUMBER	М	Рядок (16)	Номер документа
   2	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   3	DELIVERYDATE	М	Дата (РРРР-ММ-ДД)	Дата поставки
   4	DELIVERYTIME	О	Час (год: хв)	Час доставки
   5	ORDERNUMBER	О	Рядок (50)	Номер замовлення
   6	DOCTYPE	О	Рядок (1)	Тип документа: O - оригінал, R - заміна, D - видалення
   7	DOCUMENT			Дані про документи (початок блоку)
   7.1	DOCITEM			Дані про документ (початок блоку)
   7.1.1	DOCTYPE	О	Рядок (2)	"Тільки для ТМ Фоззі:
   «ON» - IFTMIN робиться на базі Замовлення (вказується номер)"
   7.1.2	DOCNUMBER	О	Рядок (16)	Номер документа перевізника (Замовлення)
   7.1.3	DOCNUMBERTN	О	Рядок (32)	Номер Кількісної накладної
   8	INSUARENCEVALUE	O	Число десяткове	Застрахована вартість
   9	DECLAREDVALUE	O	Число десяткове	Задекларована ціна поставки
   10	CASHONDELIVERY	O	Число десяткове	Сума оплати за фактом поставки
   11	TOTALPACKAGES	O	Число десяткове	Загальна кількість упаковок
   12	PLACEOFDESPATCH	O	Рядок (60)	Назва місця відвантаження
   13	CONSIGNORNUMBER	O	Рядок (16)	Номер вантажовідправника
   14	CUSTOMERNUMBER	O	Рядок (16)	Номер замовника логістичних послуг
   15	COMPAIGNNUMBER	O	Рядок (16)	Номер договору
   16	EQUIPMENTTYPE	O	Рядок (3)	Тип упаковки обладнання (палети, …)
   17	EQUIPMENTQUANTITY	O	Число десяткове	Кількість обладнання
   18	TOTALWEIGHT	O	Число десяткове	Загальна вага вантажу
   19	TOTALWEIGHTUNITS	O	Рядок (3)	Одиниця виміру
   20	INFO	O	Рядок (70)	Вільний текст
   21	HEAD			Початок основного блоку
   21.1	CONSIGNOR	M	Число (13)	GLN вантажовідправника
   21.2	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   21.3	SENDER	M	Число (13)	GLN відправника повідомлення
   21.4	RECIPIENT	M	Число (13)	GLN одержувача повідомлення
   21.5	POSITIONS			Товарні позиції (початок блоку)
   21.5.1	POSITIONNUMBER	М	Число * 1, 100 +	Номер позиції
   21.5.2	PRODUCT	O	Число (8, 10, 14)	Штрих-код продукту
   21.5.3	DELIVEREDQUANTITY	O	Число позитивне	Кількість, що поставляється
   21.5.4	SSCC	M	Число (18)	SSCC (Serial Shipping Container Code) - серійний код транспортної упаковки
   21.5.5	PACKAGETYPE	O	Рядок (3)	Тип упаковки
   21.5.6	PACKAGEQUANTITY	O	Число десяткове	Кількість упаковок
   21.5.7	PACKAGEQUANTITYUNITS	O	Рядок (3)	Одиниця виміру
   21.5.8	PACKAGEWIGHT	O	Число десяткове	Вага
   21.5.9	PACKAGEWEIGHTUNITS	O	Рядок (3)	Одиниця виміру
   21.5.10	DELIVERYPLACE	M	Число (13)	Місце доставки позиції
   21.5.11	DESCRIPTION	O	Рядок (70)	Опис продукту
   21.5.12	INFO	O	Рядок (70)	Вільний текст
   21.5.13	PRODUCTIDBUYER	O	Рядок (35)	Артикул в БД покупця
   21.5.14	MAXPACKAGEQUANTITY	O	Число десяткове	Максимальна кількість упаковок
