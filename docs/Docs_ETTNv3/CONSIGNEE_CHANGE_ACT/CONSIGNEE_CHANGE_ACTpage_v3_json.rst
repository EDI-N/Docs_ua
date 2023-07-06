##########################################################################################################################
**"Акт про заміну пункту призначення вантажу"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1420079006

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

Таблиця 1 - Специфікація "Акта про заміну пункту призначення вантажу" (JSON)

.. csv-table:: 
  :file: for_csv/consigneechange_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.