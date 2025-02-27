########################################################################################################
**Приклад запиту при відправці вкладень (обгрунтування) до коментаря**
########################################################################################################

------------------

**Приклад запиту**

.. code:: json

    POST /api/es/agreement/comment?gln=9864067620417&uuid=8b65e539-fad4-4fc3-ba5c-fe043092851e&comment=Some HTTP/1.1
    ...else headers...
    Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
    
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="4543"; filename="1625493467304.png"
    Content-Type: image/png
    
    (data)
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="333"; filename="List_of_documents_Inbox_2021-06-30_12-47-31.xlsx"
    Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
    
    (data)
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
