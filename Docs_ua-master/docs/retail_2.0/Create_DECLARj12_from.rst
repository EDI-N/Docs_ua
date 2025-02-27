########################################################################################################################
Створення "Коригування до податкової накладної" (DECLARj12) на базі інших електронних документів
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

Дана інструкція описує порядок формування та відправки документа "Коригування до податкової накладної" (DECLARj12). У випадку коли Постачальник чи Мережа знайшли помилки в підписаній "Податковій накладній" (DOCUMENTINVOICE.DocumentFunctionCode = TN), Постачальнику потрібно формувати "Коригування до податкової накладної" (DECLARj12) - цей документ може бути створений на підставі надісланого "Коригування товарної накладної" (DOCCORINVOICE).

1 Створення "Коригування до податкової накладної" (DECLARj12) на підставі надісланого "Коригування товарної накладної" (DOCCORINVOICE)
==============================================================================================================================================

.. початок блоку для DECLARj12_from_DOCCORINVOICE_001

Щоб сформувати "Коригування до податкової накладної" (DECLARj12) Вам потрібно в меню сервісу **"EDI Network"** в папці **"Надіслані"** обрати "Коригування товарної накладної" (DOCCORINVOICE), на підставі якої потрібно створити новий документ-коригування (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /retail_2.0/pics_Create_DECLARj12_from/Create_DECLARj12_from_001.png
   :align: center

Потрібно відкрити надіслану "Коригування товарної накладної" (DOCCORINVOICE) лівою кнопкою миші та створити "Коригування до податкової накладної" (DECLARj12) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ для мережі за допомогою кнопки **"Створити документ"** та обрати ставку ПДВ:

.. image:: /retail_2.0/pics_Create_DECLARj12_from/Create_DECLARj12_from_002.png
   :align: center

У відкритій формі "Коригування до податкової накладної" (DECLARj12) обов'язкові до заповнення поля (позначені червоною зірочкою :red:`*`) частково заповнюються автоматично з пов'язаного "Коригування до товарної накладної" (DOCCORINVOICE):

.. image:: /retail_2.0/pics_Create_DECLARj12_from/Create_DECLARj12_from_003.png
   :align: center

В нижній частині документа знаходиться перелік товарних позицій, які переносяться з "Коригування товарної накладної" (DOCCORINVOICE):

.. image:: /retail_2.0/pics_Create_DECLARj12_from/Create_DECLARj12_from_004.png
   :align: center

Після заповнення всіх даних документ потрібно (1) **"Зберегти"**, (2) **"Підписати"** та (3) **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DECLARj12_from/Create_DECLARj12_from_005.png
   :align: center

.. кінець блоку для DECLARj12_from_DOCCORINVOICE_001

.. _sign:

1.1 Підписання та відправка "Коригування до податкової накладної" (DECLARj12)
--------------------------------------------------------------------------------------------------

.. початок блоку для DECLARj12_from_DOCCORINVOICE_002

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

.. початок блоку для DECLARj12_from_DOCCORINVOICE_003

Після підписання "Коригування до податкової накладної" (DECLARj12) документ потрібно **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DECLARj12_from/Create_DECLARj12_from_006.png
   :align: center

Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходиться в `ланцюжку документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ разом із пов'язании документами в статусі "Готовий до відправлення в ЄРПН":

.. image:: /retail_2.0/pics_Create_DECLARj12_from/Create_DECLARj12_from_007.png
   :align: center

Після перевірки документа органом Державної Податкової Інспекції, йому буде присвоєно статус:

* На коректний документ надійде статус **"Зареєстровано в ЄРПН і відправлено покупцеві"**.
* На некоректний документ надійде статус  **"Помилка при реєстрації в ЄРПН"**.

.. кінець блоку для DECLARj12_from_DOCCORINVOICE_002

-------------------------------------

.. include:: /_constant/kontakti.rst
