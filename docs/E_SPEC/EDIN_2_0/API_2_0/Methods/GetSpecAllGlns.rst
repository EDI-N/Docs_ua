############################################################################
**Отримати всі пов'язані GLN користувача в сервісі "Е-Специфікація"**
############################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/E_SPEC/EDIN_2_0/API_2_0/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: GetSpecAllGlns.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі відповіді в json-форматі передається `інформація про пов'язані GLN <https://wiki.edin.ua/uk/latest/E_SPEC/EDIN_2_0/API_2_0/Methods/EveryBody/SpecAllGlns.html>`__ (масив об’єктів Identificator).
