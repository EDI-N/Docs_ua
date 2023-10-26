########################################################################################################################
Створення "Податкової накладної" (DECLAR) на базі інших електронних документів
########################################################################################################################

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

Дана інструкція описує порядок формування та відправки документа "Податкова накладна" (DECLAR).

1 Створення "Податкової накладної" (DECLAR) на підставі надісланої "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN)
==============================================================================================================================================

.. початок блоку для DECLAR_from_DOCUMENTINVOICE_TN_001

.. hint::
   Ви можете підписати та відправити "Податкову накладну" до отримання підтвердженної "Товарної накладної", але ми рекомендуємо дочекатися позитивної відповіді від контрагента, тобто підписану "Товарну накладну" і вже тоді надсилати "Податкову накладну" на перевірку.

Для створення "Податкової накладної" (DECLAR) Вам потрібно в меню сервісу **"EDI Network"** в папці **"Надіслані"** обрати "Товарну накладну" (DOCUMENTINVOICE.DocumentFunctionCode = TN), на підставі якої потрібно створити новий документ (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_001.png
   :align: center

Потрібно відкрити надіслану "Товарну накладну" (DOCUMENTINVOICE.DocumentFunctionCode = TN) лівою кнопкою миші та створити "Податкову накладну" (DECLAR) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ за допомогою кнопки **"Створити документ"** та обрати ставку ПДВ:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_002.png
   :align: center

.. attention::
   На одну «Товарну накладну» можливо створити одну «Податкову накладну»!

У відкритій формі "Податкової накладної" (DECLAR) обов'язкові до заповнення поля (позначені червоною зірочкою :red:`*`) частково заповнюються автоматично з пов'язаної "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_003.png
   :align: center

В нижній частині документа знаходиться перелік товарних позицій, які переносяться з "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_004.png
   :align: center

Після заповнення всіх даних документ потрібно (1) **"Зберегти"**, (2) **"Підписати"** та (3) **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_005.png
   :align: center

.. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_001

.. _sign:

1.1 Підписання та відправка "Податкової накладної" (DECLAR)
--------------------------------------------------------------------------------------------------

.. початок блоку для DECLAR_from_DOCUMENTINVOICE_TN_002

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

.. початок блоку для DECLAR_from_DOCUMENTINVOICE_TN_003

Після підписання "Податкової накладної" (DECLAR) документ потрібно **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_006.png
   :align: center

Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходиться в `ланцюжку документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ разом із пов'язании документами:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_007.png
   :align: center

Після успішної реєстраціїї податкової у документі з'явиться друга візуалізація підпису зеленим кольором з текстом **"Успiшна вiдповiдь вiд податковоï"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_008.png
   :align: center

Якщо Податкова накладна не пройшла реєстрацію в ЄРПН, з'явиться друга візуалізація підпису червоним кольором з текстом **"Похибка при реєстраціï"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_009.png
   :align: center

.. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_002

-------------------------------------

.. include:: /_constant/kontakti.rst
