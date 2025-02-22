##########################################################################################################################
**Замовлення (ORDER)**
##########################################################################################################################

.. epigraph::

   Замовлення (ORDER) на поставку відправляється Дистриб’ютором; в документі вказується штрих-код продукту, його опис, замовлена кількість, ціна та інша необхідна інформація.

**XML:**

.. code:: xml

   <ORDER>
      <DOCUMENTNAME>220</DOCUMENTNAME>
      <NUMBER>1000</NUMBER>
      <DATE>2020-08-10</DATE>
      <DELIVERYDATE>2020-08-10</DELIVERYDATE>
      <CURRENCY>UAH</CURRENCY>
      <DOCTYPE>O</DOCTYPE>
      <DISTRIBUTOR>1</DISTRIBUTOR>
      <HEAD>
         <SUPPLIER>9876543210123</SUPPLIER>
         <BUYER>3210987654321</BUYER>
         <DELIVERYPLACE>3210987654321</DELIVERYPLACE>
         <SENDER>3210987654321</SENDER>
         <RECIPIENT>9876543210123</RECIPIENT>
         <EDIINTERCHANGEID>1000</EDIINTERCHANGEID>
      <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <PRODUCT>4820022865816</PRODUCT>
         <PRODUCTIDSUPPLIER>6183</PRODUCTIDSUPPLIER>
         <IDPRODUCER>BP13075</IDPRODUCER>
         <ORDEREDQUANTITY>800.00</ORDEREDQUANTITY>
         <ORDERUNIT>PCE</ORDERUNIT>
         <ORDERPRICE>50.00</ORDERPRICE>
         <PRICEWITHVAT>60.00</PRICEWITHVAT>
         <VAT>20</VAT>
         <CHARACTERISTIC>
               <DESCRIPTION>Сметана 15% жиру, ТМ &quot;Українська&quot; ТУ У 25027034-009-99</DESCRIPTION>
         </CHARACTERISTIC>
         <CATEGORYNAME>Молочная продукция</CATEGORYNAME>
         <BRENDNAME>ТМ Український</BRENDNAME>
         <GROUPNAME>Весовой товар</GROUPNAME>
         <NOVELTY>1</NOVELTY>
         <COUNTPIECESINBOX>14</COUNTPIECESINBOX>
         <COUNTBOXESINLAYER>3</COUNTBOXESINLAYER>
         <COUNTPERPALLET>9</COUNTPERPALLET>
         <WEIGHT>7.7</WEIGHT>
         <PALLETS>2.45</PALLETS>
         <BOXESCOUNT>40.50</BOXESCOUNT>
      </POSITION>
      </HEAD>
   </ORDER>

-------------------------

.. csv-table:: Замовлення (ORDER)
  :file: files/ORDER.csv
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
