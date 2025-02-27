#######################################################################################################
**Пошук подій**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: PostDocEvents.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповіді** передаються `результати пошуку подій за документами <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/EventsStorageQueryResult.html>`__ (об'єкт **EventsStorageQueryResult**).

.. important::
   В результатах пошуку буде виведено не більше 100 останніх подій, що будуть згруповані за документами!