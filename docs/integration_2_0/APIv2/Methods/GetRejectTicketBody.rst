################################################################################################################################
**Створення на сервері квитанції "Повідомлення про відмову від підписання документу" (COMDOC_021) для COMDOC документів**
################################################################################################################################

.. role:: red

:red:`Deprecated`

.. warning::
  Наполегливо рекомендуємо використовувати замість даного методу новий метод **/api/v2/eds/doc/reject** `за посиланням <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/GetDocReject.html>`__.

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

За допомогою GET методу **api/v2/eds/comdoc/reject** можливо створити документ COMDOC-відмову.

.. csv-table:: 
  :file: GetRejectTicketBody.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається тіло згенерованого COMDOC_021 в json форматі або форматі обраному в запиті **response_type** (`приклади відповіді <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/GetRejectTicketBodyExample.html>`__ + `специфікація COMDOC_021 <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_021_x.html>`__)".

.. так тут спеціально два методи посилаються на одну сторінку (інших прикладів немає)