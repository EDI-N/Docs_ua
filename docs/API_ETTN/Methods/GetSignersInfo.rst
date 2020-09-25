############################################################################################################################################################
**Отримання даних підписантів документа сервісу "ЕТТН"**
############################################################################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: GetSignersInfo.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповідь** передаються дані підписантів документа (масив об'єктів `EndUserSignInfo <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/EveryBody/EndUserSignInfo.html>`__) для кожної з ролей: 

.. code:: json

  {
    consignor: EndUserSignInfo[], carrier: EndUserSignInfo[], consignee: EndUserSignInfo[]
  }



