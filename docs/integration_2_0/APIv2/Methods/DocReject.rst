############################################################################################
**Відмова від підписання (створення квитанції №13)**
############################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. note::
   Метод може бути виконаний в режимі автоматичного формування "Повідомлення про відмову від підписання документа" (`COMDOC_021 <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#comdoc-021>`__). Метод може бути використаний для **Відмови від підписання** : `DOCUMENTINVOICE <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#documentinvoice>`__, `Додаток до договору 7А (METRO_7A) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#metro-7a>`__, `Додаток до договору 7Б (METRO_7B) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#metro-7b>`__.

.. csv-table:: 
  :file: DocReject.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передаються:

* **chain_uuid** - ідентифікатор ланцюжка, в якому знаходиться документ
* **doc_uuid** - ідентифікатор документа, якому належить квитанція
* **ticket_uuid** - ідентифікатор квитанції

**Приклад відповіді (JSON):**

.. code:: json

	{
	  "chain_uuid": "7b6aef20-9f42-460e-9031-bb81c91e3b03",
	  "doc_uuid": "e013510a-4267-4553-80f0-eb5ebabdfd05",
	  "ticket_uuid": "1003706c-3656-497b-9438-c6f33e27c36d"
	}

