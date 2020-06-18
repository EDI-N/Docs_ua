########################################################################################################
**Приклад запиту при відправці документа без створення чернетки**
########################################################################################################

**Приклад запиту в json форматі:**

.. code:: json

  POST /api/eds/doc/create_and_send?doc_type=desadv&gln=9864065702429 HTTP/1.1
  Content-Type: multipart/form-data; boundary=-------------573cf973d5228
  ...else headers...
  ---------------573cf973d5228
  Content-Disposition: form-data; name="file"; filename="file.json"
  Content-Type: application/json
  {Content of JSON file}

------------------

**Приклад запиту в xml форматі:**

.. code:: json

  POST /api/eds/doc/create_and_send?doc_type=desadv&gln=9864065702429 HTTP/1.1
  Content-Type: multipart/form-data; boundary=-------------573cf973d5228
  ...else headers...
  ---------------573cf973d5228
  Content-Disposition: form-data; name="file"; filename="file.xml"
  Content-Type: application/xml
  {Content of XML file}

