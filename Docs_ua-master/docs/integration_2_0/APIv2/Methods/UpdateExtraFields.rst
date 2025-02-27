.. deprecated (not for integrated users - web only) Ok, this is an exception for CONDRA (temporary) - delete when another api will be ready

######################################################################
**Заповнення індексів (додавання / оновлення полей екстрапараметрів)**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

.. important::
  Заповнення індексів необхідно для коректного відображення та пошуку документів. По факту це повтор "Створення CONDRA", але з іншими полями. Якщо на попередньому кроці отримали помилку, то необхідно переривати подальше виконання запитів.

.. csv-table:: 
  :file: UpdateExtraFields.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

Код сервера 200 (ok).

