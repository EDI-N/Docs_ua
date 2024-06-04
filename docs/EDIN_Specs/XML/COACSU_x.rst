##########################################################################################################################
**Акт звірки взаєморозрахунків (COACSU)**
##########################################################################################################################

.. epigraph::

   Акт звірки взаєморозрахунків (COACSU) використовується для звірки взаєморозрахунків з контрагентом (постачальником) і дозволяє оперативно і точно звіряти сальдо з контрагентом за певний період

**XML:**

.. code:: xml

   <COACSU>
   <ACTION>49Е</ACTION>
   <NUMBER>des_api_1</NUMBER>
   <DATE>2023-02-17</DATE>
   <COACSUNUMBER>343443</COACSUNUMBER>
   <PERIOD>
   <FROMDATE>2023-03-06</FROMDATE>
   <FROMTIME>20:55</FROMTIME>
   <TODATE>2023-03-07</TODATE>
   <TOTIME>20:56</TOTIME>
   </PERIOD>
   <CONTACTS>
   <CONTACTCODE>SA</CONTACTCODE>
   <NAME>Іван</NAME>
   <EMAIL>ivan123@gmail.com</EMAIL>
   </CONTACTS>
   <OPENINGBALANCE>10.15</OPENINGBALANCE>
   <CLOSINGBALANCE>10.30</CLOSINGBALANCE>
   <PAYABLEAMOUNT>11.30</PAYABLEAMOUNT>
   <RETURNABLEPACAMOUNT>10.10</RETURNABLEPACAMOUNT>
   <CURRENCY>UAH</CURRENCY>
   <CARRIERNAME>ТОВ</CARRIERNAME>
   <CARRIERINN>123456789000</CARRIERINN>
   <INFO>Додаткова інформація</INFO>
   <HEAD>
   <SUPPLIER>9864065732181</SUPPLIER>
   <BUYER>9864065732211</BUYER>
   <DELIVERYPLACE>9864065732211</DELIVERYPLACE>
   <SENDER>9864065732181</SENDER>
   <RECIPIENT>9864065732211</RECIPIENT>
   <EDIINTERCHANGEID>11111</EDIINTERCHANGEID>
   <POSITION>
   <POSITIONNUMBER>1</POSITIONNUMBER>
   <DOCNUMBER>1472583690147</DOCNUMBER>
   <PRODUCTIONCODE>22222</PRODUCTIONCODE>
   <PRODINN>222222</PRODINN>
   <PARTYNAME>Виробник</PARTYNAME>
   <DELIVERYDATE>2023-03-06</DELIVERYDATE>
   <LICENSE>38299ОООООRRWQ0</LICENSE>
   <LICGIVEN>Орган видачі ліцензії1</LICGIVEN>
   <LICSTART>2023-03-06</LICSTART>
   <LICEND>2023-03-07</LICEND>
   <COUNTRYORIGIN>AE</COUNTRYORIGIN>
   <CUSTOMSTARIFFNUMBER>123551224</CUSTOMSTARIFFNUMBER>
   <VOLUME>100</VOLUME>
   <VOLUMEUNIT>PCE</VOLUMEUNIT>
   <DOCDATE>2023-03-03</DOCDATE>
   <DOCNAME>Договір</DOCNAME>
   <DOCTYPE>О</DOCTYPE>
   <LOCATION>9864065732182</LOCATION>
   <PAYMENTNUMBER>des_api_1</PAYMENTNUMBER>
   <PAYBLEAMOUNT>100.10</PAYBLEAMOUNT>
   <PAIDAMOUNT>90.10</PAIDAMOUNT>
   <RETURNABLEPACAMOUNT>105.10</RETURNABLEPACAMOUNT>
   <INCOMINGPACAMOUNT>5.10</INCOMINGPACAMOUNT>
   <DESCRIPTION>drink1</DESCRIPTION>
   <CAMPAIGNNUMBER>111</CAMPAIGNNUMBER>
   <RECADVNUMBER>111</RECADVNUMBER>
   <RECADVDATE>2023-03-02</RECADVDATE>
   <DELIVERYNOTENUMBER>1111</DELIVERYNOTENUMBER>
   <INVOICEAMOUNT>105.10</INVOICEAMOUNT>
   <ACTION>1</ACTION>
   </POSITION>
   </HEAD>
   </COACSU>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1816154432&single=true" width="1100" height="1350" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	COACSU			Початок документа
   1	ACTION	О	« 49E »,« 397 »	49E - оригінал документа, 397 - документ у відповідь
   2	NUMBER	М	Рядок (16)	Номер документа
   3	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   4	COACSUNUMBER	О	Рядок (16)	Номер Акта звірки, за яким йде підтвердження
   5	PERIOD			Період (початок блоку)
   5.1	FROMDATE	М	Дата (РРРР-ММ-ДД)	Дата початку періоду
   5.2	FROMTIME	O	Час (год: хв)	Час початку періоду
   5.3	TODATE	M	Дата (РРРР-ММ-ДД)	Дата кінця періоду
   5.4	TOTIME	O	Час (год: хв)	Час кінця періоду
   6	CONTACTS			Контакти (початок блоку)
   6.1	CONTACTCODE	O	Рядок (16)	ОС - менеджер, SA - директор
   6.2	NAME	О	Рядок (35)	Ім’я контакту
   6.3	EMAIL	О	Рядок (35)	Електронна адреса
   7	OPENINGBALANCE	O	Число десяткове	Початкове сальдо
   8	CLOSINGBALANCE	O	Число десяткове	Закриття балансу
   9	PAYABLEAMOUNT	O	Число десяткове	Сальдо по товарах
   10	RETURNABLEPACAMOUNT	О	Число десяткове	Сальдо тари
   11	CURRENCY	O	Рядок (3)	Код валюти
   12	CARRIERNAME	O	Рядок (3)	Назва перевізника/постачальника
   13	CARRIERINN	O	Число (12)	ІПН перевізника/постачальника
   14	INFO	O	Рядок (70)	Додаткова інформація
   15	HEAD			Початок основного блоку
   15.1	BUYER	M	Число (13)	GLN покупця
   15.2	SUPPLIER	M	Число (13)	GLN постачальника
   15.3	SENDER	M	Число (13)	GLN відправника повідомлення
   15.4	RECIPIENT	M	Число (13)	GLN одержувача повідомлення
   15.5	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   15.6	POSITION			Товарні позиції (початок блоку)
   15.6.1	POSITIONNUMBER	М	Число * 1, 100]	Номер позиції
   15.6.2	DOCNUMBER	M	Рядок (16)	Номер документа
   15.6.3	PRODUCTIONCODE	О	Рядок (16)	Код алкогольної продукції
   15.6.4	PRODINN	O	Число позитивне	ІПН виробника/імпортера
   15.6.5	PARTYNAME	О	Рядок (70)	Назва виробника
   15.6.6	DELIVERYDATE	М	Дата (РРРР-ММ-ДД)	Дата поставки
   15.6.7	LICENSE	О	Рядок (70)	Серія, номер ліцензії
   15.6.8	LICGIVEN	М	Рядок (70)	Ким видано ліцензію
   15.6.9	LICSTART	М	Дата (РРРР-ММ-ДД)	Дата початку дії ліцензії
   15.6.10	LICEND	М	Дата (РРРР-ММ-ДД)	Дата закінчення дії ліцензії
   15.6.11	COUNTRYORIGIN	О	Рядок (2)	Країна виробник
   15.6.12	CUSTOMSTARIFFNUMBER	О	Рядок (30)	Номер державної митної декларації (ВМД)
   15.6.13	VOLUME	О	Число позитивне	Об`єм
   15.6.14	VOLUMEUNIT	O	Рядок (3)	Одиниці виміру
   15.6.15	DOCDATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   15.6.16	DOCNAME	O	Рядок (7)	Тип документа
   15.6.17	DOCTYPE	O	Рядок (1)	Тип документа: O - оригінал, R - заміна, D - видалення
   15.6.18	LOCATION	O	Число (13)	GLN точки продажу
   15.6.19	PAYMENTNUMBER	O	Рядок (16)	Номер платіжного документа
   15.6.20	PAYBLEAMOUNT	О	Число десяткове	Сума до оплати
   15.6.21	PAIDAMOUNT	M	Число десяткове	Сплачена сума
   15.6.22	RETURNABLEPACAMOUNT	О	Число десяткове	Сума тари на повернення
   15.6.23	INCOMINGPACAMOUNT	О	Число десяткове	Сума прибуткової тари
   15.6.24	DESCRIPTION	О	Рядок (70)	Опис
   15.6.25	CAMPAIGNNUMBER	О	Рядок (16)	Номер договору на поставку
   15.6.26	RECADVNUMBER	O	Рядок (16)	Номер пов. про прийом
   15.6.27	RECADVDATE	O	Дата (РРРР-ММ-ДД)	Дата пов. про прийом
   15.6.28	DELIVERYNOTENUMBER	О	Рядок (16)	Номер накладної
   15.6.29	INVOICEAMOUNT	О	Число десяткове	Сума накладної
   15.6.30	ACTION	О	« 1 »,« 8 »	1 - позиція прийнята, 8 - не прийнята
