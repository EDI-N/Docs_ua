######################################################################
**Отримати дані про підписання файлу-вкладення**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: GetSign.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** (json) передається список uuid-ів Відправника і Отримувачів документа з масивами `даних про підписи <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/EveryBody/GetSignResponse.html>`__ для кожного uuid відповідно.