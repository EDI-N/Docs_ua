##########################################################################################################################
**"Акт розбіжностей про вантаж"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=93274651

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

Таблиця 1 - Специфікація "Акта розбіжностей про вантаж" (JSON)

.. csv-table:: 
  :file: for_csv/disagreement_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.