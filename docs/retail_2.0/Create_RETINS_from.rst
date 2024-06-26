########################################################################################################################
Створення "Інструкції про повернення" (RETINS) на базі інших електронних документів
########################################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. role:: red

.. contents:: Зміст:
   :depth: 2

---------

Вступ
====================================

Дана інструкція описує порядок формування та відправки документа "Інструкція про повернення" (RETINS). Зазвичай даний документ відправляється Постачальником у відповідь на "Повідомлення про повернення" (RETANN) і використовується для підтвердження або редагування дати та часу прибуття Постачальника.

1 Створення "Інструкції про повернення" (RETINS) на підставі вхідного "Повідомлення про повернення" (RETANN)
===============================================================================================================================

.. початок блоку для Retins_from_Retann

Щоб сформувати "Інструкцію про повернення" (RETINS) на підставі "Повідомлення про повернення" (RETANN) Вам потрібно в меню сервісу **"EDI Network"** увійти в папку "Вхідні" і обрати "Повідомлення про повернення" (RETANN), як документ-підставу (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /retail_2.0/pics_Create_RETINS_from/Create_RETINS_from_002.png
   :align: center
   
Потрібно відкрити вхідне "Повідомлення про повернення" (RETANN) лівою кнопкою миші та створити "Інструкцію про повернення" (RETINS) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ за допомогою кнопки **"Створити документ"**:

.. image:: /retail_2.0/pics_Create_RETINS_from/Create_RETINS_from_001.png
   :align: center

У відкритій формі "Інструкції про повернення" (RETINS) значна частина полів заповнюються автоматично з пов'язаного "Повідомлення про повернення" (RETANN) (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`):

.. image:: /retail_2.0/pics_Create_RETINS_from/Create_RETINS_from_003.png
   :align: center

Дані **Відправника** та **Одержувача** - це Ваші дані та дані Вашого Контрагента, що заповнюються з документа підстави автоматично і не підлягають редагуванню.

**Номер**, **Дата** документа заповнюються автоматично, але доступні до редагування за потреби. Дані **Покупець**, **Постачальник**, **Місце доставки** також заповнюються автоматично - їх можливо редагувати за допомогою кнопок "Пошук контрагента" (|лупа|) чи "Вказати себе" (|будинок|);

.. hint::
   За допомогою кнопки **"Пошук контрагента"** (|лупа|) або ж за допомогою кнопки **"Вказати себе"** (|будинок|) можливо вказати чи змінити дані Покупця або Постачальника. Для пошуку введіть назву компанії, GLN або ІПН:

   .. image:: /retail_2.0/pics_formirovanie_ORDERS_na_EDI_Network_2.0/ORDERS_na_EDI_Network_2.0_024.png
      :align: center

Окремим блоком обов'язково зазначаються **Дата/час повернення** та **Дія** (Відмовлено / Прийнято / Змінено). За потреби можливо внести **Версію документа**, **Додаткову інформацію** (наповнення блоку **Додаткова інформація** відкривається кнопкою **"Розгорнути"**).

**Товарні позиції** переносяться з документа-підстави. **"Змінити"** "Кількість до повернення" чи вказати додаткову причину повернення до товарної позиції можливо через pop-up вікно, що відкривається по кліку на штрихкод товару:

.. image:: /retail_2.0/pics_Create_RETINS_from/Create_RETINS_from_004.png
   :align: center

Після внесення всіх даних потрібно **"Зберегти"** (1) документ, після чого його можливо **"Відправити"** (2):

.. image:: /retail_2.0/pics_Create_RETINS_from/Create_RETINS_from_005.png
   :align: center

Після збереження документ можливо знайти в папці **"Чернетки"**. Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходиться в ланцюжку документів разом із "Замовленням":

.. image:: /retail_2.0/pics_Create_RETINS_from/Create_RETINS_from_006.png
   :align: center

.. кінець блоку для Retins_from_Retann

-------------------------------------

.. include:: /_constant/kontakti.rst
