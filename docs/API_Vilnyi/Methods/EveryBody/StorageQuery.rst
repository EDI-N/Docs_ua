#############################################################
**Дані для фільтрації (об’єкт StorageQuery)**
#############################################################

.. свій унікальний стореджквері

**JSON:**

Отримати всі надіслані документи ("statuses": 2,3), що Очікують підпису ("action": 0)
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

	{
	  "statuses": [
	    2,
	    3
	  ],
	  "type": [
	    {
	      "type": 0
	    }
	  ],
	  "limit": {
	    "count": 21,
	    "offset": "0"
	  },
	  "exchangeStatus": [],
	  "extraParams": [
	    {
	      "operator": "AND",
	      "type": "IN",
	      "value": "0",
	      "fieldName": "action"
	    }
	  ],
	  "multiExtraParams": [],
	  "tags": [],
	  "archive": false,
	  "direction": {
	    "type": "EQ",
	    "sender": [
	      "7c30a623-b84f-44d1-bda1-fdcc5f8be3d7"
	    ],
	    "receiver": []
	  },
	  "loadChain": true,
	  "family": 9
	}

Отримати всі вхідні документи ("statuses": 4,5) від вказаного відправника/-ів (sender:uuid) 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

	{
	  "statuses": [
	    4,
	    5
	  ],
	  "type": [
	    {
	      "type": 0
	    }
	  ],
	  "limit": {
	    "count": 21,
	    "offset": "0"
	  },
	  "exchangeStatus": [],
	  "extraParams": [],
	  "multiExtraParams": [],
	  "tags": [],
	  "archive": false,
	  "direction": {
	    "type": "EQ",
	    "sender": [
	      "831714cf-064b-4ce9-bdc4-b6a79784639c"
	    ],
	    "receiver": [
	      "7c30a623-b84f-44d1-bda1-fdcc5f8be3d7"
	    ]
	  },
	  "loadChain": true,
	  "family": 9
	}

.. _Таблиця_2:

Таблиця 2 - Опис параметрів об'єкта **StorageQuery**

.. csv-table:: 
  :file: ../../../API_ETTN/Methods/EveryBody/for_csv/StorageQuery.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **ExtraQueryParameters**

.. csv-table:: 
  :file: ../../../API_ETTN/Methods/EveryBody/for_csv/ExtraQueryParameters.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Direction**

.. csv-table:: 
  :file: ../../../API_ETTN/Methods/EveryBody/for_csv/Direction.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Limitation**

.. csv-table:: 
  :file: ../../../API_ETTN/Methods/EveryBody/for_csv/Limitation.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **DateTimeRange**

.. csv-table:: 
  :file: ../../../API_ETTN/Methods/EveryBody/for_csv/DateTimeRange.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **XDocType**

.. csv-table:: 
  :file: ../../../API_ETTN/Methods/EveryBody/for_csv/XDocType.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _fieldName:

Таблиця 8 - Опис **fieldName** параметрів (об'єкт ExtraQueryParameters_)

.. csv-table:: 
  :file: ../../../API_ETTN/Methods/EveryBody/for_csv/extra_fields.csv
  :widths:  1, 2, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _опис_параметрів:

Таблиця 9 - Опис **DocType** параметрів (об'єкт XDocType_)

.. csv-table:: 
  :file: ../../../API_ETTN/Methods/EveryBody/for_csv/xdoctype_p.csv
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