#########################################################################
**Список заявок на факторинг (масив об'єктів FactorRequest)**
#########################################################################

**JSON:**

.. code:: json

	[
	  {
	    "factorAccountId": 36623,
	    "status": 0,
	    "gln": "9864065740858",
	    "contractNumber": "№",
	    "contractDate": "2021-12-23",
	    "dateCreated": "2021-12-23 17:29:10",
	    "fio": "Арбузов Арбуз",
	    "phone": "380972220011",
	    "email": "willnotmumbai@gmail.com",
	    "debts": [],
	    "requestId": 131,
	    "supplierAccountId": 36633,
	    "factor": {
	      "name": "Альбатрос -51",
	      "edrpou": "1235896331"
	    },
	    "supplier": {
	      "name": "Тестовий платник 4",
	      "edrpou": "34554363"
	    }
	  },
	  {
	    "factorAccountId": 36623,
	    "status": 0,
	    "gln": "9864065740858",
	    "contractNumber": "3333",
	    "contractDate": "2021-12-23",
	    "dateCreated": "2021-12-23 16:04:53",
	    "fio": "\u0010@1C7>2 \u0010@1C7",
	    "phone": "380975220011",
	    "email": "willnotmumbai@gmail.com",
	    "debts": [],
	    "requestId": 130,
	    "supplierAccountId": 36633,
	    "factor": {
	      "name": "Альбатрос -51",
	      "edrpou": "1235896331"
	    },
	    "supplier": {
	      "name": "Тестовий платник 4",
	      "edrpou": "34554363"
	    }
	  }
	]

Таблиця 1 - Опис параметрів об'єкта **FactorRequest**

.. csv-table:: 
  :file: for_csv/FactorRequest.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **FactorRequestDebt**

.. csv-table:: 
  :file: for_csv/FactorRequestDebt.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **PartyData**

.. csv-table:: 
  :file: for_csv/PartyData.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

-------------------------














