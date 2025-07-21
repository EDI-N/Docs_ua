##########################################################################################################################
**"Акт коригування"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1779967940

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/akt-koriguvannia>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. important::
   Зверніть увагу, що поля в xml та `в json форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ADJUSTMENT_ACT/ADJUSTMENT_ACTpage_v3_json.html>`__ відрізняються!

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
                  <ram:ID>urn:ua:e-transport.gov.ua:act:01:adjustment:001</ram:ID>
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
         <AdjustmentActPayload>
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
                     <!-- document.id із ЦБД еТТН -->
                     <ram:ID>607cef34-5d8b-11ec-8f8b-c36339da6e6a</ram:ID>
                     <!-- document.url із ЦБД еТТН, лінк на обʼєкт у провайдера -->
                     <ram:URIID>http://shared.provider.url/607cef34-5d8b-11ec-8f8b-c36339da6e6a</ram:URIID>
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
               <!-- Замовник -->
               <InitiatorTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">12345678</ram:ID>
                  <ram:Name>ТОВ "Компанія відправник"</ram:Name>
                  <ram:RoleCode>CZ</ram:RoleCode>
               </InitiatorTradeParty>
               <!-- Перевізник -->
               <CarrierTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">12345678</ram:ID>
                  <ram:Name>ТОВ "Компанія перевізник"</ram:Name>
                  <ram:RoleCode>CA</ram:RoleCode>
               </CarrierTradeParty>
               <!-- Отримувач -->
               <ConsigneeTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">12345678</ram:ID>
                  <ram:Name>ТОВ "Компанія Отримувач"</ram:Name>
                  <ram:RoleCode>CN</ram:RoleCode>
               </ConsigneeTradeParty>
               <AdjustedSupplyChainConsignment>
                  <ram:PickUpTransportEvent>
                     <ram:ScheduledOccurrenceDateTime>
                           <udt:DateTime>2021-10-26T23:00:00+02:00</udt:DateTime>
                     </ram:ScheduledOccurrenceDateTime>
                  </ram:PickUpTransportEvent>
                  <ram:DeliveryInstructions>
                     <ram:Description>Реквізит "Вид перевезень" у товарно-транспортній накладній передбачає зазначення виду роботи перевізника за відрядним тарифом, за погодинним тарифом, за покілометровим тарифом, централізовані перевезення тощо</ram:Description>
                     <ram:DescriptionCode>TRANSPORTATION_TYPE</ram:DescriptionCode>
                  </ram:DeliveryInstructions>
               </AdjustedSupplyChainConsignment>
               <InitiatorNotes>Короткий або повний опис причин складання Акта</InitiatorNotes>
               <ConsignorNotes>Інформація щодо незгоди зі змістом Акта</ConsignorNotes>
               <CarrierNotes>Інформація щодо незгоди зі змістом Акта</CarrierNotes>
               <ConsigneeNotes>Інформація щодо незгоди зі змістом Акта</ConsigneeNotes>
         </AdjustmentActPayload>
         <CertifyingPartyPayload>
               <CertifyingTradeParty>
                  <ram:ID schemeAgencyID="РНОКПП">12345678</ram:ID>
                  <ram:Name>Комірник</ram:Name>
                  <ram:RoleCode>CN</ram:RoleCode>
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
               <SigningPartyRoleCode>CN</SigningPartyRoleCode>
               <PartySignature>MIKAcgY...YGcRaZ5UI</PartySignature>
               <Name>Клієнт ЮР-особа 104 (тестовий сертифікат)</Name>
               <Position>комірник</Position>
               <SpecifiedTaxRegistration>
                  <ram:ID>9999999999</ram:ID>
               </SpecifiedTaxRegistration>
         </Signature>
         <Signature>
               <SigningPartyRoleCode>CA</SigningPartyRoleCode>
               <PartySignature>MIJ/BAY...0bBHXxctRcUTM3gr0n0PeiCdigK/Gh0wk48/LNQM5j9c5U1a2P7VAYGcRaZ5UI</PartySignature>
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
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTBq7ko1S8vmDYo3ObFd0ezRY-zO7KmMz4M4KVSPyFkTpA7UPp8RaSZ9N19vlpeEQ/pubhtml?gid=638340231&single=true" width="1100" height="9150" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   3,AdjustmentActPayload,M,,Зміст «Акта коригування»
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
   3.3,InitiatorTradeParty,M,,"Ініціатор акта (Замовник). Тут наведено приклад, коли ініціатором Акта є Замовник (який не є ні Вантажовідправником, ні Вантажоодержувачем) - в документа буде чотири сторони-підписувачі: Замовник, Вантажовідправник, Перевізник та Вантажоодержувач"
   3.3.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Замовника
   3.3.1.2,ram:ID.value,M,decimal,Значення
   3.3.2,ram:Name,M,string,"Повне найменування Замовника (юридичної особи або ПІБ фізичної-особи підприємця), що проводить одержання (оприбуткування) перелічених в ТТН товарно-матеріальних цінностей"
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
   3.4,ConsignorTradeParty,M,,Вантажовідправник
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
   3.5,CarrierTradeParty,M,,Перевізник
   3.5.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Перевізника
   3.5.1.2,ram:ID.value,M,decimal,Значення
   3.5.2,ram:Name,M,string,"Повне найменування Перевізника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник уклав договір на надання транспортних послуг"
   3.5.3,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   3.5.4,ram:DefinedTradeContact,M, ,Контакти відповідального представника
   3.5.4.1,ram:PersonName,M,string,"ПІБ водія, що керуватиме ТЗ при перевезенні вантажу"
   3.5.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.5.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.5.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.5.5,ram:PostalTradeAddress,M, ,Юридична адреса Перевізника
   3.5.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.5.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.5.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.5.5.4,ram:CountryID,M,string,Країна (UA)
   3.5.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.5.6.1,ram:SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП відповідальної особи (водія)
   3.5.7,ram:SpecifiedGovernmentRegistration,M, ,Посвідчення Водія / GLN Водія / GLN компанії-учасника
   3.5.7.1,ram:ID,M/O,"* string
   * decimal при ram:TypeCode=DRIVER_GLN / TRADEPARTY_GLN","* Серія та номер водійського посвідчення Водія (поле обов'язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456
   * для ram:TypeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)
   * для ram:TypeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов'язкове до заповнення для відправника транзакції)"
   3.5.7.2,ram:TypeCode,O,string,"Код типу:

   * DRIVER_GLN
   * TRADEPARTY_GLN"
   3.6,ConsigneeTradeParty,O,,Новий Вантажоодержувач
   3.6.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ Вантажоодержувача
   3.6.1.2,ram:ID.value,M,decimal,Значення
   3.6.2,ram:Name,M,string,Повне найменування Вантажоодержувача
   3.6.3,ram:RoleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
   3.6.4,ram:DefinedTradeContact,O,,Контакти відповідального представника
   3.6.4.1,ram:PersonName,O,string,ПІБ
   3.6.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.6.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.6.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.6.5,ram:PostalTradeAddress,M,,Юридична адреса Вантажоодержувача (юридична адреса юридичної особи або адреса реєстрації фізичної особи-підприємця)
   3.6.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.6.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.6.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.6.5.4,ram:CountryID,M,string,Країна (UA)
   3.6.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.6.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи Вантажоодержувача
   3.6.7,ram:SpecifiedGovernmentRegistration,M,,GLN Вантажоодержувача
   3.6.7.1,ram:ID,M/O,decimal,GLN компанії-учасника (поле обов’язкове до заповнення для відправника транзакції)
   3.6.7.2,ram:TypeCode,O,string,Код типу: TRADEPARTY_GLN
   3.7,AdjustedSupplyChainConsignment,M,,Таблиця коригувань
   3.7.1,ram:ConsignorTradeParty,O,,Вантажовідправник
   3.7.1.1,ram:Name,M,string,"Повне найменування Вантажовідправника (юридичної особи або ПІБ фізичної-особи підприємця), що проводить відвантаження (списання) перелічених в ТТН товарно-матеріальних цінностей"
   3.7.1.2,ram:DefinedTradeContact,O,,Контакти відповідального представника
   3.7.1.2.1,ram:PersonName,O,string,ПІБ
   3.7.1.2.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.7.1.2.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.7.1.2.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.7.1.3,ram:PostalTradeAddress,M,,Юридична адреса Вантажовідправника
   3.7.1.3.1,ram:PostcodeCode,O,decimal,Індекс
   3.7.1.3.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.7.1.3.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.7.1.3.4,ram:CountryID,M,string,Країна (UA)
   3.7.1.3.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.7.1.4.1,ram:SpecifiedGovernmentRegistration.ram:ID,M/O,decimal,GLN Вантажовідправника (поле обов’язкове до заповнення для відправника транзакції)
   3.7.1.4.2,ram:SpecifiedGovernmentRegistration.typeCode,O,string,"Код типу:
   TRADEPARTY_GLN"
   3.7.2,ram:ConsigneeTradeParty,O,,Вантажоодержувач
   3.7.2.1,ram:Name,M,string,"Повне найменування Вантажоодержувача (юридичної особи або ПІБ фізичної-особи підприємця), що проводить одержання (оприбуткування) перелічених в ТТН товарно-матеріальних цінностей"
   3.7.2.2,ram:DefinedTradeContact,O,,Контакти відповідального представника
   3.7.2.2.1,ram:PersonName,O,string,ПІБ
   3.7.2.2.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.7.2.2.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.7.2.2.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.7.2.3,ram:PostalTradeAddress,O,,Юридична адреса Вантажоодержувача
   3.7.2.3.1,ram:PostcodeCode,O,decimal,Індекс
   3.7.2.3.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.7.2.3.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.7.2.3.4,ram:CountryID,M,string,Країна (UA)
   3.7.2.3.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.7.2.4.1,ram:SpecifiedGovernmentRegistration.ram:ID,M/O,decimal,GLN Вантажоодержувача (поле обов’язкове до заповнення для відправника транзакції)
   3.7.2.4.2,ram:SpecifiedGovernmentRegistration.typeCode,O,string,"Код типу:
   TRADEPARTY_GLN"
   3.7.3,ram:CarrierTradeParty,O,,Перевізник
   3.7.3.1,ram:Name,M,string,"Повне найменування Перевізника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник уклав договір на надання транспортних послуг"
   3.7.3.2,ram:DefinedTradeContact,O,,Контакти відповідального представника
   3.7.3.2.1,ram:PersonName,M,string,"ПІБ водія, що керуватиме ТЗ при перевезенні вантажу"
   3.7.3.2.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.7.3.2.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.7.3.2.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.7.3.3,ram:PostalTradeAddress,M,,Юридична адреса Перевізника
   3.7.3.3.1,ram:PostcodeCode,O,decimal,Індекс
   3.7.3.3.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.7.3.3.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.7.3.3.4,ram:CountryID,M,string,Країна (UA)
   3.7.3.3.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.7.3.4.1,ram:SpecifiedGovernmentRegistration.ram:ID,M/O,"* string
   * decimal при ram:TypeCode=DRIVER_GLN / TRADEPARTY_GLN","Серія та номер водійського посвідчення Водія (поле обов’язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456
   
   для typeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)
   
   для typeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов’язкове до заповнення для відправника транзакції)"
   3.7.3.4.2,ram:SpecifiedGovernmentRegistration.typeCode,O,string,"Код типу:
   DRIVER_GLN
   
   TRADEPARTY_GLN"
   3.7.4,ram:NotifiedTradeParty (роль - FW),O,,Експедитор
   3.7.4.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Експедитора
   3.7.4.1.2,ram:ID.value,M,decimal,Значення
   3.7.4.2,ram:Name,M,string,"Повне найменування Експедитора (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник (замовник) уклав договір траспортного експедирування"
   3.7.4.3,ram:RoleCode,M,string,Роль учасника (Експедитор - FW). Довідник ролей
   3.7.4.4,ram:DefinedTradeContact,O,,Контакти відповідального представника
   3.7.4.4.1,ram:PersonName,O,string,ПІБ
   3.7.4.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.7.4.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.7.4.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.7.4.5,ram:PostalTradeAddress,O,,Юридична адреса Експедитора
   3.7.4.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.7.4.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.7.4.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.7.4.5.4,ram:CountryID,M,string,Країна (UA)
   3.7.4.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.7.4.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.7.4.7.1,ram:SpecifiedGovernmentRegistration.ram:ID,M/O,decimal,GLN Експедитора (поле обов’язкове до заповнення для відправника транзакції)
   3.7.4.7.2,ram:SpecifiedGovernmentRegistration.typeCode,O,string,"Код типу:
   TRADEPARTY_GLN"
   3.7.5,ram:NotifiedTradeParty (роль - OB),O,,Замовник
   3.7.5.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Замовника
   3.7.5.1.2,ram:ID.value,M,decimal,Значення
   3.7.5.2,ram:Name,M,string,"Повне найменування Замовника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, що проводить оплату транспортної роботи і послуг"
   3.7.5.3,ram:RoleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
   3.7.5.4,ram:DefinedTradeContact,O,,Контакти відповідального представника
   3.7.5.4.1,ram:PersonName,O,string,ПІБ
   3.7.5.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.7.5.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.7.5.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.7.5.5,ram:PostalTradeAddress,O,,Юридична адреса Замовника
   3.7.5.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.7.5.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.7.5.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.7.5.5.4,ram:CountryID,M,string,Країна (UA)
   3.7.5.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.7.5.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.7.5.7.1,ram:SpecifiedGovernmentRegistration.ram:ID,M/O,decimal,GLN Замовника (поле обов’язкове до заповнення для відправника транзакції)
   3.7.5.7.2,ram:SpecifiedGovernmentRegistration.typeCode,O,string,"Код типу:
   TRADEPARTY_GLN"
   3.7.6,ram:NotifiedTradeParty (роль - WD),O,,Проміжний склад
   3.7.6.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Проміжного складу
   3.7.6.1.2,ram:ID.value,M,decimal,Значення
   3.7.6.2,ram:Name,M,string,"Повне найменування Проміжного складу (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
   3.7.6.3,ram:RoleCode,M,string,Роль учасника (Проміжний склад - WD). Довідник ролей
   3.7.6.4,ram:DefinedTradeContact,O,,Контакти відповідального представника
   3.7.6.4.1,ram:PersonName,O,string,ПІБ
   3.7.6.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.7.6.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.7.6.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.7.6.5,ram:PostalTradeAddress,O,,Юридична адреса Проміжного складу
   3.7.6.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.7.6.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.7.6.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.7.6.5.4,ram:CountryID,M,string,Країна (UA)
   3.7.6.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.7.6.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.7.6.7.1,ram:SpecifiedGovernmentRegistration.ram:ID,M/O,decimal,GLN Проміжного складу (поле обов’язкове до заповнення для відправника транзакції)
   3.7.6.7.2,ram:SpecifiedGovernmentRegistration.typeCode,O,string,"Код типу:
   TRADEPARTY_GLN"
   3.7.7,ram:NotifiedTradeParty (роль - COP),O,,Охоронна компанія
   3.7.7.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Охоронної компанії
   3.7.7.1.2,ram:ID.value,M,decimal,Значення
   3.7.7.2,ram:Name,M,string,"Повне найменування Охоронної компанії, що надає охоронні послуги вантажу під час перевезення"
   3.7.7.3,ram:RoleCode,M,string,Роль учасника (Охоронна компанія - COP). Довідник ролей
   3.7.7.4,ram:DefinedTradeContact,O,,Контакти відповідального представника
   3.7.7.4.1,ram:PersonName,O,string,"ПІБ представника Замовника, який уповноважений супроводжувати вантаж, що підлягає спеціальній охороні"
   3.7.8,ram:CarrierAcceptanceLogisticsLocation,O,,Пункт навантаження
   3.7.8.1.1,ram:ID.schemeAgencyID,M,string,КАТОТТГ пункту навантаження
   3.7.8.1.2,ram:ID.value,M,string,Значення
   3.7.8.2,ram:Name,M,string,Найменування пункту навантаження
   3.7.8.3,ram:TypeCode,M,decimal,Тип операції: 10 - навантаження; 5 - розвантаження
   3.7.8.4,ram:Description,M,string,Опис (адреса) пункту навантаження
   3.7.8.5,ram:PhysicalGeographicalCoordinate,M,,Географічні координати
   3.7.8.5.1,ram:LatitudeMeasure,O,string,Географічні координати (Широта)
   3.7.8.5.2,ram:LongitudeMeasure,O,string,Географічні координати (Довгота)
   3.7.8.5.3.1,ram:SystemID.schemeAgencyID,M,string,GLN
   3.7.8.5.3.2,ram:SystemID.value,M,decimal,Значення
   3.7.9,ram:ConsigneeReceiptLogisticsLocation,O,,Пункт розвантаження
   3.7.9.1.1,ram:ID.schemeAgencyID,M,string,КАТОТТГ пункту розвантаження
   3.7.9.1.2,ram:ID.value,M,string,Значення
   3.7.9.2,ram:Name,M,string,Найменування пункту розвантаження
   3.7.9.3,ram:TypeCode,M,decimal,Тип операції: 10 - навантаження; 5 - розвантаження
   3.7.9.4,ram:Description,M,string,Опис (адреса) пункту розвантаження
   3.7.9.5,ram:PhysicalGeographicalCoordinate,M,,Географічні координати
   3.7.9.5.1,ram:LatitudeMeasure,O,string,Географічні координати (Широта)
   3.7.9.5.2,ram:LongitudeMeasure,O,string,Географічні координати (Довгота)
   3.7.9.5.3.1,ram:SystemID.schemeAgencyID,M,string,GLN
   3.7.9.5.3.2,ram:SystemID.value,M,decimal,Значення
   3.7.10,ram:DeliveryTransportEvent,O,,Розвантажувальні роботи
   3.7.10.1,ram:ID,O,string,Порядковий номер події (події завжди нумеруються в порядку поступового зростання за принципом N+1)
   3.7.10.2,ram:TypeCode,O,decimal,"Тип операції (розвантаження=5, завантаження=10)"
   3.7.10.3,ram:Description,O,string,Опис
   3.7.10.4.1,ram:ActualOccurrenceDateTime.udt:DateTime,O,datetime (2021-12-13T14:19:23+02:00),Дата та час прибуття автомобіля на розвантаження
   3.7.10.5.1,ram:ScheduledOccurrenceDateTime.udt:DateTime,O,datetime (2021-12-13T14:19:23+02:00),Дата та час вибуття автомобіля з-під розвантаження
   3.7.10.6.1,ram:ApplicableNote (з кодом DOWNTIME).ram:ContentCode,O,string,Код DOWNTIME
   3.7.10.6.2,ram:ApplicableNote (з кодом DOWNTIME).ram:Content,O,unsignedByte,Час (години) простою під розвантаженням
   3.7.11,ram:PickUpTransportEvent,M,,Навантажувальні роботи
   3.7.11.1,ram:ID,O,string,Порядковий номер події (події завжди нумеруються в порядку поступового зростання за принципом N+1)
   3.7.11.2,ram:TypeCode,O,decimal,"Тип операції (розвантаження=5, завантаження=10)"
   3.7.11.3,ram:Description,O,string,Опис
   3.7.11.4.1,ram:ActualOccurrenceDateTime.udt:DateTime,O,datetime (2021-12-13T14:19:23+02:00),Дата та час прибуття автомобіля під навантаження
   3.7.11.5.1,ram:ScheduledOccurrenceDateTime.udt:DateTime,O,datetime (2021-12-13T14:19:23+02:00),Дата та час вибуття автомобіля з-під навантаження
   3.7.11.6.1,ram:ApplicableNote (з кодом DOWNTIME).ram:ContentCode,O,string,Код DOWNTIME
   3.7.11.6.2,ram:ApplicableNote (з кодом DOWNTIME).ram:Content,O,unsignedByte,Час простою
   3.7.12,ram:IncludedSupplyChainConsignmentItem,O,,Відомості про вантаж
   3.7.12.1.1,ram:GlobalID.schemeAgencyID,O,string (min 4 - max 10),УКТЗЕД (код продукції)
   3.7.12.1.2,ram:GlobalID.value,O,string,Значення
   3.7.12.2.1,ram:NatureIdentificationTransportCargo.ram:Identification,O,string,Найменування вантажу
   3.7.12.3.1,ram:ApplicableTransportDangerousGoods.ram:UNDGIdentificationCode,O,decimal,"Клас небезпечних речовин, до якого віднесено вантаж (у разі перевезення небезпечних вантажів). Код UNDG, 0 - якщо не використовується"
   3.7.12.4.1,ram:AssociatedReferencedDocument.ram:ID,O,string,"Документи з вантажем. Номер документа, який водій отримує від вантажовідправника і передає вантажоодержувачеві разом з вантажем (товарні, залізничні накладні, сертифікати, свідоцтва тощо)"
   3.7.12.4.2,ram:AssociatedReferencedDocument.ram:Remarks,O,string,UUID супровідного документа
   3.7.12.5,ram:TransportLogisticsPackage,O,,Транспортно-логістичний пакет. ВАЖЛИВО: в Україні дозволяється лише один LogisticsPackage для одного ConsignmentItem!
   3.7.12.5.1,ram:ItemQuantity,O,decimal,"Кількість місць, які визначаються за кожним найменуванням вантажу (це можуть бути ящики, кошики, мішки тощо; якщо вантаж упаковано на піддонах - вказують кількість піддонів)"
   3.7.12.5.2,ram:TypeCode,O,string,Вид пакування (Довідник видів упаковок)
   3.7.12.5.3,ram:Type,O,string,Одиниця виміру для itemQuantity
   3.7.12.5.4,ram:PhysicalLogisticsShippingMarks,O,,Маркування
   3.7.12.5.4.1,ram:Marking,O,string,"Назва транспортної упаковки (вільна назва), в якій перевозиться вантаж"
   3.7.12.5.4.2.1,ram:BarcodeLogisticsLabel.ram:ID,O,string (max 128),Штрихкод товару
   3.7.12.6.1,ram:ApplicableNote (з кодом VENDOR_CODE).ram:ContentCode,O,string,Код VENDOR_CODE
   3.7.12.6.2,ram:ApplicableNote (з кодом VENDOR_CODE).ram:Content,O,string,Артикул товару
   3.7.12.7.1,ram:ApplicableNote (з кодом QUANTITY).ram:ContentCode,O,string,Код QUANTITY
   3.7.12.7.2,ram:ApplicableNote (з кодом QUANTITY).ram:Content,O,string,Кількість товару
   3.7.12.8.1,ram:ApplicableNote (з кодом URL).ram:ContentCode,O,string,Код URL
   3.7.12.8.2,ram:ApplicableNote (з кодом URL).ram:Content,O,string,Посилання на документ
   3.7.12.9.1,ram:ApplicableNote (з кодом BASE_UOM).ram:ContentCode,O,string,Код BASE_UOM
   3.7.12.9.2,ram:ApplicableNote (з кодом BASE_UOM).ram:Content,O,string,Одиниця виміру кількості товару для QUANTITY
   3.7.12.10.1,ram:ApplicableNote (з кодом BUYER_CODE).ram:ContentCode,O,string,Код BUYER_CODE
   3.7.12.10.2,ram:ApplicableNote (з кодом BUYER_CODE).ram:Content,O,string,Артикул покупця (використовується для ідентифікації товарної позиції при прийманні)
   3.7.12.11.1,ram:ApplicableNote (з кодом PRICE_WITH_VAT).ram:ContentCode,O,string,Код PRICE_WITH_VAT
   3.7.12.11.2,ram:ApplicableNote (з кодом PRICE_WITH_VAT).ram:Content,O,string,Ціна за одиницю з ПДВ
   3.7.12.12.1,ram:ApplicableNote (з кодом SUM_WITHOUT_VAT).ram:ContentCode,O,string,Код SUM_WITHOUT_VAT
   3.7.12.12.2,ram:ApplicableNote (з кодом SUM_WITHOUT_VAT).ram:Content,O,string,Загальна сума без ПДВ
   3.7.12.13.1,ram:ApplicableNote (з кодом RETURN_TARE).ram:ContentCode,O,string,Код RETURN_TARE
   3.7.12.13.2,ram:ApplicableNote (з кодом RETURN_TARE).ram:Content,O,string,Ознака «зворотня тара»
   3.7.12.14.1,ram:ApplicableNote (з кодом NET_WEIGHT).ram:ContentCode,O,string,Код NET_WEIGHT
   3.7.12.14.2,ram:ApplicableNote (з кодом NET_WEIGHT).ram:Content,O,string,Маса нетто
   3.7.12.15.1,ram:ApplicableNote (з кодом RTP_QUANTITY).ram:ContentCode,O,string,Код RTP_QUANTITY
   3.7.12.15.2,ram:ApplicableNote (з кодом RTP_QUANTITY).ram:Content,O,string,Кількість транспортної упаковки (використовується для обліку оборотної тари)
   3.7.13,ram:DeliveryInstructions,O,,Вид перевезень
   3.7.13.1,ram:Description,O,string,"Опис (вид роботи перевізника: за відрядним тарифом, за погодинним тарифом, за покілометровим тарифом, централізовані перевезення тощо)"
   3.7.13.2,ram:DescriptionCode,M,string,Код (TRANSPORTATION_TYPE)
   3.8,InitiatorNotes,M,string,Короткий або повний опис причин складання акта (Замовник)
   3.9,ConsignorNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Вантажовідправник)
   3.10,CarrierNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Перевізник)
   3.11,ConsigneeNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Вантажоодержувач)
   4,CertifyingPartyPayload,M,,Інформація про відповідальних осіб
   4.1,CertifyingTradeParty (RoleCode=ОВ),M,,Інформація про Замовника
   4.1.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.1.1.2,ram:ID.value,O,decimal,Значення
   4.1.2,ram:Name,M,string,Посада Замовника
   4.1.3,ram:RoleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
   4.1.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ Замовника
   4.2,CertifyingTradeParty (RoleCode=CZ),M,,Інформація про відповідальних осіб Вантажовідправника
   4.2.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.2.1.2,ram:ID.value,O,decimal,Значення
   4.2.2,ram:Name,M,string,Посада відповідальної особи Вантажовідправника
   4.2.3,ram:RoleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
   4.2.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Вантажовідправника
   4.3,CertifyingTradeParty (RoleCode=CA),M,,Інформація про Перевізника
   4.3.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.3.1.2,ram:ID.value,O,decimal,Значення
   4.3.2,ram:Name,M,string,Посада Перевізника
   4.3.3,ram:RoleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
   4.3.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ Перевізника
   4.4,CertifyingTradeParty (RoleCode=CN),O,,Інформація про відповідальних осіб Вантажоодержувача
   4.4.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.4.1.2,ram:ID.value,O,decimal,Значення
   4.4.2,ram:Name,M,string,Посада відповідальної особи Вантажоодержувача
   4.4.3,ram:RoleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
   4.4.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ відповідальної особи Вантажоодержувача
   II,UaSignatureStorage,M,,Підписи
   5,Signature (SigningPartyRoleCode=OB),M,,КЕП Замовника
   5.1,SigningPartyRoleCode,M,string,Роль підписанта (Замовник - OB). Довідник ролей
   5.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   5.3,Name,M,string,ПІБ підписанта (Замовника)
   5.4,Position,O,string,Посада підписанта (Замовника)
   5.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Замовника)
   6,Signature (SigningPartyRoleCode=CZ),M,,КЕП Вантажовідправника
   6.1,SigningPartyRoleCode,M,string,Роль підписанта (Вантажовідправник - CZ). Довідник ролей
   6.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   6.3,Name,M,string,ПІБ підписанта (відповідальної особи Вантажовідправника)
   6.4,Position,O,string,Посада підписанта (відповідальної особи Вантажовідправника)
   6.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (відповідальної особи Вантажовідправника)
   7,Signature (SigningPartyRoleCode=CA),M,,КЕП Перевізника
   7.1,SigningPartyRoleCode,M,string,Роль підписанта (Перевізник - CA). Довідник ролей
   7.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   7.3,Name,M,string,ПІБ підписанта (Перевізника)
   7.4,Position,O,string,Посада підписанта (Перевізника)
   7.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Перевізника)
   8,Signature (SigningPartyRoleCode=CN),M,,КЕП Вантажоодержувача
   8.1,SigningPartyRoleCode,M,string,Роль підписанта (Вантажоодержувач - CN). Довідник ролей
   8.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   8.3,Name,M,string,ПІБ підписанта (відповідальної особи Вантажоодержувача)
   8.4,Position,O,string,Посада підписанта (відповідальної особи Вантажоодержувача)
   8.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (відповідальної особи Вантажоодержувача)

.. old style

   Таблиця 1 - Специфікація "Акта коригування" (XML)

   .. csv-table:: 
   :file: for_csv/adjustment_act_v3.csv
   :widths:  1, 5, 12, 41
   :header-rows: 1
   :stub-columns: 0

   :download:`Приклад "Акта коригування"<examples/adjustment_act_v3.xml>`


