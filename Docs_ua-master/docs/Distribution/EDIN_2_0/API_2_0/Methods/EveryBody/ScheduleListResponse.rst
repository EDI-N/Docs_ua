#############################################################
**Список графіків замовлень (Response)**
#############################################################

**JSON:**

.. code:: json

  [
      {
          "id": 9,
          "producerId": 13200757,
          "name": "Test3",
          "dateCreated": 1700659795,
          "dateChanged": 1700659795,
          "dateStart": 1701381600,
          "dateEnd": 1702159200,
          "timeFrom": "09:00:00",
          "timeTo": "21:00:00",
          "block": false,
          "type": 2,
          "recurrenceRule":
          {
              "frequency": "DAILY",
              "interval": 1,
              "count": 10,
              "dateUntil": 0,
              "byDay":
              [
                  1,
                  2,
                  4,
                  6
              ]
          },
          "dateClosest": 0
      },
      {
          "id": 1,
          "producerId": 13200757,
          "name": "Test2",
          "dateCreated": 1700656825,
          "dateChanged": 1700658476,
          "dateStart": 1704060000,
          "dateEnd": 0,
          "timeFrom": "09:00:00",
          "timeTo": "21:00:00",
          "block": false,
          "type": 2,
          "recurrenceRule":
          {
              "frequency": "WEEKLY",
              "interval": 1,
              "count": 0,
              "dateUntil": 0,
              "byDay":
              [
                  1,
                  2,
                  4,
                  6
              ]
          },
          "dateClosest": 0
      }
  ]

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








