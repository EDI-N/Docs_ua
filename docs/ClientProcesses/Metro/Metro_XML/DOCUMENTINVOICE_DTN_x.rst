##########################################################################################################################
**Акт розбіжностей до транспортної накладної (DOCUMENTINVOICE_DTN)**
##########################################################################################################################

**XML:**

.. code:: xml

  <Document-Invoice>
    <Invoice-Header>
      <InvoiceNumber>4463_DTN_1</InvoiceNumber>
      <InvoiceDate>2024-03-11</InvoiceDate>
      <InvoiceCurrency>UAH</InvoiceCurrency>
      <DocumentFunctionCode>DTN</DocumentFunctionCode>
      <ContractNumber>25699</ContractNumber>
      <ContractDate>2023-08-30</ContractDate>
      <InternalWarehouseNumber>77437777</InternalWarehouseNumber>
    </Invoice-Header>
    <Invoice-Reference>
      <Order>
        <BuyerOrderNumber>45437777</BuyerOrderNumber>
        <BuyerOrderDate>2023-08-03</BuyerOrderDate>
      </Order>
      <Invoice>
        <OriginalInvoiceNumber>34343443</OriginalInvoiceNumber>
        <OriginalInvoiceDate>2024-03-11</OriginalInvoiceDate>
      </Invoice>
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
        <UtilizationRegisterNumber>12345678</UtilizationRegisterNumber>
        <Name>FelEx_1</Name>
        <StreetAndNumber>вул. Умніца, 3</StreetAndNumber>
        <CityName>м. Херсон, Херсонський р-н</CityName>
        <PostalCode>453278</PostalCode>
        <PhoneNumber>380930000000</PhoneNumber>
      </Seller>
      <DeliveryPoint>
        <ILN>4820086630009</ILN>
        <DeliveryPlace>15</DeliveryPlace>
      </DeliveryPoint>
    </Invoice-Parties>
    <Invoice-Lines>
      <Line>
        <Line-Item>
          <LineNumber>1</LineNumber>
          <EAN>8898988989800</EAN>
          <BuyerItemCode>336074</BuyerItemCode>
          <ProductIdBuyer>133873009999</ProductIdBuyer>
          <ItemDescription>СОСИСКА</ItemDescription>
          <UnitOfMeasure>KGM</UnitOfMeasure>
          <InvoiceDeliveredQuantity>5.123</InvoiceDeliveredQuantity>
          <AcceptedQuantity>10</AcceptedQuantity>
          <ReturnedQuantity>0</ReturnedQuantity>
          <ReasonRejection>
            <ReasonCode>10</ReasonCode>
            <ReasonText>Відсутність в БД</ReasonText>
          </ReasonRejection>
        </Line-Item>
      </Line>
    </Invoice-Lines>
    <Invoice-Summary>
      <TotalLines>1</TotalLines>
      <TotalAcceptedQuantity>10</TotalAcceptedQuantity>
    </Invoice-Summary>
  </Document-Invoice>

-------------------------

.. csv-table:: Акт розбіжностей до транспортної накладної (DOCUMENTINVOICE_DTN)
  :file: files/DOCUMENTINVOICE_DTN.csv
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
