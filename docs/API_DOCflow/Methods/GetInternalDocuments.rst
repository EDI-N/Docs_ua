#############################################################
**Отримання списку внутрішніх документів**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                **HTTP GET**                                                |
+==============================================================+============================================================================================================+
| **Content-Type**                                             | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | **https://doc.edi-n.com/bdoc/store/internal-documents**                                                    |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
|                                                              |                                                                                                            |
|                                                              | **Обов'язкові url-параметри:**                                                                             |
|                                                              |                                                                                                            |
|                                                              | **folder** - вибір каталога користувача (1- draft (чернетки), 2-sent (відправлені документи))              |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
*******************************************************************

``REQUEST``

В цьому методі json-тіло **запиту** відсутнє (інші дані передавати не потрібно).

``RESPONSE``

Опис json-параметрів **відповіді** методу API (об'єкт **DocumentStore**).

Таблиця 1 - Опис параметрів об'єкта **DocumentStore**

.. csv-table:: 
  :file: for_csv/DocumentStore.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Document**

.. csv-table:: 
  :file: for_csv/Document.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **DocumentBody**

.. csv-table:: 
  :file: for_csv/DocumentBody.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **AgreementLogs**

.. csv-table:: 
  :file: for_csv/AgreementLogs.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **DictionaryValue**

.. csv-table:: 
  :file: for_csv/DictionaryValue.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

--------------

**Приклади**
*****************

**При використанні методу json-тіло запиту відсутнє (дані передавати не потрібно)**

--------------

Приклад тіла **відповіді** в json форматі 

.. code:: ruby

  [
    {
      "agreementProcId": 142,
      "agreementStatus": 1,
      "bodies": [],
      "clientSignsCount": 0,
      "date": 1562584937,
      "dateSent": 0,
      "documentId": 6428,
      "documentType": {
        "agreementProcId": 0,
        "companyId": 0,
        "documentId": 2676,
        "extraFields": [],
        "isActive": 0,
        "isProviderAccess": 0,
        "name": "внутренний",
        "type": 1,
        "useType": 0
      },
      "documentUuid": "328ca968-45fd-4b4f-8742-9249b049d4f6",
      "extraFields": [],
      "isReadFromApi": 0,
      "number": "1562584937",
      "ownerSignsCount": 0,
      "packageId": 0,
      "senderCompany": {
        "accountId": 8,
        "certificates": [],
        "code": "34554355",
        "companyId": 4,
        "dictionaries": [],
        "inn": "123456789043",
        "isActive": 0,
        "isApproved": 0,
        "isSignedOffer": 0,
        "legalName": "ПрАТ \"Літак\"",
        "name": "Царь Царей",
        "notifySettings": [],
        "ownershipTypeId": 0,
        "type": 0
      },
      "senderCompanyId": 4,
      "status": 1,
      "versionStructure": 0
    },
    {
      "agreementProcId": 142,
      "agreementStatus": 1,
      "bodies": [],
      "clientSignsCount": 0,
      "date": 1561646310,
      "dateSent": 0,
      "documentId": 6235,
      "documentType": {
        "agreementProcId": 0,
        "companyId": 0,
        "documentId": 2676,
        "extraFields": [],
        "isActive": 0,
        "isProviderAccess": 0,
        "name": "внутренний",
        "type": 1,
        "useType": 0
      },
      "documentUuid": "49ee9089-e5f9-49a9-8807-3323ab925f2c",
      "extraFields": [],
      "isReadFromApi": 0,
      "number": "1561646310",
      "ownerSignsCount": 0,
      "packageId": 0,
      "senderCompany": {
        "accountId": 8,
        "certificates": [],
        "code": "34554355",
        "companyId": 4,
        "dictionaries": [],
        "inn": "123456789043",
        "isActive": 0,
        "isApproved": 0,
        "isSignedOffer": 0,
        "legalName": "ПрАТ \"Літак\"",
        "name": "Царь Царей",
        "notifySettings": [],
        "ownershipTypeId": 0,
        "type": 0
      },
      "senderCompanyId": 4,
      "status": 1,
      "versionStructure": 0
    }
  ]


