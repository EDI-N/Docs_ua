#########################################################################################################
**Масово завантажити сертифікати**
#########################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: Certificates.csv
  :widths:  10, 41
  :stub-columns: 0

:download:`Приклад передаваємого zip<Certificates.zip>`

**RESPONSE**

В тілі **відповіді** передаються `дані завантажених сертифікатів <https://wiki.edin.ua/uk/latest/Certificate/EDIN_2_0/APIv2/Methods/EveryBody/XCertificateList.html>`__ (масив об'єктів XCertificate).