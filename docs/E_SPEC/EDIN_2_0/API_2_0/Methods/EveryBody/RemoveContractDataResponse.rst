#############################################################
**Деталі результату операції видалення (Response)**
#############################################################

Відповідь при видаленні товарних позицій:

**JSON:**

.. code:: json

   	{
	  "contractProducts": 2,
	  "contractUUID": "43cea8c2-320a-439b-a596-d39c0ad0f0f8",
	  "details": [
	    {
	      "cause": "XContract 43cea8c2-320a-439b-a596-d39c0ad0f0f8 does not have product ID 0",
	      "productID": 0,
	      "removed": false
	    },
	    {
	      "cause": "XContract 43cea8c2-320a-439b-a596-d39c0ad0f0f8 does not have product ID 21212121",
	      "productID": 21212121,
	      "removed": false
	    },
	    {
	      "productID": 113,
	      "removed": true
	    }
	  ],
	  "removedContract": false,
	  "removedProducts": 1,
	  "requestProducts": 3
	}
 
Відповідь при видаленні всього контракту:

**JSON:**

.. code:: json

	{
	  "contractUUID": "41bee947-abfc-471a-86e6-4c85f813ad9f",
	  "removedContract": true,
	  "contractProducts": 51,
	  "requestProducts": 0,
	  "removedProducts": 51,
	  "details": [
	    {
	      "productID": 2,
	      "removed": true
	    },
	    {
	      "productID": 3,
	      "removed": true
	    },
	    ...
	    {
	      "productID": 50,
	      "removed": true
	    },
	    {
	      "productID": 51,
	      "removed": true
	    },
	    {
	      "productID": 52,
	      "removed": true
	    }
	  ]
	}

Таблиця 1 - Опис параметрів

.. csv-table:: 
  :file: for_csv/RemoveProductResponse.csv
  :widths:  10, 5, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів

.. csv-table:: 
  :file: for_csv/RemoveProductDetail.csv
  :widths:  10, 5, 41
  :header-rows: 1
  :stub-columns: 0