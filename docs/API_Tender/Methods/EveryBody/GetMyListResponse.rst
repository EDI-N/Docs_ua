#############################################################
**Дані тендера (об'єкт Auction)**
#############################################################

**JSON:**

.. code:: json

	{
	  "id": 601,
	  "uuid": "8d3cc0a7-6225-43c9-b732-cb3827149ac2",
	  "companyId": 447,
	  "company": {
	    "id": 447,
	    "uuid": "0e4eca5a-b60d-4e18-b87c-05173ce5dfac",
	    "accountID": 11158,
	    "name": "СУБЛАНД УКРАЇНА",
	    "edrpou": "37212319",
	    "inn": "372123104628"
	  },
	  "dateCreate": 1596092826,
	  "dateStart": 1596094380,
	  "dateEnd": 1617224340,
	  "dateLastUpdate": 1596093307,
	  "userId": 198,
	  "user": {
	    "id": 198,
	    "employeeId": 198,
	    "accountId": 11158,
	    "account": {
	      "id": 11158,
	      "name": "СУБЛАНД УКРАЇНА",
	      "edrpou": "37212319",
	      "inn": "372123104628",
	      "status": {
	        "code": 1,
	        "description": "Активный"
	      },
	      "emails": [
	        "sinergiya07@mail.ru"
	      ],
	      "phone": "3805637318",
	      "legalAddress": "49069, м. Дніпропетровськ, вул. Карла Лібкнехта, буд. 49",
	      "dateCreate": 1371452537,
	      "dateChange": 1605700611,
	      "logo": "/api/logo/accounts/logo_11158.jpg"
	    },
	    "login": "biba",
	    "role": {
	      "code": 1,
	      "description": "Пользователь"
	    },
	    "name": "first_name",
	    "surname": "last_name",
	    "secondName": "middle_name",
	    "phone": "9",
	    "ipn": "1",
	    "dateLastLogin": 1611833549,
	    "info": "1e4d3617\r\nЗаблокирован, за неуплату 2010-10-04 16:55\r\nРазблокирован 2010-10-06 17:31\r\nЗаблокирован, за неуплату 2011-03-29 11:47\r\nРазблокирован 2011-03-29 15:34\r\nЗаблокирован, за неуплату 2011-05-10 09:24\r\nРазблокирован 2011-05-10 11:44",
	    "emails": [
	      "biba",
	      "evo-dev@edi.su"
	    ],
	    "companies": [
	      {
	        "id": 447,
	        "uuid": "0e4eca5a-b60d-4e18-b87c-05173ce5dfac",
	        "accountID": 11158,
	        "name": "СУБЛАНД УКРАЇНА",
	        "edrpou": "37212319",
	        "inn": "372123104628"
	      }
	    ]
	  },
	  "title": "Лента липкая",
	  "description": "Лента липкая, для ловли мух",
	  "status": {
	    "code": 2,
	    "name": "active",
	    "description": "Активный"
	  },
	  "accessType": {
	    "code": 1,
	    "name": "public",
	    "description": "Открытый для всех"
	  },
	  "type": {
	    "code": 1,
	    "name": "purchase",
	    "description": "Покупка"
	  },
	  "offerType": {
	    "code": 1,
	    "name": "bargaining",
	    "description": "Торги"
	  },
	  "isAutoRenewal": true,
	  "isTax": true,
	  "noShowBets": false,
	  "noShowBestBet": false,
	  "hideParticipantNamesOnly": false,
	  "isFree": false,
	  "isProlonged": false,
	  "lotsCount": 2,
	  "betsCount": 63
	}

Таблиця 1 - Опис параметрів об'єкта **Auction**

.. csv-table:: 
  :file: for_csv/Auction.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **User**

.. csv-table:: 
  :file: for_csv/User.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Status**

.. csv-table:: 
  :file: for_csv/Status.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **AccessType**

.. csv-table:: 
  :file: for_csv/AccessType.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **Type**

.. csv-table:: 
  :file: for_csv/Type.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **OfferType**

.. csv-table:: 
  :file: for_csv/OfferType.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 8 - Опис параметрів об'єкта **Role**

.. csv-table:: 
  :file: for_csv/Role.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 9 - Опис параметрів об'єкта **Account**

.. csv-table:: 
  :file: for_csv/Account.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 10 - Опис параметрів об'єкта **StatusAcc**

.. csv-table:: 
  :file: for_csv/StatusAcc.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 11 - Опис параметрів об'єкта **Comment**

.. csv-table:: 
  :file: for_csv/Comment.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0



