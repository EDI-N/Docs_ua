########################################################################################################################
Документообіг з мережею "Comfy" на платформі EDI Network 2.0
########################################################################################################################

.. сюда закину немного картинок для текста

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. |pencil_stencil| image:: /_constant/icons/pencil_stencil.png

.. |лупа2| image:: /_constant/icons/magnifying_glass2.png

.. |drag_dots| image:: /_constant/icons/drag_dots.png

.. |trash| image:: /_constant/icons/trash.png

.. |download| image:: /_constant/icons/download.png

.. |drop_pass| image:: signing/drop_pass.png

.. |del_key| image:: signing/del_key2.png

.. |bad_doc| image:: /general_2_0/pics_rabota_s_platformoj_EDIN_2.0/rabota_s_platformoj_066.png

.. role:: red

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 2

---------

Вступ
====================================

Дана інструкція описує порядок документообігу з мережею «Comfy» на платформі EDI Network 2.0. В документообігу за типовою схемою приймають участь наступні документи:

- `Попереднє Замовлення (ORDER , DOCTYPE = PO - попереднє замовлення) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x. html>`__
- `Підтвердження Попереднього Замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x.html>`__
- `Замовлення (ORDER) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x.html>`__
- `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/ORDER_x.html>`__
- `Статус Підтвердження замовлення (STATUS) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/STATUS_x.html>`__
- `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/DESADV_x.html>`__
- `Видаткова накладна (COMDOC_006) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_006_x.html>`__


**Загальна схема документообігу:**

.. image:: pics_Comfy_EDI_instruction/Comfy_EDI_001.png
   :height: 700px
   :align: center


**Опис взаємодії з контрагентом:**

- Comfy відправляє попереднє замовлення
- Постачальник у відповідь формує та відправляє Підтвердження замовлення 
- Comfy формує та відправляє документ Замовлення
- Постачальник відправляє Підтвердження замовлення у відповідь до документу «Замовлення».
- Comfy відправляє Статус на "Підтвердження замовлення" - погоджуючись на пропозицію Постачальника.
- По факту відвантаження, Постачальник відправляє Повідомлення про відвантаження та Видаткову накладну підписану зі сторони Постачальника за допомогою КЕП у ролі Вантажовідправника
- Comfy склад виконує приймання товару і, якщо розбіжності та зауваження зі сторони Comfy відсутні, - Comfy склад підписує Видаткову накладну за допомогою КЕП у ролі Вантажоодержувача
- Якщо розбіжності та зауваження зі сторони Comfy присутні, Comfy склад формує та відправляє Відмову від підписання Видаткової накладної з вказанням причини
- Якщо Постачальнику необхідно повторно відправити Видаткову накладну і попередньо відправлена Видаткова накладна на замовлення ще не підписана зі сторони Comfy - Постачальник формує відклик підпису на попередньо відправлений документ Видаткова накладна, формує та відправляє коректний документ Видаткова накладна підписаний за допомогою КЕП
- Якщо Постачальнику необхідно повторно відправити Видаткову накладну, але попередня Видаткова накладна на замовлення уже підписана зі сторони Comfy - формує та відправляє запит на Анулювання на попередньо відправлений документ

1 Вхід на платформу
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

.. _order-create:

2 Створення та відправка "Замовлення" (ORDER) на стороні мережі "COMFY"
==========================================================================================================================

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
   :start-after: .. початок блоку для Desadv_from_Ordrsp
   :end-before: .. кінець блоку для Desadv_from_Ordrsp
   

.. _comdoc006_from_desadv:

5 Формування Комерційного документа "Видаткова накладна" (COMDOC_006)
==========================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Vydatkova_Nakladna_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для comdoc006_from_desadv
   :end-before: .. кінець блоку для comdoc006_from_desadv
   

------------------------------------------------




.. include:: /_constant/kontakti.rst
