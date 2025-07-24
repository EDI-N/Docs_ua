##########################################################################################################################
**"Акт про заміну пункту призначення вантажу"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1420079006

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/akt-rozbiznostei-pro-vantaz>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/CONSIGNEE_CHANGE_ACT/CONSIGNEE_CHANGE_ACTpage_v3.html>`__ відрізняються! 

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
                    "id": "urn:ua:e-transport.gov.ua:act:01:consignee_change:001"
                }
            },
            "exchangedDocument": {
                "id": "3739",
                "issueDateTime": {
                    "dateTime": "2023-06-28T12:22:00.000Z"
                },
                "includedNote": [],
                "issueLogisticsLocation": {
                    "name": "Місце складання документу",
                    "description": "київ"
                }
            },
            "consigneeChangeActPayload": {
                "previousAdministrativeReferencedDocuments": [
                    {
                        "typeCode": "730",
                        "id": "0d1dafd1-93d4-4ee1-95ff-b76546628dc3",
                        "formattedIssueDateTime": {
                            "dateTime": "2023-06-28T12:08:00.000Z"
                        }
                    }
                ],
                "initiatorTradeParty": {
                    "id": {
                        "schemeAgencyID": "ЄДРПОУ",
                        "value": "101010140"
                    },
                    "name": "МСК ВантОдержувач",
                    "roleCode": "CN",
                    "postalTradeAddress": {
                        "postCode": "24452",
                        "streetName": "вул. Івана Франка, 20, офіс 101 а",
                        "cityName": "м. Хуст",
                        "countryID": "UA",
                        "countrySubDivisionName": "Закарпатська обл,  Хустський р-н"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065737957",
                            "typeCode": "TRADEPARTY_GLN"
                        }
                    ]
                },
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
                "customerTradeParty": {
                    "id": {
                        "schemeAgencyID": "ЄДРПОУ",
                        "value": "65900960"
                    },
                    "name": "МСК Замовник",
                    "roleCode": "OB",
                    "tradeContact": {
                        "personName": "Саймон Кет",
                        "mobileTelephoneUniversalCommunication": {
                            "completeNumber": "380444444444"
                        }
                    },
                    "postalTradeAddress": {
                        "postCode": "84579",
                        "streetName": "вул. Свободи, буд. 11, офіс 155",
                        "cityName": "м. Київ",
                        "countryID": "UA",
                        "countrySubDivisionName": "м. Київ"
                    },
                    "taxRegistration": {
                        "id": "444444444444"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065737902",
                            "typeCode": "TRADEPARTY_GLN"
                        }
                    ]
                },
                "consigneeTradeParty": {
                    "id": {
                        "schemeAgencyID": "ЄДРПОУ",
                        "value": "101010141"
                    },
                    "name": "МСК ВантОдержувач 2",
                    "roleCode": "UC",
                    "postalTradeAddress": {
                        "postCode": "32578",
                        "streetName": "провулок Зелений, буд. 2, офіс 13",
                        "cityName": "м. Хуст",
                        "countryID": "UA",
                        "countrySubDivisionName": "Закарпатська обл,  Хустський р-н"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065737872",
                            "typeCode": "TRADEPARTY_GLN"
                        }
                    ]
                },
                "consigneeReceiptLogisticsLocation": {
                    "id": {
                        "schemeAgencyID": "КАТОТТГ",
                        "value": "UA21120250010053148"
                    },
                    "name": "МСК ВантОдержувач 2",
                    "typeCode": "10",
                    "description": "Україна, 32578, Закарпатська обл,  Хустський р-н, м. Хуст, провулок Зелений, буд. 2, офіс 13",
                    "physicalGeographicalCoordinate": {
                        "systemId": {
                            "schemeAgencyID": "GLN",
                            "value": "9864065737872"
                        }
                    }
                },
                "initiatorNotes": "воарпірв"
            },
            "certifyingPartyPayload": {
                "certifyingTradeParty": [
                    {
                        "id": {
                            "schemeAgencyID": "РНОКПП",
                            "value": "333333333333"
                        },
                        "name": "в.о. Вантажоодержувача",
                        "roleCode": "CN",
                        "tradeContact": {
                            "personName": "котик Васька",
                            "mobileTelephoneUniversalCommunication": {
                                "completeNumber": "380333333333"
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
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPbzkPgNe3yqDqIzd_3PyYlNGPbaL27tiF7z5CPd5iexGV74qv6KkAGquRrJL9OQ/pubhtml?gid=1507937531&single=true" width="1100" height="4150" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
    3,consigneeChangeActPayload,M,,Зміст «Акта про заміну пункту призначення вантажу»
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
    3.3,initiatorTradeParty,M,,"Ініціатор акта - Вантажоодержувач. Тут наведено приклад для варіанта, коли ініціатором Акта є Вантажоодержувач - в документа буде три сторони-підписувачі: Вантажоодержувач, Перевізник та Замовник (якщо він не є Вантажоодержувачем)."
    3.3.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажоодержувача
    3.3.1.2,id.value,M,decimal,Значення
    3.3.2,name,M,string,"Повне найменування Вантажоодержувача (юридичної особи або ПІБ фізичної-особи підприємця), що проводить одержання (оприбуткування) перелічених в ТТН товарно-матеріальних цінностей"
    3.3.3,roleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
    3.3.4,tradeContact,O, ,Контакти відповідального представника
    3.3.4.1,personName,O,string,ПІБ
    3.3.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.3.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.3.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.3.5,postalTradeAddress,M, ,Юридична адреса Вантажоодержувача
    3.3.5.1,postCode,O,decimal,Індекс
    3.3.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.3.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.3.5.4,countryID,M,string,Країна (UA)
    3.3.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.3.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.3.7,specifiedGovernmentRegistrations,M/O, ,GLN Вантажоодержувача (блок обов'язковий до заповнення для відправника транзакції)
    3.3.7.1,id,M/O,decimal,GLN Вантажоодержувача (поле обов'язкове до заповнення для відправника транзакції)
    3.3.7.2,typeCode,O,string,"Код типу:

    * TRADEPARTY_GLN"
    3.4,carrierTradeParty,M,,Перевізник
    3.4.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Перевізника
    3.4.1.2,id.value,M,decimal,Значення
    3.4.2,name,M,string,"Повне найменування Перевізника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник уклав договір на надання транспортних послуг"
    3.4.3,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
    3.4.4,tradeContact,M, ,Контакти відповідального представника
    3.4.4.1,personName,M,string,"ПІБ водія, що керуватиме ТЗ при перевезенні вантажу"
    3.4.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.4.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.4.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.4.5,postalTradeAddress,M, ,Юридична адреса Перевізника
    3.4.5.1,postCode,O,decimal,Індекс
    3.4.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.4.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.4.5.4,countryID,M,string,Країна (UA)
    3.4.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.4.6.1,taxRegistration.id,M,string,РНОКПП відповідальної особи (водія)
    3.4.7,specifiedGovernmentRegistrations,M, ,Посвідчення Водія / GLN Водія / GLN компанії-учасника
    3.4.7.1,id,M/O,"* string
    * decimal при typeCode=DRIVER_GLN / TRADEPARTY_GLN","* Серія та номер водійського посвідчення Водія (поле обов'язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456
    * для typeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)
    * для typeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов'язкове до заповнення для відправника транзакції)"
    3.4.7.2,typeCode,O,string,"Код типу:

    * DRIVER_GLN
    * TRADEPARTY_GLN"
    3.5,customerTradeParty,M,,Замовник
    3.5.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Замовника
    3.5.1.2,id.value,M,decimal,Значення
    3.5.2,name,M,string,"Повне найменування Замовника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, що проводить оплату транспортної роботи і послуг"
    3.5.3,roleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
    3.5.4,tradeContact,O, ,Контакти відповідального представника
    3.5.4.1,personName,O,string,ПІБ
    3.5.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.5.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.5.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.5.5,postalTradeAddress,M, ,Юридична адреса Замовника
    3.5.5.1,postCode,O,decimal,Індекс
    3.5.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.5.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.5.5.4,countryID,M,string,Країна (UA)
    3.5.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.5.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.5.7,specifiedGovernmentRegistrations,M/O, ,GLN Замовника (блок обов'язковий до заповнення для відправника транзакції)
    3.5.7.1,id,M/O,decimal,GLN Замовника (поле обов'язкове до заповнення для відправника транзакції)
    3.5.7.2,typeCode,O,string,"Код типу:

    * TRADEPARTY_GLN"
    3.6,consigneeTradeParty,O,,Новий Вантажоодержувач
    3.6.1.1,id.schemeAgencyID,M,string,ЄДРПОУ Вантажоодержувача
    3.6.1.2,id.value,M,decimal,Значення
    3.6.2,name,M,string,Повне найменування Вантажоодержувача
    3.6.3,roleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
    3.6.4,tradeContact,O,,Контакти відповідального представника
    3.6.4.1,personName,O,string,ПІБ
    3.6.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.6.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.6.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.6.5,postalTradeAddress,M,,Юридична адреса Вантажоодержувача (юридична адреса юридичної особи або адреса реєстрації фізичної особи-підприємця)
    3.6.5.1,postCode,O,decimal,Індекс
    3.6.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.6.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.6.5.4,countryID,M,string,Країна (UA)
    3.6.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.6.6.1,specifiedTaxRegistration.id,O,string,РНОКПП відповідальної особи Вантажоодержувача
    3.6.7,specifiedGovernmentRegistrations,M,,GLN Вантажоодержувача
    3.6.7.1,id,M/O,decimal,GLN компанії-учасника (поле обов’язкове до заповнення для відправника транзакції)
    3.6.7.2,typeCode,O,string,"Код типу:
    TRADEPARTY_GLN"
    3.7,consigneeReceiptLogisticsLocation,M,,Пункт розвантаження
    3.7.1.1,id.schemeAgencyID,M,string,Код КАТОТТГ пункту розвантаження відповідно до Кодифікатора адміністративно-територіальних одиниць та територій територіальних громад
    3.7.1.2,id.value,M,string,Значення
    3.7.2,name,M,string,Найменування пункту розвантаження
    3.7.3,roleCode,M,string,Тип операції: 10 - навантаження; 5 - розвантаження
    3.7.4,description,M,string,Опис (адреса) пункту розвантаження
    3.7.5,physicalGeographicalCoordinate,M,,Географічні координати
    3.7.5.1,latitudeMeasure,O,string,Географічні координати (Широта)
    3.7.5.2,longitudeMeasure,O,string,Географічні координати (Довгота)
    3.7.5.3.1,systemId.schemeAgencyID,M/O,string,GLN (блок обов'язковий до заповнення для відправника транзакції)
    3.7.5.3.2,systemId.value,M,decimal,Значення
    3.8,initiatorNotes,M,string,Короткий або повний опис причин складання акта (Ініціатор)
    3.9,carrierNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Перевізник)
    3.10,customerNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Замовник)
    4,certifyingPartyPayload,M,,Інформація про відповідальних осіб
    4.1,certifyingTradeParty (RoleCode=CN),O,,Інформація про відповідальних осіб Вантажоодержувача
    4.1.1.1,id.schemeAgencyID,O,string,РНОКПП
    4.1.1.2,id.value,O,decimal,Значення
    4.1.2,name,M,string,Посада відповідальної особи Вантажоодержувача
    4.1.3,roleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
    4.1.4.1,tradeContact.personName,M,string,ПІБ відповідальної особи Вантажоодержувача
    4.2,certifyingTradeParty (RoleCode=CA),M,,Інформація про Перевізника
    4.2.1.1,id.schemeAgencyID,O,string,РНОКПП
    4.2.1.2,id.value,O,decimal,Значення
    4.2.2,name,M,string,Посада Перевізника
    4.2.3,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
    4.2.4.1,tradeContact.personName,M,string,ПІБ Перевізника
    4.3,certifyingTradeParty (RoleCode=ОВ),M,,Інформація про Замовника
    4.3.1.1,id.schemeAgencyID,O,string,РНОКПП
    4.3.1.2,id.value,O,decimal,Значення
    4.3.2,name,M,string,Посада Замовника
    4.3.3,roleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
    4.3.4.1,tradeContact.personName,M,string,ПІБ Замовника
    II,signatureStorage,M,,Підписи
    5,signatures (SigningPartyRoleCode=CN),M,,КЕП Вантажоодержувача
    5.1,signingPartyRoleCode,M,string,Роль підписанта (Вантажоодержувач - CN). Довідник ролей
    5.2,partySignature,M,string,Підпис (base64 підпису p7s)
    5.3,name,M,string,ПІБ підписанта (відповідальної особи Вантажоодержувача)
    5.4,position,O,string,Посада підписанта (відповідальної особи Вантажоодержувача)
    5.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (відповідальної особи Вантажоодержувача)
    6,signatures (SigningPartyRoleCode=CA),M,,КЕП Перевізника
    6.1,signingPartyRoleCode,M,string,Роль підписанта (Перевізник - CA). Довідник ролей
    6.2,partySignature,M,string,Підпис (base64 підпису p7s)
    6.3,name,M,string,ПІБ підписанта (Перевізника)
    6.4,position,O,string,Посада підписанта (Перевізника)
    6.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (Перевізника)
    7,signatures (SigningPartyRoleCode=OB),M,,КЕП Замовника
    7.1,signingPartyRoleCode,M,string,Роль підписанта (Замовник - OB). Довідник ролей
    7.2,partySignature,M,string,Підпис (base64 підпису p7s)
    7.3,name,M,string,ПІБ підписанта (Замовника)
    7.4,position,O,string,Посада підписанта (Замовника)
    7.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (Замовника)

.. old style

    Таблиця 1 - Специфікація "Акта про заміну пункту призначення вантажу" (JSON)

    .. csv-table:: 
    :file: for_csv/consigneechange_act_v3_json.csv
    :widths:  1, 1, 5, 12, 41
    :header-rows: 1
    :stub-columns: 0

