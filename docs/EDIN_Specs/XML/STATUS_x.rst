##########################################################################################################################
**Статус (STATUS)**
##########################################################################################################################

.. epigraph::

   Статус (STATUS) служить для оповіщення користувача, наприклад: щодо того, що документ, який він відправив, був доставлений на платформу EDIN і прочитаний адресатом.

**XML:**

.. code:: xml

   <STATUS>
   <EXITEICID>1342аа2</EXITEICID>
   <CUSTOMERICID>223па22</CUSTOMERICID>
   <VERSION>1</VERSION>
   <FROM>9864232377986</FROM>
   <TO>9864065732181</TO>
   <DELIVERYPLACE>9864065732181</DELIVERYPLACE>
   <DATE>2023-07-06</DATE>
   <STATUS>0</STATUS>
   <DOCNUMBER>132421а</DOCNUMBER>
   <DESCRIPTION>Опис документа</DESCRIPTION>
   <DATEIN>2023-07-06</DATEIN>
   <TIMEIN>20:00</TIMEIN>
   <DATEOUT>2023-07-07</DATEOUT>
   <TIMEOUT>20:10</TIMEOUT>
   <SIZEINBYTES>100.0</SIZEINBYTES>
   <MESSAGECLASS>COMDOC</MESSAGECLASS>
   <MESSAGESUBCLASS>007</MESSAGESUBCLASS>
   <STATUSONFILENAME>file</STATUSONFILENAME>
   </STATUS>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=617949780&single=true" width="1100" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   I	STATUS			Початок документа
   1	EXITEICID	М	Рядок (14)	Номер транзакції EDI Network
   2	CUSTOMERICID	М	Рядок (14)	Номер документа постачальника
   3	VERSION	O	Число десяткове	Версія замовлення транспорту
   4	FROM	М	Число (13)	GLN одержувача повідомлення (SENDER повідомлення, по котрому йде статус)
   5	TO	M	Число (13)	GLN відправника повідомлення (RECIPIENT повідомлення, по котрому йде статус)
   6	DELIVERYPLACE	M	Число (13)	GLN точки доставки (DELIVERYPLACE повідомлення, по котрому йде статус)
   7	DATE	O	Дата (РРРР-ММ-ДД)	Дата надходження на платформу EDI Network
   8	STATUS	M	Число (1)	Статус повідомлення: 0 - доставлено на платформу EDI Network; 1 - повідомлення прочитано одержувачем; 2 - помилка обробки документа; Для зворотних статусів (від РМ): 3 - документ отриманий мережею; 4 - помилка обробки документа на стороні мережі; 6 - відправляється ТМ АТБ на свій IFTMBF інтегровано (для IFTMBС)
   9	DOCNUMBER	O	Рядок (16)	Номер документа
   10	DESCRIPTION	O	Рядок (70)	Опис
   11	DATEIN	М	Дата (РРРР-ММ-ДД)	Дата надходження на платформу EDI Network
   12	TIMEIN	М	Час (чч: мм: сс)	Час надходження на платформу EDI Network
   13	DATEOUT	О	Дата (РРРР-ММ-ДД)	Дата прочитання документа одержувачем
   14	TIMEOUT	О	Час (чч: мм: сс)	Час прочитання документа одержувачем
   15	SIZEINBYTES	М	Число позитивне	Розмір документа в байтах
   16	MESSAGECLASS	М	Рядок (6)	Клас повідомлення: ORDER, ORDRSP, DESADV, RECADV, INVOICE, IFTMBF, DECLAR, DECLARJ12, COMDOC
   17	MESSAGESUBCLASS	O	Рядок (6)	Підтип документа COMDOC (005/006/007…)
   18	STATUSONFILENAME	М		ім’я файлу, на який отримано статус
