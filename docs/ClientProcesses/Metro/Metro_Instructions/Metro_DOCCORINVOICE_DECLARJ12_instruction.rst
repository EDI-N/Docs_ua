###########################################################################################################################################
Формування Коригувальних Товарної і Податкової накладних (РКТН и РКПН). Інструкція для Постачальників мережі "МЕТРО"
###########################################################################################################################################

.. сюда закину немного картинок для текста

.. role:: red

.. role:: green

.. role:: underline

.. |лупа| image:: pics_Metro_DOCCORINVOICE_DECLARJ12_instruction/Metro_DOCCORINVOICE_DECLARJ12_instruction_004.png

.. |будинок| image:: pics_Metro_DOCCORINVOICE_DECLARJ12_instruction/Metro_DOCCORINVOICE_DECLARJ12_instruction_005.png

.. contents:: Зміст:
   :depth: 2

---------

Вступ
==============================================================

Дана інструкція описує порядок роботи з `"Коригування до товарної накладної" (DOCCORINVOICE) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#doccorinvoice>`__ (далі **РКТН**) та `"Коригування до податкової накладної" (DECLARj12) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#declarj12>`__ (далі **РКПН**) для Постачальників мережі "МЕТРО Кеш енд Кері Україна" на web-платформі EDIN 2.0.

**Загальна схема документообігу:**

.. image:: /ClientProcesses/Metro/Metro_schema.png
   :height: 500px
   :align: center

Інструкція описує порядок формування цих документів, як то передбачено процесом: завершеним `ланцюжком <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ документообігу з мережею "МЕТРО" є відправлений документ "Коригування до товарної накладної" (DOCCORINVOICE) з коректним статусом, а також створений на його підставі документ "Коригування до податкової накладної" (DECLARj12).

**1 Вхід на платформу**
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

.. attention::
   Перед початком роботи з даними документами необхідно заповнити всі реквізити компанії в **"Особистому кабінеті"** -> **"Налаштування"** -> `"Компанії" <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__.

**2 Формування "Коригування до товарної накладної" (DOCCORINVOICE)**
====================================================================================================================

У випадку коли Постачальник чи Мережа знайшли помилки в підписаній "Товарній накладній" (DOCUMENTINVOICE), Постачальнику потрібно формувати "Коригування до товарної накладної" (DOCCORINVOICE).

.. include:: /retail_2.0/Create_DOCCORINVOICE_from.rst
   :start-after: .. початок блоку для DOCCORINVOICE_from_DOCUMENTINVOICE_TN_001
   :end-before: .. кінець блоку для DOCCORINVOICE_from_DOCUMENTINVOICE_TN_001

.. _sign:

**2.1 Підписання та відправка "Коригування до товарної накладної" (DOCCORINVOICE) Постачальником**
---------------------------------------------------------------------------------------------------------

.. include:: /retail_2.0/Create_DOCCORINVOICE_from.rst
   :start-after: .. початок блоку для DOCCORINVOICE_from_DOCUMENTINVOICE_TN_002
   :end-before: .. кінець блоку для DOCCORINVOICE_from_DOCUMENTINVOICE_TN_002

Мережа "МЕТРО" зі своєї сторони обробляє документ та надає їм статуси:

- «**Документ переданий партнеру**» - товарна накладна коректна.
- «**Документ переданий на ящик партнера**» - товарна накладна коректна.
- «**Правильний канал не знайдено. Немає з'єднання з партнером**» - в товарній накладній зазначений некоректний GLN одержувача і покупця.
- «**Помилка конвертації на вихідний формат**» - є помилка у формі заповнення товарної накладної. Деякі поля були не заповнені або заповнені некоректно.

**3 Формування "Коригування до податкової накладної" (DECLARj12)**
====================================================================================================================

"Коригування до податкової накладної" (DECLARj12) можливо створити на підставі відправленого "Коригування до товарної накладної" (DOCCORINVOICE). Для цього потрібно у папці **"Надіслані"** обрати відповідний документ (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: pics_Metro_DOCCORINVOICE_DECLARJ12_instruction/Metro_DOCCORINVOICE_DECLARJ12_instruction_012.png
   :align: center

Для формування "Коригування до податкової накладної" (DECLARj12) натисніть **"Створити документ"** в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ для мережі "МЕТРО" та оберіть ставку ПДВ - документ створиться автоматично:

.. image:: pics_Metro_DOCCORINVOICE_DECLARJ12_instruction/Metro_DOCCORINVOICE_DECLARJ12_instruction_013.png
   :align: center

У відкритій формі "Коригування до податкової накладної" (DECLARj12) обов'язкові до заповнення поля (позначені червоною зірочкою :red:`*`) частково заповнюються автоматично з пов'язаного "Коригування до товарної накладної" (DOCCORINVOICE):

.. image:: pics_Metro_DOCCORINVOICE_DECLARJ12_instruction/Metro_DOCCORINVOICE_DECLARJ12_instruction_014.png
   :align: center

В нижній частині документа знаходиться перелік товарних позицій, які переносяться з "Коригування до товарної накладної" (DOCCORINVOICE):

.. image:: pics_Metro_DOCCORINVOICE_DECLARJ12_instruction/Metro_DOCCORINVOICE_DECLARJ12_instruction_015.png
   :align: center

Після заповнення всіх даних документ потрібно (1) **"Зберегти"**, (2) **"Підписати"** (процес описаний в `розділі вище <https://wiki.edin.ua/uk/latest/ClientProcesses/Metro/Metro_Instructions/Metro_DOCCORINVOICE_DECLARJ12_instruction.html#sign>`__) та (3) **"Відправити"**:

.. image:: pics_Metro_DOCCORINVOICE_DECLARJ12_instruction/Metro_DOCCORINVOICE_DECLARJ12_instruction_016.png
   :align: center

Після перевірки документа органом Державної Податкової Інспекції, йому буде присвоєно статус:

* На коректний документ надійде статус **"Зареєстровано в ЄРПН і відправлено покупцеві"**.
* На некоректний документ надійде статус  **"Помилка при реєстрації в ЄРПН"**.

---------------------------------

.. include:: /_constant/kontakti.rst
