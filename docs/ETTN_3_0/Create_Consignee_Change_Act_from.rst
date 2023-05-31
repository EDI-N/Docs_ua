Створення "Акта про заміну пункту призначення вантажу" на базі інших електронних документів
###################################################################################################

.. сюда закину немного картинок для текста + юзаєм спільні зображення

.. |лупа| image:: pics_Create_ETTN/Create_ETTN_013.png

.. |будинок| image:: pics_Create_ETTN/Create_ETTN_014.png

.. |pencil_stencil| image:: /_constant/icons/pencil_stencil.png

.. |лупа2| image:: /_constant/icons/magnifying_glass2.png

.. role:: red

.. role:: green

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 3

---------

Документ "Акт про заміну пункту призначення вантажу" можливо створити на підставі "е-ТТН", що вже підписаний **Перевізником** (документ має статус "Очікує підписання вантажоодержувачем"). Ініціатором "Акта про заміну пункту призначення вантажу" може виступає будь-який учасник, що відмовляється прийняти вантаж (при роботі з транспортними документами передбачені 4 основні ролі учасників документообігу: **"Замовник"**, **"Вантажовідправник"**, **"Перевізник"**, **"Вантажоотримувач"**).

"Акт про заміну пункту призначення вантажу" складається у випадку:

   * заміни Пункту розвантаження
   * заміни Вантажоодержувача та Пункту розвантаження

.. include:: /API_ETTNv3_1/Work_with_API/ConsigneeChangeActv3_API_work.rst
   :start-after: .. початок блоку для ConsigneeChangeActInstructions
   :end-before: .. кінець блоку для ConsigneeChangeActInstructions

.. _create-from-ttn:

**1 Створення "Акта про заміну пункту призначення вантажу" на підставі "е-ТТН"**
================================================================================================================================

.. attention::
   Після створення "Акта про заміну пункту призначення вантажу" дії з документом-підставою ("е-ТТН") будуть обмежені до кінця життєвого циклу акта (поки "Акт про заміну пункту призначення вантажу" не буде підписаний усіма Учасниками документообігу або не буде відхилений одним з Учасників).

Ініціатору для створення **"Акта про заміну пункту призначення вантажу"** в сервісі "EDI+ЮЗД" потрібно перейти у **"Вхідні"** (**"Надіслані"** в випадку Ініціатора-Вантажовідправника) та перейти в "Товарно-транспортну накладну", до якої потібно створити коригуючий акт ("е-ТТН" в статусі "Очікує підписання вантажоодержувачем"):

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_001.png
   :align: center

У відкритому документі натисніть **"Створити документ"** "Акт про заміну пункту призначення вантажу" в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__:

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_002.png
   :align: center

При створенні документа "Акта про заміну пункту призначення вантажу" його форма в значній мірі автоматично заповнюється даними (дані контрагентів, перевізника, відомості про вантаж) з е-ТТН, як документа-підстави: 

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_003.png
   :align: center

Всі обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`. Вам необхідно вказати "Номер документа" ("Дата документа" заповнюється поточною автоматично), "Місце складання". Учасники документообігу Актом автоматично визначаються з документа-підстави й недоступні до редагування (роль Ініціатора вказується в дужках і визначає Учасників):

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_004.png
   :align: center

Заповнити дані **"Нового Вантажоодержувача"** можливо за допомогою кнопки **"Вказати себе"** (|будинок|) або ж за допомогою кнопки **"Пошук контрагента"** (|лупа|) за назвою компанії, GLN або ІПН можливо **"Вибрати"** іншого контрагента:

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_005.png
   :align: center

Після того, як контрагента обрано можливо вказати "Новий пункт розвантаження" (|лупа|):

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_006.png
   :align: center

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_007.png
   :align: center

Обов'язково зазначається опис причини складання акта в полі "Додаткова інформація". Також у транспортних документах обов'язково вказується відповідальна особа (ролі та кількість Учасників визначається автоматично) за допомогою кнопки **"+Додати"** (можливо вказати кілька осіб):

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_008.gif
   :align: center

Дані раніше доданих відповідальних осіб можливо обрати з віртуального довідника:

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_009.png
   :align: center

Довідник автоматично наповнюється при додаванні нового відповідального (кнопка **"+Додати особу"**). При додаванні нового відповідального в модальному вікні потрібно заповнити обов'язкові контактні дані (обов'язкові поля позначені червоною зірочкою :red:`*`):

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_010.png
   :align: center

Редагувати дані раніше введених осіб можливо за допомогою кнопки **"Змінити"** (|pencil_stencil|):

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_011.png
   :align: center

За потреби можливо **"Обрати"** (|лупа2|) іншу особу замість обраної/доданої раніше. 

Після того, як обов'язкові дані будуть введені потрібно **"Зберегти"** (1), **"Підписати"** (2) та **"Надіслати"** (3) документ:

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_012.png
   :align: center

.. _sign:

**1.1 Підписання та відправка "Акта про заміну пункту призначення вантажу"**
------------------------------------------------------------------------------------------------------------

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

   .. tab:: Дія.Підпис

      .. include:: /_constant/diya_signing/diya_signing.rst
         :start-after: .. початок блоку для DiyaPidps
         :end-before: .. кінець блоку для DiyaPidps

   .. tab:: Cloud

      .. include:: /_constant/cloud_signing/cloud_signing.rst
         :start-after: .. початок блоку для CloudSign
         :end-before: .. кінець блоку для CloudSign

Після підписання "Акта про заміну пункту призначення вантажу" відображається "Інформація про підписантів", а документ можливо **"Надіслати"**:

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_013.png
   :align: center

Після відправки автоматично відкривається папка **"Надіслані"**, де надісланий акт відображається зі статусом **"Очікує підписання перевізником/водієм"** (**"Очікує підписання замовником"** в випадку Ініціатора-Перевізника):

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_014.png
   :align: center

Після відправки у пов'язаного документа "е-ТТН" при його перегляді в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ відобрається створений Акт і виводиться повідомлення про обмежені дії з документом до кінця життєвого циклу акта (поки "Акт про заміну пункту призначення вантажу" не буде підписаний усіма Учасниками документообігу або не буде відхилений одним з Учасників):

.. image:: pics_Create_Consignee_Change_Act_from/Create_Consignee_Change_Act_from_015.png
   :align: center

---------------------------------

.. include:: /_constant/kontakti.rst






