#############################################################
**Підписання даних сервісу "ЕТТН" (збереження підпису)**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. attention::
   Формат підпису має бути ``CAdES-X Long`` (`детальніше про даний формат підпису <https://uakey.com.ua/news/main/cades-x-long-format-dlja-dovgotrivalogo-zbergannja-kep>`__). Наприклад, хмарні провайдери "Вчасно.КЕП" та "Deposit sign" за замовчуванням повертають формат ``CAdES-X Long``.

.. hint::
   Підписання в сервісі "ЕТТН" можливо здійснити двома способами:

   1. `Отримати тіло документа сервісу "ЕТТН" в ECMR форматі <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEcmrDocumentBody.html>`__ -> Підписати отримане ECMR тіло (отримуємо p7s файл підпису) -> Конвертуємо p7s в base64 формат - це буде зміст в масиві тіла запиту.
   2. `Отримати sign_hash (extra_fields) документа сервісу "ЕТТН" <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/GetDocument.html>`__ -> Підписати отримане значення sign_hash (отримуємо p7s файл підпису) -> Конвертуємо p7s в base64 формат - це буде зміст в масиві тіла запиту.

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
