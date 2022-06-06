####################################################################
**Дані групи учасників (об'єкт ParticipantGroup)**
####################################################################

**JSON:**

.. code:: json

  {
    "companyId": 3600,
    "groupName": "Fatality",
    "comment": "hello",
    "companies": [
      {
        "id": 5
      },
      {
        "id": 9
      }
    ],
    "cpvs": [
      {
        "id": 9513
      },
      {
        "id": 9519
      },
      {
        "id": 9525
      }
    ]
  }

Таблиця 1 - Опис параметрів об'єкта **ParticipantGroup**

.. csv-table:: 
  :file: for_csv/ParticipantGroup.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Category**

.. csv-table:: 
  :file: for_csv/Category.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **Comment**

.. csv-table:: 
  :file: for_csv/Comment.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0
  
-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.