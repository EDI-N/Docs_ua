######################################################################
**Додати файл до документа-чернетки**
######################################################################

.. note::
   Один документ може містити не більше 10 файлів в наступних форматах: PDF/JPG/JPEG/PNG/BMP/DOC/DOCX/XLS/XLSX/PPT/PPTX/CSV/TXT/XML/P7S (попередній перегляд працює лише для PDF/JPG/JPEG/PNG/BMP/TXT/XML) з розміром файлу не більше 5 Мб. Назва файла не повинна перевищувати 100 символів.

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: PostAttachment.csv
  :widths:  10, 41
  :stub-columns: 0

Приклад запиту:

.. code:: json

	boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

	----WebKitFormBoundary7MA4YWxkTrZu0gW
	Content-Disposition: form-data; name="222"; filename="1613574143975.png"
	Content-Type: image/png

	(data)
	----WebKitFormBoundary7MA4YWxkTrZu0gW

**RESPONSE**

В тілі **відповіді** (json) передаються `дані файла-вкладення <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/EveryBody/PostAttachmentResponse.html>`__.
