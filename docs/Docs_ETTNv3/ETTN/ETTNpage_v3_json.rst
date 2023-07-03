##########################################################################################################################
**"Електронна товарно-транспортна накладна" (е-ТТН)**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1423864081

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__ відрізняються! 

**JSON:**

.. code:: json

    {
        "ecmr": {
            "documentContext": {
                "transactionID": "0",
                "documentCode": {
                    "id": "urn:ua:e-transport.gov.ua:ettn:01"
                },
                "documentSubCode": {
                    "id": "urn:ua:e-transport.gov.ua:ettn:01:generic:001"
                }
            },
            "exchangedDocument": {
                "id": "3739 всі різні",
                "issueDateTime": {
                    "dateTime": "2023-06-28T12:08:00.000Z"
                },
                "includedNote": [],
                "issueLogisticsLocation": {
                    "name": "Місце складання документу",
                    "description": "київ"
                }
            },
            "specifiedSupplyChainConsignment": {
                "grossWeightMeasure": {
                    "unitCode": "KGM",
                    "value": "333"
                },
                "associatedInvoiceAmount": {
                    "currencyId": "UAH",
                    "value": "333"
                },
                "consignmentItemQuantity": "333",
                "consignor": {
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
                "consignee": {
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
                "carrier": {
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
                "notifiedTradeParties": [
                    {
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
                    {
                        "id": {
                            "schemeAgencyID": "ЄДРПОУ",
                            "value": "101010182"
                        },
                        "name": "МСК Експедитор",
                        "roleCode": "FW",
                        "postalTradeAddress": {
                            "postCode": "12345",
                            "streetName": "Юридична адреса експедитора",
                            "cityName": "м. Хуст",
                            "countryID": "UA",
                            "countrySubDivisionName": "Закарпатська обл,  Хустський р-н"
                        },
                        "specifiedGovernmentRegistrations": [
                            {
                                "id": "9864065745891",
                                "typeCode": "TRADEPARTY_GLN"
                            }
                        ]
                    }
                ],
                "carrierAcceptanceLogisticsLocation": {
                    "id": {
                        "schemeAgencyID": "КАТОТТГ",
                        "value": "UA80000000000875983"
                    },
                    "name": "адреса Свят",
                    "typeCode": "5",
                    "description": "Україна, м. Київ, провулок Святошинський 22",
                    "physicalGeographicalCoordinate": {
                        "systemId": {
                            "schemeAgencyID": "GLN",
                            "value": "9864065741015"
                        }
                    }
                },
                "consigneeReceiptLogisticsLocation": {
                    "id": {
                        "schemeAgencyID": "КАТОТТГ",
                        "value": "UA32080110010033149"
                    },
                    "name": "адреса Гост",
                    "typeCode": "10",
                    "description": "Україна, Київська обл,  Бучанський р-н, смт. Гостомель, вул. Дружби, 33",
                    "physicalGeographicalCoordinate": {
                        "systemId": {
                            "schemeAgencyID": "GLN",
                            "value": "9864065741022"
                        }
                    }
                },
                "associatedReferencedDocuments": [],
                "deliveryTransportEvent": {
                    "certifyingTradeParties": []
                },
                "pickUpTransportEvent": {
                    "certifyingTradeParties": [
                        {
                            "id": {
                                "schemeAgencyID": "РНОКПП",
                                "value": "111111111111"
                            },
                            "name": "в.о. Вантажовідправника",
                            "roleCode": "CZ",
                            "tradeContact": {
                                "personName": "котик Пашка",
                                "mobileTelephoneUniversalCommunication": {
                                    "completeNumber": "380111111111"
                                }
                            }
                        }
                    ]
                },
                "includedSupplyChainConsignmentItems": [
                    {
                        "sequenceNumeric": "1",
                        "invoiceAmount": {
                            "currencyId": "UAH",
                            "value": "111"
                        },
                        "grossWeightMeasure": {
                            "unitCode": "KGM",
                            "value": "111"
                        },
                        "natureIdentificationTransportCargo": {
                            "identification": "товар №1"
                        },
                        "transportLogisticsPackage": {
                            "itemQuantity": "111",
                            "type": "штука"
                        },
                        "applicableNotes": []
                    },
                    {
                        "sequenceNumeric": "2",
                        "invoiceAmount": {
                            "currencyId": "UAH",
                            "value": "222"
                        },
                        "grossWeightMeasure": {
                            "unitCode": "KGM",
                            "value": "222"
                        },
                        "natureIdentificationTransportCargo": {
                            "identification": "товар №2"
                        },
                        "transportLogisticsPackage": {
                            "itemQuantity": "222",
                            "type": "штука"
                        },
                        "applicableNotes": []
                    }
                ],
                "utilizedLogisticsTransportEquipments": [
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
                "deliveryInstructions": {
                    "description": "покілометровий тариф",
                    "descriptionCode": "TRANSPORTATION_TYPE"
                }
            }
        },
        "ram": "urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103",
        "udt": "urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27",
        "qdt": "urn:un:unece:uncefact:data:standard:QualifiedDataType:103",
        "uas": "urn:ua:signatures:SignaturesExtensions:1"
    }

Таблиця 1 - Специфікація "Електронної товарно-транспортної накладної" (JSON)

.. csv-table:: 
  :file: for_csv/ettn_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
