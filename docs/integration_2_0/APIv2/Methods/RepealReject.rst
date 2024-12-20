################################################################################################
**Створення квитанції №15 (відмова від анулювання COMDOC/DOCUMENTINVOICE/TRANSPORTATIONORDER)**
################################################################################################

.. role:: red

.. role:: green

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__. Відмова від анулювання не потребує підписання.

.. important:: Виконати "відмову від анулювання" документа може лише отримувач "запиту на анулювання" (є квитанція №11) до того, як документ змінить свій стан на "анульовано" (в документа є квитанція №12)

:green:`New:`

.. csv-table:: 
  :file: RepealReject3.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передаються:

**chain_uuid** - ідентифікатор ланцюжка, в якому знаходиться документ

**doc_uuid** - ідентифікатор документа, якому належить квитанція

**ticket_uuid** - ідентифікатор квитанції

**Приклад (JSON):**

.. code:: json

	{
	  "chain_uuid": "d47a29f6-b208-41a1-bb6e-8f5fc58745cd",
	  "doc_uuid": "38e37759-825a-4774-a3c3-d77f241253a8",
	  "ticket_uuid": "111aaeaa-3601-49d9-a5e5-fe2aaebdacdb"
	}

----------------------------------------------

:red:`Deprecated (redirect):`

.. csv-table:: 
  :file: RepealReject.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передаються:

**chain_uuid** - ідентифікатор ланцюжка, в якому знаходиться документ

**doc_uuid** - ідентифікатор документа, якому належить квитанція

**ticket_uuid** - ідентифікатор квитанції

**Приклад (JSON):**

.. code:: json

	{
	  "chain_uuid": "d47a29f6-b208-41a1-bb6e-8f5fc58745cd",
	  "doc_uuid": "38e37759-825a-4774-a3c3-d77f241253a8",
	  "ticket_uuid": "111aaeaa-3601-49d9-a5e5-fe2aaebdacdb"
	}

