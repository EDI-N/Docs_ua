########################################################################################################################
Документообіг за схемою "Епіцентр Online" на платформі EDI Network 2.0. Інструкція Постачальника
########################################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. |pencil_stencil| image:: /_constant/icons/pencil_stencil.png

.. |лупа2| image:: /_constant/icons/magnifying_glass2.png

.. |drag_dots| image:: /_constant/icons/drag_dots.png

.. |trash| image:: /_constant/icons/trash.png

.. |download| image:: /_constant/icons/download.png

.. role:: red

.. role:: underline

.. contents:: Зміст:
   :depth: 5

---------

Вступ
====================================

Дана інструкція описує порядок документообігу за схемою "Епіцентр Online" на платформі EDI Network 2.0. В типовому документообігу приймають участь наступні документи:

- `Резерв товару (PRDRSRVN) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/PRDRSRVN_x.html>`__
- `Замовлення (ORDER) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x.html>`__
- `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDRSP_x.html>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DESADV_x.html>`__
- `Видаткова накладна (DOCUMENTINVOICE_DRN) <https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_XML/DOCUMENTINVOICE_DRN_x.html>`__
- `Електронна товарно-транспортна накладна (е-ТТН) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__
- `Повідомлення про прийом (RECADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/RECADV_x.html>`__

- `Акт розбіжностей (DOCCORINVOICE) <https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_XML/DOCCORINVOICE_x.html>`__
- `Накладна на повернення (DOCUMENTINVOICE_NP) <https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_XML/DOCUMENTINVOICE_NP_x.html>`__

Документообіг здійснюється між трьома Учасниками, де ініціатором виступає Покупець-Вантажоодержувач (Мережа "Епіцентр").

**Загальна схема документообігу:**

.. image:: pics_Epicentr_Online/Epicentr_Online_002.png
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

.. _prdrsrvn-processing:

2 Обробка вхідного "Резерву товару" (PRDRSRVN) Постачальником
==============================================================================================================

.. include:: /retail_2.0/Processing_PRDRSRVN.rst
   :start-after: .. початок блоку для Processing_PRDRSRVN
   :end-before: .. кінець блоку для Processing_PRDRSRVN

За вказаними значеннями в "Резерві товару" (PRDRSRVN) Мережа формує та відправляє "Замовлення" (ORDER).

.. _ordrsp-create:

3 Створення та відправка "Підтвердження замовлення" (ORDRSP) на підставі вхідного "Замовлення" (ORDER)
==============================================================================================================

.. include:: /retail_2.0/ORDRSP_na_EDI_Network.rst
   :start-after: .. початок блоку для Ordrsp_from_docs
   :end-before: .. кінець блоку для Ordrsp_from_docs

.. _invoice-create:

4 Створення та відправка "Рахунку" (INVOICE) на підставі надісланого "Підтвердження замовлення" (ORDRSP)
==============================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Schetfaktura_INVOICE_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для INVOICE_standart
   :end-before: .. кінець блоку для INVOICE_standart

.. _desadv-create:

5 Створення та відправка "Повідомлення про відвантаження" (DESADV) на підставі надісланого "Підтвердження замовлення" (ORDRSP)
================================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Ordrsp
   :end-before: .. кінець блоку для Desadv_from_Ordrsp

.. _documentinvoice-drn-create:

6 Створення та відправка "Видаткової накладної" (DOCUMENTINVOICE_DRN) на підставі надісланого "Повідомлення про відвантаження" (DESADV)
===============================================================================================================================================

.. include:: /ClientProcesses/Epicentr/Epicentr_Instructions/Epicentr_Post_LC_Giper_crossdocking.rst
   :start-after: .. початок блоку для Documentinvoice_drn_from_Desadv_001
   :end-before: .. кінець блоку для Documentinvoice_drn_from_Desadv_001

.. _sign:

6.1 Підписання та відправка "Видаткової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = DRN)
--------------------------------------------------------------------------------------------------

.. include:: /ClientProcesses/Epicentr/Epicentr_Instructions/Epicentr_Post_LC_Giper_crossdocking.rst
   :start-after: .. початок блоку для Documentinvoice_drn_from_Desadv_002
   :end-before: .. кінець блоку для Documentinvoice_drn_from_Desadv_002

.. _ettn-create:

7 Створення та відправка "е-ТТН" на підставі надісланої "Видаткової накладної" (DOCUMENTINVOICE_DRN)
==========================================================================================================================

.. include:: /ETTN_3_0/Create_ETTN_from.rst
   :start-after: .. початок блоку для ETTN_from_documentinvoice_drn
   :end-before: .. кінець блоку для ETTN_from_documentinvoice_drn

.. important::
   Під час життєвого циклу "е-ТТН" може виникнути необхідність обробки супутнього "Акту розбіжності про вантаж". Після того, як "Епіцентр Online" НЕ знайде відміностей між фактичною поставкою та значеннями, вказаними в надісланій "Видатковій накладній" (DOCUMENTINVOICE_DRN) Мережа підписує "Видаткову накладну" (DOCUMENTINVOICE_DRN) та формує й відправляє "Повідомлення про прийом" (RECADV). Після цього документообіг вважається завершеним!

.. warning::
   Якщо "Епіцентр Online" помічає відмінності між фактичною поставкою та значеннями, вказаними в надісланій "Видатковій накладній" (DOCUMENTINVOICE_DRN), то Мережа НЕ підписує "Видаткову накладну" (DOCUMENTINVOICE_DRN), а відправляє "Акт розбіжностей до ВН" (DOCCORINVOICE_CVN), що потребує `підписання <https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_Instructions/Epicentr_Online.html#sign>`__ з Вашої сторони. Після того, як Ви підпишете "Акт розбіжностей до ВН" (DOCCORINVOICE_CVN) "Епіцентр Online" підписує зі своєї сторони "Видаткову накладну" (DOCUMENTINVOICE_DRN) та створює, підписує і відправляє "Накладну на повернення" (DOCUMENTINVOICE_NP). "Накладна на повернення" (DOCUMENTINVOICE_NP) також потребує `підписання <https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_Instructions/Epicentr_Online.html#sign>`__ з Вашої сторони. Документообіг завершується "Повідомленням про прийом" (RECADV) від "Епіцентр Online".

------------------------------------------------

.. include:: /_constant/kontakti.rst
