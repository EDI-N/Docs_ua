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

:download:`XML-Приклад ORDER<Fozzy_XML/examples/ORDERS_example.xml>`

:download:`JSON-Приклад ORDER<Fozzy_XML/examples/ORDERS.json>`

---------

Підтвердження замовлення (ORDRSP)
========================================

.. csv-table:: **Підтвердження замовлення (ORDRSP)** відправляється у відповідь на прийнятий документ **Замовлення (ORDER)**. Основною особливістю **Підтвердження замовлення** є уточнення про постачання по кожній товарній позиції: чи буде товар доставлений; чи змінилася кількість/ціна чи буде відмова від поставки товарної позиції?
  :file: Fozzy_XML/files/ORDRSP.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад ORDRSP<Fozzy_XML/examples/ORDRSP_example.xml>`

:download:`JSON-Приклад ORDRSP<Fozzy_XML/examples/ORDRSP.json>`

---------

Інструкція з транспортування (IFTMIN)
==============================================

.. csv-table:: Інструкція з транспортування (IFTMIN) відправляється замовником оператору логістичних послуг. В даному документі вказуються остаточні деталі поставки
  :file: Fozzy_XML/files/IFTMIN.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад IFTMIN<Fozzy_XML/examples/IFTMIN_example.xml>`

:download:`JSON-Приклад IFTMIN<Fozzy_XML/examples/IFTMIN.json>`

---------

Акт невідповідності (COMDOC_009)
==============================================

.. csv-table:: Акт невідповідності (COMDOC_009)
  :file: Fozzy_XML/files/COMDOC_009.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад "Акта невідповідності" (COMDOC_009)<Fozzy_XML/examples/COMDOC_009_example.xml>`

:download:`JSON-Приклад "Акта невідповідності" (COMDOC_009)<Fozzy_XML/examples/COMDOC_009.json>`

---------

.. початок блоку для specs_for_Silpo

Накладна за кількістю (DOCUMENTINVOICE_TN)
=============================================

.. csv-table:: Тип документа "Накладна за кількістю" (DOCUMENTINVOICE_TN) чи "Цінова накладна" (DOCUMENTINVOICE_PRN) визначається значенням, що передається в полі DOCUMENTINVOICE.DocumentFunctionCode 
  :file: /ClientProcesses/Fozzy/Fozzy_XML/files/DOCUMENTINVOICE_TN.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад "Накладної за кількістю" (DOCUMENTINVOICE_TN)</ClientProcesses/Fozzy/Fozzy_XML/examples/DOCUMENTINVOICE_TN_example.xml>`

:download:`JSON-Приклад "Накладної за кількістю" (DOCUMENTINVOICE_TN)</ClientProcesses/Fozzy/Fozzy_XML/examples/DOCUMENTINVOICE_TN.json>`

---------

Цінова накладна (DOCUMENTINVOICE_PRN)
=============================================

.. csv-table:: Тип документа "Накладна за кількістю" (DOCUMENTINVOICE_TN) чи "Цінова накладна" (DOCUMENTINVOICE_PRN) визначається значенням, що передається в полі DOCUMENTINVOICE.DocumentFunctionCode 
  :file: /ClientProcesses/Fozzy/Fozzy_XML/files/DOCUMENTINVOICE_PRN.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад "Цінової накладної" (DOCUMENTINVOICE_PRN)</ClientProcesses/Fozzy/Fozzy_XML/examples/DOCUMENTINVOICE_PRN_example.xml>`

:download:`JSON-Приклад "Цінової накладної" (DOCUMENTINVOICE_PRN)</ClientProcesses/Fozzy/Fozzy_XML/examples/DOCUMENTINVOICE_PRN.json>`

---------

Коригування до товарної накладної (DOCCORINVOICE)
=============================================================

.. csv-table:: "Коригування до товарної накладної" (DOCCORINVOICE) можливо створити лише коли в ланцюжку документів вже є COMDOC_009 від мережі (Фоззі)
  :file: /ClientProcesses/Fozzy/Fozzy_XML/files/DOCCORINVOICE.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад DOCCORINVOICE</ClientProcesses/Fozzy/Fozzy_XML/examples/DOCCORINVOICE_example.xml>`

:download:`JSON-Приклад DOCCORINVOICE</ClientProcesses/Fozzy/Fozzy_XML/examples/DOCCORINVOICE.json>`

.. кінець блоку для specs_for_Silpo

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

.. [#] Одиниці виміру: "г", "кг", "л", "м", "мм", "м2", "м3", "шт", "кор", "пач", "піддон", "пак", "штука дрібна", "uauzd_MIL", "пляш", "рул", "послуга", "uauzd_CMT", "грн", "ящ", "Пар", "год.", "пог.м", "компл", "Тонна", "Блок", "Набір", "паков", "банк", "од"


