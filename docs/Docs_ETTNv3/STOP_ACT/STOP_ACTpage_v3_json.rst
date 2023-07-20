##########################################################################################################################
**"Акт примусового завершення е-ТТН"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=804820694

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/STOP_ACT/STOP_ACTpage_v3.html>`__ відрізняються! 

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
          "id": "urn:ua:e-transport.gov.ua:act:01:stop:001"
        }
      },
      "exchangedDocument": {
        "id": "123123",
        "issueDateTime": {
          "dateTime": "2022-10-26T18:32:52+02:00"
        },
        "issueLogisticsLocation": {
          "name": "Місце складання документу",
          "description": "79000, м.Львів, вул. Словацького, 1"
        },
        "includedNote": []
      },
      "stopActPayload": {
        "previousAdministrativeReferencedDocuments": [
          {
            "typeCode": "730",
            "id": "0d39da11-087f-4a4e-8728-d9fba1df526e",
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
          "name": "ТОВ \"ТЕСТ\"",
          "roleCode": "OB"
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
        "initiatorNotes": "ДТП"
      },
      "certifyingPartyPayload": {
        "certifyingTradeParty": [
          {
            "id": {
              "schemeAgencyID": "РНОКПП",
              "value": "1111111111"
            },
            "name": "Комірник",
            "roleCode": "OB",
            "tradeContact": {
              "personName": "Тест Тест Тест"
            }
          }
        ]
      }
    }
  }

Таблиця 1 - Специфікація "Акта примусового завершення е-ТТН" (JSON)

.. csv-table:: 
  :file: for_csv/stop_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

