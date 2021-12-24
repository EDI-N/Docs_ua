#########################################################################
**Дані заявки на факторинг (об'єкт FactorRequest)**
#########################################################################

**JSON:**

.. code:: json

	{
	  "factorAccountId": "36623",
	  "status": 0,
	  "email": "willmumbai@gmail.com",
	  "phone": "380975560011",
	  "debts": [
	    {
	      "gln": "9863521013239",
	      "supplyContractNumber": "DogDog",
	      "supplyContractExpiredDate": "2021-12-23",
	      "supplyContractDate": "2021-12-23"
	    }
	  ],
	  "fio": "Арбузов Арбуз",
	  "gln": "9864065740858",
	  "contractDate": "2021-12-23",
	  "contractNumber": "Shoko"
	}

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














