#############################################################################################################################
Документообіг з мережею "Novus" на платформі EDI Network 2.0. Інструкція для Постачальника
#############################################################################################################################

.. сюда закину немного картинок для текста

.. |bad_doc| image:: /general_2_0/pics_rabota_s_platformoj_EDIN_2.0/rabota_s_platformoj_066.png

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. role:: red

.. role:: green

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 5

---------

Вступ
====================================

Дана інструкція описує порядок документообігу з мережею "Novus" на платформі EDI Network 2.0. В документообігу приймають участь наступні документи (стандартні XML специфікації зазначених документів можна подивитись за посиланнями):

- `Замовлення (ORDER) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x.html>`__
- `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDRSP_x.html>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DESADV_x.html>`__
- `Підтвердження про прийом (RECADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/RECADV_x.html>`__
- `Прибуткова накладна (COMDOC_007) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_007_x.html>`__
- `Податкова накладна (DECLAR) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_007_x.html>`__
- `Анулювання (COMDOC_019) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_019_x.html>`__
- `Накладна на повернення (COMDOC_012) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_012_x.html>`__

**Загальна схема документообігу:**

.. image:: pics_Novus_EDI/Novus_EDI_001.png
   :height: 700px
   :align: center

1 Вхід на платформу
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

.. _ordrsp-create:

2 Створення та відправка «Підтвердження замовлення» (ORDRSP) на підставі вхідного «Замовлення» (ORDERS)
==============================================================================================================

.. include:: /retail_2.0/ORDRSP_na_EDI_Network.rst
   :start-after: .. початок блоку для Ordrsp_from_docs
   :end-before: .. кінець блоку для Ordrsp_from_docs


3 Створення та відправка "Повідомлення про відвантаження" (DESADV) на підставі «Підтвердження замовлення» (ORDRSP)
==================================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Ordrsp
   :end-before: .. кінець блоку для Desadv_from_Ordrsp

.. _comdoc-007-processing:

4 Обробка вхідної "Прибуткової накладної" (COMDOC_007)
==================================================================================================================================

Для обробки "Прибуткової накладної" (COMDOC_007) в сервісі "EDI Network" потрібно перейти у **"Вхідні"** та вибрати **"Прибуткова накладна"** в статусі :orange:`"Очікує на підписання отримувачем"` (для зручності можливо скористатись рядком `пошуку <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: /ClientProcesses/Varus/Varus_Instructions/pics_Varus_EDI/Varus_EDI_005.png
   :align: center

Відкриється форма документа, де Ви зможете ознайомитись з документом. Якщо Ви згодні з документом, його потрібно **"Підписати"**:

.. image:: /ClientProcesses/Varus/Varus_Instructions/pics_Varus_EDI/Varus_EDI_006.png
   :align: center

.. hint::
   Процес підписання є типовим на платформі EDI Network та описаний в `розділі нижче <https://wiki.edin.ua/uk/latest/ClientProcesses/Varus/Varus_Instructions/Varus_EDI.html#sign>`__.

Після підписання документ змінює свій статус на :green:`"Підписано двома сторонами"`.

.. note::
   Для того, щоб **Відхилити** "Прибуткову накладну" (COMDOC_007) можливо оформити типову для комерціних документів **"Відмову від підписання"** (`детальніше <https://wiki.edin.ua/uk/latest/_constant/comdoc_reject/comdoc_reject.html>`__):

   .. image:: /ClientProcesses/Varus/Varus_Instructions/pics_Varus_EDI/Varus_EDI_007.png
      :align: center

.. hint::
   Також після підписання документа (документ підписаний з обох сторін в статусі :green:`"Підписано двома сторонами"`) за згодою сторін можливо відправити **"Запит на анулювання"** документа (`детальніше <https://wiki.edin.ua/uk/latest/_constant/comdoc_repeal/comdoc_repeal.html>`__):

   .. image:: /ClientProcesses/Varus/Varus_Instructions/pics_Varus_EDI/Varus_EDI_008.png
      :align: center

   Ініціатором анулювання може виступати, як Мережа, так і Постачальник.

------------------------------------------------------

5 Формування "Податкової накладної" (DECLAR) на підставі "Прибуткової накладної" (COMDOC_007)
==================================================================================================================================





6 Відмова від підписання комерційних документів - COMDOC_021 квитанція №13
==================================================================================================================================

"Відмова від підписання" (COMDOC_021 квитанція №13) формується у відповідь на **підписаний з однієї сторони** (в статусі :orange:`"Очікує на підписання отримувачем"`) комерційний документ в тому випадку, коли документ неправильно оформлений, наприклад, невірно вказані дані в полях документа. 

Для відмови від підписання потрібно натиснути на кнопку **"Відмова від підписання"** з випадаючого списку **"Додаткові дії"** сторінки перегляду комерційного документа:

.. image:: /_constant/comdoc_reject/comdoc_reject_005.png
   :align: center

Відмова від підписання підтверджується за допомогою КЕП. Перед здійсненням підписання спочатку потрібно обрати дату відмови, ввести текст причини відмови і **"Перейти до зчитування КЕП"**:

.. image:: /_constant/comdoc_reject/comdoc_reject_004.png
   :align: center

Після чого відкриється форма для вибору КЕП для підписання:

.. image:: /_constant/comdoc_sign.png
   :align: center

.. note::
   Під час виконання **парної відмови від підписання** відображається стандартний `віджет виконання масових операцій <https://wiki.edin.ua/uk/latest/_constant/mass_widget/mass_widget.html>`__.

Після підписання змінюється статус документа на :red:`"Відмовлено в підписанні"`, відображається вказана причина відмови, а дія про відмові від підписання також відображається, якщо натиснути кнопку **"Переглянути підписи"**:

.. image:: /_constant/comdoc_reject/comdoc_reject_006.png
   :align: center

Документообіг завершено.

.. _sign:

Підписання на платформі EDIN 2.0
=========================================================================================================================

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

-------------------------------------

.. include:: /_constant/kontakti.rst
