######################################################################
**Додавання (прив'язка) типу комплекта документів до довідника**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                        **Метод запиту**                        |                                              **HTTP OPTIONS**                                              |
+================================================================+============================================================================================================+
| **Content-Type**                                               | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                                 |   https://doc.edin.ua/bdoc/package_dictionary                                                              |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)**   | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Обов'язкові параметри, що передаються в тілі запиту (json)** | **packageId, dictionaryId**                                                                                |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
*******************************************************************

``REQUEST``

Опис json-параметрів **запиту** метода API (об'єкт **Package2Dictionaries**)

Таблиця 1 - Опис параметрів об'єкта **Package2Dictionaries**

.. csv-table:: 
  :file: for_csv/Package2Dictionaries.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

``RESPONSE``

Опис json-параметрів **відповіді** метода API (об'єкт **PackageType**)

Таблиця 2 - Опис параметрів об'єкта **PackageType**

.. csv-table:: 
  :file: for_csv/PackageType.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Document2Package**

.. csv-table:: 
  :file: for_csv/Document2Package.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Package2Dictionaries**

.. csv-table:: 
  :file: for_csv/Package2Dictionaries.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Dictionary**

.. csv-table:: 
  :file: for_csv/Dictionary.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **DictionaryValue**

.. csv-table:: 
  :file: for_csv/DictionaryValue.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Document**

.. csv-table:: 
  :file: for_csv/Document.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

--------------

**Приклади**
*****************

Приклад тіла **запиту** (json):

.. code:: ruby

  {
    "packageId": 1485,
    "dictionaryId": 443,
    "fillType": 3,
    "required": 0
  }

--------------

Приклад тіла **відповіді** (json): 

.. code:: ruby

  {
    "packageId": 1485,
    "companyId": 989,
    "name": "авыаыв123",
    "type": 1,
    "code": "323222",
    "packageChainId": 244,
    "status": 3,
    "version": 1,
    "dateChanged": 1557905884,
    "autoHandle": 0,
    "document2packages": [
      {
        "packageId": 1485,
        "documentId": 2391,
        "needSign": 0,
        "signsCount": 0,
        "ownerSignsCount": 0,
        "needEncrypt": 0,
        "required": 0,
        "isRecipientAttach": 0,
        "maxFilesCount": 3,
        "document": {
          "documentId": 2391,
          "companyId": 989,
          "name": "dsfdsfs",
          "type": 2,
          "code": "2322",
          "agreementProcId": 0,
          "isActive": 1,
          "extraFields": []
        }
      }
    ],
    "package2dictionaries": [
      {
        "packageId": 1485,
        "dictionaryId": 443,
        "fillType": 3,
        "required": 0,
        "dictionary": {
          "dictionaryId": 443,
          "companyId": 989,
          "name": "выфвф",
          "code": "32423",
          "isActive": 1,
          "values": [
            {
              "valueId": 759,
              "dictionaryId": 443,
              "name": "куцкуц",
              "code": "кцу",
              "isActive": 1
            }
          ]
        }
      }
    ],
    "extraFields": [],
    "company": {
      "companyId": 0,
      "accountId": 0,
      "type": 0,
      "name": "dwdsss",
      "code": "433",
      "isApproved": 0,
      "isSignedOffer": 0,
      "isActive": 0,
      "ownershipTypeId": 0,
      "certificates": [],
      "dictionaries": [],
      "notifySettings": []
    }
  }


