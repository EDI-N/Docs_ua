XML Специфікації для роботи з мережею "Фоззі"
################################################

.. contents:: Зміст:

---------

Замовлення (ORDER)
==========================

.. csv-table:: Замовлення (ORDER) на поставку відправляє покупець постачальнику, вказуючи штрих-код продукту, його опис, замовлену кількість, ціну та іншу необхідну інформацію.
  :file: Fozzy_XML/files/ORDER.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`Приклад ORDER<Fozzy_XML/examples/ORDERS_example.xml>`

---------

Підтвердження замовлення (ORDRSP)
========================================

.. csv-table:: **Підтвердження замовлення (ORDRSP)** відправляється у відповідь на прийнятий документ **Замовлення (ORDER)**. Основною особливістю **Підтвердження замовлення** є уточнення про постачання по кожній товарній позиції: чи буде товар доставлений; чи змінилася кількість/ціна чи буде відмова від поставки товарної позиції?
  :file: Fozzy_XML/files/ORDRSP.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`Приклад ORDRSP<Fozzy_XML/examples/ORDRSP_example.xml>`

---------

Інструкція з транспортування (IFTMIN)
==============================================

.. csv-table:: Інструкція з транспортування (IFTMIN) відправляється замовником оператору логістичних послуг. В даному документі вказуються остаточні деталі поставки
  :file: Fozzy_XML/files/IFTMIN.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`Приклад IFTMIN<Fozzy_XML/examples/IFTMIN_example.xml>`

---------

Товарна накладна (DOCUMENTINVOICE)
=============================================

.. csv-table:: Тип документа "Накладна за кількістю" (DOCUMENTINVOICE_TN) чи "Цінова накладна" (DOCUMENTINVOICE_PRN) визначається значенням, що передається в полі DocumentFunctionCode
  :file: Fozzy_XML/files/DOCUMENTINVOICE.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`Приклад "Накладної за кількістю" (DOCUMENTINVOICE_TN)<Fozzy_XML/examples/DOCUMENTINVOICE_TN_example.xml>`

:download:`Приклад "Цінової накладної" (DOCUMENTINVOICE_PRN)<Fozzy_XML/examples/DOCUMENTINVOICE_PRN_example.xml>`

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.



