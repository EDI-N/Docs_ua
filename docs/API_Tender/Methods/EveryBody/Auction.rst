#############################################################
**Дані тендера (об'єкт Auction)**
#############################################################

**JSON:**

.. code:: json

	{
	  "id": 4611,
	  "uuid": "5042fdf7-0985-4429-88d3-4fc1c0055f3f",
	  "companyId": 4216,
	  "company": {
	    "id": 4216,
	    "uuid": "eaf51f20-810e-4296-952f-b5a0c9c3b1ab",
	    "accountID": 37228,
	    "name": "ТОВ Перевозчик товара",
	    "edrpou": "987456321",
	    "inn": "987456321",
	    "city": "Тетиев",
	    "address": "центральная"
	  },
	  "dateCreate": 1654238475,
	  "dateStart": 1654240260,
	  "dateEnd": 1657438800,
	  "dateLastUpdate": 1654238479,
	  "userId": 60213516,
	  "user": {
	    "id": 60213516,
	    "employeeId": 2123,
	    "accountId": 37228,
	    "account": {
	      "id": 37228,
	      "name": "ТОВ \"Перевозчик товара\"",
	      "edrpou": "987456321",
	      "inn": "987456321",
	      "status": {
	        "code": 1,
	        "description": "Активный"
	      },
	      "emails": [
	        "perevozchiktovara@gmail.com"
	      ],
	      "phone": "380635025677",
	      "legalAddress": "вул. Хрещатик 32",
	      "dateCreate": 1624374233,
	      "dateChange": 0
	    },
	    "login": "perevozchiktovara@gmail.com",
	    "role": {
	      "code": 1,
	      "description": "Пользователь"
	    },
	    "name": "Груз",
	    "surname": "Перевозчик",
	    "secondName": "LLLL",
	    "phone": "380534653460",
	    "ipn": "1234567891",
	    "dateLastLogin": 1654238418,
	    "info": "self registered. IP: null",
	    "emails": [
	      "perevozchiktovara@gmail.com"
	    ],
	    "companies": [
	      {
	        "id": 4216,
	        "uuid": "eaf51f20-810e-4296-952f-b5a0c9c3b1ab",
	        "accountID": 37228,
	        "name": "ТОВ Перевозчик товара",
	        "edrpou": "987456321",
	        "inn": "987456321",
	        "city": "Тетиев",
	        "address": "центральная"
	      },
	      {
	        "id": 4219,
	        "uuid": "c067f69f-aaec-4e04-a3be-4d365fe24a02",
	        "accountID": 37228,
	        "name": "Тов Нов перевоз",
	        "edrpou": "456909720",
	        "inn": "7527785272",
	        "city": "Київ",
	        "address": "проспект Оболонський"
	      },
	      {
	        "id": 4230,
	        "uuid": "2d617de7-5624-4332-88ea-14529c8b1a73",
	        "accountID": 37228,
	        "name": "ДЛП ОРТ-арож",
	        "edrpou": "151515369",
	        "inn": "151515369"
	      },
	      {
	        "id": 4231,
	        "uuid": "eb9b40c4-ed5f-4cb2-820e-265fcb146f42",
	        "accountID": 37227,
	        "name": "ТОВ Перевозка",
	        "edrpou": "19369433",
	        "inn": "566666666666",
	        "city": "Київ",
	        "address": "проспект Бандери 35"
	      },
	      {
	        "id": 4234,
	        "uuid": "09279204-eda7-468b-bef1-8fe9a5327290",
	        "accountID": 37227,
	        "name": "ТОВ Заказчик",
	        "edrpou": "642456988",
	        "inn": "642456988",
	        "city": "Киев",
	        "address": "проспект Победы 40"
	      },
	      {
	        "id": 4574,
	        "uuid": "f28e0c65-9802-4cf6-9119-614f65222441",
	        "accountID": 37228,
	        "name": "ТОВ Валидный едрпоу",
	        "edrpou": "42746134",
	        "inn": "427461345555"
	      },
	      {
	        "id": 6991,
	        "uuid": "ee0735df-eb71-49a0-acd5-49363984de5f",
	        "accountID": 37487,
	        "name": "ТОВ Бурундук",
	        "edrpou": "5243543",
	        "inn": "6565315321"
	      }
	    ],
	    "isSubscribes": false
	  },
	  "title": "Яблука",
	  "description": "Яблука",
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
	  "hideLotsAndBetsCounts": false,
	  "isFree": false,
	  "isProlonged": false,
	  "lots": [
	    {
	      "id": 10051,
	      "auctionId": 4611,
	      "title": "Яблука",
	      "description": "Яблука",
	      "expectedValue": 333.0,
	      "stepValue": 3.0,
	      "currencyId": 1,
	      "currency": {
	        "id": 1,
	        "code": "UAH",
	        "name": "Українська гривня"
	      },
	      "quantity": 33333333,
	      "unitId": 14,
	      "unit": {
	        "id": 14,
	        "code": "2013",
	        "name": "тисяча штук",
	        "shortName": "тис.шт."
	      },
	      "deliveryStartDate": 0,
	      "deliveryEndDate": 0,
	      "categoryId": 9511,
	      "category": {
	        "id": 9511,
	        "section": "99",
	        "group": "9",
	        "categoryClass": "9",
	        "category": "9",
	        "detailing": "001",
	        "check_sum": "9",
	        "full_code": "99999001-9",
	        "description_ua": "Зоотовари",
	        "description_en": "Pet supplies",
	        "rank": 1,
	        "refId": 9458,
	        "hasChildren": 0,
	        "status": 1,
	        "isSubscribes": false
	      },
	      "regionId": 0,
	      "noShowBets": false,
	      "noShowBestBet": false,
	      "hideParticipantNamesOnly": false,
	      "betsCount": 0,
	      "attachmentsCount": 0
	    }
	  ],
	  "lotsCount": 1,
	  "betsCount": 0,
	  "attachments": []
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

Таблиця 22 - Опис параметрів об'єкта **CompanyAccessRequestStatus**

.. csv-table:: 
  :file: for_csv/CompanyAccessRequestStatus.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

