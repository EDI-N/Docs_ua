.. deprecated (not for integrated users - web only) Ok, this is an exception for CONDRA (temporary) - delete when another api will be ready

#######################################################################################################
**Отримання UUID (для CONDRA)**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

За допомогою GET методу **/api/office/uuid** генерується один UUID. Для створення CONDRA потрібно запускати метод двічі.

.. csv-table:: 
  :file: GetOfficeUuid.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** в текстовому вигляді передається **uuid** - сгенерований унікальний ідентифікатор: 

.. code:: json

  c48f97e9-8d98-4c52-8635-675a6145f570