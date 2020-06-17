######################################################################
**Відправка документа (без створення чернетки)**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

За допомогою цього POST методу **/api/eds/doc/create_and_send** відбувається одночасне створення та відправка документа.

.. csv-table:: 
  :file: SendDocumentWithoutDraft.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

.. code:: json

  {doc_uuid: 3698b501-e1ef-464d-a71a-58066f556114, chain_uuid: 7ccff78e-ea42-47ea-81e4-5508ed4fbd51}

, де **doc_uuid** - унікальний ідентифікатор документа на платформі EDIN 2.0;

**chain_uuid** - унікальний ідентифікатор `ланцюжка документів <https://wiki.edi-n.com/uk/latest/integration_2_0/APIv2/Methods/EdsChain.html>`__.







