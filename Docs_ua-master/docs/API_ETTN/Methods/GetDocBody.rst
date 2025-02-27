#####################################################################################
**Отримання тіла документа сервісу "ЕТТН" в json форматі**
#####################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: GetDocBody.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповідь** передається тіло документа сервісу "ЕТТН":

* `ETTN <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/Docs_ETTNv2_list.html>`__ - для документа **ЕТТН**
* `BOOKING <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/BOOKINGpage_v2.html>`__ - для документа **Заявка на транспортування**
* `BOOKINGCONFIRMATION <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/BookingConfirmationPage_v2.html>`__ - для документа **Підтвердження транспортування**
* `TRANSHIPMENT <https://wiki.edin.ua/uk/latest/Docs_ETTN/TRANSHIPMENTpage.html>`__ - для документа **Акт перевантаження товарів**
* `ACCEPTANCE <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/AcceptancePage_v2.html>`__ - для документа **Акт приймання-передавання**
* `DISCREPANCY <https://wiki.edin.ua/uk/latest/Docs_ETTN/DISCREPANCYPage.html>`__ - для документа **Акт розбіжностей**
* `COMPLETION <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/COMPLETIONpage_v2.html>`__ - для документа **Акт виконаних робіт**