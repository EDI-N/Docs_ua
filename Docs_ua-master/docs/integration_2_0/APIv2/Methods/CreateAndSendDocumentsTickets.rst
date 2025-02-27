#################################################################################################################
**Одночасне прийняття, підписання та відправка двох пов'язаних документів**
#################################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. important::
   Для прикладу, даний метод однією дією (одночасно) виконує Прийняття `"Акта приймання-передачі (додаток 8)" (COMDOC_032) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-032>`__ (створення квитанції) та Відправку пов'язаного `"Акта приймання-передачі (додаток 8)" (COMDOC_033) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-033>`__ без чернетки (подібно до послідовного виконання `/eds/comdoc/accept <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/ComdocAccept.html>`__ та  `/api/eds/doc/create_and_send <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/SendDocumentWithoutDraft.html>`__). 

.. warning::
   Якщо під час виконання методу під час перевірок буде виявлена логічна помилка на будь-якому етапі, то жодні дії НЕ будуть виконані. Тобто: або підписуються обидва документа або жоден.

.. csv-table:: 
  :file: CreateAndSendDocumentsTickets.csv
  :widths:  10, 41
  :stub-columns: 0

**Повний приклад запиту:**

.. code:: json

   POST /api/eds/docs_and_tickets?gln=9864066822430 HTTP/1.1
   Host: localhost:8084
   Authorization: 9e04baf1-f33b-4e76-8657-5212bae7a9z5
   Content-Length: 590
   Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

   ----WebKitFormBoundary7MA4YWxkTrZu0gW
   Content-Disposition: form-data; name="files"; filename="comdoc_32_from_atb.p7s"
   Content-Type: <Content-Type header here>

   (data)
   ----WebKitFormBoundary7MA4YWxkTrZu0gW
   Content-Disposition: form-data; name="documents"

   {"documents":[{"fileName":"comdoc_32_from_atb.p7s","type":"comdoc"},{"fileName":"comdoc_33_from_atb.p7s","type":"comdoc"}]}
   ----WebKitFormBoundary7MA4YWxkTrZu0gW
   Content-Disposition: form-data; name="files"; filename="comdoc_33_from_atb.p7s"
   Content-Type: <Content-Type header here>

   (data)
   ----WebKitFormBoundary7MA4YWxkTrZu0gW

**RESPONSE**

**doc_uuid** - ідентифікатор документа на платформі EDIN 2.0;

**chain_uuid** - ідентифікатор ланцюжка, в якому знаходиться документ;

**ticket_uuid** - ідентифікатор квитанції.

**Приклад відповіді (JSON):**

.. code:: json

   {
      "comdoc_32_from_atb.p7s": {
         "doc_uuid": "fdae7e57-3706-4599-90e2-1a5ebee71512",
         "chain_uuid": "d62f1b6e-7400-4bc3-ba5b-7e5d7931adbc",
         "ticket_uuid": "411f23ee-ab07-472f-a1e2-7155a7631ff8"
      }, - це для тікета
      "comdoc_33_from_atb.p7s": {
         "doc_uuid": "b45f5906-9a6b-45d9-adb1-0cc527d260c4",
         "chain_uuid": "d62f1b6e-7400-4bc3-ba5b-7e5d7931adbc"
      } - це для документа
   }

