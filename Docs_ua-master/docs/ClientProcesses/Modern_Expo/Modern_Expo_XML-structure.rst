XML Специфікації для роботи з мережею "Modern-Expo"
######################################################

.. role:: red

.. role:: underline

.. role:: green

.. contents:: Зміст:

---------

Замовлення (ORDER)
==========================

.. csv-table:: Замовлення (ORDER) на поставку відправляє покупець постачальнику, вказуючи штрих-код продукту, його опис, замовлену кількість, ціну та іншу необхідну інформацію.
  :file: Modern_Expo_XML/files/ORDER.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад ORDER<Modern_Expo_XML/examples/ORDER_MODERN-EXPO_example.xml>`

:download:`JSON-Приклад ORDER<Modern_Expo_XML/examples/ORDER_MODERN-EXPO.json>`

---------

Підтвердження замовлення (ORDRSP)
========================================

.. csv-table:: **Підтвердження замовлення (ORDRSP)** відправляється у відповідь на прийнятий документ **Замовлення (ORDER)**. Основною особливістю **Підтвердження замовлення** є уточнення про постачання по кожній товарній позиції: чи буде товар доставлений; чи змінилася кількість/ціна чи буде відмова від поставки товарної позиції?
  :file: Modern_Expo_XML/files/ORDRSP.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад ORDRSP<Modern_Expo_XML/examples/ORDRSP_MODERN-EXPO_example.xml>`

:download:`JSON-Приклад ORDRSP<Modern_Expo_XML/examples/ORDRSP_MODERN-EXPO.json>`

---------

Рахунок (INVOICE)
==============

.. csv-table:: **Рахунок (INVOICE)** є повідомленням; в якому містяться дані по оплаті наданих послуг і товарів. В **Рахунку** обов'язково вказується ціна продукту без ПДВ; ставка ПДВ для кожної товарної позиції і підраховується сумарна вартість **Замовлення**.
  :file: Modern_Expo_XML/files/INVOICE.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад INVOICE<Modern_Expo_XML/examples/INVOICE_MODERN-EXPO_example.xml>`

:download:`JSON-Приклад INVOICE<Modern_Expo_XML/examples/INVOICE_MODERN-EXPO.json>`

---------

Видаткова накладна (COMDOC_006)
========================================

.. csv-table:: Видаткова накладна (COMDOC_006)
  :file: Modern_Expo_XML/files/COMDOC_006.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад COMDOC_006<Modern_Expo_XML/examples/COMDOC_006_MODERN-EXPO_example.xml>`

:download:`JSON-Приклад COMDOC_006<Modern_Expo_XML/examples/COMDOC_006_MODERN-EXPO.json>`

.. old :download:`Приклад COMDOC_006<../../XML/examples/comdoc_006_example.xml>`

---------

Товарна специфікація (COMDOC_008)
========================================

.. csv-table:: Товарна специфікація (COMDOC_008)
  :file: Modern_Expo_XML/files/COMDOC_008.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад COMDOC_008<Modern_Expo_XML/examples/comdoc_008_MODERN-EXPO_example.xml>`

:download:`JSON-Приклад COMDOC_008<Modern_Expo_XML/examples/COMDOC_008_MODERN-EXPO.json>`

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

.. [#] Одиниці виміру: "г", "кг", "л", "м", "мм", "м2", "м3", "шт", "кор", "пач", "піддон", "пак", "штука дрібна", "uauzd_MIL", "пляш", "рул", "послуга", "uauzd_CMT", "грн", "ящ", "Пар", "год.", "пог.м", "компл", "Тонна", "Блок", "Набір", "паков", "банк", "од"






