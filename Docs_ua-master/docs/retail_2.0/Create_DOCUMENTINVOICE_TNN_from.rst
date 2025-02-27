########################################################################################################################
Створення "Транспортної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) на базі інших електронних документів
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

Дана інструкція описує порядок формування та відправки документа "Транспортна накладна" (DOCUMENTINVOICE.DocumentFunctionCode = TNN). Документ "Транспортна накладна" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) може бути створений на підставі вхідного "Повідомлення про відвантаження" (DESADV).

1 Створення "Транспортної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) на підставі надісланого "Повідомлення про відвантаження" (DESADV)
========================================================================================================================================

.. початок блоку для DOCUMENTINVOICE_TNN_from_DESADV_001

Щоб сформувати "Транспортну накладну" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) Вам потрібно в меню сервісу **"EDI Network"** увійти в папку **"Надіслані"** і обрати "Повідомлення про відвантаження" (DESADV), на підставі якого потрібно створити новий документ (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_001.png
   :align: center
   
Потрібно відкрити надіслане "Повідомлення про відвантаження" (DESADV) лівою кнопкою миші та створити "Транспортну накладну" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ для мережі за допомогою кнопки **"Створити документ"**:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_002.png
   :align: center

У відкритій формі "Транспортної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) значна частина полів заповнюються автоматично з пов'язаного "Повідомлення про відвантаження" (DESADV) (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`):

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_013.png
   :align: center

Дані **Відправника** - це Ваші дані, що заповнюються автоматично і не підлягають редагуванню. Змінити дані **Одержувача** можливо за допомогою кнопки **"Пошук контрагента"** (|лупа|).

**Номер** та **Дата** заповнюються автоматично з документа-підстави, але доступні до редагування за потреби. Дані **Точки доставки** також заповнюються автоматично - їх можливо редагувати за допомогою кнопок **"Пошук контрагента"** (|лупа|) чи **"Вказати себе"** (|будинок|);

.. hint::
   За допомогою кнопки **"Пошук контрагента"** (|лупа|) можливо вказати чи змінити дані контрагента, використовуючи в пошуку назву компанії, GLN або ІПН:

   .. image:: /retail_2.0/pics_RECADV_na_EDI_Network_2.0/RECADV_na_EDI_Network_11.png
      :align: center

.. include:: /ClientProcesses/BOX_Market/BOX_Market_Instructions/BOX_Market_Standard.rst
   :start-after: .. початок блоку для ForAllDOCUMENTINVOICE
   :end-before: .. кінець блоку для ForAllDOCUMENTINVOICE

.. attention::
   В "Транспортній накладній" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) поле **"Точка доставки"** є визначальним - даний документ відправляється саме тому контрагенту, що зазначається в цьому полі!

Поля **"Номер замовлення"** та **"Дата замовлення"** також заповнюються автоматично з документа-підстави та недоступні до редагування. 

.. attention::
   Якщо при автоматичному заповненні чи подальшому редагуванні в товарних позиціях виникнуть логічні помилки, то Ви про це будете проінформовані, а позиції в таблиці, що їх налічують будуть виділені жовтим кольором:

   .. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_004.png
      :align: center

Зміни за позиціями можливо виконувати одразу в табличній частині в колонках "№ арт. МЕТРО", "№ арт. MGB", "Найменування", "Штрихкод", "Кількість товару у коробці", "Кількість коробів", "Кількість доставлених М.О." 

.. hint::
   Для товарів, в яких одиниці виміру "кілограми" поля "Кількість товару у коробці" / "Кількість доставлених М.О." можуть мати числове значення з трьома знаками після крапки (при цьому поле "Кількість коробів" заповнюється вручну). Для товарів, в яких одиниці виміру "штуки" поле "Кількість коробів" розраховується автоматично з "Кількість доставлених М.О." / "Кількість товару у коробці":

   .. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_014.png
      :align: center

Якщо по якійсь з позицій не було/буде поставки її необхідно відзначити галочкою і **"Видалити"**:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_015.png
   :align: center

Можливо також **"+Додати"** іншу позицію з вашого `"Товарного довідника" <https://wiki.edin.ua/uk/latest/general_2_0/Directories.html>`__, заповнивши форму (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`):

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_016.png
   :align: center

Після внесення всіх необхідних змін в документ потрібно натиснути кнопку **"Зберегти"** (1), після чого документ можливо **"Підписати"** (2):

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_007.png
   :align: center

.. кінець блоку для DOCUMENTINVOICE_TNN_from_DESADV_001

.. _sign:

1.1 Підписання та відправка "Транспортної накладної"
--------------------------------------------------------------------------------------------------

.. початок блоку для DOCUMENTINVOICE_TNN_from_DESADV_002

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

.. початок блоку для DOCUMENTINVOICE_TNN_from_DESADV_003

Після підписання "Транспортної накладної" (DOCUMENTINVOICE.DocumentFunctionCode = TNN) документ потрібно **"Відправити"**:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_008.png
   :align: center

При відправці документа відредаговані дані товарних позицій автоматично оновлюються в `"Товарному довіднику" <https://wiki.edin.ua/uk/latest/general_2_0/Directories.html>`__. Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходиться в `ланцюжку документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ разом із пов'язании документами в статусі :orange:`"Очікує на підписання отримувачем"`:

.. image:: /retail_2.0/pics_Create_DOCUMENTINVOICE_TNN_from/Create_DOCUMENTINVOICE_TNN_from_009.png
   :align: center

.. кінець блоку для DOCUMENTINVOICE_TNN_from_DESADV_002

-------------------------------------

.. include:: /_constant/kontakti.rst
