#############################################################
**Додавання структури в структурований документ**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
|                        **Метод запиту**                        |                                               **HTTP POST**                                                |
+================================================================+============================================================================================================+
| **Content-Type**                                               | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                 |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                                 | **https://doc.edi-n.com/bdoc/document_type/structure**                                                     |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)**   | В рядку заголовка (Header) "Set-Cookie" обов'язково передається **SID** - токен, отриманий при авторизації |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+
| **Обов'язкові параметри, що передаються в тілі запиту (json)** | **encoding, id, structure (будь-яка кількість регламентованих полей)**                                     |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
*******************************************************************

``REQUEST`` / ``RESPONSE``

Опис json-параметрів **запиту** та **відповіді** метода API (об'єкт **DocumentStructure**)

Таблиця 1 - Опис параметрів об'єкта **DocumentStructure**

.. csv-table:: 
  :file: for_csv/DocumentStructure.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **DocStructField**

.. csv-table:: 
  :file: for_csv/DocStructField.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **DocStructData**

.. csv-table:: 
  :file: for_csv/DocStructData.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **DocStructType**

.. csv-table:: 
  :file: for_csv/DocStructType.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

--------------

**Приклади**
*****************

Приклад тіла **запиту** (json):

.. code:: ruby

  {
    "encoding": "utf-8",
    "id": 2393,
    "status": 1,
    "structure": [
      {
        "id": "Акт",
        "title": "АКТ приймання-передачі наданих послуг",
        "optional": true,
        "readonly": false,
        "attribute": false,
        "type": {
          "object": {}
        },
        "fields": [
          {
            "id": "Назва",
            "title": "Найменування робіт, послуг",
            "optional": false,
            "readonly": false,
            "attribute": true,
            "data": [
              {
                "index": 3
              }
            ],
            "type": {
              "enum": []
            }
          },
          {
            "id": "Послуги",
            "title": "Виконавцем були виконані наступні роботи (надані такі послуги):",
            "optional": false,
            "readonly": false,
            "attribute": true,
            "type": {
              "array": {
                "minLength": 1,
                "maxLength": 10
              }
            },
            "fields": [
              {
                "id": "Назва",
                "title": "Найменування робіт, послуг",
                "optional": false,
                "readonly": false,
                "attribute": true,
                "function": "$updateDictLink('Акт.Послуги[@index].Код', 'code')$",
                "data": [
                  {
                    "index": -1
                  }
                ],
                "type": {
                  "enum": []
                }
              },
              {
                "id": "Код",
                "title": "Код",
                "optional": true,
                "readonly": true,
                "attribute": true,
                "type": {
                  "string": {
                    "length": 50,
                    "minLength": 1,
                    "maxLength": 50
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }

--------------

Приклад тіла **відповіді** (json): 

.. code:: ruby

  {
    "id": 2393,
    "structure": [
      {
        "id": "Акт",
        "title": "АКТ приймання-передачі наданих послуг",
        "optional": true,
        "readonly": false,
        "attribute": false,
        "type": {
          "object": {}
        },
        "fields": [
          {
            "id": "Назва",
            "title": "Найменування робіт, послуг",
            "optional": false,
            "readonly": false,
            "attribute": true,
            "data": [
              {
                "index": 3
              }
            ],
            "type": {
              "enum": []
            }
          },
          {
            "id": "Послуги",
            "title": "Виконавцем були виконані наступні роботи (надані такі послуги):",
            "optional": false,
            "readonly": false,
            "attribute": true,
            "type": {
              "array": {
                "minLength": 1,
                "maxLength": 10
              }
            },
            "fields": [
              {
                "id": "Назва",
                "title": "Найменування робіт, послуг",
                "optional": false,
                "readonly": false,
                "attribute": true,
                "function": "$updateDictLink('Акт.Послуги[@index].Код', 'code')$",
                "data": [
                  {
                    "index": -1
                  }
                ],
                "type": {
                  "enum": []
                }
              },
              {
                "id": "Код",
                "title": "Код",
                "optional": true,
                "readonly": true,
                "attribute": true,
                "type": {
                  "string": {
                    "length": 50,
                    "minLength": 1,
                    "maxLength": 50
                  }
                }
              }
            ]
          }
        ]
      }
    ],
    "version": 2,
    "status": 1,
    "dateUpdate": 1557935263,
    "encoding": "utf-8"
  }


