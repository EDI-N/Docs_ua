#################################################################################################
**Повторити (скопіювати) документ "Замовлення" (ORDER) згідно актуального "Прайс-листа"**
#################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/Authorization.html>`__ .

.. attention:: 
   При формуванні "Замовлення" потрібно враховувати встановлені в Прайс-листі `обмеження <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/Instructions_2_0/Instruktsiia_dlia_dystrybiutora.html#id6>`__. Методи API для `роботи з обмеженнями <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Distribution_API_2_0_list.html#id2>`__.

.. csv-table:: 
  :file: DistribexOrderCopy.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається об'єкт з `деталями результату операції створення документа "Замовлення" (ORDER) <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/DistribexOrderResult.html>`__.


