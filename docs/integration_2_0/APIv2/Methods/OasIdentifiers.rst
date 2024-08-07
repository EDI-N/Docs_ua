######################################################################
**Отримання інформації про організацію по Назві/ІПН/КПП/GLN**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

Метод дозволяє користувачеві переглядати додаткову інформацію про інші організації на рівні одного загального аккаунта, а також знайти **Основний GLN** за **Додатковим GLN**.

.. include:: /Personal_Cabinet/PCInstruction.rst
   :start-after: .. початок блоку для main-additional-gln
   :end-before: .. кінець блоку для main-additional-gln

.. csv-table:: 
  :file: OasIdentifiers.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається інформація про організацію (масив об'єктів `Identificator <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/EveryBody/Identificator.html>`__).
