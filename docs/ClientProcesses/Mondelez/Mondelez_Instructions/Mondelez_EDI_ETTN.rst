########################################################################################################################
Документообіг з ПрАТ "Монделіс Україна" на платформі EDI Network 2.0
########################################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. |pencil_stencil| image:: /_constant/icons/pencil_stencil.png

.. |лупа2| image:: /_constant/icons/magnifying_glass2.png

.. role:: red

.. role:: underline

.. contents:: Зміст:
   :depth: 5

---------

Вступ
====================================

Дана інструкція описує порядок документообігу з ПрАТ "Монделіс Україна" на платформі EDI Network 2.0. В типовому документообігу з ПрАТ "Монделіс Україна" приймають участь наступні документи:

- `Замовлення (ORDER) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x.html>`__
- `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDRSP_x.html>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DESADV_x.html>`__
- `Заявка на транспортування (TRANSPORTATIONORDER з SUBDOCTYPE=1) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__
- `Підтвердження заявки на транспортування (TRANSPORTATIONORDER з SUBDOCTYPE=2) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__
- `Електронна товарно-транспортна накладна (е-ТТН) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__
- `Рахунок (Логістика) (COMDOC_040) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_040_x.html>`__
- `Акт виконаних робіт (Логістика) (COMDOC_037) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_037_x.html>`__

Документообіг здійснюється між трьома Учасниками, де ініціатором виступає Постачальник-Вантажоодержувач.

**Загальна схема документообігу:**

.. image:: pics_Mondelez_EDI_ETTN/Mondelez_EDI_ETTN_003.png
   :height: 700px
   :align: center

.. important:: 
   За документообігу з "зовнішніми" учасниками при створенні документів на стороні ПрАТ "Монделіс Україна" в якості **замовника** / **відправника** документа зазначається основний **GLN=4829900033484** компанії!

.. attention::
   Якщо в процесі обробки "е-ТТН" створюється і затверджується "Акт перевантаження" (ReloadAct) чи "Акт про заміну пункту призначення вантажу" (ConsigneeChangeAct), то для внесення змін до кінцевого "Акту виконаних робіт" (COMDOC_037) ПрАТ "Монделіс Україна" створює новий документ "Заявка на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE=1) і схема матиме наступний вигляд:

   .. image:: pics_Mondelez_EDI_ETTN/Mondelez_EDI_ETTN_004.png
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

2 Створення та відправка "Замовлення" (ORDER) Покупцем-Вантажоодержувачем
==============================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_ORDER_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Order_from_zero
   :end-before: .. кінець блоку для Order_from_zero

.. _ordrsp-create:

3 Створення та відправка "Підтвердження замовлення" (ORDRSP) ПрАТ "Монделіс Україна"
==============================================================================================================

.. include:: /retail_2.0/ORDRSP_na_EDI_Network.rst
   :start-after: .. початок блоку для Ordrsp_from_docs
   :end-before: .. кінець блоку для Ordrsp_from_docs

.. _desadv-create:

4 Створення та відправка "Повідомлення про відвантаження" (DESADV) ПрАТ "Монделіс Україна"
==============================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Order
   :end-before: .. кінець блоку для Desadv_from_Order

.. _proposal-create:

5 Створення та відправка "Заявки на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE = 1) ПрАТ "Монделіс Україна"
==========================================================================================================================

.. include:: /ETTN_3_0/Create_Proposal_from.rst
   :start-after: .. початок блоку для Proposal_from_Order
   :end-before: .. кінець блоку для Proposal_from_Order

.. _proposal-confirmation-create:

6 Створення та відправка "Підтвердження заявки на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE = 2) Перевізником
==========================================================================================================================

.. include:: /ETTN_3_0/Create_Proposal_Confirmation_from.rst
   :start-after: .. початок блоку для Proposal_Confirmation_from_Proposal
   :end-before: .. кінець блоку для Proposal_Confirmation_from_Proposal

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_EDI_ETTN.html#sign>`__.

.. include:: /ETTN_3_0/Create_Proposal_Confirmation_from.rst
   :start-after: .. початок блоку для Proposal_Confirmation_from_Proposal2
   :end-before: .. кінець блоку для Proposal_Confirmation_from_Proposal2

.. _ettn-create:

7 Створення та відправка "е-ТТН" ПрАТ "Монделіс Україна"
==========================================================================================================================

.. include:: /ETTN_3_0/Create_ETTN_from.rst
   :start-after: .. початок блоку для ETTN_from_Proposal_Confirmation
   :end-before: .. кінець блоку для ETTN_from_Proposal_Confirmation

.. _ettn-to-processing:

8 Обробка вхідного "е-ТТН" документа на стороні Перевізника (Водія)
==========================================================================================================================

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Consignor_to_Carrier
   :end-before: .. кінець блоку для from_Consignor_to_Carrier

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_EDI_ETTN.html#sign>`__.

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Consignor_to_Carrier2
   :end-before: .. кінець блоку для from_Consignor_to_Carrier2

.. _ettn-to-processing2:

