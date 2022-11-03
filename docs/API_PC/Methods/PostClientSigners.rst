######################################################################
**Вказати/редагувати дані підписантів**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_PC/Methods/Authorization.html>`__ .

.. important:: 
   Для редагування даних раніше вказаного підписанта в тілі запиту потрібно вказувати параметр **signerId**.

.. csv-table:: 
  :file: PostClientSigners.csv
  :widths:  10, 41
  :stub-columns: 0

Приклади запитів:

**Додавання нових даних:**

.. code:: json

   -----------------------------256291482722598259522920081169
   Content-Disposition: form-data; name="signer"

   {"signerRoleId":3,"ownershipId":1,"actsOnBasisId":1,"fileDate":null,"file":{},"fullName":"Galya Gadot","position":"Super"}
   -----------------------------256291482722598259522920081169--

**Редагування з додаванням файлу:**

.. code:: json

   -----------------------------14447251409939364231421378596
   Content-Disposition: form-data; name="signer"

   {"signerId":807,"signerRoleId":1,"fullName":"Петров Петро Петрович","position":"Двірник-Директор","ownershipId":1,"actsOnBasisId":2,"isActual":1,"file":{"fileName":"docum.pdf","content":{}}}
   -----------------------------14447251409939364231421378596
   Content-Disposition: form-data; name="file"; filename="docum.pdf"
   Content-Type: application/pdf

   (data)
   -----------------------------14447251409939364231421378596--

**RESPONSE**

Код сервера 200 (ok).