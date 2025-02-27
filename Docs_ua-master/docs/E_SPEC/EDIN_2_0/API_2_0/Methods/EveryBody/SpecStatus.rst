######################################################################################################################################
**Налаштування дій узгодження для вказаного користувача в розрізі кожного підтипу документа AGREEM (об’єкт SpecStatus)**
######################################################################################################################################

**JSON:**

.. code:: json

	{
	  "userId": 13191,
	  "isSpecification": 1,
	  "isContractDivide": true,
	  "isViewStatusDivide": true,
	  "writeStatuses": {
	    "offer": 26,
	    "promo_combo": 14,
	    "regular": 14
	  },
	  "workStatuses": {
	    "offer": 4,
	    "promo_combo": 12,
	    "regular": 12
	  }
	}

Таблиця 1 - Опис параметрів

.. csv-table:: 
  :file: for_csv/SpecStatus.csv
  :widths:  10, 5, 41
  :header-rows: 1
  :stub-columns: 0