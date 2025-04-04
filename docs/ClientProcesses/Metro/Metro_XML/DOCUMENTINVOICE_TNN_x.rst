##########################################################################################################################
**Транспортна накладна (DOCUMENTINVOICE_TNN)**
##########################################################################################################################

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <Document-Invoice>
   <Invoice-Header>
      <InvoiceNumber>1112</InvoiceNumber>
      <InvoiceDate>2024-03-12</InvoiceDate>
      <InvoiceCurrency>UAH</InvoiceCurrency>
      <DocumentFunctionCode>TNN</DocumentFunctionCode>
      <ContractNumber>from_TNN</ContractNumber>
      <ContractDate>2024-03-14</ContractDate>
   </Invoice-Header>
   <Invoice-Reference>
      <Order>
         <BuyerOrderNumber>1543_0001</BuyerOrderNumber>
         <BuyerOrderDate>2024-01-19</BuyerOrderDate>
      </Order>
      <DespatchAdvice>
         <DespatchAdviceNumber>1543_0001</DespatchAdviceNumber>
      </DespatchAdvice>
   </Invoice-Reference>
   <Invoice-Parties>
      <Buyer>
         <ILN>4820086630009</ILN>
         <TaxID>123444567012</TaxID>
         <UtilizationRegisterNumber>12345678</UtilizationRegisterNumber>
         <Name>ТОВ &quot;МЕТРО КЕШ ЕНД КЕРІ УКРАЇНА&quot;</Name>
         <StreetAndNumber>стрит</StreetAndNumber>
         <CityName>м. Херсон, Херсонський р-н</CityName>
         <PostalCode>02140</PostalCode>
         <PhoneNumber>380440020565</PhoneNumber>
      </Buyer>
      <Seller>
         <ILN>9864065732181</ILN>
         <TaxID>1234567890</TaxID>
         <CodeByBuyer>from_TNN</CodeByBuyer>
         <UtilizationRegisterNumber>12345678</UtilizationRegisterNumber>
         <Name>FelEx_1</Name>
         <StreetAndNumber>вул. Умніца, 3</StreetAndNumber>
         <CityName>м. Херсон, Херсонський р-н</CityName>
         <PostalCode>453278</PostalCode>
         <PhoneNumber>380930000000</PhoneNumber>
      </Seller>
      <DeliveryPoint>
         <ILN>9864065748694</ILN>
      </DeliveryPoint>
   </Invoice-Parties>
   <Invoice-Lines>
      <Line>
         <Line-Item>
         <LineNumber>1</LineNumber>
         <EAN>1231231002</EAN>
         <BuyerItemCode>4444</BuyerItemCode>
         <ProductIdBuyer>2323</ProductIdBuyer>
         <ItemDescription>Тестова позиція 003</ItemDescription>
         <UnitOfMeasure>PCE</UnitOfMeasure>
         <TaxAmount>0.00</TaxAmount>
         <NetAmount>0.00</NetAmount>
         <CountPiecesInBox>50</CountPiecesInBox>
         <DeliveredQuantity>1000</DeliveredQuantity>
         </Line-Item>
      </Line>
      <Line>
         <Line-Item>
         <LineNumber>2</LineNumber>
         <EAN>1110000000001</EAN>
         <BuyerItemCode>121212</BuyerItemCode>
         <ProductIdBuyer>56</ProductIdBuyer>
         <SupplierItemCode>1212</SupplierItemCode>
         <ExternalItemCode>8989</ExternalItemCode>
         <ItemDescription>Мандарин клементина 1</ItemDescription>
         <InvoiceQuantity>1212</InvoiceQuantity>
         <UnitOfMeasure>KGM</UnitOfMeasure>
         <CountPiecesInBox>56.555</CountPiecesInBox>
         <DeliveredQuantity>450.666</DeliveredQuantity>
         </Line-Item>
      </Line>
      <Line>
         <Line-Item>
         <LineNumber>3</LineNumber>
         <EAN>00012345678</EAN>
         <BuyerItemCode>2323</BuyerItemCode>
         <ProductIdBuyer>6562</ProductIdBuyer>
         <ItemDescription>Хлібчик</ItemDescription>
         <InvoiceQuantity>3434</InvoiceQuantity>
         <UnitOfMeasure>PCE</UnitOfMeasure>
         <InvoiceUnitNetPrice>10.210000</InvoiceUnitNetPrice>
         <TaxRate>20</TaxRate>
         <TaxCategoryCode>S</TaxCategoryCode>
         <TaxAmount>7012.23</TaxAmount>
         <NetAmount>35061.14</NetAmount>
         <CountPiecesInBox>15</CountPiecesInBox>
         <BoxesCount>2000.00</BoxesCount>
         <DeliveredQuantity>30000</DeliveredQuantity>
         </Line-Item>
      </Line>
      <Line>
         <Line-Item>
         <LineNumber>4</LineNumber>
         <EAN>1472583690147</EAN>
         <BuyerItemCode>212123</BuyerItemCode>
         <ProductIdBuyer>3333</ProductIdBuyer>
         <ItemDescription>drink</ItemDescription>
         <InvoiceQuantity>222</InvoiceQuantity>
         <UnitOfMeasure>PCE</UnitOfMeasure>
         <InvoiceUnitNetPrice>0.000000</InvoiceUnitNetPrice>
         <TaxRate>20</TaxRate>
         <TaxCategoryCode>S</TaxCategoryCode>
         <TaxAmount>0</TaxAmount>
         <NetAmount>0</NetAmount>
         <CountPiecesInBox>5</CountPiecesInBox>
         <DeliveredQuantity>30</DeliveredQuantity>
         </Line-Item>
      </Line>
      <Line>
         <Line-Item>
         <LineNumber>5</LineNumber>
         <EAN>11100033311117777</EAN>
         <BuyerItemCode>515151</BuyerItemCode>
         <ProductIdBuyer>52365</ProductIdBuyer>
         <SupplierItemCode>666161</SupplierItemCode>
         <ExternalItemCode>11111111</ExternalItemCode>
         <ItemDescription>Product test edi 4076</ItemDescription>
         <ItemType>CU</ItemType>
         <InvoiceQuantity>50</InvoiceQuantity>
         <UnitOfMeasure>PCE</UnitOfMeasure>
         <InvoiceUnitNetPrice>100.000000</InvoiceUnitNetPrice>
         <TaxRate>20</TaxRate>
         <TaxCategoryCode>S</TaxCategoryCode>
         <TaxAmount>1000.00</TaxAmount>
         <NetAmount>5000.00</NetAmount>
         <CountPiecesInBox>10</CountPiecesInBox>
         <DeliveredQuantity>100</DeliveredQuantity>
         </Line-Item>
      </Line>
   </Invoice-Lines>
   <Invoice-Summary>
      <TotalLines>5</TotalLines>
      <TotalQuantity>31580.666</TotalQuantity>
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
   * :orange:`масивОб'єктів`;
   * жовтим фоном виділяються комірки, в яких відбувались останні зміни
