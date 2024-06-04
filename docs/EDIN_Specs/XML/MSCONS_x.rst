##########################################################################################################################
**Звіт про надані послуги (MSCONS)**
##########################################################################################################################

.. epigraph::

   Звіт про надані послуги (MSCONS) відправляють контрагенти один одному. У звіті вказується інформація щодо наданих послуг (відвантажених товарів) і, якщо необхідно, зазначається інформація по точках продажу і товарам (послугам)

**XML:**

.. code:: xml

   <MSCONS>
   <NUMBER>des_api_1</NUMBER>
   <DATE>2023-02-17</DATE>
   <CAMPAIGNNUMBER>343443</CAMPAIGNNUMBER>
   <PERIOD>
   <FROMDATE>2023-03-06</FROMDATE>
   <FROMTIME>20:55</FROMTIME>
   <TODATE>2023-03-07</TODATE>
   <TOTIME>20:56</TOTIME>
   </PERIOD>
   <INFO>Додаткова інформація</INFO>
   <EDIINTERCHANGEID>11111</EDIINTERCHANGEID>
   <HEAD>
   <SUPPLIER>9864065732181</SUPPLIER>
   <BUYER>9864065732211</BUYER>
   <DELIVERYPLACE>9864065732211</DELIVERYPLACE>
   <SENDER>9864065732181</SENDER>
   <RECIPIENT>9864065732211</RECIPIENT>
   <LOCATION>
   <LOCATIONNUMBER>13GD12</LOCATIONNUMBER>
   <LOCATION>9864065732181</LOCATION>
   <LOCATIONID>34OGK20402</LOCATIONID>
   <ORDERNUMBER>3346_ord_1</ORDERNUMBER>
   <ORDERDATE>2023-02-17</ORDERDATE>
   <EXPDELIVERYDATE>2023-02-17</EXPDELIVERYDATE>
   <FACTDELIVERYDATE>2023-02-18</FACTDELIVERYDATE>
   <POSITION>
   <POSITIONNUMBER>1</POSITIONNUMBER>
   <PRODUCT>1472583690147</PRODUCT>
   <DESCRIPTION>drink1</DESCRIPTION>
   <PRODUCTIDSUPPLIER>22222</PRODUCTIDSUPPLIER>
   <PRODUCTIDBUYER>333333</PRODUCTIDBUYER>
   <PRICE>456.000000</PRICE>
   <ORDEREDQUANTITY>3</ORDEREDQUANTITY>
   <ORDERUNIT>PCE</ORDERUNIT>
   <DELIVEREDQUANTITY>3</DELIVEREDQUANTITY>
   <PENALTYQUANTITY>2</PENALTYQUANTITY>
   <PENALTYUNIT>PCE</PENALTYUNIT>
   <PENALTYSUM>100</PENALTYSUM>
   <PENALTYDESCRIPTION>штраф</PENALTYDESCRIPTION>
   <DELAYDAYS>2</DELAYDAYS>
   </POSITION>
   </LOCATION>
   </HEAD>
   </MSCONS>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1846636127&single=true" width="1100" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	MSCONS			Початок документа
   1	NUMBER	M	Рядок (16)	Номер документа
   2	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   3	COMPAIGNNUMBER	O	Рядок (70)	Номер договору
   4	PERIOD			Період звіту (початок блоку)
   4.1	FROMDATE	O	Дата (РРРР-ММ-ДД)	Дата з
   4.2	FROMTIME	O	Час (год: хв)	Час з
   4.3	TODATE	O	Дата (РРРР-ММ-ДД)	Дата за
   4.4	TOTIME	O	Час (год: хв)	Час по
   5	INFO	O	Рядок (70)	Додаткова інформація
   6	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   7	HEAD			Початок основного блоку
   7.1	SUPPLIER	M	Число (13)	GLN постачальника
   7.2	BUYER	M	Число (13)	GLN покупця
   7.3	SENDER	M	Число (13)	GLN відправника
   7.4	RECIPIENT	M	Число (13)	GLN одержувача
   7.5	LOCATION			Місцезнаходження (початок блоку)
   7.5.1	LOCATIONNUMBER	M	Число позитивне	Номер місця продажу
   7.5.2	LOCATION	M	Число (13)	GLN місця продажу
   7.5.3	LOCATIONID	O	Рядок (35)	Внутрішній код місця продажу
   7.5.4	ORDERNUMBER	O	Рядок (35)	Номер замовлення
   7.5.5	ORDERDATE	O	Дата (РРРР-ММ-ДД)	Дата замовлення
   7.5.6	EXPDELIVERYDATE	O	Дата (РРРР-ММ-ДД)	Очікувана дата поставки
   7.5.7	FACTDELIVERYDATE	O	Дата (РРРР-ММ-ДД)	Фактична дата поставки
   7.5.8	POSITION			Товарні позиції (початок блоку)
   7.5.8.1	POSITIONNUMBER	M	Число позитивне	Номер позиції
   7.5.8.2	PRODUCT	M	Число (8, 10, 14)	Штрих-код продукту
   7.5.8.3	DESCRIPTION	O	Рядок (70)	Опис
   7.5.8.4	PRODUCTIDSUPPLIER	O	Рядок (16)	Артикул в БД постачальника
   7.5.8.5	PRODUCTIDBUYER	O	Рядок (16)	Артикул в БД покупця
   7.5.8.6	PRICE	O	Число десяткове	Ціна продукту
   7.5.8.7	ORDEREDQUANTITY	M	Число позитивне	Замовлена ​​кількість
   7.5.8.8	ORDERUNIT	О	Рядок (3)	Одиниці виміру
   7.5.8.9	DELIVEREDQUANTITY	O	Число позитивне	Відвантажено
   7.5.8.10	PENALTYQUANTITY	O	Число позитивне	Кількість товару, з якої виставлені штрафи
   7.5.8.11	PENALTYUNIT	О	Рядок (3)	Одиниці виміру
   7.5.8.12	PENALTYSUM	O	Число позитивне	Сума штрафу по позиції
   7.5.8.13	PENALTYDESCRIPTION	O	Рядок (70)	Опис штрафу
   7.5.8.14	DELAYDAYS	O	Число позитивне	Кількість днів запізнення
