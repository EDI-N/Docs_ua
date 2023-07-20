##########################################################################################################################
**"Акт завантаження на проміжному складі"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1342313557

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/STORAGE_PICKUP_ACT/STORAGE_PICKUP_ACTpage_v3.html>`__ відрізняються! 

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
          "id": "urn:ua:e-transport.gov.ua:act:01:storage_pickup:001"
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
      "storagePickupActPayload": {
        "previousAdministrativeReferencedDocuments": [
          {
            "typeCode": "730",
            "id": "79bb3ebe-0439-4b53-8361-be6c70731d2c",
            "formattedIssueDateTime": {
              "dateTime": "2023-07-11T12:08:00.000Z"
            }
          },
          {
            "typeCode": "136",
            "id": "79bb3ebe-0439-4b53-8361-682273105c",
            "formattedIssueDateTime": {
              "dateTime": "2023-07-11T12:08:00.000Z"
            }
          }
        ]
      },
      "storagePickupActPayload": {
        "storageTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "86726491"
          },
          "name": "ТОВ \"ТЕСТ 5\"",
          "roleCode": "WH",
          "specifiedGovernmentRegistrations": [
            {
              "id": "9864065748137",
              "typeCode": "TRADEPARTY_GLN"
            }
          ]
        },
        "carrierTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "56543433"
          },
          "name": "ТОВ \"ТЕСТ 3\"",
          "roleCode": "CA",
          "tradeContact": {
            "personName": "Петренко Петро Петрович",
            "telephoneUniversalCommunication": {
              "completeNumber": "0443332211"
            },
            "mobileTelephoneUniversalCommunication": {
              "completeNumber": "0933332211"
            },
            "emailURIUniversalCommunication": {
              "completeNumber": "ivan@yahoo.com"
            }
          },
          "postalTradeAddress": {
            "postCode": "01001",
            "streetName": "вул.Хрещатик, 23",
            "cityName": "Київ",
            "countryID": "UA"
          },
          "taxRegistration": {
            "id": "1234567890"
          },
          "specifiedGovernmentRegistrations": [
            {
              "id": "9864065748120",
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
            "id": "АА2525ВВ",
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
          }
        ],
        "pickupTransportEvent": {
          "certifyingTradeParties": [
            {
              "id": {
                "schemeAgencyID": "РНОКПП",
                "value": "1010101013"
              },
              "name": "Водій",
              "roleCode": "DR",
              "tradeContact": {
                "personName": "Петренко Петро Петрович"
              }
            }
          ]
        },
        "storageNotes": "Потрібно доставити вантаж отримувачу"
      },
      "certifyingPartyPayload": {
        "certifyingTradeParty": [
          {
            "id": {
              "schemeAgencyID": "РНОКПП",
              "value": "4444444400"
            },
            "name": "Директор",
            "roleCode": "WH",
            "tradeContact": {
              "personName": "Іванов Іван Іванович"
            }
          },
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

Таблиця 1 - Специфікація "Акта завантаження на проміжному складі" (JSON)

.. csv-table:: 
  :file: for_csv/storagepickup_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

