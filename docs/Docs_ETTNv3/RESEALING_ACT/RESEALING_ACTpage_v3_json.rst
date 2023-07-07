##########################################################################################################################
**"Акт перепломбування"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=740795377

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/RESEALING_ACT/RESEALING_ACTpage_v3.html>`__ відрізняються! 

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
                    "id": "urn:ua:e-transport.gov.ua:act:01:resealing:001"
                }
            },
            "exchangedDocument": {
                "id": "3739 всі різні",
                "issueDateTime": {
                    "dateTime": "2023-06-28T15:24:00.000Z"
                },
                "includedNote": [],
                "issueLogisticsLocation": {
                    "name": "Місце складання документу",
                    "description": "к"
                }
            },
            "resealingActPayload": {
                "previousAdministrativeReferencedDocuments": [
                    {
                        "typeCode": "730",
                        "id": "0d1dafd1-93d4-4ee1-95ff-b76546628dc3",
                        "formattedIssueDateTime": {
                            "dateTime": "2023-06-28T12:08:00.000Z"
                        }
                    }
                ],
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
                "originalUtilizedLogisticsTransportEquipment": [
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
                "resealedUtilizedLogisticsTransportEquipment": [
                    {
                        "id": "аа0101аа",
                        "affixedLogisticsSeals": [
                            {
                                "id": "нова пломба"
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
                "customerNotes": "кк"
            },
            "certifyingPartyPayload": {
                "certifyingTradeParty": [
                    {
                        "id": {
                            "schemeAgencyID": "РНОКПП",
                            "value": "444444444444"
                        },
                        "name": "в.о. Замовника",
                        "roleCode": "OB",
                        "tradeContact": {
                            "personName": "Саймон Кет",
                            "mobileTelephoneUniversalCommunication": {
                                "completeNumber": "380444444444"
                            }
                        }
                    }
                ]
            }
        }
    }

Таблиця 1 - Специфікація "Акта перепломбування" (JSON)

.. csv-table:: 
  :file: for_csv/resealing_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.