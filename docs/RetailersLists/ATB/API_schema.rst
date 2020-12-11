Робота з АТБ через API
#############################################################

.. role:: red

.. role:: underline

.. role:: green

.. role:: purple

----------------------------------------------------

.. image:: pics_API_schema/API_schema_01.png
   :align: center

----------------------------------------------------

.. image:: pics_API_schema/Xbutton.png
   :height: 31px
   :width: 31px

.. attention:: Мережа АТБ може відкликати власне підписання, поки з документом не були виконані інші дії.

----------------------------------------------------

.. image:: pics_API_schema/Green1.png
   :height: 31px
   :width: 31px

| 1.1 `Авторизація Постачальника <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__
| 1.2 `Створення, підписання і відправка документа COMDOC_006 <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/SendDocumentWithoutDraft.html>`__

-----------------------------------------------

.. image:: pics_API_schema/Green2.png
   :height: 31px
   :width: 31px

2.1 `Авторизація Мережі АТБ <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__

2.2 `Пошук "Видаткових накладних" (COMDOC_006) в статусі "Потребує підписання отримувачем" <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DocsSearch.html>`__

2.3 `Отримати/завантажити тіло документа <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DownloadDocument.html>`__

2.4 `Створення квитанції №2 (прийняття документа COMDOC) <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/ComdocAccept.html>`__

.. image:: pics_API_schema/Red2.png
   :height: 31px
   :width: 31px

2.4* `Створення, підписання і відправка документа COMDOC_005 <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/SendDocumentWithoutDraft.html>`__

-----------------------------------------------

.. image:: pics_API_schema/Red3.png
   :height: 31px
   :width: 31px

3.1* `Авторизація Постачальника <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__

3.2* `Отримання вхідних документів" <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DocsSearch.html>`__

3.3* `Створення квитанції №2 (прийняття документа COMDOC) <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/ComdocAccept.html>`__

-----------------------------------------------

.. image:: pics_API_schema/Blue4.png
   :height: 31px
   :width: 31px

| 4.1 `Авторизація Постачальника <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__
| 4.2 `Створення, підписання і відправка документа COMDOC_032 <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/SendDocumentWithoutDraft.html>`__

-----------------------------------------------

.. image:: pics_API_schema/Blue5.png
   :height: 31px
   :width: 31px

| 5.1 `Авторизація Мережі АТБ <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__
| 5.2 `Пошук "Актів приймання товару (складська логістика)" (COMDOC_032) в статусі "Потребує підписання отримувачем" <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DocsSearch.html>`__
| 5.3 `Отримати/завантажити тіло документа <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DownloadDocument.html>`__
| 5.4 `Створення квитанції №2 (прийняття документа COMDOC) <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/ComdocAccept.html>`__

.. image:: pics_API_schema/Red5.png
   :height: 31px
   :width: 31px

5.4* `Створення, підписання і відправка документа COMDOC_034 <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/SendDocumentWithoutDraft.html>`__

-----------------------------------------------

.. image:: pics_API_schema/Red6.png
   :height: 31px
   :width: 31px

6.1* `Авторизація Постачальника <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__

6.2* `Отримання вхідних документів" <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DocsSearch.html>`__

6.3* `Створення квитанції №2 (прийняття документа COMDOC) <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/ComdocAccept.html>`__

-----------------------------------------------

.. image:: pics_API_schema/Blue7.png
   :height: 31px
   :width: 31px

| 7.1 `Авторизація Мережі АТБ <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__
| 7.2 `Пошук "Актів приймання товару (складська логістика)" (COMDOC_032) в статусі "Підтверджено з двох сторін" <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DocsSearch.html>`__
| 7.3 `Отримати/завантажити тіло документа <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DownloadDocument.html>`__
| 7.4 `Створення, підписання і відправка документа COMDOC_033 <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/SendDocumentWithoutDraft.html>`__

-----------------------------------------------

.. image:: pics_API_schema/Blue8.png
   :height: 31px
   :width: 31px

8.1 `Авторизація Постачальника <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__

8.2 `Отримання вхідних документів" <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/DocsSearch.html>`__

8.3 `Створення квитанції №2 (прийняття документа COMDOC) <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/ComdocAccept.html>`__

-----------------------------------------------















-----------------------------------------------

**Додаткові методи API**
=============================

Робота з довідниками
-------------------------------

* `Отримання даних компанії, співробітників, адрес з довідників сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/ExtraData.html>`__
* `Отримання даних про компанію за назвою / ІНН / ЄДРПОУ <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/CompanySearch.html>`__
* `Отримання даних співробіника компанії за назвою / містом / вулицею / кодом КОАТУУ / номером посвідчення водія <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/EmployeesSearch.html>`__
* `Отримання адреси з довідника компанії за назвою / містом / вулицею / кодом КОАТУУ <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/AddressesSearch.html>`__
* `Отримання данних КОАТУУ за назвою / кодом <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/KoatuuSearch.html>`__
* `Отримання даних про компанію по ідентифікатору компанії <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetCompany.html>`__

Додаткові можливості
---------------------------

* `Створення вкладення до документа <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/CreateDocAttachment.html>`__
* `Отримання вкладення документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetDocAttachment.html>`__
* `Видалення вкладення документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/DelDocAttachment.html>`__
* `Відмітити документ, як «прочитаний» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/MarkDocumentAsRead.html>`__
* `Створити копію документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/DocClone.html>`__
* `Видалення документів сервісу «ЕТТН» з «Чернеток» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/DelDocs.html>`__
* `Отримання документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetDoc.html>`__
* `Отримання ланцюжка документів сервісу «ЕТТН» по id ланцюжка чи id документа <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetChain.html>`__
* `Отримання тіла документа сервісу «ЕТТН» в json форматі <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetDocBody.html>`__
* `Отримання даних підписантів документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetSignersInfo.html>`__
* `Отримання пов’язаних документів сервісу «ETTN» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetLinks.html>`__
* `Отримання даних документа сервісу «ЕТТН» для підписання <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetTicket.html>`__
* `Отримання списку ланцюжків документів сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetChainsList.html>`__
* `Отримання документа в вигляді архіву (json + XML + підписані дані) <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetDocArchive.html>`__
* `Отримання списку документів сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetDocList.html>`__
* `Заархівувати всі документи у вказаному ланцюжку <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/ArcChains.html>`__
* `Додати коментар до документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/AddComment.html>`__
* `Отримання коментарів до документу сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/GetComments.html>`__