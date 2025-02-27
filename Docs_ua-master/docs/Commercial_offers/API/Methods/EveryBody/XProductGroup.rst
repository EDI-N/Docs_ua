#############################################################
**Групи / категорії товарів (XProductGroup)**
#############################################################

**JSON:**

.. code:: json

	{
	  "1": {
	    "groupd_id": 1,
	    "parent_group_id": 0,
	    "name": "Бакалія",
	    "children": [
	      7,
	      16,
	      2
	    ]
	  },
	  "2": {
	    "groupd_id": 2,
	    "parent_group_id": 1,
	    "name": "Безглютенові продукти",
	    "children": [
	      3,
	      5
	    ]
	  },
	  "3": {
	    "groupd_id": 3,
	    "parent_group_id": 2,
	    "name": "Кондитерські вироби без глютену",
	    "children": [
	      4
	    ]
	  },
	  "4": {
	    "groupd_id": 4,
	    "parent_group_id": 3,
	    "name": "Печиво без глютену",
	    "children": []
	  },
	  "5": {
	    "groupd_id": 5,
	    "parent_group_id": 2,
	    "name": "Хлібо булочні вироби без глютену",
	    "children": [
	      6
	    ]
	  },
	  "6": {
	    "groupd_id": 6,
	    "parent_group_id": 5,
	    "name": "Хліб без глютену",
	    "children": []
	  },
	  "7": {
	    "groupd_id": 7,
	    "parent_group_id": 1,
	    "name": "Борошно",
	    "children": [
	      8,
	      10,
	      12
	    ]
	  },
	  "8": {
	    "groupd_id": 8,
	    "parent_group_id": 7,
	    "name": "Борошно житнє",
	    "children": [
	      9
	    ]
	  },
	  "9": {
	    "groupd_id": 9,
	    "parent_group_id": 8,
	    "name": "Борошно житнє 1кг",
	    "children": []
	  },
	  "10": {
	    "groupd_id": 10,
	    "parent_group_id": 7,
	    "name": "Борошно кукурудзяне",
	    "children": [
	      11
	    ]
	  },
	  "11": {
	    "groupd_id": 11,
	    "parent_group_id": 10,
	    "name": "Борошно кукурудзяне 1кг",
	    "children": []
	  },
	  "12": {
	    "groupd_id": 12,
	    "parent_group_id": 7,
	    "name": "Борошно пшеничне",
	    "children": [
	      14,
	      15,
	      13
	    ]
	  },
	  "13": {
	    "groupd_id": 13,
	    "parent_group_id": 12,
	    "name": "Борошно пшеничне 1кг",
	    "children": []
	  },
	  "14": {
	    "groupd_id": 14,
	    "parent_group_id": 12,
	    "name": "Борошно пшеничне 2кг",
	    "children": []
	  },
	  "15": {
	    "groupd_id": 15,
	    "parent_group_id": 12,
	    "name": "Борошно пшеничне 5кг",
	    "children": []
	  },
	  "16": {
	    "groupd_id": 16,
	    "parent_group_id": 1,
	    "name": "Консерви М'ясні, Рибні",
	    "children": [
	      17,
	      20
	    ]
	  },
	  "17": {
	    "groupd_id": 17,
	    "parent_group_id": 16,
	    "name": "Консерви  Рибні",
	    "children": [
	      18,
	      19
	    ]
	  },
	  "18": {
	    "groupd_id": 18,
	    "parent_group_id": 17,
	    "name": "Тунець консервований",
	    "children": []
	  },
	  "19": {
	    "groupd_id": 19,
	    "parent_group_id": 17,
	    "name": "Шпроти консервовані",
	    "children": []
	  },
	  "20": {
	    "groupd_id": 20,
	    "parent_group_id": 16,
	    "name": "Консерви М'ясні",
	    "children": [
	      21
	    ]
	  },
	  "21": {
	    "groupd_id": 21,
	    "parent_group_id": 20,
	    "name": "Консервоване мясо птиці",
	    "children": []
	  }
	}

.. об"єкт той же, але виводиться інакше

Таблиця 1 - Опис параметрів

.. csv-table:: 
  :file: ../../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/XProductGroup.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. deprecated * для сервісу Є-Товар: категорії/групи/підгрупи 
