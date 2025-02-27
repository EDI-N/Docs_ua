######################################################################
**Створення квитанції №1 (підпис чернетки)**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

За допомогою POST методу **api/v2/eds/doc/ticket** можливо підписати чернетку документа (COMDOC, DECLAR, DECLARJ12, DOCUMENTINVOICE, KORINVOICE, DOCCORINVOICE, TRANSPORTATIONORDER).

.. csv-table:: 
  :file: CreateTicketV2.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

* **chain_uuid** - ідентифікатор ланцюжка, в якому знаходиться документ
* **doc_uuid** - ідентифікатор документа на платформі EDIN 2.0;
* **ticket_uuid** - ідентифікатор квитанції

**Приклад відповіді (JSON):**

.. code:: json

	{
	  "chain_uuid": "7ccff78e-ea42-47ea-81e4-5508ed4fbd51",
	  "doc_uuid": "3698b501-e1ef-464d-a71a-58066f556114",
	  "ticket_uuid": "1003706c-3656-497b-9438-c6f33e27c36d"
	}