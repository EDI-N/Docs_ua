#############################################################################
**Створити договір (Компанії)**
#############################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_PC/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: PostCompanyAgreementControl.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** (json) передається об'єкт з id договору ( **agreement_id** ), наприклад:

.. code:: json

	{"agreement_id":73}