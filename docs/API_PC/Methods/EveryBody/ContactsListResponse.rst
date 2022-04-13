#########################################################################
**Список контактів акаунта (масив об'єктів AccountContact)**
#########################################################################

**JSON:**

.. code:: json

	[
	  {
	    "contactId": 24346,
	    "accountId": 37502,
	    "name": "Хом'ячок Джон Фердинандович",
	    "positionId": 0,
	    "contactTypeId": 6,
	    "mobile": "380696969696",
	    "isSubscribed": 0
	  },
	  {
	    "contactId": 24347,
	    "accountId": 37502,
	    "name": "Риба Фіш",
	    "positionId": 0,
	    "contactTypeId": 8,
	    "mobile": "380988954258",
	    "email": "vigixe2186@aikusy.com",
	    "isSubscribed": 0
	  },
	  {
	    "contactId": 24348,
	    "accountId": 37502,
	    "name": "Шоколадний Заєць",
	    "positionId": 0,
	    "contactTypeId": 6,
	    "phone": "333уауауауа",
	    "mobile": "380666666666",
	    "email": "mail@mail.mailcom",
	    "isSubscribed": 1
	  },
	  {
	    "contactId": 24350,
	    "accountId": 37502,
	    "name": "Sam",
	    "positionId": 0,
	    "contactTypeId": 4,
	    "phone": "5151444151",
	    "mobile": "380111444111",
	    "email": "maila@mulo.companys",
	    "isSubscribed": 1
	  }
	]

Таблиця 1 - Опис параметрів об'єкта **AccountContact**

.. csv-table:: 
  :file: for_csv/AccountContact.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.