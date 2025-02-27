#############################################################
**Дані ланцюжка документів (об'єкт XChain)**
#############################################################

**JSON:**

.. code:: json

    {
        "id": 1,
        "uuid": "0fe60377-51db-4b7a-b7eb-cdf5fa91a46a",
        "packageID": 0,
        "type": {
            "type": 5,
            "title": "ordrsp",
            "description": "Подтверждение заказа"
        },
        "docsCount": 13,
        "lastInDocID": 1,
        "lastOutDocID": 29,
        "partnerId": 0,
        "important": false,
        "status": {
            "status": 2,
            "title": "sent"
        },
        "visualStatus": 0,
        "archive": false,
        "childs": [
            {
                "body": {
                    "forms": {}
                },
                "attachments": [],
                "comments": [],
                "doc_id": 1,
                "doc_uuid": "bf8dacb1-7b61-4c9c-ab36-ac37620db051",
                "uuidSender": "9864232304319",
                "uuidReceiver": "9864232304302",
                "docNumber": "1001",
                "dateCreated": 1555487166,
                "dateChanged": 1555487166,
                "dateRead": 1555497325,
                "docDate": 1555448400,
                "chain_id": 1,
                "chain_uuid": "0fe60377-51db-4b7a-b7eb-cdf5fa91a46a",
                "family": 1,
                "hash": "A1FF5B519289B936A09E99514277F429",
                "type": {
                    "type": 2,
                    "title": "orders",
                    "description": "Заказ"
                },
                "status": {
                    "status": 5,
                    "title": "read"
                },
                "exchange_status": "000000000000000000000000",
                "is_archive": false,
                "extraFields": {
                    "sub_doc_type_id": "2",
                    "buyer_uuid": "9864232304319",
                    "doc_num": "1001",
                    "order_number": "1001",
                    "ftpex_file_date": "1555487160",
                    "supplier_uuid": "9864232304302",
                    "delivery_place_uuid": "9864232304562",
                    "order_date": "1555448400",
                    "delivery_date": "1556485200",
                    "ftpex_file_name": "order_20190417104600_475593380.xml",
                    "contract_number": "Дог 1",
                    "sender": "9864232304319",
                    "doc_date": "1555448400",
                    "recipient": "9864232304302",
                    "action": "0"
                },
                "tags": [],
                "statuses": [],
                "multiExtraFields": {}
            },

            ...
            
            {
                "body": {
                    "forms": {}
                },
                "attachments": [],
                "comments": [],
                "doc_id": 29,
                "doc_uuid": "cb2f183f-ccbc-467b-9eb2-90b2c1ff8f5c",
                "uuidSender": "9864232304302",
                "uuidReceiver": "9864232304319",
                "docNumber": "АФ00-000001",
                "dateCreated": 1556115021,
                "dateChanged": 1556115022,
                "dateRead": 0,
                "docDate": 1556116482,
                "chain_id": 1,
                "chain_uuid": "0fe60377-51db-4b7a-b7eb-cdf5fa91a46a",
                "family": 1,
                "hash": "0F9CEEC0717992EB76A848F2E106D2D0",
                "type": {
                    "type": 5,
                    "title": "ordrsp",
                    "description": "Подтверждение заказа"
                },
                "status": {
                    "status": 2,
                    "title": "sent"
                },
                "exchange_status": "000000000000000000000000",
                "is_archive": false,
                "extraFields": {
                    "order_date": "1555448400",
                    "delivery_date": "1556485200",
                    "contract_number": "Дог 1",
                    "sender": "9864232304319",
                    "buyer_uuid": "9864232304319",
                    "doc_num": "АФ00-000001",
                    "order_number": "1001",
                    "doc_date": "1556116482",
                    "action": "4",
                    "supplier_uuid": "9864232304302",
                    "delivery_place_uuid": "9864232304562"
                },
                "tags": [],
                "statuses": [],
                "multiExtraFields": {}
            }
        ],
        "hash": "ABB416F3FF3B5027D212D62DD9F99E94"
    }

Таблиця 1 - Опис параметрів об'єкта **XChain**

.. csv-table:: 
  :file: for_csv/XChain.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **XChainStatus**

.. csv-table:: 
  :file: for_csv/XChainStatus.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **XDoc**

.. csv-table:: 
  :file: for_csv/XDoc.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **XTag**

.. csv-table:: 
  :file: for_csv/XTag.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **XStatus**

.. csv-table:: 
  :file: for_csv/XStatus.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **XDocSignInfo**

.. csv-table:: 
  :file: for_csv/XDocSignInfo.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **XDocCommentsList**

.. csv-table:: 
  :file: for_csv/XDocCommentsList.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 8 - Опис параметрів об'єкта **XDocComment**

.. csv-table:: 
  :file: for_csv/XDocComment.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 9 - Опис параметрів об'єкта **XDocAttachment**

.. csv-table:: 
  :file: ../../../../API_ETTN/Methods/EveryBody/for_csv/XDocAttachment.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 10 - Опис параметрів об'єкта **XDocBodyForms**

.. csv-table:: 
  :file: for_csv/XDocBodyForms.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 11 - Опис параметрів об'єкта **XDocBody**

.. csv-table:: 
  :file: for_csv/XDocBody.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 12 - Опис параметрів об'єкта **XDocBodyType**

.. csv-table:: 
  :file: for_csv/XDocBodyType.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 13 - Опис параметрів об'єкта **XDocType**

.. csv-table:: 
  :file: for_csv/XDocType.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _детальніше:

Таблиця 14 - Опис **ChainStatus** параметрів (об'єкт XChainStatus_)

.. csv-table:: 
  :file: for_csv/xchainstatus_p.csv
  :widths:  1, 60
  :header-rows: 1
  :stub-columns: 0

.. _опис_параметрів:

Таблиця 15 - Опис **DocType** параметрів (об'єкт XDocType_)

.. csv-table:: 
  :file: for_csv/xdoctype_p.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

.. _fieldName:

Таблиця 16 - Опис полей екстрапараметрів

.. csv-table:: 
  :file: for_csv/extra_fields.csv
  :widths:  1, 2, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _опис_підтипів:

Таблиця 17 - Опис підтипів документів

.. csv-table:: 
  :file: for_csv/sub_doc_type_id.csv
  :widths:  1, 7, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 18 - Опис параметрів об'єкта **XDocAttachmentSign**

.. csv-table:: 
  :file: ../../../../API_ETTN/Methods/EveryBody/for_csv/XDocAttachmentSign.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0
