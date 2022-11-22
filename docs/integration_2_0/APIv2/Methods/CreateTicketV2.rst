######################################################################
**Створення квитанції №1 (підпис чернетки)**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

За допомогою POST методу **api/v2/eds/doc/ticket** можливо пілписати чернетку документа (COMDOC, DECLAR, DECLARJ12, DOCUMENTINVOICE, KORINVOICE, DOCCORINVOICE).

.. csv-table:: 
  :file: CreateTicketV2.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

Код сервера 200 (ok).