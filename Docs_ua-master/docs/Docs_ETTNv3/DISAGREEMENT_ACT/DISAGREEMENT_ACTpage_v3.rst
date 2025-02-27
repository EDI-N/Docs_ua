##########################################################################################################################
**"Акт розбіжностей про вантаж"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=93274651

.. important::
   Зверніть увагу, що поля в xml та `в json форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/DISAGREEMENT_ACT/DISAGREEMENT_ACTpage_v3_json.html>`__ відрізняються!

**XML:**

.. code:: xml

   <UAECMR_ACT xmlns:qdt="urn:un:unece:uncefact:data:standard:QualifiedDataType:103" xmlns:ram="urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103" xmlns:uas="urn:ua:signatures:SignaturesExtensions:1" xmlns:udt="urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27">
      <ACT>
         <ExchangedDocumentContext>
               <ram:SpecifiedTransactionID>0</ram:SpecifiedTransactionID>
               <ram:BusinessProcessSpecifiedDocumentContextParameter>
                  <ram:ID>urn:ua:e-transport.gov.ua:act:01</ram:ID>
               </ram:BusinessProcessSpecifiedDocumentContextParameter>
               <ram:GuidelineSpecifiedDocumentContextParameter>
                  <ram:ID>urn:ua:e-transport.gov.ua:act:01:disagreement:001</ram:ID>
               </ram:GuidelineSpecifiedDocumentContextParameter>
         </ExchangedDocumentContext>
         <ExchangedDocument>
               <ram:ID>3739 всі різні</ram:ID>
               <ram:IssueDateTime>
                  <udt:DateTime>2023-06-29T08:01:00.000Z</udt:DateTime>
               </ram:IssueDateTime>
               <ram:IssueLogisticsLocation>
                  <ram:Name>Місце складання документу</ram:Name>
                  <ram:Description>ккк</ram:Description>
               </ram:IssueLogisticsLocation>
         </ExchangedDocument>
         <DisagreementActPayload>
               <PreviousAdministrativeReferencedDocument>
                  <ram:TypeCode>730</ram:TypeCode>
                  <ram:ID>1b9b021e-c3fd-4b89-a858-af25d67db3ab</ram:ID>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2023-06-29T07:58:00.000Z</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
               </PreviousAdministrativeReferencedDocument>
               <ConsigneeTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">101010140</ram:ID>
                  <ram:Name>МСК ВантОдержувач</ram:Name>
                  <ram:RoleCode>CN</ram:RoleCode>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>24452</ram:PostcodeCode>
                     <ram:StreetName>вул. Івана Франка, 20, офіс 101 а</ram:StreetName>
                     <ram:CityName>м. Хуст</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>Закарпатська обл,  Хустський р-н</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065737957</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
               </ConsigneeTradeParty>
               <CarrierTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">12345678</ram:ID>
                  <ram:Name>МСК Перевізник</ram:Name>
                  <ram:RoleCode>CA</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Перший Водій Батькович</ram:PersonName>
                     <ram:TelephoneUniversalCommunication>
                           <ram:CompleteNumber>380544472828</ram:CompleteNumber>
                     </ram:TelephoneUniversalCommunication>
                     <ram:EmailURIUniversalCommunication>
                           <ram:CompleteNumber>vod01@test.tst</ram:CompleteNumber>
                     </ram:EmailURIUniversalCommunication>
                  </ram:DefinedTradeContact>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>74589</ram:PostcodeCode>
                     <ram:StreetName>пл. Тараса Чмута, буд. 1, офіс 1</ram:StreetName>
                     <ram:CityName>м. Буськ</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>Львівська обл,  Золочівський р-н</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedTaxRegistration>
                     <ram:ID>1111111101</ram:ID>
                  </ram:SpecifiedTaxRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>VOD010101</ram:ID>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065745952</ram:ID>
                     <ram:TypeCode>DRIVER_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065745709</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
               </CarrierTradeParty>
               <ConsignorTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">101010139</ram:ID>
                  <ram:Name>МСК ВантВідправник</ram:Name>
                  <ram:RoleCode>CZ</ram:RoleCode>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>19114</ram:PostcodeCode>
                     <ram:StreetName>вул. Миру, буд. 15, офіс 22</ram:StreetName>
                     <ram:CityName>c. Оржів</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>Житомирська обл,  Коростенський р-н</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065741329</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
               </ConsignorTradeParty>
               <DisagreementSubjectSupplyChainConsignmentItem>
                  <SequenceNumeric>1</SequenceNumeric>
                  <NatureIdentificationTransportCargo>
                     <ram:Identification>товар №1</ram:Identification>
                  </NatureIdentificationTransportCargo>
                  <TransportLogisticsPackageType>штука</TransportLogisticsPackageType>
                  <DisagreementItemQuantity>
                     <OriginalItemQuantity>111</OriginalItemQuantity>
                     <ActualItemQuantity>111</ActualItemQuantity>
                     <DeltaItemQuantity>
                           <Quantity>0</Quantity>
                     </DeltaItemQuantity>
                  </DisagreementItemQuantity>
                  <DisagreementGrossWeightMeasure>
                     <OriginalGrossWeightMeasure unitCode="KGM">111</OriginalGrossWeightMeasure>
                     <ActualGrossWeightMeasure unitCode="KGM">111</ActualGrossWeightMeasure>
                     <DeltaGrossWeightMeasure>
                           <Measure unitCode="KGM">0</Measure>
                     </DeltaGrossWeightMeasure>
                  </DisagreementGrossWeightMeasure>
                  <DisagreementInvoiceAmount>
                     <OriginalInvoiceAmount currencyID="UAH">111</OriginalInvoiceAmount>
                     <ActualInvoiceAmount currencyID="UAH">111</ActualInvoiceAmount>
                     <DeltaInvoiceAmount>
                           <Amount currencyID="UAH">0</Amount>
                     </DeltaInvoiceAmount>
                  </DisagreementInvoiceAmount>
               </DisagreementSubjectSupplyChainConsignmentItem>
               <DisagreementSubjectSupplyChainConsignmentItem>
                  <SequenceNumeric>2</SequenceNumeric>
                  <NatureIdentificationTransportCargo>
                     <ram:Identification>товар №2</ram:Identification>
                  </NatureIdentificationTransportCargo>
                  <TransportLogisticsPackageType>штука</TransportLogisticsPackageType>
                  <DisagreementItemQuantity>
                     <OriginalItemQuantity>222</OriginalItemQuantity>
                     <ActualItemQuantity>222</ActualItemQuantity>
                     <DeltaItemQuantity>
                           <Quantity>0</Quantity>
                     </DeltaItemQuantity>
                  </DisagreementItemQuantity>
                  <DisagreementGrossWeightMeasure>
                     <OriginalGrossWeightMeasure unitCode="KGM">222</OriginalGrossWeightMeasure>
                     <ActualGrossWeightMeasure unitCode="KGM">222</ActualGrossWeightMeasure>
                     <DeltaGrossWeightMeasure>
                           <Measure unitCode="KGM">0</Measure>
                     </DeltaGrossWeightMeasure>
                  </DisagreementGrossWeightMeasure>
                  <DisagreementInvoiceAmount>
                     <OriginalInvoiceAmount currencyID="UAH">222</OriginalInvoiceAmount>
                     <ActualInvoiceAmount currencyID="UAH">222</ActualInvoiceAmount>
                     <DeltaInvoiceAmount>
                           <Amount currencyID="UAH">0</Amount>
                     </DeltaInvoiceAmount>
                  </DisagreementInvoiceAmount>
               </DisagreementSubjectSupplyChainConsignmentItem>
               <DisagreementSubjectSupplyChainConsignmentSummary>
                  <OriginalGrossWeightMeasure unitCode="KGM">333.00</OriginalGrossWeightMeasure>
                  <DeltaGrossWeightMeasure unitCode="KGM">0</DeltaGrossWeightMeasure>
                  <OriginalInvoiceAmount currencyID="UAH">333.00</OriginalInvoiceAmount>
                  <DeltaInvoiceAmount currencyID="UAH">0</DeltaInvoiceAmount>
               </DisagreementSubjectSupplyChainConsignmentSummary>
               <QualityCharacteristicsDisagreement>
                  <AffixedLogisticsSeal>
                     <ram:ID>пл-авто-ттн</ram:ID>
                  </AffixedLogisticsSeal>
                  <AffixedLogisticsSeal>
                     <ram:ID>пл-нп-ттн</ram:ID>
                  </AffixedLogisticsSeal>
                  <ApplicableTransportSettingTemperature>
                     <ram:MinimumValueMeasure unitCode="CEL">-22</ram:MinimumValueMeasure>
                     <ram:MaximumValueMeasure unitCode="CEL">-15</ram:MaximumValueMeasure>
                  </ApplicableTransportSettingTemperature>
                  <OtherDisagreementNotes>щось мене не влаштовує</OtherDisagreementNotes>
               </QualityCharacteristicsDisagreement>
               <ConsigneeNotes>щось мене не влаштовує</ConsigneeNotes>
               <ClaimNotes>щось мене не влаштовує</ClaimNotes>
         </DisagreementActPayload>
         <CertifyingPartyPayload>
               <CertifyingTradeParty>
                  <ram:ID schemeAgencyID="РНОКПП">333333333333</ram:ID>
                  <ram:Name>в.о. Вантажоодержувача</ram:Name>
                  <ram:RoleCode>CN</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>котик Васька</ram:PersonName>
                     <ram:MobileTelephoneUniversalCommunication>
                           <ram:CompleteNumber>380333333333</ram:CompleteNumber>
                     </ram:MobileTelephoneUniversalCommunication>
                  </ram:DefinedTradeContact>
               </CertifyingTradeParty>
         </CertifyingPartyPayload>
      </ACT>
   </UAECMR_ACT>


