########################################################################################################################
Документообіг з мережею "АТБ" на платформі EDI Network 2.0: "Міжнародні поставки". Інстукція Постачальника
########################################################################################################################

.. сюда закину немного картинок для текста

.. |лупа| image:: pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_003.png

.. |будинок| image:: pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_004.png

.. |прокрутка1| image:: /retail_2.0/pics_formuvannia_Condra/formuvannia_Condra_026.png

.. |прокрутка2| image:: /retail_2.0/pics_formuvannia_Condra/formuvannia_Condra_027.png

.. |trash| image:: /retail_2.0/pics_formuvannia_Condra/formuvannia_Condra_025.png

.. role:: red

.. contents:: Зміст:
   :depth: 2

---------

Вступ
====================================

Дана інструкція описує порядок документообігу з мережею "АТБ" на платформі EDI Network 2.0 за схемою передбаченою для міжнародних перевезень. В документообігу приймають участь наступні документи:

- `Замовлення <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#order>`__
- `Підтвердження замовлення <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#ordrsp>`__
- `Повідомлення про відвантаження <https://wiki.edin.ua/uk/latest/ClientProcesses/ATB/ATB_XML-structure.html#desadv>`__
- `Рахунок <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/INVOICE_x.html>`__
- `Універсальний документ <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/CONDRA_x.html>`__

**Загальна схема документообігу:**

.. image:: pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_053.png
   :height: 700px
   :align: center

.. початок блоку для Universal_International_deliveries

1 Вхід на платформу
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

.. _ordrsp-create:

2 Формування "Підтвердження замовлення" (ORDRSP) на підставі вхідного "Замовлення" (ORDER)
==============================================================================================================

