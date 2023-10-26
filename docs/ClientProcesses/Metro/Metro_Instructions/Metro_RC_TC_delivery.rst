###########################################################################################################################################
Постачання на РЦ та ТЦ. Інструкція для Постачальників мережі "МЕТРО"
###########################################################################################################################################

.. role:: red

.. role:: green

.. role:: orange

.. role:: underline

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. contents:: Зміст:
   :depth: 2

---------

Вступ
==============================================================

Дана інструкція описує порядок роботи з документами за схемою постачання на РЦ та ТЦ мережі "МЕТРО Кеш енд Кері Україна" для Постачальників на web-платформі EDIN 2.0.

В документообігу приймають участь наступні документи:

- `Замовлення (ORDERS) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#order>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#desadv>`__
- `Транспортна накладна (DOCUMENTINVOICE.DocumentFunctionCode = TNN) <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_XML-structure.html#documentinvoice-tnn>`__
- `Заявка на транспортування (TRANSPORTATIONORDER з SUBDOCTYPE=1) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__
- `Підтвердження заявки на транспортування (TRANSPORTATIONORDER з SUBDOCTYPE=2) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__
- `Електронна товарно-транспортна накладна (е-ТТН) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__
- `Повідомлення про прийом (RECADV) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#recadv>`__
- `Товарна накладна (DOCUMENTINVOICE.DocumentFunctionCode = TN) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#documentinvoice>`__
- `Податкова накладна (DECLAR) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#declar>`__

Додатково в документообігу можуть приймати участь:

- `Акт перевантаження <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/RELOAD_ACT/RELOAD_ACTpage_v3.html>`__
- `Акт розбіжностей про вантаж <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/DISAGREEMENT_ACT/DISAGREEMENT_ACTpage_v3.html>`__
- `Акт розбіжностей до транспортної накладної (DOCUMENTINVOICE.DocumentFunctionCode = DTN) <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_XML-structure.html#documentinvoice-dtn>`__
- `Коригування до товарної накладної (DOCCORINVOICE) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#doccorinvoice>`__
- `Коригування до податкової накладної (DECLARj12) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#declarj12>`__

**Загальна схема документообігу:**

.. image:: /ClientProcesses/Metro/Metro_Instructions/pics_Metro_RC_TC_delivery/Metro_RC_TC_delivery_001.png
   :align: center

**1 Вхід на платформу**
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

**2 Формування "Повідомлення про відвантаження" (DESADV) на підставі вхідного "Замовлення" (ORDER)**
====================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Order
   :end-before: .. кінець блоку для Desadv_from_Order

**3 Формування "Транспортної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) на підставі надісланого "Повідомлення про відвантаження" (DESADV)**
=================================================================================================================================================================================================

.. include:: /retail_2.0/Create_DOCUMENTINVOICE_TNN_from.rst
   :start-after: .. початок блоку для DOCUMENTINVOICE_TNN_from_DESADV_001
   :end-before: .. кінець блоку для DOCUMENTINVOICE_TNN_from_DESADV_001

.. _sign:

3.1 Підписання та відправка "Транспортної накладної"
--------------------------------------------------------------------------------------------------

.. include:: /retail_2.0/Create_DOCUMENTINVOICE_TNN_from.rst
   :start-after: .. початок блоку для DOCUMENTINVOICE_TNN_from_DESADV_002
   :end-before: .. кінець блоку для DOCUMENTINVOICE_TNN_from_DESADV_002

**4 Формування "Заявки на транспортування" на підставі "Замовлення" (ORDER)**
================================================================================================

.. include:: /ETTN_3_0/Create_Proposal_from.rst
   :start-after: .. початок блоку для Proposal_from_Order
   :end-before: .. кінець блоку для Proposal_from_Order

**5 Формування "е-ТТН" на підставі "Підтвердження заявки на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE = 2)**
===============================================================================================================================

.. include:: /ETTN_3_0/Create_ETTN_from.rst
   :start-after: .. початок блоку для ETTN_from_Proposal_Confirmation
   :end-before: .. кінець блоку для ETTN_from_Proposal_Confirmation

**6 Формування "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN) на підставі вхідного "Повідомлення про прийом" (RECADV)**
====================================================================================================================

