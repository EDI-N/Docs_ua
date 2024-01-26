##########################################################################################################################
**Акт розбіжностей до транспортної накладної (DOCUMENTINVOICE_DTN)**
##########################################################################################################################

**XML:**

.. code:: xml

  <Document-Invoice>
    <Invoice-Header>
      <InvoiceNumber>1097_ftp_7</InvoiceNumber>
      <InvoiceDate>2023-05-08</InvoiceDate>
      <InvoiceTime>13:40</InvoiceTime>
      <DocumentFunctionCode>DTN</DocumentFunctionCode>
      <ContractNumber>11220365921</ContractNumber>
      <ContractDate>2020-01-18</ContractDate>
      <InternalWarehouseNumber>77380462</InternalWarehouseNumber>
    </Invoice-Header>
    <Invoice-References>
      <Invoice>
        <OriginalInvoiceNumber>123554</OriginalInvoiceNumber>
        <OriginalInvoiceDate>2020-01-20</OriginalInvoiceDate>
      </Invoice>
      <Order>
        <BuyerOrderNumber>48380462</BuyerOrderNumber>
        <BuyerOrderDate>2020-01-19</BuyerOrderDate>
      </Order>
    </Invoice-References>
    <Invoice-Parties>
      <Buyer>
        <ILN>4820086630009</ILN>
        <TaxID>12345670</TaxID>
        <UtilizationRegisterNumber>12345670</UtilizationRegisterNumber>
        <Name>ТОВ &quot;МЕТРО КЕШ ЕНД КЕРІ УКРАЇНА&quot;</Name>
        <StreetAndNumber>стрит</StreetAndNumber>
        <CityName>м.Київ</CityName>
        <PostalCode>02140</PostalCode>
        <Country>Україна</Country>
        <PhoneNumber>0444922100</PhoneNumber>
      </Buyer>
      <Seller>
        <ILN>9864065732181</ILN>
        <TaxID>1234567890</TaxID>
        <CodeByBuyer>22222</CodeByBuyer>
        <UtilizationRegisterNumber>34554363</UtilizationRegisterNumber>
        <Name>FelEx_1</Name>
        <StreetAndNumber>вул.Чистяківська,100</StreetAndNumber>
        <CityName>м.Київ</CityName>
        <PostalCode>64000</PostalCode>
        <Country>Україна</Country>
        <PhoneNumber>0953030300</PhoneNumber>
        <IBAN>UA12345600000014785236900012329</IBAN>
      </Seller>
    </Invoice-Parties>
    <Invoice-Lines>
      <Line>
        <Line-Item>
          <LineNumber>1</LineNumber>
          <EAN>1472583690147</EAN>
          <BuyerItemCode>1111111111</BuyerItemCode>
          <ProductIdBuyer>1234121</ProductIdBuyer>
          <LogisticItemCode>232323332</LogisticItemCode>
          <ItemDescription>drink</ItemDescription>
          <InvoiceDeliveredQuantity>12</InvoiceDeliveredQuantity>
          <AcceptedQuantity>8</AcceptedQuantity>
          <ReturnedQuantity>4</ReturnedQuantity>
          <ReasonRejection>
            <ReasonCode>1</ReasonCode>
            <ReasonText>вільний текст</ReasonText>
          </ReasonRejection>
        </Line-Item>
      </Line>
    </Invoice-Lines>
    <Invoice-Summary>
      <TotalLines>1</TotalLines>
      <TotalAcceptedQuantity>8</TotalAcceptedQuantity>
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
   * :orange:`масивОб'єктів`
