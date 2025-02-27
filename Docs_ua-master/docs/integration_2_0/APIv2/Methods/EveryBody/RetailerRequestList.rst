#############################################################################################
**Список заявок на підключення до мережі (масив об'єктів RetailerRequest)**
#############################################################################################

**JSON:**

.. code:: json

    [
        {
            "accountId": 37663,
            "retailerId": 7,
            "status": 1,
            "gln": "9864232607052",
            "contractNumber": "yes",
            "contractDate": "2023-12-20",
            "dateCreated": "2023-12-20 17:09:53",
            "fio": "Адвокат Адмінки",
            "phone": "380685231489",
            "email": "tw_ettn_v3@edin.ua",
            "type": 1,
            "inn": "111111111111",
            "edrpou": "11111111",
            "companyName": "TW_Вантажовідправник",
            "id": 513,
            "retailer":
            {
                "id": 7,
                "accountId": 9549,
                "name": "Варус (ОМЕГА)",
                "gln": "9864119011415",
                "aliasName": "Варус (ОМЕГА)",
                "type": 1,
                "countryId": 247,
                "startDate": "2023-06-21",
                "visible": true,
                "special": false,
                "emails": "test@edin.ua",
                "docTypes":
                [],
                "services":
                [],
                "isNewPositions": false
            }
        }
    ]

Таблиця 1 - Опис параметрів об'єкта RetailerRequest

.. csv-table:: 
  :file: for_csv/RetailerRequest.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Retailer**

.. csv-table:: 
  :file: /API_PC/Methods/EveryBody/for_csv/Retailer.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.


