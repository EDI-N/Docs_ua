#################################################################################################
**Отримати список графіків замовлень (Продавець (Виробник))**
#################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/Authorization.html>`__.

.. csv-table:: 
  :file: ProducerSchedulesControllerGet.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

В тілі **відповіді** передається список графіків замовлень (масив об'єктів `Schedule <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/ScheduleListResponse.html>`__) відсортованих за датою створення/оновлення.

