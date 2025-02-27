############################################################################################################################
**Передача даних для підписання документа (масив об'єктів Signature)**
############################################################################################################################

**JSON:**

.. code:: json

   [
      {
         "signingPartyRoleCode": "CN",
         "partySignature": "ZGZkZmRmZGZkZmRmdnh2dmM==",
         "name": "Петренко В.В.",
         "position": "комірник",
         "specifiedTaxRegistration": {
         "id": "12345678"
         }
      },
      {
         "signingPartyRoleCode": "CA",
         "partySignature": "ZGZkZmRmZGZkZmRmdnh2dmM==",
         "name": "Іваненко В.В.",
         "position": "водій",
         "specifiedTaxRegistration": {
         "id": "12345678"
         }
      }
   ]

Таблиця 1 - Опис параметрів об'єкта **Signature**

.. csv-table:: 
  :file: for_csv/Signature.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **SimpleIdentity**

.. csv-table:: 
  :file: for_csv/SimpleIdentity.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
