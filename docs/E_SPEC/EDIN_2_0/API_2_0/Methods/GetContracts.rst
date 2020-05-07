#############################################################
**Переглянути усі контракти з контрагентами**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_E_SPEC/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: GetContracts.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі відповіді в json-форматі передається інформація про контракти з усіма контрагентами (список усіх xContracts);

.. csv-table:: 
  :file: for_csv/XContract.csv
  :widths:  10, 5, 41
  :header-rows: 1
  :stub-columns: 0


Код сервера 200 (ok).