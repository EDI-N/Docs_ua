##########################################################################################################################
**"Акт перевантаження"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=54298378

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/RELOAD_ACT/RELOAD_ACTpage_v3.html>`__ відрізняються! 

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

Таблиця 1 - Специфікація "Акта перевантаження" (JSON)

.. csv-table:: 
  :file: for_csv/reload_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.