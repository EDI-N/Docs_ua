######################################################################
**Створення та відправка документа (без створення чернетки)**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: CreateAndSend.csv
  :widths:  10, 41
  :stub-columns: 0

Приклад тіла документа:

.. code:: json

	{"receivers":["8379a10b-6ffc-40f8-95aa-7eb8571d4fd7", "testetete@mail.com"],"title":"test-doc", "text":"test-doc test-doc"}

**RESPONSE**

Код сервера 200 (ok).




