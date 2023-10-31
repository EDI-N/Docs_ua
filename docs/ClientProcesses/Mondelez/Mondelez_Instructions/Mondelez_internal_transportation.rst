########################################################################################################################
Документообіг на платформі EDI Network 2.0 при внутрішніх перевезеннях ПрАТ "Монделіс Україна"
########################################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. |pencil_stencil| image:: /_constant/icons/pencil_stencil.png

.. |лупа2| image:: /_constant/icons/magnifying_glass2.png

.. role:: red

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 5

---------

Вступ
====================================

Дана інструкція описує порядок документообігу на платформі EDI Network 2.0 при внутрішніх перевезеннях ПрАТ "Монделіс Україна". В типовому документообігу з ПрАТ "Монделіс Україна" приймають участь наступні документи:

- `Замовлення (ORDER) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#order>`__
- `Заявка на транспортування (TRANSPORTATIONORDER з SUBDOCTYPE=1) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__
- `Підтвердження заявки на транспортування (TRANSPORTATIONORDER з SUBDOCTYPE=2) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__
- `Накладна на переміщення (COMDOC_022) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#comdoc-022>`__
- `Електронна товарно-транспортна накладна (е-ТТН) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__
- `Акт виконаних робіт (Логістика) (COMDOC_037) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#comdoc-037>`__

Документообіг здійснюється між трьома Учасниками, де ініціатором виступає Вантажоодержувач на стороні ПрАТ "Монделіс Україна".

**Загальна схема документообігу:**

.. image:: pics_Mondelez_internal_transportation/Mondelez_internal_transportation_001.png
   :height: 700px
   :align: center

1 Вхід на платформу
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

.. _order-create:

2 Створення та відправка "Замовлення" (ORDER) Вантажоодержувачем (склад/відділеня ПрАТ "Монделіс Україна")
==============================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_ORDER_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Order_from_zero
   :end-before: .. кінець блоку для Order_from_zero

.. _proposal-create:

3 Створення та відправка "Заявки на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE = 1) ПрАТ "Монделіс Україна"
==========================================================================================================================

.. include:: /ETTN_3_0/Create_Proposal_from.rst
   :start-after: .. початок блоку для Proposal_from_Order
   :end-before: .. кінець блоку для Proposal_from_Order

.. _proposal-confirmation-create:

4 Створення та відправка "Підтвердження заявки на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE = 2) Перевізником
==========================================================================================================================

.. include:: /ETTN_3_0/Create_Proposal_Confirmation_from.rst
   :start-after: .. початок блоку для Proposal_Confirmation_from_Proposal
   :end-before: .. кінець блоку для Proposal_Confirmation_from_Proposal

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_internal_transportation.html#sign>`__.

.. include:: /ETTN_3_0/Create_Proposal_Confirmation_from.rst
   :start-after: .. початок блоку для Proposal_Confirmation_from_Proposal2
   :end-before: .. кінець блоку для Proposal_Confirmation_from_Proposal2

.. _comdoc-022-create:

5 Підписання "Накладної на переміщення" (COMDOC_022) між складами ПрАТ "Монделіс Україна"
==========================================================================================================================

5.1 Відправка "Накладної на переміщення" (COMDOC_022)
----------------------------------------------------------------------------------------------------------------------------

Документ "Накладна на переміщення" (COMDOC_022) підвантажується через облікову систему ПрАТ "Монделіс Україна" на платфому EDI Network 2.0 та доступний до перевірки та редагування відповідальним працівником:

.. image:: pics_Mondelez_internal_transportation/Mondelez_internal_transportation_002.png
   :align: center

Після редагування документ потрібно **"Зберегти"** (1), **"Підписати"** (2) та **"Відправити"** (3):

.. image:: pics_Mondelez_internal_transportation/Mondelez_internal_transportation_003.png
   :align: center

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_internal_transportation.html#sign>`__.

Після відправки документа контрагенту він відображається в журналі вихідних документів в статусі :orange:`"Очікує на підписання отримувачем"`:

.. image:: pics_Mondelez_internal_transportation/Mondelez_internal_transportation_004.png
   :align: center

5.2 Обробка вхідної "Накладної на переміщення" (COMDOC_022)
----------------------------------------------------------------------------------------------------------------------------

