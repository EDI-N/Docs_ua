#############################################################
**Отримання вкладення документа сервісу "ЕТТН"**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: GetDocAttachment.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається вкладення до документа сервісу "ЕТТН" (в вигляді набору байтів при **type=bytes**, файлу при **type=file** чи в json вигляді при **type=list** (масив об'єктів `XDocAttachment <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/EveryBody/XDocAttachment.html>`__)).

