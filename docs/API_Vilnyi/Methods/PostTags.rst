######################################################################
**Створити новий тег**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/Authorization.html>`__ .

.. important:: 
   Назва тегу повинна бути унікальною й довжиною не більше 20 символів.

.. csv-table:: 
  :file: PostTags.csv
  :widths:  10, 41
  :stub-columns: 0

Приклад запиту:

.. code:: json

    ["Ken", "json", "Stethem"]

**RESPONSE**

В тілі **відповіді** (json) передається масив `створених тегів <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/EveryBody/XTagResponse.html>`__.
