##########################################################################################################################
**"Акт перевантаження"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=54298378

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/akt-perevantazennia>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі
    .. important::
      Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/RELOAD_ACT/RELOAD_ACTpage_v3.html>`__  відрізняються! 

   **JSON:**

   .. code:: json

        {
           "ram": "urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103",
           "udt": "urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27",
           "qdt": "urn:un:unece:uncefact:data:standard:QualifiedDataType:103",
           "uas": "urn:ua:signatures:SignaturesExtensions:1",
          "act": {
               "documentContext": {
                   "transactionID": "0",
                   "documentCode": {
                       "id": "urn:ua:e-transport.gov.ua:act:01"
                   },
                   "documentSubCode": {
                       "id": "urn:ua:e-transport.gov.ua:act:01:reload:001"
                   }
               },
               "exchangedDocument": {
                   "id": "3739",
                   "issueDateTime": {
                       "dateTime": "2023-06-29T10:25:00.000Z"
                   },
                   "includedNote": [],
                   "issueLogisticsLocation": {
                       "name": "Місце складання документу",
                       "description": "Київ"
                   }
               },
               "reloadActPayload": {
                   "previousAdministrativeReferencedDocuments": [
                       {
                           "typeCode": "730",
                           "id": "6ae83082-bb0d-4119-9c4f-9cc1b2e9c3a5",
                           "formattedIssueDateTime": {
                               "dateTime": "2023-06-29T12:08:00.000Z"
                           }
                       }
                   ],
                   "carrierTradeParty": {
                       "id": {
                           "schemeAgencyID": "ЄДРПОУ",
                           "value": "12345678"
                       },
                       "name": "МСК Перевізник",
                       "roleCode": "CA",
                       "tradeContact": {
                           "personName": "Перший Водій Батькович",
                           "telephoneUniversalCommunication": {
                               "completeNumber": "380544472828"
                           },
                           "emailURIUniversalCommunication": {
                               "completeNumber": "vod01@test.tst"
                           }
                       },
                       "postalTradeAddress": {
                           "postCode": "74589",
                           "streetName": "пл. Тараса Чмута, буд. 1, офіс 1",
                           "cityName": "м. Буськ",
                           "countryID": "UA",
                           "countrySubDivisionName": "Львівська обл,  Золочівський р-н"
                       },
                       "taxRegistration": {
                           "id": "1111111101"
                       },
                       "specifiedGovernmentRegistrations": [
                           {
                               "id": "VOD010101"
                           },
                           {
                               "id": "9864065745952",
                               "typeCode": "DRIVER_GLN"
                           },
                           {
                               "id": "9864065745709",
                               "typeCode": "TRADEPARTY_GLN"
                           }
                       ]
                   },
                   "connectingCarrierTradeParty": {
                       "id": {
                           "schemeAgencyID": "ЄДРПОУ",
                           "value": "101010187"
                       },
                       "name": "МСК Перевізник 2",
                       "roleCode": "CH",
                       "tradeContact": {
                           "personName": "Другий Водій Батькович",
                           "telephoneUniversalCommunication": {
                               "completeNumber": "380445444728"
                           }
                       },
                       "postalTradeAddress": {
                           "streetName": "вул.Жасмінова, 5 а/с 9671",
                           "cityName": "c. Іванівка",
                           "countryID": "UA",
                           "countrySubDivisionName": "Вінницька обл,  Вінницький р-н"
                       },
                       "taxRegistration": {
                           "id": "22222222"
                       },
                       "specifiedGovernmentRegistrations": [
                           {
                               "id": "ВОД000202"
                           },
                           {
                               "id": "9864065745976",
                               "typeCode": "DRIVER_GLN"
                           },
                           {
                               "id": "9864065747581",
                               "typeCode": "TRADEPARTY_GLN"
                           }
                       ]
                   },
                   "carrierUtilizedLogisticsTransportEquipment": [
                       {
                           "id": "аа0101аа",
                           "affixedLogisticsSeals": [
                               {
                                   "id": "пл-авто-ттн"
                               }
                           ],
                           "settingTransportSettingTemperature": {
                               "minimum": {
                                   "unitCode": "CEL",
                                   "value": "-22"
                               },
                               "maximum": {
                                   "unitCode": "CEL",
                                   "value": "-15"
                               }
                           },
                           "applicableNotes": [
                               {
                                   "contentCode": "BRAND",
                                   "content": "марка авто"
                               },
                               {
                                   "contentCode": "MODEL",
                                    "content": "модель авто"
                               },
                               {
                                   "contentCode": "COLOR",
                                   "content": "колір авто"
                               },
                               {
                                   "contentCode": "TYPE",
                                   "content": "тип авто"
                                }
                           ]
                       },
                       {
                           "id": "нп1717нп",
                           "categoryCode": "TE",
                           "characteristicCode": "17",
                           "affixedLogisticsSeals": [
                               {
                                   "id": "пл-нп-ттн"
                               }
                           ],
                           "applicableNotes": [
                               {
                                   "contentCode": "BRAND",
                                   "content": "марка напівпричепу"
                               },
                               {
                                   "contentCode": "MODEL",
                                   "content": "модель напівпричепу"
                               },
                               {
                                   "contentCode": "TYPE",
                                   "content": "тип напівпричепу"
                               }
                           ]
                       }
                   ],
                   "connectingCarrierUtilizedLogisticsTransportEquipment": [
                       {
                           "id": "аА7687Аа",
                           "applicableNotes": [
                               {
                                   "contentCode": "BRAND",
                                   "content": "Нова Марка"
                               },
                               {
                                   "contentCode": "MODEL",
                                   "content": "Нова Модель"
                               },
                               {
                                   "contentCode": "COLOR",
                                   "content": "ЧеРвона"
                               },
                               {
                                   "contentCode": "TYPE",
                                   "content": "Новий Тир"
                               }
                           ]
                       }
                   ],
                   "carrierNotes": "Додаткова інформація"
               },
               "certifyingPartyPayload": {
                   "certifyingTradeParty": [
                       {
                           "id": {
                               "schemeAgencyID": "РНОКПП",
                               "value": "222222222222"
                           },
                           "name": "в.о. Перевізника",
                           "roleCode": "CA",
                           "tradeContact": {
                               "personName": "Пивоній Кущ Зелений",
                               "mobileTelephoneUniversalCommunication": {
                                   "completeNumber": "380222222222"
                               }
                           }
                       }
                   ]
               }
           }
       } 

   .. role:: orange

   .. raw:: html

       <embed>
       <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPbzkPgNe3yqDqIzd_3PyYlNGPbaL27tiF7z5CPd5iexGV74qv6KkAGquRrJL9OQ/pubhtml?gid=254043882&single=true" width="1100" height="5150" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

      <!-- <div> № з/п,Параметр²,Тип¹,Формат,Опис
       I,act,M,,(початок змісту документа)
        1,documentContext,M,,Технічні дані
       1.1,transactionID,M,string,Номер версії документа (транзакції) в ланцюгу підписання документів
       1.2.1,documentCode.id,M,string,код документа
       1.3.1,documentSubCode.id,M,unsignedByte,підтип документа
       2,exchangedDocument,M,,Реквізити Акта
       2.1,id,M,string,номер документа
       2.2.1,issueDateTime.dateTime,M,datetime (2021-12-13T14:19:23+02:00),Дата і час складання Акта
       2.3,remarks,O,string,Інші примітки
       2.4.1,issueLogisticsLocation.name,M,string,Найменування місця складання Акта
       2.4.2,issueLogisticsLocation.description,M,string,Опис (адреса) місця складання Акта
       3,reloadActPayload,M,,Зміст «Акта перевантаження»
       3.1,previousAdministrativeReferencedDocuments (TypeCode=730),M,,"Інформація про е-ТТН, для якої складається акт"
       3.1.1,typeCode,M,decimal,Тип документа (730 - ТТН). Довідник кодів документів
       3.1.2,id,M,string,Номер документа-підстави (ТТН); має відповідати номеру документа ExchangedDocument.ID еТТН
       3.1.3.1,formattedIssueDateTime.dateTime,M,datetime (2021-12-13T14:19:23+02:00),Дата та час документа-підстави (ТТН); має відповідати даті документа ExchangedDocument.IssueDateTime еТТН
       3.1.4,attachedSpecifiedBinaryFile,M,,"Дані е-ТТН, для якої складається акт"
       3.1.4.1,id,M,string,Ідентифікатор (guid) документа-підстави (ТТН); має відповідати document.id еТТН в ЦБД (значення ettnId з методу Отримання списку подій з ЦБД = значення external_doc_id Отримання мета-даних документа)
       3.1.4.2,uriid,O,string,посилання на документ
       3.1.4.3,MIMECode,O,string,MIME типізація
       3.1.4.4,SizeMeasure,O,long,розмір файлу в байтах
       3.2,previousAdministrativeReferencedDocuments,-/M,,"Інформація про попередній акт, у випадку наступної транзакції"
       3.2.1,typeCode,M,decimal,Тип документа. Довідник кодів документів
       3.2.2,id,M,string,Номер документа-підстави (Акт); має відповідати номеру документа ExchangedDocument.ID Акта
       3.2.3.1,formattedIssueDateTime.dateTime,M,datetime (2021-12-13T14:19:23+02:00),Дата та час документа-підстави (Акта)
       3.3,carrierTradeParty,M,,"Перевізник, що здає вантаж"
       3.3.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Перевізника
       3.3.1.2,id.value,M,decimal,Значення
       3.3.2,name,M,string,"Повне найменування Перевізника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник уклав договір на надання транспортних послуг"
       3.3.3,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
       3.3.4,tradeContact,M, ,Контакти відповідального представника
       3.3.4.1,personName,M,string,"ПІБ водія, що керуватиме ТЗ при перевезенні вантажу"
       3.3.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
       3.3.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
       3.3.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
       3.3.5,postalTradeAddress,M, ,Юридична адреса Перевізника
       3.3.5.1,postCode,O,decimal,Індекс
       3.3.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
       3.3.5.3,cityName,M,string,Місто (назва населеного пункту)
       3.3.5.4,countryID,M,string,Країна (UA)
       3.3.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
       3.3.6.1,taxRegistration.id,M,string,РНОКПП відповідальної особи (водія)
       3.3.7,specifiedGovernmentRegistrations,M, ,Посвідчення Водія / GLN Водія / GLN компанії-учасника
       3.3.7.1,id,M/O,"* string
       * decimal при typeCode=DRIVER_GLN / TRADEPARTY_GLN","* Серія та номер водійського посвідчення Водія (поле обов'язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456
       * для typeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)
       * для typeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов'язкове до заповнення для відправника транзакції)"
       3.3.7.2,typeCode,O,string,"Код типу:

       * DRIVER_GLN
       * TRADEPARTY_GLN"
       3.4,connectingCarrierTradeParty,M,,"Перевізник, що приймає вантаж"
       3.4.1.1,id.schemeAgencyID,M,string,"ЄДРПОУ Перевізника, що приймає вантаж"
       3.4.1.2,id.value,M,decimal,Значення
       3.4.2,name,M,string,"Повне найменування Перевізника (найменування суб’єкта господарювання (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник уклав договір на надання транспортних послуг)"
       3.4.3,roleCode,M,string,Роль учасника (Перевізник (новий) - СH). Довідник ролей
       3.4.4,tradeContact,O,,Контакти відповідального представника
       3.4.4.1,personName,O,string,ПІБ
       3.4.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
       3.4.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
       3.4.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
       3.4.5,postalTradeAddress,M,,Юридична адреса Перевізника (юридична адреса юридичної особи або адреса реєстрації фізичної особи-підприємця)
       3.4.5.1,postCode,O,decimal,Індекс
       3.4.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
       3.4.5.3,cityName,M,string,Місто (назва населеного пункту)
       3.4.5.4,countryID,M,string,Країна (UA)
       3.4.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
       3.4.6,specifiedGovernmentRegistrations,M,,Посвідчення Водія / GLN Водія / GLN компанії-учасника
       3.4.6.1,id,M/O,"* string
       * decimal при typeCode=DRIVER_GLN / TRADEPARTY_GLN","Серія та номер водійського посвідчення Водія (поле обов’язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456

       для typeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)

       для typeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов’язкове до заповнення для відправника транзакції)"
       3.4.6.2,typeCode,O,string,"Код типу:
       DRIVER_GLN

       TRADEPARTY_GLN"
       3.5,carrierUtilizedLogisticsTransportEquipment,M,,"Автомобіль, що розвантажується"
       3.5.1,id,M,string,"Реєстраційний номер автомобіля згідно з техпаспортом
       укр.номери: має відповідати одному з патернів для автомобільних номерних знаків

       єврономери: без валідації"
       3.5.2.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування автомобіля"
       3.5.3,settingTransportSettingTemperature,O,,Інструкції з експлуатації
       3.5.3.1,minimum,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
       3.5.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
       3.5.3.1.2,value,O,decimal,Значення
       3.5.3.2,maximum,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
       3.5.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
       3.5.3.2.2,value,O,decimal,Значення
       3.5.4.1,applicableNotes (з кодом BRAND).contentCode,M,string,Код BRAND
       3.5.4.2,applicableNotes (з кодом BRAND).content,M,string,Марка автомобіля згідно з техпаспортом
       3.5.5.1,applicableNotes (з кодом MODEL).contentCode,M,string,Код MODEL
       3.5.5.2,applicableNotes (з кодом MODEL).content,M,string,Модель автомобіля згідно з техпаспортом
       3.6,carrierUtilizedLogisticsTransportEquipment (CategoryCode=TE),O,,"Причіп/напівпричіп, що розвантажується"
       3.6.1,id,O,string,"Реєстраційний номер причіпа/напівпричіпа згідно з техпаспортом
       укр.номери: має відповідати одному з патернів для автомобільних номерних знаків

       єврономери: без валідації"
       3.6.2,categoryCode,O,string,Код TE - Причіп/напівпричіп
       3.6.3,characteristicCode,O,string,"Код визначення Причіп/напівпричіп:
       14 - Причіп

       17 - Напівпричіп"
       3.6.4.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування причіпа/напівпричіпа"
       3.6.5,settingTransportSettingTemperature,O,,Інструкції з експлуатації
       3.6.5.1,minimum,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
       3.6.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
       3.6.5.1.2,value,O,decimal,Значення
       3.6.5.2,maximum,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
       3.6.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
       3.6.5.2.2,value,O,decimal,Значення
       3.6.6.1,applicableNotes (з кодом BRAND).contentCode,O,string,Код BRAND
       3.6.6.2,applicableNotes (з кодом BRAND).content,O,string,Марка причіпа/напівпричіпа згідно з техпаспортом
       3.6.7.1,applicableNotes (з кодом MODEL).contentCode,O,string,Код MODEL
       3.6.7.2,applicableNotes (з кодом MODEL).content,O,string,Модель причіпа/напівпричіпа згідно з техпаспортом
       3.7,connectingCarrierUtilizedLogisticsTransportEquipment,M,,"Автомобіль, що завантажується"
       3.7.1,id,M,string,"Реєстраційний номер автомобіля згідно з техпаспортом
       укр.номери: має відповідати одному з патернів для автомобільних номерних знаків

       єврономери: без валідації"
       3.7.2.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування автомобіля"
       3.7.3,settingTransportSettingTemperature,O,,Інструкції з експлуатації
       3.7.3.1,minimum,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
       3.7.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
       3.7.3.1.2,value,O,decimal,Значення
       3.7.3.2,maximum,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
       3.7.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
       3.7.3.2.2,value,O,decimal,Значення
       3.7.4.1,applicableNotes (з кодом BRAND).contentCode,M,string,Код BRAND
       3.7.4.2,applicableNotes (з кодом BRAND).content,M,string,Марка автомобіля згідно з техпаспортом
       3.7.5.1,applicableNotes (з кодом MODEL).contentCode,M,string,Код MODEL
       3.7.5.2,applicableNotes (з кодом MODEL).content,M,string,Модель автомобіля згідно з техпаспортом
       3.8,connectingCarrierUtilizedLogisticsTransportEquipment (CategoryCode=TE),O,,"Причіп/напівпричіп, що завантажується"
       3.8.1,id,M,string,"Реєстраційний номер причіпа/напівпричіпа згідно з техпаспортом
       укр.номери: має відповідати одному з патернів для автомобільних номерних знаків

       єврономери: без валідації"
       3.8.2,categoryCode,M,string,Код TE - Причіп/напівпричіп
       3.8.3,characteristicCode,M,string,"Код визначення Причіп/напівпричіп:
       14 - Причіп

       17 - Напівпричіп"
       3.8.4.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування причіпа/напівпричіпа"
       3.8.5,settingTransportSettingTemperature,O,,Інструкції з експлуатації
       3.8.5.1,minimum,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
       3.8.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
       3.8.5.1.2,value,O,decimal,Значення
       3.8.5.2,maximum,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
       3.8.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
       3.8.5.2.2,value,O,decimal,Значення
       3.8.6.1,applicableNotes (з кодом BRAND).contentCode,M,string,Код BRAND
       3.8.6.2,applicableNotes (з кодом BRAND).content,M,string,Марка причіпа/напівпричіпа згідно з техпаспортом
       3.8.7.1,applicableNotes (з кодом MODEL).contentCode,M,string,Код MODEL
       3.8.7.2,applicableNotes (з кодом MODEL).content,M,string,Модель причіпа/напівпричіпа згідно з техпаспортом
       3.9,carrierNotes,M,string,Короткий або повний опис причин складання Акта
       3.10,connectingCarrierNotes,O,string,Особливі відмітки; Інформація щодо незгоди зі змістом Акта
       4,certifyingPartyPayload,M,,Інформація про відповідальних осіб
       4.1,certifyingTradeParty (RoleCode=CA),M,,"Інформація про водія Перевізника, що здає вантаж"
       4.1.1.1,id.schemeAgencyID,O,string,РНОКПП
       4.1.1.2,id.value,O,decimal,Значення
       4.1.2,name,M,string,Посада водія
       4.1.3,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
       4.1.4.1,tradeContact.personName,M,string,ПІБ водія
       4.1.5.1,specifiedGovernmentRegistration.id,M,string,"Серія та номер водійського посвідчення Водія, що здає вантаж. Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456"
       4.2,certifyingTradeParty (RoleCode=OV),O,,"Інформація про відповідальних осіб Перевізника, що здає вантаж"
       4.2.1.1,id.schemeAgencyID,O,string,РНОКПП
       4.2.1.2,id.value,O,decimal,Значення
       4.2.2,name,M,string,Посада відповідальної особи Перевізника
       4.2.3,roleCode,M,string,Роль учасника (Перевізник - OV). Довідник ролей
       4.2.4.1,tradeContact.personName,M,string,ПІБ відповідальної особи Перевізника
       4.2.5.1,specifiedGovernmentRegistration.id,M,string,"Серія та номер водійського посвідчення Водія, що здає вантаж. Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456"
       4.3,certifyingTradeParty (RoleCode=DR),M,,"Інформація про водія Перевізника, що приймає вантаж"
       4.3.1.1,id.schemeAgencyID,O,string,РНОКПП
       4.3.1.2,id.value,O,decimal,Значення
       4.3.2,name,M,string,Посада водія
       4.3.3,roleCode,M,string,Роль учасника (Водій - DR). Довідник ролей
       4.3.4.1,tradeContact.personName,M,string,ПІБ водія
       4.3.5.1,specifiedGovernmentRegistration.id,M,string,"Серія та номер водійського посвідчення Водія, що здає вантаж. Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456"
       4.4,certifyingTradeParty (RoleCode=CH),O,,"Інформація про відповідальних осіб Перевізника, що приймає вантаж"
       4.4.1.1,id.schemeAgencyID,O,string,РНОКПП
       4.4.1.2,id.value,O,decimal,Значення
       4.4.2,name,M,string,Посада відповідальної особи Перевізника
       4.4.3,roleCode,M,string,Роль учасника (Перевізник (новий) - CH). Довідник ролей
       4.4.4.1,tradeContact.personName,M,string,ПІБ відповідальної особи Перевізника
       II,signatureStorage,M,,Підписи
       5,signatures (SigningPartyRoleCode=CA),M,,"КЕП водія Перевізника, що здає вантаж"
       5.1,signingPartyRoleCode,M,string,Роль підписанта (Перевізник - CA). Довідник ролей
       5.2,partySignature,M,string,Підпис (base64 підпису p7s)
       5.3,name,M,string,ПІБ підписанта (водія Перевізника)
       5.4,position,O,string,Посада підписанта (водія Перевізника)
       5.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (водія Перевізника)
       6,signatures (SigningPartyRoleCode=OV),O,,"КЕП Перевізника, що здає вантаж"
       6.1,signingPartyRoleCode,M,string,Роль підписанта (Перевізник - OV). Довідник ролей
       6.2,partySignature,M,string,Підпис (base64 підпису p7s)
       6.3,name,M,string,ПІБ підписанта (відповідальної особи Перевізника)
       6.4,position,O,string,Посада підписанта (відповідальної особи Перевізника)
       6.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (відповідальної особи Перевізника)
       7,signatures (SigningPartyRoleCode=DR),M,,"КЕП водія Перевізника, що приймає вантаж"
       7.1,signingPartyRoleCode,M,string,Роль підписанта (Водій - DR). Довідник ролей
       7.2,partySignature,M,string,Підпис (base64 підпису p7s)
       7.3,name,M,string,ПІБ підписанта (водія Перевізника)
       7.4,position,O,string,Посада підписанта (водія Перевізника)
       7.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (водія Перевізника)
       8,signatures (SigningPartyRoleCode=CH),O,,"КЕП Перевізника, що приймає вантаж"
       8.1,signingPartyRoleCode,M,string,Роль підписанта (Перевізник (новий) - CH). Довідник ролей
       8.2,partySignature,M,string,Підпис (base64 підпису p7s)
       8.3,name,M,string,ПІБ підписанта (відповідальної особи Перевізника)
       8.4,position,O,string,Посада підписанта (відповідальної особи Перевізника)
       8.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (відповідальної особи Перевізника)

.. old style

    Таблиця 1 - Специфікація "Акта перевантаження" (JSON)

    .. csv-table:: 
    :file: for_csv/reload_act_v3_json.csv
    :widths:  1, 1, 5, 12, 41
    :header-rows: 1
    :stub-columns: 0
