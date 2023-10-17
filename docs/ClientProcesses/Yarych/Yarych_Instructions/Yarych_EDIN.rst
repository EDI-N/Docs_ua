####################################################################################################################################
Створення та відправка «Повідомлення про відвантаження» (DESADV) та «Рахунку» (INVOICE). Інструкція для Виробника "Yarych" 
####################################################################################################################################

.. сюди закину трохи картинок для тексту

.. role:: red

.. contents:: Зміст:
   :depth: 2

---------

Вступ
====================================

Дана інструкція описує порядок алгоритм створення «Повідомлення про відвантаження» (DESADV) та «Рахунку» (INVOICE) у відповідь на вхідне "Замовлення" (ORDERS) на платформі EDI Network 2.0. В документообігу приймають участь наступні документи:

- `Замовлення <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#order>`__
- `Повідомлення про відвантаження <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#desadv>`__
- `Рахунок <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#invoice>`__

1 Вхід на платформу
====================================

.. include:: /general_2_0/rabota_s_platformoj_EDIN_2.0.rst
   :start-after: .. початок блоку для Enter
   :end-before: .. кінець блоку для Enter

Після успішної авторизації відкриється основне меню, де у вкладці **"Продукти та рішення"** EDIN потрібно обрати сервіс **"EDI Network"**:

.. image:: /_constant/pics_landing/landing_edi.png
   :align: center

**2 Створення «Повідомлення про відвантаження» (DESADV) на підставі вхідного «Замовлення» (ORDER)**
==================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Uvedomlenie_ob_otgruzke_DESADV_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для Desadv_from_Order
   :end-before: .. кінець блоку для Desadv_from_Order

**3 Створення «Рахунку» (INVOICE) на підставі вхідного «Замовлення» (ORDER)**
==================================================================================================================

.. include:: /retail_2.0/formirovanie_otpravka_dokumenta_Schetfaktura_INVOICE_na_EDI_Network_2.0.rst
   :start-after: .. початок блоку для INVOICE_standart
   :end-before: .. кінець блоку для INVOICE_standart

-------------------------------------

.. include:: /_constant/kontakti.rst