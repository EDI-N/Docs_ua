#############################################################
**Створення комплекта документів**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                        **Метод запиту**                        |                                               **HTTP POST**                                                |
+================================================================+============================================================================================================+
| **Content-Type**                                               | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                                 | **https://doc.edi-n.com/bdoc/store/package**                                                               |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)**   | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Обов'язкові параметри, що передаються в тілі запиту (json)** | contractId, packageId наприклад: **{"contract":{"contractId":55},"packageType":{"packageId":59}}**         |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
*******************************************************************

``REQUEST`` / ``RESPONSE``

Опис json-параметрів **запиту** та **відповіді** метода API (об'єкт **Package**)

Таблиця 1 - Опис параметрів об'єкта **Package**

.. csv-table:: 
  :file: for_csv/Package.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Contract**

.. csv-table:: 
  :file: for_csv/Contract.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **DocumentStore**

.. csv-table:: 
  :file: for_csv/DocumentStore.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Package2Dictionaries**

.. csv-table:: 
  :file: for_csv/Package2Dictionaries.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **Package2ExtraField**

.. csv-table:: 
  :file: for_csv/Package2ExtraField.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **Dictionary**

.. csv-table:: 
  :file: for_csv/Dictionary.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

--------------

**Приклади**
*****************

Приклад тіла **запиту** (json):

.. code:: ruby

  {
    "packageId": 264,
    "contract": {
      "contractId": 55,
      "number": "777",
      "date": 0,
      "ownerCompany": {
        "companyId": 43,
        "accountId": 24,
        "type": 1,
        "name": "Державне підприємство НИВА",
        "edrpou": "20820657",
        "phone": "0661525636",
        "info": "",
        "legalAddress": "Украина, Киев, ул. Волкова 53 ",
        "actualAddress": "Украина, Киев, бул. Шевченка 52-а ",
        "pdv": "31321320323",
        "isApproved": 0,
        "isSignedOffer": 0,
        "isActive": 1,
        "certificates": [],
        "dictionaries": []
      },
      "clientCompany": {
        "companyId": 46,
        "accountId": 32,
        "type": 1,
        "name": "Марченко О.В.",
        "edrpou": "СН777555",
        "legalAddress": "",
        "isApproved": 0,
        "isSignedOffer": 0,
        "isActive": 1,
        "certificates": [],
        "dictionaries": []
      },
      "description": "для проверки маршрутов",
      "expiredDate": 0,
      "status": 2,
      "paymentStatus": 0,
      "isSpecialConditions": 0,
      "isAllClientSenderPackages": 0,
      "isAllOwnerSenderPackages": 0,
      "dictionaries": [],
      "ownerPackages": [],
      "clientPackages": []
    },
    "packageTypeId": 59,
    "dateCreated": 1527754374,
    "dateChanged": 1527754374,
    "status": 1,
    "archive": 0,
    "packageNumber": "1527754374",
    "documents": [],
    "package2Dictionaries": [],
    "extraFields": [],
    "contractDictionaries": [],
    "packageType": {
      "packageId": 59,
      "companyId": 43,
      "name": "Риски тест (есть) ",
      "type": 1,
      "code": "12",
      "status": 1,
      "document2packages": [],
      "package2dictionaries": [],
      "extraFields": []
    },
    "isRead": 0,
    "isReadFromApi": 0,
    "isReadyForSend": 0,
    "packageDirection": 0
  }

--------------

Приклад тіла **відповіді** (json): 

.. code:: ruby

  {
    "packageId": 264,
    "contract": {
      "contractId": 55,
      "number": "777",
      "date": 0,
      "ownerCompany": {
        "companyId": 43,
        "accountId": 24,
        "type": 1,
        "name": "Державне підприємство НИВА",
        "edrpou": "20820657",
        "phone": "0661525636",
        "info": "",
        "legalAddress": "Украина, Киев, ул. Волкова 53 ",
        "actualAddress": "Украина, Киев, бул. Шевченка 52-а ",
        "pdv": "31321320323",
        "isApproved": 0,
        "isSignedOffer": 0,
        "isActive": 1,
        "certificates": [],
        "dictionaries": []
      },
      "clientCompany": {
        "companyId": 46,
        "accountId": 32,
        "type": 1,
        "name": "Марченко О.В.",
        "edrpou": "СН777555",
        "legalAddress": "",
        "isApproved": 0,
        "isSignedOffer": 0,
        "isActive": 1,
        "certificates": [],
        "dictionaries": []
      },
      "description": "для проверки маршрутов",
      "expiredDate": 0,
      "status": 2,
      "paymentStatus": 0,
      "isSpecialConditions": 0,
      "isAllClientSenderPackages": 0,
      "isAllOwnerSenderPackages": 0,
      "dictionaries": [],
      "ownerPackages": [],
      "clientPackages": []
    },
    "packageTypeId": 59,
    "dateCreated": 1527754374,
    "dateChanged": 1527754374,
    "status": 1,
    "archive": 0,
    "packageNumber": "1527754374",
    "documents": [],
    "package2Dictionaries": [],
    "extraFields": [],
    "contractDictionaries": [],
    "packageType": {
      "packageId": 59,
      "companyId": 43,
      "name": "Риски тест (есть) ",
      "type": 1,
      "code": "12",
      "status": 1,
      "document2packages": [],
      "package2dictionaries": [],
      "extraFields": []
    },
    "isRead": 0,
    "isReadFromApi": 0,
    "isReadyForSend": 0,
    "packageDirection": 0
  }


