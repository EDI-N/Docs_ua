###############################################################################
**Дані заявки на участь в закритому аукціоні (об'єкт Access)**
###############################################################################

**JSON:**

.. code:: json

    {
        "id": 3069,
        "auctionId": 5799,
        "userId": 50206653,
        "user":
        {
            "id": 50206653,
            "employeeId": 1056,
            "accountId": 32657,
            "account":
            {
                "id": 32657,
                "name": "Test_EDS3",
                "edrpou": "300000003",
                "inn": "3030303030",
                "status":
                {
                    "code": 1,
                    "description": "Активный"
                },
                "emails":
                [
                    "test@qw.we"
                ],
                "phone": "134567890987",
                "legalAddress": "#",
                "dateCreate": 1572349280,
                "dateChange": 1601881494
            },
            "login": "uaFelExSender",
            "role":
            {
                "code": 1,
                "description": "Пользователь"
            },
            "name": "Boris",
            "surname": "Djonsonuk",
            "dateLastLogin": 1681821485,
            "emails":
            [
                "test@qw.we",
                "storchevayas@edin.ua"
            ],
            "isSubscribes": false
        },
        "companyId": 3627,
        "company":
        {
            "id": 3627,
            "uuid": "f96a5cb6-935b-4940-8c47-ff3f96aa300d",
            "accountID": 32657,
            "name": "Bimba Inc",
            "edrpou": "1488883523",
            "inn": "1488883523",
            "city": "rrrrr",
            "address": "323r23r"
        },
        "dateCreated": 1681821985,
        "message": "password-baracuda",
        "status":
        {
            "code": 2,
            "description": "Запрос доступа (не принято решение)"
        },
        "contactName": "Djonsonuk Boris ",
        "contactEmail": "test@qw.we",
        "contactPhone": "380684856254"
    }

Таблиця 1 - Опис параметрів об'єкта **Access**

.. csv-table:: 
  :file: for_csv/Access.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Auction**

.. csv-table:: 
  :file: for_csv/Auction.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **User**

.. csv-table:: 
  :file: for_csv/User.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Status**

.. csv-table:: 
  :file: for_csv/Status.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **AccessLog**

.. csv-table:: 
  :file: for_csv/AccessLog.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0


-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

