##########################################################################################################################
**"Акт коригування"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1779967940

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ADJUSTMENT_ACT/ADJUSTMENT_ACTpage_v3.html>`__ відрізняються! 

**JSON:**

.. code:: json

  {
    "ram": "urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103",
    "udt": "urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27",
    "qdt": "urn:un:unece:uncefact:data:standard:QualifiedDataType:103",
    "act": {
      "documentContext": {
        "transactionID": "0",
        "documentCode": {
          "id": "urn:ua:e-transport.gov.ua:act:01"
        },
        "documentSubCode": {
          "id": "urn:ua:e-transport.gov.ua:act:01:adjustment:001"
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
      "adjustmentActPayload": {
        "previousAdministrativeReferencedDocuments": [
          {
            "typeCode": "730",
            "id": "004edd76-e217-4d73-be16-769896530f16",
            "formattedIssueDateTime": {
              "dateTime": "2023-07-18T19:17:00.000Z"
            }
          }
        ],
        "initiatorTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "85854949"
          },
          "name": "ТОВ \"ТЕСТ 3\"",
          "roleCode": "CN"
        },
        "specifiedGovernmentRegistrations": [
          {
            "id": "9864065738701",
            "typeCode": "TRADEPARTY_GLN"
          }
        ],
        "carrierTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "85854949"
          },
          "name": "ТОВ \"ТЕСТ 2\"",
          "roleCode": "CA"
        },
        "consignorTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "85854949"
          },
          "name": "ТОВ \"ТЕСТ\"",
          "roleCode": "CZ"
        },
        "adjustedSupplyChainConsignment": {
          "includedSupplyChainConsignmentItems": [
            {
              "sequenceNumeric": "1",
              "natureIdentificationTransportCargo": {
                "identification": "Датчики руху автоматизовані"
              }
            }
          ]
        },
        "initiatorNotes": "Помилки в найменувані товару"
      },
      "certifyingPartyPayload": {
        "certifyingTradeParty": [
          {
            "id": {
              "schemeAgencyID": "РНОКПП",
              "value": "1234567890"
            },
            "name": "Бухгалтер",
            "roleCode": "CN",
            "tradeContact": {
              "personName": "Бухгалтер Тестового Постачальника"
            }
          }
        ]
      }
    }
  }

Таблиця 1 - Специфікація "Акта коригування" (JSON)

.. csv-table:: 
  :file: for_csv/adjustment_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.