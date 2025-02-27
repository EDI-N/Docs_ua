#########################################################################################################################################################
**Критерії пошуку/фільтрації довідника специфікацій/контрактів (об'єкт XSearchContractsQuery)**
#########################################################################################################################################################

**JSON приклади:**

Отримати всі завершені контракти / специфікації для Отримувача "13200665"
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

	{
	  "contractGlnId": [],
	  "productBarcode": [],
	  "buyerArticle": [],
	  "contractStatus": [],
	  "productStatus": [],
	  "direction": {
	    "type": "EQ",
	    "recipient": [
	      13200665
	    ]
	  },
	  "expireDate": {
	    "startTimestamp": 1631353973
	  }
	}
 
Таблиця 1 - Опис параметрів

.. csv-table:: 
  :file: for_csv/XSearchContractsQuery.csv
  :widths:  10, 5, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Direction**

.. csv-table:: 
  :file: for_csv/Direction.csv
  :widths:  10, 5, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Limitation**

.. csv-table:: 
  :file: ../../../../../API_ETTN/Methods/EveryBody/for_csv/Limitation.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **DateTimeRange**

.. csv-table:: 
  :file: ../../../../../API_ETTN/Methods/EveryBody/for_csv/DateTimeRange.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0