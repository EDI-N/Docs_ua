#############################################################################
**Додати вкладення (файли) до заявки на факторинг (Постачальник/Мережа)**
#############################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_PC/Methods/Authorization.html>`__.

.. important:: 
   До заявки можливо додавати txt, .doc, .docx, .xls, .xlsx, .ppt, .pptx, image, .pdf, .rtf, .zip файли розміром не більше 5 МБ і загальним об’ємом не більше 10 МБ. Додавати файли можливо лише до заявок в статусі "Чернетка" - status=0 (до відправки Фактору).

.. csv-table:: 
  :file: PostFactorRequestAttachments.csv
  :widths:  10, 41
  :stub-columns: 0

Приклад запиту:

.. code:: json

	boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

	----WebKitFormBoundary7MA4YWxkTrZu0gW
	Content-Disposition: form-data; name="uploadFile"; filename="1613574143975.png"
	Content-Type: application/pdf

	(data)
	----WebKitFormBoundary7MA4YWxkTrZu0gW

**RESPONSE**

Код сервера 200 (ok).
