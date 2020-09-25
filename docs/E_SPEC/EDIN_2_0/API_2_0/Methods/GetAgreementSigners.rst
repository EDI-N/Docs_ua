#############################################################
**Отримання інформації про сертифікати підписантів**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/E_SPEC/EDIN_2_0/API_2_0/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: GetAgreementSigners.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається інформація про підписантів (масив об'єктів `ExEndUserSignInfo <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/ExEndUserSignInfo.html>`__ ).