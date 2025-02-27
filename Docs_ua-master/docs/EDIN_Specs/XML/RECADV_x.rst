##########################################################################################################################
**Повідомлення про прийом (RECADV)**
##########################################################################################################################

.. epigraph::

   Повідомлення про прийом (RECADV) використовується для оповіщення постачальників про прийом товарів. Даний документ інформує про кількість отриманих товарних позицій і може вказувати на розбіжності між фактично отриманим товаром і зазначеним у документації.

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <RECADV>
   <NUMBER>121212</NUMBER>
   <DATE>2023-07-10</DATE>
   <ACTION>9</ACTION>
   <RECEPTIONDATE>2023-07-03</RECEPTIONDATE>
   <RECEPTIONTIME>12:37</RECEPTIONTIME>
   <ARRIVALDATE>2023-07-03</ARRIVALDATE>
   <ARRIVALTIME>12:37</ARRIVALTIME>
   <ORDERNUMBER>111111</ORDERNUMBER>
   <ORDERDATE>2023-07-03</ORDERDATE>
   <DESADVNUMBER>123456</DESADVNUMBER>
   <DESADVDATE>2023-07-03</DESADVDATE>
   <DELIVERYNOTENUMBER>1234567</DELIVERYNOTENUMBER>
   <DELIVERYNOTEDATE>2023-07-03</DELIVERYNOTEDATE>
   <CAMPAIGNNUMBER>12У312</CAMPAIGNNUMBER>
   <DOCTYPE>O</DOCTYPE>
   <SUPPLIERORDENUMBER>111111</SUPPLIERORDENUMBER>
   <SUPPLIERORDERDATE>2023-07-03</SUPPLIERORDERDATE>
   <TRANSPORTID>12</TRANSPORTID>
   <TOTALPACKAGES>110</TOTALPACKAGES>
   <SUPORDER>номер 123</SUPORDER>
   <KDKNUM>40817810099910004312</KDKNUM>
   <ORDRTYPE>ORIGINAL</ORDRTYPE>
   <INFO>вільний текст</INFO>
   <BUYERACTNUMBER>123053</BUYERACTNUMBER>
   <GOODSTOTALAMOUNT>120.10</GOODSTOTALAMOUNT>
   <INVOICETOTALAMOUNT>120.10</INVOICETOTALAMOUNT>
   <TOTALVAT>246912.2</TOTALVAT>
   <TOTALAMOUNT>1234561.2</TOTALAMOUNT>
   <TOTALAMOUNTWITHVAT>1481473.4</TOTALAMOUNTWITHVAT>
   <EXCHANGE_SCHEMA_TYPE>0</EXCHANGE_SCHEMA_TYPE>
   <HEAD>
      <SUPPLIER>9864232324065</SUPPLIER>
      <BUYER>9864232301905</BUYER>
      <BUYERCODE>43562211</BUYERCODE>
      <DELIVERYPLACE>9864232301905</DELIVERYPLACE>
      <FINALRECIPIENT>9864232301905</FINALRECIPIENT>
      <LOGISTICPARTNER>9864232301905</LOGISTICPARTNER>
      <SENDER>9864232301905</SENDER>
      <SENDERNAME>Василій</SENDERNAME>
      <SENDERPHONE>+380955678484</SENDERPHONE>
      <SENDERCITY>Київ</SENDERCITY>
      <SENDERADRESS>вул.Чистяківська 40</SENDERADRESS>
      <RECIPIENT>9864232324065</RECIPIENT>
      <RECIPIENTCODE>51112212</RECIPIENTCODE>
      <RECIPIENTNAME>Василій</RECIPIENTNAME>
      <RECIPIENTCONTACTFACE>Іванов Сергій Миколайович</RECIPIENTCONTACTFACE>
      <RECIPIENTPHONE>+380955678484</RECIPIENTPHONE>
      <RECIPIENTCITY>Київ</RECIPIENTCITY>
      <RECIPIENTADRESS>вул.Чистяківська 40</RECIPIENTADRESS>
      <INVOICEPARTNER>9864232301905</INVOICEPARTNER>
      <EDIINTERCHANGEID>64565</EDIINTERCHANGEID>
      <PACKINGSEQUENCE>
         <HIERARCHICALID>1</HIERARCHICALID>
         <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <PRODUCT>100000001</PRODUCT>
         <PRODUCTIDSUPPLIER>12334</PRODUCTIDSUPPLIER>
         <PRODUCTIDBUYER>1q2w3e1</PRODUCTIDBUYER>
         <BUYERPARTNUMBER>121212</BUYERPARTNUMBER>
         <ACCEPTEDQUANTITY>10</ACCEPTEDQUANTITY>
         <ACCEPTEDUNIT>PCE</ACCEPTEDUNIT>
         <ORDERQUANTITY>10</ORDERQUANTITY>
         <ORDERUNIT>CEN</ORDERUNIT>
         <DELIVERQUANTITY>10</DELIVERQUANTITY>
         <DELTAQUANTITY>NaN</DELTAQUANTITY>
         <PRICE>123456.120000</PRICE>
         <PRICEWITHVAT>148147.34</PRICEWITHVAT>
         <AMOUNT>1234561.2</AMOUNT>
         <CONDITIONSTATUS>346</CONDITIONSTATUS>
         <AMOUNTWITHVAT>1222215.59</AMOUNTWITHVAT>
         <DESCRIPTION>Тест 2</DESCRIPTION>
         <PACKAGEID>1111</PACKAGEID>   
         <VAT>20</VAT> 
         <NOTACCEPTEDREASON>бій</NOTACCEPTEDREASON>
         </POSITION>
      </PACKINGSEQUENCE>
   </HEAD>
   </RECADV>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1472561914&single=true" width="1100" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	RECADV			Початок документа
   1	NUMBER	М	Рядок (50)	Номер повідомлення про прийом
   2	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   3	ACTION			Дія
   4	EXCHANGE_SCHEMA_TYPE	O		лише для Фоззі: схема документообігу: 0-звичайна, 1-особлива
   5	RECEPTIONDATE	М	Дата (РРРР-ММ-ДД)	Дата прийому товару
   6	RECEPTIONTIME	O	Час (год: хв)	Час прийому товару
   7	ARRIVALDATE	O	Дата (РРРР-ММ-ДД)	Дата прибуття товару (транспорту)
   8	ARRIVALTIME	O	Час (год: хв)	Час прибуття товару (транспорту)
   9	ORDERNUMBER	О	Рядок (50)	Номер замовлення
   10	ORDERDATE	О	Дата (РРРР-ММ-ДД)	Дата замовлення
   11	DESADVNUMBER	М	Рядок (16)	Номер повідомлення про відвантаження
   12	DESADVDATE	О	Дата (РРРР-ММ-ДД)	Дата повідомлення про відвантаження
   13	DELIVERYNOTENUMBER	О	Рядок (16)	Номер накладної
   14	DELIVERYNOTEDATE	O	Дата (РРРР-ММ-ДД)	Дата накладної
   15	CAMPAIGNNUMBER	О	Рядок (16)	Номер договору на поставку
   16	DOCTYPE	О	Рядок (1)	"Тип документа:
   O - оригінал
   
   R - заміна
   
   D - видалення"
   17	SUPPLIERORDENUMBER	O	Рядок (35)	Номер замовлення в обліковій системі постачальника
   18	SUPPLIERORDERDATE	O	Дата (РРРР-ММ-ДД)	Дата повідомлення про відвантаження
   19	TRANSPORTID	O	Рядок (30)	Номер транспортного засобу
   20	TOTALPACKAGES	O	Число десяткове	Загальна кількість упаковок
   21	SUPORDER	O	Рядок (35)	Номер замовлення постачальника
   22	KDKNUM	O	Рядок (35)	Номер загального замовлення КДК
   23	ORDRTYPE	O	Рядок (35)	Тип замовлення
   24	INFO	O	Рядок (70)	Додаткова інформація
   25	BUYERACTNUMBER			Номер документа (акта) покупця
   26	GOODSTOTALAMOUNT	O	Число десяткове	Всього без ПДВ
   27	INVOICETOTALAMOUNT	O	Число десяткове	Сума за рахунком
   28	TOTALVAT	O	Число позитивне	Загальна ставка ПДВ
   29	TOTALAMOUNT	O	Число позитивне	Сума по документу без ПДВ
   30	TOTALAMOUNTWITHVAT	O	Число позитивне	Сума по документу з ПДВ
   31	HEAD			Початок основного блоку
   31.1	SUPPLIER	М	Число (13)	GLN постачальника
   31.2	SUPPLIERNAME	O	Рядок (70)	Ім’я постачальника
   31.3	BUYER	М	Число (13)	GLN покупця
   31.4	BUYERCODE	O	Рядок (35)	Код покупця
   31.5	DELIVERYPLACE	М	Число (13)	GLN місця доставки
   31.6	FINALRECIPIENT	O	Число (13)	GLN кінцевого отримувача
   31.7	LOGISTICPARTNER	O	Число (13)	GLN перевізника
   31.8	SENDER	M	Число (13)	GLN відправника
   31.9	SENDERNAME	O	Рядок (70)	Ім’я відправника
   31.10	SENDERPHONE	O	Рядок (35)	Телефон відправника
   31.11	SENDERCITY	O	Рядок (70)	Місто відправника
   31.12	SENDERADRESS	O	Рядок (70)	Адреса відправника
   31.13	RECIPIENT	М	Число (13)	GLN одержувача
   31.14	RECIPIENTCODE	О	Рядок (35)	Код отримувача
   31.15	RECIPIENTNAME	O	Рядок (70)	Ім’я одержувача
   31.16	RECIPIENTCONTACTFACE	O	Рядок (70)	Контактна особа
   31.17	RECIPIENTPHONE	O	Рядок (35)	Телефон одержувача
   31.18	RECIPIENTCITY	O	Рядок (35)	Місто одержувача
   31.19	RECIPIENTADRESS	O	Рядок (70)	Адреса одержувача
   31.20	INVOICEPARTNER	O	Число (13)	GLN платника
   31.21	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   31.22	PACKINGSEQUENCE			Робота з товарними позиціями (початок блоку)
   31.22.1	HIERARCHICALID	М	Число позитивне	Номер ієрархії упаковки
   31.22.2	POSITION			Товарні позиції (початок блоку)
   31.22.2.1	POSITIONNUMBER	М	Число позитивне	Номер товарної позиції
   31.22.2.2	PRODUCT	М	Число (8, 10, 14)	Штрих-код продукту
   31.22.2.3	PRODUCTIDSUPPLIER	О	Рядок (16)	Артикул в БД постачальника
   31.22.2.4	PRODUCTIDBUYER	О	Рядок (16)	Артикул в БД покупця
   31.22.2.5	BUYERPARTNUMBER	О	Рядок (16)	Внутрішній системний номер артикулу в БД покупця
   31.22.2.6	ACCEPTEDQUANTITY	М	Число позитивне	Прийнята кількість товару
   31.22.2.7	ACCEPTEDUNIT	O	Рядок (3)	Одиниці виміру
   31.22.2.8	DELIVERQUANTITY	М	Число позитивне	Кількість товару, що поставляється
   31.22.2.9	ORDERQUANTITY	М	Число позитивне	Замовлена кількість товару
   31.22.2.10	ORDERUNIT	O	Рядок (3)	Одиниці виміру
   31.22.2.11	DELTAQUANTITY	O	Число позитивне	Розбіжність
   31.22.2.12	PRICE	O	Число десяткове	Ціна однієї одиниці продукції без ПДВ
   31.22.2.13	PRICEWITHVAT	O	Число десяткове	Ціна однієї одиниці продукції з ПДВ
   31.22.2.14	AMOUNT	O	Число десяткове	Сума товару (без ПДВ)
   31.22.2.15	AMOUNTWITHVAT	O	Число десяткове	Сума товару (з ПДВ)
   31.22.2.16	CONDITIONSTATUS	О	Рядок (3)	Статус кондиції
   31.22.2.17	DESCRIPTION	О	Рядок (70)	Опис продукту
   31.22.2.18	PACKAGEID	O	Рядок	Ідентифікатор упаковки
   31.22.2.19	VAT	O	Число позитивне	Ставка ПДВ (%)
   31.22.2.20	NOTACCEPTEDREASON	O	Рядок	Причина розбіжності
