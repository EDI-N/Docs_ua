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
  :file: Silpo_XML/files/ORDER.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад ORDER<Silpo_XML/examples/ORDER.xml>`

:download:`JSON-Приклад ORDER<Silpo_XML/examples/ORDER.json>`

---------

Підтвердження замовлення (ORDRSP)
========================================

.. csv-table:: **Підтвердження замовлення (ORDRSP)** відправляється у відповідь на прийнятий документ **Замовлення (ORDER)**. Основною особливістю **Підтвердження замовлення** є уточнення про постачання по кожній товарній позиції: чи буде товар доставлений; чи змінилася кількість/ціна чи буде відмова від поставки товарної позиції?
  :file: Silpo_XML/files/ORDRSP.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад ORDRSP<Silpo_XML/examples/ORDRSP.xml>`

:download:`JSON-Приклад ORDRSP<Silpo_XML/examples/ORDRSP.json>`

---------

Повідомлення про відвантаження (DESADV)
===============================================

.. csv-table:: **Повідомлення про відвантаження (DESADV)** відправляє постачальник у відповідь на **Замовлення (ORDER)**. При цьому постачальник може змінити кількість замовлених товарних позицій, що поставляються, дату і час поставки, додаткові відомості. Даний документ є аналогом товарно-транспортної накладної (ТТН)
  :file: Silpo_XML/files/DESADV.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад DESADV<Silpo_XML/examples/DESADV.xml>`

:download:`JSON-Приклад DESADV<Silpo_XML/examples/DESADV.json>`

---------

Повідомлення про прийом (RECADV)
===============================

.. csv-table:: **Повідомлення про прийом (RECADV)** використовується для оповіщення постачальників про прийом товарів. Даний документ інформує про кількість отриманих товарних позицій і може вказувати на розбіжності між фактично отриманим товаром і зазначеним у документації.
  :file: Silpo_XML/files/RECADV.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад RECADV<Silpo_XML/examples/RECADV.xml>`

:download:`JSON-Приклад RECADV<Silpo_XML/examples/RECADV.json>`

---------

Інструкція з транспортування (IFTMIN)
==============================================

.. csv-table:: Інструкція з транспортування (IFTMIN) відправляється замовником оператору логістичних послуг. В даному документі вказуються остаточні деталі поставки
  :file: Silpo_XML/files/IFTMIN.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад IFTMIN<Silpo_XML/examples/IFTMIN_example.xml>`

:download:`JSON-Приклад IFTMIN<Silpo_XML/examples/IFTMIN.json>`

---------

Акт невідповідності (COMDOC_009)
==============================================

.. csv-table:: Акт невідповідності (COMDOC_009)
  :file: Silpo_XML/files/COMDOC_009.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

.. include:: units_comdoc.rst

:download:`XML-Приклад COMDOC_009<Silpo_XML/examples/COMDOC_009.xml>`

:download:`JSON-Приклад COMDOC_009<Silpo_XML/examples/COMDOC_009.json>`

---------

Звіт про відвантаження (CONTRL)
=============================================

.. csv-table:: Звіт про відвантаження (CONTRL) являється завершаючим документом в логіці документообігу з ТМ Сільпо - відправляється постачальником у відповідь на RECADV (Повідомлення про прийом)
  :file: Silpo_XML/files/CONTRL.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

:download:`XML-Приклад CONTRL<Silpo_XML/examples/CONTRL.xml>`

:download:`JSON-Приклад CONTRL<Silpo_XML/examples/CONTRL.json>`

.. сеть запретила следующий документ
  Накладна за кількістю (DOCUMENTINVOICE)
  =============================================

  .. csv-table:: Накладна за кількістю (DOCUMENTINVOICE)
    :file: Silpo_XML/files/DOCUMENTINVOICE.csv
    :widths:  40, 7, 12, 41
    :header-rows: 1

  :download:`Приклад DOCUMENTINVOICE<Silpo_XML/examples/DOCUMENTINVOICE_example_f.xml>`

.. include:: /ClientProcesses/Fozzy/Fozzy_XML-structure.rst
   :start-after: .. початок блоку для specs_for_Silpo
   :end-before: .. кінець блоку для specs_for_Silpo

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
