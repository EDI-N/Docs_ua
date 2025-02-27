Підтвердження запиту на анулювання "Заявки на транспортування"
###################################################################################################

.. contents:: Зміст:
   :depth: 3

---------

.. початок блоку для Proposal_Repeal_Accept

.. role:: red

.. role:: green

.. role:: orange

.. role:: underline

.. |info2| image:: /_constant/icons/info2.png

Після того, як компанія-ініціатор створила "Запит на анулювання" документ змінює свій статус на :orange:`"Надіслано запит на анулювання"` і в журналі такий документ відмічений інформаційною іконкою |info2|:

.. image:: /ETTN_3_0/pics_Proposal_Repeal_Accept/Proposal_Repeal_Accept_001.png
   :align: center

Для того, щоб "прийняти анулювання" (створити COMDOC_019 (квитанція №12)) **отримувачу** "запиту на анулювання" (є квитанція №11) потрібно відкрити "Заявку на транспортування" (TRANSPORTATIONORDER з SUBDOCTYPE=1) і натиснути **"Підтвердити запит на анулювання"**:

.. image:: /ETTN_3_0/pics_Proposal_Repeal_Accept/Proposal_Repeal_Accept_002.png
   :align: center

.. note::
   Функціонал також доступний і для інтегрованих користувачів (`API <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/APIv2_list.html>`_).

Після чого відкриється форма для вибору КЕП для підписання:

.. image:: /_constant/comdoc_sign.png
   :align: center

Після підписання змінюється статус документа на :red:`"Анульовано"`, якщо натиснути кнопку **"Переглянути підписи"**, то там відображається весь список дій, що потребували підписання:

.. image:: /ETTN_3_0/pics_Proposal_Repeal_Accept/Proposal_Repeal_Accept_003.png
   :align: center

Документообіг завершено.

.. кінець блоку для Proposal_Repeal_Accept

---------------------------------

.. include:: /_constant/kontakti.rst