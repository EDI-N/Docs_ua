#######################################################################################################
**Отримати реєстр документів в xls форматі**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

.. admonition:: Обмеження:
   Реєстр можливо отримати за період, що не перевищує 31 добу та лише для наступних типів документів:

   * "Замовлення" (ORDERS)
   * "Повідомлення про відвантаження" (DESADV)
   * "Підтвердження замовлення" (ORDRSP)
   * "Повідомлення про прийом" (RECADV)
   * "Рахунок" (INVOICE)
   * "Накладні" (DOCUMENTIVOICE) загалом чи за вказаним `підтипом <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/ExtraQueryParameters_fieldName_sub_doc_type_id.html>`__ : "Товарна накладна"/"Цінова накладна"/"Видаткова накладна"/"Накладна за кількістю" (DOCUMENTINVOICE з DocumentFunctionCode=DRN/PRN/TN)
   * "Комерційні документи" (COMDOC) загалом чи за вказаним `підтипом <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/ExtraQueryParameters_fieldName_sub_doc_type_id.html>`__ "Комерційного документа"

.. csv-table:: 
  :file: GetDocTypeReport.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповіді** передається звіт у вигляді xlsx-файлу з даними документів.