Мережа є ініціатором документообігу і надсилає "Замовлення" (ORDER). Для формування "Підтвердження замовлення" (ORDRSP) потрібно у папці **"Вхідні"** обрати "Замовлення" (ORDER), за яким потрібно зробити підтвердження (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_054.png
   :align: center

Потрібно відкрити вхідне "Замовлення" (ORDER) лівою кнопкою миші та створити "Підтвердження замовлення" (ORDRSP) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ для Мережі за допомогою кнопки **"Створити документ"**:

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_055.png
   :align: center

У відкритій формі "Підтвердження замовлення" (ORDRSP) деякі поля заповнюються автоматично з пов'язаного "Замовлення" (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_056.png
   :align: center

Дані **Відправника** / **Одержувача** заповнюються автоматично з документа-підстави та обраної компанії і не підлягають редагуванню. Підтип документа **Підтвердження замовлення** (*Підтвердження замовлення*, *Заміна підтвердження замовлення*, *Видалення підтвердження замовлення*), **Номер**, **Дата** / час документа заповнюються автоматично, але доступні до редагування за потреби. Дані **Покупець**, **Постачальник**, **Місце доставки** також заповнюються автоматично - їх можливо редагувати за допомогою кнопок "Пошук контрагента" (|лупа|) чи "Вказати себе" (|будинок|);

.. hint::
   За допомогою кнопки **"Пошук контрагента"** (|лупа|) або ж за допомогою кнопки **"Вказати себе"** (|будинок|) можливо вказати чи змінити дані контрагентів. При **"Пошуку контрагента"** (|лупа|) у виникаючому вікні введіть назву компанії, GLN або ІПН:

   .. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_005.png
      :align: center

В такий же спосіб можливо опціонально додати інформацію про **Кінцевого одержувача**, **Платника**, **Точку відвантаження**, **Вантажоодержувача**. Дані з "Замовлення" переносяться автоматично і недоступні до редагування.

Обов'язково потрібно обрати валюту з випадаючого списку (Гривня / Євро / Долар США):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_070.png
   :align: center

Блоки **Додаткова інформація** та **Рампи** необов'язкові для заповнення і "згорнуті" за замовчуванням. Блок **Разом** розраховується автоматично після заповнення табличних позицій.

В табличній частині відображається основна інформація по замовлених **товарних позиціях**. **Товарні позиції** переносяться з "Замовлення" і за замовчуванням мають статус "Буде доставлено". Можливо коригувати значення **Підтверджена кількість** товару прямо в таблиці (при цьому в товарній позиції автоматично проставляється "Зміна кількості"):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_057.png
   :align: center

.. attention::
   Підтверджена кількість товарних позицій не може перевищувати зазначену в "Замовленні"!

Також можливо обрати (відмітити чекером) позиції, за якими потрібно змінити статус доставки на **Буде доставлено** (**Підтверджена кількість** = **Замовлена кількість**) або **Відмовлено** (**Підтверджена кількість** =0) за допомогою кнопки **"Дії над вибраними"**:

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_058.png
   :align: center

:red:`Всі зміни за позиціями проводяться тільки після узгодження з мережею!`

Постачальник може редагувати "Підтверджену кількість" та "Ціну без ПДВ" прямо в таблиці чи **"Змінити"** дані позиції в розширеній формі "Дані товару" після натискання на штрихкод позиції:

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_068.png
   :align: center

Якщо по якійсь з позицій не буде поставки її необхідно відзначити галочкою і **"Видалити"**. Також можливо **"+Додати"** нові товарні позиції, але ці дії потрібно узгоджувати з мережею.

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_069.png
   :align: center

Після внесення всіх даних в документ, натисніть кнопку **"Зберегти"** (1), потім **"Відправити"** (2):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_059.png
   :align: center

Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходиться в `ланцюжку <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ документів разом із "Замовленням":

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_060.png
   :align: center

.. _desadv-create:

3 Формування "Повідомлення про відвантаження" (DESADV)
=========================================================================================================================

Формування документа "Повідомлення про відвантаження" (DESADV) на платформі EDI Network можливо здійснити, як на підставі "Замовлення" (ORDER), так і на підставі "Підтвердження замовлення" (ORDRSP).

Розглянемо формування документа "Повідомлення про відвантаження" (DESADV) на підставі "Підтвердження замовлення" (ORDRSP).

Для цього потрібно у папці **"Надіслані"** обрати "Підтвердження замовлення" (ORDRSP), за яким потрібно зробити відвантаження (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_061.png
   :align: center

Потрібно відкрити надіслане "Підтвердження замовлення" (ORDRSP) лівою кнопкою миші та створити "Повідомлення про відвантаження" (DESADV) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ для Мережі за допомогою кнопки **"Створити документ"**:

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_062.png
   :align: center

У відкритій формі "Повідомлення про відвантаження" (DESADV) майже всі поля заповнюються автоматично з пов'язаного документа-підстави (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_063.png
   :align: center

Дані **Відправника** заповнюються автоматично з обраної компанії і не підлягають редагуванню. Дані **Одержувача** також заповнюються автоматично (з документа-підстави) - їх можливо редагувати за допомогою кнопки "Пошук контрагента" (|лупа|). **Номер** документа співпадає з номером документа-підстави, **Дата** / час документа, що заповнюються автоматично, також доступні до редагування за потреби. Дані **Постачальник**, **Покупець**, **Місце доставки** також заповнюються автоматично - їх можливо редагувати за допомогою кнопок "Пошук контрагента" (|лупа|) чи "Вказати себе" (|будинок|);

.. hint::
   За допомогою кнопки **"Пошук контрагента"** (|лупа|) або ж за допомогою кнопки **"Вказати себе"** (|будинок|) можливо вказати чи змінити дані контрагентів. При **"Пошуку контрагента"** (|лупа|) у виникаючому вікні введіть назву компанії, GLN або ІПН:

   .. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_005.png
      :align: center

В такий же спосіб можливо опціонально додати інформацію про **Кінцевого одержувача**. Дані з "Замовлення" переносяться автоматично і недоступні до редагування. Блоки **Додаткова інформація** та **Транспортування** необов'язкові до заповнення і "згорнуті" за замовчуванням. Блок **Разом** розраховується автоматично після заповнення позицій.

:red:`Всі зміни за позиціями проводяться тільки після узгодження з мережею!`

Постачальник може редагувати "Кількість, що постачається", "Ціну без ПДВ" та "Ставку ПДВ" прямо в таблиці чи **"Змінити"** дані позиції в розширеній формі "Дані товару" після натискання на штрихкод позиції:

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_064.png
   :align: center

.. attention::
   Кількість товарних позицій, що постачається не може перевищувати кількість зазначену в "Замовленні"!

Якщо по якійсь з позицій не буде поставки її необхідно відзначити галочкою і **"Видалити"**. Також можливо **"+Додати"** нові товарні позиції, але ці дії потрібно узгоджувати з мережею.

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_065.png
   :align: center

Після внесення всіх даних в документ, натисніть кнопку **"Зберегти"** (1), потім **"Відправити"** (2):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_066.png
   :align: center

Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходиться в `ланцюжку <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ документів разом із "Замовленням" і "Підтвердженням замовлення" (цифрою відзначається кількість документів в ланцюжку):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_067.png
   :align: center

.. _invoice-create:

4 Формування "Рахунку" (INVOICE)
=========================================================================================================================

.. зараз все стандартно, тому копіпастимо сюди:

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Schetfaktura_INVOICE_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для INVOICE_standart
   :end-before: .. кінець блоку для INVOICE_standart

.. _condra-create:

5 Формування "Універсального документа" (CONDRA) на підставі відправленого "Повідомлення про відвантаження" (DESADV)
=========================================================================================================================

Для формування "Універсального документа" (CONDRA) потрібно у папці **"Надіслані"** обрати "Повідомлення про відвантаження" (DESADV) (для зручності можливо скористатись `пошуком <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_071.png
   :align: center

Потрібно відкрити надіслане "Повідомлення про відвантаження" (DESADV) лівою кнопкою миші та створити "Універсальний документ" (CONDRA) в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ для Мережі за допомогою кнопки **"Створити документ"**:

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_072.png
   :align: center

У відкритій формі "Універсального документа" (CONDRA) деякі поля заповнюються автоматично з пов'язаного документа-підстави (обов'язкові до заповнення поля позначені червоною зірочкою :red:`*`):

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_073.png
   :align: center

Дані **Відправника** заповнюються автоматично з обраної компанії і не підлягають редагуванню. Дані **Одержувача** також заповнюються автоматично (з документа-підстави) - їх можливо редагувати за допомогою кнопки "Пошук контрагента" (|лупа|). **Номер** документа співпадає з номером документа-підстави, **Дата** документа, що заповнюються автоматично, також доступні до редагування за потреби. 

Опціонально можливо обрати тип документа, вказати номер/дату договору; номер та дата документа-підстави зазначається автоматично.

Дані **Постачальник**, **Покупець**, **Місце доставки** також заповнюються автоматично - їх можливо редагувати/додавати за допомогою кнопок "Пошук контрагента" (|лупа|) чи "Вказати себе" (|будинок|);

.. hint::
   За допомогою кнопки **"Пошук контрагента"** (|лупа|) або ж за допомогою кнопки **"Вказати себе"** (|будинок|) можливо вказати чи змінити дані контрагентів. При **"Пошуку контрагента"** (|лупа|) у виникаючому вікні введіть назву компанії, GLN або ІПН:

   .. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_005.png
      :align: center

За допомогою кнопки **"Оберіть файл"** можливо обрати та додати супровідні документи у вигляді pdf-файлів, наприклад, сертифікат (файли обираються з вашого локального носія):

.. include:: /retail_2.0/formuvannia_universalnoho_dokumenta_Condra.rst
   :start-after: .. початок блоку для CONDRA_standart
   :end-before: .. кінець блоку для CONDRA_standart

Після внесення всіх даних в документ, натисніть кнопку **"Зберегти"** (1), потім **"Відправити"** (2) без підписання:

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_074.png
   :align: center
   
Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходитись в `ланцюжку <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ разом із пов'язаними документами:

.. image:: /ClientProcesses/ATB/ATB_Instructions/pics_ATB_International_deliveries_instruction/ATB_International_deliveries_instruction_075.png
   :align: center

За потреби Мережа може створити у відповідь "Універсальний документ" (CONDRA) разом з запропонованими правками і коментарями.

.. кінець блоку для Universal_International_deliveries

-------------------------------------

.. include:: /_constant/kontakti.rst
