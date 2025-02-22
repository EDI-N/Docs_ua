##########################################################################################################################
**Інформація про контрагента для постачальника (PARTIN)**
##########################################################################################################################

.. epigraph::

   Інформація про контрагента для постачальника (PARTIN) відправляється покупцем (роздрібною мережею) постачальнику. Вказується додаткова інформація, яка може бути запрошена постачальником.

**XML:**

.. code:: xml

   тимчасово відсутній

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1646458975&single=true" width="1100" height="850" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	PARTIN			Початок документа
   1	NUMBER	M	Рядок (16)	Номер документа
   2	DATE	M	Дата (РРРР-ММ-ДД)	Дата
   3	CONTRACTNUMBER	M	Рядок (70)	Номер договору
   4	CONTRACTDATE	M	Дата (РРРР-ММ-ДД)	Дата договору
   5	HEAD			Початок основного блоку
   5.1	BUYER	M	Число (13)	GLN покупця
   5.2	SUPPLIER	M	Число (13)	GLN постачальника
   5.3	SENDER	M	Число (13)	GLN відправника
   5.4	RECIPIENT	M	Число (13)	GLN одержувача
   5.5	COMPANIES			Компанії (початок блоку)
   5.5.1	PARTYQUALIFIER	M	Рядок (35)	Фізична адреса магазину. Значення тільки DP
   5.5.2	COMPANY	M	Число (13)	GLN магазину
   5.5.3	NAME	M	Рядок (35)	Назва магазину
   5.5.4	STREET	M	Рядок (35)	Вулиця
   5.5.5	BUILDING	M	Рядок (8)	Номер будівлі
   5.5.6	SECONDBUILDING	O	Рядок (8)	Номер другої будівлі (якщо компанія займає кілька будівель)
   5.5.7	FLATNUMBER	M	Рядок (8)	Номер офісу
   5.5.8	CITY	M	Рядок (2)	Місто
   5.5.9	ZIPCODE	M	Рядок (35)	Індекс
   5.5.10	COUNTRYCODE	M	Рядок (2)	двозначний код країни
   5.5.11	FISCALNUMBER	M	Рядок (35)	ІПН
   5.5.12	REGISTRATIONNUMBER	M	Рядок (35)	Код ЄДРПОУ
   5.5.13	RCEO	M	Рядок (35)	ЗКПО
   5.5.14	OKVD	M	Рядок (35)	Код КОАТУУ
   5.5.15	CONTACTS			Контакти магазину (початок блоку)
   5.5.15.1	CONTACTCODE	M	Рядок (2)	ОС - менеджер, SA - директор
   5.5.15.2	NAME	M	Рядок (35)	ПІБ
   5.5.15.3	EMAIL	M	Рядок (35)	Електронна пошта
   5.5.15.4	FAX	O	Рядок (35)	Факс
   5.5.15.5	TELEPHONE	M	Рядок (35)	Телефон
   5.5.15.6	ADDITIONALNUMBER	O	Рядок (35)	Додатковий номер
   5.5.15.7	MOBILENUMBER	O	Рядок (35)	Мобільний номер
   5.5.15.8	WWW	O	Рядок (70)	Сайт
