#############################################################
**Отримати дані товарних позицій Комерційної пропозиції**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/Commercial_offers/API/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: GetAgreementPosition.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передаються дані всіх товарних позицій Комерційної пропозиції або конкретної товарної позиції (якщо передавати **position_id**) - `масив об'єктів XAgreemDocPosition <https://wiki.edin.ua/uk/latest/Commercial_offers/API/Methods/EveryBody/XAgreemDocPositionResponse.html>`__.