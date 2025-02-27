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
   <RETURNDATE>2023-03-06</RETURNDATE>
   <INFO>Додаткова інформація</INFO>
   <DISTRIBUTOR>1</DISTRIBUTOR>
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
   <RETURNQUANTITY>3</RETURNQUANTITY>
   <RETURNQUANTITYUNIT>PCE</RETURNQUANTITYUNIT>
   <DESCRIPTION>drink1</DESCRIPTION>
   <ACTION>
   <CODE>12Е</CODE>
   <DESCRIPTION>пошкодження</DESCRIPTION>
   </ACTION>
   </POSITION>
   </HEAD>
   </RETANN>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgbKlvsH-oj_Sx8OwXCR67lq096kMXuQ1SWf99Uo8DvaOppwCJTcPVW0DdvblUdw/pubhtml?gid=9899338&single=true" width="1100" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   2	ACTION	M	Число позитивне	9 - оригінал документа (дефолтне значення)
   3	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   4	RETURNDATE	M	Дата (РРРР-ММ-ДД)	Дата повернення (відвантаження постачальнику)
   5	INFO	O	Рядок (100)	Коментар
   6	HEAD			Початок основного блоку
   6.1	SUPPLIER	M	Число (13)	GLN одержувача
   6.2	BUYER	M	Число (13)	GLN відправника
   6.3	DELIVERYPLACE	M	Число (13)	GLN місця повернення
   6.4	SENDER	M	Число (13)	GLN відправника
   6.5	RECIPIENT	M	Число (13)	GLN одержувача
   6.6	POSITION			Товарні позиції (початок блоку)
   6.6.1	POSITIONNUMBER	M	Число позитивне	Номер позиції
   6.6.2	PRODUCT	M	Число (13)	Штрих-код продукту
   6.6.3	PRODUCTIDSUPPLIER	O	Рядок (16)	Артикул
   6.6.4	RETURNQUANTITY	M	Число десяткове	Повернена кількість
   6.6.5	RETURNQUANTITYUNIT	O	Рядок (3)	Одиниця виміру
   6.6.6	DESCRIPTION	O	Рядок (70)	Назва
   6.6.7	ACTION			Дії (початок блоку)
   6.6.7.1	CODE	O	Число (3)	Код дії: 4 - Пошкодження, 15 - Закінчився термін придатності, 12E - Товар буде повернений, 14E - Товар необхідно знищити, 15E - Товар буде відновлений
   6.6.7.2	DESCRIPTION	O	Рядок (70)	Опис причини (пошкодження)
