#################################################################################################################################
Документообіг з мережею "АТБ" з поставкою через логістичного оператора ТОВ "Логістик Юніон". Інструкція для ТОВ "Логістик Юніон"
#################################################################################################################################

.. сюда закину немного картинок для текста

.. |плюс| image:: pics_ATB_external_EDI_instruction/ATB_external_EDI_instruction_029.png

.. |мусорка| image:: pics_ATB_external_EDI_instruction/ATB_external_EDI_instruction_030.png

.. role:: red

.. role:: underline

.. contents:: Зміст:
   :depth: 5

---------

Вступ
====================================

Дана інструкція описує порядок документообігу з мережею "АТБ" з поставкою через логістичного оператора ТОВ "Логістик Юніон" на платформі EDI Network 2.0. В документообігу з оператором ТОВ "Логістик Юніон" можуть приймати участь наступні документи:

- `е-ТТН <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__
- `Акт приймання-передачі (додаток 8) (COMDOC_032) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-032>`__
- `Акт приймання-передачі (додаток 9) (COMDOC_033) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-033>`__
- `Акт приймання товару до АПП (COMDOC_034) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-034>`__

Додатково (Акти до "е-ТТН"):

* `Акт перевантаження <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/RELOAD_ACT/RELOAD_ACTpage_v3.html>`__
* `Акт розбіжностей про вантаж <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/DISAGREEMENT_ACT/DISAGREEMENT_ACTpage_v3.html>`__
* `Акт про заміну пункту призначення вантажу <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/CONSIGNEE_CHANGE_ACT/CONSIGNEE_CHANGE_ACTpage_v3.html>`__ 
* `Акт коригування <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ADJUSTMENT_ACT/ADJUSTMENT_ACTpage_v3.html>`__

Постачальник може працювати з ТОВ "АТБ-Маркет" напряму або через логістичного оператора ТОВ "Логістик Юніон".

**Повна схема документообігу:**

.. image:: pics_ATB_external_EDI_instruction/ATB_external_EDI_instruction_147.png
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

2 Обробка вхідного «е-ТТН» документа на стороні Перевізника/Водія (ТОВ "Логістик Юніон")
=========================================================================================================================

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Consignor_to_Carrier
   :end-before: .. кінець блоку для from_Consignor_to_Carrier

.. hint::
   Процес підписання є типовим на платформі EDI Network 2.0 та описаний в окремому розділі за `посиланням <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_Instructions/ATB_for_post_logistic_union_only.html#sign>`__.

.. include:: /ETTN_3_0/Processing_ETTN.rst
   :start-after: .. початок блоку для from_Consignor_to_Carrier2
   :end-before: .. кінець блоку для from_Consignor_to_Carrier2

.. include:: /ClientProcesses/ATB/ATB_Instructions/ATB_external_EDI_instruction_post.rst
   :start-after: .. початок блоку для work_with_acts
   :end-before: .. кінець блоку для work_with_acts

3 Обробка вхідного «Акта приймання-передачі (додаток 8)» (COMDOC_032) на стороні Перевізника/Водія (ТОВ "Логістик Юніон")
=========================================================================================================================

.. include:: /ClientProcesses/ATB/ATB_Instructions/ATB_external_EDI_instruction_net.rst
   :start-after: .. початок блоку для LU_work_only
   :end-before: .. кінець блоку для LU_work_only

4 Формування "Акта приймання товару до АПП" (COMDOC_034) на стороні Перевізника/Водія (ТОВ "Логістик Юніон")
=========================================================================================================================

.. include:: /ClientProcesses/ATB/ATB_Instructions/ATB_external_EDI_instruction_net.rst
   :start-after: .. початок блоку для LU_work_only1
   :end-before: .. кінець блоку для LU_work_only1

.. hint::
   Процес підписання є типовим на платформі EDI Network 2.0 та описаний в окремому розділі за `посиланням <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_Instructions/ATB_for_post_logistic_union_only.html#sign>`__.

.. include:: /ClientProcesses/ATB/ATB_Instructions/ATB_external_EDI_instruction_net.rst
   :start-after: .. початок блоку для LU_work_only2
   :end-before: .. кінець блоку для LU_work_only2

5 Формування "Акта приймання-передачі (додаток 9)" (COMDOC_033) на стороні Перевізника/Водія (ТОВ "Логістик Юніон")
=========================================================================================================================

.. include:: /ClientProcesses/ATB/ATB_Instructions/ATB_external_EDI_instruction_net.rst
   :start-after: .. початок блоку для LU_work_only3
   :end-before: .. кінець блоку для LU_work_only3

.. hint::
   Процес підписання є типовим на платформі EDI Network 2.0 та описаний в окремому розділі за `посиланням <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_Instructions/ATB_for_post_logistic_union_only.html#sign>`__.

.. include:: /ClientProcesses/ATB/ATB_Instructions/ATB_external_EDI_instruction_net.rst
   :start-after: .. початок блоку для LU_work_only4
   :end-before: .. кінець блоку для LU_work_only4

------------------------------------------------------

.. _sign:

Підписання на платформі EDIN 2.0
=========================================================================================================================

.. warning::
   У відправника `Акта приймання-передачі (додаток 8) (COMDOC_032) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-032>`__ під час підписання діє перевірка на **відповідність ІПН підпису та даних відповідальної особи**:
   
   .. image:: /_constant/atb_check/atb_check_002.png
      :align: center

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

------------------------------------------------

.. include:: /_constant/kontakti.rst