########################################################################################################################
Документообіг з мережею "Сільпо" на платформі EDI Network 2.0 за схемою "Магазини"
########################################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. |pencil_stencil| image:: /_constant/icons/pencil_stencil.png

.. |лупа2| image:: /_constant/icons/magnifying_glass2.png

.. |drag_dots| image:: /_constant/icons/drag_dots.png

.. |trash| image:: /_constant/icons/trash.png

.. |download| image:: /_constant/icons/download.png

.. role:: red

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 5

---------

Вступ
====================================

Дана інструкція описує порядок документообігу на платформі EDI Network 2.0 з мережею "Сільпо" за схемою "Магазини". В документообігу за даною схемою приймають участь наступні документи:

- `Замовлення (ORDER) <https://wiki.edin.ua/uk/latest/ClientProcesses/Silpo/Silpo_XML-structure.html#order>`__
- `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/ClientProcesses/Silpo/Silpo_XML-structure.html#ordrsp>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/ClientProcesses/Silpo/Silpo_XML-structure.html#desadv>`__

Документообіг здійснюється між двома Учасниками, де ініціатором виступає мережа "Сільпо".

**Загальна схема документообігу:**

.. image:: pics_Silpo_shops/Silpo_shops_001.png
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

.. _order-create:

2 Створення та відправка "Замовлення" (ORDER) на стороні мережі "Сільпо"
==============================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_ORDER_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Order_from_zero
   :end-before: .. кінець блоку для Order_from_zero

.. _ordrsp_from_order:

3 Створення "Підтвердження замовлення" (ORDRSP) на підставі вхідного "Замовлення" (ORDER)
==========================================================================================================================

.. include:: /retail_2.0/ORDRSP_na_EDI_Network.rst
   :start-after: .. початок блоку для Ordrsp_from_docs
   :end-before: .. кінець блоку для Ordrsp_from_docs

.. _desadv_from_ordrsp:

4 Створення "Повідомлення про відвантаження" (DESADV) на підставі надісланого "Підтвердження замовлення" (ORDRSP)
==========================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Ordrsp_Silpo1
   :end-before: .. кінець блоку для Desadv_from_Ordrsp_Silpo1

.. image:: pics_Silpo_shops/Silpo_shops_002.png
   :align: center

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Ordrsp_Silpo2
   :end-before: .. кінець блоку для Desadv_from_Ordrsp_Silpo2

**Товарні позиції** переносяться з "Замовлення". Можливо коригувати значення **Кількість, що постачається**, **Кількість ящиків**, **Ціна без ПДВ**, **Ціна з ПДВ** (підраховується автоматично) та **Ставка ПДВ** прямо в таблиці чи **"Змінити"** "Дані позиції" в розширеній формі після натискання на штрих-код позиції:

.. image:: pics_Silpo_shops/Silpo_shops_004.png
   :align: center

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Ordrsp_Silpo3
   :end-before: .. кінець блоку для Desadv_from_Ordrsp_Silpo3

При створенні документу в Чернетки дозволяється відсутність даних в полі **Кількість ящиків** по одній або декільком товарним позиціям. Але при відправці документу буде показано помилку, якщо хоча б по одній товарній позиції поле **Кількість ящиків** не заповнене, оскільки це поле обов'язкове:

.. image:: pics_Silpo_shops/Silpo_shops_003.png
   :align: center

   
------------------------------------------------

.. include:: /_constant/kontakti.rst
