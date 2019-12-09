##########################################################################
**Видалення прив'язки типу комплекта документів до контракту**
##########################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                              **HTTP DELETE**                                               |
+==============================================================+============================================================================================================+
| **Content-Type**                                             | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | https://doc.edi-n.com/bdoc/contract_packages                                                               |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
|                                                              |                                                                                                            |
|                                                              | **Обов'язкові url-параметри:**                                                                             |
|                                                              |                                                                                                            |
|                                                              | **contract_id** - ID контракту                                                                             |
|                                                              |                                                                                                            |
|                                                              | **package_chain_id** - ID типу комплекта документів                                                        |
|                                                              |                                                                                                            |
|                                                              | **sender_type** - тип відправника: 1 - клієнт, 2 - власник                                                 |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
*******************************************************************

``REQUEST``

В цьому методі json-тіло **запиту** відсутнє (інші дані передавати не потрібно).

``RESPONSE``

У **відповідь** передаються дані комплекту документів (об'єкт **Contract**) в json формате

Таблиця 1 - Опис параметрів об'єкта **Contract**

.. csv-table:: 
  :file: for_csv/Contract.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **SpecialConditions**

.. csv-table:: 
  :file: for_csv/SpecialConditions.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Dictionary**

.. csv-table:: 
  :file: for_csv/Dictionary.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **DictionaryValue**

.. csv-table:: 
  :file: for_csv/DictionaryValue.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **PackageType**

.. csv-table:: 
  :file: for_csv/PackageType.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

--------------

**Приклади**
*****************

**При використанні методу json-тіло запиту відсутнє (дані передавати не потрібно)**

--------------

Приклад тіла **відповіді** в json форматі: 

.. code:: ruby

  {
    "contractId": 2181,
    "number": "423434442",
    "contractName": "Для Коли2",
    "date": 1557446400,
    "ownerCompany": {
      "companyId": 4,
      "accountId": 8,
      "type": 1,
      "name": "Царь Царей",
      "legalName": "ПрАТ \"Літак\"",
      "inn": "123456789043",
      "code": "34554355",
      "phone": "4234234324",
      "info": "ewdw",
      "isApproved": 1,
      "isSignedOffer": 1,
      "isActive": 1,
      "ownershipTypeId": 4,
      "atCode": "12363",
      "prsNum": "43242352",
      "certNum": "456",
      "uuid": "a903de62-5b34-43c9-b73a-fb2b8ee4efc1",
      "certificates": [],
      "dictionaries": [],
      "notifySettings": []
    },
    "clientCompany": {
      "companyId": 20,
      "accountId": 14,
      "type": 2,
      "name": "ФІЗИЧНА ОСОБА",
      "code": "3366905914",
      "isApproved": 1,
      "isSignedOffer": 1,
      "isActive": 1,
      "ownershipTypeId": 2,
      "uuid": "8d20c4a2-f21b-11e8-9806-005056013e25",
      "certificates": [],
      "dictionaries": [],
      "notifySettings": []
    },
    "expiredDate": 1557446400,
    "sentDate": 1557490133,
    "status": 1,
    "paymentStatus": 0,
    "isSpecialConditions": 0,
    "isAllClientSenderPackages": 0,
    "isAllOwnerSenderPackages": 0,
    "dictionaries": [
      {
        "dictionaryId": 8,
        "companyId": 4,
        "name": "Регион",
        "code": "6",
        "isActive": 1,
        "values": [
          {
            "valueId": 625,
            "dictionaryId": 8,
            "name": "Проверка 2",
            "code": "4444444444",
            "isActive": 1
          }
        ]
      }
    ],
    "ownerPackages": [],
    "clientPackages": [
      {
        "packageId": 1467,
        "companyId": 4,
        "name": "Тестовый для версий",
        "type": 1,
        "code": "78965",
        "packageChainId": 119,
        "status": 1,
        "version": 0,
        "dateChanged": 1557574242,
        "autoHandle": 0,
        "document2packages": [],
        "package2dictionaries": [],
        "extraFields": []
      }
    ]
  }



