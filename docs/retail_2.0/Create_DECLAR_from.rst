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

При переході в документ відображається його статус, наприклад **"Відправлений на перевірку в торговельну мережу"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_011.png
   :align: center

При отриманні відповіді від податкової відображається відповідний статус та кнопка **"Розшифрувати квитанцію"** (процес потребує підписання) для відображення детальної інформації про квитанцію:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_010.png
   :align: center

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_012.png
   :align: center

.. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_003

.. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_002

2 Створення "Податкової накладної" (DECLAR) на підставі надісланої "Видаткової накладної" (COMDOC_006)
=======================================================================================================================

.. початок блоку для DECLAR_from_COMDOC_006_001

.. hint::
   Ви можете підписати та відправити "Податкову накладну" до отримання підтвердженної "Видаткової накладної" (COMDOC_006), але ми рекомендуємо дочекатися позитивної відповіді від контрагента, тобто підписану "Видаткову накладну" і вже тоді надсилати "Податкову накладну" на перевірку.

Для створення "Податкової накладної" (DECLAR) Вам потрібно в меню сервісу **"EDI Network"** в папці **"Надіслані"** обрати "Видаткову накладну" (COMDOC_006), на підставі якої потрібно створити новий документ (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_013.png
   :align: center

Потрібно відкрити надіслану "Видаткову накладну" (COMDOC_006) лівою кнопкою миші та створити "Податкову накладну" (DECLAR) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ за допомогою кнопки **"Створити документ"** та обрати ставку ПДВ:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_014.png
   :align: center

.. attention::
   На одну "Видаткову накладну" можливо створити одну «Податкову накладну»!

У відкритій формі "Податкової накладної" (DECLAR) обов'язкові до заповнення поля (позначені червоною зірочкою :red:`*`) частково заповнюються автоматично з пов'язаної "Видаткової накладної" (COMDOC_006):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_003.png
   :align: center

В нижній частині документа знаходиться перелік товарних позицій, які переносяться з "Видаткової накладної" (COMDOC_006):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_004.png
   :align: center

Після заповнення всіх даних документ потрібно (1) **"Зберегти"**, (2) **"Підписати"** та (3) **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_005.png
   :align: center

.. кінець блоку для DECLAR_from_COMDOC_006_001

.. _sign:

2.1 Підписання та відправка "Податкової накладної" (DECLAR)
--------------------------------------------------------------------------------------------------

.. початок блоку для DECLAR_from_COMDOC_006_002

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

.. початок блоку для DECLAR_from_COMDOC_006_003

Після підписання "Податкової накладної" (DECLAR) документ потрібно **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_006.png
   :align: center

Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходиться в `ланцюжку документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ разом із пов'язании документами:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_007.png
   :align: center

При переході в документ відображається його статус, наприклад **"Відправлений на перевірку в торговельну мережу"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_011.png
   :align: center

При отриманні відповіді від податкової відображається відповідний статус та кнопка **"Розшифрувати квитанцію"** (процес потребує підписання) для відображення детальної інформації про квитанцію:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_010.png
   :align: center

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_012.png
   :align: center

.. кінець блоку для DECLAR_from_COMDOC_006_002

3 Створення "Податкової накладної" (DECLAR) на підставі "Акту наданих послуг (Логістика)" (COMDOC_037)
==============================================================================================================================

Для створення "Податкової накладної" (DECLAR) Вам потрібно в меню сервісу **"EDI Network"** в папці **"Надіслані"** обрати "Акт наданих послуг (логістика)" (COMDOC_037), на підставі якого потрібно створити новий документ (для зручності можна скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_015.png
   :align: center

Відкрите надісланий "Акт наданих послуг (Логістика)" (COMDOC_037) лівою кнопкою миші. Створіть "Податкову накладну" (DECLAR) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ за допомогою кнопки **"Створити документ"** та оберіть ставку ПДВ у вікні, що з'явилось:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_016.png
   :align: center

.. attention::
   На один "Акт наданих послуг (Логістика)" можливо створити одну «Податкову накладну»!

У відкритій формі "Податкової накладної" (DECLAR) обов'язкові до заповнення поля (позначені червоною зірочкою :red:`*`) частково заповнюються автоматично з пов'язаного "Акту наданих послуг (Логістика)" (COMDOC_037):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_017.png
   :align: center

В нижній частині документа знаходиться перелік товарних позицій, які переносяться з "Акту наданих послуг (Логістика)" (COMDOC_037):

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_018.png
   :align: center

Після заповнення всіх даних документ потрібно (1) **"Зберегти"**, (2) **"Підписати"** та (3) **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DECLAR_from/Create_DECLAR_from_005.png
   :align: center

3.1 Підписання та відправка "Податкової накладної" (DECLAR)
--------------------------------------------------------------------------------------------------

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

.. include:: /retail_2.0/Create_DECLAR_from.rst
   :start-after: .. початок блоку для DECLAR_from_DOCUMENTINVOICE_TN_003
   :end-before: .. кінець блоку для DECLAR_from_DOCUMENTINVOICE_TN_003

-------------------------------------

.. include:: /_constant/kontakti.rst
