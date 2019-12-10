#############################################################
**Отримання інформації по внутрішньому документу**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                **HTTP GET**                                                |
+==============================================================+============================================================================================================+
| **Content-Type**                                             | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | **https://doc.edi-n.com/bdoc/store/internal-document/info**                                                |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
|                                                              |                                                                                                            |
|                                                              | **Обов'язкові url-параметри:**                                                                             |
|                                                              |                                                                                                            |
|                                                              | **document_id** - ID документу                                                                             |
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

Таблиця 5 - Опис параметрів об'єкта **ExtraField**

.. csv-table:: 
  :file: for_csv/ExtraField.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **DocStructValue**

.. csv-table:: 
  :file: for_csv/DocStructValue.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **AgreementLogs**

.. csv-table:: 
  :file: for_csv/AgreementLogs.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 8 - Опис параметрів об'єкта **DictionaryValue**

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

  {
    "agreementLogs": [
      {
        "actionType": 4,
        "agreementLogId": 1279,
        "comment": "авы",
        "dateCreated": 1562230627,
        "taskId": 5035,
        "user": {
          "accountId": 0,
          "companies": [],
          "email": "sashabelovv@meta.ua",
          "fio": "Ляшенко евгений",
          "isOwner": 0,
          "lastLoginDate": 0,
          "passPolicyId": 0,
          "passSecureType": 0,
          "roles": [],
          "routes": [],
          "status": 0,
          "tel": "34324322",
          "uiTypes": [],
          "userAccess": {},
          "userId": 0
        }
      }
    ],
    "agreementProcId": 0,
    "agreementStatus": 0,
    "bodies": [
      {
        "bodyId": 6257,
        "documentId": 6383,
        "fileName": "1562240257_1562240257_6383.xml",
        "signBodies": [
          {
            "bodyId": 6257,
            "companyId": 4,
            "info": {
              "certSerial": "33B6CB7BF721B9CE040000000CAB250045995A00",
              "isTimeStamp": true,
              "issuerCN": "Акредитований центр сертифікації ключів ІДД ДФС",
              "subjCN": "Мирний Олександр Максимович (Тест)",
              "subjCode": "1010101017",
              "subjFullName": "Мирний Олександр Максимович (Тест)",
              "subjInn": "1010101017",
              "subjOrg": "Мирний Олександр Максимович (Тест)",
              "subject": "CN=Мирний Олександр Максимович (Тест);SN=Мирний;GivenName=Олександр Максимович (Тест);Serial=2468620;C=UA;L=Київ",
              "timeStamp": 1562312853
            },
            "signId": 1967
          },
          {
            "bodyId": 6257,
            "companyId": 4,
            "info": {
              "certSerial": "33B6CB7BF721B9CE040000000CAB250045995A00",
              "isTimeStamp": true,
              "issuerCN": "Акредитований центр сертифікації ключів ІДД ДФС",
              "subjCN": "Мирний Олександр Максимович (Тест)",
              "subjCode": "1010101017",
              "subjFullName": "Мирний Олександр Максимович (Тест)",
              "subjInn": "1010101017",
              "subjOrg": "Мирний Олександр Максимович (Тест)",
              "subject": "CN=Мирний Олександр Максимович (Тест);SN=Мирний;GivenName=Олександр Максимович (Тест);Serial=2468620;C=UA;L=Київ",
              "timeStamp": 1562312873
            },
            "signId": 1969
          }
        ]
      }
    ],
    "clientSignsCount": 0,
    "comment": "121212",
    "date": 1562054351,
    "dateSent": 1562229582,
    "documentId": 6270,
    "documentType": {
      "agreementProcId": 0,
      "code": "0cfa1f6f52884f6c8a4d1f1e51b7b07d",
      "companyId": 4,
      "documentId": 2677,
      "extraFields": [],
      "isActive": 1,
      "isProviderAccess": 0,
      "name": "Внутренний2",
      "type": 2,
      "useType": 2
    },
    "documentUuid": "dd5f6a59-2cf2-4bf3-b70e-26cf5e11266e",
    "extraFields": [],
    "isReadFromApi": 0,
    "number": "1562054351",
    "ownerSignsCount": 0,
    "packageId": 0,
    "senderCompanyId": 4,
    "status": 5,
    "versionStructure": 2
  }


