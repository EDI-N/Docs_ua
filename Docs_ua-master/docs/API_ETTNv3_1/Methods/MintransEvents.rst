#########################################################################################################
**Отримання списку подій з ЦБД**
#########################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: MintransEvents.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповіді** передаються дані подій з ЦБД (`масив об'єктів EttnV3Event <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/EveryBody/EttnV3Event.html>`__).

