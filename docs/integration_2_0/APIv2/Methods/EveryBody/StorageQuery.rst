#############################################################
**Дані для фільтрації (об’єкт StorageQuery)**
#############################################################

.. contents:: Зміст:
   :depth: 6

---------

Приклади для сервісу "EDI Network"
*****************************************************************

**JSON:**

Отримати всі документи-чернетки, в яких відправником зазначений GLN 9864065732303 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

	{
	    "archive": false,
	    "direction":
	    {
	        "type": "EQ",
	        "sender":
	        [
	            "9864065732303"
	        ]
	    },
	    "exchangeStatus":
	    [],
	    "family": 1,
	    "limit":
	    {
	        "offset": "0",
	        "count": 21
	    },
	    "statuses":
	    [
	        1
	    ],
	    "tags":
	    [],
	    "type":
	    [
	        {
	            "type": 0,
	            "title": "all",
	            "description": "all"
	        }
	    ],
	    "families":
	    [
	        1,
	        7
	    ]
	}

Отримати всі вхідні "Видаткові накладні", що знаходяться в статусі "Потребує підписання отримувачем" 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

	{
	  "statuses": [4, 5, 6],
	  "type": [
	    {
	      "type": 28
	    }
	  ],
	  "limit": {
	    "offset": "0",
	    "count": 21
	  },
	  "exchangeStatus": [
	    1
	  ],
	  "extraParams": [
	    {
	      "operator": "AND",
	      "type": "EQUALS",
	      "value": "6",
	      "fieldName": "sub_doc_type_id"
	    },
	    {
	      "operator": "AND",
	      "type": "EQUALS",
	      "value": "1",
	      "fieldName": "sub_status_id"
	    }
	  ],
	  "tags": [],
	  "archive": false,
	  "direction": {
	    "type": "EQ",
	    "receiver": [
	      "9864066822430"
	    ],
	    "sender": []
	  },
	  "family": 1
	}

Отримати всі документи окрім чернеток (масив statuses не містить "1"), в яких отримувачем є GLN 9864232304302 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

Отримати всі документи окрім чернеток (масив statuses не містить "1"), в яких відправником є GLN 9864232304302 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

Отримати всі документи окрім чернеток для GLN відправника 9864232304302, що створені в травні 2019 (startTimestamp і finishTimestamp дати в форматі UNIX-timestamp за київським часом відносно UTC)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

Приклади для сервісу "Маркет"
*****************************************************************

Отримати список всіх відправлених "Замовлень" (ORDERS) для GLN відправника 9864232324065
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

    {
        "archive": false,
        "direction": {
            "receiver": [],
            "sender": ["9864232324065"],
            "type": "EQ"
        },
        "exchangeStatus": [],
        "extraParams": [],
        "family": 8,
        "multiExtraFields": [],
        "statuses": [2],
        "type": [
            {
                "type": 2
            }
        ]
    }

Отримати список всіх чернеток "Замовлень" (ORDERS) для GLN 9864232324065 (створювач-відправник)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

    {
        "archive": false,
        "direction": {
            "receiver": [],
            "sender": ["9864232324065"],
            "type": "EQ"
        },
        "exchangeStatus": [],
        "extraParams": [],
        "family": 8,
        "multiExtraFields": [],
        "statuses": [1],
        "type": [
            {
                "type": 2
            }
        ]
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

Таблиця 10 - Опис підтипів документів

.. csv-table:: 
  :file: for_csv/sub_doc_type_id.csv
  :widths:  1, 7, 41
  :header-rows: 1
  :stub-columns: 0