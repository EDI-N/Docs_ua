#############################################################
**Підписання даних сервісу "ЕТТН" (збереження підпису)**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_ETTNv3/Methods/Authorization.html>`__.

.. hint::
   Підписання в сервісі "ЕТТН" можливо здійснити двома способами:

   1. `Отримати тіло документа сервісу "ЕТТН" в ECMR форматі <https://wiki.edin.ua/uk/latest/API_ETTNv3/Methods/GetEcmrDocumentBody.html>`__ -> Підписати отримане ECMR тіло (отримуємо p7s файл підпису) -> Конвертуємо p7s в base64 формат - це буде зміст поля partySignature в тілі запиту.
   2. `Отримати sign_hash (extra_fields) документа сервісу "ЕТТН" <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetDoc.html>`__ -> Підписати отримане значення sign_hash (отримуємо p7s файл підпису) -> Конвертуємо p7s в base64 формат - це буде зміст поля partySignature в тілі запиту.

.. note::
   Перепідписання документа (коригування підпису шляхом повторного застосування методу) допускається лише до відправки документа контрагенту.

.. csv-table:: 
  :file: SaveEcmrSign.csv
  :widths:  10, 41
  :stub-columns: 0

Приклад тіла запиту:

.. code:: json

   ["ZGZkZmRmZGZkZmRmdnh2dmM==", "ZGZkZmRmZGZkZmRmdnh2dmM=="]

**RESPONSE**

Код сервера 200 (ok).
