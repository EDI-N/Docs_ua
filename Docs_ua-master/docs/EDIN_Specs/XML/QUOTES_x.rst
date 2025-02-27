##########################################################################################################################
**Додаток до повідомлення про відвантаження (QUOTES)**
##########################################################################################################################

.. epigraph::

   Документ QUOTES відправляється на підставі відправленого документа DESADV (Повідомлення про відвантаження). Багато полей на WEB автоматично заповнюються з DESADV

**XML:**

.. code:: xml

   <QUOTES>
   <NUMBER>des_api_1</NUMBER>
   <DATE>2023-02-17</DATE>
   <DELIVERYDATE>2023-02-28</DELIVERYDATE>
   <DELIVERYTIME>12:48</DELIVERYTIME>
   <ORDERNUMBER>3346_ord_1</ORDERNUMBER>
   <ORDERDATE>2023-02-17</ORDERDATE>
   <DESADVNUMBER>3346_des_1</DESADVNUMBER>
   <DESADVDATE>2023-02-17</DESADVDATE>
   <DELIVERYNOTENUMBER>4444</DELIVERYNOTENUMBER>
   <DELIVERYNOTEDATE>2023-02-17</DELIVERYNOTEDATE>
   <CAMPAIGNNUMBER>343443</CAMPAIGNNUMBER>
   <HEAD>
   <SUPPLIER>9864065732181</SUPPLIER>
   <BUYER>9864065732211</BUYER>
   <DELIVERYPLACE>9864065732211</DELIVERYPLACE>
   <SENDER>9864065732181</SENDER>
   <RECIPIENT>9864065732211</RECIPIENT>
   <PACKINGSEQUENCE>
   <HIERARCHICALID>1</HIERARCHICALID>
   <POSITION>
   <POSITIONNUMBER>1</POSITIONNUMBER>
   <PRODUCT>1472583690147</PRODUCT>
   <PRODUCTIDSUPPLIER>22222</PRODUCTIDSUPPLIER>
   <PRODUCTIDBUYER>333333</PRODUCTIDBUYER>
   <DELIVEREDQUANTITY>3</DELIVEREDQUANTITY>
   <DELIVEREDUNIT>PCE</DELIVEREDUNIT>
   <ORDEREDQUANTITY>3</ORDEREDQUANTITY>
   <ORDERUNIT>PCE</ORDERUNIT>
   <CUSTOMSTARIFFNUMBER>45678432</CUSTOMSTARIFFNUMBER>
   <PRICE>456.000000</PRICE>
   <PRICEWITHVAT>487.92</PRICEWITHVAT>
   <DESCRIPTION>drink1</DESCRIPTION>
   <BATCHNUMBERS>
   <BATCHNUMBER>4444443434344</BATCHNUMBER>
   </BATCHNUMBERS>
   </POSITION>
   </PACKINGSEQUENCE>
   </HEAD>
   </QUOTES>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=617949780&single=true" width="1100" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	QUOTES			Початок документа
   1	NUMBER	М	Рядок (16)	Номер документа
   2	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   3	DELIVERYDATE	М	Дата (РРРР-ММ-ДД)	Очікувана дата доставки
   4	DELIVERYTIME	О	Час (год: хв)	Очікуваний час доставки
   5	ORDERNUMBER	М	Рядок (50)	Номер замовлення на поставку
   6	ORDERDATE	М	Дата (РРРР-ММ-ДД)	Дата замовлення на поставку
   7	DESADVNUMBER	М	Рядок (16)	Номер повідомлення про відвантаження
   8	DESADVDATE	М	Дата (РРРР-ММ-ДД)	Дата повідомлення про відвантаження
   9	DELIVERYNOTENUMBER	М	Рядок (16)	Номер накладної
   10	DELIVERYNOTEDATE	М	Дата (РРРР-ММ-ДД)	Дата накладної
   11	CAMPAIGNNUMBER	О	Рядок (70)	Номер договору на поставку (контракту)
   12	HEAD			Початок основного блоку
   12.1	SUPPLIER	М	Число (13)	GLN постачальника
   12.2	BUYER	М	Число (13)	GLN покупця
   12.3	DELIVERYPLACE	М	Число (13)	GLN місця доставки
   12.4	SENDER	М	Число (13)	GLN відправника повідомлення
   12.5	RECIPIENT	М	Число (13)	GLN одержувача повідомлення
   12.6	PACKINGSEQUENCE			Робота з товарними позиціями (початок блоку)
   12.6.1	HIERARCHICALID	М	Число позитивне	Номер ієрархії упаковки
   12.6.2	POSITION			Товарні позиції (початок блоку)
   12.6.2.1	POSITIONNUMBER	М	Число позитивне	Номер товарної позиції
   12.6.2.2	PRODUCT	М	Число (8, 10, 14)	Штрих-код продукту
   12.6.2.3	PRODUCTIDSUPPLIER	О	Рядок (16)	Артикул в БД постачальника
   12.6.2.4	PRODUCTIDBUYER	О	Рядок (16)	Артикул в БД покупця
   12.6.2.5	DELIVEREDQUANTITY	М	Число позитивне	Кількість, що поставляється
   12.6.2.6	DELIVEREDUNIT	О	Рядок (3)	Одиниці виміру
   12.6.2.7	ORDEREDQUANTITY	О	Число позитивне	Замовлена ​​кількість
   12.6.2.8	ORDERUNIT	О	Рядок (3)	Одиниці виміру
   12.6.2.9	CUSTOMSTARIFFNUMBER	О	Рядок (30)	Номер державної митної декларації (ВМД)
   12.6.2.10	PRICE	О	Число десяткове	Ціна продукту без ПДВ
   12.6.2.11	PRICEWITHVAT	О	Число десяткове	Ціна продукту з ПДВ
   12.6.2.12	DESCRIPTION	О	Рядок (70)	Опис продукту
   12.6.2.13	BATCHNUMBERS			Список серійних номерів (початок блоку)
   12.6.2.13.1	BATCHNUMBER	М	Рядок (150)	Серійний номер позиції (обмеження в 150 символів)
