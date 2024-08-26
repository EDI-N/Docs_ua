############################################################################################
**Створення квитанції №14 (відкликати підписання документа COMDOC/TRANSPORTATIONORDER)**
############################################################################################

.. role:: red

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. important:: Відкликати підписання документа COMDOC/TRANSPORTATIONORDER може лише відправник документа до того, як документ змінить свій стан на:

    - відкликаний (в документа є квитанція №14)
    - відмовлений (в документа є квитанція №13)
    - анульований (в документа є квитанція №12)
    - прийнятий (в документа є квитанція №2)

    Значення *[ЕлектроннийДокумент/Відхилив/GLN]* має відповідати параметру *gln* в запиті. ЄДРПОУ в підписі має відповідати *[КодКонтрагента]* або *[ІПН]* в блоці *[ЕлектроннийДокумент/Відхилив]*

.. note::
   Метод може бути використаний для відправки **Відкликання підписання** : Комерційних документів (сімейство COMDOC), `Накладних (DOCUMENTINVOICE) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DOCUMENTINVOICE_x.html>`__, `Додаток до договору 7А (METRO_7A) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/METRO_7A_x.html>`__, `Додаток до договору 7Б (METRO_7B) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/METRO_7B_x.html>`__, `Додаток до договору 7Ц (METRO_7C) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/METRO_7C_x.html>`__, `«Заявка на транспортування» / «Підтвердження заявки на транспортування» (TRANSPORTATIONORDER) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__.
	
	Для `DOCUMENTINVOICE <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DOCUMENTINVOICE_x.html>`__ та `DOCCORINVOICE <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DOCCORINVOICE_x.html>`__ (і лише для цих документів) метод може бути виконаний в режимі автоматичного формування і відправки "Повідомлення про відмову від підписання документа" (`COMDOC_021 <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_021_x.html>`__) при наявності **autoGenerate** параметра. За наявності параметра **autoGenerate** тіло квитанції формується автоматично, але без підпису.

.. csv-table:: 
  :file: PostDocumentRevoke.csv
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
