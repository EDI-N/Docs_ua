##########################################################################################################################
**Повідомлення про повернення (RETANN)**
##########################################################################################################################

.. epigraph::

   Повідомлення про повернення (RETANN) використовується для повідомлення постачальника про товари, які не були прийняті і з якої причини

**XML:**

.. code:: xml

   <RETANN>
   <NUMBER>des_api_1</NUMBER>
   <ACTION>9</ACTION>
   <DATE>2023-02-17</DATE>
   <ORDERNUMBER>1213</ORDERNUMBER>
   <ORDERDATE>2023-07-06</ORDERDATE>
   <DESADVNUMBER>123456</DESADVNUMBER>
   <DESADVDATE>2023-07-03</DESADVDATE>
   <RECADVNUMBER>121212</RECADVNUMBER>
   <RECADVDATE>2023-07-05</RECADVDATE>
   <REQUESTNUMBER>121213</REQUESTNUMBER>
   <REQUESTDATE>2023-07-05</REQUESTDATE>
   <RETURNDATE>2023-03-06</RETURNDATE>
   <RETURNNOTENUMBER>121212</RETURNNOTENUMBER>
   <RETURNNOTEDATE>2023-07-07</RETURNNOTEDATE>
   <RETURNTYPE>пошкодження</RETURNTYPE>
   <CAMPAIGNNUMBER>343443</CAMPAIGNNUMBER>
   <INFO>Додаткова інформація</INFO>
   <VERSION>2</VERSION>
   <HEAD>
   <SUPPLIER>9864065732181</SUPPLIER>
   <BUYER>9864065732211</BUYER>
   <DELIVERYPLACE>9864065732211</DELIVERYPLACE>
   <SENDER>9864065732181</SENDER>
   <RECIPIENT>9864065732211</RECIPIENT>
   <EDIINTERCHANGEID>test2</EDIINTERCHANGEID>
   <POSITION>
   <POSITIONNUMBER>1</POSITIONNUMBER>
   <PRODUCT>1472583690147</PRODUCT>
   <PRODUCTIDSUPPLIER>22222</PRODUCTIDSUPPLIER>
   <PRODUCTIDBUYER>333333</PRODUCTIDBUYER>
   <RETURNQUANTITY>3</RETURNQUANTITY>
   <RETURNQUANTITYUNIT>PCE</RETURNQUANTITYUNIT>
   <DELIVEREDQUANTITY>3</DELIVEREDQUANTITY>
   <DELIVEREDQUANTITYUNIT>PCE</DELIVEREDQUANTITYUNIT>
   <DESCRIPTION>drink1</DESCRIPTION>
   <PRICE>456.000000</PRICE>
   <PRICEWITHVAT>690.34</PRICEWITHVAT>
   <TAXRATE>20</TAXRATE> 
   <AMOUNT>1200.00</AMOUNT>
   <CURRENCY>UAH</CURRENCY>
   <DESNUMBER>3346_des_1</DESNUMBER>
   <DESDATE>2023-02-17</DESDATE>
   <AMOUNTWITHVAT>1222215.59</AMOUNTWITHVAT>
   <BATCHNUMBER>4444443434344</BATCHNUMBER>
   <ACTION>
   <CODE>12Е</CODE>
   <DESCRIPTION>пошкодження</DESCRIPTION>
   </ACTION>
   <VAT>20</VAT>
   <QUANTITYOFCUINTU>45</QUANTITYOFCUINTU>
   <WEIGHT>5.6</WEIGHT>
   <WEIGHTUNIT>PCE</WEIGHTUNIT>
   </POSITION>
   </HEAD>
   </RETANN>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=9899338&single=true" width="1100" height="1250" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	RETANN			Початок документа
   1	NUMBER	M	Рядок (16)	Номер документа
   2	ACTION	О	Число позитивне	9 - оригінал документа, 5 - заміна документа
   3	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   4	ORDERNUMBER	O	Рядок (16)	Номер замовлення
   5	ORDERDATE	O	Дата (РРРР-ММ-ДД)	Дата замовлення
   6	DESADVNUMBER	O	Рядок (16)	Номер повідомлення про відвантаження
   7	DESADVDATE	O	Дата (РРРР-ММ-ДД)	Дата повідомлення про відвантаження
   8	RECADVNUMBER	O	Рядок (16)	Номер повідомлення про прийом
   9	RECADVDATE	O	Дата (РРРР-ММ-ДД)	Дата повідомлення про прийом
   10	REQUESTNUMBER			Номер запиту
   11	REQUESTDATE	O	Дата (РРРР-ММ-ДД)	Дата запиту
   12	RETURNDATE	O	Дата (РРРР-ММ-ДД)	Дата повернення (відвантаження постачальнику)
   13	RETURNNOTENUMBER	O	Рядок (16)	Номер накладної на повернення
   14	RETURNNOTEDATE	O	Дата (РРРР-ММ-ДД)	Дата накладної на повернення
   15	RETURNTYPE	O	Рядок (70)	Причина повернення товару
   16	CAMPAIGNNUMBER	O	Рядок (16)	Номер договору на поставку
   17	INFO	O	Рядок (70)	Додаткова інформація
   18	VERSION	O	Рядок (70)	Версія документа
   19	HEAD			Початок основного блоку
   19.1	SUPPLIER	M	Число (13)	GLN постачальника
   19.2	BUYER	M	Число (13)	GLN покупця
   19.3	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   19.4	SENDER	M	Число (13)	GLN відправника
   19.5	RECIPIENT	M	Число (13)	GLN одержувача
   19.6	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   19.7	POSITION			Товарні позиції (початок блоку)
   19.7.1	POSITIONNUMBER	M	Число позитивне	Номер позиції
   19.7.2	PRODUCT	M	Число (13)	Штрих-код продукту
   19.7.3	PRODUCTIDSUPPLIER	O	Рядок (16)	Артикул в БД постачальника
   19.7.4	PRODUCTIDBUYER	O	Рядок (16)	Артикул в БД покупця
   19.7.5	RETURNQUANTITY	M	Число десяткове	Повернена кількість
   19.7.6	RETURNQUANTITYUNIT	O	Рядок (3)	Одиниця виміру
   19.7.7	DELIVEREDQUANTITY	O	Число десяткове	Доставлена кількість
   19.7.8	DELIVEREDQUANTITYUNIT	O	Рядок (3)	Одиниця виміру
   19.7.9	PRICE	O	Число десяткове	Ціна
   19.7.10	PRICEWITHVAT	О	Число десяткове	Ціна з ПДВ
   19.7.11	TAXRATE	О	Число (3)	Ставка податку (ПДВ,%)
   19.7.12	AMOUNT	O	Число десяткове	Сума
   19.7.13	CURRENCY	O	Рядок (3)	Код валюти
   19.7.14	DESNUMBER	O	Рядок (20)	Номер повідомлення про відвантаження
   19.7.15	DESDATE	O	Дата (РРРР-ММ-ДД)	Дата повідомлення про відвантаження
   19.7.16	DESCRIPTION	O	Рядок (70)	Опис продукту
   19.7.17	AMOUNTWITHVAT	О	Рядок (16)	Вартість позиції з ПДВ
   19.7.18	BATCHNUMBER	О	Рядок (70)	Серійний номер позиції
   19.7.19	ACTION			Дії (початок блоку)
   19.7.19.1	CODE	O	Число (3)	Код дії: 4 - пошкодження, 15 - товар застарів, 12E - товар буде повернений, 14E - товар буде знищений, 15E - товар повинен бути відновлений / відремонтований
   19.7.19.2	DESCRIPTION	O	Рядок (70)	Опис причини (пошкодження)
   19.7.20	VAT	O	Число позитивне	Ставка ПДВ,%
   19.7.21	QUANTITYOFCUINTU	O	Число позитивне	Кількість в упаковці
   19.7.22	WEIGHT	O	Число десяткове	Вага
   19.7.23	WEIGHTUNIT	O	Рядок (3)	Одиниці виміру
