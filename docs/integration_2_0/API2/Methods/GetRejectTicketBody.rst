#######################################################################################################
**Створення на сервері квитанції "Повідомлення про відмову від підписання документу" (COMDOC_021)**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/integration_2_0/APIv2/Authorization.html>`__ .

За допомогою GET методу **api/v2/eds/comdoc/reject** можливо створити документ COMDOC-відмову.

.. csv-table:: 
  :file: GetRejectTicketBody.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається тіло згенерованого COMDOC_021 в json форматі або форматі обраному в запиті **response_type** (`приклади відповіді <https://wiki.edi-n.com/uk/latest/integration_2_0/APIv2/Methods/EveryBody/GetRejectTicketBodyExample.html>`__ + `специфікація COMDOC_021 <https://wiki.edi-n.com/uk/latest/XML/XML-structure.html#comdoc-021>`__)".

.. так тут спеціально два методи посилаються на одну сторінку (інших прикладів немає)