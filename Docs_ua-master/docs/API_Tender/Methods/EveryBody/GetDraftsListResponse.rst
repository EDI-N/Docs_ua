#############################################################
**Дані тендера (об'єкт Auction)**
#############################################################

**JSON:**

.. code:: json

	{
	  "id": 263,
	  "uuid": "f0982333-0a52-4118-913c-f9bcf6cc81aa",
	  "companyId": 477,
	  "company": {
	    "id": 477,
	    "uuid": "b0707909-d160-4902-9e49-cb35ef70ed99",
	    "accountID": 412,
	    "name": "Торговий дім Чорна перлина",
	    "edrpou": "31005868",
	    "inn": "310058615429"
	  },
	  "dateCreate": 1592833608,
	  "dateStart": 1592837160,
	  "dateEnd": 1592838960,
	  "dateLastUpdate": 1592833608,
	  "userId": 199,
	  "user": {
	    "id": 199,
	    "employeeId": 199,
	    "accountId": 412,
	    "account": {
	      "id": 412,
	      "name": "Торговий дім Чорна перлина",
	      "edrpou": "31005868",
	      "inn": "310058615429",
	      "status": {
	        "code": 2,
	        "description": "Стартовый (с ограниченными возможностями)"
	      },
	      "emails": [
	        "perlina@elaninet.com",
	        " perlna@ukr.net"
	      ],
	      "phone": "3804871744",
	      "legalAddress": "65013, м. Одеса, пров. Бісквітний, 3",
	      "dateCreate": 0,
	      "dateChange": 1611043593,
	      "about": "SOME INFO ABOUT ACCOUNT",
	      "logo": "/api/logo/accounts/logo_412.png"
	    },
	    "login": "boba",
	    "role": {
	      "code": 1,
	      "description": "Пользователь"
	    },
	    "name": "first_name",
	    "surname": "last_name",
	    "secondName": "middle_name",
	    "phone": "8",
	    "ipn": "2",
	    "dateLastLogin": 1611680167,
	    "info": "7a685d9e\r\nЗаблокирован, за неуплату 2010-06-21 14:57\r\nРазблокирован 2010-06-21 14:57\r\nЗаблокирован, за неуплату 2010-10-05 10:14\r\nРазблокирован 2010-10-05 12:18\r\nЗаблокирован, за неуплату 2010-11-15 11:27\r\nРазблокирован 2010-11-17 12:06\r\nЗаблокирован, за неуплату 2011-01-20 10:10\r\nРазблокирован 2011-01-24 15:30\r\nЗаблокирован, за неуплату 2011-04-01 12:20\r\nРазблокирован 2011-04-04 11:05\r\nЗаблокирован, за неуплату 2011-07-01 10:34\r\nЗаблокирован, за неуплату 2011-10-03 10:34",
	    "emails": [
	      "boba",
	      "evo-dev@edi.su"
	    ],
	    "companies": [
	      {
	        "id": 59,
	        "uuid": "dea6af35-8382-4023-b045-b788dbf4c773",
	        "accountID": 22855,
	        "name": "TEST_DRIVER_COMPANY",
	        "edrpou": "99007755",
	        "inn": "9900660055",
	        "city": "KIEV",
	        "address": "KIEV"
	      },
	      {
	        "id": 477,
	        "uuid": "b0707909-d160-4902-9e49-cb35ef70ed99",
	        "accountID": 412,
	        "name": "Торговий дім Чорна перлина",
	        "edrpou": "31005868",
	        "inn": "310058615429"
	      }
	    ]
	  },
	  "title": "Атракціон невиданої щедрості",
	  "description": "Продається атракціон",
	  "status": {
	    "code": 1,
	    "name": "draft",
	    "description": "Черновик"
	  },
	  "accessType": {
	    "code": 2,
	    "name": "private",
	    "description": "Закрытый (приватный)"
	  },
	  "type": {
	    "code": 2,
	    "name": "selling",
	    "description": "Продажа"
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
	  "lotsCount": 1,
	  "betsCount": 0
	}

Таблиця 1 - Опис параметрів об'єкта **Auction**

.. csv-table:: 
  :file: for_csv/Auction.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 5, 12, 41
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
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **Type**

.. csv-table:: 
  :file: for_csv/Type.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **OfferType**

.. csv-table:: 
  :file: for_csv/OfferType.csv
  :widths:  1, 5, 12, 41
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

Таблиця 11 - Опис параметрів об'єкта **Lot**

.. csv-table:: 
  :file: for_csv/Lot.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 12 - Опис параметрів об'єкта **AuctionContacts**

.. csv-table:: 
  :file: for_csv/AuctionContacts.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 13 - Опис параметрів об'єкта **Attachment**

.. csv-table:: 
  :file: for_csv/Attachment.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 14 - Опис параметрів об'єкта **Subscribes**

.. csv-table:: 
  :file: for_csv/Subscribes.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 15 - Опис параметрів об'єкта **Currency**

.. csv-table:: 
  :file: for_csv/Currency.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 16 - Опис параметрів об'єкта **Unit**

.. csv-table:: 
  :file: for_csv/Unit.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 17 - Опис параметрів об'єкта **Category**

.. csv-table:: 
  :file: for_csv/Category.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 18 - Опис параметрів об'єкта **Region**

.. csv-table:: 
  :file: for_csv/Region.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 19 - Опис параметрів об'єкта **Bet**

.. csv-table:: 
  :file: for_csv/Bet.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 20 - Опис параметрів об'єкта **Comment**

.. csv-table:: 
  :file: for_csv/Comment.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 21 - Опис параметрів об'єкта **SubscribeToCategory**

.. csv-table:: 
  :file: for_csv/SubscribeToCategory.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

