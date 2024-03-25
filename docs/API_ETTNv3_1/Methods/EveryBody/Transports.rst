############################################################################################################################
**Дані знайдених транспортних засобів (масив об'єктів Transport)**
############################################################################################################################

**JSON:**

.. code:: json

  [
      {
          "id": 93,
          "number": "AA0000AA",
          "brand": "Тестовий траспорт",
          "model": "модель модель",
          "type": "Тип",
          "color": "брудний",
          "isTrailer": 1
      },
      {
          "id": 104,
          "number": "AA0001AA",
          "brand": "Trailer",
          "model": "Модель",
          "type": "Trailer",
          "color": "lime",
          "isTrailer": 2
      },
      {
          "id": 130,
          "number": "AA0020XH",
          "brand": "1",
          "model": "SCHMITZ",
          "type": "рефрижератор",
          "isTrailer": 0
      },
      {
          "id": 150,
          "number": "AA0000",
          "brand": "vv",
          "model": "78",
          "type": "вантажний",
          "isTrailer": 2
      },
      {
          "id": 265,
          "number": "AA0099BB",
          "brand": "hyundai",
          "type": "вантажний",
          "isTrailer": 0
      },
      {
          "id": 266,
          "number": "AA0098AП",
          "brand": "Renault",
          "type": "грузовий",
          "isTrailer": 0
      },
      {
          "id": 267,
          "number": "AA0002BA",
          "brand": "Hyundai",
          "type": "тестовий",
          "isTrailer": 0
      },
      {
          "id": 273,
          "number": "AA0011AA",
          "brand": "тест",
          "model": "тест",
          "type": "тягач",
          "color": "Синій, Текст,ТекстекстТекстТекстТекст",
          "isTrailer": 0
      },
      {
          "id": 274,
          "number": "AA0011BB",
          "brand": "тест",
          "model": "тест",
          "type": "тягач",
          "isTrailer": 0
      },
      {
          "id": 431,
          "number": "AA0003AA",
          "brand": "Ferrari",
          "model": "F40",
          "type": "cabriolet",
          "color": "yellow",
          "isTrailer": 0
      },
      {
          "id": 435,
          "number": "AA0000BB",
          "brand": "Марка",
          "model": "Модель",
          "type": "Тип",
          "isTrailer": 0
      },
      {
          "id": 457,
          "number": "AA0000123AA",
          "brand": "Mazda",
          "model": "R8",
          "type": "Fast",
          "color": "Black",
          "isTrailer": 0
      },
      {
          "id": 495,
          "number": "AA00000AA",
          "brand": "Ferrari",
          "model": "F40",
          "type": "cabriolet",
          "color": "yellow",
          "isTrailer": 0
      },
      {
          "id": 501,
          "number": "AA001100AA",
          "brand": "test1",
          "model": "test2",
          "type": "test3",
          "isTrailer": 0
      },
      {
          "id": 575,
          "number": "AA000001AB",
          "brand": "testMarka",
          "model": "testModel",
          "type": "testTypeCar",
          "color": "testColorCar",
          "isTrailer": 0
      },
      {
          "id": 577,
          "number": "AA000002BB",
          "brand": "testMarka2",
          "model": "testModel2",
          "type": "testType2",
          "isTrailer": 1
      },
      {
          "id": 579,
          "number": "AA000003BB",
          "brand": "testMarka3",
          "model": "testModel3",
          "type": "testType3",
          "isTrailer": 1
      },
      {
          "id": 613,
          "number": "AA00001AA",
          "brand": "AUTO",
          "model": "AUTO",
          "type": "AUTO",
          "color": "AUTO",
          "isTrailer": 0
      }
  ]

Таблиця 1 - Опис параметрів об'єкта **Transport**

.. csv-table:: 
  :file: for_csv/Transport.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
