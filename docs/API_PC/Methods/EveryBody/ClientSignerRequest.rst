#########################################################################
**Дані підписанта (об'єкт ClientSigner)**
#########################################################################

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

Таблиця 1 - Опис параметрів об'єкта **ClientSigner**

.. csv-table:: 
  :file: for_csv/ClientSigner.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **ClientSignerFile**

.. csv-table:: 
  :file: for_csv/ClientSignerFile.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

-------------------------