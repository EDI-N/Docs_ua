##########################################################################################################################
**Отримання даних контрагента за ім'ям / ІПН / email / ЄДРПОУ / номером телефону**
##########################################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: SearchEmployees.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається масив з даними про контрагентів (об'єктів `Employee <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/EveryBody/EmployeesSearchResponse.html>`__ ).