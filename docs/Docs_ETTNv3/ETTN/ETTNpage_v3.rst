##########################################################################################################################
**"Електронна товарно-транспортна накладна" (е-ТТН)**
##########################################################################################################################

.. role:: orange

.. contents:: Зміст:
   :depth: 5
   :local:

---------

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1423864081

.. important::
   Зверніть увагу, що поля в xml та `в json форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3_json.html>`__ відрізняються! 

XML-example
==============================================

.. code:: xml

   <UAECMR xmlns:qdt="urn:un:unece:uncefact:data:standard:QualifiedDataType:103" xmlns:ram="urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103" xmlns:uas="urn:ua:signatures:SignaturesExtensions:1" xmlns:udt="urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27">
      <eCMR>
         <ExchangedDocumentContext>
            <ram:SpecifiedTransactionID>0</ram:SpecifiedTransactionID>
            <ram:BusinessProcessSpecifiedDocumentContextParameter>
                  <ram:ID>urn:ua:e-transport.gov.ua:ettn:01</ram:ID>
            </ram:BusinessProcessSpecifiedDocumentContextParameter>
            <ram:GuidelineSpecifiedDocumentContextParameter>
                  <ram:ID>urn:ua:e-transport.gov.ua:ettn:01:generic:001</ram:ID>
            </ram:GuidelineSpecifiedDocumentContextParameter>
         </ExchangedDocumentContext>
         <ExchangedDocument>
            <ram:ID>test_03</ram:ID>
            <ram:IssueDateTime>
                  <udt:DateTime>2025-02-19T16:13:00+02:00</udt:DateTime>
            </ram:IssueDateTime>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="vatAmount">2332</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="gps_number">1122</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="logger_number">3342113</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="reserve_number">1313441</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="comment">24422424</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="logistic_unit_number_with_logger">131331</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="vehicle_length">11.32</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="vehicle_width">3.3</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="vehicle_height">25</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="gross_vehicle_weight_with_cargo">34322</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="consignmentItemQuantity_text">чотири цілих</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="grossWeightMeasure_text">триста цілих</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="associatedInvoiceAmount_text">чотириста грн 0 коп</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IncludedNote>
                  <ram:ContentCode listAgencyID="vatAmount_text">дві тисячі триста тридцять дві грн 0 коп</ram:ContentCode>
                  <ram:Content>CZ</ram:Content>
            </ram:IncludedNote>
            <ram:IssueLogisticsLocation>
                  <ram:Name>Місце складання документу</ram:Name>
                  <ram:Description>Чернігівський р-н, c. Дніпровське</ram:Description>
            </ram:IssueLogisticsLocation>
         </ExchangedDocument>
         <SpecifiedSupplyChainConsignment>
            <ram:GrossWeightMeasure unitCode="KGM">300</ram:GrossWeightMeasure>
            <ram:AssociatedInvoiceAmount currencyID="UAH">400</ram:AssociatedInvoiceAmount>
            <ram:ConsignmentItemQuantity>4</ram:ConsignmentItemQuantity>
            <ram:ConsignorTradeParty>
                  <ram:ID schemeAgencyID="ПАСПОРТ">AA111111</ram:ID>
                  <ram:Name>Мій Вантажовідправник</ram:Name>
                  <ram:RoleCode>CZ</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Іванов Іван Іванович</ram:PersonName>
                     <ram:MobileTelephoneUniversalCommunication>
                        <ram:CompleteNumber>380333434035</ram:CompleteNumber>
                     </ram:MobileTelephoneUniversalCommunication>
                     <ram:EmailURIUniversalCommunication>
                        <ram:CompleteNumber>sfjkfskjfjk@qee.com</ram:CompleteNumber>
                     </ram:EmailURIUniversalCommunication>
                  </ram:DefinedTradeContact>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>993564</ram:PostcodeCode>
                     <ram:StreetName>вул. Нічна, б. 2</ram:StreetName>
                     <ram:CityName>c. Дніпровське</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>Чернігівська обл., Чернігівський р-н</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedTaxRegistration>
                     <ram:ID>342244244224</ram:ID>
                  </ram:SpecifiedTaxRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065745518</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>23512342-35121</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:ConsignorTradeParty>
            <ram:ConsigneeTradeParty>
                  <ram:ID schemeAgencyID="РНОКПП">8883923234</ram:ID>
                  <ram:Name>Мій Вантажоодержувача</ram:Name>
                  <ram:RoleCode>CN</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Ivanov Ivan</ram:PersonName>
                     <ram:MobileTelephoneUniversalCommunication>
                        <ram:CompleteNumber>380242442424</ram:CompleteNumber>
                     </ram:MobileTelephoneUniversalCommunication>
                     <ram:EmailURIUniversalCommunication>
                        <ram:CompleteNumber>kjksfjkfskj@jjl.com</ram:CompleteNumber>
                     </ram:EmailURIUniversalCommunication>
                  </ram:DefinedTradeContact>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>777321</ram:PostcodeCode>
                     <ram:StreetName>вул. Котляревського, 1</ram:StreetName>
                     <ram:CityName>c. Одиноке</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>Львівська обл., Львівський р-н</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedTaxRegistration>
                     <ram:ID>982822894892</ram:ID>
                  </ram:SpecifiedTaxRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864232618959</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>23512342-35121</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:ConsigneeTradeParty>
            <ram:CarrierTradeParty>
                  <ram:ID schemeAgencyID="РНОКПП">7828624353</ram:ID>
                  <ram:Name>Мій Перевізник</ram:Name>
                  <ram:RoleCode>CA</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Мій Водій</ram:PersonName>
                     <ram:TelephoneUniversalCommunication>
                        <ram:CompleteNumber>380472348932</ram:CompleteNumber>
                     </ram:TelephoneUniversalCommunication>
                  </ram:DefinedTradeContact>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>990392</ram:PostcodeCode>
                     <ram:StreetName>Адреса</ram:StreetName>
                     <ram:CityName>c. Твіржа</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>Львівська обл., Яворівський р-н</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedTaxRegistration>
                     <ram:ID>7098394897</ram:ID>
                  </ram:SpecifiedTaxRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>QWE534435</ram:ID>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864232618973</ram:ID>
                     <ram:TypeCode>DRIVER_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>23512342-35121</ram:ID>
                     <ram:TypeCode>DRIVER_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864232618966</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>23512342-35121</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:CarrierTradeParty>
            <ram:NotifiedTradeParty>
                  <ram:ID schemeAgencyID="ПАСПОРТ">АВ534312</ram:ID>
                  <ram:Name>Мій Замовник</ram:Name>
                  <ram:RoleCode>OB</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Іванов Іван Іванович</ram:PersonName>
                     <ram:MobileTelephoneUniversalCommunication>
                        <ram:CompleteNumber>380000000000</ram:CompleteNumber>
                     </ram:MobileTelephoneUniversalCommunication>
                     <ram:EmailURIUniversalCommunication>
                        <ram:CompleteNumber>wwrrwrw@yyr.com</ram:CompleteNumber>
                     </ram:EmailURIUniversalCommunication>
                  </ram:DefinedTradeContact>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>633323</ram:PostcodeCode>
                     <ram:StreetName>вул. Незалежності</ram:StreetName>
                     <ram:CityName>c. Сімерки</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>Закарпатська обл., Ужгородський р-н</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedTaxRegistration>
                     <ram:ID>213313131313</ram:ID>
                  </ram:SpecifiedTaxRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864232618997</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>23512342-35121</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:NotifiedTradeParty>
            <ram:NotifiedTradeParty>
                  <ram:ID schemeAgencyID="ПАСПОРТ">AA111111</ram:ID>
                  <ram:Name>ТОВ "Тест1"</ram:Name>
                  <ram:RoleCode>FW</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Іванов Іван Іванович</ram:PersonName>
                     <ram:MobileTelephoneUniversalCommunication>
                        <ram:CompleteNumber>380000999999</ram:CompleteNumber>
                     </ram:MobileTelephoneUniversalCommunication>
                     <ram:EmailURIUniversalCommunication>
                        <ram:CompleteNumber>2ksfkjsfkjfsjk@eee.com</ram:CompleteNumber>
                     </ram:EmailURIUniversalCommunication>
                  </ram:DefinedTradeContact>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>73000</ram:PostcodeCode>
                     <ram:StreetName>Адреса</ram:StreetName>
                     <ram:CityName>м. Київ</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedTaxRegistration>
                     <ram:ID>2498429824</ram:ID>
                  </ram:SpecifiedTaxRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065745518</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>23512342-35121</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:NotifiedTradeParty>
            <ram:NotifiedTradeParty>
                  <ram:ID schemeAgencyID="ПАСПОРТ">AA111111</ram:ID>
                  <ram:Name>ТОВ "Тест1"</ram:Name>
                  <ram:RoleCode>WD</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Іванов Іван Іванович</ram:PersonName>
                     <ram:MobileTelephoneUniversalCommunication>
                        <ram:CompleteNumber>380333434035</ram:CompleteNumber>
                     </ram:MobileTelephoneUniversalCommunication>
                     <ram:EmailURIUniversalCommunication>
                        <ram:CompleteNumber>sfjkfskjfjk@qee.com</ram:CompleteNumber>
                     </ram:EmailURIUniversalCommunication>
                  </ram:DefinedTradeContact>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>73000</ram:PostcodeCode>
                     <ram:StreetName>Адреса</ram:StreetName>
                     <ram:CityName>м. Київ</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedTaxRegistration>
                     <ram:ID>342244244224</ram:ID>
                  </ram:SpecifiedTaxRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065745518</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>23512342-35121</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:NotifiedTradeParty>
            <ram:NotifiedTradeParty>
                  <ram:ID schemeAgencyID="ПАСПОРТ">AA111111</ram:ID>
                  <ram:Name>ТОВ "Тест1"</ram:Name>
                  <ram:RoleCode>COP</ram:RoleCode>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>73000</ram:PostcodeCode>
                     <ram:StreetName>Адреса</ram:StreetName>
                     <ram:CityName>м. Київ</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065745518</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>23512342-35121</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:NotifiedTradeParty>
            <ram:NotifiedTradeParty>
                  <ram:ID schemeAgencyID="ПАСПОРТ">AA111111</ram:ID>
                  <ram:Name>ТОВ "Тест1"</ram:Name>
                  <ram:RoleCode>AF</ram:RoleCode>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>73000</ram:PostcodeCode>
                     <ram:StreetName>Адреса</ram:StreetName>
                     <ram:CityName>м. Київ</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065745518</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>19761009-12411</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:NotifiedTradeParty>
            <ram:NotifiedTradeParty>
                  <ram:ID schemeAgencyID="ПАСПОРТ">AA111111</ram:ID>
                  <ram:Name>ТОВ "Тест1"</ram:Name>
                  <ram:RoleCode>AB</ram:RoleCode>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>73000</ram:PostcodeCode>
                     <ram:StreetName>Адреса</ram:StreetName>
                     <ram:CityName>м. Київ</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065745518</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>19761009-12411</ram:ID>
                     <ram:TypeCode>TRADEPARTY_UNZR</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
            </ram:NotifiedTradeParty>
            <ram:CarrierAcceptanceLogisticsLocation>
                  <ram:ID schemeAgencyID="КАТОТТГ">UA80000000000093317</ram:ID>
                  <ram:Name>ТОВ "Тест1"</ram:Name>
                  <ram:TypeCode>10</ram:TypeCode>
                  <ram:Description>Україна, 73000, м. Київ, Адреса</ram:Description>
                  <ram:PhysicalGeographicalCoordinate>
                     <ram:SystemID schemeAgencyID="GLN">9864065745518</ram:SystemID>
                  </ram:PhysicalGeographicalCoordinate>
            </ram:CarrierAcceptanceLogisticsLocation>
            <ram:ConsigneeReceiptLogisticsLocation>
                  <ram:ID schemeAgencyID="КАТОТТГ">UA46060450090035581</ram:ID>
                  <ram:Name>Мій Вантажоодержувача</ram:Name>
                  <ram:TypeCode>5</ram:TypeCode>
                  <ram:Description>Україна, 777321, Львівська обл., Львівський р-н, c. Одиноке, вул. Котляревського, 1</ram:Description>
                  <ram:PhysicalGeographicalCoordinate>
                     <ram:SystemID schemeAgencyID="GLN">9864232618959</ram:SystemID>
                  </ram:PhysicalGeographicalCoordinate>
            </ram:ConsigneeReceiptLogisticsLocation>
            <ram:AssociatedReferencedDocument>
                  <ram:TypeCode>3</ram:TypeCode>
                  <ram:ID>7777777</ram:ID>
                  <ram:Remarks>f1d8d358-224e-4a06-baba-947124546a75</ram:Remarks>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2025-02-13T12:00:00+02:00</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
            </ram:AssociatedReferencedDocument>
            <ram:AssociatedReferencedDocument>
                  <ram:TypeCode>105</ram:TypeCode>
                  <ram:ID>555555</ram:ID>
                  <ram:Remarks>39f0b309-b858-4cf1-a06d-a9588b1d7f82</ram:Remarks>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2025-02-14T12:00:00+02:00</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
            </ram:AssociatedReferencedDocument>
            <ram:AssociatedReferencedDocument>
                  <ram:TypeCode>723</ram:TypeCode>
                  <ram:ID>112233</ram:ID>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2025-02-26T12:00:00+02:00</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
            </ram:AssociatedReferencedDocument>
            <ram:AssociatedReferencedDocument>
                  <ram:TypeCode>290</ram:TypeCode>
                  <ram:Remarks>ПІБ (кому передане право)</ram:Remarks>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2025-02-26T12:00:00+02:00</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
            </ram:AssociatedReferencedDocument>
            <ram:DeliveryTransportEvent>
                  <ram:ActualOccurrenceDateTime>
                     <udt:DateTime>2025-02-19T19:15:00+02:00</udt:DateTime>
                  </ram:ActualOccurrenceDateTime>
                  <ram:ScheduledOccurrenceDateTime>
                     <udt:DateTime>2025-02-19T19:15:00+02:00</udt:DateTime>
                  </ram:ScheduledOccurrenceDateTime>
                  <ram:CertifyingTradeParty>
                     <ram:ID schemeAgencyID="ПАСПОРТ">123456789</ram:ID>
                     <ram:Name>Вантажоодержувач</ram:Name>
                     <ram:RoleCode>CN</ram:RoleCode>
                     <ram:DefinedTradeContact>
                        <ram:PersonName>Гібрид</ram:PersonName>
                        <ram:MobileTelephoneUniversalCommunication>
                              <ram:CompleteNumber>380444444444</ram:CompleteNumber>
                        </ram:MobileTelephoneUniversalCommunication>
                     </ram:DefinedTradeContact>
                  </ram:CertifyingTradeParty>
                  <ram:CertifyingTradeParty>
                     <ram:ID schemeAgencyID="РНОКПП">156235184971</ram:ID>
                     <ram:Name>екстрасенс</ram:Name>
                     <ram:RoleCode>CA</ram:RoleCode>
                     <ram:DefinedTradeContact>
                        <ram:PersonName>Гібрид Богдан Микитович</ram:PersonName>
                        <ram:MobileTelephoneUniversalCommunication>
                              <ram:CompleteNumber>380562354859</ram:CompleteNumber>
                        </ram:MobileTelephoneUniversalCommunication>
                     </ram:DefinedTradeContact>
                  </ram:CertifyingTradeParty>
                  <ram:CertifyingTradeParty>
                     <ram:ID schemeAgencyID="РНОКПП">3413712913</ram:ID>
                     <ram:Name>Комірник</ram:Name>
                     <ram:RoleCode>FW</ram:RoleCode>
                     <ram:DefinedTradeContact>
                        <ram:PersonName>Іванов</ram:PersonName>
                        <ram:MobileTelephoneUniversalCommunication>
                              <ram:CompleteNumber>380000000000</ram:CompleteNumber>
                        </ram:MobileTelephoneUniversalCommunication>
                     </ram:DefinedTradeContact>
                  </ram:CertifyingTradeParty>
            </ram:DeliveryTransportEvent>
            <ram:PickUpTransportEvent>
                  <ram:ActualOccurrenceDateTime>
                     <udt:DateTime>2025-02-07T10:30:00+02:00</udt:DateTime>
                  </ram:ActualOccurrenceDateTime>
                  <ram:ScheduledOccurrenceDateTime>
                     <udt:DateTime>2025-02-07T10:30:00+02:00</udt:DateTime>
                  </ram:ScheduledOccurrenceDateTime>
                  <ram:CertifyingTradeParty>
                     <ram:ID schemeAgencyID="РНОКПП">845792873472</ram:ID>
                     <ram:Name>тест-посада ВВ</ram:Name>
                     <ram:RoleCode>CZ</ram:RoleCode>
                     <ram:DefinedTradeContact>
                        <ram:PersonName>ВО Вантажовідправника</ram:PersonName>
                        <ram:MobileTelephoneUniversalCommunication>
                              <ram:CompleteNumber>380777777434</ram:CompleteNumber>
                        </ram:MobileTelephoneUniversalCommunication>
                        <ram:EmailURIUniversalCommunication>
                              <ram:CompleteNumber>test@gmail.com</ram:CompleteNumber>
                        </ram:EmailURIUniversalCommunication>
                     </ram:DefinedTradeContact>
                  </ram:CertifyingTradeParty>
                  <ram:CertifyingTradeParty>
                     <ram:ID schemeAgencyID="РНОКПП">156235184971</ram:ID>
                     <ram:Name>екстрасенс</ram:Name>
                     <ram:RoleCode>CA</ram:RoleCode>
                     <ram:DefinedTradeContact>
                        <ram:PersonName>Гібрид Богдан Микитович</ram:PersonName>
                        <ram:MobileTelephoneUniversalCommunication>
                              <ram:CompleteNumber>380562354859</ram:CompleteNumber>
                        </ram:MobileTelephoneUniversalCommunication>
                     </ram:DefinedTradeContact>
                  </ram:CertifyingTradeParty>
                  <ram:CertifyingTradeParty>
                     <ram:ID schemeAgencyID="РНОКПП">3434513149</ram:ID>
                     <ram:Name>комірник</ram:Name>
                     <ram:RoleCode>FW</ram:RoleCode>
                     <ram:DefinedTradeContact>
                        <ram:PersonName>Трясій Олена Володимирівна</ram:PersonName>
                        <ram:MobileTelephoneUniversalCommunication>
                              <ram:CompleteNumber>380971853145</ram:CompleteNumber>
                        </ram:MobileTelephoneUniversalCommunication>
                        <ram:EmailURIUniversalCommunication>
                              <ram:CompleteNumber>test@gmail.com</ram:CompleteNumber>
                        </ram:EmailURIUniversalCommunication>
                     </ram:DefinedTradeContact>
                  </ram:CertifyingTradeParty>
                  <ram:ApplicableNote>
                     <ram:ContentCode>GROSSWEIGHT</ram:ContentCode>
                     <ram:Content>3</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>DOWNTIME</ram:ContentCode>
                     <ram:Content>11:22</ram:Content>
                  </ram:ApplicableNote>
            </ram:PickUpTransportEvent>
            <ram:IncludedSupplyChainConsignmentItem>
                  <ram:SequenceNumeric>1</ram:SequenceNumeric>
                  <ram:InvoiceAmount currencyID="UAH">400</ram:InvoiceAmount>
                  <ram:GrossWeightMeasure unitCode="KGM">300</ram:GrossWeightMeasure>
                  <ram:TariffQuantity unitCode="UAH">200</ram:TariffQuantity>
                  <ram:GlobalID schemeAgencyID="УКТЗЕД">212112313</ram:GlobalID>
                  <ram:NatureIdentificationTransportCargo>
                     <ram:Identification>Найменування</ram:Identification>
                  </ram:NatureIdentificationTransportCargo>
                  <ram:ApplicableTransportDangerousGoods>
                     <ram:UNDGIdentificationCode>121221</ram:UNDGIdentificationCode>
                  </ram:ApplicableTransportDangerousGoods>
                  <ram:AssociatedReferencedLogisticsTransportEquipment>
                     <ram:ID>22334</ram:ID>
                  </ram:AssociatedReferencedLogisticsTransportEquipment>
                  <ram:AssociatedReferencedDocument>
                     <ram:TypeCode>3</ram:TypeCode>
                     <ram:ID>1221</ram:ID>
                     <ram:FormattedIssueDateTime>
                        <qdt:DateTimeString>2025-02-19T12:00:00+02:00</qdt:DateTimeString>
                     </ram:FormattedIssueDateTime>
                  </ram:AssociatedReferencedDocument>
                  <ram:TransportLogisticsPackage>
                     <ram:ItemQuantity>4</ram:ItemQuantity>
                     <ram:TypeCode>CT</ram:TypeCode>
                     <ram:Type>г</ram:Type>
                     <ram:PhysicalLogisticsShippingMarks>
                        <ram:Marking>бочки</ram:Marking>
                        <ram:BarcodeLogisticsLabel>
                              <ram:ID>14141414141</ram:ID>
                        </ram:BarcodeLogisticsLabel>
                     </ram:PhysicalLogisticsShippingMarks>
                  </ram:TransportLogisticsPackage>
                  <ram:ApplicableNote>
                     <ram:ContentCode>VENDOR_CODE</ram:ContentCode>
                     <ram:Content>14141414</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BUYER_CODE</ram:ContentCode>
                     <ram:Content>1314141</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>QUANTITY</ram:ContentCode>
                     <ram:Content>2</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BASE_UOM</ram:ContentCode>
                     <ram:Content>мм</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>PRICE_WITH_VAT</ram:ContentCode>
                     <ram:Content>2</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>SUM_WITHOUT_VAT</ram:ContentCode>
                     <ram:Content>4</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>NET_WEIGHT</ram:ContentCode>
                     <ram:Content>12</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>RETURN_TARE</ram:ContentCode>
                     <ram:Content>12</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>RTP_TYPE</ram:ContentCode>
                     <ram:Content>одноразова</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>RTP_QUANTITY</ram:ContentCode>
                     <ram:Content>3</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>ANIMAL_ID</ram:ContentCode>
                     <ram:Content>00009999000099</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>ANIMAL_TYPE</ram:ContentCode>
                     <ram:Content>Вид тварини </ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TRANSPORTATION_MIN_TEMPERATURE</ram:ContentCode>
                     <ram:Content>10</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TRANSPORTATION_MAX_TEMPERATURE</ram:ContentCode>
                     <ram:Content>15</ram:Content>
                  </ram:ApplicableNote>
            </ram:IncludedSupplyChainConsignmentItem>
            <ram:UtilizedLogisticsTransportEquipment>
                  <ram:ID>APITESTNEW0</ram:ID>
                  <ram:AffixedLogisticsSeal>
                     <ram:ID>2424424</ram:ID>
                  </ram:AffixedLogisticsSeal>
                  <ram:SettingTransportSettingTemperature>
                     <ram:MinimumValueMeasure unitCode="CEL">22</ram:MinimumValueMeasure>
                     <ram:MaximumValueMeasure unitCode="CEL">34</ram:MaximumValueMeasure>
                  </ram:SettingTransportSettingTemperature>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BRAND</ram:ContentCode>
                     <ram:Content>brand</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>MODEL</ram:ContentCode>
                     <ram:Content>model</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>COLOR</ram:ContentCode>
                     <ram:Content>color</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TYPE</ram:ContentCode>
                     <ram:Content>type</ram:Content>
                  </ram:ApplicableNote>
            </ram:UtilizedLogisticsTransportEquipment>
            <ram:UtilizedLogisticsTransportEquipment>
                  <ram:ID>KA3935BA</ram:ID>
                  <ram:CategoryCode>TE</ram:CategoryCode>
                  <ram:CharacteristicCode>17</ram:CharacteristicCode>
                  <ram:AffixedLogisticsSeal>
                     <ram:ID>24425525</ram:ID>
                  </ram:AffixedLogisticsSeal>
                  <ram:SettingTransportSettingTemperature>
                     <ram:MinimumValueMeasure unitCode="CEL">22</ram:MinimumValueMeasure>
                     <ram:MaximumValueMeasure unitCode="CEL">34</ram:MaximumValueMeasure>
                  </ram:SettingTransportSettingTemperature>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BRAND</ram:ContentCode>
                     <ram:Content>BMW</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>MODEL</ram:ContentCode>
                     <ram:Content>523I</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>COLOR</ram:ContentCode>
                     <ram:Content>ЧОРНИЙ</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TYPE</ram:ContentCode>
                     <ram:Content>ЗАГАЛЬНИЙ, ЛЕГКОВИЙ, СЕДАН-B</ram:Content>
                  </ram:ApplicableNote>
            </ram:UtilizedLogisticsTransportEquipment>
            <ram:UtilizedLogisticsTransportEquipment>
                  <ram:ID>KA3935BA</ram:ID>
                  <ram:CategoryCode>TE</ram:CategoryCode>
                  <ram:CharacteristicCode>17</ram:CharacteristicCode>
                  <ram:AffixedLogisticsSeal>
                     <ram:ID>242424</ram:ID>
                  </ram:AffixedLogisticsSeal>
                  <ram:SettingTransportSettingTemperature>
                     <ram:MinimumValueMeasure unitCode="CEL">22</ram:MinimumValueMeasure>
                     <ram:MaximumValueMeasure unitCode="CEL">34</ram:MaximumValueMeasure>
                  </ram:SettingTransportSettingTemperature>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BRAND</ram:ContentCode>
                     <ram:Content>BMW</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>MODEL</ram:ContentCode>
                     <ram:Content>523I</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>COLOR</ram:ContentCode>
                     <ram:Content>ЧОРНИЙ</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TYPE</ram:ContentCode>
                     <ram:Content>ЗАГАЛЬНИЙ, ЛЕГКОВИЙ, СЕДАН-B</ram:Content>
                  </ram:ApplicableNote>
            </ram:UtilizedLogisticsTransportEquipment>
            <ram:UtilizedLogisticsTransportEquipment>
                  <ram:ID>ГФ12</ram:ID>
                  <ram:CategoryCode>CN</ram:CategoryCode>
                  <ram:CharacteristicCode>23</ram:CharacteristicCode>
                  <ram:AffixedLogisticsSeal>
                     <ram:ID>08258</ram:ID>
                  </ram:AffixedLogisticsSeal>
                  <ram:SettingTransportSettingTemperature>
                     <ram:MinimumValueMeasure unitCode="CEL">21</ram:MinimumValueMeasure>
                     <ram:MaximumValueMeasure unitCode="CEL">23</ram:MaximumValueMeasure>
                  </ram:SettingTransportSettingTemperature>
            </ram:UtilizedLogisticsTransportEquipment>
            <ram:DeliveryInstructions>
                  <ram:Description>погодинний тариф</ram:Description>
                  <ram:DescriptionCode>TRANSPORTATION_TYPE</ram:DescriptionCode>
            </ram:DeliveryInstructions>
         </SpecifiedSupplyChainConsignment>
      </eCMR>
      </UAECMR>

