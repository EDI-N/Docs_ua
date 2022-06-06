####################################################################
**Дані групи учасників (об'єкт ParticipantGroup)**
####################################################################

**JSON:**

.. code:: json

	{
	  "groupId": 291,
	  "companyId": 3600,
	  "groupName": "Fatality",
	  "comment": "hello",
	  "companies": [
	    {
	      "id": 5,
	      "uuid": "a32715ba-b7cb-4702-ae77-e8f6c3aaeb89",
	      "accountID": 24373,
	      "name": "тест ЕДІН",
	      "edrpou": "67553455",
	      "inn": "1010101016",
	      "city": "Kiev",
	      "address": "Mostobudivnykiv St, 17/11"
	    },
	    {
	      "id": 9,
	      "uuid": "5ad0361e-e48f-4a16-91e3-b2fac7844e3f",
	      "accountID": 36905,
	      "name": "ТОВ \"МЕТІНВЕСТ-СМЦ\"",
	      "edrpou": "32036829",
	      "inn": "320368205090",
	      "city": "м. Київ",
	      "address": "вул. Лейпцизька, буд.15А"
	    }
	  ],
	  "cpvs": [
	    {
	      "id": 9513,
	      "section": "99",
	      "group": "9",
	      "categoryClass": "9",
	      "category": "9",
	      "detailing": "002",
	      "check_sum": "9",
	      "full_code": "99999002-9",
	      "description_ua": "Дитячі іграшки",
	      "description_en": "Kids toys",
	      "rank": 1,
	      "refId": 9458,
	      "hasChildren": 0,
	      "status": 1,
	      "isSubscribes": false
	    },
	    {
	      "id": 9519,
	      "section": "99",
	      "group": "9",
	      "categoryClass": "9",
	      "category": "9",
	      "detailing": "005",
	      "check_sum": "9",
	      "full_code": "99999005-9",
	      "description_ua": "Партнерство, франчайзинг",
	      "description_en": "Partnership, Franchising",
	      "rank": 1,
	      "refId": 9458,
	      "hasChildren": 0,
	      "status": 1,
	      "isSubscribes": false
	    },
	    {
	      "id": 9525,
	      "section": "99",
	      "group": "9",
	      "categoryClass": "9",
	      "category": "9",
	      "detailing": "008",
	      "check_sum": "9",
	      "full_code": "99999008-9",
	      "description_ua": "Проектні роботи",
	      "description_en": "Design work",
	      "rank": 1,
	      "refId": 9458,
	      "hasChildren": 0,
	      "status": 1,
	      "isSubscribes": false
	    }
	  ]
	}

Таблиця 1 - Опис параметрів об'єкта **ParticipantGroup**

.. csv-table:: 
  :file: for_csv/ParticipantGroup.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Category**

.. csv-table:: 
  :file: for_csv/Category.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Comment**

.. csv-table:: 
  :file: for_csv/Comment.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.