######################################################################
**Створення чернетки документа**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

За допомогою POST методу **api/eds/doc** можливо створити чернетку документа зазначеного типу для вказаного одержувача.

.. csv-table:: 
  :file: CreateDocumentV2.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передаються дані створеного документа (об'єкт `XDoc <https://wiki.edi-n.com/uk/latest/integration_2_0/APIv2/Methods/EveryBody/XDocPage.html>`__ ).
