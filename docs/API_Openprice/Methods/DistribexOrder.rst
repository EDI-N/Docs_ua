#################################################################################################
**Створити документ "Замовлення" (ORDER) за "Прайс-листом"**
#################################################################################################

.. видозмінений аналог запиту в Дистриб"юшн producer_gln -> recipient_gln

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Openprice/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: DistribexOrder.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається об'єкт з `деталями результату операції створення документа "Замовлення" (ORDER) <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/DistribexOrderResult.html>`__.

