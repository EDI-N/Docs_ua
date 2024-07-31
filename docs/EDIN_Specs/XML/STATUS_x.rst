##########################################################################################################################
**Статус (STATUS)**
##########################################################################################################################

.. epigraph::

   Статус (STATUS) служить для оповіщення користувача, наприклад: щодо того, що документ, який він відправив, був доставлений на платформу EDIN і прочитаний адресатом.

**XML:**

.. code:: xml

   <Status>
      <ExiteICID>100212588</ExiteICID>
      <CustomerICID>100212588</CustomerICID>
      <From>9864066827848</From>
      <To>4670016449993</To>
      <DeliveryPlace>4670016440013</DeliveryPlace>
      <Date>2015-02-11</Date>
      <Status>3</Status>
      <Description>Обработан и загружен</Description>
      <SizeInBytes>4355</SizeInBytes>
      <MessageClass>DESADV</MessageClass>
      <StatusOnFileName>desadv_20151010103223_12345.xml</StatusOnFileName>
   </Status>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1291681072&single=true" width="1100" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	Status			Початок документа
   1	ExiteICID	М	Рядок (14)	Номер транзакції EDI Network
   2	CustomerICID	М	Рядок (14)	Номер документа постачальника
   3	Version	O	Число десяткове	Версія замовлення транспорту
   4	From	М	Число (13)	GLN одержувача повідомлення (SENDER повідомлення, по котрому йде статус)
   5	To	M	Число (13)	GLN відправника повідомлення (RECIPIENT повідомлення, по котрому йде статус)
   6	DeliveryPlace	M	Число (13)	GLN точки доставки (DELIVERYPLACE повідомлення, по котрому йде статус)
   7	Date	O	Дата (РРРР-ММ-ДД)	Дата надходження на платформу EDI Network
   8	Status	M	Число (1)	Статус повідомлення: 0 - доставлено на платформу EDI Network; 1 - повідомлення прочитано одержувачем; 2 - помилка обробки документа; Для зворотних статусів (від РМ): 3 - документ отриманий мережею; 4 - помилка обробки документа на стороні мережі; 6 - відправляється ТМ АТБ на свій IFTMBF інтегровано (для IFTMBС)
   9	DocNumber	O	Рядок (16)	Номер документа
   10	Description	O	Рядок (70)	Опис
   11	DateIn	М	Дата (РРРР-ММ-ДД)	Дата надходження на платформу EDI Network
   12	TimeIn	М	Час (чч: мм: сс)	Час надходження на платформу EDI Network
   13	DateOut	О	Дата (РРРР-ММ-ДД)	Дата прочитання документа одержувачем
   14	TimeOut	О	Час (чч: мм: сс)	Час прочитання документа одержувачем
   15	SizeInBytes	М	Число позитивне	Розмір документа в байтах
   16	MessageClass	М	Рядок (6)	Клас повідомлення: ORDER, ORDRSP, DESADV, RECADV, INVOICE, IFTMBF, DECLAR, DECLARJ12, COMDOC
   17	MessageSubClass	O	Рядок (6)	Підтип документа COMDOC (005/006/007…)
   18	StatusOnFileName	М	Рядок	ім’я файлу, на який отримано статус
