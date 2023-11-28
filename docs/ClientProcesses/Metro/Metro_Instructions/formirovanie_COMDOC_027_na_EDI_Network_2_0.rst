#############################################################################################################
Формування "Товарної накладної" (COMDOC_027) для мережі "МЕТРО". Інструкція для "FM Logistic"
#############################################################################################################

.. сюда закину немного картинок для текста

.. |info| image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_22.png

.. role:: red

.. contents:: Зміст:
   :depth: 3

---------

Дана інструкція описує документообіг `"Товарною накладної" (COMDOC_027) <https://wiki.edin.ua/uk/latest/EDIN_Specs/XML/COMDOC_027_x.html>`__ на платформі EDI Network між Постачальником "FM Logistic" та Мережею "МЕТРО". Ініціатором документообігу виступає Постачальник "FM Logistic".

1 Формування "Товарної накладної" (COMDOC_027) для торгової мережі "МЕТРО". Сторона "FM Logistic"
===========================================================================================================

Щоб сформувати "Товарну накладну" (COMDOC_027) Постачальнику потрібно натиснути кнопку **"+Створити"** та обрати **"Товарна накладна(COMDOC)"** (не слід плутати з **"Товарною накладною"**!!!):

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_02.png
   :align: center

Документ створиться автоматично з заповненими даними відправника:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_03.png
   :align: center

Всі поля, позначені червоною зірочкою :red:`*` - **обов'язкові до заповнення**. Для автоматичного заповнення данних Отимувача (мережа "МЕТРО") можливо скористатись пошуком (за назвою компанії, GLN чи ІПН) та "Вибрати" контрагента:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_05.png
   :align: center

Також документ повинен містити хоча б одну позицію в табличній частині, для цього потрібно **"+Додати"** значення товарної позиції:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_07.png
   :align: center

Попап для редагування відкривається при кліку на значення "Штрихкода транспортної упаковки SSCC":

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_08.png
   :align: center

Для видалення позиції/-й з табличної частини потрібно вибрати позицію/-ї та натиснути **"Видалити"**: 

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_09.png
   :align: center

.. hint::
    Опціонально до документа можливо додати кілька контрагентів та додаткові параметри:

    .. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_06.png
       :align: center

Правильно заповнений документ потрідно **"Зберегти"** (1) та **"Відправити"** (2) без підписання:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_10.png
   :align: center

Відправлений документ відображається в папці **"Надіслані"**:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_11.png
   :align: center

Відправлений документ можливо завантажити в .pdf, .xls, .xml, .zip форматах чи роздрукувати:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_21.png
   :align: center

.. _revoke:

1.1 Відкликання підпису
-------------------------------------------------

.. include:: /_constant/comdoc_revoke/comdoc_revoke.rst
   :start-after: .. початок блоку для Comdoc_Revoke
   :end-before: .. кінець блоку для Comdoc_Revoke

2 Відповідь торгової мережі "МЕТРО"
============================================================================================

У торгової мережі "МЕТРО" вхідний документ відображається у **"Вхідних"**:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_12.png
   :align: center

Мережа може **"Підтвердити"** або **"Відхилити"** "Товарну накладну" (COMDOC_027):

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_13.png
   :align: center

2.1 Підтвердження "Товарної накладної" (COMDOC_027) мережею "МЕТРО"
---------------------------------------------------------------------------------------------

Після того, як мережа вирішила **"Підтвердити"** комерційний документ висвічується повідомлення, що документ успішно прийнято:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_14.png
   :align: center

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_15.png
   :align: center

Документообіг завершено, про що свідчить значок |info| в журналі документів. Клік на значок |info| відкриває інформаційне вікно зі статусом по рішенню мережі "МЕТРО":

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_19.png
   :align: center

2.2 Відхилення "Товарної накладної" (COMDOC_027) мережею "МЕТРО"
---------------------------------------------------------------------------------------------

Після того, як мережа вирішила **"Відхилити"** потрібно обов'язково вказати причину відхилення документа:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_16.png
   :align: center

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_17.png
   :align: center

Вказана причина висвічується в повідомленні над документом, документ відхилено:

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_18.png
   :align: center

Документообіг завершено, про що свідчить значок |info| в журналі документів. Клік на значок |info| відкриває інформаційне вікно зі статусом по рішенню мережі "МЕТРО":

.. image:: pics_formirovanie_COMDOC_027_na_EDI_Network_2_0/formirovanie_COMDOC_027_na_EDI_Network_2_0_20.png
   :align: center

----------------------------
   
.. include:: /_constant/kontakti.rst







