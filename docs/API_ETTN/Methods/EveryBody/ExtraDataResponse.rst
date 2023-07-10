#############################################################
**Дані компанії, співробітників, адрес (Response)**
#############################################################

**JSON:**

.. code:: json

	{
	  "companies": {
	    "a32715ba-b7cb-4702-ae77-e8f6c3aaeb89": {
	      "uuid": "a32715ba-b7cb-4702-ae77-e8f6c3aaeb89",
	      "name": "тест ЕДІН",
	      "type": 1,
	      "ipn": "1010101016",
	      "edrpou": "67553455",
	      "city": "Kiev",
	      "address": "Mostobudivnykiv St, 17/11",
	      "addresses": [],
	      "employees": []
	    },
	    "0855e1ce-46ed-4995-83b6-356127b95226": {
	      "uuid": "0855e1ce-46ed-4995-83b6-356127b95226",
	      "name": "Компанiя \"Вантажовiдправник\"",
	      "type": 2,
	      "ipn": "3148615913",
	      "edrpou": "3148615913",
	      "city": "Kyiv",
	      "address": "Dontsa",
	      "addresses": [],
	      "employees": []
	    }
	  },
	  "employees": {
	    "831714cf-064b-4ce9-bdc4-b6a79784639c": {
	      "uuid": "831714cf-064b-4ce9-bdc4-b6a79784639c",
	      "userId": 8502,
	      "lastName": "Test",
	      "firstName": "Test",
	      "middleName": "Test",
	      "ipn": "23423423",
	      "email": "goncharovd@edin.ua",
	      "tel": "380958476694",
	      "chatId": 347971296,
	      "identifiers": {
	        "1": "AA000001"
	      }
	    },
	    "f25b4f57-d0a5-4f99-9af3-a8688a2831b2": {
	      "uuid": "f25b4f57-d0a5-4f99-9af3-a8688a2831b2",
	      "userId": 60212166,
	      "lastName": "Сідоров",
	      "firstName": "Сергій",
	      "middleName": "Сергійович",
	      "ipn": "1010101014",
	      "email": "kinasha@edin.ua",
	      "tel": "380981206467",
	      "chatId": 0,
	      "identifiers": {
	        "1": "ABN876340"
	      }
	    },
	    "09f4c632-5c37-45ac-a68a-0acfdc157194": {
	      "uuid": "09f4c632-5c37-45ac-a68a-0acfdc157194",
	      "userId": 0,
	      "lastName": "Васян",
	      "firstName": "Вася",
	      "middleName": "Васильович",
	      "ipn": "2222222222",
	      "email": "12345@robo.com",
	      "tel": "380000000000",
	      "chatId": 0,
	      "identifiers": {
	        "1": "GHJ000000"
	      }
	    }
	  }
	}

Таблиця 1 - Опис параметрів об'єкта **CompanyV2**

.. csv-table:: 
  :file: for_csv/CompanyV2.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Employee**

.. csv-table:: 
  :file: for_csv/Employee.csv
  :widths:  1, 3, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Address**

.. csv-table:: 
  :file: for_csv/Address.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
