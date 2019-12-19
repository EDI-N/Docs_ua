#############################################################
**Отримання списку всіх ярликів фільтрів**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

.. important:: 
    Вибір дії (створення або редагування). В разі якщо в тілі запиту (json) присутній **filterId**, то запис з зазначеним **filterId** підлягає редагуванню.

+--------------------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                              **HTTP GET**                                              |
+==============================================================+========================================================================================================+
| **Content-Type**                                             | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                             |
+--------------------------------------------------------------+--------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | **https://doc.edi-n.com/bdoc/filters**                                                                 |
+--------------------------------------------------------------+--------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | В рядку заголовка (Header) "Set-Cookie" обов'язково передається SID - токен, отриманий при авторизації |
+--------------------------------------------------------------+--------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
*******************************************************************

``REQUEST``

В цьому методі json-тіло **запиту** відсутнє (інші дані передавати не потрібно).

``RESPONSE``

Опис json-параметрів **відповіді** метода API (об'єкт **PackageFilter**)

Таблиця 2 - Опис параметрів об'єкта **PackageFilter**

.. csv-table:: 
  :file: for_csv/PackageFilter.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

--------------

**Приклади**
*****************

**При використанні методу json-тіло запиту відсутнє (дані передавати не потрібно)**

--------------

Приклад тіла **відповіді** (json): 

.. code:: ruby

  [
    {
      "filterId": 305,
      "filterName": "альбус",
      "ownerCompaniesIds": [],
      "clientCompaniesIds": [],
      "senderCompaniesIds": [],
      "recipientCompaniesIds": [
        1319
      ],
      "dateFrom": 1575151200,
      "dateTo": 1576533600,
      "packageTypesIds": [],
      "packageChainIds": [
        330
      ],
      "contractIds": [],
      "packageStatuses": [
        2,
        3,
        4,
        6,
        5,
        7,
        8
      ],
      "packageTagIds": [
        409
      ],
      "folder": 1,
      "periodType": 1,
      "dateShift": 0,
      "packageDictionaryValue": {
        "valueId": 1431,
        "dictionaryId": 715,
        "name": "Направление 5",
        "code": "1b35ec2b56d24ae29951010bd2a4f279",
        "isActive": 1,
        "childs": []
      },
      "extraField": {
        "fieldId": 265,
        "companyId": 0,
        "name": "Сумма ",
        "dataType": 0,
        "status": 0,
        "value": "5"
      }
    },
    {
      "filterId": 303,
      "filterName": "альба",
      "ownerCompaniesIds": [],
      "clientCompaniesIds": [],
      "senderCompaniesIds": [],
      "recipientCompaniesIds": [],
      "dateFrom": 1574719200,
      "dateTo": 1576533600,
      "packageTypesIds": [],
      "packageChainIds": [],
      "contractIds": [],
      "packageStatuses": [
        2,
        3,
        4,
        6,
        5,
        7,
        8
      ],
      "packageTagIds": [],
      "folder": 1,
      "periodType": 3,
      "dateShift": 20
    },
    {
      "filterId": 301,
      "filterName": "альбатрос",
      "ownerCompaniesIds": [],
      "clientCompaniesIds": [],
      "senderCompaniesIds": [],
      "recipientCompaniesIds": [],
      "dateFrom": 1575158400,
      "dateTo": 1576540800,
      "packageTypesIds": [],
      "packageChainIds": [],
      "contractIds": [],
      "packageStatuses": [
        2,
        3,
        4,
        6,
        5,
        7,
        8
      ],
      "packageTagIds": [
        295
      ],
      "folder": 1,
      "periodType": 4,
      "dateShift": 0
    }
  ]



