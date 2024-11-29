Створення "Підтвердження заявки на транспортування" на базі інших електронних документів
###################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. role:: red

.. role:: green

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 3

---------

Для реалізації різних схем електронного документообігу документ "Підтвердження заявки на транспортування" можливо створити на підставі "Замовлення" (ORDER), "Повідомлення про відвантаження" (DESADV), «Заявки на транспортування» (TRANSPORTATIONORDER з SUBDOCTYPE = 1). Ініціатором "Підтвердження заявки на транспортування" виступає користувач з роллю **"Перевізник"** (при роботі з транспортними документами передбачені 4 основні ролі учасників документообігу: **"Замовник"**, **"Вантажовідправник"**, **"Перевізник"**, **"Вантажоотримувач"**). Обмін документами здійснюється між **"Перевізником"** та **"Замовником"**:

:green:`"Перевізник" -> "Замовник"`

.. _create-from-proposal:

**1 Створення "Підтвердження заявки на транспортування" на підставі "Заявки на транспортування"**
====================================================================================================================================

.. початок блоку для Proposal_Confirmation_from_Proposal

Для створення "Підтвердження заявки на транспортування" на підставі "Заявки на транспортування" в сервісі "EDI Network" **Перевізнику** потрібно перейти у **"Вхідні"** та вибрати **"Заявку на транспортування"** в статусі :green:`"Підписано перевізником"` чи :orange:`"Очікує підписання перевізником"` (для зручності можливо скористатись рядком `пошуку <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_001.png
   :align: center

.. note::
   **"Заявку на транспортування"** в статусі :orange:`"Очікує підписання перевізником"` попередньо можливо **"Підписати"**: 

   .. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_002.png
      :align: center

У відкритому документі натисніть **"Створити документ"** "Підтвердження заявки на транспортування" в блоці `ланцюжка документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ :

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_003.png
   :align: center

Відкриється форма редагування документа "Підтвердження заявки на транспортування", що включає в собі дані "Заявки на транспортування":

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_032.png
   :align: center

.. hint::
   Якщо **"Замовник"** знав хто буде здійснювати поставку і заповнив дані по авто і водієві в "Заявці на транспортування", то блок "Підтвердження заявки на транспортування" автоматично заповнюється цим даними (поля доступні до редагування/доповнення):

   .. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_019.png
      :align: center

.. attention::
   Якщо фактичне **перевезення бути виконувати інший перевізник** (не той, що зазначений в полі "Автомобільний перевізник") його можливо вказати в полі "Фактичний перевізник", обравши за допомогою кнопки **"Пошук контрагента"** (|лупа|) за назвою компанії / GLN / ІПН:

   .. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_023.png
      :align: center

   При цьому на етапі формування електронної **"ТТН"** на підставі даного **"Підтвердження заявки на транспортування"** саме "Фактичний перевізник" буде зазначений контрагентом ("Автомобільний перевізник" **"Підтвердження заявки на транспортування"** при цьому приймає участь в документообігу **"ТТН"** в якості "Експедитора" - опціональний учасник)!

   .. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_024.png
      :align: center

.. hint::

   Якщо в поточному `ланцюжку документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__ вже присутнє підписане "Підтвердження заявки на транспортування" (або його попередня підписана "Заявка на транспортування" з даними про перевезення), то можливо заповнити цими даними порожню форму документа, натиснувши **"Додаткові дії"** -> **"Додати дані з Підтвердження заявки на транспортування"**:

   .. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_033.png
      :align: center

   Якщо під час такого додавання даних було знайдено кілька документів, то потрібно обрати один зі списку в модальному вікні та натиснути **"Додати дані"**:

   .. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_035.png
      :align: center

   Якщо під час додавання документів з даними не знайдено, то Ви отримаєте відповідне сповіщення:

   .. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_034.png
      :align: center

Для автомобілів та причепів реалізований Ваш особистий довідник, що автоматично формується при додаванні нового транспортного засобу (кнопка **"+Новий транспортний засіб"**). При додаванні нового транспортного засобу в модальному вікні потрібно заповнити "Реєстраційний номер", "Марка", "Модель", "Тип" (також при заповненні "Довжина" / "Ширина" / "Висота" / "Загальна вага без вантажу" вся група стає теж обов'язковою до заповнення):

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_017.png
   :align: center

.. hint::
   Для раніше введеного реєстрайійного номеру (лише латинниця), наприклад, **AA0001AA** користувач може скористатись пошуком з довідника (min 4 символи), наприклад, ``AA00, 0001, 01AA, ...``:

   .. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_018.png
      :align: center

   Також через наш пошук можливо за повним збігом (8 символів) знайти транспортний засіб у відкритих джерелах:

   .. image:: /ETTN_3_0/pics_Create_ETTN/Create_ETTN_075.png
      :align: center

   **Примітка:** запис про зміни даних транспортного засобу вносяться в довідник лише при відправці документа!

Після додавання чи вибору транспортного засобу з'являються кнопки:

* **"Обрати"** - вибір іншого транспортного засобу;
* **"Змінити"** - редагування даних обраного транспортного засобу (редагування довідника);
* **"Очистити"** - видалити введені в рядок дані.

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_020.png
   :align: center

.. note::
   Незважаючи на те, що поля причіпа/напівпричіпа є опціональним, при їх наявності такі дані є обов'язковими до заповнення! 

Принцип заповнення причіпа/напівпричіпа теж реалізований через довідник (аналогічно додаванню даних про автомобіль): 

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_021.png
   :align: center

По кожному вказаному транспортному засобу є можливість зазначити температурний режим (ми рекомендуємо заповнювати поля температурного режиму для більш точної інформації по умовам перевезення в документі та кращого порозуміння з Вашими контрагентами):

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_022.png
   :align: center

Дані **"Водія"** можливо обрати за допомогою кнопки **"Пошук контрагента"** (|лупа|) за ПІБ / ІПН / даними водійського посвідчення:

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_011.png
   :align: center

Для видалення інформації щодо вантажу в табличній частині можливо навести курсор на рядок цього вантажу та натиснути **"Видалити"** (або масово відмітити галочками та **"Видалити"** кнопкою над таблицею):

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_025.png
   :align: center

До відправки документа можливо змінити також й послідовність маршрутів, перетягнувши позицію лівою кнопкою миші за |drag_dots|:

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_026.gif
   :align: center

Для збереження "Заявки на транспортування" необхідно натиснути кнопку **"Зберегти"**, документ потрапить у папку **"Чернетки"**:

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_027.png
   :align: center

Після того, як усі обов'язкові поля заповнені та збережені документ можливо **"Підписати"**:

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_028.png
   :align: center

.. hint::
   Також для даного документа доступні `масове підписання та масова відправка <https://wiki.edin.ua/uk/latest/general_2_0/massovi_operacii_EDIN_2.0.html#mass-sign-and-send>`__.

.. кінець блоку для Proposal_Confirmation_from_Proposal

.. _sign:

**1.1 Підписання та відправка "Підтвердження заявки на транспортування" Перевізником**
-----------------------------------------------------------------------------------------------------

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

   .. tab:: Cloud

      .. include:: /_constant/cloud_signing/cloud_signing.rst
         :start-after: .. початок блоку для CloudSign
         :end-before: .. кінець блоку для CloudSign

.. початок блоку для Proposal_Confirmation_from_Proposal2

Після підписання "Підтвердження заявки на транспортування" окремим блоком відображається інформація про підписантів. Підписаний документ можливо **"Надіслати"**:

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_029.png
   :align: center

Після відправки документа контрагенту він відображається в журналі вихідних документів. Відправленому **"Перевізником"** "Підтвердженню заявки на транспортування" присвоюється статус :orange:`"Очікує підписання замовником"`:

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_030.png
   :align: center

Відправлене "Підтвердження заявки на транспортування" має наступний вигляд:

.. image:: /ETTN_3_0/pics_Create_Proposal_Confirmation_from/Create_Proposal_Confirmation_from_031.png
   :align: center

В правій частині відображається блок з даними про `ланцюжок документів <https://wiki.edin.ua/uk/latest/_constant/chain/chain.html>`__. Інформація про нового підписанта відображається після натискання кнопки **"Переглянути підписи"**. У разі помилкової відправки документа можливо виконати **"Відкликання підпису"** (`детальніше про відкликання <https://wiki.edin.ua/uk/latest/ETTN_3_0/Proposal_Confirmation_Revoke.html>`__).

.. кінець блоку для Proposal_Confirmation_from_Proposal2

---------------------------------

.. include:: /_constant/kontakti.rst
