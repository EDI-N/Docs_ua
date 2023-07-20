##########################################################################################################################
**"Акт розвантаження на проміжному складі"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1765110305

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/STORAGE_DELIVERY_ACT/STORAGE_DELIVERY_ACTpage_v3.html>`__ відрізняються! 

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
          "id": "urn:ua:e-transport.gov.ua:act:01:storage_delivery:001"
        }
      },
      "exchangedDocument": {
        "id": "123123",
        "issueDateTime": {
          "dateTime": "2022-10-26T21:32:52+02:00"
        },
        "issueLogisticsLocation": {
          "name": "Місце складання документу",
          "description": "79000, м.Львів, вул. Словацького, 1"
        },
        "includedNote": []
      },
      "storageDeliveryActPayload": {
        "previousAdministrativeReferencedDocuments": [
          {
            "typeCode": "730",
            "id": "004edd76-e217-4d73-be16-769896530f16",
            "formattedIssueDateTime": {
              "dateTime": "2023-07-18T19:17:00.000Z"
            }
          }
        ],
        "carrierTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "85854949"
          },
          "name": "etnn-test-consignor",
          "roleCode": "CA",
          "tradeContact": {
            "personName": "Driver Name"
          },
          "postalTradeAddress": {
            "postCode": "02090",
            "streetName": "Some Street, 6",
            "cityName": "Some City",
            "countryID": "UA"
          },
          "taxRegistration": {
            "id": "3350319275"
          },
          "specifiedGovernmentRegistrations": [
            {
              "id": "XYZ000012",
              "typeCode": "DRIVER_GLN"
            },
            {
              "id": "9864065747239",
              "typeCode": "DRIVER_GLN"
            },
            {
              "id": "9864065738701",
              "typeCode": "TRADEPARTY_GLN"
            }
          ]
        },
        "storageTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "85854949"
          },
          "name": "ТОВ \"ТЕСТ 5\"",
          "roleCode": "WD",
          "tradeContact": {
            "personName": "Чабанов Андрій Олександрович",
            "telephoneUniversalCommunication": {
              "completeNumber": "0444441122"
            },
            "mobileTelephoneUniversalCommunication": {
              "completeNumber": "0934441122"
            },
            "emailURIUniversalCommunication": {
              "completeNumber": "andriy@yahoo.com"
            }
          },
          "postalTradeAddress": {
            "postCode": "01001",
            "streetName": "вул.Хрещатик, 26",
            "cityName": "Київ",
            "countryID": "UA"
          },
          "taxRegistration": {
            "id": "1234567890"
          },
          "specifiedGovernmentRegistrations": [
            {
              "id": "XYZ000012",
              "typeCode": "DRIVER_GLN"
            },
            {
              "id": "9864065747239",
              "typeCode": "DRIVER_GLN"
            },
            {
              "id": "9864065738701",
              "typeCode": "TRADEPARTY_GLN"
            }
          ]
        },
        "storageLogisticsLocation": {
          "id": {
            "schemeAgencyID": "КАТОТТГ",
            "value": "UA18040190010057814"
          },
          "name": "Склад в Житомирі",
          "description": "79000, м.Житомир, вул. Гусака, 1"
        },
        "utilizedLogisticsTransportEquipment": [
          {
            "id": "АА1234ВВ",
            "applicableNotes": [
              {
                "contentCode": "BRAND",
                "content": "VOLVO"
              },
              {
                "contentCode": "MODEL",
                "content": "КЕ-578"
              }
            ]
          },
          {
            "id": "АА4321ВВ",
            "categoryCode": "TE",
            "characteristicCode": "14",
            "applicableNotes": [
              {
                "contentCode": "BRAND",
                "content": "VOLVO"
              },
              {
                "contentCode": "MODEL",
                "content": "YU-879"
              }
            ]
          }
        ],
        "deliveryTransportEvent": {
          "certifyingTradeParties": [
            {
              "id": {
                "schemeAgencyID": "РНОКПП",
                "value": "1010101013"
              },
              "name": "Директор",
              "roleCode": "DR",
              "tradeContact": {
                "personName": "Петренко Петро Петрович"
              }
            },
            {
              "id": {
                "schemeAgencyID": "РНОКПП",
                "value": "4444444400"
              },
              "name": "Комірник",
              "roleCode": "WD",
              "tradeContact": {
                "personName": "Іванов Іван Іванович"
              }
            }
          ]
        },
        "carrierNotes": "Опис причин складання акта"
      },
      "certifyingPartyPayload": {
        "certifyingTradeParty": [
          {
            "id": {
              "schemeAgencyID": "РНОКПП",
              "value": "1010101013"
            },
            "name": "Директор",
            "roleCode": "DR",
            "tradeContact": {
              "personName": "Петренко Петро Петрович"
            }
          }
        ]
      }
    }
  }

Таблиця 1 - Специфікація "Акта розвантаження на проміжному складі" (JSON)

.. csv-table:: 
  :file: for_csv/storagedelivery_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

