Пряма схема документообігу е-ТТН v3
#############################################################

.. role:: red

.. role:: underline

.. role:: green

.. role:: purple

----------------------------------------------------

.. image:: pics/ETTNv3_API_schema.png
   :align: center

----------------------------------------------------

.. image:: pics/ETTNv3_API_work_09.png
   :height: 31px
   :width: 31px

1.1 `Авторизація Вантажовідправника <https://wiki.edin.ua/uk/latest/API_ETTNv3/Methods/Authorization.html>`__

1.2 `Створення/редагування чернетки е-ТТН <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/CreateEcmrEttn.html>`__

1.3 `Отримання тіла документа (рекомендовано в ecmr) для подальшого підписання Вантажовідправником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEcmrDocumentBody.html>`__

1.4 `Підписання е-ТТН Вантажовідправником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/SaveEcmrSign.html>`__

1.5 `Відправка е-ТТН Вантажовідправником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/SendEcmrDoc.html>`__

.. image:: pics/ETTNv3_API_work_10.png
   :height: 31px
   :width: 31px

1.6 `Відмовити в підписанні документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/RejectEcmr.html>`__

-----------------------------------------------

.. image:: pics/ETTNv3_API_work_11.png
   :height: 31px
   :width: 31px

2.1 `Авторизація Перевізника <https://wiki.edin.ua/uk/latest/API_ETTNv3/Methods/Authorization.html>`__

2.2 `Отримання тіла документа (рекомендовано в json) для подальшого доповнення документа <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEcmrDocumentBody.html>`__

2.3 `Доповнення тіла та створення/редагування нової транзакції (чернетки) до е-ТТН документа Перевізником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/PostEcmrTransaction.html>`__

2.4 `Отримання тіла документа (рекомендовано в ecmr) для подальшого підписання Перевізником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEcmrDocumentBody.html>`__

2.5 `Підписання е-ТТН Перевізником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/SaveEcmrSign.html>`__

2.6 `Відправка нової транзакції до е-ТТН документа <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/PutEcmrTransaction.html>`__

.. image:: pics/ETTNv3_API_work_12.png
   :height: 31px
   :width: 31px

2.2* `Відмовити в підписанні документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/RejectEcmr.html>`__

-----------------------------------------------

.. image:: pics/ETTNv3_API_work_13.png
   :height: 31px
   :width: 31px

3.1 `Авторизація Вантажоотримувача <https://wiki.edin.ua/uk/latest/API_ETTNv3/Methods/Authorization.html>`__

3.2 `Отримання тіла документа (рекомендовано в json) для подальшого доповнення документа <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEcmrDocumentBody.html>`__

3.3 `Доповнення тіла та створення/редагування нової транзакції (чернетки) до е-ТТН документа Перевізником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/PostEcmrTransaction.html>`__

3.4 `Отримання тіла документа (рекомендовано в ecmr) для подальшого підписання Перевізником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEcmrDocumentBody.html>`__

3.5 `Підписання е-ТТН Перевізником <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/SaveEcmrSign.html>`__

3.6 `Відправка нової транзакції до е-ТТН документа <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/PutEcmrTransaction.html>`__

.. image:: pics/ETTNv3_API_work_14.png
   :height: 31px
   :width: 31px

3.2* `Відмовити в підписанні документа сервісу «ЕТТН» <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/RejectEcmr.html>`__



