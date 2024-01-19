############################################################################################################################
**Дані про сертифікати (масив об'єктів XCertificate)**
############################################################################################################################

**JSON:**

.. code:: json

    [
        {
            "id": 185,
            "uuid": "87612047-82ba-43d2-a03e-5c7cc7f904f9",
            "number": "UA1.12345678-20",
            "createDate": 1689800400,
            "updateDate": 0,
            "issueDate": 0,
            "type": {
                "id": 2,
                "type": 0
            },
            "view": {
                "id": 2
            },
            "access": [],
            "startDate": 1693515600,
            "endDate": 0,
            "isSigned": false,
            "accessType": {
                "code": 0,
                "description": "Неопубликований"
            },
            "creator": 0,
            "info": "Комментар 2",
            "bodies": {
                "1": []
            },
            "characteristics": {
                "Issuer Article": "2341111",
                "VMD Number": "123123123"
            },
            "parents": [],
            "products": [
                {
                    "id": 0,
                    "certificateId": 0,
                    "name": "Молоко 15%",
                    "barcode": "4820000000000",
                    "article": "321",
                    "buyerCode": "123",
                    "uktved": 0
                },
                {
                    "id": 0,
                    "certificateId": 0,
                    "name": "Молоко 10%",
                    "barcode": "4820000000001",
                    "article": "521",
                    "buyerCode": "125",
                    "uktved": 0
                },
                {
                    "id": 0,
                    "certificateId": 0,
                    "name": "Молоко 5%",
                    "barcode": "4820000000002",
                    "article": "321221",
                    "buyerCode": "122123",
                    "uktved": 0
                }
            ],
            "productsQty": 0,
            "autoArchive": false
        }
    ]

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

Таблиця 5 - Опис параметрів об'єкта **AccessType**

.. csv-table:: 
  :file: for_csv/AccessType.csv
  :widths:  20, 20
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **Level**

.. csv-table:: 
  :file: for_csv/Level.csv
  :widths:  20, 20
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **XCertificateProduct**

.. csv-table:: 
  :file: for_csv/XCertificateProduct.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
