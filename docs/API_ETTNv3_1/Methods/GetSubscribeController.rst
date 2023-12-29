#########################################################################################################
**Отримання даних про підписки на події / Отримання даних про підпис особи**
#########################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: GetSubscribeController.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповіді** передаються дані підписок (`масив об'єктів mintransSubscription <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/EveryBody/mintransSubscriptions.html>`__) або дані про підпис особи, що оформила підписку (`об'єкт ExEndUserSignInfo <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/EveryBody/ExEndUserSignInfo.html>`__), якщо в методі передається параметр **sign_info**.

