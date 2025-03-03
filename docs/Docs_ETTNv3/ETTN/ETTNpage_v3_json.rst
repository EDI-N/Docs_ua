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
            "id": "test_03",
            "issueDateTime": {
                "dateTime": "2025-02-19T16:13:00+02:00"
            },
            "includedNote": [
                {
                    "contentCode": {
                        "listAgencyID": "vatAmount",
                        "value": "2332"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "gps_number",
                        "value": "1122"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "logger_number",
                        "value": "3342113"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "reserve_number",
                        "value": "1313441"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "comment",
                        "value": "24422424"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "logistic_unit_number_with_logger",
                        "value": "131331"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "vehicle_length",
                        "value": "11.32"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "vehicle_width",
                        "value": "3.3"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "vehicle_height",
                        "value": "25"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "gross_vehicle_weight_with_cargo",
                        "value": "34322"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "consignmentItemQuantity_text",
                        "value": "чотири цілих"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "grossWeightMeasure_text",
                        "value": "триста цілих"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "associatedInvoiceAmount_text",
                        "value": "чотириста грн 0 коп"
                    },
                    "content": "CZ"
                },
                {
                    "contentCode": {
                        "listAgencyID": "vatAmount_text",
                        "value": "дві тисячі триста тридцять дві грн 0 коп"
                    },
                    "content": "CZ"
                }
            ],
            "issueLogisticsLocation": {
                "name": "Місце складання документу",
                "description": "Чернігівський р-н, c. Дніпровське"
            }
        },
        "specifiedSupplyChainConsignment": {
            "grossWeightMeasure": {
                "unitCode": "KGM",
                "value": "300"
            },
            "associatedInvoiceAmount": {
                "currencyId": "UAH",
                "value": "400"
            },
            "consignmentItemQuantity": "4",
            "consignor": {
                "id": {
                    "schemeAgencyID": "ПАСПОРТ",
                    "value": "AA111111"
                },
                "name": "Мій Вантажовідправник",
                "roleCode": "CZ",
                "tradeContact": {
                    "personName": "Іванов Іван Іванович",
                    "mobileTelephoneUniversalCommunication": {
                        "completeNumber": "380333434035"
                    },
                    "emailURIUniversalCommunication": {
                        "completeNumber": "sfjkfskjfjk@qee.com"
                    }
                },
                "postalTradeAddress": {
                    "postCode": "993564",
                    "streetName": "вул. Нічна, б. 2",
                    "cityName": "c. Дніпровське",
                    "countryID": "UA",
                    "countrySubDivisionName": "Чернігівська обл., Чернігівський р-н"
                },
                "taxRegistration": {
                    "id": "342244244224"
                },
                "specifiedGovernmentRegistrations": [
                    {
                        "id": "9864065745518",
                        "typeCode": "TRADEPARTY_GLN"
                    },
                    {
                        "id": "23512342-35121",
                        "typeCode": "TRADEPARTY_UNZR"
                    }
                ]
            },
            "consignee": {
                "id": {
                    "schemeAgencyID": "РНОКПП",
                    "value": "8883923234"
                },
                "name": "Мій Вантажоодержувача",
                "roleCode": "CN",
                "tradeContact": {
                    "personName": "Ivanov Ivan",
                    "mobileTelephoneUniversalCommunication": {
                        "completeNumber": "380242442424"
                    },
                    "emailURIUniversalCommunication": {
                        "completeNumber": "kjksfjkfskj@jjl.com"
                    }
                },
                "postalTradeAddress": {
                    "postCode": "777321",
                    "streetName": "вул. Котляревського, 1",
                    "cityName": "c. Одиноке",
                    "countryID": "UA",
                    "countrySubDivisionName": "Львівська обл., Львівський р-н"
                },
                "taxRegistration": {
                    "id": "982822894892"
                },
                "specifiedGovernmentRegistrations": [
                    {
                        "id": "9864232618959",
                        "typeCode": "TRADEPARTY_GLN"
                    },
                    {
                        "id": "23512342-35121",
                        "typeCode": "TRADEPARTY_UNZR"
                    }
                ]
            },
            "carrier": {
                "id": {
                    "schemeAgencyID": "РНОКПП",
                    "value": "7828624353"
                },
                "name": "Мій Перевізник",
                "roleCode": "CA",
                "tradeContact": {
                    "personName": "Мій Водій",
                    "telephoneUniversalCommunication": {
                        "completeNumber": "380472348932"
                    }
                },
                "postalTradeAddress": {
                    "postCode": "990392",
                    "streetName": "Адреса",
                    "cityName": "c. Твіржа",
                    "countryID": "UA",
                    "countrySubDivisionName": "Львівська обл., Яворівський р-н"
                },
                "taxRegistration": {
                    "id": "7098394897"
                },
                "specifiedGovernmentRegistrations": [
                    {
                        "id": "QWE534435"
                    },
                    {
                        "id": "9864232618973",
                        "typeCode": "DRIVER_GLN"
                    },
                    {
                        "id": "23512342-35121",
                        "typeCode": "DRIVER_UNZR"
                    },
                    {
                        "id": "9864232618966",
                        "typeCode": "TRADEPARTY_GLN"
                    },
                    {
                        "id": "23512342-35121",
                        "typeCode": "TRADEPARTY_UNZR"
                    }
                ]
            },
            "notifiedTradeParties": [
                {
                    "id": {
                        "schemeAgencyID": "ПАСПОРТ",
                        "value": "АВ534312"
                    },
                    "name": "Мій Замовник",
                    "roleCode": "OB",
                    "tradeContact": {
                        "personName": "Іванов Іван Іванович",
                        "mobileTelephoneUniversalCommunication": {
                            "completeNumber": "380000000000"
                        },
                        "emailURIUniversalCommunication": {
                            "completeNumber": "wwrrwrw@yyr.com"
                        }
                    },
                    "postalTradeAddress": {
                        "postCode": "633323",
                        "streetName": "вул. Незалежності",
                        "cityName": "c. Сімерки",
                        "countryID": "UA",
                        "countrySubDivisionName": "Закарпатська обл., Ужгородський р-н"
                    },
                    "taxRegistration": {
                        "id": "213313131313"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864232618997",
                            "typeCode": "TRADEPARTY_GLN"
                        },
                        {
                            "id": "23512342-35121",
                            "typeCode": "TRADEPARTY_UNZR"
                        }
                    ]
                },
                {
                    "id": {
                        "schemeAgencyID": "ПАСПОРТ",
                        "value": "AA111111"
                    },
                    "name": "ТОВ \"Тест1\"",
                    "roleCode": "FW",
                    "tradeContact": {
                        "personName": "Іванов Іван Іванович",
                        "mobileTelephoneUniversalCommunication": {
                            "completeNumber": "380000999999"
                        },
                        "emailURIUniversalCommunication": {
                            "completeNumber": "2ksfkjsfkjfsjk@eee.com"
                        }
                    },
                    "postalTradeAddress": {
                        "postCode": "73000",
                        "streetName": "Адреса",
                        "cityName": "м. Київ",
                        "countryID": "UA"
                    },
                    "taxRegistration": {
                        "id": "2498429824"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065745518",
                            "typeCode": "TRADEPARTY_GLN"
                        },
                        {
                            "id": "23512342-35121",
                            "typeCode": "TRADEPARTY_UNZR"
                        }
                    ]
                },
                {
                    "id": {
                        "schemeAgencyID": "ПАСПОРТ",
                        "value": "AA111111"
                    },
                    "name": "ТОВ \"Тест1\"",
                    "roleCode": "WD",
                    "tradeContact": {
                        "personName": "Іванов Іван Іванович",
                        "mobileTelephoneUniversalCommunication": {
                            "completeNumber": "380333434035"
                        },
                        "emailURIUniversalCommunication": {
                            "completeNumber": "sfjkfskjfjk@qee.com"
                        }
                    },
                    "postalTradeAddress": {
                        "postCode": "73000",
                        "streetName": "Адреса",
                        "cityName": "м. Київ",
                        "countryID": "UA"
                    },
                    "taxRegistration": {
                        "id": "342244244224"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065745518",
                            "typeCode": "TRADEPARTY_GLN"
                        },
                        {
                            "id": "23512342-35121",
                            "typeCode": "TRADEPARTY_UNZR"
                        }
                    ]
                },
                {
                    "id": {
                        "schemeAgencyID": "ПАСПОРТ",
                        "value": "AA111111"
                    },
                    "name": "ТОВ \"Тест1\"",
                    "roleCode": "COP",
                    "postalTradeAddress": {
                        "postCode": "73000",
                        "streetName": "Адреса",
                        "cityName": "м. Київ",
                        "countryID": "UA"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065745518",
                            "typeCode": "TRADEPARTY_GLN"
                        },
                        {
                            "id": "23512342-35121",
                            "typeCode": "TRADEPARTY_UNZR"
                        }
                    ]
                },
                {
                    "id": {
                        "schemeAgencyID": "ПАСПОРТ",
                        "value": "AA111111"
                    },
                    "name": "ТОВ \"Тест1\"",
                    "roleCode": "AF",
                    "postalTradeAddress": {
                        "postCode": "73000",
                        "streetName": "Адреса",
                        "cityName": "м. Київ",
                        "countryID": "UA"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065745518",
                            "typeCode": "TRADEPARTY_GLN"
                        },
                        {
                            "id": "19761009-12411",
                            "typeCode": "TRADEPARTY_UNZR"
                        }
                    ]
                },
                {
                    "id": {
                        "schemeAgencyID": "ПАСПОРТ",
                        "value": "AA111111"
                    },
                    "name": "ТОВ \"Тест1\"",
                    "roleCode": "AB",
                    "postalTradeAddress": {
                        "postCode": "73000",
                        "streetName": "Адреса",
                        "cityName": "м. Київ",
                        "countryID": "UA"
                    },
                    "specifiedGovernmentRegistrations": [
                        {
                            "id": "9864065745518",
                            "typeCode": "TRADEPARTY_GLN"
                        },
                        {
                            "id": "19761009-12411",
                            "typeCode": "TRADEPARTY_UNZR"
                        }
                    ]
                }
            ],
            "carrierAcceptanceLogisticsLocation": {
                "id": {
                    "schemeAgencyID": "КАТОТТГ",
                    "value": "UA80000000000093317"
                },
                "name": "ТОВ \"Тест1\"",
                "typeCode": "10",
                "description": "Україна, 73000, м. Київ, Адреса",
                "physicalGeographicalCoordinate": {
                    "systemId": {
                        "schemeAgencyID": "GLN",
                        "value": "9864065745518"
                    }
                }
            },
            "consigneeReceiptLogisticsLocation": {
                "id": {
                    "schemeAgencyID": "КАТОТТГ",
                    "value": "UA46060450090035581"
                },
                "name": "Мій Вантажоодержувача",
                "typeCode": "5",
                "description": "Україна, 777321, Львівська обл., Львівський р-н, c. Одиноке, вул. Котляревського, 1",
                "physicalGeographicalCoordinate": {
                    "systemId": {
                        "schemeAgencyID": "GLN",
                        "value": "9864232618959"
                    }
                }
            },
            "associatedReferencedDocuments": [
                {
                    "typeCode": "3",
                    "id": "7777777",
                    "remarks": "f1d8d358-224e-4a06-baba-947124546a75",
                    "formattedIssueDateTime": {
                        "dateTime": "2025-02-13T12:00:00+02:00"
                    }
                },
                {
                    "typeCode": "105",
                    "id": "555555",
                    "remarks": "39f0b309-b858-4cf1-a06d-a9588b1d7f82",
                    "formattedIssueDateTime": {
                        "dateTime": "2025-02-14T12:00:00+02:00"
                    }
                },
                {
                    "typeCode": "723",
                    "id": "112233",
                    "formattedIssueDateTime": {
                        "dateTime": "2025-02-26T12:00:00+02:00"
                    }
                },
                {
                    "typeCode": "290",
                    "remarks": "ПІБ (кому передане право)",
                    "formattedIssueDateTime": {
                        "dateTime": "2025-02-26T12:00:00+02:00"
                    }
                }
            ],
            "deliveryTransportEvent": {
                "actualOccurrenceDateTime": {
                    "dateTime": "2025-02-19T19:15:00+02:00"
                },
                "scheduledOccurrenceDateTime": {
                    "dateTime": "2025-02-19T19:15:00+02:00"
                },
                "certifyingTradeParties": [
                    {
                        "id": {
                            "schemeAgencyID": "ПАСПОРТ",
                            "value": "123456789"
                        },
                        "name": "Вантажоодержувач",
                        "roleCode": "CN",
                        "tradeContact": {
                            "personName": "Гібрид",
                            "mobileTelephoneUniversalCommunication": {
                                "completeNumber": "380444444444"
                            }
                        }
                    },
                    {
                        "id": {
                            "schemeAgencyID": "РНОКПП",
                            "value": "156235184971"
                        },
                        "name": "екстрасенс",
                        "roleCode": "CA",
                        "tradeContact": {
                            "personName": "Гібрид Богдан Микитович",
                            "mobileTelephoneUniversalCommunication": {
                                "completeNumber": "380562354859"
                            }
                        }
                    },
                    {
                        "id": {
                            "schemeAgencyID": "РНОКПП",
                            "value": "3413712913"
                        },
                        "name": "Комірник",
                        "roleCode": "FW",
                        "tradeContact": {
                            "personName": "Іванов",
                            "mobileTelephoneUniversalCommunication": {
                                "completeNumber": "380000000000"
                            }
                        }
                    }
                ],
                "applicableNotes": []
            },
            "pickUpTransportEvent": {
                "actualOccurrenceDateTime": {
                    "dateTime": "2025-02-07T10:30:00+02:00"
                },
                "scheduledOccurrenceDateTime": {
                    "dateTime": "2025-02-07T10:30:00+02:00"
                },
                "certifyingTradeParties": [
                    {
                        "id": {
                            "schemeAgencyID": "РНОКПП",
                            "value": "845792873472"
                        },
                        "name": "тест-посада ВВ",
                        "roleCode": "CZ",
                        "tradeContact": {
                            "personName": "ВО Вантажовідправника",
                            "mobileTelephoneUniversalCommunication": {
                                "completeNumber": "380777777434"
                            },
                            "emailURIUniversalCommunication": {
                                "completeNumber": "test@gmail.com"
                            }
                        }
                    },
                    {
                        "id": {
                            "schemeAgencyID": "РНОКПП",
                            "value": "156235184971"
                        },
                        "name": "екстрасенс",
                        "roleCode": "CA",
                        "tradeContact": {
                            "personName": "Гібрид Богдан Микитович",
                            "mobileTelephoneUniversalCommunication": {
                                "completeNumber": "380562354859"
                            }
                        }
                    },
                    {
                        "id": {
                            "schemeAgencyID": "РНОКПП",
                            "value": "3434513149"
                        },
                        "name": "комірник",
                        "roleCode": "FW",
                        "tradeContact": {
                            "personName": "Трясій Олена Володимирівна",
                            "mobileTelephoneUniversalCommunication": {
                                "completeNumber": "380971853145"
                            },
                            "emailURIUniversalCommunication": {
                                "completeNumber": "test@gmail.com"
                            }
                        }
                    }
                ],
                "applicableNotes": [
                    {
                        "contentCode": "GROSSWEIGHT",
                        "content": "3"
                    },
                    {
                        "contentCode": "DOWNTIME",
                        "content": "11:22"
                    }
                ]
            },
            "includedSupplyChainConsignmentItems": [
                {
                    "sequenceNumeric": "1",
                    "invoiceAmount": {
                        "currencyId": "UAH",
                        "value": "400"
                    },
                    "grossWeightMeasure": {
                        "unitCode": "KGM",
                        "value": "300"
                    },
                    "tariffQuantity": {
                        "unitCode": "UAH",
                        "value": "200"
                    },
                    "globalID": {
                        "schemeAgencyID": "УКТЗЕД",
                        "value": "212112313"
                    },
                    "natureIdentificationTransportCargo": {
                        "identification": "Найменування"
                    },
                    "applicableTransportDangerousGoods": {
                        "UNDGIdentificationCode": "121221"
                    },
                    "associatedReferencedLogisticsTransportEquipment": {
                        "id": "22334"
                    },
                    "associatedReferencedDocuments": [
                        {
                            "typeCode": "3",
                            "id": "1221",
                            "formattedIssueDateTime": {
                                "dateTime": "2025-02-19T12:00:00+02:00"
                            }
                        }
                    ],
                    "transportLogisticsPackage": {
                        "itemQuantity": "4",
                        "typeCode": "CT",
                        "type": "г",
                        "physicalLogisticsShippingMarks": {
                            "marking": "бочки",
                            "barcodeLogisticsLabel": {
                                "id": "14141414141"
                            }
                        }
                    },
                    "applicableNotes": [
                        {
                            "contentCode": "VENDOR_CODE",
                            "content": "14141414"
                        },
                        {
                            "contentCode": "BUYER_CODE",
                            "content": "1314141"
                        },
                        {
                            "contentCode": "QUANTITY",
                            "content": "2"
                        },
                        {
                            "contentCode": "BASE_UOM",
                            "content": "мм"
                        },
                        {
                            "contentCode": "PRICE_WITH_VAT",
                            "content": "2"
                        },
                        {
                            "contentCode": "SUM_WITHOUT_VAT",
                            "content": "4"
                        },
                        {
                            "contentCode": "NET_WEIGHT",
                            "content": "12"
                        },
                        {
                            "contentCode": "RETURN_TARE",
                            "content": "12"
                        },
                        {
                            "contentCode": "RTP_TYPE",
                            "content": "одноразова"
                        },
                        {
                            "contentCode": "RTP_QUANTITY",
                            "content": "3"
                        },
                        {
                            "contentCode": "ANIMAL_ID",
                            "content": "00009999000099"
                        },
                        {
                            "contentCode": "ANIMAL_TYPE",
                            "content": "Вид тварини "
                        },
                        {
                            "contentCode": "TRANSPORTATION_MIN_TEMPERATURE",
                            "content": "10"
                        },
                        {
                            "contentCode": "TRANSPORTATION_MAX_TEMPERATURE",
                            "content": "15"
                        }
                    ]
                }
            ],
            "utilizedLogisticsTransportEquipments": [
                {
                    "id": "APITESTNEW0",
                    "affixedLogisticsSeals": [
                        {
                            "id": "2424424"
                        }
                    ],
                    "settingTransportSettingTemperature": {
                        "minimum": {
                            "unitCode": "CEL",
                            "value": "22"
                        },
                        "maximum": {
                            "unitCode": "CEL",
                            "value": "34"
                        }
                    },
                    "applicableNotes": [
                        {
                            "contentCode": "BRAND",
                            "content": "brand"
                        },
                        {
                            "contentCode": "MODEL",
                            "content": "model"
                        },
                        {
                            "contentCode": "COLOR",
                            "content": "color"
                        },
                        {
                            "contentCode": "TYPE",
                            "content": "type"
                        }
                    ]
                },
                {
                    "id": "KA3935BA",
                    "categoryCode": "TE",
                    "characteristicCode": "17",
                    "affixedLogisticsSeals": [
                        {
                            "id": "24425525"
                        }
                    ],
                    "settingTransportSettingTemperature": {
                        "minimum": {
                            "unitCode": "CEL",
                            "value": "22"
                        },
                        "maximum": {
                            "unitCode": "CEL",
                            "value": "34"
                        }
                    },
                    "applicableNotes": [
                        {
                            "contentCode": "BRAND",
                            "content": "BMW"
                        },
                        {
                            "contentCode": "MODEL",
                            "content": "523I"
                        },
                        {
                            "contentCode": "COLOR",
                            "content": "ЧОРНИЙ"
                        },
                        {
                            "contentCode": "TYPE",
                            "content": "ЗАГАЛЬНИЙ, ЛЕГКОВИЙ, СЕДАН-B"
                        }
                    ]
                },
                {
                    "id": "KA3935BA",
                    "categoryCode": "TE",
                    "characteristicCode": "17",
                    "affixedLogisticsSeals": [
                        {
                            "id": "242424"
                        }
                    ],
                    "settingTransportSettingTemperature": {
                        "minimum": {
                            "unitCode": "CEL",
                            "value": "22"
                        },
                        "maximum": {
                            "unitCode": "CEL",
                            "value": "34"
                        }
                    },
                    "applicableNotes": [
                        {
                            "contentCode": "BRAND",
                            "content": "BMW"
                        },
                        {
                            "contentCode": "MODEL",
                            "content": "523I"
                        },
                        {
                            "contentCode": "COLOR",
                            "content": "ЧОРНИЙ"
                        },
                        {
                            "contentCode": "TYPE",
                            "content": "ЗАГАЛЬНИЙ, ЛЕГКОВИЙ, СЕДАН-B"
                        }
                    ]
                },
                {
                    "id": "ГФ12",
                    "categoryCode": "CN",
                    "characteristicCode": "23",
                    "affixedLogisticsSeals": [
                        {
                            "id": "08258"
                        }
                    ],
                    "settingTransportSettingTemperature": {
                        "minimum": {
                            "unitCode": "CEL",
                            "value": "21"
                        },
                        "maximum": {
                            "unitCode": "CEL",
                            "value": "23"
                        }
                    }
                }
            ],
            "deliveryInstructions": {
                "description": "погодинний тариф",
                "descriptionCode": "TRANSPORTATION_TYPE"
            }
        }
    },
    "ram": "urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103",
    "udt": "urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27",
    "qdt": "urn:un:unece:uncefact:data:standard:QualifiedDataType:103",
    "uas": "urn:ua:signatures:SignaturesExtensions:1"
}

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSrSft75XLCHJK-EsFJsq_rSCmhiwaX1pkEvqxXROD6rVTh2fbdd2pmr1TmYeNjRA/pubhtml?gid=254043882&single=true" width="1100" height="10300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
    I,ecmr,M, ,Початок змісту документа
    1,documentContext,M, ,Технічні дані
    1.1,transactionID,M,string,Номер версії документа (транзакції) в ланцюгу підписання документів
    1.2.1,documentCode.id,M,string,код типу документа = urn:ua:e-transport.gov.ua:ettn:01
    1.3.1,documentSubCode.id,M,string,код підтипу документа = urn:ua:e-transport.gov.ua:ettn:01:generic:001
    2,exchangedDocument,M, ,Реквізити ТТН
    2.1,id,M,string,порядковий номер (серія) документа
    2.2.1,issueDateTime.dateTime,M,"datetime
    (2021-12-13T14:19:23+02:00)",Дата і час складання документа
    2.3,remarks,O,string,Ремарки
    2.4,includedNote,O, ,Додані записи
    2.4.1.1,contentCode.listAgencyID,M,String,"Ідентифікатор:

    * transportation_max_temperature (Максимальна температура під час перевезення)
    * logger_return (Повернення логера)
    * logistic_unit_number_with_logger (Номер логістичної одиниці з термологером)
    * gps_number (Номер GPS)
    * logger_number (Номер термологера).

    Ідентифікатори logistic_unit_number_with_logger / gps_number / logger_number вказуються контрагентом з роллю «Вантажовідправник». Ідентифікатори transportation_max_temperature та logger_return вказуються контрагентом з роллю «Вантажоодержувач»"
    2.4.1.2,contentCode.value,M,"* Число (3)
    * «Так» / «Ні»
    * Рядок","значення ідентифікатора

    * для transportation_max_temperature = Число (3)
    * для logger_return = «Так» / «Ні»
    * для logistic_unit_number_with_logger = Рядок
    * для gps_number = Рядок
    * для logger_number = Рядок"
    2.4.2,content,M,string,"Код ролі учасника. Довідник ролей

    * перевізник - CA
    * новий перевізник - CH
    * водій - DR
    * новий водій - DRS"
    2.5.1,issueLogisticsLocation.name,M,string,Найменування місця складання ТТН
    2.5.2,issueLogisticsLocation.description,M,string,Опис (адреса) місця складання ТТН
    3,specifiedSupplyChainConsignment,M, ,Інформація про перевезення
    3.1.1,grossWeightMeasure.unitCode,M,string,Код одиниці виміру
    3.1.2,grossWeightMeasure.value,M,decimal,Значення
    3.2.1,associatedInvoiceAmount.currencyId,M,string,Тризначний код валюти (UAH)
    3.2.2,associatedInvoiceAmount.value,M,decimal,Значення
    3.3,consignmentItemQuantity,M,decimal,Загальна кількість місць вантажу (контейнерів)
    3.4,consignor,M, ,Вантажовідправник
    3.4.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажовідправника
    3.4.1.2,id.value,M,decimal,Значення
    3.4.2,name,M,string,"Повне найменування Вантажовідправника (юридичної особи або ПІБ фізичної-особи підприємця), що проводить відвантаження (списання) перелічених в ТТН товарно-матеріальних цінностей"
    3.4.3,roleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
    3.4.4,tradeContact,O, ,Контакти відповідального представника
    3.4.4.1,personName,O,string,ПІБ
    3.4.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.4.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.4.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.4.5,postalTradeAddress,M, ,Юридична адреса Вантажовідправника
    3.4.5.1,postCode,O,decimal,Індекс
    3.4.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.4.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.4.5.4,countryID,M,string,Країна (UA)
    3.4.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.4.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.4.7,specifiedGovernmentRegistrations,M/O, ,GLN Вантажовідправника (блок обов'язковий до заповнення для відправника транзакції)
    3.4.7.1,id,M/O,decimal,GLN Вантажовідправника (поле обов'язкове до заповнення для відправника транзакції)
    3.4.7.2,typeCode,O,string,"Код типу:

    * TRADEPARTY_GLN"
    3.5,consignee,M, ,Вантажоодержувач
    3.5.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Вантажоодержувача
    3.5.1.2,id.value,M,decimal,Значення
    3.5.2,name,M,string,"Повне найменування Вантажоодержувача (юридичної особи або ПІБ фізичної-особи підприємця), що проводить одержання (оприбуткування) перелічених в ТТН товарно-матеріальних цінностей"
    3.5.3,roleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
    3.5.4,tradeContact,O, ,Контакти відповідального представника
    3.5.4.1,personName,O,string,ПІБ
    3.5.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.5.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.5.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.5.5,postalTradeAddress,M, ,Юридична адреса Вантажоодержувача
    3.5.5.1,postCode,O,decimal,Індекс
    3.5.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.5.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.5.5.4,countryID,M,string,Країна (UA)
    3.5.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.5.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.5.7,specifiedGovernmentRegistrations,M/O, ,GLN Вантажоодержувача (блок обов'язковий до заповнення для відправника транзакції)
    3.5.7.1,id,M/O,decimal,GLN Вантажоодержувача (поле обов'язкове до заповнення для відправника транзакції)
    3.5.7.2,typeCode,O,string,"Код типу:

    * TRADEPARTY_GLN"
    3.6,carrier,M, ,Перевізник
    3.6.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Перевізника
    3.6.1.2,id.value,M,decimal,Значення
    3.6.2,name,M,string,"Повне найменування Перевізника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник уклав договір на надання транспортних послуг"
    3.6.3,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
    3.6.4,tradeContact,M, ,Контакти відповідального представника
    3.6.4.1,personName,M,string,"ПІБ водія, що керуватиме ТЗ при перевезенні вантажу"
    3.6.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.6.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.6.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.6.5,postalTradeAddress,M, ,Юридична адреса Перевізника
    3.6.5.1,postCode,O,decimal,Індекс
    3.6.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.6.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.6.5.4,countryID,M,string,Країна (UA)
    3.6.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.6.6.1,taxRegistration.id,M,string,РНОКПП відповідальної особи (водія)
    3.6.7,specifiedGovernmentRegistrations,M, ,Посвідчення Водія / GLN Водія / GLN компанії-учасника
    3.6.7.1,id,M/O,"* string
    * decimal при typeCode=DRIVER_GLN / TRADEPARTY_GLN","* Серія та номер водійського посвідчення Водія (поле обов'язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456
    * для typeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)
    * для typeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов'язкове до заповнення для відправника транзакції)"
    3.6.7.2,typeCode,O,string,"Код типу:

    * DRIVER_GLN
    * TRADEPARTY_GLN"
    3.7,notifiedTradeParties (роль - FW),O, ,Експедитор
    3.7.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Експедитора
    3.7.1.2,id.value,M,decimal,Значення
    3.7.2,name,M,string,"Повне найменування Експедитора (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, з яким вантажовідправник (замовник) уклав договір траспортного експедирування"
    3.7.3,roleCode,M,string,Роль учасника (Експедитор - FW). Довідник ролей
    3.7.4,tradeContact,O, ,Контакти відповідального представника
    3.7.4.1,personName,O,string,ПІБ
    3.7.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.7.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.7.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.7.5,postalTradeAddress,O, ,Юридична адреса Експедитора
    3.7.5.1,postCode,O,decimal,Індекс
    3.7.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.7.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.7.5.4,countryID,M,string,Країна (UA)
    3.7.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.7.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.7.7,specifiedGovernmentRegistrations,M/O, ,GLN Експедитора (блок обов'язковий до заповнення для відправника транзакції)
    3.7.7.1,id,M/O,decimal,GLN Експедитора (поле обов'язкове до заповнення для відправника транзакції)
    3.7.7.2,typeCode,O,string,"Код типу:

    * TRADEPARTY_GLN"
    3.8,notifiedTradeParties (роль - OB),M, ,Замовник
    3.8.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Замовника
    3.8.1.2,id.value,M,decimal,Значення
    3.8.2,name,M,string,"Повне найменування Замовника (юридичної особи або фізичної особи - підприємця) або прізвище, ім’я, по батькові фізичної особи, що проводить оплату транспортної роботи і послуг"
    3.8.3,roleCode,M,string,Роль учасника (Замовник - OB). Довідник ролей
    3.8.4,tradeContact,O, ,Контакти відповідального представника
    3.8.4.1,personName,O,string,ПІБ
    3.8.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.8.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.8.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.8.5,postalTradeAddress,M, ,Юридична адреса Замовника
    3.8.5.1,postCode,O,decimal,Індекс
    3.8.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.8.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.8.5.4,countryID,M,string,Країна (UA)
    3.8.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.8.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.8.7,specifiedGovernmentRegistrations,M/O, ,GLN Замовника (блок обов'язковий до заповнення для відправника транзакції)
    3.8.7.1,id,M/O,decimal,GLN Замовника (поле обов'язкове до заповнення для відправника транзакції)
    3.8.7.2,typeCode,O,string,"Код типу:

    * TRADEPARTY_GLN"
    3.9,notifiedTradeParties (роль - WD),O, ,Проміжний склад
    3.9.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Проміжного складу
    3.9.1.2,id.value,M,decimal,Значення
    3.9.2,name,M,string,"Повне найменування Проміжного складу (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
    3.9.3,roleCode,M,string,Роль учасника (Проміжний склад - WD). Довідник ролей
    3.9.4,tradeContact,O, ,Контакти відповідального представника
    3.9.4.1,personName,O,string,ПІБ
    3.9.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.9.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.9.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.9.5,postalTradeAddress,O, ,Юридична адреса Проміжного складу
    3.9.5.1,postCode,O,decimal,Індекс
    3.9.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
    3.9.5.3,cityName,M,string,Місто (назва населеного пункту)
    3.9.5.4,countryID,M,string,Країна (UA)
    3.9.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.9.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.9.7,specifiedGovernmentRegistrations,M/O, ,GLN Проміжного складу (блок обов'язковий до заповнення для відправника транзакції)
    3.9.7.1,id,M/O,decimal,GLN Проміжного складу (поле обов'язкове до заповнення для відправника транзакції)
    3.9.7.2,typeCode,O,string,"Код типу:

    * TRADEPARTY_GLN"
    3.10,notifiedTradeParties (роль - COP),O, ,Охоронна компанія
    3.10.1.1,id.schemeAgencyID,M,string,ЄДРПОУ / РНОКПП Охоронної компанії
    3.10.1.2,id.value,M,decimal,Значення
    3.10.2,name,M,string,"Повне найменування Охоронної компанії, що надає охоронні послуги вантажу під час перевезення"
    3.10.3,roleCode,M,string,Роль учасника (Охоронна компанія - COP). Довідник ролей
    3.10.4,tradeContact,O, ,Контакти відповідального представника
    3.10.4.1,personName,O,string,"ПІБ представника Замовника, який уповноважений супроводжувати вантаж, що підлягає спеціальній охороні"
    3.11,carrierAcceptanceLogisticsLocation,M, ,Пункт навантаження 
    3.11.1.1,id.schemeAgencyID,M,string,КАТОТТГ пункту навантаження
    3.11.1.2,id.value,M,string,Значення
    3.11.2,name,M,string,Найменування пункту навантаження
    3.11.3,typeCode,M,decimal,Тип операції: 10 - навантаження; 5 - розвантаження
    3.11.4,description,M,string,Опис (адреса) пункту навантаження
    3.11.5,physicalGeographicalCoordinate,M, ,Географічні координати
    3.11.5.1,latitudeMeasure,O,string,Географічні координати (Широта)
    3.11.5.2,longitudeMeasure,O,string,Географічні координати (Довгота)
    3.11.5.3.1,systemId.schemeAgencyID,M,string,GLN
    3.11.5.3.2,systemId.value,M,decimal,Значення
    3.12,consigneeReceiptLogisticsLocation,M, ,Пункт розвантаження 
    3.12.1.1,id.schemeAgencyID,M,string,КАТОТТГ пункту розвантаження
    3.12.1.2,id.value,M,string,Значення
    3.12.2,name,M,string,Найменування пункту розвантаження
    3.12.3,typeCode,M,decimal,Тип операції: 10 - навантаження; 5 - розвантаження
    3.12.4,description,M,string,Опис (адреса) пункту розвантаження
    3.12.5,physicalGeographicalCoordinate,M, ,Географічні координати
    3.12.5.1,latitudeMeasure,O,string,Географічні координати (Широта)
    3.12.5.2,longitudeMeasure,O,string,Географічні координати (Довгота)
    3.12.5.3.1,systemId.schemeAgencyID,M,string,GLN
    3.12.5.3.2,systemId.value,M,decimal,Значення
    3.13,associatedReferencedDocuments (TypeCode=723),O, ,"Супровідні документи на вантаж. Документ, що підтверджує охоронні послуги"
    3.13.1,typeCode,M,decimal,"Тип 723 - використовується при зазначенні документа, що підтверджує надання спеціальних охоронних послуг (довідник кодів документів МІУ + довідник внутрішніх кодів документів EDIN)"
    3.13.2,id,M,string,"Номер документа, згідно з яким представник Замовника уповноважений супроводжувати вантаж, який підлягає спеціальній охороні"
    3.13.3,remarks,O,string,UUID супровідного документа
    3.13.4.1,formattedIssueDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час складання супровідного документа
    3.14,associatedReferencedDocuments (TypeCode=290),O, ,Супровідні документи на вантаж. Запис про передачу права на пред’явлення претензії
    3.14.1,typeCode,M,decimal,Тип 290 - використовується при зазначенні передачі права предʼявлення претензії (довідник кодів документів МІУ + довідник внутрішніх кодів документів EDIN)
    3.14.2,id,O,string,Номер документа
    3.14.3,remarks,O,string,UUID супровідного документа
    3.14.4.1,formattedIssueDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час складання супровідного документа
    3.15,associatedReferencedDocuments (TypeCode=916),O, ,Супровідні документи на вантаж. Коригуючі акти
    3.15.1,typeCode,M,decimal,"Тип 916 - використовується при формуванні актів, для вказання попередньої транзакції поточного акту (довідник кодів документів МІУ + довідник внутрішніх кодів документів EDIN)"
    3.15.2,id,M,string,Номер акта
    3.15.3,remarks,O,string,UUID супровідного документа
    3.15.4.1,formattedIssueDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час складання супровідного документа
    3.16,associatedReferencedDocuments (інші),O, ,Інші супровідні документи
    3.16.1,typeCode,O,decimal,"Тип 

    * код 730 використовується для вказання попередніх транзакцій типу е-ТТН
    * код 730 також використовується при створенні актів для вказання е-ТТН до якого створюється акт
    * код 916 використовується при формуванні актів, для вказання попередньої транзакції поточного акту
    * код 723 при зазначенні документа, що підтверджує надання спеціальних охоронних послуг
    * код 290 при зазначенні передачі права предʼявлення претензії
    * код 119 при операціях з актом навантаження на проміжному складі, для зазначення попереднього акту розвантаження на цьому ж складі

    (довідник кодів документів МІУ + довідник внутрішніх кодів документів EDIN)"
    3.16.2,id,O,string,Номер документа
    3.16.3,remarks,O,string,UUID супровідного документа
    3.16.4.1,formattedIssueDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час складання супровідного документа
    3.17,deliveryTransportEvent,M, ,Розвантажувальні роботи
    3.17.1.1,actualOccurrenceDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час прибуття автомобіля на розвантаження
    3.17.2.1,scheduledOccurrenceDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час вибуття автомобіля з-під розвантаження
    3.17.3,certifyingTradeParties (RoleCode=CN),M, ,Інформація про відповідальних осіб Вантажоодержувача
    3.17.3.1,name,M,string,Посада матеріально відповідальної особи вантажоодержувача
    3.17.3.2,roleCode,M,string,Роль учасника (Вантажоодержувач - CN). Довідник ролей
    3.17.3.3.1,tradeContact.personName,M,string,ПІБ матеріально відповідальної особи вантажоодержувача
    3.17.3.4.1,id.schemeAgencyID,M,string,РНОКПП матеріально відповідальної особи вантажоодержувача
    3.17.3.4.2,id.value,M,decimal,Значення
    3.17.4,certifyingTradeParties (RoleCode=DR),M, ,Інформація про водія Перевізника
    3.17.4.1,name,M,string,"Посада водія, що здав вантаж"
    3.17.4.2,roleCode,M,string,Роль учасника (Водій - DR). Довідник ролей
    3.17.4.3.1,tradeContact.personName,M,string,"ПІБ водія, що здав вантаж"
    3.17.4.4.1,id.schemeAgencyID,O,string,РНОКПП Водія
    3.17.4.4.2,id.value,O,decimal,Значення
    3.17.5,certifyingTradeParties (RoleCode=CA),M, ,Інформація про відповідальних осіб Перевізника
    3.17.5.1,name,M,string,Посада відповідальної особи Перевізника
    3.17.5.2,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
    3.17.5.3.1,tradeContact.personName,M,string,ПІБ відповідальної особи Перевізника
    3.17.5.4.1,id.schemeAgencyID,O,string,РНОКПП Перевізника
    3.17.5.4.2,id.value,O,decimal,Значення
    3.17.6,certifyingTradeParties (RoleCode=FW),O, ,Інформація про відповідальних осіб Експедитора
    3.17.6.1,name,M,string,Посада відповідальної особи Експедитора
    3.17.6.2,roleCode,M,string,Роль учасника (Експедитор - FW). Довідник ролей
    3.17.6.3.1,tradeContact.personName,M,string,ПІБ відповідальної особи Експедитора
    3.17.6.4.1,id.schemeAgencyID,O,string,РНОКПП Експедитора
    3.17.6.4.2,id.value,O,decimal,Значення
    3.17.7.1,applicableNotes (з кодом GROSSWEIGHT).contentCode,O,string,Код GROSSWEIGHT
    3.17.7.2,applicableNotes (з кодом GROSSWEIGHT).content,O,decimal,Маса брутто отриманого вантажу в місці розвантаження в кілограмах
    3.17.8.1,applicableNotes (з кодом DOWNTIME).contentCode,O,string,Код DOWNTIME
    3.17.8.2,applicableNotes (з кодом DOWNTIME).content,O,unsignedByte,Час (години) простою під розвантаженням
    3.18,pickUpTransportEvent,O, ,Навантажувальні роботи
    3.18.1.1,actualOccurrenceDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час прибуття автомобіля під навантаження
    3.18.2.1,scheduledOccurrenceDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час вибуття автомобіля з-під навантаження
    3.18.3,certifyingTradeParties (RoleCode=CZ),M, ,Інформація про відповідальних осіб Вантажовідправника
    3.18.3.1,name,M,string,"Посада матеріально відповідальної особи, яка відпускає вантаж"
    3.18.3.2,roleCode,M,string,Роль учасника (Вантажовідправник - CZ). Довідник ролей
    3.18.3.3.1,tradeContact.personName,M,string,"ПІБ матеріально відповідальної особи, яка відпускає вантаж"
    3.18.3.4.1,id.schemeAgencyID,M,string,"РНОКПП матеріально відповідальної особи, яка відпускає вантаж"
    3.18.3.4.2,id.value,M,decimal,Значення
    3.18.4,certifyingTradeParties (RoleCode=DR),M/O, ,Інформація про водія Перевізника. Обов’язково має передаватись один з двох блоків: про Водія або про відповідальну особу Перевізника
    3.18.4.1,name,M,string,"Посада водія, що прийняв вантаж"
    3.18.4.2,roleCode,M,string,Роль учасника (Водій - DR). Довідник ролей
    3.18.4.3.1,tradeContact.personName,M,string,"ПІБ водія, що прийняв вантаж"
    3.18.4.4.1,id.schemeAgencyID,O,string,РНОКПП Водія
    3.18.4.4.2,id.value,O,decimal,Значення
    3.18.5,certifyingTradeParties (RoleCode=CA),M/O, ,Інформація про відповідальних осіб Перевізника. Обов’язково має передаватись один з двох блоків: про Водія або про відповідальну особу Перевізника
    3.18.5.1,name,M,string,Посада відповідальної особи Перевізника
    3.18.5.2,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
    3.18.5.3.1,tradeContact.personName,M,string,ПІБ відповідальної особи Перевізника
    3.18.5.4.1,id.schemeAgencyID,O,string,РНОКПП Перевізника
    3.18.5.4.2,id.value,O,decimal,Значення
    3.18.6,certifyingTradeParties (RoleCode=FW),O, ,Інформація про відповідальних осіб Експедитора
    3.18.6.1,name,M,string,Посада відповідальної особи Експедитора
    3.18.6.2,roleCode,M,string,Роль учасника (Експедитор - FW). Довідник ролей
    3.18.6.3.1,tradeContact.personName,M,string,ПІБ відповідальної особи Експедитора
    3.18.6.4.1,id.schemeAgencyID,O,string,РНОКПП Експедитора
    3.18.6.4.2,id.value,O,decimal,Значення
    3.18.7.1,applicableNotes (з кодом GROSSWEIGHT).contentCode,M,string,Код GROSSWEIGHT
    3.18.7.2,applicableNotes (з кодом GROSSWEIGHT).content,M,decimal,Маса брутто зданого/отриманого вантажу в кілограмах
    3.18.8.1,applicableNotes (з кодом DOWNTIME).contentCode,O,string,Код DOWNTIME
    3.18.8.2,applicableNotes (з кодом DOWNTIME).content,O,unsignedByte,Час простою
    3.19,includedSupplyChainConsignmentItems,M, ,Відомості про вантаж
    3.19.1,sequenceNumeric,M,int,Порядковий номер рядка в таблиці
    3.19.2.1,invoiceAmount.currencyId,M,string,Загальна сума з ПДВ. Тризначний код валюти (UAH)
    3.19.2.2,invoiceAmount.value,M,decimal,Загальна сума з ПДВ. Значення
    3.19.3.1,grossWeightMeasure.unitCode,M,string,Маса брутто вантажу по кожному рядку в кг. Код одиниці виміру
    3.19.3.2,grossWeightMeasure.value,M,decimal,Маса брутто вантажу по кожному рядку в кг. Значення
    3.19.4.1,tariffQuantity.unitCode,O,string,Ціна без ПДВ за одиницю в грн. Це можуть бути як гривні на кілограм (грн./кг) так і гривні на ящик (грн./ящик) - залежить від зазначеної одиниці виміру. Код одиниці виміру («UAH»)
    3.19.4.2,tariffQuantity.value,O,decimal,Значення
    3.19.5.1,globalID.schemeAgencyID,O,string (min 4 - max 10),УКТЗЕД (код продукції)
    3.19.5.2,globalID.value,O,string,Значення
    3.19.6.1,natureIdentificationTransportCargo.identification,M,string,Найменування вантажу
    3.19.7.1,applicableTransportDangerousGoods.UNDGIdentificationCode,O,decimal,"Клас небезпечних речовин, до якого віднесено вантаж (у разі перевезення небезпечних вантажів). Код UNDG, 0 - якщо не використовується"
    3.19.8.1,associatedReferencedLogisticsTransportEquipment.id,O,string,"Номер контейнера, в якому завантажено цей вантаж. Використовуєься опційно для контейнерих перевезень і має відповідати даним тегу utilizedLogisticsTransportEquipments"
    3.19.9.1,associatedReferencedDocuments.id,O,string,"Документи з вантажем. Номер документа, який водій отримує від вантажовідправника і передає вантажоодержувачеві разом з вантажем (товарні, залізничні накладні, сертифікати, свідоцтва тощо)"
    3.19.9.2,associatedReferencedDocuments.remarks,O,string,UUID супровідного документа
    3.19.10,transportLogisticsPackage,O, ,Транспортно-логістичний пакет. ВАЖЛИВО: в Україні дозволяється лише один LogisticsPackage для одного ConsignmentItem!
    3.19.10.1,itemQuantity,O,decimal,"Кількість місць, які визначаються за кожним найменуванням вантажу (це можуть бути ящики, кошики, мішки тощо; якщо вантаж упаковано на піддонах - вказують кількість піддонів)"
    3.19.10.2,typeCode,O,string,Вид пакування (Довідник видів упаковок)
    3.19.10.3,type,O,string,Одиниця виміру для itemQuantity
    3.19.10.4,physicalLogisticsShippingMarks,O, ,Маркування
    3.19.10.4.1,marking,O,string,"Назва транспортної упаковки (вільна назва), в якій перевозиться вантаж"
    3.19.10.4.2.1,barcodeLogisticsLabel.id,O,string (max 128),Штрихкод товару
    3.19.11.1,applicableNotes (з кодом VENDOR_CODE).contentCode,O,string,Код VENDOR_CODE
    3.19.11.2,applicableNotes (з кодом VENDOR_CODE).content,O,string,Артикул товару
    3.19.12.1,applicableNotes (з кодом QUANTITY).contentCode,O,string,Код QUANTITY
    3.19.12.2,applicableNotes (з кодом QUANTITY).content,O,string,Кількість товару
    3.19.13.1,applicableNotes (з кодом URL).contentCode,O,string,Код URL
    3.19.13.2,applicableNotes (з кодом URL).content,O,string,Посилання на документ
    3.19.14.1,applicableNotes (з кодом BASE_UOM).contentCode,O,string,Код BASE_UOM
    3.19.14.2,applicableNotes (з кодом BASE_UOM).content,O,string,Одиниця виміру кількості товару для QUANTITY
    3.19.15.1,applicableNotes (з кодом BUYER_CODE).contentCode,O,string,Код BUYER_CODE
    3.19.15.2,applicableNotes (з кодом BUYER_CODE).content,O,string,Артикул покупця (використовується для ідентифікації товарної позиції при прийманні)
    3.19.16.1,applicableNotes (з кодом PRICE_WITH_VAT).contentCode,O,string,Код PRICE_WITH_VAT
    3.19.16.2,applicableNotes (з кодом PRICE_WITH_VAT).content,O,string,Ціна за одиницю з ПДВ
    3.19.17.1,applicableNotes (з кодом SUM_WITHOUT_VAT).contentCode,O,string,Код SUM_WITHOUT_VAT
    3.19.17.2,applicableNotes (з кодом SUM_WITHOUT_VAT).content,O,string,Загальна сума без ПДВ
    3.19.18.1,applicableNotes (з кодом RETURN_TARE).contentCode,O,string,Код RETURN_TARE
    3.19.18.2,applicableNotes (з кодом RETURN_TARE).content,O,string,Ознака «зворотня тара»
    3.19.19.1,applicableNotes (з кодом NET_WEIGHT).contentCode,O,string,Код NET_WEIGHT
    3.19.19.2,applicableNotes (з кодом NET_WEIGHT).content,O,string,Маса нетто
    3.19.20.1,applicableNotes (з кодом RTP_TYPE).contentCode,O,string,Код RTP_TYPE
    3.19.20.2,applicableNotes (з кодом RTP_TYPE).content,O,string,"Тип транспортної упаковки, наприклад, контейнер"
    3.19.21.1,applicableNotes (з кодом RTP_NAME).contentCode,O,string,Код RTP_NAME
    3.19.21.2,applicableNotes (з кодом RTP_NAME).content,O,string,"Назва транспортної упаковки, наприклад, контейнер для перевезення сипучих речовин"
    3.19.22.1,applicableNotes (з кодом RTP_QUANTITY).contentCode,O,string,Код RTP_QUANTITY
    3.19.22.2,applicableNotes (з кодом RTP_QUANTITY).content,O,string,Кількість транспортної упаковки (використовується для обліку оборотної тари)
    3.20,utilizedLogisticsTransportEquipments,M, ,Автомобіль
    3.20.1,id,M,string,"Реєстраційний номер автомобіля згідно з техпаспортом

    * укр.номери: має відповідати одному з патернів для автомобільних номерних знаків
    * єврономери: без валідації"
    3.20.2.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування автомобіля"
    3.20.3,settingTransportSettingTemperature,O, ,Інструкції з експлуатації
    3.20.3.1,minimum,O, ,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
    3.20.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
    3.20.3.1.2,value,O,decimal,Значення
    3.20.3.2,maximum,O, ,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
    3.20.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
    3.20.3.2.2,value,O,decimal,Значення
    3.20.4.1,applicableNotes (з кодом BRAND).contentCode,M,string,Код BRAND
    3.20.4.2,applicableNotes (з кодом BRAND).content,M,string,Марка автомобіля згідно з техпаспортом
    3.20.5.1,applicableNotes (з кодом MODEL).contentCode,M,string,Код MODEL
    3.20.5.2,applicableNotes (з кодом MODEL).content,M,string,Модель автомобіля згідно з техпаспортом
    3.20.6.1,applicableNotes (з кодом COLOR).contentCode,O,string,Код COLOR
    3.20.6.2,applicableNotes (з кодом COLOR).content,O,string,Колір автомобіля згідно з техпаспортом
    3.20.7.1,applicableNotes (з кодом TYPE).contentCode,O,string,Код TYPE
    3.20.7.2,applicableNotes (з кодом TYPE).content,O,string,Тип автомобіля згідно з техпаспортом
    3.21,utilizedLogisticsTransportEquipments (CategoryCode=TE),O, ,Причіп/напівпричіп
    3.21.1,id,O,string,Реєстраційний номер причіпа/напівпричіпа згідно з техпаспортом
    3.21.2,categoryCode,M,string,Тип TE - Причіп/напівпричіп
    3.21.3,characteristicCode,M,decimal,"Код визначення Причіп/напівпричіп:

    * 14 - Причіп
    * 17 - Напівпричіп"
    3.21.4.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування причіпа/напівпричіпа"
    3.21.5,settingTransportSettingTemperature,O, ,Інструкції з експлуатації
    3.21.5.1,minimum,O, ,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
    3.21.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
    3.21.5.1.2,value,O,decimal,Значення
    3.21.5.2,maximum,O, ,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
    3.21.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
    3.21.5.2.2,value,O,decimal,Значення
    3.21.6.1,applicableNotes (з кодом BRAND).contentCode,M,string,Код BRAND
    3.21.6.2,applicableNotes (з кодом BRAND).content,M,string,Марка причіпа/напівпричіпа згідно з техпаспортом
    3.21.7.1,applicableNotes (з кодом MODEL).contentCode,M,string,Код MODEL
    3.21.7.2,applicableNotes (з кодом MODEL).content,M,string,Модель причіпа/напівпричіпа згідно з техпаспортом
    3.21.8.1,applicableNotes (з кодом COLOR).contentCode,O,string,Код COLOR
    3.21.8.2,applicableNotes (з кодом COLOR).content,O,string,Колір причіпа/напівпричіпа згідно з техпаспортом
    3.21.9.1,applicableNotes (з кодом TYPE).contentCode,O,string,Код TYPE
    3.21.9.2,applicableNotes (з кодом TYPE).content,O,string,Тип причіпа/напівпричіпа згідно з техпаспортом
    3.22,utilizedLogisticsTransportEquipments (CategoryCode=CN),O, ,Контейнер
    3.22.1,categoryCode,M,string,Тип CN - Контейнер
    3.22.2,characteristicCode,M,decimal,"Тип контейнера:

    * 21 - 20-футовий
    * 23 - 40-футовий"
    3.22.3,id,M,string,Ідентифікаційний номер контейнера
    3.22.4.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування контейнера"
    3.22.5,settingTransportSettingTemperature,O, ,Інструкції з експлуатації
    3.22.5.1,minimum,O, ,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
    3.22.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
    3.22.5.1.2,value,O,decimal,Значення
    3.22.5.2,maximum,O, ,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
    3.22.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
    3.22.5.2.2,value,O,decimal,Значення
    3.23,mainCarriageLogisticsTransportMovement,O, ,Маршрутизація (проміжні пункти перевантаження). Заповнюється Перевізником
    3.23.1,specifiedTransportEvents,M, ,Проміжне розвантаження
    3.23.1.1,id,M,string,Порядковий номер проміжного розвантаження події (події завжди нумеруються в порядку поступового зростання за принципом N+1)
    3.23.1.2,typeCode,M,decimal,"Тип операції (розвантаження=5); завжди одне значення (5), оскільки використовується як планові пункти розвантаження"
    3.23.1.3,description,O,string,Опис
    3.23.1.4,occurrenceLogisticsLocation,M, ,Місцезнаходження
    3.23.1.4.1.1,id.schemeAgencyID,M,string,Код КАТОТТГ складу тимчасового зберігання відповідно до Кодифікатора адміністративно-територіальних одиниць та територій територіальних громад
    3.23.1.4.1.2,id.value,M,string,Значення
    3.23.1.4.2,name,O,string,Найменування та адреса (Місцезнаходження складу)
    3.23.1.4.3,typeCode,M,decimal,"Тип операції (розвантаження=5); завжди одне значення (5), оскільки використовується як планові пункти розвантаження"
    3.23.1.4.4,description,O,string,Додаткова інформація складу тимчасового зберігання
    3.23.1.5,certifyingTradeParties (RoleCode=WD),M, ,Юридична особа Проміжного складу
    3.23.1.5.1.1,id.schemeAgencyID,M,string,"ЄДРПОУ підприємства (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
    3.23.1.5.1.2,id.value,M,decimal,Значення
    3.23.1.5.2,name,M,string,"Повне найменування Проміжного складу (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
    3.23.1.5.3,roleCode,M,string,Роль учасника (Проміжний склад - WD). Довідник ролей
    3.23.1.5.4,tradeContact,O, ,Контакти відповідальні особи Проміжного складу
    3.23.1.5.4.1,personName,O,string,ПІБ відповідальні особи Проміжного складу
    3.23.1.5.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
    3.23.1.5.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
    3.23.1.5.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
    3.23.1.5.5,postalTradeAddress,M, ,"Юридична адреса Проміжного складу (Вантажовідправник/Перевізник/Експедитор/Вантажоодержувач/Товарний склад), що приймає від Перевізника на тимчасове зберігання вантаж"
    3.23.1.5.5.1,postCode,O,decimal,Індекс
    3.23.1.5.5.2,streetName,M,string,Адреса (Назва вулиці + номер будівлі)
    3.23.1.5.5.3,cityName,M,string,Місто (Назва населеного пункту)
    3.23.1.5.5.4,countryID,M,string,Країна (UA)
    3.23.1.5.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
    3.23.1.5.6.1,taxRegistration.id,O,string,РНОКПП відповідальної особи
    3.24,deliveryInstructions,M, ,Вид перевезень
    3.24.1,description,O,string,"Опис (вид роботи перевізника: за відрядним тарифом, за погодинним тарифом, за покілометровим тарифом, централізовані перевезення тощо)"
    3.24.2,descriptionCode,M,string,Код (TRANSPORTATION_TYPE)
    3.25,previousAdministrativeReferencedDocument,-/M, ,"Попередня транзакція ECMR, на основі якої складено поточний документ. Блок не вказується, якщо документ створено з «нуля»"
    3.25.1,typeCode,O,decimal,"Тип документа, на основі якого складено поточний документ. Довідник кодів документів"
    3.25.2,id,M,string,Відповідає ExchangedDocumentContext.SpecifiedTransactionID попередніх версій
    3.25.3,remarks,O,string,Base64 документа попередньої версії
    3.25.4.1,formattedIssueDateTime.dateTime,O,"datetime
    (2021-12-13T14:19:23+02:00)",Дата та час складання попереднього ECMR документа
    3.25.5,attachedSpecifiedBinaryFile,O, ,"Вкладений бінарний файл документа, на основі якого складено поточний документ"
    3.25.5.1,id,M,string,Відповідає document.id із ЦБД еТТН
    3.25.5.2,uriid,M,string,Посилання на документ
    3.25.5.3,MIMECode,O,string,Код MIME типізації
    3.25.5.4,SizeMeasure,M,Long,Розмір файлу
    II,signatureStorage,M, ,Підписи
    4,signatures (SigningPartyRoleCode=CZ),M, ,КЕП Вантажовідправника
    4.1,signingPartyRoleCode,M,string,Роль підписанта (Вантажовідправник - CZ). Довідник ролей
    4.2,partySignature,M,string,Підпис (base64 підпису p7s)
    4.3,name,M,string,ПІБ підписанта (відповідальної особи вантажовідправника)
    4.4,position,O,string,Посада підписанта (відповідальної особи вантажовідправника)
    4.5.1,specifiedTaxRegistration.id,M,string,РНОКПП відповідальної особи вантажовідправника
    5,signatures (SigningPartyRoleCode=DR),M, ,КЕП Водія
    5.1,signingPartyRoleCode,M,string,Роль підписанта (Водій - DR). Довідник ролей
    5.2,partySignature,M,string,Підпис (base64 підпису p7s)
    5.3,name,M,string,ПІБ підписанта (Водія)
    5.4,position,O,string,Посада підписанта (Водія)
    5.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (Водія)
    6,signatures (SigningPartyRoleCode=CA),M, ,КЕП Перевізника
    6.1,signingPartyRoleCode,M,string,Роль підписанта (Перевізник - CA). Довідник ролей
    6.2,partySignature,M,string,Підпис (base64 підпису p7s)
    6.3,name,M,string,ПІБ підписанта (відповідальної особи Перевізника)
    6.4,position,O,string,Посада підписанта (відповідальної особи Перевізника)
    6.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (Перевізника)
    7,signatures (SigningPartyRoleCode=CN),M, ,КЕП Вантажоодержувача
    7.1,signingPartyRoleCode,M,string,Роль підписанта (Вантажоодержувач - CN). Довідник ролей
    7.2,partySignature,M,string,Підпис (base64 підпису p7s)
    7.3,name,M,string,ПІБ підписанта (відповідальної особи Вантажоодержувача)
    7.4,position,O,string,Посада підписанта (відповідальної особи Вантажоодержувача)
    7.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (Вантажоодержувача)


.. old style

    Таблиця 1 - Специфікація "Електронної товарно-транспортної накладної" (JSON)

    .. csv-table:: 
    :file: for_csv/ettn_v3_json.csv
    :widths:  1, 1, 5, 12, 41
    :header-rows: 1
    :stub-columns: 0
