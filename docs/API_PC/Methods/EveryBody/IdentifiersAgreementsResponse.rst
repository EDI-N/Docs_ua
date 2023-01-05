#########################################################################
**Дані договору за GLN (масив об'єктів IdentificatorAgreement)**
#########################################################################

**JSON:**

.. code:: json

	[
	  {
	    "id": 449,
	    "gln": "9864067143367",
	    "partner": {
	      "guid": {},
	      "manager": "#",
	      "id": 13200693,
	      "gln": "9864065254775",
	      "companyId": 32631,
	      "retailerId": 0,
	      "isUzdAts": 0,
	      "isFinCrypt": 0,
	      "countryId": 271,
	      "isERNN": 0,
	      "name": "FELEX TEST Bogdan 001",
	      "companyType": "fiz",
	      "companyInn": "1234567890",
	      "companyKpp": "44444444",
	      "zip": "03194",
	      "city": "#",
	      "street": "Юр адрес",
	      "phone": "380666666666",
	      "otherInfo": "[]",
	      "dpiCReg": 4,
	      "dpiCRaj": 2,
	      "isDeclarDateNumRequired": true,
	      "distribexUser": 0,
	      "isWithoutTax": false,
	      "taxSource": 0,
	      "isSignConfirm": 0,
	      "isSpecification": 0,
	      "isCompany": 1,
	      "parentId": 0
	    },
	    "date": 1672869600,
	    "expiredDate": 0,
	    "number": "123",
	    "type": 3,
	    "prolongation": 0
	  },
	  {
	    "id": 447,
	    "gln": "9864067143367",
	    "partner": {
	      "guid": {},
	      "manager": "#",
	      "id": 13201459,
	      "gln": "9864065738930",
	      "companyId": 37237,
	      "retailerId": 9,
	      "isUzdAts": 0,
	      "isFinCrypt": 0,
	      "countryId": 351,
	      "isERNN": 0,
	      "name": "Тест_АТБ",
	      "companyType": "fiz",
	      "companyInn": "101010101010",
	      "companyKpp": "79797979",
	      "zip": "49000",
	      "katottg": "UA12020010010037010",
	      "city": "м. Дніпро, Дніпровський р-н",
	      "street": "ПРОСПЕКТ ОЛЕКСАНДРА ПОЛЯ, будинок 40",
	      "phone": "380096112233",
	      "otherInfo": "[]",
	      "district": "Дніпропетровська",
	      "dpiCReg": 4,
	      "dpiCRaj": 0,
	      "isDeclarDateNumRequired": true,
	      "distribexUser": 0,
	      "isWithoutTax": false,
	      "taxSource": 0,
	      "isSignConfirm": 0,
	      "isSpecification": 0,
	      "isCompany": 1,
	      "parentId": 0
	    },
	    "date": 1672869600,
	    "expiredDate": 0,
	    "number": "100500",
	    "type": 1,
	    "prolongation": 1
	  }
	]

Таблиця 1 - Опис параметрів об'єкта **IdentificatorAgreement**

.. csv-table:: 
  :file: for_csv/IdentificatorAgreement.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Identificator**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/Identificator.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

-------------------------