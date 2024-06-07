#############################################################################################################################
Документообіг з мережею "Розетка" на платформі EDI Network 2.0. Інструкція для Постачальника
#############################################################################################################################

.. сюда закину немного картинок для текста

.. |bad_doc| image:: /general_2_0/pics_rabota_s_platformoj_EDIN_2.0/rabota_s_platformoj_066.png

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. role:: red

.. role:: green

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 5

---------

Вступ
====================================

Дана інструкція описує порядок документообігу з мережею "Розетка" на платформі EDI Network 2.0. В документообігу приймають участь наступні документи:

TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

- `Замовлення (ORDER) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#order>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#desadv>`__
- `е-ТТН <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__
- `Повідомлення про прийом (RECADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/RECADV_x.html>`__
- `Видаткова накладна (COMDOC_006) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-006>`__
- `Акт приймання товару до ВН (COMDOC_035) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-035>`__
- `Акт приймання-передачі (додаток 8) (COMDOC_032) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-032>`__
- `Акт приймання-передачі (додаток 9) (COMDOC_033) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-033>`__
- `Акт приймання товару до АПП (COMDOC_034) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-034>`__

Додатково (Акти до "е-ТТН"):

* `Акт перевантаження <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/RELOAD_ACT/RELOAD_ACTpage_v3.html>`__
* `Акт розбіжностей про вантаж <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/DISAGREEMENT_ACT/DISAGREEMENT_ACTpage_v3.html>`__
* `Акт про заміну пункту призначення вантажу <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/CONSIGNEE_CHANGE_ACT/CONSIGNEE_CHANGE_ACTpage_v3.html>`__ 
* `Акт коригування <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ADJUSTMENT_ACT/ADJUSTMENT_ACTpage_v3.html>`__

**Загальна схема документообігу:**

.. image:: pics_Rozetka_EDI/Rozetka_EDI_001.png
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

.. _pricat-create:

2 Створення та відправка "Прайс-листа" (PRICAT)
==============================================================================================================

Постачальник є ініціатором документообігу і надсилає "Прайс-лист" (PRICAT) в Мережу ("Епіцентр"). "Прайс-лист" (PRICAT) служить для опису товарів і послуг. В документі вказується штрих-код продукту, його опис, ціна, ставка ПДВ.

.. include:: /retail_2.0/PRICAT_na_EDI_Network.rst
   :start-after: .. початок блоку для Pricat_from_zero
   :end-before: .. кінець блоку для Pricat_from_zero

.. _ordrsp-create:

3 Створення та відправка «Підтвердження замовлення» (ORDRSP) на підставі вхідного «Замовлення» (ORDERS)
==============================================================================================================

.. include:: /retail_2.0/ORDRSP_na_EDI_Network.rst
   :start-after: .. початок блоку для Ordrsp_from_docs
   :end-before: .. кінець блоку для Ordrsp_from_docs

.. _desadv-create:

4 Створення та відправка "Повідомлення про відвантаження" (DESADV) на підставі надісланого «Підтвердження замовлення» (ORDRSP)
==================================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Ordrsp
   :end-before: .. кінець блоку для Desadv_from_Ordrsp

.. _quotes-create:

5 Створення та відправка "Додатка до повідомлення про відвантаження" (QUOTES) на підставі надісланого "Повідомлення про відвантаження" (DESADV)
==================================================================================================================================

.. hint::
   Документ формується у випадку необхідності передачі серійних номерів товарів!

.. include:: /retail_2.0/Create_QUOTES_from.rst
   :start-after: .. початок блоку для Quotes_from_Desadv
   :end-before: .. кінець блоку для Quotes_from_Desadv

.. _comdoc_006-create:

6 Створення та відправка "Видаткової накладної" (COMDOC_006) на підставі надісланого "Повідомлення про відвантаження" (DESADV)
==================================================================================================================================

.. hint::
   Документ формується у випадку необхідності передачі серійних номерів товарів!

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Vydatkova_Nakladna_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Comdoc_006_from_Desadv
   :end-before: .. кінець блоку для Comdoc_006_from_Desadv

.. hint::
   Процес підписання є типовим на платформі EDI Network 2.0 та описаний в окремому розділі за `посиланням <https://wiki.edin.ua/uk/latest/ClientProcesses/Rozetka/Rozetka_Instructions/Rozetka_EDI.html#sign>`__.

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Vydatkova_Nakladna_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Comdoc_006_from_Desadv2
   :end-before: .. кінець блоку для Comdoc_006_from_Desadv2

------------------------------------------------------

.. _sign:

Підписання на платформі EDIN 2.0
=========================================================================================================================

.. include:: /_constant/atb_check/atb_check.rst
   :start-after: .. початок блоку для ATB_check
   :end-before: .. кінець блоку для ATB_check

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

-------------------------------------

.. include:: /_constant/kontakti.rst
