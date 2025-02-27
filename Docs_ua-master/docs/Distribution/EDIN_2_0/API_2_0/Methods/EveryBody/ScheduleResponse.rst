#############################################################
**Дані графіка замовлень (Response)**
#############################################################

**JSON:**

.. code:: json

  {
      "id": 17,
      "producerId": 13200757,
      "name": "Test5",
      "dateCreated": 0,
      "dateChanged": 0,
      "dateStart": 1761516000,
      "dateEnd": 1768860000,
      "timeFrom": "09:00:00",
      "timeTo": "21:00:00",
      "block": false,
      "type": 1,
      "recurrenceRule":
      {
          "frequency": "WEEKLY",
          "interval": 1,
          "count": 50,
          "dateUntil": 0,
          "byDay":
          [
              1,
              2,
              4,
              6
          ]
      },
      "distributors":
      [
          13200791,
          13202863
      ],
      "dateClosest": 0
  }

Таблиця 1 - Опис параметрів об'єкта Schedule

.. csv-table:: 
  :file: for_csv/Schedule.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта RecurrenceRule

.. csv-table:: 
  :file: for_csv/RecurrenceRule.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.








