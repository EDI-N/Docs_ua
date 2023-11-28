########################################################################################################################
Документообіг з мережею "EVA" (ТОВ "Руш") на платформі EDI Network 2.0: "Маркетинг"
########################################################################################################################

.. сюда закину немного картинок для текста

.. |лупа| image:: pics_

.. |будинок| image:: pics_

.. role:: red

.. contents:: Зміст:
   :depth: 2

---------

Вступ
====================================

Дана інструкція описує порядок документообігу з мережею "EVA" (ТОВ "Руш") на платформі EDI Network 2.0 за схемою передбаченою для маркетингу. В документообігу приймають участь наступні документи:

- `Рахунок-фактура <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_016_x.html>`__
- `Акт виконаних робіт <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_013_x.html>`__
- `Акт звірки зведений <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_029_x.html>`__

**Загальна схема документообігу:**

.. image:: pics_Eva_instruction/Eva_instruction_003.png
   :height: 500px
   :align: center

**Детальна інструкція в процесі написання.**

.. attention::
   Всі три документа відправляються зі сторони мережі "EVA" (ТОВ "Руш") та для завершення документообігу потребують підписання зі сторони Постачальника!

Для підписання документа необхідно перейти в документ та натинути на кнопку **"Підписати та відправити у відповідь"**:

.. image:: pics_Eva_instruction/Eva_instruction_004.png
   :align: center

.. _sign:

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

-------------------------------------

.. include:: /_constant/kontakti.rst
