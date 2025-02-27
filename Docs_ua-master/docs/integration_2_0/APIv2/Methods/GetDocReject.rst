#######################################################################################################
**Створення на сервері квитанції "Повідомлення про відмову від підписання документа"**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

GET **api/v2/eds/doc/reject** метод може бути використаний для **Відмови від підписання** : Комерційних документів (сімейство COMDOC), `Накладних (DOCUMENTINVOICE) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DOCUMENTINVOICE_x.html>`__, `Додаток до договору 7А (METRO_7A) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/METRO_7A_x.html>`__, `Додаток до договору 7Б (METRO_7B) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/METRO_7B_x.html>`__, `Додаток до договору 7Ц (METRO_7C) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/METRO_7C_x.html>`__, `«Заявка на транспортування» / «Підтвердження заявки на транспортування» (TRANSPORTATIONORDER) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__.

.. csv-table:: 
  :file: GetDocReject.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається тіло згенерованого:

* `COMDOC_021 <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_021_x.html>`__ для анулювання Комерційних документів (COMDOC)
* `DOCUMENTINVOICE <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DOCUMENTINVOICE_x.html>`__ з DocumentFunctionCode=CNCL і сегментом Repealer для анулювання накладних DOCUMENTINVOICE
* `TRANSPORTATIONORDER <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__ для анулювання «Заявки на транспортування» / «Підтвердження заявки на транспортування»

в json форматі або форматі обраному в запиті **response_type** (`приклади відповіді <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/GetRejectTicketBodyExample.html>`__).

.. так тут спеціально методи посилаються на одну сторінку (інших прикладів немає)