XML-Специфікація
==============================================

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSrSft75XLCHJK-EsFJsq_rSCmhiwaX1pkEvqxXROD6rVTh2fbdd2pmr1TmYeNjRA/pubhtml?gid=398354812&single=true" width="1145" height="13820" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

-------------------------

Друкована форма (XML)
==============================================

`⏬ Завантажити форму <https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4Ydc9QfbBeOrHfM7IdOKukjb03UoRL2ZyPkrs4sl2hQHBhb7CIEEMP5H_2MBoYQ/pub?output=pdf&gid=78385386>`__

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4Ydc9QfbBeOrHfM7IdOKukjb03UoRL2ZyPkrs4sl2hQHBhb7CIEEMP5H_2MBoYQ/pubhtml?gid=78385386&single=true" width="1100" height="3500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </embed>

.. data from table (remember to renew time to time)

.. raw:: html

   <!-- <div>№ з/п,Параметр²,Тип¹,Формат,Опис
   ,UAECMR,M,,Початок документа
   I,eCMR,M, ,Початок змісту документа
   1,ExchangedDocumentContext,M, ,Технічні дані
   1.1,ram:SpecifiedTransactionID,M,string,Номер версії документа (транзакції) в ланцюгу підписання документів
   1.2.1,ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID,M,string,код типу документа = urn:ua:e-transport.gov.ua:ettn:01
   1.3.1,ram:GuidelineSpecifiedDocumentContextParameter.ram:ID,M,string,код підтипу документа = urn:ua:e-transport.gov.ua:ettn:01:generic:001
   2,ExchangedDocument,M, ,Реквізити ТТН
   2.1,ram:ID,M,string,порядковий номер (серія) документа
   2.2.1,ram:IssueDateTime.udt:DateTime,M,"datetime
   (2021-12-13T14:19:23+02:00)",Дата і час складання документа
   2.3,ram:Remarks,O,string,Ремарки
   2.4,ram:IncludedNote,O, ,Додані записи
   2.4.1.1,ram:ContentCode.listAgencyID,M,String,"Ідентифікатор:

   * transportation_max_temperature (Максимальна температура під час перевезення)
   * logger_return (Повернення логера)
   * logistic_unit_number_with_logger (Номер логістичної одиниці з термологером)
   * gps_number (Номер GPS)
   * logger_number (Номер термологера).

   Ідентифікатори logistic_unit_number_with_logger / gps_number / logger_number вказуються контрагентом з роллю «Вантажовідправник». Ідентифікатори transportation_max_temperature та logger_return вказуються контрагентом з роллю «Вантажоодержувач»"
   2.4.1.2,ram:ContentCode.value,M,"* Число (3)
   * «Так» / «Ні»
   * Рядок","значення ідентифікатора

   * для transportation_max_temperature = Число (3)
   * для logger_return = «Так» / «Ні»
   * для logistic_unit_number_with_logger = Рядок
   * для gps_number = Рядок
   * для logger_number = Рядок"
   2.4.2,ram:Content,M,string,"Код ролі учасника. Довідник ролей

   * перевізник - CA
   * новий перевізник - CH
   * водій - DR
   * новий водій - DRS"
   2.5.1,issueLogisticsLocation.ram:Name,M,string,Найменування місця складання ТТН
   2.5.2,issueLogisticsLocation.ram:Description,M,string,Опис (адреса) місця складання ТТН
   3,SpecifiedSupplyChainConsignment,M, ,Інформація про перевезення
   3.1.1,ram:GrossWeightMeasure.unitCode,M,string,Код одиниці виміру
   3.1.2,ram:GrossWeightMeasure.value,M,decimal,Значення
   3.2.1,ram:AssociatedInvoiceAmount.currencyID,M,string,Тризначний код валюти (UAH)
   3.2.2,ram:AssociatedInvoiceAmount.value,M,decimal,Значення
   3.3,ram:ConsignmentItemQuantity,M,decimal,Загальна кількість місць вантажу (контейнерів)
   3.4,ram:ConsignorTradeParty,M, ,Вантажовідправник
   3.4.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажовідправника
   3.4.1.2,ram:ID.value,M,decimal,Значення
   3.4.2,ram:Name,M,string,"Повне найменування Вантажовідправника (юридичної особи або ПІБ фізичної-особи підприємця), що проводить відвантаження (списання) перелічених в ТТН товарно-матеріальних цінностей"
   3.4.3,ram:RoleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
   3.4.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.4.4.1,ram:PersonName,O,string,ПІБ
   3.4.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.4.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.4.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.4.5,ram:PostalTradeAddress,M, ,Юридична адреса Вантажовідправника
   3.4.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.4.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.4.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.4.5.4,ram:CountryID,M,string,Країна (UA)
   3.4.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.4.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.4.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Вантажовідправника (блок обов'язковий до заповнення для відправника транзакції)
   3.4.7.1,ram:ID,M/O,decimal,GLN Вантажовідправника (поле обов'язкове до заповнення для відправника транзакції)
   3.4.7.2,ram:TypeCode,O,string,"Код типу:

   * TRADEPARTY_GLN"
   3.5,ram:ConsigneeTradeParty,M, ,Вантажоодержувач
   3.5.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажоодержувача
   3.5.1.2,ram:ID.value,M,decimal,Значення
   3.5.2,ram:Name,M,string,"Повне найменування Вантажоодержувача (юридичної особи або ПІБ фізичної-особи підприємця), що проводить одержання (оприбуткування) перелічених в ТТН товарно-матеріальних цінностей"
   3.5.3,ram:RoleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
   3.5.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.5.4.1,ram:PersonName,O,string,ПІБ
   3.5.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.5.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.5.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.5.5,ram:PostalTradeAddress,M, ,Юридична адреса Вантажоодержувача
   3.5.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.5.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.5.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.5.5.4,ram:CountryID,M,string,Країна (UA)
   3.5.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.5.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.5.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Вантажоодержувача (блок обов'язковий до заповнення для відправника транзакції)
   3.5.7.1,ram:ID,M/O,decimal,GLN Вантажоодержувача (поле обов'язкове до заповнення для відправника транзакції)
   3.5.7.2,ram:TypeCode,O,string,"Код типу:

   * TRADEPARTY_GLN"
   3.6,ram:CarrierTradeParty,M, ,Перевізник
   3.6.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Перевізника
   3.6.1.2,ram:ID.value,M,decimal,Значення
   3.6.2,ram:Name,M,string,"Повне найменування Перевізника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник уклав договір на надання транспортних послуг"
   3.6.3,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   3.6.4,ram:DefinedTradeContact,M, ,Контакти відповідального представника
   3.6.4.1,ram:PersonName,M,string,"ПІБ водія, що керуватиме ТЗ при перевезенні вантажу"
   3.6.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.6.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.6.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.6.5,ram:PostalTradeAddress,M, ,Юридична адреса Перевізника
   3.6.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.6.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.6.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.6.5.4,ram:CountryID,M,string,Країна (UA)
   3.6.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.6.6.1,ram:SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП відповідальної особи (водія)
   3.6.7,ram:SpecifiedGovernmentRegistration,M, ,Посвідчення Водія / GLN Водія / GLN компанії-учасника
   3.6.7.1,ram:ID,M/O,"* string
   * decimal при ram:TypeCode=DRIVER_GLN / TRADEPARTY_GLN","* Серія та номер водійського посвідчення Водія (поле обов'язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456
   * для ram:TypeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)
   * для ram:TypeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов'язкове до заповнення для відправника транзакції)"
   3.6.7.2,ram:TypeCode,O,string,"Код типу:

   * DRIVER_GLN
   * TRADEPARTY_GLN"
   3.7,ram:NotifiedTradeParty (роль - FW),O, ,Експедитор
   3.7.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Експедитора
   3.7.1.2,ram:ID.value,M,decimal,Значення
   3.7.2,ram:Name,M,string,"Повне найменування Експедитора (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник (замовник) уклав договір траспортного експедирування"
   3.7.3,ram:RoleCode,M,string,Роль учасника (Експедитор - FW). Довідник ролей
   3.7.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.7.4.1,ram:PersonName,O,string,ПІБ
   3.7.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.7.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.7.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.7.5,ram:PostalTradeAddress,O, ,Юридична адреса Експедитора
   3.7.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.7.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.7.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.7.5.4,ram:CountryID,M,string,Країна (UA)
   3.7.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.7.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.7.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Експедитора (блок обов'язковий до заповнення для відправника транзакції)
   3.7.7.1,ram:ID,M/O,decimal,GLN Експедитора (поле обов'язкове до заповнення для відправника транзакції)
   3.7.7.2,ram:TypeCode,O,string,"Код типу:

   * TRADEPARTY_GLN"
   3.8,ram:NotifiedTradeParty (роль - OB),M, ,Замовник
   3.8.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Замовника
   3.8.1.2,ram:ID.value,M,decimal,Значення
   3.8.2,ram:Name,M,string,"Повне найменування Замовника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, що проводить оплату транспортної роботи і послуг"
   3.8.3,ram:RoleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
   3.8.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.8.4.1,ram:PersonName,O,string,ПІБ
   3.8.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.8.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.8.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.8.5,ram:PostalTradeAddress,M, ,Юридична адреса Замовника
   3.8.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.8.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.8.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.8.5.4,ram:CountryID,M,string,Країна (UA)
   3.8.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.8.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.8.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Замовника (блок обов'язковий до заповнення для відправника транзакції)
   3.8.7.1,ram:ID,M/O,decimal,GLN Замовника (поле обов'язкове до заповнення для відправника транзакції)
   3.8.7.2,ram:TypeCode,O,string,"Код типу:

   * TRADEPARTY_GLN"
   3.9,ram:NotifiedTradeParty (роль - WD),O, ,Проміжний склад
   3.9.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Проміжного складу
   3.9.1.2,ram:ID.value,M,decimal,Значення
   3.9.2,ram:Name,M,string,"Повне найменування Проміжного складу (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
   3.9.3,ram:RoleCode,M,string,Роль учасника (Проміжний склад - WD). Довідник ролей
   3.9.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.9.4.1,ram:PersonName,O,string,ПІБ
   3.9.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.9.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.9.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.9.5,ram:PostalTradeAddress,O, ,Юридична адреса Проміжного складу
   3.9.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.9.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.9.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.9.5.4,ram:CountryID,M,string,Країна (UA)
   3.9.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.9.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.9.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Проміжного складу (блок обов'язковий до заповнення для відправника транзакції)
   3.9.7.1,ram:ID,M/O,decimal,GLN Проміжного складу (поле обов'язкове до заповнення для відправника транзакції)
   3.9.7.2,ram:TypeCode,O,string,"Код типу:

   * TRADEPARTY_GLN"
   3.10,ram:NotifiedTradeParty (роль - COP),O, ,Охоронна компанія
   3.10.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Охоронної компанії
   3.10.1.2,ram:ID.value,M,decimal,Значення
   3.10.2,ram:Name,M,string,"Повне найменування Охоронної компанії, що надає охоронні послуги вантажу під час перевезення"
   3.10.3,ram:RoleCode,M,string,Роль учасника (Охоронна компанія - COP). Довідник ролей
   3.10.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.10.4.1,ram:PersonName,O,string,"ПІБ представника Замовника, який уповноважений супроводжувати вантаж, що підлягає спеціальній охороні"
   3.11,ram:CarrierAcceptanceLogisticsLocation,M, ,Пункт навантаження 
   3.11.1.1,ram:ID.schemeAgencyID,M,string,КАТОТТГ пункту навантаження
   3.11.1.2,ram:ID.value,M,string,Значення
   3.11.2,ram:Name,M,string,Найменування пункту навантаження
   3.11.3,ram:TypeCode,M,decimal,Тип операції: 10 - навантаження; 5 - розвантаження
   3.11.4,ram:Description,M,string,Опис (адреса) пункту навантаження
   3.11.5,ram:PhysicalGeographicalCoordinate,M, ,Географічні координати
   3.11.5.1,ram:LatitudeMeasure,O,string,Географічні координати (Широта)
   3.11.5.2,ram:LongitudeMeasure,O,string,Географічні координати (Довгота)
   3.11.5.3.1,ram:SystemID.schemeAgencyID,M,string,GLN
   3.11.5.3.2,ram:SystemID.value,M,decimal,Значення
   3.12,ram:ConsigneeReceiptLogisticsLocation,M, ,Пункт розвантаження 
   3.12.1.1,ram:ID.schemeAgencyID,M,string,КАТОТТГ пункту розвантаження
   3.12.1.2,ram:ID.value,M,string,Значення
   3.12.2,ram:Name,M,string,Найменування пункту розвантаження
   3.12.3,ram:TypeCode,M,decimal,Тип операції: 10 - навантаження; 5 - розвантаження
   3.12.4,ram:Description,M,string,Опис (адреса) пункту розвантаження
   3.12.5,ram:PhysicalGeographicalCoordinate,M, ,Географічні координати
   3.12.5.1,ram:LatitudeMeasure,O,string,Географічні координати (Широта)
   3.12.5.2,ram:LongitudeMeasure,O,string,Географічні координати (Довгота)
   3.12.5.3.1,ram:SystemID.schemeAgencyID,M,string,GLN
   3.12.5.3.2,ram:SystemID.value,M,decimal,Значення
   3.13,ram:AssociatedReferencedDocument (TypeCode=723),O, ,"Супровідні документи на вантаж. Документ, що підтверджує охоронні послуги"
   3.13.1,ram:TypeCode,M,decimal,"Тип 723 - використовується при зазначенні документа, що підтверджує надання спеціальних охоронних послуг (довідник кодів документів МІУ + довідник внутрішніх кодів документів EDIN)"
   3.13.2,ram:ID,M,string,"Номер документа, згідно з яким представник Замовника уповноважений супроводжувати вантаж, який підлягає спеціальній охороні"
   3.13.3,ram:Remarks,O,string,UUID супровідного документа
   3.13.4.1,ram:FormattedIssueDateTime.qdt:DateTimeString,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час складання супровідного документа
   3.14,ram:AssociatedReferencedDocument (TypeCode=290),O, ,Супровідні документи на вантаж. Запис про передачу права на пред’явлення претензії
   3.14.1,ram:TypeCode,M,decimal,Тип 290 - використовується при зазначенні передачі права предʼявлення претензії (довідник кодів документів МІУ + довідник внутрішніх кодів документів EDIN)
   3.14.2,ram:ID,O,string,Номер документа
   3.14.3,ram:Remarks,O,string,UUID супровідного документа
   3.14.4.1,ram:FormattedIssueDateTime.qdt:DateTimeString,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час складання супровідного документа
   3.15,ram:AssociatedReferencedDocument (TypeCode=916),O, ,Супровідні документи на вантаж. Коригуючі акти
   3.15.1,ram:TypeCode,M,decimal,"Тип 916 - використовується при формуванні актів, для вказання попередньої транзакції поточного акту (довідник кодів документів МІУ + довідник внутрішніх кодів документів EDIN)"
   3.15.2,ram:ID,M,string,Номер акта
   3.15.3,ram:Remarks,O,string,UUID супровідного документа
   3.15.4.1,ram:FormattedIssueDateTime.qdt:DateTimeString,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час складання супровідного документа
   3.16,ram:AssociatedReferencedDocument (інші),O, ,Інші супровідні документи
   3.16.1,ram:TypeCode,O,decimal,"Тип 

   * код 730 використовується для вказання попередніх транзакцій типу е-ТТН
   * код 730 також використовується при створенні актів для вказання е-ТТН до якого створюється акт
   * код 916 використовується при формуванні актів, для вказання попередньої транзакції поточного акту
   * код 723 при зазначенні документа, що підтверджує надання спеціальних охоронних послуг
   * код 290 при зазначенні передачі права предʼявлення претензії
   * код 119 при операціях з актом навантаження на проміжному складі, для зазначення попереднього акту розвантаження на цьому ж складі

   (довідник кодів документів МІУ + довідник внутрішніх кодів документів EDIN)"
   3.16.2,ram:ID,O,string,Номер документа
   3.16.3,ram:Remarks,O,string,UUID супровідного документа
   3.16.4.1,ram:FormattedIssueDateTime.qdt:DateTimeString,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час складання супровідного документа
   3.17,ram:DeliveryTransportEvent,M, ,Розвантажувальні роботи
   3.17.1.1,ram:ActualOccurrenceDateTime.udt:DateTime,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час прибуття автомобіля на розвантаження
   3.17.2.1,ram:ScheduledOccurrenceDateTime.udt:DateTime,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час вибуття автомобіля з-під розвантаження
   3.17.3,ram:CertifyingTradeParty (RoleCode=CN),M, ,Інформація про відповідальних осіб Вантажоодержувача
   3.17.3.1,ram:Name,M,string,Посада матеріально відповідальної особи вантажоодержувача
   3.17.3.2,ram:RoleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
   3.17.3.3.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ матеріально відповідальної особи вантажоодержувача
   3.17.3.4.1,ram:ID.schemeAgencyID,M,string,РНОКПП матеріально відповідальної особи вантажоодержувача
   3.17.3.4.2,ram:ID.value,M,decimal,Значення
   3.17.4,ram:CertifyingTradeParty (RoleCode=DR),M, ,Інформація про водія Перевізника
   3.17.4.1,ram:Name,M,string,"Посада водія, що здав вантаж"
   3.17.4.2,ram:RoleCode,M,string,Роль учасника (Водій - DR). Довідник ролей
   3.17.4.3.1,ram:DefinedTradeContact.ram:PersonName,M,string,"ПІБ водія, що здав вантаж"
   3.17.4.4.1,ram:ID.schemeAgencyID,O,string,РНОКПП Водія
   3.17.4.4.2,ram:ID.value,O,decimal,Значення
   3.17.5,ram:CertifyingTradeParty (RoleCode=CA),M, ,Інформація про відповідальних осіб Перевізника
   3.17.5.1,ram:Name,M,string,Посада відповідальної особи Перевізника
   3.17.5.2,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   3.17.5.3.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Перевізника
   3.17.5.4.1,ram:ID.schemeAgencyID,O,string,РНОКПП Перевізника
   3.17.5.4.2,ram:ID.value,O,decimal,Значення
   3.17.6,ram:CertifyingTradeParty (RoleCode=FW),O, ,Інформація про відповідальних осіб Експедитора
   3.17.6.1,ram:Name,M,string,Посада відповідальної особи Експедитора
   3.17.6.2,ram:RoleCode,M,string,Роль учасника (Експедитор - FW). Довідник ролей
   3.17.6.3.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Експедитора
   3.17.6.4.1,ram:ID.schemeAgencyID,O,string,РНОКПП Експедитора
   3.17.6.4.2,ram:ID.value,O,decimal,Значення
   3.17.7.1,ram:ApplicableNote (з кодом GROSSWEIGHT).ram:ContentCode,O,string,Код GROSSWEIGHT
   3.17.7.2,ram:ApplicableNote (з кодом GROSSWEIGHT).ram:Content,O,decimal,Маса брутто отриманого вантажу в місці розвантаження в кілограмах
   3.17.8.1,ram:ApplicableNote (з кодом DOWNTIME).ram:ContentCode,O,string,Код DOWNTIME
   3.17.8.2,ram:ApplicableNote (з кодом DOWNTIME).ram:Content,O,unsignedByte,Час (години) простою під розвантаженням
   3.18,ram:PickUpTransportEvent,O, ,Навантажувальні роботи
   3.18.1.1,ram:ActualOccurrenceDateTime.udt:DateTime,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час прибуття автомобіля під навантаження
   3.18.2.1,ram:ScheduledOccurrenceDateTime.udt:DateTime,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час вибуття автомобіля з-під навантаження
   3.18.3,ram:CertifyingTradeParty (RoleCode=CZ),M, ,Інформація про відповідальних осіб Вантажовідправника
   3.18.3.1,ram:Name,M,string,"Посада матеріально відповідальної особи, яка відпускає вантаж"
   3.18.3.2,ram:RoleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
   3.18.3.3.1,ram:DefinedTradeContact.ram:PersonName,M,string,"ПІБ матеріально відповідальної особи, яка відпускає вантаж"
   3.18.3.4.1,ram:ID.schemeAgencyID,M,string,"РНОКПП матеріально відповідальної особи, яка відпускає вантаж"
   3.18.3.4.2,ram:ID.value,M,decimal,Значення
   3.18.4,ram:CertifyingTradeParty (RoleCode=DR),M/O, ,Інформація про водія Перевізника. Обов’язково має передаватись один з двох блоків: про Водія або про відповідальну особу Перевізника
   3.18.4.1,ram:Name,M,string,"Посада водія, що прийняв вантаж"
   3.18.4.2,ram:RoleCode,M,string,Роль учасника (Водій - DR). Довідник ролей
   3.18.4.3.1,ram:DefinedTradeContact.ram:PersonName,M,string,"ПІБ водія, що прийняв вантаж"
   3.18.4.4.1,ram:ID.schemeAgencyID,O,string,РНОКПП Водія
   3.18.4.4.2,ram:ID.value,O,decimal,Значення
   3.18.5,ram:CertifyingTradeParty (RoleCode=CA),M/O, ,Інформація про відповідальних осіб Перевізника. Обов’язково має передаватись один з двох блоків: про Водія або про відповідальну особу Перевізника
   3.18.5.1,ram:Name,M,string,Посада відповідальної особи Перевізника
   3.18.5.2,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   3.18.5.3.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Перевізника
   3.18.5.4.1,ram:ID.schemeAgencyID,O,string,РНОКПП Перевізника
   3.18.5.4.2,ram:ID.value,O,decimal,Значення
   3.18.6,ram:CertifyingTradeParty (RoleCode=FW),O, ,Інформація про відповідальних осіб Експедитора
   3.18.6.1,ram:Name,M,string,Посада відповідальної особи Експедитора
   3.18.6.2,ram:RoleCode,M,string,Роль учасника (Експедитор - FW). Довідник ролей
   3.18.6.3.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Експедитора
   3.18.6.4.1,ram:ID.schemeAgencyID,O,string,РНОКПП Експедитора
   3.18.6.4.2,ram:ID.value,O,decimal,Значення
   3.18.7.1,ram:ApplicableNote (з кодом GROSSWEIGHT).ram:ContentCode,M,string,Код GROSSWEIGHT
   3.18.7.2,ram:ApplicableNote (з кодом GROSSWEIGHT).ram:Content,M,decimal,Маса брутто зданого/отриманого вантажу в кілограмах
   3.18.8.1,ram:ApplicableNote (з кодом DOWNTIME).ram:ContentCode,O,string,Код DOWNTIME
   3.18.8.2,ram:ApplicableNote (з кодом DOWNTIME).ram:Content,O,unsignedByte,Час простою
   3.19,ram:IncludedSupplyChainConsignmentItem,M, ,Відомості про вантаж
   3.19.1,ram:SequenceNumeric,M,int,Порядковий номер рядка в таблиці
   3.19.2.1,ram:InvoiceAmount.currencyID,M,string,Загальна сума з ПДВ. Тризначний код валюти (UAH)
   3.19.2.2,ram:InvoiceAmount.value,M,decimal,Загальна сума з ПДВ. Значення
   3.19.3.1,ram:GrossWeightMeasure.unitCode,M,string,Маса брутто вантажу по кожному рядку в кг. Код одиниці виміру
   3.19.3.2,ram:GrossWeightMeasure.value,M,decimal,Маса брутто вантажу по кожному рядку в кг. Значення
   3.19.4.1,ram:TariffQuantity.unitCode,O,string,Ціна без ПДВ за одиницю в грн. Це можуть бути як гривні на кілограм (грн./кг) так і гривні на ящик (грн./ящик) - залежить від зазначеної одиниці виміру. Код одиниці виміру («UAH»)
   3.19.4.2,ram:TariffQuantity.value,O,decimal,Значення
   3.19.5.1,ram:GlobalID.schemeAgencyID,O,string (min 4 - max 10),УКТЗЕД (код продукції)
   3.19.5.2,ram:GlobalID.value,O,string,Значення
   3.19.6.1,ram:NatureIdentificationTransportCargo.ram:IDentification,M,string,Найменування вантажу
   3.19.7.1,ram:ApplicableTransportDangerousGoods.UNDGIdentificationCode,O,decimal,"Клас небезпечних речовин, до якого віднесено вантаж (у разі перевезення небезпечних вантажів). Код UNDG, 0 - якщо не використовується"
   3.19.8.1,ram:AssociatedReferencedLogisticsTransportEquipment.ram:ID,O,string,"Номер контейнера, в якому завантажено цей вантаж. Використовуєься опційно для контейнерих перевезень і має відповідати даним тегу ram:UtilizedLogisticsTransportEquipment"
   3.19.9.1,ram:AssociatedReferencedDocument.ram:ID,O,string,"Документи з вантажем. Номер документа, який водій отримує від вантажовідправника і передає вантажоодержувачеві разом з вантажем (товарні, залізничні накладні, сертифікати, свідоцтва тощо)"
   3.19.9.2,ram:AssociatedReferencedDocument.ram:Remarks,O,string,UUID супровідного документа
   3.19.10,ram:TransportLogisticsPackage,O, ,Транспортно-логістичний пакет. ВАЖЛИВО: в Україні дозволяється лише один LogisticsPackage для одного ConsignmentItem!
   3.19.10.1,ram:ItemQuantity,O,decimal,"Кількість місць, які визначаються за кожним найменуванням вантажу (це можуть бути ящики, кошики, мішки тощо; якщо вантаж упаковано на піддонах - вказують кількість піддонів)"
   3.19.10.2,ram:TypeCode,O,string,Вид пакування (Довідник видів упаковок)
   3.19.10.3,ram:Type,O,string,Одиниця виміру для ram:ItemQuantity
   3.19.10.4,ram:PhysicalLogisticsShippingMarks,O, ,Маркування
   3.19.10.4.1,ram:Marking,O,string,"Назва транспортної упаковки (вільна назва), в якій перевозиться вантаж"
   3.19.10.4.2.1,ram:BarcodeLogisticsLabel.ram:ID,O,string (max 128),Штрихкод товару
   3.19.11.1,ram:ApplicableNote (з кодом VENDOR_CODE).ram:ContentCode,O,string,Код VENDOR_CODE
   3.19.11.2,ram:ApplicableNote (з кодом VENDOR_CODE).ram:Content,O,string,Артикул товару
   3.19.12.1,ram:ApplicableNote (з кодом QUANTITY).ram:ContentCode,O,string,Код QUANTITY
   3.19.12.2,ram:ApplicableNote (з кодом QUANTITY).ram:Content,O,string,Кількість товару
   3.19.13.1,ram:ApplicableNote (з кодом URL).ram:ContentCode,O,string,Код URL
   3.19.13.2,ram:ApplicableNote (з кодом URL).ram:Content,O,string,Посилання на документ
   3.19.14.1,ram:ApplicableNote (з кодом BASE_UOM).ram:ContentCode,O,string,Код BASE_UOM
   3.19.14.2,ram:ApplicableNote (з кодом BASE_UOM).ram:Content,O,string,Одиниця виміру кількості товару для QUANTITY
   3.19.15.1,ram:ApplicableNote (з кодом BUYER_CODE).ram:ContentCode,O,string,Код BUYER_CODE
   3.19.15.2,ram:ApplicableNote (з кодом BUYER_CODE).ram:Content,O,string,Артикул покупця (використовується для ідентифікації товарної позиції при прийманні)
   3.19.16.1,ram:ApplicableNote (з кодом PRICE_WITH_VAT).ram:ContentCode,O,string,Код PRICE_WITH_VAT
   3.19.16.2,ram:ApplicableNote (з кодом PRICE_WITH_VAT).ram:Content,O,string,Ціна за одиницю з ПДВ
   3.19.17.1,ram:ApplicableNote (з кодом SUM_WITHOUT_VAT).ram:ContentCode,O,string,Код SUM_WITHOUT_VAT
   3.19.17.2,ram:ApplicableNote (з кодом SUM_WITHOUT_VAT).ram:Content,O,string,Загальна сума без ПДВ
   3.19.18.1,ram:ApplicableNote (з кодом RETURN_TARE).ram:ContentCode,O,string,Код RETURN_TARE
   3.19.18.2,ram:ApplicableNote (з кодом RETURN_TARE).ram:Content,O,string,Ознака «зворотня тара»
   3.19.19.1,ram:ApplicableNote (з кодом NET_WEIGHT).ram:ContentCode,O,string,Код NET_WEIGHT
   3.19.19.2,ram:ApplicableNote (з кодом NET_WEIGHT).ram:Content,O,string,Маса нетто
   3.19.20.1,ram:ApplicableNote (з кодом RTP_TYPE).ram:ContentCode,O,string,Код RTP_TYPE
   3.19.20.2,ram:ApplicableNote (з кодом RTP_TYPE).ram:Content,O,string,"Тип транспортної упаковки, наприклад, контейнер"
   3.19.21.1,ram:ApplicableNote (з кодом RTP_NAME).ram:ContentCode,O,string,Код RTP_NAME
   3.19.21.2,ram:ApplicableNote (з кодом RTP_NAME).ram:Content,O,string,"Назва транспортної упаковки, наприклад, контейнер для перевезення сипучих речовин"
   3.19.22.1,ram:ApplicableNote (з кодом RTP_QUANTITY).ram:ContentCode,O,string,Код RTP_QUANTITY
   3.19.22.2,ram:ApplicableNote (з кодом RTP_QUANTITY).ram:Content,O,string,Кількість транспортної упаковки (використовується для обліку оборотної тари)
   3.20,ram:UtilizedLogisticsTransportEquipment,M, ,Автомобіль
   3.20.1,ram:ID,M,string,"Реєстраційний номер автомобіля згідно з техпаспортом

   * укр.номери: має відповідати одному з патернів для автомобільних номерних знаків
   * єврономери: без валідації"
   3.20.2.1,ram:AffixedLogisticsSeal.ram:ID,O,string,"Номер пломби, якою проводилося пломбування автомобіля"
   3.20.3,ram:SettingTransportSettingTemperature,O, ,Інструкції з експлуатації
   3.20.3.1,ram:MinimumValueMeasure,O, ,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
   3.20.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.20.3.1.2,value,O,decimal,Значення
   3.20.3.2,ram:MaximumValueMeasure,O, ,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
   3.20.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.20.3.2.2,value,O,decimal,Значення
   3.20.4.1,ram:ApplicableNote (з кодом BRAND).ram:ContentCode,M,string,Код BRAND
   3.20.4.2,ram:ApplicableNote (з кодом BRAND).ram:Content,M,string,Марка автомобіля згідно з техпаспортом
   3.20.5.1,ram:ApplicableNote (з кодом MODEL).ram:ContentCode,M,string,Код MODEL
   3.20.5.2,ram:ApplicableNote (з кодом MODEL).ram:Content,M,string,Модель автомобіля згідно з техпаспортом
   3.20.6.1,ram:ApplicableNote (з кодом COLOR).ram:ContentCode,O,string,Код COLOR
   3.20.6.2,ram:ApplicableNote (з кодом COLOR).ram:Content,O,string,Колір автомобіля згідно з техпаспортом
   3.20.7.1,ram:ApplicableNote (з кодом TYPE).ram:ContentCode,O,string,Код TYPE
   3.20.7.2,ram:ApplicableNote (з кодом TYPE).ram:Content,O,string,Тип автомобіля згідно з техпаспортом
   3.21,ram:UtilizedLogisticsTransportEquipment (CategoryCode=TE),O, ,Причіп/напівпричіп
   3.21.1,ram:ID,O,string,Реєстраційний номер причіпа/напівпричіпа згідно з техпаспортом
   3.21.2,ram:CategoryCode,M,string,Тип TE - Причіп/напівпричіп
   3.21.3,ram:CharacteristicCode,M,decimal,"Код визначення Причіп/напівпричіп:

   * 14 - Причіп
   * 17 - Напівпричіп"
   3.21.4.1,ram:AffixedLogisticsSeal.ram:ID,O,string,"Номер пломби, якою проводилося пломбування причіпа/напівпричіпа"
   3.21.5,ram:SettingTransportSettingTemperature,O, ,Інструкції з експлуатації
   3.21.5.1,ram:MinimumValueMeasure,O, ,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
   3.21.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.21.5.1.2,value,O,decimal,Значення
   3.21.5.2,ram:MaximumValueMeasure,O, ,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
   3.21.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.21.5.2.2,value,O,decimal,Значення
   3.21.6.1,ram:ApplicableNote (з кодом BRAND).ram:ContentCode,M,string,Код BRAND
   3.21.6.2,ram:ApplicableNote (з кодом BRAND).ram:Content,M,string,Марка причіпа/напівпричіпа згідно з техпаспортом
   3.21.7.1,ram:ApplicableNote (з кодом MODEL).ram:ContentCode,M,string,Код MODEL
   3.21.7.2,ram:ApplicableNote (з кодом MODEL).ram:Content,M,string,Модель причіпа/напівпричіпа згідно з техпаспортом
   3.21.8.1,ram:ApplicableNote (з кодом COLOR).ram:ContentCode,O,string,Код COLOR
   3.21.8.2,ram:ApplicableNote (з кодом COLOR).ram:Content,O,string,Колір причіпа/напівпричіпа згідно з техпаспортом
   3.21.9.1,ram:ApplicableNote (з кодом TYPE).ram:ContentCode,O,string,Код TYPE
   3.21.9.2,ram:ApplicableNote (з кодом TYPE).ram:Content,O,string,Тип причіпа/напівпричіпа згідно з техпаспортом
   3.22,ram:UtilizedLogisticsTransportEquipment (CategoryCode=CN),O, ,Контейнер
   3.22.1,ram:CategoryCode,M,string,Тип CN - Контейнер
   3.22.2,ram:CharacteristicCode,M,decimal,"Тип контейнера:

   * 21 - 20-футовий
   * 23 - 40-футовий"
   3.22.3,ram:ID,M,string,Ідентифікаційний номер контейнера
   3.22.4.1,ram:AffixedLogisticsSeal.ram:ID,O,string,"Номер пломби, якою проводилося пломбування контейнера"
   3.22.5,ram:SettingTransportSettingTemperature,O, ,Інструкції з експлуатації
   3.22.5.1,ram:MinimumValueMeasure,O, ,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
   3.22.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.22.5.1.2,value,O,decimal,Значення
   3.22.5.2,ram:MaximumValueMeasure,O, ,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
   3.22.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.22.5.2.2,value,O,decimal,Значення
   3.23,ram:MainCarriageLogisticsTransportMovement,O, ,Маршрутизація (проміжні пункти перевантаження). Заповнюється Перевізником
   3.23.1,ram:SpecifiedTransportEvent,M, ,Проміжне розвантаження
   3.23.1.1,ram:ID,M,string,Порядковий номер проміжного розвантаження події (події завжди нумеруються в порядку поступового зростання за принципом N+1)
   3.23.1.2,ram:TypeCode,M,decimal,"Тип операції (розвантаження=5); завжди одне значення (5), оскільки використовується як планові пункти розвантаження"
   3.23.1.3,ram:Description,O,string,Опис
   3.23.1.4,ram:OccurrenceLogisticsLocation,M, ,Місцезнаходження
   3.23.1.4.1.1,ram:ID.schemeAgencyID,M,string,Код КАТОТТГ складу тимчасового зберігання відповідно до Кодифікатора адміністративно-територіальних одиниць та територій територіальних громад
   3.23.1.4.1.2,ram:ID.value,M,string,Значення
   3.23.1.4.2,ram:Name,O,string,Найменування та адреса (Місцезнаходження складу)
   3.23.1.4.3,ram:TypeCode,M,decimal,"Тип операції (розвантаження=5); завжди одне значення (5), оскільки використовується як планові пункти розвантаження"
   3.23.1.4.4,ram:Description,O,string,Додаткова інформація складу тимчасового зберігання
   3.23.1.5,ram:CertifyingTradeParty (RoleCode=WD),M, ,Юридична особа Проміжного складу
   3.23.1.5.1.1,ram:ID.schemeAgencyID,M,string,"ЄДРПОУ підприємства (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
   3.23.1.5.1.2,ram:ID.value,M,decimal,Значення
   3.23.1.5.2,ram:Name,M,string,"Повне найменування Проміжного складу (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
   3.23.1.5.3,ram:RoleCode,M,string,Роль учасника (Проміжний склад - WD). Довідник ролей
   3.23.1.5.4,ram:DefinedTradeContact,O, ,Контакти відповідальні особи Проміжного складу
   3.23.1.5.4.1,ram:PersonName,O,string,ПІБ відповідальні особи Проміжного складу
   3.23.1.5.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.23.1.5.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.23.1.5.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.23.1.5.5,ram:PostalTradeAddress,M, ,"Юридична адреса Проміжного складу (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
   3.23.1.5.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.23.1.5.5.2,ram:StreetName,M,string,Адреса (Назва вулиці + номер будівлі)
   3.23.1.5.5.3,ram:CityName,M,string,Місто (Назва населеного пункту)
   3.23.1.5.5.4,ram:CountryID,M,string,Країна (UA)
   3.23.1.5.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.23.1.5.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.24,ram:DeliveryInstructions,M, ,Вид перевезень
   3.24.1,ram:Description,O,string,"Опис (вид роботи перевізника: за відрядним тарифом, за погодинним тарифом, за покілометровим тарифом, централізовані перевезення тощо)"
   3.24.2,ram:DescriptionCode,M,string,Код (TRANSPORTATION_TYPE)
   3.25,ram:PreviousAdministrativeReferencedDocument,-/M, ,"Попередня транзакція eCMR, на основі якої складено поточний документ. Блок не вказується, якщо документ створено з «нуля»"
   3.25.1,ram:TypeCode,O,decimal,"Тип документа, на основі якого складено поточний документ. Довідник кодів документів"
   3.25.2,ram:ID,M,string,Відповідає ExchangedExchangedDocumentContext.SpecifiedTransactionID попередніх версій
   3.25.3,ram:Remarks,O,string,Base64 документа попередньої версії
   3.25.4.1,ram:FormattedIssueDateTime.qdt:DateTimeString,O,"datetime
   (2021-12-13T14:19:23+02:00)",Дата та час складання попереднього eCMR документа
   3.25.5,ram:AttachedSpecifiedBinaryFile,O, ,"Вкладений бінарний файл документа, на основі якого складено поточний документ"
   3.25.5.1,ram:ID,M,string,Відповідає document.ram:ID із ЦБД еТТН
   3.25.5.2,ram:URIID,M,string,Посилання на документ
   3.25.5.3,ram:MIMECode,O,string,Код MIME типізації
   3.25.5.4,ram:SizeMeasure,M,Long,Розмір файлу
   II,UaSignatureStorage,M, ,Підписи
   4,Signature (SigningPartyRoleCode=CZ),M, ,КЕП Вантажовідправника
   4.1,SigningPartyRoleCode,M,string,Роль підписанта (Вантажовідправник - CZ). Довідник ролей
   4.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   4.3,Name,M,string,ПІБ підписанта (відповідальної особи вантажовідправника)
   4.4,Position,O,string,Посада підписанта (відповідальної особи вантажовідправника)
   4.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП відповідальної особи вантажовідправника
   5,Signature (SigningPartyRoleCode=DR),M, ,КЕП Водія
   5.1,SigningPartyRoleCode,M,string,Роль підписанта (Водій - DR). Довідник ролей
   5.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   5.3,Name,M,string,ПІБ підписанта (Водія)
   5.4,Position,O,string,Посада підписанта (Водія)
   5.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Водія)
   6,Signature (SigningPartyRoleCode=CA),M, ,КЕП Перевізника
   6.1,SigningPartyRoleCode,M,string,Роль підписанта (Перевізник - CA). Довідник ролей
   6.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   6.3,Name,M,string,ПІБ підписанта (відповідальної особи Перевізника)
   6.4,Position,O,string,Посада підписанта (відповідальної особи Перевізника)
   6.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Перевізника)
   7,Signature (SigningPartyRoleCode=CN),M, ,КЕП Вантажоодержувача
   7.1,SigningPartyRoleCode,M,string,Роль підписанта (Вантажоодержувач - CN). Довідник ролей
   7.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   7.3,Name,M,string,ПІБ підписанта (відповідальної особи Вантажоодержувача)
   7.4,Position,O,string,Посада підписанта (відповідальної особи Вантажоодержувача)
   7.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Вантажоодержувача)


.. old style

   Таблиця 1 - Специфікація "Електронної товарно-транспортної накладної" (XML)

   .. csv-table:: 
   :file: for_csv/ettn_v3.csv
   :widths:  1, 5, 12, 41
   :header-rows: 1
   :stub-columns: 0

   :download:`Приклад ЕТТН<examples/ettn_v3.xml>`