Документ "Накладна на переміщення" (COMDOC_022) знаходиться у папці **"Вхідні"** (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: pics_Mondelez_internal_transportation/Mondelez_internal_transportation_005.png
   :align: center

Для продовження документообігу потрібно **"Підписати і відправити у відповідь"** вхідний документ:

.. image:: pics_Mondelez_internal_transportation/Mondelez_internal_transportation_006.png
   :align: center

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_internal_transportation.html#sign>`__.

Після підписання документ змінює свій статус на :green:`"Підписано двома сторонами"`.

.. note::
   У випадку невідповідностей чи змінах в перевезеннях можливо оформити типову для комерціних документів **"Відмову від підписання"** (`детальніше <https://wiki.edin.ua/uk/latest/_constant/comdoc_reject/comdoc_reject.html>`__):

   .. image:: pics_Mondelez_internal_transportation/Mondelez_internal_transportation_007.png
      :align: center

.. _ettn-create:

6 Створення та відправка "е-ТТН" Вантажовідправником (склад ПрАТ "Монделіс Україна)"
==========================================================================================================================

.. include:: /ETTN_3_0/Create_ETTN_from.rst
   :start-after: .. початок блоку для ETTN_from_Proposal_Confirmation
   :end-before: .. кінець блоку для ETTN_from_Proposal_Confirmation

.. _ettn-to-processing:

7 Обробка вхідного "е-ТТН" документа на стороні Перевізника (Водія)
==========================================================================================================================

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Consignor_to_Carrier
   :end-before: .. кінець блоку для from_Consignor_to_Carrier

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_internal_transportation.html#sign>`__.

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Consignor_to_Carrier2
   :end-before: .. кінець блоку для from_Consignor_to_Carrier2

.. _ettn-to-processing2:

8 Обробка вхідного "е-ТТН" документа на стороні Вантажоодержувача (склад ПрАТ "Монделіс Україна)
==========================================================================================================================

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Carrier_to_Consignee
   :end-before: .. кінець блоку для from_Carrier_to_Consignee

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_internal_transportation.html#sign>`__.

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Carrier_to_Consignee2
   :end-before: .. кінець блоку для from_Carrier_to_Consignee2

.. _comdoc037-create:

10 Створення та відправка "Акта виконаних робіт (Логістика)" (COMDOC_037) Перевізником
==========================================================================================================================

За документообігу транспортними документами без коригуючих актів "Акт виконаних робіт (Логістика)" (COMDOC_037) створюється на підставі відправленого "Підтвердження заявки на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE = 2). Однак, якщо в процесі обробки "е-ТТН" створювалися і затверджувалися "Акт перевантаження" (ReloadAct) чи "Акт про заміну пункту призначення вантажу" (ConsigneeChangeAct), то для внесення змін до кінцевого "Акту виконаних робіт" (COMDOC_037) ПрАТ "Монделіс Україна" створює новий документ "Заявка на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE=1), на підставі якого і створюється "Акт виконаних робіт (Логістика)" (COMDOC_037).

**Перевізнику** для створення в сервісі "EDI Network" **"Акта виконаних робіт (Логістика)"** :

* :underline:`на підставі "Заявки на транспортування"` потрібно перейти у **"Вхідні"** та вибрати "Заявку на транспортування" в статусі :green:`"Підписано перевізником"` (для зручності можливо скористатись рядком `пошуку <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__);
* :underline:`на підставі "Підтвердження заявки на транспортування"` потрібно перейти у **"Надіслані"** та вибрати "Підтвердження заявки на транспортування" в статусі :green:`"Підписано замовником"` (для зручності можливо скористатись рядком `пошуку <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ETTN_3_0/pics_Create_COMDOC_037_from/Create_COMDOC_037_from_001.png
   :align: center

.. hint::
   Також на підставі :underline:`підписаних з обох сторін` "Заявок на транспортування", "Підтверджень заявок на транспортування" та  :underline:`підписаних контрагентами (з трьох сторін)` "е-ТТН" доступне `масове створення чернеток "Актів виконаних робіт (Логістика)" <https://wiki.edin.ua/uk/latest/general_2_0/massovi_operacii_EDIN_2.0.html#create-comdoc-037>`__. 

У відкритому документі натисніть **"Створити документ"** "Акт виконаних робіт (Логістика)" в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__, наприклад:

.. image:: /ETTN_3_0/pics_Create_COMDOC_037_from/Create_COMDOC_037_from_002.png
   :align: center

.. include:: /ETTN_3_0/Create_COMDOC_037_from.rst
   :start-after: .. початок блоку для COMDOC_037_from_transport_001
   :end-before: .. кінець блоку для COMDOC_037_from_transport_001

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_internal_transportation.html#sign>`__.

.. include:: /ETTN_3_0/Create_COMDOC_037_from.rst
   :start-after: .. початок блоку для COMDOC_037_from_transport_003
   :end-before: .. кінець блоку для COMDOC_037_from_transport_002

.. _notes:

Примітки для ПрАТ "Монделіс Україна"
==========================================================================================================================

Після підписання "Акта виконаних робіт (Логістика)" (COMDOC_037) ПрАТ "Монделіс Україна" доступне скачування комплекту документів, що поділений на 2 підкомплекти (2 окремих ZIP-архіва):

* дебіторська заборгованість ("Видаткова накладна" (COMDOC_006), "Акт приймання товару до видаткової накладної" (COMDOC_035), "е-ТТН", "Акт розбіжностей про вантаж" до ТТН)
* кредиторська заборгованість ("Заявка на транспортування", "Підтвердження заявки на транспортування", "е-ТТН", коригуючі акти до ТТН (всі крім "Акта розбіжностей про вантаж") , "Акт приймання-передачі (додаток 8)" (COMDOC_032), "Акт приймання-передачі (додаток 9)" (COMDOC_033), "Акт приймання товару до АПП" (COMDOC_034), "Акта виконаних робіт (Логістика)" (COMDOC_037), Рахунок (INVOICE)).

Архіви містять PDF, P7S, XML формати файлів (для кредиторської заборгованості всі PDF-файли "об'єднані" в один PDF-файл). Назви підкомплектів архівів відрізняються:

* для кредиторської заборгованості: назва перевізника з "Акта виконаних робіт (Логістика)" (COMDOC_037) + № "Акта виконаних робіт (Логістика)" (COMDOC_037);
* для дебіторської заборгованості: № "Заявки на транспортування".

Також після підписання "Акта виконаних робіт (Логістика)" (COMDOC_037) ПрАТ "Монделіс Україна" на FTP (у певний каталог) замовника відправляється ZIP-архів з комплектами документів. Додатково кожного дня надсилається звіт за попередню добу по надісланим "Актам виконаних робіт (Логістика)" (COMDOC_037).

------------------------------------------------

.. include:: /_constant/kontakti.rst
