######################################################################
**Отримання конкретного ланцюжка документів**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/ru/latest/integration_2_0/API/Authorization.html>`__ .

За допомогою методу **api/eds/chain** і заданих параметрів можливо отримати (вивантажити) необхідні дані конкретного ланцюжка документів.

+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                                                                  **HTTP GET**                                                                                                   |
+==============================================================+=================================================================================================================================================================================================================+
| **Content-Type**                                             | application/json (тіло HTTP запиту / відповіді в json форматі)                                                                                                                                                  |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | https://edo-v2.edi-n.com/api/eds/chain?gln=9864065702429&chain_uuid=9fe45d32-35c7-44d0-9131-7257fc0c0f39&load_docs=true&load_bodies=true&load_package=true&load_comments=true&load_tags=true&load_statuses=true |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | У рядку заголовка (Header) "Cookie" обов'язково передається **SID** - токен отриманий при авторизації                                                                                                           |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **Обов'язкові url-параметри:**                                                                                                                                                                                  |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **gln** - рядок (13); номер GLN організації, яка пов'язана з авторизованим користувачем платформи EDIN 2.0 на рівні акаунта                                                                                     |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **chain_uuid** - рядок; ID ланцюжка                                                                                                                                                                             |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **Опціональні url-параметри (boolean фільтри):**                                                                                                                                                                |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **load_docs** - чи завантажувати документи, що відносяться до ланцюжка                                                                                                                                          |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **load_bodies** - чи завантажувати тіла документів                                                                                                                                                              |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **load_package** - чи завантажувати пакети                                                                                                                                                                      |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **load_comments** - чи завантажувати коментарі                                                                                                                                                                  |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **load_tags** - чи завантажувати теги до документів                                                                                                                                                             |
|                                                              |                                                                                                                                                                                                                 |
|                                                              | **load_statuses** - чи завантажувати статуси до документів                                                                                                                                                      |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. hint:: Також можливо виконати запит у вигляді curl-рядка:
          
          curl -X GET 'https://edo-v2.edi-n.com/api/eds/chain?gln=9864065702429&chain_uuid=9fe45d32-35c7-44d0-9131-7257fc0c0f39&load_docs=true&load_bodies=true&load_package=true&load_comments=true&load_tags=true&load_statuses=true' -b 'SID=458a0d38-5b56-4b8e-8998-009a1edd31eb'

Специфікація для розшифровки ключів curl запиту: https://curl.haxx.se/docs/manpage.html

--------------

**JSON-параметри в тілі HTTP запиту/відповіді**

--------------

**REQUEST**

--------------

У цьому методі json-тіло **запиту** відсутнє (інші дані передавати не потрібно).

--------------

**RESPONSE**

--------------

Таблиця 4 - Опис json-параметрів, які можуть передаватися у **відповідь** на метод API

.. csv-table:: 
  :file: for_csv/XChain.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 1

Таблиця 5 - Опис параметрів об'єкта **XChainStatus**

.. csv-table:: 
  :file: for_csv/XChainStatus.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 1

Таблиця 6 - Опис параметрів об'єкта **XDocStatus**

.. csv-table:: 
  :file: for_csv/XDocStatus.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **XDoc**

.. csv-table:: 
  :file: for_csv/XDoc.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 8 - Опис параметрів об'єкта **XTag**

.. csv-table:: 
  :file: for_csv/XTag.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 9 - Опис параметрів об'єкта **XStatus**

.. csv-table:: 
  :file: for_csv/XStatus.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 10 - Опис параметрів об'єкта **XDocSignInfo**

.. csv-table:: 
  :file: for_csv/XDocSignInfo.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 11 - Опис параметрів об'єкта **XDocCommentsList**

.. csv-table:: 
  :file: for_csv/XDocCommentsList.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 12 - Опис параметрів об'єкта **XDocComment**

.. csv-table:: 
  :file: for_csv/XDocComment.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 13 - Опис параметрів об'єкта **XDocAttachment**

.. csv-table:: 
  :file: for_csv/XDocAttachment.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 14 - Опис параметрів об'єкта **XDocBodyForms**

.. csv-table:: 
  :file: for_csv/XDocBodyForms.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 15 - Опис параметрів об'єкта **XDocBody**

.. csv-table:: 
  :file: for_csv/XDocBody.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 16 - Опис параметрів об'єкта **XDocBodyType**

.. csv-table:: 
  :file: for_csv/XDocBodyType.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 17 - Опис параметрів об'єкта **XDocType**

.. csv-table:: 
  :file: for_csv/XDocType.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _детальніше:

Таблиця 18 - Опис **DocStatus** параметрів (об'єкт XDocStatus_)

.. csv-table:: 
  :file: for_csv/xdocstatus_p.csv
  :widths:  1, 60
  :header-rows: 1
  :stub-columns: 0

.. _опис_параметрів:

Таблиця 19 - Опис **DocType** параметрів (об'єкт XDocType_)

.. csv-table:: 
  :file: for_csv/xdoctype_p.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0


--------------

**Приклади**

--------------

**При використанні методу json-тіло запиту відсутнє (дані передавати не потрібно)**

**Приклади url-запитів:**

Отримати перелік документів за визначеним ланцюжком без завантаження їхніх тіл, пакетів, коментарів, тегів і статусів
=======================================================================================================================

  https://edo-v2.edi-n.com/api/eds/chain?gln=9864232304302&chain_uuid=0fe60377-51db-4b7a-b7eb-cdf5fa91a46a&load_docs=true&load_bodies=false&load_package=false&load_comments=false&load_tags=false&load_statuses=false

Отримати перелік документів за визначеним ланцюжком з завантаженням тіл і коментарів без завантаження їхніх пакетів, тегів і статусів
====================================================================================================================================

  https://edo-v2.edi-n.com/api/eds/chain?gln=9864232304302&chain_uuid=0fe60377-51db-4b7a-b7eb-cdf5fa91a46a&load_docs=true&load_bodies=true&load_package=false&load_comments=true&load_tags=false&load_statuses=false

Отримати перелік документів за визначеним ланцюжком з завантаженням пакетів, тегів без завантаження їхніх тіл і коментарів і статусів
====================================================================================================================================

  https://edo-v2.edi-n.com/api/eds/chain?gln=9864232304302&chain_uuid=0fe60377-51db-4b7a-b7eb-cdf5fa91a46a&load_docs=true&load_bodies=false&load_package=true&load_comments=false&load_tags=true&load_statuses=false

Отримати перелік документів за визначеним ланцюжком з завантаженням статусів без завантаження їхніх тіл, коментарів, пакетів, тегів
====================================================================================================================================

  https://edo-v2.edi-n.com/api/eds/chain?gln=9864232304302&chain_uuid=0fe60377-51db-4b7a-b7eb-cdf5fa91a46a&load_docs=true&load_bodies=false&load_package=false&load_comments=false&load_tags=false&load_statuses=true

--------------

**Приклад тіла відповіді (json):**

.. code:: ruby

    {
        "id": 1,
        "uuid": "0fe60377-51db-4b7a-b7eb-cdf5fa91a46a",
        "packageID": 0,
        "type": {
            "type": 5,
            "title": "ordrsp",
            "description": "Подтверждение заказа"
        },
        "docsCount": 13,
        "lastInDocID": 1,
        "lastOutDocID": 29,
        "partnerId": 0,
        "important": false,
        "status": {
            "status": 2,
            "title": "sent"
        },
        "visualStatus": 0,
        "archive": false,
        "childs": [
            {
                "body": {
                    "forms": {}
                },
                "attachments": [],
                "comments": [],
                "doc_id": 1,
                "doc_uuid": "bf8dacb1-7b61-4c9c-ab36-ac37620db051",
                "uuidSender": "9864232304319",
                "uuidReceiver": "9864232304302",
                "docNumber": "1001",
                "dateCreated": 1555487166,
                "dateChanged": 1555487166,
                "dateRead": 1555497325,
                "docDate": 1555448400,
                "chain_id": 1,
                "chain_uuid": "0fe60377-51db-4b7a-b7eb-cdf5fa91a46a",
                "family": 1,
                "hash": "A1FF5B519289B936A09E99514277F429",
                "type": {
                    "type": 2,
                    "title": "orders",
                    "description": "Заказ"
                },
                "status": {
                    "status": 5,
                    "title": "read"
                },
                "exchange_status": "000000000000000000000000",
                "is_archive": false,
                "extraFields": {
                    "sub_doc_type_id": "2",
                    "buyer_uuid": "9864232304319",
                    "doc_num": "1001",
                    "order_number": "1001",
                    "ftpex_file_date": "1555487160",
                    "supplier_uuid": "9864232304302",
                    "delivery_place_uuid": "9864232304562",
                    "order_date": "1555448400",
                    "delivery_date": "1556485200",
                    "ftpex_file_name": "order_20190417104600_475593380.xml",
                    "contract_number": "Дог 1",
                    "sender": "9864232304319",
                    "doc_date": "1555448400",
                    "recipient": "9864232304302",
                    "action": "0"
                },
                "tags": [],
                "statuses": [],
                "multiExtraFields": {}
            },

            ...
            
            {
                "body": {
                    "forms": {}
                },
                "attachments": [],
                "comments": [],
                "doc_id": 29,
                "doc_uuid": "cb2f183f-ccbc-467b-9eb2-90b2c1ff8f5c",
                "uuidSender": "9864232304302",
                "uuidReceiver": "9864232304319",
                "docNumber": "АФ00-000001",
                "dateCreated": 1556115021,
                "dateChanged": 1556115022,
                "dateRead": 0,
                "docDate": 1556116482,
                "chain_id": 1,
                "chain_uuid": "0fe60377-51db-4b7a-b7eb-cdf5fa91a46a",
                "family": 1,
                "hash": "0F9CEEC0717992EB76A848F2E106D2D0",
                "type": {
                    "type": 5,
                    "title": "ordrsp",
                    "description": "Подтверждение заказа"
                },
                "status": {
                    "status": 2,
                    "title": "sent"
                },
                "exchange_status": "000000000000000000000000",
                "is_archive": false,
                "extraFields": {
                    "order_date": "1555448400",
                    "delivery_date": "1556485200",
                    "contract_number": "Дог 1",
                    "sender": "9864232304319",
                    "buyer_uuid": "9864232304319",
                    "doc_num": "АФ00-000001",
                    "order_number": "1001",
                    "doc_date": "1556116482",
                    "action": "4",
                    "supplier_uuid": "9864232304302",
                    "delivery_place_uuid": "9864232304562"
                },
                "tags": [],
                "statuses": [],
                "multiExtraFields": {}
            }
        ],
        "hash": "ABB416F3FF3B5027D212D62DD9F99E94"
    }




