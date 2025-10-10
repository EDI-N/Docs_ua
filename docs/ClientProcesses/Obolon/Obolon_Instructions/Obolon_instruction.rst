####################################################################################################################################
Документообіг компанії "Оболонь" з Дистриб'юторською Компанією на платформі EDI Network 2.0. Інструкція для Дистриб'ютора (Покупця)
####################################################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. |pencil_stencil| image:: /_constant/icons/pencil_stencil.png

.. |лупа2| image:: /_constant/icons/magnifying_glass2.png

.. |drag_dots| image:: /_constant/icons/drag_dots.png

.. |trash| image:: /_constant/icons/trash.png

.. |download| image:: /_constant/icons/download.png

.. |trash_f_red| image:: /_constant/icons/trash_f_red.png

.. role:: red

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 4

---------

Вступ
====================================

Дана інструкція описує порядок документообігу на платформі EDI Network 2.0 ПРАТ "Оболонь" з Дистриб'юторською Компанією. В документообігу за даною схемою приймають участь наступні документи:

- `Акт приймання-передачі (COMDOC_041) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_041_x.html>`__
- `Акт повернення (COMDOC_042) <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/akt-povernennia-comdoc-042>`__
- `Повідомлення про відмову від підписання (COMDOC_021) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_021_x.html>`__

Документообіг здійснюється між двома Учасниками, де ініціатором виступає мережа "Оболонь".

**Загальна схема документообігу:**

.. image:: pics_Obolon/Obolon_001.png
   :height: 700px
   :align: center



1. Вхід на платформу
================================================================================================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

2. Опрацювання вхідного "Акту приймання-передачі" (COMDOC_041) та вхідного "Акту повернення" (COMDOC_042)
=======================================================================================================================











Підписання на платформі EDIN 2.0
=========================================================================================================================

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

Відмова від підписання комерційних документів - COMDOC_021 квитанція №13
==================================================================================================================

.. include:: /_constant/comdoc_reject/comdoc_reject.rst
   :start-after: .. початок блоку для Comdoc_Reject
   :end-before: .. кінець блоку для Comdoc_Reject

------------------------------------------------

.. include:: /_constant/kontakti.rst
