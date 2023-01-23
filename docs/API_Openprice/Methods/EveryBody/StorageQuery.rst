#############################################################
**Дані для фільтрації (об’єкт StorageQuery)**
#############################################################

.. свій унікальний стореджквері

**JSON:**

Отримати всі Надіслані документи ("statuses": 2,3)
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

  {
    "archive": false,
    "statuses": [
      2,
      3
    ],
    "type": [
      {
        "type": 0,
        "title": "all",
        "description": "all"
      },
      {
        "type": 0,
        "title": "all",
        "description": "all"
      }
    ],
    "exchangeStatus": [],
    "extraParams": [],
    "tags": [],
    "loadComments": true,
    "loadTags": true,
    "loadStatuses": true,
    "direction": {
      "type": "EQ",
      "sender": [
        "9864066822430"
      ],
      "receiver": []
    },
    "family": 12
  }

Отримати всі Вхідні документи ("statuses": 4,5) від вказаного відправника/-ів (sender:gln) 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

  {
    "archive": false,
    "statuses": [
      4,
      5
    ],
    "type": [
      {
        "type": 0,
        "title": "all",
        "description": "all"
      },
      {
        "type": 0,
        "title": "all",
        "description": "all"
      }
    ],
    "exchangeStatus": [],
    "extraParams": [],
    "tags": [],
    "loadComments": true,
    "loadTags": true,
    "loadStatuses": true,
    "direction": {
      "type": "EQ",
      "sender": [
        "9864067620417"
      ],
      "receiver": [
        "9864066822430"
      ]
    },
    "family": 12
  }

Отримати всі Архівні документи. Оскільки архівними стають Вхідні та Надіслані документи, то вказуються всі статуси, отримувач/відправник=власний GLN 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code:: json

  {
    "archive": true,
    "statuses": [
      2,
      3,
      4,
      5,
      6
    ],
    "type": [
      {
        "type": 0,
        "title": "all",
        "description": "all"
      },
      {
        "type": 0,
        "title": "all",
        "description": "all"
      }
    ],
    "exchangeStatus": [],
    "extraParams": [],
    "tags": [],
    "loadComments": true,
    "loadTags": true,
    "loadStatuses": true,
    "direction": {
      "type": "OR",
      "sender": [
        "9864066822430"
      ],
      "receiver": [
        "9864066822430"
      ]
    },
    "family": 12
  }

.. _Таблиця_2:

Таблиця 2 - Опис параметрів об'єкта **StorageQuery**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/StorageQuery.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **ExtraQueryParameters**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/ExtraQueryParameters.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Direction**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/Direction.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **Limitation**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/Limitation.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **DateTimeRange**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/DateTimeRange.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **XDocType**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/XDocType.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _fieldName:

Таблиця 8 - Опис **fieldName** параметрів (об'єкт ExtraQueryParameters_)

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/extra_fields.csv
  :widths:  1, 2, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. _опис_параметрів:

Таблиця 9 - Опис **DocType** параметрів (об'єкт XDocType_)

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/xdoctype_p.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

.. _опис_підтипів:

Таблиця 10 - Опис підтипів COMDOC

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/sub_doc_type_id.csv
  :widths:  1, 7, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.