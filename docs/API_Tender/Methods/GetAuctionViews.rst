######################################################################
**Отримати дані про перегляди тендера (за id)**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_Tender/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: GetAuctionViews.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передаються `дані про перегляди вказаного тендера <https://wiki.edin.ua/uk/latest/API_Tender/Methods/EveryBody/AuctionViewList.html>`__ (масив об'єктів **AuctionView**).