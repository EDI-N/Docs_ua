##########################################################################################################################
**Транспортна накладна (DOCUMENTINVOICE_TNN)**
##########################################################################################################################

**XML:**

.. code:: xml

   <Document-Invoice>
   <Invoice-Header>
      <InvoiceNumber>3454_TNN_1</InvoiceNumber>
      <InvoiceDate>2023-04-21</InvoiceDate>
      <InvoiceCurrency>UAH</InvoiceCurrency>
      <DocumentFunctionCode>TNN</DocumentFunctionCode>
      <ContractNumber>1111</ContractNumber>
      <ContractDate>2023-04-30</ContractDate>
   </Invoice-Header>
   <Invoice-Reference>
      <Order>
         <BuyerOrderNumber>METRO_TEST_TNN</BuyerOrderNumber>
         <BuyerOrderDate>2023-04-19</BuyerOrderDate>
      </Order>
      <TaxInvoice>
         <TaxInvoiceDate>2023-04-21</TaxInvoiceDate>
      </TaxInvoice>
      <DespatchAdvice>
         <DespatchAdviceNumber>METRO_TEST_TNN</DespatchAdviceNumber>
      </DespatchAdvice>
   </Invoice-Reference>
   <Invoice-Parties>
      <Buyer>
         <ILN>4820086630009</ILN>
         <TaxID>12345670</TaxID>
         <UtilizationRegisterNumber>12345670</UtilizationRegisterNumber>
         <Name>ТОВ &quot;МЕТРО КЕШ ЕНД КЕРІ УКРАЇНА&quot;</Name>
         <StreetAndNumber>стрит</StreetAndNumber>
         <CityName>м. Київ</CityName>
         <PostalCode>02140</PostalCode>
         <PhoneNumber>380440020565</PhoneNumber>
      </Buyer>
      <Seller>
         <ILN>9864065732181</ILN>
         <TaxID>1234567890</TaxID>
         <CodeByBuyer>1111</CodeByBuyer>
         <UtilizationRegisterNumber>34554363</UtilizationRegisterNumber>
         <Name>FelEx_1</Name>
         <StreetAndNumber>ул. Умница, 3</StreetAndNumber>
         <CityName>г. Херсон</CityName>
         <PostalCode>453278</PostalCode>
         <PhoneNumber>380930000000</PhoneNumber>
      </Seller>
      <DeliveryPoint>
         <ILN>4820086639996</ILN>
         <DeliveryPlace>11</DeliveryPlace>
      </DeliveryPoint>
      <Invoicee>
         <ILN>4820086630009</ILN>
      </Invoicee>
      <Payer>
         <ILN>4820086630009</ILN>
      </Payer>
   </Invoice-Parties>
   <Invoice-Lines>
      <Line>
         <Line-Item>
         <LineNumber>1</LineNumber>
         <EAN>11100033311117777</EAN>
         <BuyerItemCode>5454454</BuyerItemCode>
         <ProductIdBuyer>1234121</ProductIdBuyer>
         <ItemDescription>Product test edi 4076</ItemDescription>
         <CountPiecesInBox>3</CountPiecesInBox>
         <BoxesCount>3</BoxesCount>
         <DeliveredQuantity>9</DeliveredQuantity>
         </Line-Item>
      </Line>
   </Invoice-Lines>
   <Invoice-Summary>
      <TotalLines>1</TotalLines>
      <TotalQuantity>9</TotalQuantity>
   </Invoice-Summary>
   </Document-Invoice>

-------------------------

.. csv-table:: Транспортна накладна (DOCUMENTINVOICE_TNN)
  :file: files/DOCUMENTINVOICE_TNN.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

.. [#] елементи структури мають наступний вигляд:

   * параметрЗіЗначенням;
   * **об'єктЗПараметрами**;
   * :orange:`масивОб'єктів`
