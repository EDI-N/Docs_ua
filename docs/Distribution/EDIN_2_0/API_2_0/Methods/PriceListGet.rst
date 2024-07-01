########################################################################
**Отримати дані "Прайс-листа" для вказаного Покупця (Дистрибʼютора)**
########################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/Authorization.html>`__ .

.. important::
  В залежності від ролі користувача (Продавець (Виробник) / Покупець (Дистрибʼютор)), що виконує запит значення параметрів в запиті відрізняються! 

Для ролі Покупця (Дистрибʼютора):

.. csv-table:: 
  :file: PriceListGetD.csv
  :widths:  10, 41
  :stub-columns: 0

Для ролі Продавця (Виробника):

.. csv-table:: 
  :file: PriceListGetV.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передаються дані по товарам "Прайс-листа":

* або у вигляді масива об'єктів `XPriceListElement <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/XPriceListElement.html>`__ для вказаного Покупця (Дистрибʼютора);
* або у вигляді об'єкта зі списком ідентифікаторів Покупців (Дистрибʼюторів), що входять до вказаної групи (access_groups_id), та "Прайс-листом" для кожного знайденого Покупця (Дистрибʼютора) (масива об'єктів `XPriceListElement <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/XPriceListElement.html>`__). 


