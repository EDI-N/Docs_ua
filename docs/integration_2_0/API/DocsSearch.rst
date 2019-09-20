######################################################################
**Пошук документів (з фільтрацією), вибір списку документів**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/ru/latest/integration_2_0/API/Authorization.html>`__ .

За допомогою методу **api/eds/docs/search** можливо швидко зробити пошук по заданим критеріям, наприклад, отримати список документів з певним статусом, або за проміжок часу.

+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                        **HTTP POST**                                                        |
+==============================================================+=============================================================================================================================+
| **Content-Type**                                             | application/json (тіло HTTP запиту / відповіді в json форматі)                                                              |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | https://edo-v2.edi-n.com/api/eds/docs/search?gln=9864065702429                                                              |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | У рядку заголовка (Header) "Cookie" обов'язково передається **SID** - токен отриманий при авторизації                       |
|                                                              |                                                                                                                             |
|                                                              | **Обов'язкові url-параметри:**                                                                                              |
|                                                              |                                                                                                                             |
|                                                              | **gln** - рядок (13); номер GLN організації, яка пов'язана з авторизованим користувачем платформи EDIN 2.0 на рівні акаунта |
|                                                              |                                                                                                                             |
|                                                              | {"…"} - тіло http запиту - json з критеріями пошуку (Таблиця_2_)                                                            |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+

**Увага:** У запиті в тілі json присутні обов'язкові (повинні передаватися) і опціональні параметри (колонка Тип_).

.. hint:: Також можливо виконати запит у вигляді curl-рядка:
          
          curl -X POST 'https://edo-v2.edi-n.com/api/eds/docs/search?gln=9864065702429' -d {json с критериями поиска(Таблиця_2_)} -b 'SID=458a0d38-5b56-4b8e-8998-009a1edd31eb'

Специфікація для розшифровки ключів curl запиту: https://curl.haxx.se/docs/manpage.html

--------------

**JSON-параметри в тілі HTTP запиту/відповіді**

--------------

**REQUEST**

--------------

.. _Таблиця_2:

Таблиця 2 - Опис json-параметрів (фільтр) **запиту** методу API

.. csv-table:: 
  :file: for_csv/StorageQuery.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **ExtraQueryParameters**

.. csv-table:: 
  :file: for_csv/ExtraQueryParameters.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Direction**

.. csv-table:: 
  :file: for_csv/Direction.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Limitation**

.. csv-table:: 
  :file: for_csv/Limitation.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **DateTimeRange**

.. csv-table:: 
  :file: for_csv/DateTimeRange.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **XDocType**

.. csv-table:: 
  :file: for_csv/XDocType.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _fieldName:

Таблиця 8 - Опис **fieldName** параметрів (объект ExtraQueryParameters_)

.. csv-table:: 
  :file: for_csv/extra_fields.csv
  :widths:  1, 2, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _описание_параметров:

Таблиця 9 - Опис **DocType** параметрів (объект XDocType_)

.. csv-table:: 
  :file: for_csv/xdoctype_p.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

.. _Тип:

***Тип*** поля: **M** - mandatory (обов'язкове до заповнення), **O** - optional (опціональне)

--------------

**RESPONSE**

--------------

Таблиця 10 - Опис json-параметрів, які можуть передаватися в **відповіді** на метод API

.. csv-table:: 
  :file: for_csv/XDoc+.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 11 - Опис параметрів об'єкта **XDocStatus**

.. csv-table:: 
  :file: for_csv/XDocStatus.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 12 - Опис параметрів об'єкта **XDoc**

.. csv-table:: 
  :file: for_csv/XDoc.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 13 - Опис параметрів об'єкта **XTag**

.. csv-table:: 
  :file: for_csv/XTag.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 14 - Опис параметрів об'єкта **XStatus**

.. csv-table:: 
  :file: for_csv/XStatus.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 15 - Опис параметрів об'єкта **XDocSignInfo**

.. csv-table:: 
  :file: for_csv/XDocSignInfo.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 16 - Опис параметрів об'єкта **XDocCommentsList**

.. csv-table:: 
  :file: for_csv/XDocCommentsList.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 17 - Опис параметрів об'єкта **XDocComment**

.. csv-table:: 
  :file: for_csv/XDocComment.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 18 - Опис параметрів об'єкта **XDocAttachment**

.. csv-table:: 
  :file: for_csv/XDocAttachment.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 19 - Опис параметрів об'єкта **XDocBodyForms**

.. csv-table:: 
  :file: for_csv/XDocBodyForms.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 20 - Опис параметрів об'єкта **XDocBody**

.. csv-table:: 
  :file: for_csv/XDocBody.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 21 - Опис параметрів об'єкта **XDocBodyType**

.. csv-table:: 
  :file: for_csv/XDocBodyType.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

.. _детальніше:

Таблиця 22 - Опис **DocStatus** параметрів (об'єкт XDocStatus_)

.. csv-table:: 
  :file: for_csv/xdocstatus_p.csv
  :widths:  1, 60
  :header-rows: 1
  :stub-columns: 0


--------------

**Приклади (json)**

--------------

Отримати всі вхідні (отримані) документи на певний GLN без чернеток (масив statuses не містить "1")
=======================================================================================================================

.. code:: ruby

    {
        "direction": {
            "sender": [],
            "receiver": [
                "9864232304302"
            ],
            "type": "IN"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "type": [
            {
                "type": "0"
            }
        ]
    }

Отримати всі вхідні (відправлені) документи на певний GLN без чернеток (масив statuses не містить "1")
=============================================================================================================

.. code:: ruby

    {
        "direction": {
            "sender": [
                "9864232304302"
            ],
            "receiver": [],
            "type": "IN"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "type": [
            {
                "type": "0"
            }
        ]
    }

Отримати всі вхідні (отримані) документи на певний GLN без чернеток (масив statuses не містить "1"), у яких номер містить підрядок "1001"
===================================================================================================================================================================

.. code:: ruby

    {
        "direction": {
            "sender": [],
            "receiver": [
                "9864232304302"
            ],
            "type": "IN"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "number": "1001",
        "type": [
            {
                "type": "0"
            }
        ]
    }

Отримати всі вихідні (відправлені) документи по GLN без чернеток (масив statuses не містить "1"), які створені в травні 2019 (startTimestamp і finishTimestamp дати в форматі UNIX-timestamp)
=========================================================================================================================================================================================================

.. code:: ruby

    {
        "direction": {
            "sender": [
                "9864232304302"
            ],
            "receiver": [],
            "type": "IN"
        },
        "exchangeStatus": [],
        "family": "1",
        "statuses": [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "type": [
            {
                "type": "0"
            }
        ],
        "docDate": {
            "startTimestamp": "1556668800",
            "finishTimestamp": "1559347199"
        }
    }

--------------

**Приклад тіла відповіді (json):**

.. code:: ruby

    {
        "items": [
            {
                "body": {
                    "forms": {}
                },
                "attachments": [],
                "comments": [],
                "doc_id": 1017,
                "doc_uuid": "e18a05d5-983b-4ebc-95f3-c35eccc7d611",
                "uuidSender": "4820128010004",
                "uuidReceiver": "9864065702429",
                "docNumber": "8663c3f48bea4f96a281238e847b1639",
                "dateCreated": 1549961913,
                "dateChanged": 1549961913,
                "dateRead": 0,
                "docDate": 1547503200,
                "chain_id": 1006,
                "chain_uuid": "60e487d3-871f-4b3a-9254-1d3f0e7a032f",
                "family": 1,
                "hash": "30745386780343D0C2F4C65C7F06D60F",
                "type": {
                    "type": 1,
                    "title": "invoice",
                    "description": "Счет"
                },
                "status": {
                    "status": 4,
                    "title": "inbox"
                },
                "exchange_status": "000000000000000000000000",
                "is_archive": false,
                "extraFields": {
                    "order_date": "1551477600",
                    "delivery_date": "1547503200",
                    "ftpex_file_name": "highload_invoice_test.xml",
                    "sender": "4820128010004",
                    "buyer_uuid": "4820128010004",
                    "doc_num": "8663c3f48bea4f96a281238e847b1639",
                    "order_number": "747401",
                    "doc_date": "1547503200",
                    "recipient": "9864065702429",
                    "ftpex_file_date": "1549961913",
                    "supplier_uuid": "9864065702429",
                    "delivery_place_uuid": "4820128019007"
                },
                "tags": [],
                "statuses": [],
                "multiExtraFields": {}
            }
        ],
        "totalCount": 0
    } 




