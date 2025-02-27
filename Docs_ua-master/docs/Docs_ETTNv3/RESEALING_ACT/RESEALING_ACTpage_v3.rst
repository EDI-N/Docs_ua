##########################################################################################################################
**"Акт перепломбування"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=740795377

.. important::
   Зверніть увагу, що поля в xml та `в json форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/RESEALING_ACT/RESEALING_ACTpage_v3_json.html>`__ відрізняються!

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
                  <ram:ID>urn:ua:e-transport.gov.ua:act:01:resealing:001</ram:ID>
               </ram:GuidelineSpecifiedDocumentContextParameter>
         </ExchangedDocumentContext>
         <ExchangedDocument>
               <ram:ID>3739 всі різні</ram:ID>
               <ram:IssueDateTime>
                  <udt:DateTime>2023-06-28T15:24:00.000Z</udt:DateTime>
               </ram:IssueDateTime>
               <ram:IssueLogisticsLocation>
                  <ram:Name>Місце складання документу</ram:Name>
                  <ram:Description>к</ram:Description>
               </ram:IssueLogisticsLocation>
         </ExchangedDocument>
         <ResealingActPayload>
               <PreviousAdministrativeReferencedDocument>
                  <ram:TypeCode>730</ram:TypeCode>
                  <ram:ID>0d1dafd1-93d4-4ee1-95ff-b76546628dc3</ram:ID>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2023-06-28T12:08:00.000Z</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
               </PreviousAdministrativeReferencedDocument>
               <CustomerTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">65900960</ram:ID>
                  <ram:Name>МСК Замовник</ram:Name>
                  <ram:RoleCode>OB</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Саймон Кет</ram:PersonName>
                     <ram:MobileTelephoneUniversalCommunication>
                           <ram:CompleteNumber>380444444444</ram:CompleteNumber>
                     </ram:MobileTelephoneUniversalCommunication>
                  </ram:DefinedTradeContact>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>84579</ram:PostcodeCode>
                     <ram:StreetName>вул. Свободи, буд. 11, офіс 155</ram:StreetName>
                     <ram:CityName>м. Київ</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>м. Київ</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedTaxRegistration>
                     <ram:ID>444444444444</ram:ID>
                  </ram:SpecifiedTaxRegistration>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065737902</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
               </CustomerTradeParty>
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
               <OriginalUtilizedLogisticsTransportEquipment>
                  <ram:ID>аа0101аа</ram:ID>
                  <ram:AffixedLogisticsSeal>
                     <ram:ID>пл-авто-ттн</ram:ID>
                  </ram:AffixedLogisticsSeal>
                  <ram:SettingTransportSettingTemperature>
                     <ram:MinimumValueMeasure unitCode="CEL">-22</ram:MinimumValueMeasure>
                     <ram:MaximumValueMeasure unitCode="CEL">-15</ram:MaximumValueMeasure>
                  </ram:SettingTransportSettingTemperature>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BRAND</ram:ContentCode>
                     <ram:Content>марка авто</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>MODEL</ram:ContentCode>
                     <ram:Content>модель авто</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>COLOR</ram:ContentCode>
                     <ram:Content>колір авто</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TYPE</ram:ContentCode>
                     <ram:Content>тип авто</ram:Content>
                  </ram:ApplicableNote>
               </OriginalUtilizedLogisticsTransportEquipment>
               <OriginalUtilizedLogisticsTransportEquipment>
                  <ram:ID>нп1717нп</ram:ID>
                  <ram:CategoryCode>TE</ram:CategoryCode>
                  <ram:CharacteristicCode>17</ram:CharacteristicCode>
                  <ram:AffixedLogisticsSeal>
                     <ram:ID>пл-нп-ттн</ram:ID>
                  </ram:AffixedLogisticsSeal>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BRAND</ram:ContentCode>
                     <ram:Content>марка напівпричепу</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>MODEL</ram:ContentCode>
                     <ram:Content>модель напівпричепу</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TYPE</ram:ContentCode>
                     <ram:Content>тип напівпричепу</ram:Content>
                  </ram:ApplicableNote>
               </OriginalUtilizedLogisticsTransportEquipment>
               <ResealedUtilizedLogisticsTransportEquipment>
                  <ram:ID>аа0101аа</ram:ID>
                  <ram:AffixedLogisticsSeal>
                     <ram:ID>нова пломба</ram:ID>
                  </ram:AffixedLogisticsSeal>
                  <ram:SettingTransportSettingTemperature>
                     <ram:MinimumValueMeasure unitCode="CEL">-22</ram:MinimumValueMeasure>
                     <ram:MaximumValueMeasure unitCode="CEL">-15</ram:MaximumValueMeasure>
                  </ram:SettingTransportSettingTemperature>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BRAND</ram:ContentCode>
                     <ram:Content>марка авто</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>MODEL</ram:ContentCode>
                     <ram:Content>модель авто</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>COLOR</ram:ContentCode>
                     <ram:Content>колір авто</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TYPE</ram:ContentCode>
                     <ram:Content>тип авто</ram:Content>
                  </ram:ApplicableNote>
               </ResealedUtilizedLogisticsTransportEquipment>
               <ResealedUtilizedLogisticsTransportEquipment>
                  <ram:ID>нп1717нп</ram:ID>
                  <ram:CategoryCode>TE</ram:CategoryCode>
                  <ram:CharacteristicCode>17</ram:CharacteristicCode>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BRAND</ram:ContentCode>
                     <ram:Content>марка напівпричепу</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>MODEL</ram:ContentCode>
                     <ram:Content>модель напівпричепу</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>TYPE</ram:ContentCode>
                     <ram:Content>тип напівпричепу</ram:Content>
                  </ram:ApplicableNote>
               </ResealedUtilizedLogisticsTransportEquipment>
               <CustomerNotes>кк</CustomerNotes>
         </ResealingActPayload>
         <CertifyingPartyPayload>
               <CertifyingTradeParty>
                  <ram:ID schemeAgencyID="РНОКПП">444444444444</ram:ID>
                  <ram:Name>в.о. Замовника</ram:Name>
                  <ram:RoleCode>OB</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Саймон Кет</ram:PersonName>
                     <ram:MobileTelephoneUniversalCommunication>
                           <ram:CompleteNumber>380444444444</ram:CompleteNumber>
                     </ram:MobileTelephoneUniversalCommunication>
                  </ram:DefinedTradeContact>
               </CertifyingTradeParty>
         </CertifyingPartyPayload>
      </ACT>
   </UAECMR_ACT>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTBq7ko1S8vmDYo3ObFd0ezRY-zO7KmMz4M4KVSPyFkTpA7UPp8RaSZ9N19vlpeEQ/pubhtml?gid=1593635642&single=true" width="1100" height="4350" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   3,ResealingActPayload,M,,Зміст «Акта перепломбування»
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
   3.3,CustomerTradeParty,M,,Замовник
   3.3.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Замовника
   3.3.1.2,ram:ID.value,M,decimal,Значення
   3.3.2,ram:Name,M,string,"Повне найменування Замовника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, що проводить оплату транспортної роботи і послуг"
   3.3.3,ram:RoleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
   3.3.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.3.4.1,ram:PersonName,O,string,ПІБ
   3.3.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.3.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.3.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.3.5,ram:PostalTradeAddress,M, ,Юридична адреса Замовника
   3.3.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.3.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.3.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.3.5.4,ram:CountryID,M,string,Країна (UA)
   3.3.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.3.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.3.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Замовника (блок обов'язковий до заповнення для відправника транзакції)
   3.3.7.1,ram:ID,M/O,decimal,GLN Замовника (поле обов'язкове до заповнення для відправника транзакції)
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
   3.5,OriginalUtilizedLogisticsTransportEquipment,M,,"Автомобіль, що розвантажується"
   3.5.1,ram:ID,M,string,Реєстраційний номер автомобіля згідно з техпаспортом укр.номери: має відповідати одному з патернів для автомобільних номерних знаків єврономери: без валідації
   3.5.2.1,ram:AffixedLogisticsSeal.ram:ID,M,string,"Номер пломби, якою проводилося пломбування автомобіля"
   3.5.3,ram:SettingTransportSettingTemperature,O,,Інструкції з експлуатації
   3.5.3.1,ram:MinimumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
   3.5.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.5.3.1.2,value,O,decimal,Значення
   3.5.3.2,ram:MaximumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
   3.5.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.5.3.2.2,value,O,decimal,Значення
   3.5.4.1,ram:ApplicableNote (з кодом BRAND).ram:ContentCode,M,string,Код BRAND
   3.5.4.2,ram:ApplicableNote (з кодом BRAND).ram:Content,M,string,Марка автомобіля згідно з техпаспортом
   3.5.5.1,ram:ApplicableNote (з кодом MODEL).ram:ContentCode,M,string,Код MODEL
   3.5.5.2,ram:ApplicableNote (з кодом MODEL).ram:Content,M,string,Модель автомобіля згідно з техпаспортом
   3.6,OriginalUtilizedLogisticsTransportEquipment (CategoryCode=TE),O,,"Причіп/напівпричіп, що розвантажується"
   3.6.1,ram:ID,O,string,Реєстраційний номер причіпа/напівпричіпа згідно з техпаспортом
   3.6.2,ram:CategoryCode,O,string,Тип TE - Причіп/напівпричіп
   3.6.3,ram:CharacteristicCode,O,string,Код визначення Причіп/напівпричіп: 14 - Причіп 17 - Напівпричіп
   3.6.4.1,ram:AffixedLogisticsSeal.ram:ID,O,string,"Номер пломби, якою проводилося пломбування причіпа/напівпричіпа"
   3.6.5,ram:SettingTransportSettingTemperature,O,,Інструкції з експлуатації
   3.6.5.1,ram:MinimumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
   3.6.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.6.5.1.2,value,O,decimal,Значення
   3.6.5.2,ram:MaximumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
   3.6.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.6.5.2.2,value,O,decimal,Значення
   3.6.6.1,ram:ApplicableNote (з кодом BRAND).ram:ContentCode,O,string,Код BRAND
   3.6.6.2,ram:ApplicableNote (з кодом BRAND).ram:Content,O,string,Марка причіпа/напівпричіпа згідно з техпаспортом
   3.6.7.1,ram:ApplicableNote (з кодом MODEL).ram:ContentCode,O,string,Код MODEL
   3.6.7.2,ram:ApplicableNote (з кодом MODEL).ram:Content,O,string,Модель причіпа/напівпричіпа згідно з техпаспортом
   3.7,ResealedUtilizedLogisticsTransportEquipment,M,,"Автомобіль, що завантажується"
   3.7.1,ram:ID,M,string,Реєстраційний номер автомобіля згідно з техпаспортом укр.номери: має відповідати одному з патернів для автомобільних номерних знаків єврономери: без валідації
   3.7.2.1,ram:AffixedLogisticsSeal.ram:ID,M,string,"Номер пломби, якою проводилося пломбування автомобіля"
   3.7.3,ram:SettingTransportSettingTemperature,O,,Інструкції з експлуатації
   3.7.3.1,ram:MinimumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
   3.7.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.7.3.1.2,value,O,decimal,Значення
   3.7.3.2,ram:MaximumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
   3.7.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.7.3.2.2,value,O,decimal,Значення
   3.7.4.1,ram:ApplicableNote (з кодом BRAND).ram:ContentCode,M,string,Код BRAND
   3.7.4.2,ram:ApplicableNote (з кодом BRAND).ram:Content,M,string,Марка автомобіля згідно з техпаспортом
   3.7.5.1,ram:ApplicableNote (з кодом MODEL).ram:ContentCode,M,string,Код MODEL
   3.7.5.2,ram:ApplicableNote (з кодом MODEL).ram:Content,M,string,Модель автомобіля згідно з техпаспортом
   3.8,ResealedUtilizedLogisticsTransportEquipment (CategoryCode=TE),O,,"Причіп/напівпричіп, що завантажується"
   3.8.1,ram:ID,O,string,Реєстраційний номер причіпа/напівпричіпа згідно з техпаспортом
   3.8.2,ram:CategoryCode,O,string,Тип TE - Причіп/напівпричіп
   3.8.3,ram:CharacteristicCode,O,string,Код визначення Причіп/напівпричіп: 14 - Причіп 17 - Напівпричіп
   3.8.4.1,ram:AffixedLogisticsSeal.ram:ID,O,string,"Номер пломби, якою проводилося пломбування причіпа/напівпричіпа"
   3.8.5,ram:SettingTransportSettingTemperature,O,,Інструкції з експлуатації
   3.8.5.1,ram:MinimumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
   3.8.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.8.5.1.2,value,O,decimal,Значення
   3.8.5.2,ram:MaximumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
   3.8.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.8.5.2.2,value,O,decimal,Значення
   3.8.6.1,ram:ApplicableNote (з кодом BRAND).ram:ContentCode,O,string,Код BRAND
   3.8.6.2,ram:ApplicableNote (з кодом BRAND).ram:Content,O,string,Марка причіпа/напівпричіпа згідно з техпаспортом
   3.8.7.1,ram:ApplicableNote (з кодом MODEL).ram:ContentCode,O,string,Код MODEL
   3.8.7.2,ram:ApplicableNote (з кодом MODEL).ram:Content,O,string,Модель причіпа/напівпричіпа згідно з техпаспортом
   3.9,CustomerNotes,M,string,Короткий або повний опис причин складання Акта (Замовник)
   3.10,CarrierNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Перевізник)
   4,CertifyingPartyPayload,M,,Інформація про відповідальних осіб
   4.1,CertifyingTradeParty (RoleCode=ОВ),M,,Інформація про Замовника
   4.1.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.1.1.2,ram:ID.value,O,decimal,Значення
   4.1.2,ram:Name,M,string,Посада Замовника
   4.1.3,ram:RoleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
   4.1.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ Замовника
   4.2,CertifyingTradeParty (RoleCode=CA),M,,Інформація про Перевізника
   4.2.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.2.1.2,ram:ID.value,O,decimal,Значення
   4.2.2,ram:Name,M,string,Посада Перевізника
   4.2.3,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   4.2.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ Перевізника
   4.3,CertifyingTradeParty (RoleCode=DR),M,,Інформація про Водія
   4.3.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.3.1.2,ram:ID.value,O,decimal,Значення
   4.3.2,ram:Name,O,string,Посада Водія
   4.3.3,ram:RoleCode,O,string,Роль учасника (Водій - DR). Довідник ролей
   4.3.4.1,ram:DefinedTradeContact.ram:PersonName,O,string,ПІБ водія
   II,UaSignatureStorage,M,,Підписи
   5,Signature (SigningPartyRoleCode=OB),M,,КЕП Замовника
   5.1,SigningPartyRoleCode,M,string,Роль підписанта (Замовник - OB). Довідник ролей
   5.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   5.3,Name,M,string,ПІБ підписанта (Замовника)
   5.4,Position,O,string,Посада підписанта (Замовника)
   5.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Замовника)
   6,Signature (SigningPartyRoleCode=CA),M,,КЕП Перевізника
   6.1,SigningPartyRoleCode,M,string,Роль підписанта (Перевізник - CA). Довідник ролей
   6.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   6.3,Name,M,string,ПІБ підписанта (Перевізника)
   6.4,Position,O,string,Посада підписанта (Перевізника)
   6.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Перевізника)
   7,Signature (SigningPartyRoleCode=DR),M,,КЕП Водія
   7.1,SigningPartyRoleCode,M,string,Роль підписанта (Водій - DR). Довідник ролей
   7.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   7.3,Name,M,string,ПІБ підписанта (Водія)
   7.4,Position,O,string,Посада підписанта (Водія)
   7.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Водія)

.. old style

   Таблиця 1 - Специфікація "Акта перепломбування" (XML)

   .. csv-table:: 
   :file: for_csv/resealing_act_v3.csv
   :widths:  1, 5, 12, 41
   :header-rows: 1
   :stub-columns: 0

   :download:`Приклад "Акта перепломбування"<examples/resealing_act_v3n.xml>`



