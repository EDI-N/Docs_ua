########################################################################################################################
Відмова від анулювання комерційних документів - COMDOC_021 квитанція №15
########################################################################################################################

.. початок блоку для Comdoc_RepealReject

.. role:: orange

.. role:: red

.. role:: green

.. |info2| image:: /_constant/icons/info2.png

Після того, як компанія-ініціатор створила "Запит на анулювання" документ змінює свій статус на :orange:`"Надіслано запит на анулювання"` і в журналі такий документ відмічений інформаційною іконкою |info2|:

.. image:: /_constant/comdoc_repeal/comdoc_repeal_013.png
   :align: center

Для того, щоб "відхилити анулювання" (створити COMDOC_021 (квитанція №15)) **отримувачу** "запиту на анулювання" (є квитанція №11) потрібно відкрити комерційний документ і в **"Додаткові дії"** натиснути **"Відхилити запит на анулювання"**:

.. image:: /_constant/comdoc_repeal_reject/comdoc_repeal_reject_005.png
   :align: center

.. note::
   Функціонал також доступний і для інтегрованих користувачів (`API <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/APIv2_list.html>`_).

Для здійснення "Відмови від анулювання" обов'язково потрібно вказати причину відмови (процес не потребує підписання) та **"Відправити"**:

.. image:: /_constant/comdoc_repeal_reject/comdoc_repeal_reject_002.png
   :align: center

Після чого документ змінює свій статус на :green:`"Підписано двома сторонами"`, відображається останній актуальний коментар: 

.. image:: /_constant/comdoc_repeal_reject/comdoc_repeal_reject_006.png
   :align: center

Кількість "запитів на анулювання" та "відмов від анулювання" не обмежується.

.. deprecated
   У випадках багатократного відхилення запитів на анулювання може бути корисно ознайомитись з усією історією причин формування анулювань та їх відхилень (завжди відображається останній активний коментар):

   .. image:: /_constant/comdoc_repeal_reject/comdoc_repeal_reject_004.png
      :align: center

.. кінець блоку для Comdoc_RepealReject