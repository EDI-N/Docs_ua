#######################################################################################################
**Завантажені в сервіс контрагенти та контрагенти з помилковими даними (потребують правок)**
#######################################################################################################

**JSON:**

.. code:: json

    {
    "createdPartners": [
      {
        "id": 237,
        "employeeId": 1035,
        "companyId": 0,
        "email": "hopa@mail.com",
        "inviteStatus": 0,
        "inviteDate": 0,
        "serviceId": 9,
        "isRegistered": false
      },
      {
        "id": 238,
        "employeeId": 1035,
        "companyId": 0,
        "email": "parmezano@pam.ua",
        "inviteStatus": 0,
        "inviteDate": 0,
        "serviceId": 9,
        "isRegistered": false
      }
    ],
    "errorPartners": [
      {
        "id": 0,
        "employeeId": 1035,
        "companyId": 0,
        "email": "stethem@ukr.mem",
        "name": "Джейсон Стетхем",
        "companyName": "Повар",
        "companyCode": "858585888585",
        "inviteStatus": 0,
        "inviteDate": 0,
        "serviceId": 9,
        "isRegistered": false
      },
      {
        "id": 0,
        "employeeId": 1035,
        "companyId": 0,
        "email": "ozk82086@eoopy.com",
        "inviteStatus": 0,
        "inviteDate": 0,
        "serviceId": 9,
        "isRegistered": false
      }
    ]
    }

**createdPartners** - масив об'єктів Partner (дані контрагентів), що були завантажені в сервіс;

**errorPartners** - масив об'єктів Partner (дані контрагентів), що містять помилки і потребують правок (не завантажились).

Таблиця 1 - Опис параметрів об'єкта **Partner**

.. csv-table:: 
  :file: for_csv/Partner.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

-------------------------