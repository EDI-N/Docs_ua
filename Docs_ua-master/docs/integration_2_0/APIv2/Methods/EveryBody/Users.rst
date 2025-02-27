#############################################################
**Інформація про користувачів ( масив об'єктів User)**
#############################################################

**JSON:**

.. code:: json

  [
    {
      "blockedServices": [],
      "role": 2,
      "roleAccess": 0,
      "accountRole": 127,
      "access": {},
      "identificators": [],
      "filters": [],
      "id": 90688,
      "accountId": 40692,
      "login": "g1@gmail.com",
      "stringEmails": "g1@gmail.com",
      "phone": "380992369658",
      "emails": [
        "g1@gmail.com"
      ],
      "blocked": 0,
      "allowFTP": 0,
      "autoSending": false,
      "statusFile": 0,
      "isNotificationEnabled": 1,
      "isSatusFromOut": false,
      "isAdmin": true,
      "isSpecXML": false,
      "isCerts": 2,
      "XMLConv": 0,
      "account": {
        "id": 40692,
        "name": "\"Тестова мережа - EDIN\"",
        "ownership": "ТОВ",
        "inn": "#",
        "kpp": "34554363",
        "mail": "kozlenkoy@edi-n.com",
        "identificators": [],
        "phone": "0443590112",
        "ndsNumber": "#",
        "users": [],
        "billingMail": "kozlenkoy@edi-n.com",
        "bankName": "#",
        "bankAccount": "#",
        "bankMfo": "#",
        "bankAddress": "#",
        "isOffert": false,
        "country": "UA",
        "address": "м. Київ, вул. Михайла Донця, буд.6",
        "legalAddress": "м. Київ, вул. Михайла Донця, буд.6",
        "factAddress": "м. Київ, вул. Михайла Донця, буд.6",
        "directorName": "Франко І.Я.",
        "tariffVersion": 1,
        "directorPosition": "Директор",
        "registrationDate": "2020-08-17 00:00:00",
        "allowUnsignedComdoc": 0,
        "allowUnsignedCondra": 0,
        "platform": "FELEX",
        "autoProlongation": true,
        "docBasisForNTM": 0,
        "isSignConfirm": 0,
        "sessionsTTL": 3600,
        "companies": []
      },
      "employee": {
        "uuid": "3492a46f-998c-4aeb-990c-0293a8d59067",
        "userId": 90688,
        "lastName": "Прізвище",
        "firstName": "Ім'я",
        "email": "g1@gmail.com",
        "tel": "380992369658",
        "docDate": 0,
        "identifiers": {},
        "aliases": []
      },
      "isStatusNotification": false,
      "isPasswordChange": false,
      "isSpecification": 0,
      "statusNotifyTypes": []
    }
  ]

Таблиця 1 - Опис параметрів об'єкта **User**

.. csv-table:: 
  :file: for_csv/User.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Identificator**

.. csv-table:: 
  :file: for_csv/Identificator.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Account**

.. csv-table:: 
  :file: for_csv/Account.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Employee**

.. csv-table:: 
  :file: ../../../../API_ETTN/Methods/EveryBody/for_csv/Employee.csv
  :widths:  1, 3, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.