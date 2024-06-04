##########################################################################################################################
**Інструкція про повернення (RETINS)**
##########################################################################################################################

.. epigraph::

   Документ Інструкція про повернення (RETINS) відправляється у відповідь на Повідомлення про повернення (RETANN) і використовуватися для підтвердження або редагування дати та часу прибуття постачальника

**XML:**

.. code:: xml

   <RETINS>
   <NUMBER>des_api_1</NUMBER>
   <DATE>2023-02-17</DATE>
   <RETURNDATE>2023-03-06</RETURNDATE>
   <RETURNTIME>20:56</RETURNTIME>
   <RETANNNUMBER>des_api_2</RETANNNUMBER>
   <ORDERNUMBER>3346_ord_1</ORDERNUMBER>
   <RETANNDATE>2023-03-07</RETANNDATE>
   <TOTALRETURNWEIGHT>10.5</TOTALRETURNWEIGHT>
   <CAMPAIGNNUMBER>343443</CAMPAIGNNUMBER>
   <INFO>Додаткова інформація</INFO>
   <VERSION>2</VERSION>
   <HEAD>
   <SUPPLIER>9864065732181</SUPPLIER>
   <BUYER>9864065732211</BUYER>
   <DELIVERYPLACE>9864065732211</DELIVERYPLACE>
   <SENDER>9864065732181</SENDER>
   <RECIPIENT>9864065732211</RECIPIENT>
   <POSITION>
   <POSITIONNUMBER>1</POSITIONNUMBER>
   <PRODUCT>1472583690147</PRODUCT>
   <PRODUCTIDSUPPLIER>22222</PRODUCTIDSUPPLIER>
   <PRODUCTIDBUYER>333333</PRODUCTIDBUYER>
   <RETURNQUANTITY>3</RETURNQUANTITY>
   <RETURNQUANTITYUNIT>PCE</RETURNQUANTITYUNIT>
   <DESCRIPTION>drink1</DESCRIPTION>
   <AMOUNTWITHVAT>1200.00</AMOUNTWITHVAT>
   <PRICE>456.000000</PRICE>
   <PRICEWITHVAT>690.34</PRICEWITHVAT>
   <VAT>20</VAT> 
   <BATCHNUMBER>4444443434344</BATCHNUMBER>
   <DESNUMBER>3346_des_1</DESNUMBER>
   <DESDATE>2023-02-17</DESDATE>
   <ACTION>
   <CODE>12Е</CODE>
   <DESCRIPTION>пошкодження</DESCRIPTION>
   </ACTION>
   </POSITION>
   </HEAD>
   </RETINS>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1665669360&single=true" width="1100" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	RETINS			Початок документа
   1	NUMBER	M	Рядок (16)	Номер документа
   2	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   3	RETURNDATE	O	Дата (РРРР-ММ-ДД)	Дата повернення
   4	RETURNTIME	O	Час (год: хв)	Час повернення
   5	RETANNNUMBER	O	Рядок (16)	Номер повідомлення про повернення
   6	ORDERNUMBER	O	Рядок (35)	Номер замовлення
   7	RETANNDATE	O	Дата (РРРР-ММ-ДД)	Дата повідомлення про повернення
   8	TOTALRETURNWEIGHT	O	Число десяткове	Загальна вага товару, що повертається
   9	CAMPAIGNNUMBER	O	Рядок (16)	Номер договору постачальника з покупцем
   10	INFO	O	Рядок (70)	Додаткова інформація
   11	VERSION	О	Число позитивне	Версія документа
   12	HEAD			Початок основного блоку
   12.1	SUPPLIER	M	Число (13)	GLN постачальника
   12.2	BUYER	M	Число (13)	GLN покупця
   12.3	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   12.4	SENDER	M	Число (13)	GLN відправника
   12.5	RECIPIENT	M	Число (13)	GLN одержувача
   12.6	POSITION			Товарні позиції (початок блоку)
   12.6.1	POSITIONNUMBER	M	Число позитивне	Номер позиції
   12.6.2	PRODUCT	M	Число (13)	Штрих-код продукту
   12.6.3	PRODUCTIDSUPPLIER	O	Рядок (16)	Артикул в БД постачальника
   12.6.4	PRODUCTIDBUYER	O	Рядок (16)	Артикул в БД покупця
   12.6.5	RETURNQUANTITY	M	Число десяткове	Повернена кількість
   12.6.6	RETURNQUANTITYUNIT	O	Рядок (3)	Одиниця виміру
   12.6.7	DESCRIPTION	O	Рядок (70)	Опис продукту
   12.6.8	AMOUNTWITHVAT	О	Рядок (16)	Вартість позиції з ПДВ
   12.6.9	PRICE	O	Число десяткове	Ціна без ПДВ
   12.6.10	PRICEWITHVAT	O	Число десяткове	Ціна з ПДВ
   12.6.11	VAT	O	Число позитивне	Ставка ПДВ
   12.6.12	BATCHNUMBER	О	Рядок (70)	Серійний номер позиції
   12.6.13	DESNUMBER	O	Рядок (20)	Номер повідомлення про відвантаження
   12.6.14	DESDATE	O	Дата (РРРР-ММ-ДД)	Дата повідомлення про відвантаження
   12.6.15	ACTION			Дії (початок блоку)
   12.6.15.1	CODE	O	Число (3)	Код дії: 12Е - повернення прийнято, 13Е - утилізувати товар, 14Е - знищити товар, 15Е - ремонт товару, 16Е - затримати на експертизу, 17Е - в поверненні відмовлено
   12.6.15.2	DESCRIPTION	O	Рядок (70)	Опис причини (пошкодження)