9 Обробка вхідного "е-ТТН" документа на стороні Вантажоодержувача
==========================================================================================================================

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Carrier_to_Consignee
   :end-before: .. кінець блоку для from_Carrier_to_Consignee

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_EDI_ETTN.html#sign>`__.

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Carrier_to_Consignee2
   :end-before: .. кінець блоку для from_Carrier_to_Consignee2

.. _comdoc040-create:

10 Створення та відправка "Рахунок (Логістика)" (COMDOC_040) Перевізником
==========================================================================================================================

За документообігу транспортними документами без коригуючих актів "Рахунок (Логістика)" (COMDOC_040) створюється на підставі відправленого "Підтвердження заявки на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE = 2). Однак, якщо в процесі обробки "е-ТТН" створювалися і затверджувалися "Акт перевантаження" (ReloadAct) чи "Акт про заміну пункту призначення вантажу" (ConsigneeChangeAct), то для внесення змін до кінцевого "Рахунку (Логістика)" (COMDOC_040) ПрАТ "Монделіс Україна" створює новий документ "Заявка на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE=1), на підставі якого і створюється "Рахунок (Логістика)" (COMDOC_040).

**Перевізнику** для створення в сервісі "EDI Network" **"Рахунку (Логістика)" (COMDOC_040)** :

* :underline:`на підставі "Заявки на транспортування"` потрібно перейти у **"Вхідні"** та вибрати "Заявку на транспортування" в статусі :green:`"Підписано перевізником"` (для зручності можливо скористатись рядком `пошуку <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__);
* :underline:`на підставі "Підтвердження заявки на транспортування"` потрібно перейти у **"Надіслані"** та вибрати "Підтвердження заявки на транспортування" в статусі :green:`"Підписано замовником"` (для зручності можливо скористатись рядком `пошуку <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ETTN_3_0/pics_Create_COMDOC_040_from/Create_COMDOC_040_from_001.png
   :align: center

.. hint::
   Також на підставі :underline:`підписаних з обох сторін` "Заявок на транспортування", "Підтверджень заявок на транспортування" та  :underline:`підписаних контрагентами (з трьох сторін)` "е-ТТН" доступне `масове створення чернеток "Рахунків (Логістика)" <https://wiki.edin.ua/uk/latest/general_2_0/massovi_operacii_EDIN_2.0.html#create-comdoc-037>`__.

У відкритому документі натисніть **"Створити документ"** "Рахунок (Логістика)" в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__, наприклад:

.. image:: /ETTN_3_0/pics_Create_COMDOC_040_from/Create_COMDOC_040_from_002.png
   :align: center

.. image:: /ETTN_3_0/pics_Create_COMDOC_040_from/Create_COMDOC_040_from_011.png
   :align: center

.. include:: /ETTN_3_0/Create_COMDOC_040_from.rst
   :start-after: .. початок блоку для COMDOC_040_from_transport_001
   :end-before: .. кінець блоку для COMDOC_040_from_transport_001

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_EDI_ETTN.html#sign>`__.

.. include:: /ETTN_3_0/Create_COMDOC_040_from.rst
   :start-after: .. початок блоку для COMDOC_040_from_transport_003
   :end-before: .. кінець блоку для COMDOC_040_from_transport_002

.. _comdoc037-create:

11 Створення та відправка "Акта виконаних робіт (Логістика)" (COMDOC_037) Перевізником
==========================================================================================================================

"Акт виконаних робіт (Логістика)" (COMDOC_037) може створюватись на підставі різних документів, але в даній схемі від ПрАТ "Монделіс Україна" логічно формується за відправленим "Рахунком (Логістика)" (COMDOC_040).

**Перевізнику** для створення в сервісі "EDI Network" **"Акта виконаних робіт (Логістика)"** :underline:`на підставі "Рахунку (Логістика)"` потрібно перейти у **"Надіслані"** та вибрати відправлений "Рахунок (Логістика)" (COMDOC_040) (для зручності можливо скористатись рядком `пошуку <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ClientProcesses/Mondelez/Mondelez_Instructions/pics_Mondelez_EDI_ETTN/Mondelez_EDI_ETTN_005.png
   :align: center

.. hint::
   Також на підставі :underline:`підписаних з обох сторін` "Заявок на транспортування", "Підтверджень заявок на транспортування" та :underline:`підписаних контрагентами (з трьох сторін)` "е-ТТН" доступне `масове створення чернеток "Актів виконаних робіт (Логістика)" <https://wiki.edin.ua/uk/latest/general_2_0/massovi_operacii_EDIN_2.0.html#create-comdoc-037>`__. 

У відкритому документі натисніть **"Створити документ"** "Акт виконаних робіт (Логістика)" в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__, наприклад:

.. image:: /ClientProcesses/Mondelez/Mondelez_Instructions/pics_Mondelez_EDI_ETTN/Mondelez_EDI_ETTN_007.png
   :align: center

.. include:: /ETTN_3_0/Create_COMDOC_037_from.rst
   :start-after: .. початок блоку для COMDOC_037_from_transport_001
   :end-before: .. кінець блоку для COMDOC_037_from_transport_001

.. hint::
   Процес підписання документа не відрізняється від підписання описаного в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Mondelez/Mondelez_Instructions/Mondelez_EDI_ETTN.html#sign>`__.

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