.. include:: /retail_2.0/Create_DOCUMENTINVOICE_TN_from.rst
   :start-after: .. початок блоку для DOCUMENTINVOICE_TN_from_RECADV_001
   :end-before: .. кінець блоку для DOCUMENTINVOICE_TN_from_RECADV_001

Підписання відбувається аналогічно до підписання будь-якого іншого документа на платформі та вже описане в розділі `вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_Instructions/Metro_RC_TC_delivery.html#sign>`__.

.. include:: /retail_2.0/Create_DOCUMENTINVOICE_TN_from.rst
   :start-after: .. початок блоку для DOCUMENTINVOICE_TN_from_RECADV_003
   :end-before: .. кінець блоку для DOCUMENTINVOICE_TN_from_RECADV_002

**7 Формування "Податкової накладної" (DECLAR) на підставі надісланої "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN)**
====================================================================================================================

.. include:: /retail_2.0/Create_DECLAR_from.rst
   :start-after: .. початок блоку для DECLAR_from_DOCUMENTINVOICE_TN_001
   :end-before: .. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_001

Підписання відбувається аналогічно до підписання будь-якого іншого документа на платформі та вже описане в розділі `вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_Instructions/Metro_RC_TC_delivery.html#sign>`__.

.. include:: /retail_2.0/Create_DOCUMENTINVOICE_TN_from.rst
   :start-after: .. початок блоку для DECLAR_from_DOCUMENTINVOICE_TN_003
   :end-before: .. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_002

**8 Формування "Коригування товарної накладної" (DOCCORINVOICE) на підставі надісланої "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN)**
====================================================================================================================

У випадку коли Постачальник чи Мережа знайшли помилки в підписаній "Товарній накладній" (DOCUMENTINVOICE), Постачальнику потрібно формувати "Коригування до товарної накладної" (DOCCORINVOICE).

.. include:: /retail_2.0/Create_DOCCORINVOICE_from.rst
   :start-after: .. початок блоку для DOCCORINVOICE_from_DOCUMENTINVOICE_TN_001
   :end-before: .. кінець блоку для DOCCORINVOICE_from_DOCUMENTINVOICE_TN_001

Підписання відбувається аналогічно до підписання будь-якого іншого документа на платформі та вже описане в розділі `вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_Instructions/Metro_RC_TC_delivery.html#sign>`__.

.. include:: /retail_2.0/Create_DOCCORINVOICE_from.rst
   :start-after: .. початок блоку для DOCCORINVOICE_from_DOCUMENTINVOICE_TN_003
   :end-before: .. кінець блоку для DOCCORINVOICE_from_DOCUMENTINVOICE_TN_002

Мережа "МЕТРО" зі своєї сторони обробляє документ та надає їм статуси:

- «**Документ переданий партнеру**» - товарна накладна коректна.
- «**Документ переданий на ящик партнера**» - товарна накладна коректна.
- «**Правильний канал не знайдено. Немає з'єднання з партнером**» - в товарній накладній зазначений некоректний GLN одержувача і покупця.
- «**Помилка конвертації на вихідний формат**» - є помилка у формі заповнення товарної накладної. Деякі поля були не заповнені або заповнені некоректно.

**9 Формування "Коригування до податкової накладної" (DECLARj12) на підставі надісланоuj "Коригування товарної накладної" (DOCCORINVOICE)**
====================================================================================================================

.. include:: /retail_2.0/Create_DECLARj12_from.rst
   :start-after: .. початок блоку для DECLARj12_from_DOCCORINVOICE_001
   :end-before: .. кінець блоку для DECLARj12_from_DOCCORINVOICE_001

Підписання відбувається аналогічно до підписання будь-якого іншого документа на платформі та вже описане в розділі `вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_Instructions/Metro_RC_TC_delivery.html#sign>`__.

.. include:: /retail_2.0/Create_DECLARj12_from.rst
   :start-after: .. початок блоку для DECLARj12_from_DOCCORINVOICE_003
   :end-before: .. кінець блоку для DECLARj12_from_DOCCORINVOICE_002

---------------------------------

.. include:: /_constant/kontakti.rst
