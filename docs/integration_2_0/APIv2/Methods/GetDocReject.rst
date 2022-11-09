#######################################################################################################
**Створення на сервері квитанції "Повідомлення про відмову від підписання документу" (COMDOC_021)**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

GET **api/v2/eds/doc/reject** метод може бути використаний для **Відмови від підписання** : `DOCUMENTINVOICE <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#documentinvoice>`__, `Додаток до договору 7А (METRO_7A) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#metro-7a>`__, `Додаток до договору 7Б (METRO_7B) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#metro-7b>`__, `Додаток до договору 7Ц (METRO_7C) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#metro-7c>`__.

.. csv-table:: 
  :file: GetDocReject.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається тіло згенерованого COMDOC_021 в json форматі або форматі обраному в запиті **response_type** (`приклади відповіді <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/GetRejectTicketBodyExample.html>`__ + `специфікація COMDOC_021 <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#comdoc-021>`__)".

.. так тут спеціально методи посилаються на одну сторінку (інших прикладів немає)