#########################################################################
**Контакт акаунта (об'єкт AccountContact)**
#########################################################################

**JSON as Request:**

.. code:: json

	{
	  "contactTypeId": 6,
	  "name": "Шоколадний Заєць",
	  "mobile": "380666666666",
	  "phone": "333уауауауа",
	  "email": "mail@mail.mailcom",
	  "isSubscribed": 1
	}

**JSON as Response:**

.. code:: json

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
	}

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