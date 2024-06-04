##########################################################################################################################
**Комерційна дискусія (COMDIS)**
##########################################################################################################################

.. epigraph::

   Комерційну дискусію (COMDIS) відправляє покупець постачальнику на основі Рахунка (INVOICE), вказуючи прийнятий або не прийнятий рахунок, і якщо не прийнятий, то з якої причини

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <COMDIS>
   <NUMBER>111111</NUMBER>
   <DATE>2023-07-19</DATE>
   <DOCNAME>Договір</DOCNAME>
   <DOCDATE>2023-03-03</DOCDATE>
   <DOCNUMBER>Договір</DOCNUMBER>
   <DOCACTION>1</DOCACTION>
   <DELIVERYDATE>2023-07-03</DELIVERYDATE>
   <EARLIESTDELIVERY>2023-07-03</EARLIESTDELIVERY>
   <ORDERNUMBER>121212</ORDERNUMBER>
   <ORDERDATE>2023-07-04</ORDERDATE>
   <DESADVNUMBER>111</DESADVNUMBER>
   <RECADVNUMBER>111</RECADVNUMBER>
   <HEAD>
      <BUYER>9864065732181</BUYER>
      <SUPPLIER>1111111111116</SUPPLIER>
      <SENDER>9864065732181</SENDER>
      <RECIPIENT>1111111111116</RECIPIENT>
      <DELIVERYPLACE>1111111111116</DELIVERYPLACE>
      <DETAILS>
         <LINE>
         <DISPUTEDINLINE>1</DISPUTEDINLINE>
         <PRODUCT>1231231002</PRODUCT>
         <DESCRIPTION>drink1</DESCRIPTION>
         <AMOUNTSUBJECT>1200.00</AMOUNTSUBJECT>
         <AMOUNTSUBJECTCURRENCY>UAH</AMOUNTSUBJECTCURRENCY>
         <QUANTITY>10</QUANTITY>
         <UNIT>CEN</UNIT>  
         <PRICE>456.000000</PRICE>
         <TAX>
         <TAXRATE>20</TAXRATE>
         <TAXAMOUNT>2000.00</TAXAMOUNT>
         </TAX>
         <AMOUNTSUBJECTREASON>1</AMOUNTSUBJECTREASON> 
         <INFO>11111</INFO>
         </LINE>
      </DETAILS>
   </HEAD>
   </COMDIS>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=111905593&single=true" width="1100" height="950" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	COMDIS			Початок документа
   1	NUMBER	М	Рядок (16)	Номер документа
   2	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   3	DOCNAME	М	Рядок (7)	Тип документа
   4	DOCNUMBER	М	Рядок (16)	Номер рахунку
   5	DOCDATE	О	Дата (РРРР-ММ-ДД)	Дата рахунку
   6	DOCACTION	М	« 1 »,« 3 »,« 5 »,« 8 »	1 - рахунок прийнятий, 3 - умовно прийнятий, 5 - тільки для інформації, 8 - не прийнятий
   7	DELIVERYDATE	О	Дата (РРРР-ММ-ДД)	Дата поставки
   8	EARLIESTDELIVERY	О	Дата (РРРР-ММ-ДД)	Найбільш рання дата доставки
   9	ORDERNUMBER	О	Рядок (16)	Номер замовлення
   10	ORDERDATE	О	Дата (РРРР-ММ-ДД)	Дата замовлення
   11	DESADVNUMBER	О	Рядок (16)	Номер пов. про відвантаження
   12	RECADVNUMBER	O	Рядок (16)	Номер пов. про прийом
   13	HEAD			Початок основного блоку
   13.1	BUYER	М	Число (13)	GLN покупця
   13.2	SUPPLIER	M	Число (13)	GLN постачальника
   13.3	SENDER	М	Число (13)	GLN відправника
   13.4	RECIPIENT	М	Число (13)	GLN одержувача
   13.5	DELIVERYPLACE	М	Число (13)	GLN доставки
   13.6	DETAILS			Подробиці (початок блоку)
   13.6.1	LINE			Рядок позиції (початок блоку)
   13.6.1.1	DISPUTEDINLINE	М	Число позитивне	Номер позиції в рахунку
   13.6.1.2	PRODUCT	О	Число (8, 10, 14)	Штрихкод продукту
   13.6.1.3	DESCRIPTION	О	Рядок (70)	Опис продукту
   13.6.1.4	AMOUNTSUBJECT	O	Число десяткове	Сума позиції
   13.6.1.5	AMOUNTSUBJECTCURRENCY	О	Рядок (3)	Код валюти
   13.6.1.6	QUANTITY	О	Число позитивне	Кількість, що поставляється
   13.6.1.7	UNIT	O	Рядок (3)	Одиниці виміру
   13.6.1.8	PRICE	O	Число десяткове	Ціна продукту
   13.6.1.9	TAX			Логістика (початок блоку)
   13.6.1.9.1	TAXRATE	O	Число (3)	Ставка податку (ПДВ,%)
   13.6.1.9.2	TAXAMOUNT	O	Число десяткове	ПДВ
   13.6.1.10	AMOUNTSUBJECTREASON	М	Рядок (3)	Причина дискусії: 1 - для інформації, 3 - товар був пошкоджений, 4 - недопоставка, 9 - помилка в накладній, 14 - неправильна поставка, 17 - ушкодження при транспортуванні, 26 - податки, 32 - товари не доставили, 35 - товари повернули, 56 - неправильна знижка, 10E - неправильний штрихкод
   13.6.1.11	INFO	O	Рядок (70)	Вільний текст
