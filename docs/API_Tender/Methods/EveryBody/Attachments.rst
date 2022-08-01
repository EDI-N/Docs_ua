#############################################################
**Дані вкладень (масив об'єктів Attachment)**
#############################################################

**JSON:**

.. code:: json

	[
	  {
	    "id": 1675,
	    "auctionId": 5245,
	    "lotId": 0,
	    "betId": 0,
	    "userId": 60212904,
	    "user": {
	      "id": 60212904,
	      "employeeId": 1035,
	      "accountId": 36633,
	      "account": {
	        "id": 36633,
	        "name": "Общество с ограниченной  ответственностью \"Скай'нет-56\"",
	        "edrpou": "89456891",
	        "inn": "123652632563",
	        "status": {
	          "code": 1,
	          "description": "Активный"
	        },
	        "emails": [
	          "12356@ukr.net"
	        ],
	        "phone": "355478563",
	        "legalAddress": "ююю",
	        "dateCreate": 1598894147,
	        "dateChange": 1638282398,
	        "about": "строительство  и логистика ",
	        "logo": "/api/logo/accounts/logo_36633.jpg"
	      },
	      "login": "willnotgotomumbai@gmail.com",
	      "role": {
	        "code": 1,
	        "description": "Пользователь"
	      },
	      "name": "Арбуз",
	      "surname": "Арбузов",
	      "secondName": "Иоанович ",
	      "phone": "380975560011",
	      "ipn": "111111111111",
	      "dateLastLogin": 1659344038,
	      "info": "self registered. IP: null",
	      "emails": [
	        "willnotgotomumbai@gmail.com"
	      ],
	      "isSubscribes": false
	    },
	    "fileName": "espec02.png",
	    "size": 83009
	  }
	]

Таблиця 1 - Опис параметрів об'єкта **Attachment**

.. csv-table:: 
  :file: for_csv/Attachment.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **User**

.. csv-table:: 
  :file: for_csv/User.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Account**

.. csv-table:: 
  :file: for_csv/Account.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Status**

.. csv-table:: 
  :file: for_csv/Status.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Role**

.. csv-table:: 
  :file: for_csv/Role.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

