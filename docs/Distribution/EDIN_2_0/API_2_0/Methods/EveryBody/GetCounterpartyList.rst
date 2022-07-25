#############################################################
**Дані контрагентів**
#############################################################

**JSON:**

.. code:: json

	[
	  {
	    "id": {
	      "guid": {},
	      "manager": "#",
	      "id": 13200793,
	      "gln": "9864065732327",
	      "companyId": 32659,
	      "retailerId": 0,
	      "isUzdAts": 0,
	      "isFinCrypt": 0,
	      "countryId": 2,
	      "isERNN": 0,
	      "name": "Dist_Test_1",
	      "companyInn": "2020303040",
	      "companyKpp": "345034504",
	      "zip": "456654",
	      "city": "г. Киев",
	      "street": "ул. Жмурится, 6",
	      "phone": "#",
	      "otherInfo": "[]",
	      "dpiCReg": "26",
	      "dpiCRaj": "1",
	      "isDeclarDateNumRequired": false,
	      "distribexUser": 2
	    },
	    "limits": {
	      "max_pallet_qty": "3",
	      "max_weight": "50.001",
	      "max_pack_qty": "11",
	      "max_sum_nds": "25005678.0124",
	      "credit_limit": "25005678.0124",
	      "multiplicity_packing": "1",
	      "min_sum_nds": "1000.0124",
	      "max_pos_qty": "6"
	    },
	    "groups": [
	      {
	        "producerId": 13200791,
	        "name": "Тест группа 1",
	        "groupId": 5
	      },
	      {
	        "producerId": 13200791,
	        "name": "Группа 2",
	        "groupId": 7
	      },
	      {
	        "producerId": 13200791,
	        "name": "new group",
	        "groupId": 9
	      }
	    ]
	  },
	  {
	    "id": {
	      "guid": {},
	      "manager": "#",
	      "id": 13200795,
	      "gln": "9864065732334",
	      "companyId": 32659,
	      "retailerId": 0,
	      "isUzdAts": 0,
	      "isFinCrypt": 0,
	      "countryId": 2,
	      "isERNN": 0,
	      "name": "Dist_Test_2",
	      "companyInn": "2020303040",
	      "companyKpp": "345034504",
	      "zip": "722777",
	      "city": "г. Киев",
	      "street": "ул. Нехмурится, 9",
	      "phone": "#",
	      "otherInfo": "[]",
	      "dpiCReg": "26",
	      "dpiCRaj": "1",
	      "isDeclarDateNumRequired": false,
	      "distribexUser": 2
	    },
	    "limits": {
	      "max_pallet_qty": "12",
	      "max_weight": "500",
	      "max_pack_qty": "350",
	      "max_sum_nds": "20000999",
	      "credit_limit": "74100000.3434",
	      "multiplicity_packing": "1",
	      "min_sum_nds": "2000.2320",
	      "max_pos_qty": "300"
	    },
	    "groups": [
	      {
	        "producerId": 13200791,
	        "name": "Тест группа 1",
	        "groupId": 5
	      },
	      {
	        "producerId": 13200791,
	        "name": "Группа 2",
	        "groupId": 7
	      }
	    ]
	  }
	]

Таблиця 1 - Опис параметрів об'єкта Identificator

.. csv-table:: 
  :file: ../../../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/Identificator.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта Limits

.. csv-table:: 
  :file: for_csv/Limits.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта XDistribexAccessGroup

.. csv-table:: 
  :file: for_csv/XDistribexAccessGroup.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0








