##########################################################################################################################
**Замовлення (ORDER)**
##########################################################################################################################

.. epigraph::

   Замовлення (ORDER) на поставку відправляється Дистриб’ютором; в документі вказується штрих-код продукту, його опис, замовлена кількість, ціна та інша необхідна інформація.

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <ORDER>
      <DOCUMENTNAME>220</DOCUMENTNAME>
      <NUMBER>1000037</NUMBER>
      <DATE>2025-04-15</DATE>
      <DELIVERYDATE>2025-04-18</DELIVERYDATE>
      <CURRENCY>UAH</CURRENCY>
      <PAYMENTMETHOD>2</PAYMENTMETHOD>
      <DOCTYPE>O</DOCTYPE>
      <ORDRTYPE>1</ORDRTYPE>
      <HEAD>
         <SUPPLIER>9864232866251</SUPPLIER>
         <BUYER>9864232789253</BUYER>
         <DELIVERYPLACE>9864232789253</DELIVERYPLACE>
         <SENDER>9864232789253</SENDER>
         <RECIPIENT>9864232866251</RECIPIENT>
         <DELIVERYTERMS>2</DELIVERYTERMS>
         <SENDERNAME>Ім&apos;я</SENDERNAME>
         <SENDERLASTNAME>Прізвище</SENDERLASTNAME>
         <SENDERPHONE>380111111111</SENDERPHONE>
         <EDIINTERCHANGEID>1000037</EDIINTERCHANGEID>
         <POSITION>
            <POSITIONNUMBER>1</POSITIONNUMBER>
            <PRODUCT>4802020202020</PRODUCT>
            <PRODUCTIDSUPPLIER>4802020202020</PRODUCTIDSUPPLIER>
            <ORDEREDQUANTITY>10.00</ORDEREDQUANTITY>
            <ORDERUNIT>PCE</ORDERUNIT>
            <ORDERPRICE>10.0</ORDERPRICE>
            <PRICEWITHVAT>12.0</PRICEWITHVAT>
            <VAT>20</VAT>
            <CATEGORYNAME>ТзОВ &quot;Хлібодар&quot;</CATEGORYNAME>
            <BRENDNAME>Румянець</BRENDNAME>
            <GROUPNAME>Хліб</GROUPNAME>
            <NOVELTY>0</NOVELTY>
            <COUNTPIECESINBOX>1</COUNTPIECESINBOX>
            <UNITWEIGHT>0.3</UNITWEIGHT>
            <BOXESCOUNT>10.00</BOXESCOUNT>
            <CHARACTERISTIC>
            <DESCRIPTION>Багет Французький УП</DESCRIPTION>
            </CHARACTERISTIC>
         </POSITION>
         <POSITION>
            <POSITIONNUMBER>2</POSITIONNUMBER>
            <PRODUCT>4801010101010</PRODUCT>
            <PRODUCTIDSUPPLIER>4801010101010</PRODUCTIDSUPPLIER>
            <ORDEREDQUANTITY>8.00</ORDEREDQUANTITY>
            <ORDERUNIT>PCE</ORDERUNIT>
            <ORDERPRICE>20.0</ORDERPRICE>
            <PRICEWITHVAT>24.0</PRICEWITHVAT>
            <VAT>20</VAT>
            <CATEGORYNAME>ТзОВ "Хлібодар"</CATEGORYNAME>
            <BRENDNAME>Румянець</BRENDNAME>
            <GROUPNAME>Хліб</GROUPNAME>
            <NOVELTY>0</NOVELTY>
            <COUNTPIECESINBOX>1</COUNTPIECESINBOX>
            <UNITWEIGHT>0.35</UNITWEIGHT>
            <BOXESCOUNT>8.00</BOXESCOUNT>
            <CHARACTERISTIC>
            <DESCRIPTION>Батон Багет УП</DESCRIPTION>
            </CHARACTERISTIC>
         </POSITION>
      </HEAD>
      <EXCHANGE_SCHEMA_TYPE>0</EXCHANGE_SCHEMA_TYPE>
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
