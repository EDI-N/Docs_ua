#########################################################################################################
**Масово завантажити сертифікати**
#########################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. note::
   Максимальний розмір файлу для завантаження - 7,5 МБ

.. csv-table:: 
  :file: Certificates.csv
  :widths:  10, 41
  :stub-columns: 0

:download:`Приклад передаваємого zip<Certificates.zip>`

**RESPONSE**

В тілі **відповіді** передаються `дані завантажених сертифікатів <https://wiki.edin.ua/uk/latest/Certificate/EDIN_2_0/APIv2/Methods/EveryBody/XCertificateList.html>`__ (масив об'єктів XCertificate).

.. note::
  Якщо в сертифікатах, що передаються буде допущена помилка, то Ви отримаєте відповідь про помилку в файлі, наприклад:

  .. code:: json

        {
            "certificatesErrors":
            {
                "2":
                [
                    {
                        "errorType": 1,
                        "columnName": "Тип сертификату"
                    },
                    {
                        "errorType": 2,
                        "columnName": "Тип сертификату"
                    },
                    {
                        "errorType": 1,
                        "columnName": "Номер сертифікату"
                    },
                    {
                        "errorType": 1,
                        "columnName": "Дата видачі"
                    },
                    {
                        "errorType": 1,
                        "columnName": "Вид сертифікату"
                    },
                    {
                        "errorType": 2,
                        "columnName": "Вид сертифікату"
                    },
                    {
                        "errorType": 1,
                        "columnName": "Дата закінчення дії",
                        "cause": "Вид сертифікату = 1"
                    },
                    {
                        "errorType": 1,
                        "columnName": "Номер партії",
                        "cause": "Вид сертифікату = 2"
                    },
                    {
                        "errorType": 1,
                        "columnName": "Дата початку дії"
                    },
                    {
                        "errorType": 1,
                        "columnName": "Назва файлу"
                    },
                    {
                        "errorType": 2,
                        "columnName": "Назва файлу",
                        "allowedValues": "[pdf, jpg, jpeg, png, tiff]",
                        "fileName": "filename.txt"
                    },
                    {
                        "errorType": 3,
                        "columnName": "Назва файлу",
                        "fileName": "filename.pdf"
                    },
                    {
                        "errorType": 4,
                        "columnName": "Назва файлу",
                        "fileName": "filename.pdf"
                    }
                ]
            },
            "productsErrors":
            {
                "2":
                [
                    {
                        "errorType": 1,
                        "columnName": "Номер сертифікату"
                    }
                ]
            },
            "createdCertificates":
            [],
            "existedCertificates":
            [],
            "certsCount": 0,
            "productsCount": 0
        }

Таблиця 1 - Опис параметрів помилки

.. csv-table:: 
  :file: certificatesErrors.csv
  :widths:  10, 41
  :stub-columns: 0







