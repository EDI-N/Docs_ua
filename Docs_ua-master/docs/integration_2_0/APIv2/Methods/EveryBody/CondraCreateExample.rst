########################################################################################################
**Приклад запиту при формуванні чернетки "Універсального/неструктурованого документа" (CONDRA)**
########################################################################################################

**Приклад вкладення в pdf форматі:**

.. code:: json

  POST /api/v2/eds/doc/condra/create?gln=9864232319962&recipient=9864232319979&number=145-97f4-aa7ff1&date=2021-06-15&doctype=1502&contractNumber=contractNumber_2&contractDate=2021-06-15&summ=30000&delivery=9864232319962 HTTP/1.1
  Content-Type: multipart/form-data; boundary=-------------573cf973d5228
  ...else headers...
  ---------------573cf973d5228
  Content-Disposition: form-data; name="file"; filename="file.pdf"
  Content-Type: application/pdf
  {Content of PDF file}

------------------

**Приклад вкладення в xml форматі:**

.. code:: json

  POST /api/v2/eds/doc/condra/create?gln=9864232319962&recipient=9864232319979&number=145-97f4-aa7ff1&date=2021-06-15&doctype=1502&contractNumber=contractNumber_2&contractDate=2021-06-15&summ=30000&delivery=9864232319962 HTTP/1.1
  Content-Type: multipart/form-data; boundary=-------------573cf973d5228
  ...else headers...
  ---------------573cf973d5228
  Content-Disposition: form-data; name="file"; filename="file.xml"
  Content-Type: application/xml
  {Content of XML file}

------------------

**Приклад вкладення в p7s форматі:**

.. code:: json

  POST /api/v2/eds/doc/condra/create?gln=9864232319962&recipient=9864232319979&number=145-97f4-aa7ff1&date=2021-06-15&doctype=1502&contractNumber=contractNumber_2&contractDate=2021-06-15&summ=30000&delivery=9864232319962 HTTP/1.1
  Content-Type: multipart/form-data; boundary=-------------573cf973d5228
  ...else headers...
  ---------------573cf973d5228
  Content-Disposition: form-data; name="file"; filename="file.p7s"
  Content-Type: application/pkcs7-signature
  {Content of P7S file}

