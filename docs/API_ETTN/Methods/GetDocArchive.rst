######################################################################################
**Отримання (завантаження) документа сервісу "ЕТТН" в JSON/XML/PDF/ZIP форматі**
######################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/Authorization.html>`__ .

.. note:: Метод використовується виключно для наступних документів:

   * `«Заявка на транспортування» <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/BOOKINGpage_v2.html>`__
   * `«Підтвердження транспортування» <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/BookingConfirmationPage_v2.html>`__
   * `«Акт виконаних робіт» <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/COMPLETIONpage_v2.html>`__
   * `«Акт приймання-передавання» <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/AcceptancePage_v2.html>`__
   * «Акт розбіжностей»

.. csv-table:: 
  :file: GetDocArchive.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповідь** передається документ сервісу "ЕТТН" в визначеному запитом форматі.

.. + one moment with internal params (look internal documentation)