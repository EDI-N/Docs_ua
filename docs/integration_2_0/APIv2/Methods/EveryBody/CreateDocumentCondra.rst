.. deprecated (not for integrated users - web only) Ok, this is an exception for CONDRA (temporary) - delete when another api will be ready

###################################################################################################
**Дані тіла запиту, що передаються для створення чернетки (CONDRA, TRANSPORTATIONORDER)**
###################################################################################################

**Приклад CONDRA:**

.. code:: json

    {
        "DATE": "2021-03-02", // Дата документа в форматі YYYY-MM-DD, повинна співпадати з параметром doc_date
        "HEAD": [
            {
                "TYPE": "1", // константа для тіла документа = 1
                "SENDER": "9864000000417", // gln відправника
                "SUPPLIER": "9864000000417", // gln відправника
                "BUYER": "9864000000424", // gln отримувача
                "RECIPIENT": "9864000000424", // gln отримувача
                "TRANSGUID": "332a120d-6030-48af-bc8b-675f0c7f9823", // UUID транзакції (метод "Отримання UUID" або через Вашу облікову систему)
                "DOCGUID": "082667cd-5cb0-4b0a-bae8-51d937f7fe86", // UUID запису (метод "Отримання UUID" або через Вашу облікову систему)
                "CONTENT": [
                    {
                        "FILENAME": "reestr_nakl_factoring.xlsx" // повне ім'я файлу без дерикторії, але з розширенням.
                    }
                ]
            }
        ],
        "NUMBER": "api1", // Номер документа, повинен співпадати з doc_number
        "DOCTYPE": 81 // тип документа, пока залишаємо константу = 81
    }

**Приклад TRANSPORTATIONORDER:**

.. code:: json

	{
	  "DATE": "2023-01-23",
	  "HEAD": [
	    {
	      "POSITION": [
	        {
	          "LOAD": {
	            "ADDRESS": {
	              "GLN": "9864065737759",
	              "NAME": "м. Київ",
	              "ADDRESS": "м. Київ, Street",
	              "ID": "UA80000000000093317"
	            },
	            "DATE": "2023-01-23 16:26",
	            "CONSIGNORCONTACTFACENAME": "reter",
	            "CONSIGNORCONTACTFACENUMBER": "380987968757",
	            "CONSIGNORCONTACTFACEID": "908989898908"
	          },
	          "UNLOAD": {
	            "CONSIGNEE": {
	              "GLN": "9864065747222",
	              "ID": "23787793",
	              "NAME": "Тестовий вантажоодержувач",
	              "ADDRESS": "м. Вінниця, Вінницький р-н, Вінницька, Перша, 5"
	            },
	            "ADDRESS": {
	              "GLN": "9864065747239",
	              "NAME": "м. Київ",
	              "ADDRESS": "м. Київ, Індустріальна, 55",
	              "ID": "UA80000000000093317"
	            },
	            "DATE": "2023-01-23 16:26"
	          },
	          "PACKAGEQUANTITY": "34",
	          "PACKAGEWEIGHT": "456",
	          "POSITIONNUMBER": "1"
	        }
	      ],
	      "CUSTOMER": {
	        "GLN": "9864065737773",
	        "ID": "99997783",
	        "NAME": "EDI \"Sender\"",
	        "ADDRESS": "City, Street, 123"
	      },
	      "CONSIGNOR": {
	        "GLN": "9864065747208",
	        "ID": "19499025",
	        "NAME": "Тестовий вантажовідправник",
	        "ADDRESS": "м. Київ, вул.Жасмінова, 5, 312312"
	      },
	      "CARRIER": {
	        "GLN": "9864065747215",
	        "ID": "23787764",
	        "NAME": "Тестовий перевізник",
	        "ADDRESS": "м. Київ, Грушевського, 25, 49000"
	      }
	    }
	  ],
	  "TRANSPORTATIONCOST": {
	    "WITHOUTVAT": "100500",
	    "VAT": 20
	  },
	  "SUBDOCTYPE": 1,
	  "NUMBER": "Zaya_001",
	  "TRANSPORTATIONTYPE": "7",
	  "TRANSPORTATIONPAYMENTTYPE": "1",
	  "PURCHASEORDERNUMBER": "так:)",
	  "DESCRIPTION": "Подарунки москалям"
	}