##########################################################################################################################
**Коригування рахунку (KORINVOICE)**
##########################################################################################################################

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <INVOICE>
   <DOCUMENTNAME>384</DOCUMENTNAME>
   <NUMBER>11234</NUMBER>
   <DATE>2023-07-10</DATE>
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
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=2013259786&single=true" width="1100" height="2500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   1	DOCUMENTNAME	М	Рядок (16)	Назва документа (384 - Коригування рахунку)
   2	NUMBER	М	Рядок (16)	Номер рахунку
   3	DATE	М	Дата (РРРР-ММ-ДД)	Дата створення рахунку
   4	INVOICENUMBER		Рядок (16)	номер ТН (номер RECADV)
   5	INVOICEDATE		Дата (РРРР-ММ-ДД)	дата ТН
   6	DELIVERYDATE	М	Дата (РРРР-ММ-ДД)	Дата поставки
   7	DELIVERYTIME	O	Час (год: хв)	Час поставки
   8	CURRENCY	М	Рядок (3)	Код валюти
   9	ORDERNUMBER	М	Рядок (50)	Номер замовлення
   10	ORDERDATE	М	Дата (РРРР-ММ-ДД)	Дата замовлення
   11	DELIVERYNOTENUMBER	М	Рядок (16)	Номер накладної
   12	DELIVERYNOTEDATE	М	Дата (РРРР-ММ-ДД)	Дата накладної
   13	RECADVNUMBER	O	Рядок (16)	Номер пов. про прийом
   14	RECADVDATE	O	Дата (РРРР-ММ-ДД)	Дата пов. про прийом
   15	REFERENCEINVOICENUMBER	O	Рядок (15)	Номер рахунку
   16	REFERENCEINVOICEDATE	O	Дата (РРРР-ММ-ДД)	Дата рахунку
   17	GOODSTOTALAMOUNT	М	Число десяткове	Всього без ПДВ
   18	POSITIONSAMOUNT	М	Число десяткове	Всього по позиціях
   19	VATSUM	М	Число десяткове	Сума ПДВ
   20	INVOICETOTALAMOUNT	М	Число десяткове	Сума за рахунком
   21	TAXABLEAMOUNT	М	Число десяткове	База оподаткування
   22	DISCOUNTAMOUNT	О	Число позитивне	Сума знижки
   23	CONDITIONSAMOUNT	О	Число позитивне	Узгоджена сума оплати
   24	FREIGHTCHARGE	О	Число позитивне	Плата за перевезення вантажу
   25	PAYMENTORDERNUMBER	О	Рядок (35)	Номер платіжно-розрахункового документа або зеленої марки
   26	FISCALNUMBER	О	Рядок (35)	ІПН
   27	REGISTRATIONNUMBER	О	Рядок (35)	ЄДРПОУ
   28	VATNUMBER	О	Рядок (16)	Номер свід. ПДВ
   29	CAMPAIGNNUMBER	О	Рядок (16)	Номер договору на поставку
   30	MANAGER	О	Рядок (35)	Ім’я менеджера
   31	ACCOUNTING	О	Рядок (35)	Ім’я головного бухгалтера
   32	VAT	М	Число позитивне	Ставка ПДВ,%
   33	HEAD			Початок основного блоку
   33.1	SUPPLIER	М	Число (13)	GLN постачальника
   33.2	SUPPLIERNAME	O	Рядок (70)	Ім’я постачальника
   33.3	SUPPLIERADRESS	O	Рядок (70)	Адреса постачальника
   33.4	SUPPLIERCITY	O	Рядок (70)	Місто постачальника
   33.5	SUPPLIERZIP	O	Рядок (35)	Індекс постачальника
   33.6	BUYER	М	Число (13)	GLN покупця
   33.7	BUYERID			
   33.8	BUYERNAME	O	Рядок (35)	Ім’я покупця
   33.9	BUYERADRESS	O	Рядок (35)	Адреса покупця
   33.10	BUYERCITY	O	Рядок (35)	Місто покупця
   33.11	BUYERZIP	O	Число позитивне	Індекс покупця
   33.12	BUYERINN	O	Число позитивне	ІПН покупця
   33.13	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   33.14	CONSEGNOR	О	Число (13)	GLN вантажовідправника
   33.15	INVOICEPARTNER	O	Число (13)	GLN платника
   33.16	INVOICEPARTNERINN	O	Число позитивне	ІПН платника
   33.17	FINALRECIPIENT	O	Число (13)	GLN кінцевого консигнатора
   33.18	ORDERPARTNER	O	Число (13)	GLN замовника
   33.19	CONSEGNOR	О	Число (13)	GLN вантажовідправника
   33.20	CONSEGNORNAME	O	Рядок (35)	Ім’я вантажовідправника
   33.21	CONSEGNORADRESS	O	Рядок (35)	Адреса вантажовідправника
   33.22	CONSEGNORCITY	O	Рядок (35)	Місто вантажовідправника
   33.23	CONSEGNORZIP	O	Число позитивне	Індекс вантажовідправника
   33.24	CONSIGNEE	О11	Число (13)	GLN вантажоодержувача
   33.25	CONSIGNEENAME	O	Рядок (35)	Ім’я вантажоодержувача
   33.26	CONSIGNEEADRESS	O	Рядок (35)	Адреса вантажоодержувача
   33.27	CONSIGNEECITY	O	Рядок (35)	Місто вантажоодержувача
   33.28	CONSIGNEEZIP	O	Число позитивне	Індекс вантажоодержувача
   33.29	CONSIGNEEINN	O	Число позитивне	ІПН вантажоодержувача
   33.30	SENDER	М	Число (13)	GLN відправника повідомлення
   33.31	RECIPIENT	М	Число (13)	GLN одержувача повідомлення
   33.32	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   33.33	BANKNAME	O	Рядок (70)	Найменування банку
   33.34	BANKMFONUMBER	О	Число (6)	МФО банку
   33.35	BANKACCOUNT		Рядок (35)	Номер р/р
   33.36	POSITION			Товарні позиції (початок блоку)
   33.36.1	POSITIONNUMBER	М	Число * 1, 100 +	Номер позиції.
   33.36.2	PRODUCT	М	Число (8, 10, 14)	Штрих-код продукту
   33.36.3	PRODUCTIDSUPPLIER	О	Рядок (16)	Артикул в БД постачальника
   33.36.4	PRODUCTIDBUYER	О	Рядок (16)	Артикул в БД покупця
   33.36.5	BUYERPARTNUMBER	О	Рядок (16)	внутрішній системний номер артикулу в БД покупця
   33.36.6	PRODINN	O	Число позитивне	ІПН виробника/імпортера
   33.36.7	INVOICEDQUANTITY	М	Число позитивне	Кількість за рахунком
   33.36.8	QUANTITYOFCUINTU	O	Число позитивне	Кількість в упаковці
   33.36.9	INVOICEDQUANTITYBEFORE	M/-	Число позитивне	Кількість в „Оригіналі“ (INVOICETYPE=0); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   33.36.10	INVOICEDQUANTITYAFTER	M/-	Число позитивне	Кількість в „Коригуванні“ (INVOICETYPE=1); поле обов’язкове до заповнення при INVOICETYPE=1 і не заповнюється при INVOICETYPE=0
   33.36.11	INVOICEUNIT	O	Рядок (3)	Одиниці виміру
   33.36.12	UNITPRICEBEFORE			
   33.36.13	UNITPRICEAFTER			
   33.36.14	UNITPRICE	М	Число десяткове	Ціна за одиницю (без ПДВ)
   33.36.15	ADVICEPRICE	O	Число десяткове	Рекомендована ціна (державою)
   33.36.16	GROSSPRICE	O	Число десяткове	Ціна за одиницю з ПДВ
   33.36.17	GROSSAMOUNT	O	Число десяткове	Сума з ПДВ
   33.36.18	AMOUNT	М	Число десяткове	Сума товару (без ПДВ)
   33.36.19	AMOUNTBEFORE			
   33.36.20	AMOUNTAFTER			
   33.36.21	AMOUNTWITHVAT	О	Число десяткове	Сума товару (з ПДВ)
   33.36.22	AMOUNTWITHVATBEFORE			
   33.36.23	AMOUNTWITHVATAFTER			
   33.36.24	COUNTRYORIGIN	О	Рядок (2)	Країна виробник
   33.36.25	CUSTOMSTARIFFNUMBER	О	Рядок (35)	Номер державної митної декларації (ВМД)
   33.36.26	CUSTOMSTARIFFNUMBERDATE	О	Дата (РРРР-ММ-ДД)	Дата ВМД
   33.36.27	FOREIGNTRADECODE	О	Рядок (35)	Код товара по УКТВЕД11 (для України)
   33.36.28	DESCRIPTION	О	Рядок (70)	Опис продукту
   33.36.29	AMOUNTTYPE	М	Число (3)	Службове поле
   33.36.30.1	TAX.FUNCTION	М	Число (1)	Податки. 5 - мито, 6 - грошовий збір, 7 - податок
   33.36.30.2	TAX.TAXTYPECODE	М	Рядок (3)	Податки. Код податку (ПДВ)
   33.36.30.3	TAX.TAXRATE	М	Число (3)	Податки. Ставка податку (ПДВ,%)
   33.36.30.4	TAX.TAXAMOUNT	М	Число десяткове	Податки. ПДВ
   33.36.30.5	TAX.TAXAMOUNTBEFORE		Число десяткове	Податки. До коригування
   33.36.30.6	TAX.TAXAMOUNTAFTER		Число десяткове	Податки. Після коригування
   33.36.30.7	TAX.CATEGORY	М	Рядок (1)	Податки. S - стандартна, А - змішана, Z - нульовий збір
   33.36.31	PRODUCTIONCODE	М/-	Рядок (16)	Код алкогольної продукції
   33.36.31.1	BOTTLING.BOTTLINGNUMBER	М/-	Число (2)	Номер партії розливу
   33.36.31.2	BOTTLING.BOTTLINGDATE	М/-	Дата (РРРР-ММ-ДД)	Дата партії розливу
