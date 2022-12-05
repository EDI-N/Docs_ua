###################################################################################################################################
Документообіг з мережею "АТБ" з поставкою через логістичного оператора ТОВ "Логістик Юніон". Інструкція для Постачальника
###################################################################################################################################

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

Дана інструкція описує порядок документообігу з мережею "АТБ" з поставкою через логістичного оператора ТОВ "Логістик Юніон" на платформі EDI Network 2.0. В документообігу приймають участь наступні документи:

- `Акт приймання-передачі (додаток 8) (COMDOC_032) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-032>`__
- `Акт приймання-передачі (додаток 9) (COMDOC_033) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-033>`__
- `Акт приймання товару до АПП (COMDOC_034) <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#comdoc-034>`__

Постачальник може працювати з ТОВ "АТБ-Маркет" напряму або через логістичного оператора ТОВ "Логістик Юніон".

**Схема документообігу з ТОВ "Логістик Юніон":**

.. image:: pics_ATB_for_post_logistic_union_only/ATB_for_post_logistic_union_only_001.png
   :height: 700px
   :align: center

1 Вхід на платформу
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI+ЮЗД"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

Постачання товару через логістичного оператора ТОВ "Логістик Юніон"
========================================================================

.. include:: /ClientProcesses/ATB/ATB_Instructions/ATB_external_EDI_instruction_post.rst
   :start-after: .. початок блоку для LU_only
   :end-before: .. кінець блоку для LU_only

------------------------------------------------

.. include:: /_constant/kontakti.rst