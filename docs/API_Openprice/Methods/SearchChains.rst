##########################################################################################################################
**Отримання журналу Вхідних/Надісланих/Архівних документів (Замовлень) сервісу "Є-Товар"**
##########################################################################################################################

.. загальний метод

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Openprice/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: SearchChains.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** (json) передаються знайдені ланцюжки документів (масив об'єктів `XChain <https://wiki.edin.ua/uk/latest/API_Openprice/Methods/EveryBody/XChainPage.html>`__).
