#############################################################
**Отримання структури внутрішнього документу**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                **HTTP GET**                                                |
+==============================================================+============================================================================================================+
| **Content-Type**                                             | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | **https://doc.edi-n.com/bdoc/store/internal-document/structure**                                           |
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
    "agreementProcId": 0,
    "agreementStatus": 0,
    "bodies": [],
    "clientSignsCount": 0,
    "date": 1562240257,
    "dateSent": 0,
    "documentId": 6383,
    "documentType": {
      "agreementProcId": 0,
      "code": "82bca6976b564c149f5ee15688e5742a",
      "companyId": 4,
      "documentId": 2681,
      "extraFields": [],
      "isActive": 1,
      "isProviderAccess": 0,
      "name": "Новенький",
      "structures": [
        {
          "dateUpdate": 1562159706,
          "encoding": "utf-8",
          "id": 2681,
          "status": 1,
          "structure": [
            {
              "attribute": false,
              "fields": [
                {
                  "attribute": true,
                  "data": [
                    {
                      "index": 0,
                      "template": " "
                    }
                  ],
                  "id": "Empty1",
                  "optional": true,
                  "readonly": false,
                  "title": " ",
                  "type": {
                    "string": {
                      "maxLength": 10,
                      "minLength": 1
                    }
                  }
                },
                {
                  "attribute": true,
                  "data": [
                    {
                      "index": 0,
                      "template": " "
                    }
                  ],
                  "id": "Empty1",
                  "optional": true,
                  "readonly": false,
                  "title": " ",
                  "type": {
                    "string": {
                      "maxLength": 10,
                      "minLength": 1
                    }
                  }
                },
                {
                  "attribute": true,
                  "data": [
                    {
                      "default": "Генеральному директору ТОВ 'АТС' Клюсі О.М.",
                      "index": 0
                    }
                  ],
                  "id": "Кому",
                  "optional": true,
                  "readonly": true,
                  "title": "Кому:",
                  "type": {
                    "string": {
                      "maxLength": 10,
                      "minLength": 1
                    }
                  }
                },
                {
                  "attribute": true,
                  "data": [
                    {
                      "index": 0,
                      "template": "Прошу надати мені відпустку без збереження заробітної плати "
                    }
                  ],
                  "id": "ОснТекст",
                  "optional": true,
                  "readonly": false,
                  "title": "  ",
                  "type": {
                    "string": {
                      "maxLength": 100,
                      "minLength": 1
                    }
                  },
                  "viewType": "text-area"
                },
                {
                  "attribute": true,
                  "data": [
                    {
                      "index": 0,
                      "template": "Юзер:user:#user.fio#"
                    }
                  ],
                  "id": "User",
                  "optional": true,
                  "readonly": false,
                  "title": "Юзер",
                  "type": {
                    "string": {
                      "maxLength": 500,
                      "minLength": 1
                    }
                  }
                }
              ],
              "id": "Заява",
              "optional": true,
              "readonly": false,
              "title": "Заява на відпустку без збереження заробітної плати",
              "type": {
                "object": {}
              }
            }
          ],
          "version": 10
        }
      ],
      "type": 2,
      "useType": 2
    },
    "documentUuid": "abfa6629-4feb-48ae-943b-9e643e1f2700",
    "extraFields": [],
    "isReadFromApi": 0,
    "number": "1562240257",
    "ownerSignsCount": 2,
    "packageId": 0,
    "senderCompanyId": 4,
    "status": 1,
    "structure": [
      {
        "id": "Заява",
        "index": 0,
        "structure": [
          [
            {
              "id": "Empty1",
              "index": 0,
              "value": " "
            },
            {
              "id": "ОснТекст",
              "index": 0,
              "value": "Прошу надати мені відпустку без збереження заробітної плати "
            },
            {
              "id": "Підрозділ",
              "index": 0,
              "value": "пвапавпв"
            },
            {
              "id": "Вособsaі",
              "index": 0,
              "value": "вы"
            },
            {
              "id": "User",
              "index": 0,
              "value": "Юзер:user:Ляшенко евгений"
            }
          ]
        ]
      }
    ],
    "versionStructure": 10
  }


