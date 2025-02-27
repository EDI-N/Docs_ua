############################################################################################################################
**Дані про сертифікати**
############################################################################################################################

**JSON:**

.. code:: json

  {
      "certificate": [
      {
          "id": 167,
          "uuid": "55ef04b2-281e-4fca-bb67-d48fe88ae74f",
          "number": "Номер сертифіката1",
          "createDate": 1705494187,
          "updateDate": 1705499386,
          "issueDate": 1704060000,
          "type":
          {
              "id": 10,
              "name": "протокол лабораторних досліджень",
              "type": 0
          },
          "view":
          {
              "id": 1,
              "description": "Період дії"
          },
          "access":
          [
              13203393
          ],
          "startDate": 1705442400,
          "endDate": 1705528800,
          "isSigned": false,
          "accessType":
          {
              "code": 2,
              "description": "Закритий (приватний)"
          },
          "creator": 13205923,
          "info": "Коментар",
          "level":
          {
              "code": "A",
              "description": "Непідписаний сертифікат з прив'язкою до товарів"
          },
          "bodies":
          {
              "1":
              []
          },
          "characteristics":
          {
              "Issuer Article": "Артикул виробника",
              "VMD Number": "Номер ВМД",
              "Batch Number": "Номер партії!"
          },
          "parents":
          [],
          "products":
          [
              {
                  "id": 203,
                  "certificateId": 167,
                  "name": "Шоколадка",
                  "barcode": "1212121212",
                  "article": "Артикул продавця ",
                  "buyerCode": "Артикул покупця",
                  "uktved": 123456,
                  "dkpp": "Код ДКПП"
              }
          ],
          "productsQty": 0,
          "autoArchive": true
      }
      ],
      "glns":
      {
          "13203393":
          {
              "id": 13203393,
              "gln": "9864232607052",
              "companyId": 37663,
              "retailerId": 0,
              "isUzdAts": 0,
              "isFinCrypt": 0,
              "countryId": 2,
              "isERNN": 3,
              "name": "TW_Вантажовідправник",
              "companyType": "fiz",
              "companyInn": "111111111111",
              "companyKpp": "11111111",
              "zip": "121212",
              "katottg": "UA05020030010063857",
              "city": "м. Вінниця, Вінницький р-н",
              "street": "Тестова 2",
              "IBAN": "UA111111111111111111111111111",
              "district": "Вінницька",
              "dpiCReg": 0,
              "dpiCRaj": 0,
              "isListex": false,
              "isDeclarDateNumRequired": true,
              "distribexUser": 0,
              "isWithoutTax": true,
              "taxSource": 0,
              "isDriver": false,
              "isSignConfirm": 0,
              "isSpecification": 0,
              "isCompany": 1,
              "isTemporary": 0,
              "parentId": 0,
              "constructorGroupID": 0
          }
      }
  }

Таблиця 1 - Опис параметрів

.. csv-table:: 
  :file: for_csv/SearchCertificatesResponse.csv
  :widths:  10, 20, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **XCertificate**

.. csv-table:: 
  :file: for_csv/XCertificate.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **XCertificateType**

.. csv-table:: 
  :file: for_csv/XCertificateType.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **XCertificateView**

.. csv-table:: 
  :file: for_csv/XCertificateView.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис **characteristics**

.. csv-table:: 
  :file: for_csv/characteristics.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **Identificator**

.. csv-table:: 
  :file: /integration_2_0/APIv2/Methods/EveryBody/for_csv/Identificator.csv
  :widths:  10, 5, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **AccessType**

.. csv-table:: 
  :file: for_csv/AccessType.csv
  :widths:  20, 20
  :header-rows: 1
  :stub-columns: 0

Таблиця 8 - Опис параметрів об'єкта **Level**

.. csv-table:: 
  :file: for_csv/Level.csv
  :widths:  20, 20
  :header-rows: 1
  :stub-columns: 0

Таблиця 9 - Опис параметрів об'єкта **XCertificateProduct**

.. csv-table:: 
  :file: for_csv/XCertificateProduct.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
