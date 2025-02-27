#############################################################
**Дані для фільтрації (об’єкт StorageQuery)**
#############################################################

**JSON:**

Отримати всі вхідні ТТН ("type": 121), що очікують підписання Перевізником (значення sub_status_id = "1,7") сервісу "ЕТТН" 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

	{
	  "archive": false,
	  "direction": {
	    "receiver": [
	      "97bd6618-71b1-45a2-91b2-fe7b888ca00d"
	    ],
	    "sender": [],
	    "type": "EQ"
	  },
	  "exchangeStatus": [],
	  "extraParams": [
	    {
	      "operator": "AND",
	      "type": "IN",
	      "value": "1,7",
	      "fieldName": "sub_status_id"
	    }
	  ],
	  "family": 7,
	  "multiExtraFields": [],
	  "statuses": [
	    0
	  ],
	  "type": [
	    {
	      "type": 121
	    }
	  ]
	}

Отримати всі вхідні ТТН ("type": 121), що очікують підписання Вантажоодержувачем (значення sub_status_id = "6") сервісу "ЕТТН" 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

	{
	  "archive": false,
	  "direction": {
	    "receiver": [
	      "c2394341-85f0-4b8c-8ea9-ff8d3c6c119c"
	    ],
	    "sender": [],
	    "type": "EQ"
	  },
	  "exchangeStatus": [],
	  "extraParams": [
	    {
	      "operator": "AND",
	      "type": "IN",
	      "value": "6",
	      "fieldName": "sub_status_id"
	    }
	  ],
	  "family": 7,
	  "multiExtraFields": [],
	  "statuses": [
	    0
	  ],
	  "type": [
	    {
	      "type": 121
	    }
	  ]
	}

Отримати всі вхідні ланцюжки документів (масив statuses "4,5") сервісу "ЕТТН", в яких є документ з номером "100500" 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

	{
	  "archive": false,
	  "direction": {
	    "receiver": ["0855e1ce-46ed-4995-83b6-356127b95226"],
	    "sender": [],
	    "type": "EQ"
	  },
	  "exchangeStatus": [],
	  "extraParams": [
	    {
	      "fieldName": "doc_num",
	      "operator": "AND",
	      "type": "EQUALS",
	      "value": "100500"
	    }
	  ],
	  "family": 7,
	  "limit": {
	    "count": 21,
	    "offset": "0"
	  },
	  "multiExtraParams": [],
	  "statuses": [4,5],
	  "tags": [],
	  "type": [
	    {
	      "type": 0
	    }
	  ]
	}

Отримати всі документи окрім чернеток(масив statuses не містить "1"), в яких отримувачем є GLN 9864232304302 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

    {
        "direction": {
            "sender": [],
            "receiver": ["9864232304302"],
            "type": "EQ"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": ["2","3","4","5","6","7"],
        "type": [
            {
                "type": "0"
            }
        ]
    }

Отримати всі документи окрім чернеток(масив statuses не містить "1"), в яких відправником є GLN 9864232304302 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

    {
        "direction": {
            "sender": ["9864232304302"],
            "receiver": [],
            "type": "EQ"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": ["2","3","4","5","6","7"],
        "type": [
            {
                "type": "0"
            }
        ]
    }

Отримати всі вхідні документи (GLN отримувача 9864232304302) 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

    {
        "direction": {
            "sender": [],
            "receiver": ["9864232304302"],
            "type": "EQ"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": ["4","5","6"],
        "type": [
            {
                "type": "0"
            }
        ]
    }

Отримати всі відправлені документи (GLN відправника 9864232304302) 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

    {
        "direction": {
            "sender": ["9864232304302"],
            "receiver": [],
            "type": "EQ"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": ["2","3","6"],
        "type": [
            {
                "type": "0"
            }
        ]
    }

Отримати документи з номером рівним значенню "1001" (пошук серед усіх документів окрім чернеток), в яких отримувачем є GLN 9864232304302
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

    {
        "direction": {
            "sender": [],
            "receiver": ["9864232304302"],
            "type": "EQ"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": ["2","3","4","5","6","7"],
        "number": "1001",
        "type": [
            {
                "type": "0"
            }
        ]
    }

Отримати всі документи окрім чернеток для GLN відправника 9864232304302, що створені в травні 2019 (startTimestamp і finishTimestamp дати в форматі UNIX-timestamp)
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

    {
        "direction": {
            "sender": ["9864232304302"],
            "receiver": [],
            "type": "EQ"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": ["2","3","4","5","6","7"],
        "type": [
            {
                "type": "0"
            }
        ],
        "docDate": {
            "startTimestamp": "1556668800",
            "finishTimestamp": "1559347199"
        }
    }

.. _Таблиця_2:

Таблиця 2 - Опис параметрів об'єкта **StorageQuery**

.. csv-table:: 
  :file: for_csv/StorageQuery.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **ExtraQueryParameters**

.. csv-table:: 
  :file: for_csv/ExtraQueryParameters.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Direction**

.. csv-table:: 
  :file: for_csv/Direction.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Limitation**

.. csv-table:: 
  :file: for_csv/Limitation.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **DateTimeRange**

.. csv-table:: 
  :file: for_csv/DateTimeRange.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **XDocType**

.. csv-table:: 
  :file: for_csv/XDocType.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _fieldName:

Таблиця 8 - Опис **fieldName** параметрів (об'єкт ExtraQueryParameters_)

.. csv-table:: 
  :file: for_csv/extra_fields.csv
  :widths:  1, 2, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _опис_параметрів:

Таблиця 9 - Опис **DocType** параметрів (об'єкт XDocType_)

.. csv-table:: 
  :file: for_csv/xdoctype_p.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

.. _опис_підтипів:

Таблиця 10 - Опис підтипів COMDOC

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/sub_doc_type_id.csv
  :widths:  1, 7, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.