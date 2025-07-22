##########################################################################################################################
**Рахунок (INVOICE)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/raxunok-invoice>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Рахунок (INVOICE) є повідомленням, в якому містяться дані по оплаті наданих послуг і товарів. В **Рахунку** обов'язково вказується ціна продукту без ПДВ; ставка ПДВ для кожної товарної позиції і підраховується сумарна вартість **Замовлення**.

   **XML:**

   .. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <INVOICE>
   <DOCUMENTNAME>380</DOCUMENTNAME>
   <NUMBER>11234</NUMBER>
   <DATE>2023-07-10</DATE>
   <INVOICETYPE>0</INVOICETYPE>
   <INVOICENUMBER>1213</INVOICENUMBER>
   <INVOICEDATE>2023-07-06</INVOICEDATE>
   <DELIVERYDATE>2023-07-06</DELIVERYDATE>
   <DELIVERYTIME>12:48</DELIVERYTIME>
   <CURRENCY>UAH</CURRENCY>
   <ORDERNUMBER>1213</ORDERNUMBER>
   <ORDERDATE>2023-07-06</ORDERDATE>
   <DELIVERYNOTENUMBER>1111</DELIVERYNOTENUMBER>
   <DELIVERYNOTEDATE>2023-07-10</DELIVERYNOTEDATE>
   <RECADVNUMBER>121212</RECADVNUMBER>
   <RECADVDATE>2023-07-05</RECADVDATE>
   <REFERENCEINVOICENUMBER>1111</REFERENCEINVOICENUMBER>
   <REFERENCEINVOICEDATE>2023-07-05</REFERENCEINVOICEDATE>
   <GOODSTOTALAMOUNT>1000.00</GOODSTOTALAMOUNT>
   <POSITIONSAMOUNT>10.00</POSITIONSAMOUNT>
   <VATSUM>200.00</VATSUM>
   <INVOICETOTALAMOUNT>1200.00</INVOICETOTALAMOUNT>
   <TAXABLEAMOUNT>1000.00</TAXABLEAMOUNT>
   <DISCOUNTAMOUNT>100</DISCOUNTAMOUNT>
   <CONDITIONSAMOUNT>110</CONDITIONSAMOUNT>
   <FREIGHTCHARGE>10</FREIGHTCHARGE>
   <PAYMENTORDERNUMBER>121213</PAYMENTORDERNUMBER>
   <FISCALNUMBER>304872104175</FISCALNUMBER>
   <REGISTRATIONNUMBER>30487219</REGISTRATIONNUMBER>
   <VATNUMBER>1244H39131319493</VATNUMBER>
   <CAMPAIGNNUMBER>55443</CAMPAIGNNUMBER>
   <MANAGER>Ярослав</MANAGER>
   <ACCOUNTING>Олена</ACCOUNTING>
   <CAMPAIGNNUMBERDATE>2023-07-06</CAMPAIGNNUMBERDATE>
   <VAT>20</VAT>
   <DOCUMENTSAFTERGOODSRECEIPT>0</DOCUMENTSAFTERGOODSRECEIPT>
   <DOCTYPE>0</DOCTYPE>
   <HEAD>
      <SUPPLIER>9864065732181</SUPPLIER>
      <SUPPLIERNAME>Постачальник</SUPPLIERNAME>
      <SUPPLIERADRESS>ПРОСПЕКТ ОЛЕКСАНДРА ПОЛЯ, будинок 42</SUPPLIERADRESS>
      <SUPPLIERCITY>Дніпро</SUPPLIERCITY>
      <SUPPLIERZIP>49000</SUPPLIERZIP>
      <BUYER>4820128010003</BUYER>
      <BUYERNAME>Мережа</BUYERNAME>
      <BUYERADRESS>ПРОСПЕКТ ОЛЕКСАНДРА ПОЛЯ, будинок 41</BUYERADRESS>
      <BUYERCITY>Дніпро</BUYERCITY>
      <BUYERZIP>49001</BUYERZIP>
      <BUYERKPP>30487219</BUYERKPP>
      <BUYERINN>304872104175</BUYERINN>
      <DELIVERYPLACE>4820128010003</DELIVERYPLACE>
      <DELIVERYTERMS>1</DELIVERYTERMS>
      <INVOICEPARTNER>4820128010003</INVOICEPARTNER>
      <FINALRECIPIENT>4820128010003</FINALRECIPIENT>
      <ORDERPARTNER>4820128010003</ORDERPARTNER>
      <CONSEGNOR>9864065732182</CONSEGNOR>
      <CONSEGNORNAME>Вантажовідправник1</CONSEGNORNAME>
      <CONSEGNORADRESS>Тестова адреса1</CONSEGNORADRESS>
      <CONSEGNORCITY>м.Дніпро</CONSEGNORCITY>
      <CONSEGNORZIP>492001</CONSEGNORZIP>
      <CONSIGNEE>4820128010003</CONSIGNEE>
      <CONSIGNEENAME>Вантажоодержувач1</CONSIGNEENAME>
      <CONSIGNEEADRESS>Тестова адреса2</CONSIGNEEADRESS>
      <CONSIGNEECITY>м.Київ</CONSIGNEECITY>
      <CONSIGNEEZIP>49001</CONSIGNEEZIP>
      <CONSIGNEEINN>04872104175</CONSIGNEEINN>
      <SENDER>4820128010003</SENDER>
      <RECIPIENT>9864065732182</RECIPIENT>
      <EDIINTERCHANGEID>11111</EDIINTERCHANGEID>
      <BANKNAME>ПриватБанк</BANKNAME>
      <BANKMFONUMBER>123463</BANKMFONUMBER>
      <BANKACCOUNT>Номер Р/р23131</BANKACCOUNT>
      <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <PRODUCT>4820050000111</PRODUCT>
         <IDPRODUCER>57683929</IDPRODUCER>
         <PRODUCTIDSUPPLIER>585538169</PRODUCTIDSUPPLIER>
         <PRODUCTIDBUYER>244331123</PRODUCTIDBUYER>
         <INVOICEDQUANTITYBEFORE>10</INVOICEDQUANTITYBEFORE>
         <INVOICEDQUANTITYAFTER>11</INVOICEDQUANTITYAFTER>
         <BUYERPARTNUMBER>111866</BUYERPARTNUMBER>
         <PRODINN>1012444</PRODINN>
         <INVOICEDQUANTITY>10</INVOICEDQUANTITY>
         <QUANTITYOFCUINTU>10</QUANTITYOFCUINTU>
         <INVOICEUNIT>BH</INVOICEUNIT>
         <UNITPRICEBEFORE>100</UNITPRICEBEFORE>
         <UNITPRICEAFTER>110</UNITPRICEAFTER>
         <GROSSPRICEBEFORE>120.00</GROSSPRICEBEFORE>
         <GROSSPRICEAFTER>120.00</GROSSPRICEAFTER>
         <AMOUNTWITHVATBEFORE>1000.00</AMOUNTWITHVATBEFORE>
         <AMOUNTWITHVATAFTER>1100.00</AMOUNTWITHVATAFTER>
         <AMOUNTBEFORE>1000.00</AMOUNTBEFORE>
         <AMOUNTAFTER>1100.00</AMOUNTAFTER>
         <UNITPRICE>100</UNITPRICE>
         <ADVICEPRICE>100</ADVICEPRICE>
         <GROSSPRICE>120.00</GROSSPRICE>
         <GROSSAMOUNT>120.00</GROSSAMOUNT>
         <AMOUNTWITHVAT>1200.00</AMOUNTWITHVAT>
         <AMOUNT>1000.00</AMOUNT>
         <COUNTRYORIGIN>AZ</COUNTRYORIGIN>
         <CUSTOMSTARIFFNUMBER>123123224</CUSTOMSTARIFFNUMBER>
         <CUSTOMSTARIFFNUMBERDATE>2023-07-06</CUSTOMSTARIFFNUMBERDATE>
         <FOREIGNTRADECODE>1114553</FOREIGNTRADECODE>
         <DESCRIPTION>Тестовий товар 1</DESCRIPTION>
         <AMOUNTTYPE>203</AMOUNTTYPE>
         <TAX>
         <FUNCTION>5</FUNCTION>
         <TAXTYPECODE>VAT</TAXTYPECODE>
         <TAXRATE>20</TAXRATE>
         <TAXAMOUNT>200.00</TAXAMOUNT>
         <CATEGORY>S</CATEGORY>
         <PRODUCTIONCODE>12356624211</PRODUCTIONCODE>
         </TAX>
         <BOTTLING>
         <BOTTLINGNUMBER>12</BOTTLINGNUMBER>
         <BOTTLINGDATE>2023-07-06</BOTTLINGDATE>
         </BOTTLING>
      </POSITION>
   </HEAD>
   </INVOICE>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1593635642&single=true" width="1100" height="3100" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	INVOICE			Початок документа
   1	DOCUMENTNAME	М	Рядок (16)	Назва документа (380 - Рахунок)
   2	NUMBER	М	Рядок (16)	Номер рахунку
   3	DATE	М	Дата (РРРР-ММ-ДД)	Дата створення рахунку
   4	INVOICETYPE	М	Число (1)	Тип документа: 0-Оригінал, 1-Коригування
   5	INVOICENUMBER	М/-	Рядок (16)	Номер рахунку; поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   6	INVOICEDATE	М/-	Дата (РРРР-ММ-ДД)	Дата рахунку; поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   7	DELIVERYDATE	М	Дата (РРРР-ММ-ДД)	Дата поставки
   8	DELIVERYTIME	O	Час (год: хв)	Час поставки
   9	CURRENCY	М	Рядок (3)	Код валюти
   10	ORDERNUMBER	М	Рядок (50)	Номер замовлення
   11	ORDERDATE	М	Дата (РРРР-ММ-ДД)	Дата замовлення
   12	DELIVERYNOTENUMBER	М	Рядок (16)	Номер накладної
   13	DELIVERYNOTEDATE	М	Дата (РРРР-ММ-ДД)	Дата накладної
   14	RECADVNUMBER	O	Рядок (16)	Номер пов. про прийом
   15	RECADVDATE	O	Дата (РРРР-ММ-ДД)	Дата пов. про прийом
   16	REFERENCEINVOICENUMBER	O	Рядок (15)	Номер рахунку
   17	REFERENCEINVOICEDATE	O	Дата (РРРР-ММ-ДД)	Дата рахунку
   18	GOODSTOTALAMOUNT	М	Число десяткове	Всього без ПДВ
   19	POSITIONSAMOUNT	М	Число десяткове	Всього за позиціями
   20	VATSUM	М	Число десяткове	Сума ПДВ
   21	INVOICETOTALAMOUNT	М	Число десяткове	Сума за рахунком
   22	TAXABLEAMOUNT	М	Число десяткове	База оподаткування
   23	DISCOUNTAMOUNT	О	Число позитивне	Сума знижки
   24	CONDITIONSAMOUNT	О	Число позитивне	Узгоджена сума оплати
   25	FREIGHTCHARGE	О	Число позитивне	Плата за перевезення вантажу
   26	PAYMENTORDERNUMBER	О	Рядок (35)	Номер платіжно-розрахункового документа або зеленої марки
   27	FISCALNUMBER	О	Рядок (35)	ІПН
   28	REGISTRATIONNUMBER	О	Рядок (35)	ЄДРПОУ
   29	VATNUMBER	О	Рядок (16)	Номер свід. ПДВ
   30	CAMPAIGNNUMBER	О	Рядок (16)	Номер договору на поставку
   31	CAMPAIGNNUMBERDATE	O	Дата (РРРР-ММ-ДД)	Дата договору на поставку
   32	MANAGER	О	Рядок (35)	Ім’я менеджера
   33	ACCOUNTING	О	Рядок (35)	Ім’я головного бухгалтера
   34	VAT	М	Число позитивне	Ставка ПДВ,%
   35	DOCUMENTSAFTERGOODSRECEIPT			Момент подання документів на поставку, можливі значення: 0 - До початку поставки товару; 1 - Після поставки товару
   36	DOCTYPE	О	Рядок (1)	Тип документа: O - оригінал, R - заміна, D - видалення
   37	HEAD			Початок основного блоку
   37.1	SUPPLIER	М	Число (13)	GLN постачальника
   37.2	SUPPLIERNAME	O	Рядок (70)	Ім’я постачальника
   37.3	SUPPLIERADRESS	O	Рядок (70)	Адреса постачальника
   37.4	SUPPLIERCITY	O	Рядок (70)	Місто постачальника
   37.5	SUPPLIERZIP	O	Рядок (35)	Індекс постачальника
   37.6	BUYER	М	Число (13)	GLN покупця
   37.7	BUYERNAME	O	Рядок (35)	Ім’я покупця
   37.8	BUYERADRESS	O	Рядок (35)	Адреса покупця
   37.9	BUYERCITY	O	Рядок (35)	Місто покупця
   37.10	BUYERZIP	O	Число позитивне	Індекс покупця
   37.11	BUYERKPP	O	Рядок (12)	ЄДРПОУ покупця
   37.12	BUYERINN	O	Число позитивне	ІПН покупця
   37.13	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   37.14	DELIVERYTERMS	О		Тип відвантаження; можливі значення: 1 - Самовивіз; 2 - Доставка постачальником
   37.15	CONSEGNOR	О	Число (13)	GLN вантажовідправника
   37.16	INVOICEPARTNER	O	Число (13)	GLN платника
   37.17	INVOICEPARTNERINN	O	Число позитивне	ІПН платника
   37.18	FINALRECIPIENT	O	Число (13)	GLN кінцевого консигнатора
   37.19	ORDERPARTNER	O	Число (13)	GLN замовника
   37.20	CONSEGNOR	О	Число (13)	GLN вантажовідправника
   37.21	CONSEGNORNAME	O	Рядок (35)	Ім’я вантажовідправника
   37.22	CONSEGNORADRESS	O	Рядок (35)	Адреса вантажовідправника
   37.23	CONSEGNORCITY	O	Рядок (35)	Місто вантажовідправника
   37.24	CONSEGNORZIP	O	Число позитивне	Індекс вантажовідправника
   37.25	CONSIGNEE	О	Число (13)	GLN вантажоодержувача
   37.26	CONSIGNEENAME	O	Рядок (35)	Ім’я вантажоодержувача
   37.27	CONSIGNEEADRESS	O	Рядок (35)	Адреса вантажоодержувача
   37.28	CONSIGNEECITY	O	Рядок (35)	Місто вантажоодержувача
   37.29	CONSIGNEEZIP	O	Число позитивне	Індекс вантажоодержувача
   37.30	CONSIGNEEINN	O	Число позитивне	ІПН вантажоодержувача
   37.31	SENDER	М	Число (13)	GLN відправника повідомлення
   37.32	RECIPIENT	М	Число (13)	GLN одержувача повідомлення
   37.33	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   37.34	BANKNAME	O	Рядок (70)	Найменування банку
   37.35	BANKMFONUMBER	О	Число (6)	МФО банку
   37.36	BANKACCOUNT		Рядок (35)	Номер р/р
   37.37	POSITION			Товарні позиції (початок блоку)
   37.37.1	POSITIONNUMBER	М	Число * 1, 100 +	Номер позиції.
   37.37.2	PRODUCT	М	Число (8, 10, 14)	Штрих-код продукту
   37.37.3	IDPRODUCER	О	Рядок (8)	Код виробника
   37.37.4	PRODUCTIDSUPPLIER	О	Рядок (16)	Артикул в БД постачальника
   37.37.5	PRODUCTIDBUYER	О	Рядок (16)	Артикул в БД покупця
   37.37.6	INVOICEDQUANTITYBEFORE	M/-	Число позитивне	Кількість в „Оригіналі“ (INVOICETYPE=0); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   37.37.7	INVOICEDQUANTITYAFTER	M/-	Число позитивне	Кількість в „Коригуванні“ (INVOICETYPE=1); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   37.37.8	BUYERPARTNUMBER	О	Рядок (16)	внутрішній системний номер артикулу в БД покупця
   37.37.9	PRODINN	O	Число позитивне	ІПН виробника/імпортера
   37.37.10	INVOICEDQUANTITY	М/-	Число позитивне	Кількість за рахунком; поле не заповнюється при INVOICETYPE=1
   37.37.11	QUANTITYOFCUINTU	O	Число позитивне	Кількість в упаковці
   37.37.12	INVOICEUNIT	O	Рядок (3)	Одиниці виміру
   37.37.13	UNITPRICEBEFORE	M/О	Число позитивне	Ціна без НДС в „Оригіналі“ (INVOICETYPE=0); поле обов’язкове до заповнення при INVOICETYPE=1
   37.37.14	UNITPRICEAFTER	M/О	Число позитивне	Ціна без НДС в „Коригуванні“ (INVOICETYPE=1); поле обов’язкове до заповнення при INVOICETYPE=1
   37.37.15	GROSSPRICEBEFORE	M/-	Число позитивне	Ціна з НДС в „Оригіналі“ (INVOICETYPE=0); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   37.37.16	GROSSPRICEAFTER	M/-	Число позитивне	Ціна з НДС в „Коригуванні“ (INVOICETYPE=1); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   37.37.17	AMOUNTWITHVATBEFORE	M/-	Число позитивне	Сума з НДС товару в „Оригіналі“ (INVOICETYPE=0); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   37.37.18	AMOUNTWITHVATAFTER	M/-	Число позитивне	Сума з НДС товару в „Коригуванні“ (INVOICETYPE=1); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   37.37.19	AMOUNTBEFORE	M/-	Число позитивне	Сума товару в „Оригіналі“ (INVOICETYPE=0); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   37.37.20	AMOUNTAFTER	M/-	Число позитивне	Сума товару в „Коригуванні“ (INVOICETYPE=1); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   37.37.21	UNITPRICE	М/-	Число десяткове	Ціна за одиницю (без ПДВ); поле не заповнюється при INVOICETYPE=1
   37.37.22	ADVICEPRICE	O	Число десяткове	Рекомендована ціна (державою)
   37.37.23	GROSSPRICE	O/-	Число десяткове	Ціна за одиницю з ПДВ; поле не заповнюється при INVOICETYPE=1
   37.37.24	GROSSAMOUNT	O	Число десяткове	Сума з ПДВ
   37.37.25	AMOUNT	М/-	Число десяткове	Сума товару (без ПДВ); поле не заповнюється при INVOICETYPE=1
   37.37.26	AMOUNTWITHVAT	O/-	Число десяткове	Сума товару (з ПДВ); поле не заповнюється при INVOICETYPE=1
   37.37.27	COUNTRYORIGIN	О	Рядок (2)	Країна виробник
   37.37.28	CUSTOMSTARIFFNUMBER	О	Рядок (35)	Номер державної митної декларації (ВМД)
   37.37.29	CUSTOMSTARIFFNUMBERDATE	О	Дата (РРРР-ММ-ДД)	Дата ВМД
   37.37.30	FOREIGNTRADECODE	О	Рядок (35)	Код товара по УКТВЕД11 (для України)
   37.37.31	DESCRIPTION	О	Рядок (70)	Опис продукту
   37.37.32	AMOUNTTYPE	М	Число (3)	Службове поле
   37.37.33.1	TAX.FUNCTION	М	Число (1)	Логістика. 5 - мито, 6 - грошовий збір, 7 - податок
   37.37.33.2	TAX.TAXTYPECODE	М	Рядок (3)	Логістика. Код податку (ПДВ)
   37.37.33.3	TAX.TAXRATE	М	Число (3)	Логістика. Ставка податку (ПДВ,%)
   37.37.33.4	TAX.TAXAMOUNT	М	Число десяткове	Логістика. ПДВ
   37.37.33.5	TAX.CATEGORY	М	Рядок (1)	Логістика. S - стандартна, А - змішана, Z - нульовий збір
   37.37.34	TAX.PRODUCTIONCODE	М/-	Рядок (16)	Логістика. Код алкогольної продукції
   37.37.35.1	BOTTLING.BOTTLINGNUMBER	М/-	Число (2)	Номер партії розливу
   37.37.35.2	BOTTLING.BOTTLINGDATE	М/-	Дата (РРРР-ММ-ДД)	Дата партії розливу
