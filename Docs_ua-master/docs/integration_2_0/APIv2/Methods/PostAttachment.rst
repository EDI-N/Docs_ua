######################################################################
**Додати файл до документа-чернетки**
######################################################################

.. attention::
   Реалізовано на даний момент для наступних документів:
   
   * `Універсальний/неструктурований документ (CONDRA) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/CONDRA_x.html>`__

.. note::
   Один документ може містити не більше 10 файлів в наступних форматах: PDF/XLS/XLSX/DOC/DOCX/ODT/PPT/PPTX/JPG/BMP/PNG/XML/P7S з розміром файлу не більше 5 Мб. Назва файла не повинна перевищувати 100 символів. Кожен раз при додаванні нового вкладення підписи всіх інших вкладень документа видаляються.

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: PostAttachment.csv
  :widths:  10, 41
  :stub-columns: 0

Приклад запиту:

.. code:: json

	boundary=----15217883902974046383107741460

	----15217883902974046383107741460
	Content-Disposition: form-data; name="file"; filename="name.pdf"
	Content-Type: application/pdf

	(data)
	----15217883902974046383107741460

**RESPONSE**

В тілі **відповіді** (json) передаються `дані файла-вкладення <https://wiki.edin.ua/uk/latest/API_Vilnyi/Methods/EveryBody/PostAttachmentResponse.html>`__.
