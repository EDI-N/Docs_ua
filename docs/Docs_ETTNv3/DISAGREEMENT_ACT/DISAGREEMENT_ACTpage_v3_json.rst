##########################################################################################################################
**"Акт розбіжностей про вантаж"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=93274651

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/akt-rozbiznostei-pro-vantaz>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/DISAGREEMENT_ACT/DISAGREEMENT_ACTpage_v3.html>`__ відрізняються! 

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
                    "id": "urn:ua:e-transport.gov.ua:act:01:disagreement:001"
                }
            },
            "exchangedDocument": {
                "id": "3739 всі різні",
                "issueDateTime": {
                    "dateTime": "2023-06-29T08:01:00.000Z"
                },
                "includedNote": [],
                "issueLogisticsLocation": {
                    "name": "Місце складання документу",
                    "description": "ккк"
                }
            },
            "disagreementActPayload": {
                "previousAdministrativeReferencedDocuments": [
                    {
                        "typeCode": "730",
                        "id": "1b9b021e-c3fd-4b89-a858-af25d67db3ab",
                        "formattedIssueDateTime": {
                            "dateTime": "2023-06-29T07:58:00.000Z"
                        }
                    }
                ],
                "consigneeTradeParty": {
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
                "consignorTradeParty": {
                    "id": {
                        "schemeAgencyID": "ЄДРПОУ",
                        "value": "101010139"
                    },
                    "name": "МСК ВантВідправник",
                    "roleCode": "CZ",
                    "postalTradeAddress": {
                        "postCode": "19114",
                        "streetName": "вул. Миру, буд. 15, офіс 22",
                        "cityName": "c. Оржів",
                        "countryID": "UA",
                        "countrySubDivisionName": "Житомирська обл,  Коростенський р-н"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065741329",
                            "typeCode": "TRADEPARTY_GLN"
                        }
                    ]
                },
                "disagreementSubjectSupplyChainConsignmentItems": [
                    {
                        "sequenceNumeric": "1",
                        "natureIdentificationTransportCargo": {
                            "identification": "товар №1"
                        },
                        "transportLogisticsPackageType": "штука",
                        "disagreementItemQuantity": {
                            "originalItemQuantity": "111",
                            "actualItemQuantity": "111",
                            "deltaItemQuantity": [
                                {
                                    "quantity": "0"
                                }
                            ]
                        },
                        "disagreementGrossWeightMeasure": {
                            "originalGrossWeightMeasure": {
                                "unitCode": "KGM",
                                "value": "111"
                            },
                            "actualGrossWeightMeasure": {
                                "unitCode": "KGM",
                                "value": "111"
                            },
                            "deltaGrossWeightMeasure": {
                                "measure": {
                                    "unitCode": "KGM",
                                    "value": "0"
                                }
                            }
                        },
                        "disagreementInvoiceAmount": {
                            "originalInvoiceAmount": {
                                "currencyId": "UAH",
                                "value": "111"
                            },
                            "actualInvoiceAmount": {
                                "currencyId": "UAH",
                                "value": "111"
                            },
                            "deltaInvoiceAmount": {
                                "amount": {
                                    "currencyId": "UAH",
                                    "value": "0"
                                }
                            }
                        }
                    },
                    {
                        "sequenceNumeric": "2",
                        "natureIdentificationTransportCargo": {
                            "identification": "товар №2"
                        },
                        "transportLogisticsPackageType": "штука",
                        "disagreementItemQuantity": {
                            "originalItemQuantity": "222",
                            "actualItemQuantity": "222",
                            "deltaItemQuantity": [
                                {
                                    "quantity": "0"
                                }
                            ]
                        },
                        "disagreementGrossWeightMeasure": {
                            "originalGrossWeightMeasure": {
                                "unitCode": "KGM",
                                "value": "222"
                            },
                            "actualGrossWeightMeasure": {
                                "unitCode": "KGM",
                                "value": "222"
                            },
                            "deltaGrossWeightMeasure": {
                                "measure": {
                                    "unitCode": "KGM",
                                    "value": "0"
                                }
                            }
                        },
                        "disagreementInvoiceAmount": {
                            "originalInvoiceAmount": {
                                "currencyId": "UAH",
                                "value": "222"
                            },
                            "actualInvoiceAmount": {
                                "currencyId": "UAH",
                                "value": "222"
                            },
                            "deltaInvoiceAmount": {
                                "amount": {
                                    "currencyId": "UAH",
                                    "value": "0"
                                }
                            }
                        }
                    }
                ],
                "disagreementSubjectSupplyChainConsignmentSummary": {
                    "originalGrossWeightMeasure": {
                        "unitCode": "KGM",
                        "value": "333.00"
                    },
                    "deltaGrossWeightMeasure": {
                        "unitCode": "KGM",
                        "value": "0"
                    },
                    "originalInvoiceAmount": {
                        "currencyId": "UAH",
                        "value": "333.00"
                    },
                    "deltaInvoiceAmount": {
                        "currencyId": "UAH",
                        "value": "0"
                    }
                },
                "qualityCharacteristicsDisagreement": {
                    "affixedLogisticsSeals": [
                        {
                            "id": "пл-авто-ттн"
                        },
                        {
                            "id": "пл-нп-ттн"
                        }
                    ],
                    "applicableTransportSettingTemperature": {
                        "minimum": {
                            "unitCode": "CEL",
                            "value": "-22"
                        },
                        "maximum": {
                            "unitCode": "CEL",
                            "value": "-15"
                        }
                    },
                    "otherDisagreementNotes": "щось мене не влаштовує"
                },
                "consigneeNotes": "щось мене не влаштовує",
                "claimNotes": "щось мене не влаштовує"
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
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPbzkPgNe3yqDqIzd_3PyYlNGPbaL27tiF7z5CPd5iexGV74qv6KkAGquRrJL9OQ/pubhtml?gid=2090499753&single=true" width="1100" height="4600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
    3,disagreementActPayload,M,,Зміст «Акта розбіжностей про вантаж»
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
    3.3,consigneeTradeParty,M,,Вантажоодержувач
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
    3.5,consignorTradeParty,M,,Вантажовідправник
    3.5.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажовідправника
    3.5.1.2,id.value,M,decimal,Значення
    3.5.2,name,M,string,"Повне найменування Вантажовідправника (юридичної особи або ПІБ фізичної-особи підприємця), що проводить відвантаження (списання) перелічених в ТТН товарно-матеріальних цінностей"
    3.5.3,roleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
    3.5.4,tradeContact,O, ,Контакти відповідального представника
    3.5.4.1,personName,O,string,ПІБ
    3.5.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.5.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.5.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.5.5,postalTradeAddress,M, ,Юридична адреса Вантажовідправника
    3.5.5.1,postCode,O,decimal,Індекс
    3.5.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.5.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.5.5.4,countryID,M,string,Країна (UA)
    3.5.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.5.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.5.7,specifiedGovernmentRegistrations,M/O, ,GLN Вантажовідправника (блок обов'язковий до заповнення для відправника транзакції)
    3.5.7.1,id,M/O,decimal,GLN Вантажовідправника (поле обов'язкове до заповнення для відправника транзакції)
    3.5.7.2,typeCode,O,string,"Код типу:

    * TRADEPARTY_GLN"
    3.6,disagreementSubjectSupplyChainConsignmentItems,M,,Розбіжності щодо кількісних характеристик вантажу
    3.6.1,sequenceNumeric,M,int,Порядковий номер рядка в таблиці
    3.6.2.1,natureIdentificationTransportCargo.identification,M,string,Найменування вантажу (номер контейнера) за ТТН
    3.6.3,transportLogisticsPackageType,M,string,Одиниця виміру
    3.6.4,disagreementItemQuantity,O,,Відхилення за кількістю місць
    3.6.4.1,originalItemQuantity,M,string,Кількість місць за ТТН
    3.6.4.2,actualItemQuantity,O,string,Кількість місць фактична
    3.6.4.3.1,deltaItemQuantity.quantity,O,string,"Кількість місць Відхилення. Різниця між фактом та даними з ТТН - розраховується системою автоматично і тільки для тих даних, за якими вказано фактичне значення"
    3.6.4.3.2,deltaItemQuantity.explanation,O,string,"причина відхилення за кількістю місць (недостача/надлишок, бій тощо)"
    3.6.5,disagreementGrossWeightMeasure,O,,"Відхилення за масою брутто, кг"
    3.6.5.1,originalGrossWeightMeasure,M,,Маса брутто за ТТН
    3.6.5.1.1,unitCode,M,string,код одиниці виміру (KGM)
    3.6.5.1.2,value,M,decimal,"Значення; точність=0,1"
    3.6.5.2,actualGrossWeightMeasure,O,,Маса брутто Фактична
    3.6.5.2.1,unitCode,M,string,код одиниці виміру (KGM)
    3.6.5.2.2,value,M,decimal,"Значення; точність=0,1"
    3.6.5.3,deltaGrossWeightMeasure,O,,Відхилення
    3.6.5.3.1.1,measure.unitCode,M,string,код одиниці виміру (KGM)
    3.6.5.3.1.2,measure.value,M,decimal,"Значення; точність=0,1"
    3.6.5.3.2,explanation,O,string,причина відхилення за масою (недостача/надлишок тощо)
    3.6.6,disagreementInvoiceAmount,O,,Відхилення за сумою
    3.6.6.1,originalInvoiceAmount,M,,Загальна сума з ПДВ за ТТН
    3.6.6.1.1,currencyId,M,string,Тризначний код валюти (UAH)
    3.6.6.1.2,value,M,decimal,"Значення; точність=0,01"
    3.6.6.2,actualInvoiceAmount,O,,Загальна сума з ПДВ Фактична
    3.6.6.2.1,currencyId,M,string,Тризначний код валюти (UAH)
    3.6.6.2.2,value,M,decimal,"Значення; точність=0,01"
    3.6.6.3,deltaInvoiceAmount,O,,Відхилення
    3.6.6.3.1.1,amount.currencyId,M,string,Тризначний код валюти (UAH)
    3.6.6.3.1.2,amount.value,M,decimal,"Значення; точність=0,01"
    3.6.6.3.2,explanation,O,string,причина відхилення за сумою
    3.6.7,disagreementOtherNotes,O,string,Інші зауваження. Коментарі щодо виявлених розбіжностей по кожному рядку (найменуванню вантажу)
    3.7,disagreementSubjectSupplyChainConsignmentSummary,M,,Розбіжності щодо кількісних характеристик вантажу (сумарні показники)
    3.7.1,originalGrossWeightMeasure,M,,"Разом Маса брутто за ТТН, кг"
    3.7.1.1,unitCode,M,string,код одиниці виміру (KGM)
    3.7.1.2,value,M,decimal,"Значення; точність=0,1"
    3.7.2,deltaGrossWeightMeasure,M,,"Разом Маса брутто Відхилення, кг"
    3.7.2.1,unitCode,M,string,код одиниці виміру (KGM)
    3.7.2.2,value,M,decimal,"Значення; точність=0,1"
    3.7.3,originalInvoiceAmount,M,,"Разом Загальна сума з ПДВ за ТТН, грн."
    3.7.3.1,currencyId,M,string,Тризначний код валюти (UAH)
    3.7.3.2,value,M,decimal,"Значення; точність=0,01"
    3.7.4,deltaInvoiceAmount,M,,"Разом Загальна сума з ПДВ Відхилення, грн."
    3.7.4.1,currencyId,M,string,Тризначний код валюти (UAH)
    3.7.4.2,value,M,decimal,"Значення; точність=0,01"
    3.8,qualityCharacteristicsDisagreement,O,,Розбіжності щодо якісних характеристик вантажу
    3.8.1.1,affixedLogisticsSeals.id,O,string,Номер пломби згідно з ТТН
    3.8.2,affixedLogisticsSealNotes,O,string,Відомості про пошкодження пломби
    3.8.3.1,applicableTransportSettingTemperature.minimum,O,,Температурний режим згідно з ТТН. Мінімальне значення температури
    3.8.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
    3.8.3.1.2,value,O,decimal,Значення
    3.8.3.2,applicableTransportSettingTemperature.maximum,O,,Температурний режим згідно з ТТН. Максимальне значення температури
    3.8.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
    3.8.3.2.2,value,O,decimal,Значення
    3.8.4,applicableTransportSettingTemperatureNotes,O,string,Відомості про недотримання температурного режиму
    3.8.5,packagingDamageDisagreementNotes,O,string,"Відомості про пошкодження тари (опис пошкоджень тари, пакування, маркування тощо)"
    3.8.6,otherDisagreementNotes,O,string,Відомості про інші розбіжності (опис інших невідповідностей у характеристиках вантажу)
    3.9,consigneeNotes,M,string,"Короткий або повний опис причин складання акту (наприклад, виявлено розбіжності щодо якісних та/або кількісних характеристик отриманого вантажу тощо)"
    3.10,claimNotes,M,string,"Висновок (вимоги щодо вирішення розбіжностей). Вказується інформація про те, чи слід пред’являти будь-кому претензії і якщо так, то кому саме"
    3.11,carrierNotes,O,string,Особливі відмітки (Перевізник). Інформація щодо незгоди зі змістом Акта (Перевізник)
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
    4.3,certifyingTradeParty (RoleCode=CZ),M,,Інформація про відповідальних осіб Вантажовідправника
    4.3.1.1,id.schemeAgencyID,O,string,РНОКПП
    4.3.1.2,id.value,O,decimal,Значення
    4.3.2,name,M,string,Посада відповідальної особи Вантажовідправника
    4.3.3,roleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
    4.3.4.1,tradeContact.personName,M,string,ПІБ відповідальної особи Вантажовідправника
    II,signatureStorage,M,,Підписи
    5,signatures (SigningPartyRoleCode=CN),O,,КЕП Вантажоодержувача
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
    7,signatures (SigningPartyRoleCode=CZ),M,,КЕП Вантажовідправника
    7.1,signingPartyRoleCode,M,string,Роль підписанта (Вантажовідправник - CZ). Довідник ролей
    7.2,partySignature,M,string,Підпис (base64 підпису p7s)
    7.3,name,M,string,ПІБ підписанта (Вантажовідправника)
    7.4,position,O,string,Посада підписанта (Вантажовідправника)
    7.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (Вантажовідправника)

.. old style

    Таблиця 1 - Специфікація "Акта розбіжностей про вантаж" (JSON)

    .. csv-table:: 
    :file: for_csv/disagreement_act_v3_json.csv
    :widths:  1, 1, 5, 12, 41
    :header-rows: 1
    :stub-columns: 0