.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTBq7ko1S8vmDYo3ObFd0ezRY-zO7KmMz4M4KVSPyFkTpA7UPp8RaSZ9N19vlpeEQ/pubhtml?gid=2090499753&single=true" width="1100" height="4750" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

.. data from table (remember to renew time to time)

.. raw:: html

   <!-- <div>№ з/п,Параметр²,Тип¹,Формат,Опис
   ,UAECMR_ACT,M,,Початок документа
   I,ACT,M,,(початок змісту документа)
   1,ExchangedDocumentContext,M,,Технічні дані
   1.1,ram:SpecifiedTransactionID,M,string,Номер версії документа (транзакції) в ланцюгу підписання документів
   1.2.1,ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID,M,string,код документа
   1.3.1,ram:GuidelineSpecifiedDocumentContextParameter.ram:ID,M,unsignedByte,підтип документа
   2,ExchangedDocument,M,,Реквізити Акта
   2.1,ram:ID,M,string,номер документа
   2.2.1,ram:IssueDateTime.udt:DateTime,M,datetime (2021-12-13T14:19:23+02:00),Дата і час складання Акта
   2.3,ram:Remarks,O,string,Інші примітки
   2.4.1,ram:IssueLogisticsLocation.ram:Name,M,string,Найменування місця складання Акта
   2.4.2,ram:IssueLogisticsLocation.ram:Description,M,string,Опис (адреса) місця складання Акта
   3,DisagreementActPayload,M,,Зміст «Акта розбіжностей про вантаж»
   3.1,PreviousAdministrativeReferencedDocument (TypeCode=730),M,,"Інформація про е-ТТН, для якої складається акт"
   3.1.1,ram:TypeCode,M,decimal,Тип документа (730 - ТТН). Довідник кодів документів
   3.1.2,ram:ID,M,string,Номер документа-підстави (ТТН); має відповідати номеру документа ExchangedDocument.ID еТТН
   3.1.3.1,ram:FormattedIssueDateTime.qdt:DateTimeString,M,datetime (2021-12-13T14:19:23+02:00),Дата та час документа-підстави (ТТН); має відповідати даті документа ExchangedDocument.IssueDateTime еТТН
   3.1.4,ram:AttachedSpecifiedBinaryFile,M,,"Дані е-ТТН, для якої складається акт"
   3.1.4.1,ram:ID,M,string,Ідентифікатор (guid) документа-підстави (ТТН); має відповідати document.id еТТН в ЦБД (значення ettnId з методу Отримання списку подій з ЦБД = значення external_doc_id Отримання мета-даних документа)
   3.1.4.2,ram:URIID,O,string,посилання на документ
   3.1.4.3,ram:MIMECode,O,string,MIME типізація
   3.1.4.4,ram:SizeMeasure,O,long,розмір файлу в байтах
   3.2,PreviousAdministrativeReferencedDocument,-/M,,"Інформація про попередній акт, у випадку наступної транзакції"
   3.2.1,ram:TypeCode,M,decimal,Тип документа. Довідник кодів документів
   3.2.2,ram:ID,M,string,Номер документа-підстави (Акт); має відповідати номеру документа ExchangedDocument.ID Акта
   3.2.3.1,ram:FormattedIssueDateTime.qdt:DateTimeString,M,datetime (2021-12-13T14:19:23+02:00),Дата та час документа-підстави (Акта)
   3.3,ConsigneeTradeParty,M,,Вантажоодержувач
   3.3.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажоодержувача
   3.3.1.2,ram:ID.value,M,decimal,Значення
   3.3.2,ram:Name,M,string,"Повне найменування Вантажоодержувача (юридичної особи або ПІБ фізичної-особи підприємця), що проводить одержання (оприбуткування) перелічених в ТТН товарно-матеріальних цінностей"
   3.3.3,ram:RoleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
   3.3.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.3.4.1,ram:PersonName,O,string,ПІБ
   3.3.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.3.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.3.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.3.5,ram:PostalTradeAddress,M, ,Юридична адреса Вантажоодержувача
   3.3.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.3.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.3.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.3.5.4,ram:CountryID,M,string,Країна (UA)
   3.3.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.3.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.3.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Вантажоодержувача (блок обов'язковий до заповнення для відправника транзакції)
   3.3.7.1,ram:ID,M/O,decimal,GLN Вантажоодержувача (поле обов'язкове до заповнення для відправника транзакції)
   3.3.7.2,ram:TypeCode,O,string,"Код типу:

   * TRADEPARTY_GLN"
   3.4,CarrierTradeParty,M,,Перевізник
   3.4.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Перевізника
   3.4.1.2,ram:ID.value,M,decimal,Значення
   3.4.2,ram:Name,M,string,"Повне найменування Перевізника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник уклав договір на надання транспортних послуг"
   3.4.3,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   3.4.4,ram:DefinedTradeContact,M, ,Контакти відповідального представника
   3.4.4.1,ram:PersonName,M,string,"ПІБ водія, що керуватиме ТЗ при перевезенні вантажу"
   3.4.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.4.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.4.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.4.5,ram:PostalTradeAddress,M, ,Юридична адреса Перевізника
   3.4.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.4.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.4.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.4.5.4,ram:CountryID,M,string,Країна (UA)
   3.4.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.4.6.1,ram:SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП відповідальної особи (водія)
   3.4.7,ram:SpecifiedGovernmentRegistration,M, ,Посвідчення Водія / GLN Водія / GLN компанії-учасника
   3.4.7.1,ram:ID,M/O,"* string
   * decimal при ram:TypeCode=DRIVER_GLN / TRADEPARTY_GLN","* Серія та номер водійського посвідчення Водія (поле обов'язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456
   * для ram:TypeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)
   * для ram:TypeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов'язкове до заповнення для відправника транзакції)"
   3.4.7.2,ram:TypeCode,O,string,"Код типу:

   * DRIVER_GLN
   * TRADEPARTY_GLN"
   3.5,ConsignorTradeParty,M,,Вантажовідправник
   3.5.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажовідправника
   3.5.1.2,ram:ID.value,M,decimal,Значення
   3.5.2,ram:Name,M,string,"Повне найменування Вантажовідправника (юридичної особи або ПІБ фізичної-особи підприємця), що проводить відвантаження (списання) перелічених в ТТН товарно-матеріальних цінностей"
   3.5.3,ram:RoleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
   3.5.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.5.4.1,ram:PersonName,O,string,ПІБ
   3.5.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.5.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.5.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.5.5,ram:PostalTradeAddress,M, ,Юридична адреса Вантажовідправника
   3.5.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.5.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.5.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.5.5.4,ram:CountryID,M,string,Країна (UA)
   3.5.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.5.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.5.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Вантажовідправника (блок обов'язковий до заповнення для відправника транзакції)
   3.5.7.1,ram:ID,M/O,decimal,GLN Вантажовідправника (поле обов'язкове до заповнення для відправника транзакції)
   3.5.7.2,ram:TypeCode,O,string,"Код типу:

   * TRADEPARTY_GLN"
   3.6,DisagreementSubjectSupplyChainConsignmentItem,M,,Розбіжності щодо кількісних характеристик вантажу
   3.6.1,SequenceNumeric,M,int,Порядковий номер рядка в таблиці
   3.6.2.1,NatureIdentificationTransportCargo.ram:Identification,M,string,Найменування вантажу (номер контейнера) за ТТН
   3.6.3,TransportLogisticsPackageType,M,string,Одиниця виміру
   3.6.4,DisagreementItemQuantity,O,,Відхилення за кількістю місць
   3.6.4.1,OriginalItemQuantity,M,string,Кількість місць за ТТН
   3.6.4.2,ActualItemQuantity,O,string,Кількість місць фактична
   3.6.4.3.1,DeltaItemQuantity.Quantity,O,string,"Кількість місць Відхилення. Різниця між фактом та даними з ТТН - розраховується системою автоматично і тільки для тих даних, за якими вказано фактичне значення"
   3.6.4.3.2,DeltaItemQuantity.Explanation,O,string,"причина відхилення за кількістю місць (недостача/надлишок, бій тощо)"
   3.6.5,DisagreementGrossWeightMeasure,O,,"Відхилення за масою брутто, кг"
   3.6.5.1,OriginalGrossWeightMeasure,M,,Маса брутто за ТТН
   3.6.5.1.1,unitCode,M,string,код одиниці виміру (KGM)
   3.6.5.1.2,value,M,decimal,"Значення; точність=0,1"
   3.6.5.2,ActualGrossWeightMeasure,O,,Маса брутто Фактична
   3.6.5.2.1,unitCode,M,string,код одиниці виміру (KGM)
   3.6.5.2.2,value,M,decimal,"Значення; точність=0,1"
   3.6.5.3,DeltaGrossWeightMeasure,O,,Відхилення
   3.6.5.3.1.1,Measure.unitCode,M,string,код одиниці виміру (KGM)
   3.6.5.3.1.2,Measure.value,M,decimal,"Значення; точність=0,1"
   3.6.5.3.2,Explanation,O,string,причина відхилення за масою (недостача/надлишок тощо)
   3.6.6,DisagreementInvoiceAmount,O,,Відхилення за сумою
   3.6.6.1,OriginalInvoiceAmount,M,,Загальна сума з ПДВ за ТТН
   3.6.6.1.1,currencyId,M,string,Тризначний код валюти (UAH)
   3.6.6.1.2,value,M,decimal,"Значення; точність=0,01"
   3.6.6.2,ActualInvoiceAmount,O,,Загальна сума з ПДВ Фактична
   3.6.6.2.1,currencyId,M,string,Тризначний код валюти (UAH)
   3.6.6.2.2,value,M,decimal,"Значення; точність=0,01"
   3.6.6.3,DeltaInvoiceAmount,O,,Відхилення
   3.6.6.3.1.1,Amount.currencyId,M,string,Тризначний код валюти (UAH)
   3.6.6.3.1.2,Amount.value,M,decimal,"Значення; точність=0,01"
   3.6.6.3.2,Explanation,O,string,причина відхилення за сумою
   3.6.7,DisagreementOtherNotes,O,string,Інші зауваження. Коментарі щодо виявлених розбіжностей по кожному рядку (найменуванню вантажу)
   3.7,DisagreementSubjectSupplyChainConsignmentSummary,M,,Розбіжності щодо кількісних характеристик вантажу (сумарні показники)
   3.7.1,OriginalGrossWeightMeasure,M,,"Разом Маса брутто за ТТН, кг"
   3.7.1.1,unitCode,M,string,код одиниці виміру (KGM)
   3.7.1.2,value,M,decimal,"Значення; точність=0,1"
   3.7.2,DeltaGrossWeightMeasure,M,,"Разом Маса брутто Відхилення, кг"
   3.7.2.1,unitCode,M,string,код одиниці виміру (KGM)
   3.7.2.2,value,M,decimal,"Значення; точність=0,1"
   3.7.3,OriginalInvoiceAmount,M,,"Разом Загальна сума з ПДВ за ТТН, грн."
   3.7.3.1,currencyId,M,string,Тризначний код валюти (UAH)
   3.7.3.2,value,M,decimal,"Значення; точність=0,01"
   3.7.4,DeltaInvoiceAmount,M,,"Разом Загальна сума з ПДВ Відхилення, грн."
   3.7.4.1,currencyId,M,string,Тризначний код валюти (UAH)
   3.7.4.2,value,M,decimal,"Значення; точність=0,01"
   3.8,QualityCharacteristicsDisagreement,O,,Розбіжності щодо якісних характеристик вантажу
   3.8.1.1,AffixedLogisticsSeal.ram:ID,O,string,Номер пломби згідно з ТТН
   3.8.2,AffixedLogisticsSealNotes,O,string,Відомості про пошкодження пломби
   3.8.3.1,ApplicableTransportSettingTemperature.ram:MinimumValueMeasure,O,,Температурний режим згідно з ТТН. Мінімальне значення температури
   3.8.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.8.3.1.2,value,O,decimal,Значення
   3.8.3.2,ApplicableTransportSettingTemperature.ram:MaximumValueMeasure,O,,Температурний режим згідно з ТТН. Максимальне значення температури
   3.8.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.8.3.2.2,value,O,decimal,Значення
   3.8.4,ApplicableTransportSettingTemperatureNotes,O,string,Відомості про недотримання температурного режиму
   3.8.5,PackagingDamageDisagreementNotes,O,string,"Відомості про пошкодження тари (опис пошкоджень тари, пакування, маркування тощо)"
   3.8.6,OtherDisagreementNotes,O,string,Відомості про інші розбіжності (опис інших невідповідностей у характеристиках вантажу)
   3.9,ConsigneeNotes,M,string,"Короткий або повний опис причин складання акту (наприклад, виявлено розбіжності щодо якісних та/або кількісних характеристик отриманого вантажу тощо)"
   3.10,ClaimNotes,M,string,"Висновок (вимоги щодо вирішення розбіжностей). Вказується інформація про те, чи слід пред’являти будь-кому претензії і якщо так, то кому саме"
   3.11,CarrierNotes,O,string,Особливі відмітки (Перевізник). Інформація щодо незгоди зі змістом Акта (Перевізник)
   4,CertifyingPartyPayload,M,,Інформація про відповідальних осіб
   4.1,CertifyingTradeParty (RoleCode=CN),O,,Інформація про відповідальних осіб Вантажоодержувача
   4.1.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.1.1.2,ram:ID.value,O,decimal,Значення
   4.1.2,ram:Name,M,string,Посада відповідальної особи Вантажоодержувача
   4.1.3,ram:RoleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
   4.1.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Вантажоодержувача
   4.2,CertifyingTradeParty (RoleCode=CA),M,,Інформація про Перевізника
   4.2.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.2.1.2,ram:ID.value,O,decimal,Значення
   4.2.2,ram:Name,M,string,Посада Перевізника
   4.2.3,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   4.2.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ Перевізника
   4.3,CertifyingTradeParty (RoleCode=CZ),M,,Інформація про відповідальних осіб Вантажовідправника
   4.3.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.3.1.2,ram:ID.value,O,decimal,Значення
   4.3.2,ram:Name,M,string,Посада відповідальної особи Вантажовідправника
   4.3.3,ram:RoleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
   4.3.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Вантажовідправника
   II,UaSignatureStorage,M,,Підписи
   5,Signature (SigningPartyRoleCode=CN),O,,КЕП Вантажоодержувача
   5.1,SigningPartyRoleCode,M,string,Роль підписанта (Вантажоодержувач - CN). Довідник ролей
   5.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   5.3,Name,M,string,ПІБ підписанта (відповідальної особи Вантажоодержувача)
   5.4,Position,O,string,Посада підписанта (відповідальної особи Вантажоодержувача)
   5.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (відповідальної особи Вантажоодержувача)
   6,Signature (SigningPartyRoleCode=CA),M,,КЕП Перевізника
   6.1,SigningPartyRoleCode,M,string,Роль підписанта (Перевізник - CA). Довідник ролей
   6.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   6.3,Name,M,string,ПІБ підписанта (Перевізника)
   6.4,Position,O,string,Посада підписанта (Перевізника)
   6.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Перевізника)
   7,Signature (SigningPartyRoleCode=CZ),M,,КЕП Вантажовідправника
   7.1,SigningPartyRoleCode,M,string,Роль підписанта (Вантажовідправник - CZ). Довідник ролей
   7.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   7.3,Name,M,string,ПІБ підписанта (Вантажовідправника)
   7.4,Position,O,string,Посада підписанта (Вантажовідправника)
   7.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Вантажовідправника)

.. old style

   Таблиця 1 - Специфікація "Акта розбіжностей про вантаж" (XML)

   .. csv-table:: 
   :file: for_csv/disagreement_act_v3.csv
   :widths:  1, 5, 12, 41
   :header-rows: 1
   :stub-columns: 0

   :download:`Приклад "Акта розбіжностей про вантаж"<examples/disagreement_act_v3n.xml>`


