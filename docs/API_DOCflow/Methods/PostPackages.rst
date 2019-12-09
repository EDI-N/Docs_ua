#############################################################
**Отримання списку комплекта документів**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                               **HTTP POST**                                                |
+==============================================================+============================================================================================================+
| **Content-Type**                                             | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | https://doc.edi-n.com/bdoc/store/packages                                                                  |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
|                                                              |                                                                                                            |
|                                                              | **Опціональні url-параметри:**                                                                             |
|                                                              |                                                                                                            |
|                                                              | **limit** - ліміт вибірки (за умовчуванням 30; максимальне значення вибірки 50)                            |
|                                                              |                                                                                                            |
|                                                              | **offset** - зміщення відносно верхньої межі вибірки (за умовчуванням 0)                                   |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
*******************************************************************

``REQUEST``

Опис json-параметрів **запиту** метода API (частина об'єкта **PackageFilter**)

Таблиця 1 - Опис параметрів об'єкта **PackageFilterPart**

.. csv-table:: 
  :file: for_csv/PackageFilterPart.csv
  :widths:  1, 9, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **ExtraField**

.. csv-table:: 
  :file: for_csv/ExtraField.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **DictionaryValue**

.. csv-table:: 
  :file: for_csv/DictionaryValue.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

``RESPONSE``

Опис json-параметрів **відповіді** метода API (масив об'єктів **Package**)

Таблиця 4 - Опис параметрів об'єкта **Package**

.. csv-table:: 
  :file: for_csv/Package.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

--------------

**Приклади**
*****************

Пиклад тіла **запиту** в json форматі

.. code:: ruby

  {
    "folder": 1,
    "packageStatuses": [
      2,
      3,
      4,
      6,
      5,
      7,
      8
    ],
    "filterId": 0,
    "filterName": null
  }

--------------

Приклад тіла **відповіді** в json форматі 

.. code:: ruby

  [
    {
      "packageId": 6913,
      "senderCompanyId": 6,
      "recipientCompanyId": 4,
      "senderCompany": {
        "companyId": 6,
        "accountId": 10,
        "type": 0,
        "name": "ФІЗИЧНА ОСОБА",
        "legalName": "Ромашка",
        "inn": "0987654321",
        "code": "12345678",
        "isApproved": 0,
        "isSignedOffer": 0,
        "isActive": 0,
        "uuid": "22345200-abe8-4f60-90c8-0d43c5f6c0f6",
        "certificates": [],
        "dictionaries": [],
        "notifySettings": []
      },
      "recipientCompany": {
        "companyId": 4,
        "accountId": 8,
        "type": 0,
        "name": "Царь Царей",
        "legalName": "ПрАТ \"Літак\"",
        "inn": "123456789043",
        "code": "34554355",
        "isApproved": 0,
        "isSignedOffer": 0,
        "isActive": 0,
        "uuid": "a903de62-5b34-43c9-b73a-fb2b8ee4efc1",
        "certificates": [],
        "dictionaries": [],
        "notifySettings": []
      },
      "contract": {
        "contractId": 6,
        "number": "1",
        "contractName": "Сотрудник",
        "date": 1531872000,
        "description": "ав",
        "expiredDate": 1563408000,
        "sentDate": 0,
        "status": 2,
        "paymentStatus": 1,
        "isSpecialConditions": 0,
        "isAllClientSenderPackages": 0,
        "isAllOwnerSenderPackages": 0,
        "dictionaries": [],
        "ownerPackages": [],
        "clientPackages": []
      },
      "packageTypeId": 2139,
      "packageTypeChainId": 285,
      "dateCreated": 1573051584,
      "dateChanged": 1573052586,
      "status": 2,
      "archive": 0,
      "packageNumber": "1573051558",
      "documents": [],
      "package2Dictionaries": [],
      "extraFields": [],
      "contractDictionaries": [],
      "packageType": {
        "packageId": 2139,
        "companyId": 4,
        "name": "Создал что бы удалить",
        "type": 1,
        "code": "80be4146ea4b4ca9a808ce6e8ae98a98",
        "packageChainId": 285,
        "status": 1,
        "version": 0,
        "dateChanged": 1573051420,
        "autoHandle": 0,
        "document2packages": [],
        "package2dictionaries": [],
        "extraFields": []
      },
      "isRead": 1,
      "isReadFromApi": 0,
      "isReadyForSend": 0,
      "packageDirection": 1,
      "signDateTerm": 0,
      "packageUuid": "4eb586a0-50e3-4455-97bf-c049c656af22",
      "isWithAgreement": 0
    },
    {
      "packageId": 6263,
      "senderCompanyId": 6,
      "recipientCompanyId": 4,
      "senderCompany": {
        "companyId": 6,
        "accountId": 10,
        "type": 0,
        "name": "ФІЗИЧНА ОСОБА",
        "legalName": "Ромашка",
        "inn": "0987654321",
        "code": "12345678",
        "isApproved": 0,
        "isSignedOffer": 0,
        "isActive": 0,
        "uuid": "22345200-abe8-4f60-90c8-0d43c5f6c0f6",
        "certificates": [],
        "dictionaries": [],
        "notifySettings": []
      },
      "recipientCompany": {
        "companyId": 4,
        "accountId": 8,
        "type": 0,
        "name": "Царь Царей",
        "legalName": "ПрАТ \"Літак\"",
        "inn": "123456789043",
        "code": "34554355",
        "isApproved": 0,
        "isSignedOffer": 0,
        "isActive": 0,
        "uuid": "a903de62-5b34-43c9-b73a-fb2b8ee4efc1",
        "certificates": [],
        "dictionaries": [],
        "notifySettings": []
      },
      "contract": {
        "contractId": 6,
        "number": "1",
        "contractName": "Сотрудник",
        "date": 1531872000,
        "description": "ав",
        "expiredDate": 1563408000,
        "sentDate": 0,
        "status": 2,
        "paymentStatus": 1,
        "isSpecialConditions": 0,
        "isAllClientSenderPackages": 0,
        "isAllOwnerSenderPackages": 0,
        "dictionaries": [],
        "ownerPackages": [],
        "clientPackages": []
      },
      "packageTypeId": 1945,
      "packageTypeChainId": 285,
      "dateCreated": 1568620619,
      "dateChanged": 1568620619,
      "status": 2,
      "archive": 0,
      "packageNumber": "1568620497",
      "documents": [],
      "package2Dictionaries": [],
      "extraFields": [],
      "contractDictionaries": [],
      "packageType": {
        "packageId": 1945,
        "companyId": 4,
        "name": "Создал что бы удалить",
        "type": 1,
        "code": "80be4146ea4b4ca9a808ce6e8ae98a98",
        "packageChainId": 285,
        "status": 2,
        "version": 0,
        "dateChanged": 1568620428,
        "autoHandle": 0,
        "document2packages": [],
        "package2dictionaries": [],
        "extraFields": []
      },
      "isRead": 1,
      "isReadFromApi": 0,
      "isReadyForSend": 0,
      "packageDirection": 1,
      "signDateTerm": 0,
      "packageUuid": "b5800b95-e181-474c-adb3-50f8593f322c",
      "isWithAgreement": 1
    }
  ]


