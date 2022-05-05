#############################################################
**Дані ланцюжка документів (об'єкт XChain)**
#############################################################

**JSON:**

.. code:: json

	{
	  "id": 358,
	  "uuid": "8080855d-e0c4-43f5-8db1-72ed6da069c8",
	  "packageID": 0,
	  "type": 1,
	  "docsCount": 1,
	  "lastInDocID": 662,
	  "lastOutDocID": 0,
	  "partnerId": 0,
	  "important": false,
	  "status": {
	    "status": 5,
	    "title": "read"
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
	      "doc_id": 662,
	      "doc_uuid": "13891ca1-76ff-40a6-927b-98db9444d3bf",
	      "uuidSender": "97bd6618-71b1-45a2-91b2-fe7b888ca00d",
	      "uuidReceiver": "0855e1ce-46ed-4995-83b6-356127b95226",
	      "uuidReceivers": [
	        "0855e1ce-46ed-4995-83b6-356127b95226"
	      ],
	      "docNumber": "Пибип0",
	      "dateCreated": 1587653981,
	      "dateChanged": 1587653981,
	      "dateRead": 1587718466,
	      "docDate": 1587513600,
	      "chain_id": 358,
	      "chain_uuid": "8080855d-e0c4-43f5-8db1-72ed6da069c8",
	      "family": 7,
	      "hash": "3DCEDE51DE4B61DA23D2C75BDABC7D9C",
	      "type": {
	        "type": 109,
	        "title": "ettn",
	        "description": "ЕТТН"
	      },
	      "status": {
	        "status": 5,
	        "title": "read"
	      },
	      "exchange_status": "000000000000000000000000",
	      "is_archive": false,
	      "extraFields": {
	        "sub_status_date": "1587548202",
	        "carrier_b_uuid": "97bd6618-71b1-45a2-91b2-fe7b888ca00d",
	        "doc_num": "Пибип0",
	        "car_number": "BB1234BB",
	        "doc_date": "1587513600",
	        "consignor_b_uuid": "0855e1ce-46ed-4995-83b6-356127b95226",
	        "customer_b_uuid": "0855e1ce-46ed-4995-83b6-356127b95226",
	        "driver_b_uuid": "09f4c632-5c37-45ac-a68a-0acfdc157194",
	        "gross_weight": "1.0",
	        "sub_status_id": "-2",
	        "consignee_b_uuid": "c2394341-85f0-4b8c-8ea9-ff8d3c6c119c"
	      },
	      "tags": [],
	      "statuses": [],
	      "multiExtraFields": {
	        "ettn_delivery_koatuu": [
	          "1413566500"
	        ],
	        "ettn_dispatch_koatuu": [
	          "8000000000"
	        ]
	      }
	    }
	  ],
	  "hash": "7E88789DD28DD9AC357DCEF9ACC338E4"
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

.. _XDoc: https://wiki.edin.ua/uk/latest/API_ETTN/Methods/EveryBody/XDocPage.html
