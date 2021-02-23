######################################################################
**Отримати дані про підписання файлу-вкладення**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: GetSign.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** (json) передаються список uuid-ів Відправника (перший uuid) і Отримувачів (наступні uuid) документа з `даними підписантів <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/EveryBody/GetSignResponse.html>`__ відповідно.