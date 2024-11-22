#######################################################################################################
**Створення на сервері квитанції "Анулювання"**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

За допомогою GET методу **api/v2/eds/doc/repeal** можливо створити квитанцію для подальшого запуску "Анулювання".

.. csv-table:: 
  :file: GetRepealTicketBody2.csv
  :widths:  10, 41
  :stub-columns: 0

В тілі **відповіді** передається тіло згенерованого:

* `COMDOC_019 <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_019_x.html>`__ для анулювання Комерційних документів (COMDOC)
* `DOCUMENTINVOICE <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DOCUMENTINVOICE_x.html>`__ з DocumentFunctionCode=RPLN і сегментом Repealer для анулювання накладних DOCUMENTINVOICE
* `TRANSPORTATIONORDER <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__ для анулювання «Заявки на транспортування» / «Підтвердження заявки на транспортування»

в json форматі або форматі обраному в запиті **response_type** (`приклади відповіді <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/GetRejectTicketBodyExample.html>`__.

----------------------------------------------

:red:`Deprecated (redirect):`

.. csv-table:: 
  :file: GetRepealTicketBody.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається тіло згенерованого COMDOC_019 в json форматі або форматі обраному в запиті **response_type** (`приклади відповіді <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/GetRejectTicketBodyExample.html>`__ + `специфікація COMDOC_019 <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_019_x.html>`__)".

.. так тут спеціально два методи посилаються на одну сторінку (інших прикладів немає)
