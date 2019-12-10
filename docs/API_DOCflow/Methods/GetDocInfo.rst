#############################################################
**Отримання інформації по документу в задачі на узгодження**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                **HTTP GET**                                                |
+==============================================================+============================================================================================================+
| **Content-Type**                                             | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | **https://doc.edi-n.com/bdoc/store/task/doc-info**                                                         |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
|                                                              |                                                                                                            |
|                                                              | **Обов'язкові url-параметри:**                                                                             |
|                                                              |                                                                                                            |
|                                                              | **task_id** - ID задачі                                                                                    |
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

Таблиця 4 - Опис параметрів об'єкта **ExtraField**

.. csv-table:: 
  :file: for_csv/ExtraField.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **DocumentBody**

.. csv-table:: 
  :file: for_csv/DocumentBody.csv
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
    "agreementLogs": [],
    "agreementProcId": 0,
    "agreementStatus": 0,
    "bodies": [
      {
        "bodyId": 5087,
        "documentId": 5117,
        "fileName": "16.png",
        "signBodies": [
          {
            "bodyId": 5087,
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
              "timeStamp": 1555492497
            },
            "signId": 1591
          }
        ]
      }
    ],
    "clientSignsCount": 0,
    "date": 1555492339,
    "dateSent": 0,
    "documentId": 5117,
    "documentType": {
      "agreementProcId": 0,
      "code": "423",
      "companyId": 4,
      "documentId": 1008,
      "extraFields": [],
      "isActive": 1,
      "isProviderAccess": 0,
      "name": "О еще один",
      "type": 1,
      "useType": 1
    },
    "documentUuid": "068f1000-844f-41e3-9546-bf41b595873d",
    "extraFields": [],
    "isReadFromApi": 0,
    "number": "1555492339",
    "ownerSignsCount": 1,
    "packageId": 4615,
    "senderCompanyId": 4,
    "status": 1,
    "versionStructure": 0
  }


