#################################################################################################
**Створити групу Покупців (Дистрибʼюторів) (Продавець (Виробник))**
#################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: PostAccessGroup.csv
  :widths:  10, 41
  :stub-columns: 0

Приклад запиту:

.. code:: json

   {"name":"Красавчики","producerId":13200791}

**RESPONSE**

В тілі **відповіді** передаються дані створеної групи Покупців (Дистрибʼюторів) (об'єкт `XDistribexAccessGroup <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/XDistribexAccessGroup.html>`__).

