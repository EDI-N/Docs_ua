######################################################################
**Видалити ставку по лоту тендера (Організатор)**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Tender/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: DeleteBets.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** (json) передається коротке інфо по видаленій ставці (об'єкт):

.. code:: json

	{"removedBet":96,"comment":"Причина: погода","newBest":357}

, де

* removedBet - ідентифікатор видаленої ставки;
* comment - коментар (причина видалення);
* newBest - краща поточна ставка по лоту.
