#######################################################################################################
**Створення на сервері квитанції "Анулювання" (COMDOC_019)**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

За допомогою GET методу **api/v2/eds/comdoc/repeal** можливо створити COMDOC "Аннулювання".

.. csv-table:: 
  :file: GetRepealTicketBody.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається тіло згенерованого COMDOC_019 в json форматі або форматі обраному в запиті **response_type** (`приклади відповіді <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/GetRejectTicketBodyExample.html>`__ + `специфікація COMDOC_019 <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_019_x.html>`__)".

.. так тут спеціально два методи посилаються на одну сторінку (інших прикладів немає)
