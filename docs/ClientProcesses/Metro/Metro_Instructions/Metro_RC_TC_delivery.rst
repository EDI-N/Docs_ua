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

- `Замовлення (ORDERS) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x.html>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DESADV_x.html>`__
- `Транспортна накладна (DOCUMENTINVOICE.DocumentFunctionCode = TNN) <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_XML/DOCUMENTINVOICE_TNN_x.html>`__
- `Заявка на транспортування (TRANSPORTATIONORDER з SUBDOCTYPE=1) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__
- `Підтвердження заявки на транспортування (TRANSPORTATIONORDER з SUBDOCTYPE=2) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3.html>`__
- `Електронна товарно-транспортна накладна (е-ТТН) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__
- `Повідомлення про прийом (RECADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/RECADV_x.html>`__
- `Товарна накладна (DOCUMENTINVOICE.DocumentFunctionCode = TN) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DOCUMENTINVOICE_x.html>`__
- `Податкова накладна (DECLAR) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DECLAR_x.html>`__

Додатково в документообігу можуть приймати участь:

- `Акт перевантаження <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/RELOAD_ACT/RELOAD_ACTpage_v3.html>`__
- `Акт розбіжностей про вантаж <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/DISAGREEMENT_ACT/DISAGREEMENT_ACTpage_v3.html>`__
- `Акт розбіжностей до транспортної накладної (DOCUMENTINVOICE.DocumentFunctionCode = DTN) <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_XML/DOCUMENTINVOICE_DTN_x.html>`__
- `Коригування до товарної накладної (DOCCORINVOICE) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DOCCORINVOICE_x.html>`__
- `Коригування до податкової накладної (DECLARj12) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DECLAR_x.htmlj12>`__

**Загальна схема документообігу:**

.. image:: /ClientProcesses/Metro/Metro_Instructions/pics_Metro_RC_TC_delivery/Metro_RC_TC_delivery_002.png
   :align: center

**1. Вхід на платформу**
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

**2. Формування "Повідомлення про відвантаження" (DESADV) на підставі вхідного "Замовлення" (ORDER)**
====================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Order
   :end-before: .. кінець блоку для Desadv_from_Order

**3. Формування "Транспортної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) на підставі надісланого "Повідомлення про відвантаження" (DESADV)**
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

**4. Формування "Заявки на транспортування" на підставі "Замовлення" (ORDER)**
================================================================================================

.. include:: /ETTN_3_0/Create_Proposal_from.rst
   :start-after: .. початок блоку для Proposal_from_Order
   :end-before: .. кінець блоку для Proposal_from_Order

**5. Формування "е-ТТН" на підставі "Транспортної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TNN)**
===============================================================================================================================

.. початок блоку для ETTN_from_DOCUMENTINVOICE_TNN

Для створення "е-ТТН" на підставі "Транспортної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) в сервісі "EDI Network" **Вантажовідправнику** потрібно перейти у **"Надіслані"** та вибрати «Транспортну накладну» (для зручності можливо скористатись рядком пошуку):

.. image:: /ClientProcesses/Metro/Metro_Instructions/pics_Metro_RC_TC_delivery/Metro_RC_TC_delivery_003.png
   :align: center

У відкритому документі натисніть **"Створити документ"** в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ "Товарно-транспортна накладна"(ETTN):

.. image:: /ClientProcesses/Metro/Metro_Instructions/pics_Metro_RC_TC_delivery/Metro_RC_TC_delivery_004.png
   :align: center

Відкриється форма редагування документа "е-ТТН", що вже заповнена даними з документа-підстави.

Дані, що переносяться з "Транспортної накладної" доступні до редагування.

.. note::
   Встановлена перевірка на унікальність номера товарно-транспортної накладної (ТТН) протягом календарного року.
   При спробі створити накладну з номером, який вже використаний у поточному році, буде виведено повідомлення про помилку.

.. image:: /ClientProcesses/Metro/Metro_Instructions/pics_Metro_RC_TC_delivery/Metro_RC_TC_delivery_005.png
   :align: center

Після того, як всі обов'язкові поля на формі редагування "е-ТТН" будуть заповнені (позначені червоною зірочкою :red:`*`) документ можливо **"Зберегти"**, **"Підписати"** та **"Надіслати"**. Процеси `заповнення/редагування даних чернетки "е-ТТН", підписання та відправка <https://wiki.edin.ua/uk/latest/ETTN_3_0/Create_ETTN.html#consignor-create>`__ детально описані в окремій інструкції.

.. кінець блоку для ETTN_from_DOCUMENTINVOICE_TNN

**6. Формування "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN) на підставі вхідного "Повідомлення про прийом" (RECADV)**
====================================================================================================================

.. include:: /retail_2.0/Create_DOCUMENTINVOICE_TN_from.rst
   :start-after: .. початок блоку для DOCUMENTINVOICE_TN_from_RECADV_001
   :end-before: .. кінець блоку для DOCUMENTINVOICE_TN_from_RECADV_001

Підписання відбувається аналогічно до підписання будь-якого іншого документа на платформі та вже описане в розділі `вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_Instructions/Metro_RC_TC_delivery.html#sign>`__.

.. include:: /retail_2.0/Create_DOCUMENTINVOICE_TN_from.rst
   :start-after: .. початок блоку для DOCUMENTINVOICE_TN_from_RECADV_003
   :end-before: .. кінець блоку для DOCUMENTINVOICE_TN_from_RECADV_002

**7. Формування "Податкової накладної" (DECLAR) на підставі надісланої "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN)**
====================================================================================================================

.. include:: /retail_2.0/Create_DECLAR_from.rst
   :start-after: .. початок блоку для DECLAR_from_DOCUMENTINVOICE_TN_001
   :end-before: .. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_001

Підписання відбувається аналогічно до підписання будь-якого іншого документа на платформі та вже описане в розділі `вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_Instructions/Metro_RC_TC_delivery.html#sign>`__.

.. include:: /retail_2.0/Create_DOCUMENTINVOICE_TN_from.rst
   :start-after: .. початок блоку для DECLAR_from_DOCUMENTINVOICE_TN_003
   :end-before: .. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_002

**8. Формування "Коригування товарної накладної" (DOCCORINVOICE) на підставі надісланої "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN)**
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

**9. Формування "Коригування до податкової накладної" (DECLARj12) на підставі надісланої "Коригування товарної накладної" (DOCCORINVOICE)**
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
