##########################################################################################
**Створення чернетки документа / Клонування відправленого документа (COMDOC)**
##########################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. note::
  За допомогою POST методу **/api/v2/eds/doc** можливо **створити чернетку** документа (передається тіло документа) зазначеного типу (параметр **doc_type**) для вказаного одержувача АБО можливо **клонувати відправлений документ** (передається параметр **clone_from_doc_uuid**) в чернетку.

.. csv-table:: 
  :file: CreateDocumentV2.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передаються дані створеного документа (об'єкт `XDoc <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/XDocPage.html>`__ ).
