##########################################################################################################################
**"Акт про заміну пункту призначення вантажу"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1420079006

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/akt-pro-zaminu-punktu-priznacennia-vantazu>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. important::
   Зверніть увагу, що поля в xml та `в json форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/CONSIGNEE_CHANGE_ACT/CONSIGNEE_CHANGE_ACTpage_v3_json.html>`__ відрізняються!

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
                  <ram:ID>urn:ua:e-transport.gov.ua:act:01:consignee_change:001</ram:ID>
               </ram:GuidelineSpecifiedDocumentContextParameter>
         </ExchangedDocumentContext>
         <ExchangedDocument>
               <ram:ID>3739</ram:ID>
               <ram:IssueDateTime>
                  <udt:DateTime>2023-06-28T12:22:00.000Z</udt:DateTime>
               </ram:IssueDateTime>
               <ram:IssueLogisticsLocation>
                  <ram:Name>Місце складання документу</ram:Name>
                  <ram:Description>київ</ram:Description>
               </ram:IssueLogisticsLocation>
         </ExchangedDocument>
         <ConsigneeChangeActPayload>
               <PreviousAdministrativeReferencedDocument>
                  <ram:TypeCode>730</ram:TypeCode>
                  <ram:ID>0d1dafd1-93d4-4ee1-95ff-b76546628dc3</ram:ID>
                  <ram:FormattedIssueDateTime>
                     <qdt:DateTimeString>2023-06-28T12:08:00.000Z</qdt:DateTimeString>
                  </ram:FormattedIssueDateTime>
               </PreviousAdministrativeReferencedDocument>
               <InitiatorTradeParty>
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
               </InitiatorTradeParty>
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
               <ConsigneeTradeParty>
                  <ram:ID schemeAgencyID="ЄДРПОУ">101010141</ram:ID>
                  <ram:Name>МСК ВантОдержувач 2</ram:Name>
                  <ram:RoleCode>UC</ram:RoleCode>
                  <ram:PostalTradeAddress>
                     <ram:PostcodeCode>32578</ram:PostcodeCode>
                     <ram:StreetName>провулок Зелений, буд. 2, офіс 13</ram:StreetName>
                     <ram:CityName>м. Хуст</ram:CityName>
                     <ram:CountryID>UA</ram:CountryID>
                     <ram:CountrySubDivisionName>Закарпатська обл,  Хустський р-н</ram:CountrySubDivisionName>
                  </ram:PostalTradeAddress>
                  <ram:SpecifiedGovernmentRegistration>
                     <ram:ID>9864065737872</ram:ID>
                     <ram:TypeCode>TRADEPARTY_GLN</ram:TypeCode>
                  </ram:SpecifiedGovernmentRegistration>
               </ConsigneeTradeParty>
               <ConsigneeReceiptLogisticsLocation>
                  <ram:ID schemeAgencyID="КАТОТТГ">UA21120250010053148</ram:ID>
                  <ram:Name>МСК ВантОдержувач 2</ram:Name>
                  <ram:TypeCode>10</ram:TypeCode>
                  <ram:Description>Україна, 32578, Закарпатська обл,  Хустський р-н, м. Хуст, провулок Зелений, буд. 2, офіс 13</ram:Description>
                  <ram:PhysicalGeographicalCoordinate>
                     <ram:SystemID schemeAgencyID="GLN">9864065737872</ram:SystemID>
                  </ram:PhysicalGeographicalCoordinate>
               </ConsigneeReceiptLogisticsLocation>
               <InitiatorNotes>воарпірв</InitiatorNotes>
         </ConsigneeChangeActPayload>
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
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTBq7ko1S8vmDYo3ObFd0ezRY-zO7KmMz4M4KVSPyFkTpA7UPp8RaSZ9N19vlpeEQ/pubhtml?gid=1507937531&single=true" width="1100" height="4150" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   3,ConsigneeChangeActPayload,M,,Зміст «Акта про заміну пункту призначення вантажу»
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
   3.3,InitiatorTradeParty,M,,"Ініціатор акта - Вантажоодержувач. Тут наведено приклад для варіанта, коли ініціатором Акта є Вантажоодержувач - в документа буде три сторони-підписувачі: Вантажоодержувач, Перевізник та Замовник (якщо він не є Вантажоодержувачем)."
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
   3.5,CustomerTradeParty,M,,Замовник
   3.5.1.1,ram:ID.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Замовника
   3.5.1.2,ram:ID.value,M,decimal,Значення
   3.5.2,ram:Name,M,string,"Повне найменування Замовника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, що проводить оплату транспортної роботи і послуг"
   3.5.3,ram:RoleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
   3.5.4,ram:DefinedTradeContact,O, ,Контакти відповідального представника
   3.5.4.1,ram:PersonName,O,string,ПІБ
   3.5.4.2.1,ram:TelephoneUniversalCommunication.ram:CompleteNumber,O,string,Основний телефон
   3.5.4.3.1,ram:MobileTelephoneUniversalCommunication.ram:CompleteNumber,O,string,Мобільний телефон
   3.5.4.4.1,ram:EmailURIUniversalCommunication.ram:CompleteNumber,O,string,Електронна адреса
   3.5.5,ram:PostalTradeAddress,M, ,Юридична адреса Замовника
   3.5.5.1,ram:PostcodeCode,O,decimal,Індекс
   3.5.5.2,ram:StreetName,M,string,Адреса (назва вулиці + номер будівлі)
   3.5.5.3,ram:CityName,M,string,Місто (назва населеного пункту)
   3.5.5.4,ram:CountryID,M,string,Країна (UA)
   3.5.5.5,ram:CountrySubDivisionName,O,string,Область та район (за наявності)
   3.5.6.1,ram:SpecifiedTaxRegistration.ram:ID,O,string,РНОКПП відповідальної особи
   3.5.7,ram:SpecifiedGovernmentRegistration,M/O, ,GLN Замовника (блок обов'язковий до заповнення для відправника транзакції)
   3.5.7.1,ram:ID,M/O,decimal,GLN Замовника (поле обов'язкове до заповнення для відправника транзакції)
   3.5.7.2,ram:TypeCode,O,string,"Код типу:

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
   3.7,ram:ConsigneeReceiptLogisticsLocation,M,,Пункт розвантаження
   3.7.1.1,ram:ID.schemeAgencyID,M,string,Код КАТОТТГ пункту розвантаження відповідно до Кодифікатора адміністративно-територіальних одиниць та територій територіальних громад
   3.7.1.2,ram:ID.value,M,string,Значення
   3.7.2,ram:Name,M,string,Найменування пункту розвантаження
   3.7.3,ram:RoleCode,M,string,Тип операції: 10 - навантаження; 5 - розвантаження
   3.7.4,ram:Description,M,string,Опис (адреса) пункту розвантаження
   3.7.5,ram:PhysicalGeographicalCoordinate,M,,Географічні координати
   3.7.5.1,ram:LatitudeMeasure,O,string,Географічні координати (Широта)
   3.7.5.2,ram:LongitudeMeasure,O,string,Географічні координати (Довгота)
   3.7.5.3.1,ram:SystemID.schemeAgencyID,M/O,string,GLN (блок обов'язковий до заповнення для відправника транзакції)
   3.7.5.3.2,ram:SystemID.value,M,decimal,Значення
   3.8,InitiatorNotes,M,string,Короткий або повний опис причин складання акта (Ініціатор)
   3.9,CarrierNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Перевізник)
   3.10,CustomerNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Замовник)
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
   4.3,CertifyingTradeParty (RoleCode=ОВ),M,,Інформація про Замовника
   4.3.1.1,ram:ID.schemeAgencyID,O,string,РНОКПП
   4.3.1.2,ram:ID.value,O,decimal,Значення
   4.3.2,ram:Name,M,string,Посада Замовника
   4.3.3,ram:RoleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
   4.3.4.1,ram:DefinedTradeContact.ram:PersonName,M,string,ПІБ Замовника
   II,UaSignatureStorage,M,,Підписи
   5,Signature (SigningPartyRoleCode=CN),M,,КЕП Вантажоодержувача
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
   7,Signature (SigningPartyRoleCode=OB),M,,КЕП Замовника
   7.1,SigningPartyRoleCode,M,string,Роль підписанта (Замовник - OB). Довідник ролей
   7.2,PartySignature,M,string,Підпис (base64 підпису p7s)
   7.3,Name,M,string,ПІБ підписанта (Замовника)
   7.4,Position,O,string,Посада підписанта (Замовника)
   7.5.1,SpecifiedTaxRegistration.ram:ID,M,string,РНОКПП підписанта (Замовника)

.. old style

   Таблиця 1 - Специфікація "Акт про заміну пункту призначення вантажу" (XML)

   .. csv-table:: 
   :file: for_csv/consigneechange_act_v3.csv
   :widths:  1, 5, 12, 41
   :header-rows: 1
   :stub-columns: 0

   :download:`Приклад "Акта про заміну пункту призначення вантажу"<examples/consigneechange_act_v3n.xml>`


