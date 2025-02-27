################################################################################################
**Створення та відправка "е-ТТН" документа (без створення чернетки)**
################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: CreateAndSendTtn.csv
  :widths:  10, 41
  :stub-columns: 0

.. code:: xml
	
   <UAECMR
		xmlns:qdt="urn:un:unece:uncefact:data:standard:QualifiedDataType:103"
		xmlns:ram="urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103"
		xmlns:uas="urn:ua:signatures:SignaturesExtensions:1"
		xmlns:udt="urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27">
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
				<ram:ID>test_3674_re-test_010</ram:ID>
				<ram:IssueDateTime>
					<udt:DateTime>2023-09-17T09:30:00.000Z</udt:DateTime>
				</ram:IssueDateTime>
				<ram:IncludedNote>
					<ram:ContentCode listAgencyID="logistic_unit_number_with_logger">logistic number</ram:ContentCode>
					<ram:Content>CZ</ram:Content>
				</ram:IncludedNote>
				<ram:IncludedNote>
					<ram:ContentCode listAgencyID="gps_number">gps</ram:ContentCode>
					<ram:Content>CZ</ram:Content>
				</ram:IncludedNote>
				<ram:IncludedNote>
					<ram:ContentCode listAgencyID="logger_number">termologer number</ram:ContentCode>
					<ram:Content>CZ</ram:Content>
				</ram:IncludedNote>
				<ram:IncludedNote>
					<ram:ContentCode listAgencyID="reserve_number">reserve_number</ram:ContentCode>
					<ram:Content>CZ</ram:Content>
				</ram:IncludedNote>
				<ram:IncludedNote>
					<ram:ContentCode listAgencyID="comment">comment by CZ</ram:ContentCode>
					<ram:Content>CZ</ram:Content>
				</ram:IncludedNote>
				<ram:IssueLogisticsLocation>
					<ram:Name>Місце складання документу</ram:Name>
					<ram:Description>test1</ram:Description>
				</ram:IssueLogisticsLocation>
			</ExchangedDocument>
			<SpecifiedSupplyChainConsignment>
				<ram:GrossWeightMeasure unitCode="KGM">555</ram:GrossWeightMeasure>
				<ram:AssociatedInvoiceAmount currencyID="UAH">4690</ram:AssociatedInvoiceAmount>
				<ram:ConsignmentItemQuantity>234</ram:ConsignmentItemQuantity>
				<ram:ConsignorTradeParty>
					<ram:ID schemeAgencyID="ЄДРПОУ">42453235</ram:ID>
					<ram:Name>Володя Нова ГЛН</ram:Name>
					<ram:RoleCode>CZ</ram:RoleCode>
					<ram:PostalTradeAddress>
						<ram:PostcodeCode>456464</ram:PostcodeCode>
						<ram:StreetName>вул. Атом, буд. 1</ram:StreetName>
						<ram:CityName>c. Річиця</ram:CityName>
						<ram:CountryID>UA</ram:CountryID>
						<ram:CountrySubDivisionName>Волинська обл. Ковельський р-н</ram:CountrySubDivisionName>
					</ram:PostalTradeAddress>
					<ram:SpecifiedGovernmentRegistration>
						<ram:ID>9864065748076</ram:ID>
						<ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
					</ram:SpecifiedGovernmentRegistration>
				</ram:ConsignorTradeParty>
				<ram:ConsigneeTradeParty>
					<ram:ID schemeAgencyID="ЄДРПОУ">98084002</ram:ID>
					<ram:Name>Мій Одержувач</ram:Name>
					<ram:RoleCode>CN</ram:RoleCode>
					<ram:PostalTradeAddress>
						<ram:PostcodeCode>734532</ram:PostcodeCode>
						<ram:StreetName>б.145, вул. Зелена</ram:StreetName>
						<ram:CityName>c. Річиця</ram:CityName>
						<ram:CountryID>UA</ram:CountryID>
						<ram:CountrySubDivisionName>Волинська обл. Ковельський р-н</ram:CountrySubDivisionName>
					</ram:PostalTradeAddress>
					<ram:SpecifiedGovernmentRegistration>
						<ram:ID>9864065748694</ram:ID>
						<ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
					</ram:SpecifiedGovernmentRegistration>
				</ram:ConsigneeTradeParty>
				<ram:CarrierTradeParty>
					<ram:ID schemeAgencyID="ЄДРПОУ">12345678</ram:ID>
					<ram:Name>Мій Перевізник</ram:Name>
					<ram:RoleCode>CA</ram:RoleCode>
					<ram:DefinedTradeContact>
						<ram:PersonName>Мій водій</ram:PersonName>
						<ram:TelephoneUniversalCommunication>
							<ram:CompleteNumber>380759876087</ram:CompleteNumber>
						</ram:TelephoneUniversalCommunication>
					</ram:DefinedTradeContact>
					<ram:PostalTradeAddress>
						<ram:PostcodeCode>734532</ram:PostcodeCode>
						<ram:StreetName>б. 77, вул. Вічна</ram:StreetName>
						<ram:CityName>м. Вінниця</ram:CityName>
						<ram:CountryID>UA</ram:CountryID>
						<ram:CountrySubDivisionName>Вінницька обл. Вінницький р-н</ram:CountrySubDivisionName>
					</ram:PostalTradeAddress>
					<ram:SpecifiedTaxRegistration>
						<ram:ID>3607902</ram:ID>
					</ram:SpecifiedTaxRegistration>
					<ram:SpecifiedGovernmentRegistration>
						<ram:ID>DER453456</ram:ID>
					</ram:SpecifiedGovernmentRegistration>
					<ram:SpecifiedGovernmentRegistration>
						<ram:ID>9864065748793</ram:ID>
						<ram:TypeCode>DRIVER_GLN</ram:TypeCode>
					</ram:SpecifiedGovernmentRegistration>
					<ram:SpecifiedGovernmentRegistration>
						<ram:ID>9864065748724</ram:ID>
						<ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
					</ram:SpecifiedGovernmentRegistration>
				</ram:CarrierTradeParty>
				<ram:NotifiedTradeParty>
					<ram:ID schemeAgencyID="ЄДРПОУ">43234323</ram:ID>
					<ram:Name>3674_test</ram:Name>
					<ram:RoleCode>OB</ram:RoleCode>
					<ram:PostalTradeAddress>
						<ram:PostcodeCode>468373</ram:PostcodeCode>
						<ram:StreetName>вул. МОлода, б.53</ram:StreetName>
						<ram:CityName>м. Житомир</ram:CityName>
						<ram:CountryID>UA</ram:CountryID>
						<ram:CountrySubDivisionName>Житомирська обл., Житомирський р-н</ram:CountrySubDivisionName>
					</ram:PostalTradeAddress>
					<ram:SpecifiedGovernmentRegistration></ram:SpecifiedGovernmentRegistration>
				</ram:NotifiedTradeParty>
				<ram:NotifiedTradeParty>
					<ram:ID schemeAgencyID="ЄДРПОУ">23462345</ram:ID>
					<ram:Name>Мій Експедитор</ram:Name>
					<ram:RoleCode>FW</ram:RoleCode>
					<ram:PostalTradeAddress>
						<ram:PostcodeCode>888888</ram:PostcodeCode>
						<ram:StreetName>Новий Ужгород</ram:StreetName>
						<ram:CityName>м. Ужгород</ram:CityName>
						<ram:CountryID>UA</ram:CountryID>
						<ram:CountrySubDivisionName>Закарпатська обл. Ужгородський р-н</ram:CountrySubDivisionName>
					</ram:PostalTradeAddress>
					<ram:SpecifiedGovernmentRegistration>
						<ram:ID>9864065748823</ram:ID>
						<ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
					</ram:SpecifiedGovernmentRegistration>
				</ram:NotifiedTradeParty>
				<ram:NotifiedTradeParty>
					<ram:ID schemeAgencyID="ЄДРПОУ">23232178</ram:ID>
					<ram:Name>Мій WH</ram:Name>
					<ram:RoleCode>WD</ram:RoleCode>
					<ram:PostalTradeAddress>
						<ram:PostcodeCode>7728382</ram:PostcodeCode>
						<ram:StreetName>Моя Адреса</ram:StreetName>
						<ram:CityName>c. Хороша</ram:CityName>
						<ram:CountryID>UA</ram:CountryID>
						<ram:CountrySubDivisionName>Вінницька обл. Вінницький р-н</ram:CountrySubDivisionName>
					</ram:PostalTradeAddress>
					<ram:SpecifiedGovernmentRegistration>
						<ram:ID>9864232613176</ram:ID>
						<ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
					</ram:SpecifiedGovernmentRegistration>
				</ram:NotifiedTradeParty>
				<ram:NotifiedTradeParty>
					<ram:ID schemeAgencyID="ЄДРПОУ">56523432</ram:ID>
					<ram:Name>Мій COP</ram:Name>
					<ram:RoleCode>COP</ram:RoleCode>
					<ram:PostalTradeAddress>
						<ram:PostcodeCode>46234523222</ram:PostcodeCode>
						<ram:StreetName>Моя Адреса</ram:StreetName>
						<ram:CityName>c. Непереможне</ram:CityName>
						<ram:CountryID>UA</ram:CountryID>
						<ram:CountrySubDivisionName>Дніпропетровська обл. Криворізький р-н</ram:CountrySubDivisionName>
					</ram:PostalTradeAddress>
					<ram:SpecifiedGovernmentRegistration>
						<ram:ID>9864232613183</ram:ID>
						<ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
					</ram:SpecifiedGovernmentRegistration>
				</ram:NotifiedTradeParty>
				<ram:CarrierAcceptanceLogisticsLocation>
					<ram:ID schemeAgencyID="КАТОТТГ">UA07060170160041154</ram:ID>
					<ram:Name>Володя Нова ГЛН</ram:Name>
					<ram:TypeCode>10</ram:TypeCode>
					<ram:Description>Україна, 456464, Волинська обл. Ковельський р-н, c. Річиця, вул. Атом, буд. 1</ram:Description>
					<ram:PhysicalGeographicalCoordinate>
						<ram:SystemID schemeAgencyID="GLN">9864065748076</ram:SystemID>
					</ram:PhysicalGeographicalCoordinate>
				</ram:CarrierAcceptanceLogisticsLocation>
				<ram:ConsigneeReceiptLogisticsLocation>
					<ram:ID schemeAgencyID="КАТОТТГ">UA07060170160041154</ram:ID>
					<ram:Name>Мій Одержувач</ram:Name>
					<ram:TypeCode>5</ram:TypeCode>
					<ram:Description>Україна, 734532, Волинська обл. Ковельський р-н, c. Річиця, б.145, вул. Зелена</ram:Description>
					<ram:PhysicalGeographicalCoordinate>
						<ram:SystemID schemeAgencyID="GLN">9864065748694</ram:SystemID>
					</ram:PhysicalGeographicalCoordinate>
				</ram:ConsigneeReceiptLogisticsLocation>
				<ram:DeliveryTransportEvent></ram:DeliveryTransportEvent>
				<ram:PickUpTransportEvent>
					<ram:CertifyingTradeParty>
						<ram:ID schemeAgencyID="РНОКПП">111111111111</ram:ID>
						<ram:Name>Post</ram:Name>
						<ram:RoleCode>CZ</ram:RoleCode>
						<ram:DefinedTradeContact>
							<ram:PersonName>Consignor</ram:PersonName>
							<ram:MobileTelephoneUniversalCommunication>
								<ram:CompleteNumber>380222222222</ram:CompleteNumber>
							</ram:MobileTelephoneUniversalCommunication>
							<ram:EmailURIUniversalCommunication>
								<ram:CompleteNumber>consignor@edin.ua</ram:CompleteNumber>
							</ram:EmailURIUniversalCommunication>
						</ram:DefinedTradeContact>
					</ram:CertifyingTradeParty>
				</ram:PickUpTransportEvent>
				<ram:IncludedSupplyChainConsignmentItem>
					<ram:SequenceNumeric>1</ram:SequenceNumeric>
					<ram:InvoiceAmount currencyID="UAH">4690</ram:InvoiceAmount>
					<ram:GrossWeightMeasure unitCode="KGM">555</ram:GrossWeightMeasure>
					<ram:TariffQuantity unitCode="UAH">3</ram:TariffQuantity>
					<ram:GlobalID schemeAgencyID="УКТЗЕД">234523</ram:GlobalID>
					<ram:NatureIdentificationTransportCargo>
						<ram:Identification>Name 1</ram:Identification>
					</ram:NatureIdentificationTransportCargo>
					<ram:ApplicableTransportDangerousGoods>
						<ram:UNDGIdentificationCode>234523</ram:UNDGIdentificationCode>
					</ram:ApplicableTransportDangerousGoods>
					<ram:AssociatedReferencedLogisticsTransportEquipment>
						<ram:ID>Номер контейнера</ram:ID>
					</ram:AssociatedReferencedLogisticsTransportEquipment>
					<ram:TransportLogisticsPackage>
						<ram:ItemQuantity>234</ram:ItemQuantity>
						<ram:TypeCode>CT</ram:TypeCode>
						<ram:Type>палета</ram:Type>
						<ram:PhysicalLogisticsShippingMarks>
							<ram:Marking>Назва транспортної упаковки</ram:Marking>
							<ram:BarcodeLogisticsLabel>
								<ram:ID>34623345</ram:ID>
							</ram:BarcodeLogisticsLabel>
						</ram:PhysicalLogisticsShippingMarks>
					</ram:TransportLogisticsPackage>
					<ram:ApplicableNote>
						<ram:ContentCode>VENDOR_CODE</ram:ContentCode>
						<ram:Content>6234</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>BUYER_CODE</ram:ContentCode>
						<ram:Content>452345</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>QUANTITY</ram:ContentCode>
						<ram:Content>2345</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>BASE_UOM</ram:ContentCode>
						<ram:Content>палета</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>PRICE_WITH_VAT</ram:ContentCode>
						<ram:Content>2</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>SUM_WITHOUT_VAT</ram:ContentCode>
						<ram:Content>7035</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>NET_WEIGHT</ram:ContentCode>
						<ram:Content>11</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>RETURN_TARE</ram:ContentCode>
						<ram:Content>Зворотня тара</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>RTP_TYPE</ram:ContentCode>
						<ram:Content>Тип транспортної упаковки</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>RTP_QUANTITY</ram:ContentCode>
						<ram:Content>42</ram:Content>
					</ram:ApplicableNote>
				</ram:IncludedSupplyChainConsignmentItem>
				<ram:UtilizedLogisticsTransportEquipment>
					<ram:ID>bb77767AB</ram:ID>
					<ram:SettingTransportSettingTemperature>
						<ram:MinimumValueMeasure unitCode="CEL">11</ram:MinimumValueMeasure>
						<ram:MaximumValueMeasure unitCode="CEL">22</ram:MaximumValueMeasure>
					</ram:SettingTransportSettingTemperature>
					<ram:ApplicableNote>
						<ram:ContentCode>BRAND</ram:ContentCode>
						<ram:Content>auto_from_act_brand</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>MODEL</ram:ContentCode>
						<ram:Content>auto_from_act_model</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>COLOR</ram:ContentCode>
						<ram:Content>black_color</ram:Content>
					</ram:ApplicableNote>
					<ram:ApplicableNote>
						<ram:ContentCode>TYPE</ram:ContentCode>
						<ram:Content>auto_from_act_type</ram:Content>
					</ram:ApplicableNote>
				</ram:UtilizedLogisticsTransportEquipment>
				<ram:DeliveryInstructions>
					<ram:Description>покілометровий тариф</ram:Description>
					<ram:DescriptionCode>TRANSPORTATION_TYPE</ram:DescriptionCode>
				</ram:DeliveryInstructions>
			</SpecifiedSupplyChainConsignment>
		</eCMR>
		<UaSignatureStorage>
			<Signature>
				<SigningPartyRoleCode>CZ</SigningPartyRoleCode>
				<PartySignature>MIIhZQYJK...r8OD+8LBU5</PartySignature>
				<Name>Іванов Іван Іванович</Name>
				<Position>1</Position>
				<SpecifiedTaxRegistration>
					<ram:ID>1234567890</ram:ID>
				</SpecifiedTaxRegistration>
			</Signature>
		</UaSignatureStorage>
	</UAECMR>

**RESPONSE**

В тілі **відповіді** (json) передається **doc_uuid** - унікальний ідентифікатор документа на платформі: 

.. code:: json

  {"doc_uuid":"6cd39021-bb80-4eb6-a6f9-03f76a2a9d54"}

.. підказка: ідея в тому що клієнт повністю все тіло збирає сам і відправляє одним запитом, однак альтернативно тіло можливо створити:

   * `Створити чернетку <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/CreateEcmrEttn.html>`__ 
   * `Отримати ecmr тіло <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEcmrDocumentBody.html>`__ 
   * `Підписати ecmr тіло <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/SaveEcmrSign.html>`__
   * `Отримати xml тіло <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEcmrDocumentBody.html>`__