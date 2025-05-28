XML Специфікації для роботи з мережею "Фора"
########################################################################

**XML специфікації електронних документів**

У специфікації представлено опис полів XML-документів, які застосовуються в електронному обміні даними при роботі з мережею "Фора" на платформі EDIN.

---------

.. contents:: Зміст:

---------

Замовлення (ORDER)
==========================

.. csv-table:: Замовлення (ORDER) на поставку відправляє покупець постачальнику, вказуючи штрих-код продукту, його опис, замовлену кількість, ціну та іншу необхідну інформацію.
  :file: Fora_XML/files/ORDER.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад ORDER<Fora_XML/examples/ORDER.xml>`

:download:`JSON-Приклад ORDER<Fora_XML/examples/ORDER.json>`

---------

Підтвердження замовлення (ORDRSP)
========================================

.. csv-table:: **Підтвердження замовлення (ORDRSP)** відправляється у відповідь на прийнятий документ **Замовлення (ORDER)**. Основною особливістю **Підтвердження замовлення** є уточнення про постачання по кожній товарній позиції: чи буде товар доставлений; чи змінилася кількість/ціна чи буде відмова від поставки товарної позиції?
  :file: Fora_XML/files/ORDRSP.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад ORDRSP<Fora_XML/examples/ORDRSP.xml>`

:download:`JSON-Приклад ORDRSP<Fora_XML/examples/ORDRSP.json>`

---------

Повідомлення про відвантаження (DESADV)
===============================================

.. csv-table:: **Повідомлення про відвантаження (DESADV)** відправляє постачальник у відповідь на **Замовлення (ORDER)**. При цьому постачальник може змінити кількість замовлених товарних позицій, що поставляються, дату і час поставки, додаткові відомості. Даний документ є аналогом товарно-транспортної накладної (ТТН)
  :file: Fora_XML/files/DESADV.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад DESADV<Fora_XML/examples/DESADV.xml>`

:download:`JSON-Приклад DESADV<Fora_XML/examples/DESADV.json>`

---------

Інструкція з транспортування (IFTMIN)
==============================================

.. csv-table:: Інструкція з транспортування (IFTMIN) відправляється замовником оператору логістичних послуг. В даному документі вказуються остаточні деталі поставки
  :file: Fora_XML/files/IFTMIN.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад IFTMIN<Fora_XML/examples/IFTMIN_example.xml>`

:download:`JSON-Приклад IFTMIN<Fora_XML/examples/IFTMIN.json>`

---------

Акт невідповідності (COMDOC_009)
==============================================

.. csv-table:: Акт невідповідності (COMDOC_009)
  :file: Fora_XML/files/COMDOC_009.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

.. include:: units_comdoc.rst

:download:`XML-Приклад COMDOC_009<Fora_XML/examples/COMDOC_009.xml>`

:download:`JSON-Приклад COMDOC_009<Fora_XML/examples/COMDOC_009.json>`

---------

.. include:: /ClientProcesses/Fozzy/Fozzy_XML-structure.rst
   :start-after: .. початок блоку для specs_for_Silpo
   :end-before: .. кінець блоку для specs_for_Silpo

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
