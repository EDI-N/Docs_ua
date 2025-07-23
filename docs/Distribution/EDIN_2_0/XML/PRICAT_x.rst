##########################################################################################################################
**Прайс-лист (PRICAT)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/prais-list-pricat-3xA>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Прайс-лист (PRICAT) служить для опису товарів і послуг. Даний документ відправляється Продавцем (Виробником); в документі вказується штрих-код продукту, його опис, ціна, ставка ПДВ. За допомогою Прайс-листа можна також вказати зміни в ціні (зростання/зменшення).

   **XML:**

   .. code:: xml

   <PRICAT>
   <ACTION>15</ACTION>
   <NUMBER>10000</NUMBER>
   <DATE>2020-08-10</DATE>
   <DATEFROM>2020-08-10</DATEFROM>
   <DATETO>2020-12-31</DATETO>
   <SUPPLIER>9876543210123</SUPPLIER>
   <BUYER>3210987654321</BUYER>
   <SENDER>9876543210123</SENDER>
   <RECIPIENT>3210987654321</RECIPIENT>
   <VATINCLUDED>0</VATINCLUDED>
   <CATALOGUE>
      <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <ACTION>2</ACTION>
         <PRODUCTGROUP>Чай</PRODUCTGROUP>
         <BRAND>Гринфилд</BRAND>
         <SUBBRAND>Листовой ж/б</SUBBRAND>
         <IDSUPPLIER>6183</IDSUPPLIER>
         <PRODUCTNAME>Ж/Б Royal Earl Grey 125гр.х14п. &quot;Гринфилд&quot; Укр</PRODUCTNAME>
         <PRODUCT>4820022865816</PRODUCT>
         <IDNATIONAL>0902200010</IDNATIONAL>
         <UNITWEIGHT>0.550</UNITWEIGHT>
         <QUANTITYOFCUINTU>20</QUANTITYOFCUINTU>
         <BOXWEIGHT>10.000</BOXWEIGHT>
         <BOXINLAYER>3</BOXINLAYER>
         <BOXINPALLET>9</BOXINPALLET>
         <PALLETWEIGHT>100.255</PALLETWEIGHT>
         <UNIT>PCE</UNIT>
         <ACTUALQUANTITY>2500.0</ACTUALQUANTITY>
         <CURRENCY>UAH</CURRENCY>
         <UNITPRICE>50.00</UNITPRICE>
         <PRICEWITHVAT>60.00</PRICEWITHVAT>
         <TAXRATE>20</TAXRATE>
         <QUOTA>1000.0</QUOTA>
         <INFO>Здесь может быть указан комментарий</INFO>
         <NEWPOSITION>1</NEWPOSITION>
         <PROMO>0</PROMO>
      </POSITION>
   </CATALOGUE>
   </PRICAT>

   -------------------------

   .. csv-table:: Прайс-лист (PRICAT)
  :file: files/PRICAT.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

   -------------------------

   .. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

   .. [#] елементи структури мають наступний вигляд:

   * параметрЗіЗначенням;
   * **об'єктЗПараметрами**;
   * :orange:`масивОб'єктів`;
   * жовтим фоном виділяються комірки, в яких відбувались останні зміни
