############################################################################################################################
**Дані сертифіката (об'єкт XCertificate)**
############################################################################################################################

**JSON:**

.. code:: json

  {
      "creator": 13205923,
      "type":
      {
          "id": "10"
      },
      "view":
      {
          "id": "2"
      },
      "accessType":
      {
          "code": 0
      },
      "characteristics":
      {
          "Batch Number": "Номер партії*",
          "Issuer Article": "Артикул виробника",
          "VMD Number": "Номер ВМД"
      },
      "products":
      [],
      "number": "Номер сертифіката",
      "issue_dateString": "2024-01-17",
      "endDateString": "2024-01-17",
      "startDateString": "2024-01-17",
      "info": "Коментар",
      "endDate": 1705442400,
      "startDate": 1705442400,
      "issueDate": 1705442400
  }

Таблиця 1 - Опис параметрів об'єкта **XCertificate**

.. csv-table:: 
  :file: for_csv/XCertificate.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **XCertificateType**

.. csv-table:: 
  :file: for_csv/XCertificateType.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **XCertificateView**

.. csv-table:: 
  :file: for_csv/XCertificateView.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис **characteristics**

.. csv-table:: 
  :file: for_csv/characteristics.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
