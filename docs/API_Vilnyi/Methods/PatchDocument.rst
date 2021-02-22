######################################################################
**Редагувати метадані документа (чернетка)**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: PatchDocument.csv
  :widths:  10, 41
  :stub-columns: 0

Приклад запиту:

.. code:: json

	boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

	----WebKitFormBoundary7MA4YWxkTrZu0gW
	Content-Disposition: form-data; name="file"; filename="acceptance.json"
	Content-Type: application/json

	{"receivers":["831714cf-064b-4ce9-bdc4-b6a79784639c"],"title":"rock&roll123","text":"text povidomlennya"}
	----WebKitFormBoundary7MA4YWxkTrZu0gW

**RESPONSE**

В тілі **відповіді** (json) передається **doc_uuid** - унікальний ідентифікатор документа: 

.. code:: json

  {"doc_uuid":"023403f8-9201-41f2-8c18-cf4777a058fc"}