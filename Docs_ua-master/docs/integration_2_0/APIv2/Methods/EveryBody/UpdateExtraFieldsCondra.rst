.. deprecated (not for integrated users - web only) Ok, this is an exception for CONDRA (temporary) - delete when another api will be ready

#########################################################################
**Індиксація CONDRA (додавання / оновлення полей екстрапараметрів)**
#########################################################################

**Приклад CONDRA:**

.. code:: json

    {
      "doc_num": "uniq", // номер документа
      "doc_date": 1615932000, // дата документа в Unixtimestamp
      "action": "1", // константа = 1
      "sender": "9864065160861", // gln відправника
      "recipient": "4820000000000", // gln відправника
      "trans_id": "c48f97e9-8d98-4c52-8635-675a6145f570", // UUID транзакції (метод "Отримання UUID" або через Вашу облікову систему)
      "varn": "a190e8cc-50a9-4ef4-9815-ec41b000f60c", // UUID запису (метод "Отримання UUID" або через Вашу облікову систему)
      "buyer_uuid": "4820000000000", // gln отримувача
      "supplier_uuid": "9864065160861", // gln отримувача
      "delivery_place_uuid": "4820000000000", // gln місця доставки
      "file_name": "77f00932fd46bf24ec6046f373898fd7.gif" // повне ім'я файлу без дерикторії, але з розширенням.
    }

**Приклад TRANSPORTATIONORDER:**

.. code:: json

	{
	  "carrier_uuid": "9864065747215",
	  "partner_id": "0",
	  "sub_doc_type_id": "1",
	  "sender": "9864065737773",
	  "doc_num": "Zaya_001",
	  "customer_uuid": "9864065737773",
	  "doc_date": 1674424800,
	  "draft_date_created": "1674484067",
	  "recipient": "9864065747215",
	  "doc_process": "0",
	  "driver_uuid": "null",
	  "car_number": "null",
	  "trailer_number": "null",
	  "semitrailer_number": "null"
	}

