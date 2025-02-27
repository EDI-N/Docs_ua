#########################################################################################################
**Отримання (завантаження) тіла документа сервісу "ЕТТН" в JSON/XML/ECMR/PDF/ZIP форматі**
#########################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

.. note::
   Метод використовується для всіх оновлених документів сервісу "ЕТТН": `Специфікації документів <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/Docs_ETTNv3_list.html>`__

.. csv-table:: 
  :file: GetEcmrDocumentBody.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповідь** передається документ сервісу "ЕТТН" в визначеному запитом форматі (`Специфікації документів <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/Docs_ETTNv3_list.html>`__).


.. + one moment with internal params just like /api/ettn/v2/eds/doc/body got (look internal documentation)