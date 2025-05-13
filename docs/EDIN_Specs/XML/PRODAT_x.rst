##########################################################################################################################
**Дані про продукт (PRODAT)**
##########################################################################################################################

.. epigraph::

   Прайс-лист (PRODAT) служить для опису товарів і послуг. Даний документ відправляється постачальником замовнику і в ньому вказується штрих-код продукту, його опис, ціна, ставка ПДВ. За допомогою Прайс-листа можна також вказати чи зросла/зменшилась ціна або не змінилася.

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <PRODAT>
      <NUMBER>12563</NUMBER>
      <DATE>2025-03-21</DATE>
      <EFFECTIVEDATE>2025-03-22</EFFECTIVEDATE>
      <ACTION>1</ACTION>
      <CAMPAIGNNUMBER>ПР125639</CAMPAIGNNUMBER>
      <ORDERCONTACT>
         <CONTACTFACE>Шевченко Микита</CONTACTFACE>
         <TELEPHONE>0671111111</TELEPHONE>
         <EMAIL>test@gmail.com</EMAIL>
      </ORDERCONTACT>
      <HEAD>
         <SENDER>9864065732181</SENDER>
         <RECIPIENT>9864066866014</RECIPIENT>
         <STOREACTION>
             <STOREGLN>1234567891236</STOREGLN>
         </STOREACTION>
         <COMMENT>
             <TEXT>текст коментаря до документа</TEXT>
             <LANGUAGECODE>UA</LANGUAGECODE>
         </COMMENT>
         <CATALOGUE>
            <POSITION>
               <POSITIONNUMBER>1</POSITIONNUMBER>
               <IDBUYER>1256985</IDBUYER>
               <IDSUPPLIER>985697458</IDSUPPLIER>
                  <DESCRIPTIONS>
                     <DESCRIPTION>Найменування товарної позиції</DESCRIPTION>
                     <LANGUAGECODE>UA</LANGUAGECODE>
                  </DESCRIPTIONS>
                  <UNITS>
                     <UNIT>PCE</UNIT>
                     <UNITTYPE>0</UNITTYPE>
                     <PRODUCT>98745698745896</PRODUCT>
                     <QUANTITY>1</QUANTITY>
                     <NETWEIGHT>125</NETWEIGHT>
                     <GROSSWEIGHT>220</GROSSWEIGHT>
                     <DEPTH>15</DEPTH>
                     <WIDTH>10</WIDTH>
                     <HEIGHT>16</HEIGHT>
                     <VOLUMETRICWEIGHT>0.25685</VOLUMETRICWEIGHT>
                  </UNITS>
                  <UNITS>
                     <UNIT>PCE</UNIT>
                     <UNITTYPE>1</UNITTYPE>
                     <UNIT>ZTR</UNIT>
                     <PRODUCT>987456111111111</PRODUCT>
                     <QUANTITY>10</QUANTITY>
                     <NETWEIGHT>200</NETWEIGHT>
                     <GROSSWEIGHT>250</GROSSWEIGHT>
                     <DEPTH>35</DEPTH>
                     <WIDTH>30</WIDTH>
                     <HEIGHT>30</HEIGHT>
                     <VOLUMETRICWEIGHT>1.1452</VOLUMETRICWEIGHT>
                  </UNITS>
                  <CHARACTERISTICS>
                     <WEIGHTPRODUCT>0</WEIGHTPRODUCT>
                     <ARTIFICIALLYWEIGHTED>1</ARTIFICIALLYWEIGHTED>
                     <EXPIRATIONDATE>1</EXPIRATIONDATE>
                     <EXPIREDATE>365</EXPIREDATE>
                     <TOLERANCE>5</TOLERANCE>
                     <TEMPERATUREMODE>1</TEMPERATUREMODE>
                     <ROUNDINGAMOUNTS>1.7</ROUNDINGAMOUNTS>
                     <RESIDUALFRESHNESS>5</RESIDUALFRESHNESS>
                     <ALLOWEDFRESHNESS>5</ALLOWEDFRESHNESS>
                  </CHARACTERISTICS>
              </POSITION>
          </CATALOGUE>
      </HEAD>
  </PRODAT>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=106134881&single=true" width="1100" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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