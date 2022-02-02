#############################################################
**Дані для фільтрації (об’єкт StorageQuery)**
#############################################################

**JSON:**

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

Отримати всі документи окрім чернеток(масив statuses не містить "1"), в яких відправником є GLN 9864232304302 
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

Таблиця 8 - Опис **fieldName** параметрів (объект ExtraQueryParameters_)

.. csv-table:: 
  :file: for_csv/extra_fields.csv
  :widths:  1, 2, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _опис_параметрів:

Таблиця 9 - Опис **DocType** параметрів (объект XDocType_)

.. csv-table:: 
  :file: for_csv/xdoctype_p.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

.. _опис_підтипів:

Таблиця 10 - Опис підтипів COMDOC

.. csv-table:: 
  :file: for_csv/sub_doc_type_id.csv
  :widths:  1, 7, 7
  :header-rows: 1
  :stub-columns: 0