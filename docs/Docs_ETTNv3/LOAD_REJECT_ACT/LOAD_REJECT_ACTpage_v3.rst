##########################################################################################################################
**"Акт про відмову вантажити"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1897571119

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/akt-pro-vidmovu-vantaziti>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. important::
   Зверніть увагу, що поля в xml та `в json форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/LOAD_REJECT_ACT/LOAD_REJECT_ACTpage_v3_json.html>`__ відрізняються!

   **XML:**

   .. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <UAECMR_ACT xmlns:ram="urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103"
      xmlns:udt="urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27"
      xmlns:qdt="urn:un:unece:uncefact:data:standard:QualifiedDataType:103"
      xmlns:uas="urn:ua:signatures:SignaturesExtensions:1">
      <ACT>
         <ExchangedDocumentContext>
               <!-- Номер верії документа (транзакції) в ланцюгу підписання доументів -->
               <ram:SpecifiedTransactionID>2</ram:SpecifiedTransactionID>
               <ram:BusinessProcessSpecifiedDocumentContextParameter>
                  <ram:ID>urn:ua:e-transport.gov.ua:act:01</ram:ID>
               </ram:BusinessProcessSpecifiedDocumentContextParameter>
               <ram:GuidelineSpecifiedDocumentContextParameter>
                  <ram:ID>urn:ua:e-transport.gov.ua:act:01:reject:001</ram:ID>
               </ram:GuidelineSpecifiedDocumentContextParameter>
         </ExchangedDocumentContext>
         <ExchangedDocument>
               <!-- Номер документу HNUM -->
               <ram:ID>123123</ram:ID>
               <!-- Дата і час складання документу -->
               <ram:IssueDateTime>
                  <udt:DateTime>2021-10-26T21:32:52+02:00</udt:DateTime>
               </ram:IssueDateTime>
               <ram:Remarks>
                  Інші замітки
               </ram:Remarks>
               <!-- Місце складання документу -->
               <ram:IssueLogisticsLocation>
                  <ram:Name>Місце складання документу</ram:Name>
                  <ram:Description>79000, м.Львів, вул. Словацького, 1</ram:Description>
               </ram:IssueLogisticsLocation>
         </ExchangedDocument>
         <RejectActPayload>
               <!-- Інформація про еТТН для якого складається даний акт -->
               <PreviousAdministrativeReferencedDocument>
                  <ram:TypeCode>730</ram:TypeCode>
                  <!-- Номер е-ТТН (ettn.id) отриманий з ЦБД -->
                  <ram:ID>c5a2db34-5d96-11ec-a11f-dbe59d253156</ram:ID>
                  <ram:Remarks>
                     <!-- Base64 документу версії 1 -->
                  </ram:Remarks>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2021-10-26T21:32:52+02:00</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
                  <ram:AttachedSpecifiedBinaryFile>
                     <ram:MIMECode>application/xml</ram:MIMECode>
                     <!-- Розмір файлу, байт-->
                     <ram:SizeMeasure>2048</ram:SizeMeasure>
                  </ram:AttachedSpecifiedBinaryFile>
               </PreviousAdministrativeReferencedDocument>
               <!-- Інформація про попередній акт, у випадку наступної транзакції -->
               <PreviousAdministrativeReferencedDocument>
                  <!-- Попередній документ, якщо поточний є наступною транзакцією контр-підписання -->
                  <ram:TypeCode>916</ram:TypeCode>
                  <!-- Відповідає ExchangedDocumentContext.SpecifiedTransactionID попередніх версій-->
                  <ram:ID>1</ram:ID>
                  <ram:Remarks>
                     <!-- Base64 документу версії 1 -->
                  </ram:Remarks>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2021-10-26T21:32:52+02:00</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
                  <ram:AttachedSpecifiedBinaryFile>
                     <!-- document.id із ЦБД еТТН -->
                     <ram:ID>607cef34-5d8b-11ec-8f8b-c36339da6e6a</ram:ID>
                     <!-- document.url із ЦБД еТТН, лінк на обʼєкт у провайдера -->
                     <ram:URIID>http://shared.provider.url/607cef34-5d8b-11ec-8f8b-c36339da6e6a</ram:URIID>
                     <ram:MIMECode>application/xml</ram:MIMECode>
                     <!-- Розмір файлу, байт-->
                     <ram:SizeMeasure>2048</ram:SizeMeasure>
                  </ram:AttachedSpecifiedBinaryFile>
               </PreviousAdministrativeReferencedDocument>
               <!-- Відправник -->
               <ConsignorTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">12345678</ram:ID>
                  <!-- Повна назва юридичної, або фізичної особи -->
                  <ram:Name>ТОВ "Компанія відправник"</ram:Name>
                  <ram:RoleCode>CZ</ram:RoleCode>
                  <!-- Юридична адреса для юр.особи, або місце реєстрації для фіз.особи -->
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>01001</ram:PostcodeCode>
                     <ram:StreetName>вул.Хрещатик, 22</ram:StreetName>
                     <ram:CityName>Київ</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <!-- Область + район за необхідності -->
                     <ram:CountrySubDivisionName>м.Київ</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
               </ConsignorTradeParty>
               <!-- Перевізник -->
               <CarrierTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">12345678</ram:ID>
                  <ram:Name>ТОВ "Компанія перевізник"</ram:Name>
                  <ram:RoleCode>CA</ram:RoleCode>
               </CarrierTradeParty>
               <!--Запис про основний автомобіль в перевезенні -->
               <UtilizedLogisticsTransportEquipment>
                  <!-- Реєстраційний номер -->
                  <ram:ID>АА1234ВВ</ram:ID>
                  <ram:ApplicableNote>
                     <ram:ContentCode>BRAND</ram:ContentCode>
                     <ram:Content>Volvo</ram:Content>
                  </ram:ApplicableNote>
                  <ram:ApplicableNote>
                     <ram:ContentCode>MODEL</ram:ContentCode>
                     <ram:Content>Truck</ram:Content>
                  </ram:ApplicableNote>
               </UtilizedLogisticsTransportEquipment>
               <ConsignorNotes>Опис причин складання акта</ConsignorNotes>
               <CarrierNotes>Особливі відмітки</CarrierNotes>
         </RejectActPayload>
         <CertifyingPartyPayload>
               <CertifyingTradeParty>
                  <ram:ID schemeAgencyID="РНОКПП">12345678</ram:ID>
                  <ram:Name>комірник</ram:Name>
                  <ram:RoleCode>CZ</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Петренко В.В.</ram:PersonName>
                  </ram:DefinedTradeContact>
               </CertifyingTradeParty>
               <CertifyingTradeParty>
                  <ram:ID schemeAgencyID="РНОКПП">12345678</ram:ID>
                  <ram:Name>Водій</ram:Name>
                  <ram:RoleCode>CA</ram:RoleCode>
                  <ram:DefinedTradeContact>
                     <ram:PersonName>Іваненко В.В.</ram:PersonName>
                  </ram:DefinedTradeContact>
               </CertifyingTradeParty>
         </CertifyingPartyPayload>
      </ACT>
      <UaSignatureStorage>
         <VisualReferencedDocument>
               <ram:TypeCode>916</ram:TypeCode>
               <ram:Remarks><!--base64 графічного відображеня документу--></ram:Remarks>
         </VisualReferencedDocument>
         <Signature>
               <SigningPartyRoleCode>CZ</SigningPartyRoleCode>
               <PartySignature>MIKAcgYJKoZIhvc...Gh0wk48/LNQM5j9c5U1a2P7VAYGcRaZ5UI</PartySignature>
               <Name>Клієнт ЮР-особа 104 (тестовий сертифікат)</Name>
               <Position>комірник</Position>
               <SpecifiedTaxRegistration>
                  <ram:ID>9999999999</ram:ID>
               </SpecifiedTaxRegistration>
         </Signature>
         <Signature>
               <SigningPartyRoleCode>CA</SigningPartyRoleCode>
               <PartySignature>MIJ/BAYJKoZIhvcNAQcCo...0wk48/LNQM5j9c5U1a2P7VAYGcRaZ5UI</PartySignature>
               <Name>Клієнт ФІЗ-особа 104 (тестовий сертифікат)</Name>
               <Position>водій</Position>
               <SpecifiedTaxRegistration>
                  <ram:ID>9999999999</ram:ID>
               </SpecifiedTaxRegistration>
         </Signature>
      </UaSignatureStorage>
   </UAECMR_ACT>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTBq7ko1S8vmDYo3ObFd0ezRY-zO7KmMz4M4KVSPyFkTpA7UPp8RaSZ9N19vlpeEQ/pubhtml?gid=1472561914&single=true" width="1100" height="3450" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   3,RejectActPayload,M,,Зміст «Акта про відмову вантажити»
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
   3.3,ConsignorTradeParty,M,,Вантажовідправник
   3.3.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажовідправника
   3.3.1.2,ram:ID.value,M,decimal,Значення
   3.3.2,ram:Name,M,string,"Повне найменування Вантажовідправника (юридичної особи або ПІБ фізичної-особи підприємця), що проводить відвантаження (списання) перелічених в ТТН товарно-матеріальних цінностей"
   3.3.3,ram:RoleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
   3.3.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.3.4.1,ram:PersonName,O,string,ПІБ
   3.3.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.3.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.3.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.3.5,ram:PostalTradeAddress,M, ,Юридична адреса Вантажовідправника
   3.3.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.3.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.3.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.3.5.4,ram:CountryID,M,string,Країна (UA)
   3.3.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.3.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.3.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Вантажовідправника (блок обов'язковий до заповнення для відправника транзакції)
   3.3.7.1,ram:ID,M/O,decimal,GLN Вантажовідправника (поле обов'язкове до заповнення для відправника транзакції)
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
   3.5,UtilizedLogisticsTransportEquipment,M,,Автомобіль
   3.5.1,ram:ID,M,string,Реєстраційний номер автомобіля згідно з техпаспортом укр.номери: має відповідати одному з патернів для автомобільних номерних знаків єврономери: без валідації
   3.5.2.1,ram:AffixedLogisticsSeal.ram:ID,O,string,"Номер пломби, якою проводилося пломбування автомобіля"
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
   3.5.6.1,ram:ApplicableNote (з кодом COLOR).ram:ContentCode,O,string,Код COLOR
   3.5.6.2,ram:ApplicableNote (з кодом COLOR).ram:Content,O,string,Колір автомобіля згідно з техпаспортом
   3.6,UtilizedLogisticsTransportEquipment (CategoryCode=TE),O,,Причіп/напівпричіп
   3.6.1,ram:ID,M,string,Реєстраційний номер причіпа/напівпричіпа згідно з техпаспортом
   3.6.2,ram:CategoryCode,M,string,Тип TE - Причіп/напівпричіп
   3.6.3,ram:CharacteristicCode,M,string,Код визначення Причіп/напівпричіп: 14 - Причіп 17 - Напівпричіп
   3.6.4.1,ram:AffixedLogisticsSeal.ram:ID,O,string,"Номер пломби, якою проводилося пломбування причіпа/напівпричіпа"
   3.6.5,ram:SettingTransportSettingTemperature,O,,Інструкції з експлуатації
   3.6.5.1,ram:MinimumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
   3.6.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
   3.6.5.1.2,value,O,decimal,Значення
   3.6.5.2,ram:MaximumValueMeasure,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
   3.6.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
   3.6.5.2.2,value,O,decimal,Значення
   3.6.6.1,ram:ApplicableNote (з кодом BRAND).ram:ContentCode,M,string,Код BRAND
   3.6.6.2,ram:ApplicableNote (з кодом BRAND).ram:Content,M,string,Марка причіпа/напівпричіпа згідно з техпаспортом
   3.6.7.1,ram:ApplicableNote (з кодом MODEL).ram:ContentCode,M,string,Код MODEL
   3.6.7.2,ram:ApplicableNote (з кодом MODEL).ram:Content,M,string,Модель причіпа/напівпричіпа згідно з техпаспортом
   3.6.8.1,ram:ApplicableNote (з кодом COLOR).ram:ContentCode,O,string,Код COLOR
   3.6.8.2,ram:ApplicableNote (з кодом COLOR).ram:Content,O,string,Колір причіпа/напівпричіпа згідно з техпаспортом
   3.7,ConsignorNotes,M,string,Короткий або повний опис причин складання Акта (Вантажовідправник)
   3.8,CarrierNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Перевізник)
   4,CertifyingPartyPayload,M,,Інформація про відповідальних осіб
   4.1,CertifyingTradeParty (RoleCode=CZ),M,,Інформація про відповідальних осіб Вантажовідправника
   4.1.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.1.1.2,ram:ID.value,O,decimal,Значення
   4.1.2,ram:Name,M,string,Посада відповідальної особи Вантажовідправника
   4.1.3,ram:RoleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
   4.1.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Вантажовідправника
   4.2,CertifyingTradeParty (RoleCode=CA),M,,Інформація про Перевізника
   4.2.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.2.1.2,ram:ID.value,O,decimal,Значення
   4.2.2,ram:Name,M,string,Посада Перевізника
   4.2.3,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   4.2.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ Перевізника
   II,UaSignatureStorage,M,,Підписи
   5,Signature (SigningPartyRoleCode=CZ),M,,КЕП Вантажовідправника
   5.1,SigningPartyRoleCode,M,string,Роль підписанта (Вантажовідправник - CZ). Довідник ролей
   5.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   5.3,Name,M,string,ПІБ підписанта (відповідальної особи Вантажовідправника)
   5.4,Position,O,string,Посада підписанта (відповідальної особи Вантажовідправника)
   5.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (відповідальної особи Вантажовідправника)
   6,Signature (SigningPartyRoleCode=CA),M,,КЕП Перевізника
   6.1,SigningPartyRoleCode,M,string,Роль підписанта (Перевізник - CA). Довідник ролей
   6.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   6.3,Name,M,string,ПІБ підписанта (Перевізника)
   6.4,Position,O,string,Посада підписанта (Перевізника)
   6.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Перевізника)

.. old style

   Таблиця 1 - Специфікація "Акт про відмову вантажити" (XML)

   .. csv-table:: 
   :file: for_csv/loadreject_act_v3.csv
   :widths:  1, 5, 12, 41
   :header-rows: 1
   :stub-columns: 0

   :download:`Приклад "Акта про відмову вантажити"<examples/loadreject_act_v3.xml>`



