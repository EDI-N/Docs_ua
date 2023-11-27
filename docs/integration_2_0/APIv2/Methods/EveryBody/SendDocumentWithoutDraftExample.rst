########################################################################################################
**Приклад запиту при відправці документа без створення чернетки**
########################################################################################################

**Приклад запиту в json форматі:**

.. code:: json

  POST /api/eds/doc/create_and_send?doc_type=orders&gln=9864065702429 HTTP/1.1
  Content-Type: multipart/form-data; boundary=-------------573cf973d5228
  ...else headers...
  ---------------573cf973d5228
  Content-Disposition: form-data; name="file"; filename="file.json"
  Content-Type: application/json
  {Content of JSON file}

------------------

**Приклад запиту в xml форматі:**

.. code:: json

  POST /api/eds/doc/create_and_send?doc_type=orders&gln=9864065702429 HTTP/1.1
  Content-Type: multipart/form-data; boundary=-------------573cf973d5228
  ...else headers...
  ---------------573cf973d5228
  Content-Disposition: form-data; name="file"; filename="file.xml"
  Content-Type: application/xml
  {Content of XML file}

------------------

**Приклад запиту в p7s форматі:**

.. code:: json

  POST /api/eds/doc/create_and_send?doc_type=orders&gln=9864065702429 HTTP/1.1
  Content-Type: multipart/form-data; boundary=-------------573cf973d5228
  ...else headers...
  ---------------573cf973d5228
  Content-Disposition: form-data; name="file"; filename="file.p7s"
  Content-Type: application/pkcs7-signature
  {Content of P7S file}