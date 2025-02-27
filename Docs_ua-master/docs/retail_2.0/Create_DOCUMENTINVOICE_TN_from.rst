########################################################################################################################
Створення "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN) на базі інших електронних документів
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

Дана інструкція описує порядок формування та відправки документа "Товарна накладна" (DOCUMENTINVOICE.DocumentFunctionCode = TN). Документ "Товарна накладна" (DOCUMENTINVOICE.DocumentFunctionCode = TN) може бути створений на підставі вхідного "Замовлення" (ORDER) або "Повідомлення про прийом" (RECADV).

1 Створення "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN) на підставі вхідного "Повідомлення про прийом" (RECADV)
=================================================================================================================================================

.. початок блоку для DOCUMENTINVOICE_TN_from_RECADV_001

Щоб сформувати "Товарну накладну" (DOCUMENTINVOICE.DocumentFunctionCode = TN) Вам потрібно в меню сервісу **"EDI Network"** в папці **"Вхідні"** обрати "Повідомлення про прийом" (RECADV), на підставі якого потрібно створити новий документ (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_001.png
   :align: center

Потрібно відкрити вхідне "Повідомлення про прийом" (RECADV) лівою кнопкою миші та створити "Товарну накладну" (DOCUMENTINVOICE.DocumentFunctionCode = TN) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ для мережі за допомогою кнопки **"Створити документ"**:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_002.png
   :align: center

У відкритій формі "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN) значна частина полів заповнюються автоматично з пов'язаного "Повідомлення про прийом" (RECADV) (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`):

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_003.png
   :align: center

Дані **Відправника** - це Ваші дані, що заповнюються автоматично і не підлягають редагуванню. Змінити дані **Одержувача** можливо за допомогою кнопки **"Пошук контрагента"** (|лупа|).

Потрібно заповнити поле **Номер** та обрати **Дату** зі зручного picker-вікна. Дані **Точки доставки** заповнюються автоматично з документа-підстави - їх можливо редагувати за допомогою кнопок **"Пошук контрагента"** (|лупа|) чи **"Вказати себе"** (|будинок|);

.. hint::
   За допомогою кнопки **"Пошук контрагента"** (|лупа|) можливо вказати чи змінити дані контрагента, використовуючи в пошуку назву компанії, GLN або ІПН:

   .. image:: /retail_2.0/pics_RECADV_na_EDI_Network_2.0/RECADV_na_EDI_Network_11.png
      :align: center

Поля **"GLN для виставлення рахунку"** та **"Платник"** також заповнюються і редагуються за допомогою кнопок **"Пошук контрагента"** (|лупа|) чи **"Вказати себе"** (|будинок|).

.. include:: /ClientProcesses/BOX_Market/BOX_Market_Instructions/BOX_Market_Standard.rst
   :start-after: .. початок блоку для ForAllDOCUMENTINVOICE
   :end-before: .. кінець блоку для ForAllDOCUMENTINVOICE

Обов'язково заповнюються поля **"Номер податкової накладної"** / **"Дата податкової накладної"**, **"Номер повідомлення про відвантаження"**, **"Номер повідомлення про прийом"** (номер документа-підстави заповнюється автоматично, але доступний до редагування). 

.. warning::
   Всі зміни за позиціями повинні виконуватись лише після узгодження з мережею!

В табличній частині створеного документа знаходиться перелік товарних позицій з документа-підстави. **"Змінити"** дані товарної позиції можливо через pop-up вікно, що відкривається по кліку на штрихкод товару:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_004.png
   :align: center

Якщо по якійсь з позицій не було/буде поставки її необхідно відзначити галочкою і **"Видалити"**:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_005.png
   :align: center

Можливо також **"+Додати"** іншу позицію з вашого `"Товарного довідника" <https://wiki.edin.ua/uk/latest/general_2_0/Directories.html>`__, заповнивши форму (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`):

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_006.png
   :align: center

Після внесення всіх необхідних змін в документ потрібно натиснути кнопку **"Зберегти"** (1), після чого документ можливо **"Підписати"** (2):

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_007.png
   :align: center

.. кінець блоку для DOCUMENTINVOICE_TN_from_RECADV_001

.. _sign:

1.1 Підписання та відправка "Товарної накладної"
--------------------------------------------------------------------------------------------------

.. початок блоку для DOCUMENTINVOICE_TN_from_RECADV_002

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

.. початок блоку для DOCUMENTINVOICE_TN_from_RECADV_003

Після підписання "Товарної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TN) документ потрібно **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_008.png
   :align: center

При відправці документа відредаговані дані товарних позицій автоматично оновлюються в `"Товарному довіднику" <https://wiki.edin.ua/uk/latest/general_2_0/Directories.html>`__. Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходиться в `ланцюжку документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ разом із пов'язании документами в статусі :orange:`"Очікує на підписання отримувачем"`:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TN_from/Create_DOCUMENTINVOICE_TN_from_009.png
   :align: center

.. кінець блоку для DOCUMENTINVOICE_TN_from_RECADV_002

-------------------------------------

.. include:: /_constant/kontakti.rst
