###############################################################################################################
**Створення квитанції №12 (прийняття запиту на анулювання COMDOC/DOCUMENTINVOICE/TRANSPORTATIONORDER)**
###############################################################################################################

.. role:: red

.. role:: green

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. important:: Підтвердити (прийняти) запит на анулювання документа неможливо, якщо документ:

    - анульовано (в документа є квитанція №12)
    - відсутнє запрошення анулювання (в документа **відсутня** квитанція №11)

    ЄДРПОУ в підписі має відповідати ЄДРПОУ, зазначеному в документі (наприклад, дял COMDOC: *[КодКонтрагента]* або *[ІПН]* в одному з блоків *[ЕлектроннийДокумент/Сторони/Контрагент]*)

:green:`New:`

.. csv-table:: 
  :file: RepealAccept3.csv
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
	  "chain_uuid": "7b6aef20-9f42-460e-9031-bb81c91e3b03",
	  "doc_uuid": "e013510a-4267-4553-80f0-eb5ebabdfd05",
	  "ticket_uuid": "1003706c-3656-497b-9438-c6f33e27c36d"
	}

----------------------------------------------

:red:`Deprecated (redirect):`

.. csv-table:: 
  :file: RepealAccept2.csv
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
	  "chain_uuid": "7b6aef20-9f42-460e-9031-bb81c91e3b03",
	  "doc_uuid": "e013510a-4267-4553-80f0-eb5ebabdfd05",
	  "ticket_uuid": "1003706c-3656-497b-9438-c6f33e27c36d"
	}

----------------------------------------------

:red:`Deprecated:`

.. csv-table:: 
  :file: RepealAccept.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

Код сервера 200 (ok).