######################################################################################################################################
Схема документообігу "Постачальник" - "ЛЦ" - "Гіпермаркет" (cross docking) на платформі EDI Network 2.0. Інстукція Постачальника
######################################################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. role:: red

.. role:: orange

.. contents:: Зміст:
   :depth: 2

---------

Вступ
====================================

Дана інструкція описує порядок документообігу Постачальника з мережею "Епіцентр" ("ЛЦ" - "Гіпермаркет") та Перевізників на платформі EDI Network 2.0. В документообігу приймають участь наступні документи:

- `Замовлення (ORDERS) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x.html>`__
- `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDRSP_x.html>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DESADV_x.html>`__
- `Видаткова накладна (DOCUMENTINVOICE_DRN) <https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_XML/DOCUMENTINVOICE_DRN_x.html>`__
- `Акт приймання-передачі (DOCUMENTINVOICE_APP) <https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_XML/DOCUMENTINVOICE_APP_x.html>`__
- `Електронна товарно-транспортна накладна (е-ТТН) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__
- `Акт розбіжностей про вантаж (DisagreementAct) <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/DISAGREEMENT_ACT/DISAGREEMENT_ACTpage_v3.html>`__
- `Акт розбіжностей (DOCCORINVOICE) <https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_XML/DOCCORINVOICE_x.html>`__
- `Повідомлення про прийом (RECADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/RECADV_x.html>`__

**Загальна схема документообігу:**

.. image:: pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_001.png
   :height: 700px
   :align: center

.. початок блоку для From_crossdocking_to_bulk

1 Вхід на платформу
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

.. _ordrsp-create:

2 Створення та відправка «Підтвердження замовлення» (ORDRSP) на підставі вхідного «Замовлення» (ORDERS)
==============================================================================================================

.. include:: /retail_2.0/ORDRSP_na_EDI_Network.rst
   :start-after: .. початок блоку для Ordrsp_from_docs
   :end-before: .. кінець блоку для Ordrsp_from_docs

.. _desadv-create:

3 Створення та відправка "Повідомлення про відвантаження" (DESADV) на підставі надісланого «Підтвердження замовлення» (ORDRSP)
==================================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Ordrsp
   :end-before: .. кінець блоку для Desadv_from_Ordrsp

.. _documentinvoice-drn-create:

4 Створення та відправка "Видаткової накладної" (DOCUMENTINVOICE_DRN) на підставі надісланого "Повідомлення про відвантаження" (DESADV)
================================================================================================================================================

.. початок блоку для Documentinvoice_drn_from_Desadv_001

"Видаткова накладна" (DOCUMENTINVOICE.DocumentFunctionCode = DRN) може бути сформована на підставі надісланого "Повідомлення про відвантаження" (DESADV). Для формування "Видаткової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = DRN) потрібно перейти в папку **"Надіслані"** та обрати документ-підставу (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_002.png
   :align: center

Для формування "Видаткової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = DRN) натисніть **"Створити документ"** в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__:

.. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_003.png
   :align: center

При цьому автоматично відкривається форма "Видаткової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = DRN):

.. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_004.png
   :align: center

У відкритій формі "Видаткової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = DRN) майже всі поля документа можуть бути заповнені автоматично з пов'язаного документа-підстави та `Товарного довідника <https://wiki.edin.ua/uk/latest/general_2_0/Directories.html#goods-directory>`__ (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`).

.. include:: /ClientProcesses/BOX_Market/BOX_Market_Instructions/BOX_Market_Standard.rst
   :start-after: .. початок блоку для ForAllDOCUMENTINVOICE
   :end-before: .. кінець блоку для ForAllDOCUMENTINVOICE

Про необхідність заповнення та інші помилки в табличній частині документа Ви будете проінформовані (вказується номер позиції та невідповідність), а також рядок позиції виділяється помаранчевим кольором:

.. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_006.png
   :align: center

.. hint::
   Табличне значення поля "Код категорії ПДВ" залежить від "Ставки ПДВ":

   * якщо "Ставка ПДВ"= 20 / 19 / 16 / 14 / 7 / 2 %, то "Код категорії ПДВ"=Стандартний;
   * якщо "Ставка ПДВ"= 0%, то "Код категорії ПДВ"=Нульовий або Звільнений (від податку).

   .. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_005.png
      :align: center

Для внесення змін (коригування) в позиції потрібно натиснути на штрихкод позиції:

.. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_007.png
   :align: center

Якщо по якійсь з позицій не буде поставки її необхідно відзначити галочкою і **"Видалити"** (повернути видалені позиції можливо за допомогою кнопки **"+Додати"**):

.. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_008.png
   :align: center

Після внесення всіх необхідних змін в документ потрібно натиснути кнопку **"Зберегти"** (1), після чого можливо **"Підписати"** (2):

.. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_009.png
   :align: center

.. кінець блоку для Documentinvoice_drn_from_Desadv_001

.. _підписати:

.. _sign:

4.1 Підписання та відправка "Видаткової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = DRN)
--------------------------------------------------------------------------------------------------

.. початок блоку для Documentinvoice_drn_from_Desadv_002

.. tabs::

   .. tab:: Файловий ключ

      .. include:: /_constant/signing/signing.rst
         :start-after: .. початок блоку для Signing
         :end-before: .. кінець блоку для Signing

   .. tab:: Token

      .. include:: /_constant/token_signing/token_signing.rst
         :start-after: .. початок блоку для TokenSign
         :end-before: .. кінець блоку для TokenSign

   .. tab:: Гряда

      .. include:: /_constant/gryada_signing/gryada_signing.rst
         :start-after: .. початок блоку для GryadaSign
         :end-before: .. кінець блоку для GryadaSign

   .. tab:: Cloud

      .. include:: /_constant/cloud_signing/cloud_signing.rst
         :start-after: .. початок блоку для CloudSign
         :end-before: .. кінець блоку для CloudSign

Після підписання "Видаткової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = DRN) документ потрібно **"Відправити"**:

.. image:: /ClientProcesses/Epicentr/Epicentr_Instructions/pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_010.png
   :align: center

Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходитись в `ланцюжку документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ разом із пов'язаними документами. "Гіпермаркет" Епіцентр зі своєї сторони переглядає та підписує документ.

.. кінець блоку для Documentinvoice_drn_from_Desadv_002

.. кінець блоку для From_crossdocking_to_bulk

.. _documentinvoice-app-create:

5 Створення та відправка "Акта приймання-передачі" (DOCUMENTINVOICE_APP)
====================================================================================

Створення "Акта приймання-передачі" (DOCUMENTINVOICE_APP) відбувається в системі "Dock Planning" (Епіцентр), де й відбувається наповнення документа усією необхідною інформацією. Після створення "Акта приймання-передачі" (DOCUMENTINVOICE_APP) в системі "Dock Planning" (Епіцентр) він також відображається в Надісланих на платформі EDI Network 2.0 в статусі :orange:`"Очікує на підписання отримувачем"`:

.. image:: pics_Epicentr_Post_LC_Giper_crossdocking/Epicentr_Post_LC_Giper_crossdocking_011.png
   :align: center

.. _ettn-create:

6 Створення «е-ТТН» на підставі надісланого «Акту приймання-передачі» (DOCUMENTINVOICE_APP)
=====================================================================================================

.. include:: /ETTN_3_0/Create_ETTN_from.rst
   :start-after: .. початок блоку для ETTN_from_documentinvoice_app
   :end-before: .. кінець блоку для ETTN_from_documentinvoice_app

.. note::
   Якщо Ваш контрагент-Вантажоодержувач ("ЛЦ" Епіцентр) створить у відповідь "Акт розбіжностей про вантаж" (DisagreementAct) до "е-ТТН", то Ви будете проінформовані про новий вхідний документ і опціонально зможете підписати_ його в стандартний спосіб платформи EDI Network 2.0.

------------------------------------------------------------------

Контрагент "Гіпермаркет" (Епіцентр) зі своєї сторони переглядає та підписує документи або формує у відповідь "Акт розбіжностей" (DOCCORINVOICE) у разі незгоди - Ви зможете його знайти у вхідних та зможете підписати_ його в стандартний спосіб платформи EDI Network 2.0.

Наприкінці позитивного завершення документообігу Ви отримаєте "Повідомлення про прийом" (RECADV).

-------------------------------------

.. include:: /_constant/kontakti.rst
