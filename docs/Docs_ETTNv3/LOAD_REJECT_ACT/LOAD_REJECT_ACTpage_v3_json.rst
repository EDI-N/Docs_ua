##########################################################################################################################
**"Акт про відмову вантажити"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1897571119

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/LOAD_REJECT_ACT/LOAD_REJECT_ACTpage_v3.html>`__ відрізняються! 

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
          "id": "urn:ua:e-transport.gov.ua:act:01:reject:001"
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
      "rejectActPayload": {
        "previousAdministrativeReferencedDocuments": [
          {
            "typeCode": "730",
            "id": "0d39da11-087f-4a4e-8728-d9fba1df526e",
            "formattedIssueDateTime": {
              "dateTime": "2023-07-18T19:17:00.000Z"
            }
          }
        ],
        "consignorTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "85854949"
          },
          "name": "ТОВ \"ТЕСТ\"",
          "roleCode": "CZ",
          "postalTradeAddress": {
            "postCode": "01001",
            "streetName": "вул.Хрещатик, 22",
            "cityName": "Київ",
            "countryID": "UA",
            "countrySubDivisionName": "м.Київ"
          },
          "specifiedGovernmentRegistrations": [
            {
              "id": "9864065738701",
              "typeCode": "TRADEPARTY_GLN"
            }
          ]
        },
        "carrierTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "85854949"
          },
          "name": "ТОВ \"ТЕСТ 2\"",
          "roleCode": "CA"
        },
        "specifiedGovernmentRegistrations": [
          {
            "id": "9864065738701",
            "typeCode": "TRADEPARTY_GLN"
          }
        ],
        "utilizedLogisticsTransportEquipment": {
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
        "consignorNotes": "Несправне авто"
      },
      "certifyingPartyPayload": {
        "certifyingTradeParty": [
          {
            "id": {
              "schemeAgencyID": "РНОКПП",
              "value": "1111111111"
            },
            "name": "Комірник",
            "roleCode": "CZ",
            "tradeContact": {
              "personName": "Тест Тест Тест"
            }
          }
        ]
      }
    }
  }

Таблиця 1 - Специфікація "Акта про відмову вантажити" (JSON)

.. csv-table:: 
  :file: for_csv/loadreject_act_v3_json.csv
  :widths:  1, 1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

