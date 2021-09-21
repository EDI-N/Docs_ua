######################
**Авторизація**
######################

.. початок блоку для Authorization

.. _token:

**1 Token-Based Authorization**
================================================

Після підключення послуги для роботи з API, користувач отримує логін і пароль для авторизації.

.. csv-table:: 
  :file: integration_2_0/APIv2/Methods/Authorization.csv
  :widths:  10, 41
  :stub-columns: 0

2

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/Authorization.csv
  :widths:  10, 41
  :stub-columns: 0

3

.. csv-table:: 
  :file: ../../integration_2_0/APIv2/Methods/Authorization.csv
  :widths:  10, 41
  :stub-columns: 0

4

.. csv-table:: 
  :file: /../integration_2_0/APIv2/Methods/Authorization.csv
  :widths:  10, 41
  :stub-columns: 0

**Приклад запиту:**

.. code:: none

  email=EDSsender&password=12345

**RESPONSE**

В **тілі відповіді** в json-форматі передається "ключ сесії", необхідний для подальшої роботи. В кожному наступному запиті (виклику методу) повинен бути присутнім HTTP-заголовок (Header) "Authorization", який для коректного виконання запитів повинен містити токен "SID" зі значенням, отриманим при авторизації.

**Приклад відповіді (JSON):**

.. code:: json

  {"SID": "65daca25-74ba-4c85-8183-71b404a348c0"}

.. hint::
  Тривалість сесії при бездіяльності користувача становить 20 хвилин (мається на увазі, що ключ буде видалено через 20 хвилин, якщо користувач не буде активним (не буде відправляти HTTP запити)).

---------------------------------

.. _basic:

**2 HTTP Basic Authentication**
================================================

Також при виконанні запитів замість "SID" значення в HTTP-заголовку (Header) "Authorization" можливо відправляти серверу логін і пароль в якості базової аутентифікації (HTTP Basic Authentication). При базовій аутентифікації клієнт разом із кожним запитом відправляє серверу логін і пароль. Ці дані відправляються в заголовку запиту "Authorization" у вигляді base64 коду:

.. code:: json

  Authorization: Basic base64_encode(login:password)

Так, наприклад, якщо логін і пароль admin, заголовок виглядатиме:

.. code:: json

  Authorization: Basic YWRtaW46YWRtaW4=

.. кінець блоку для Authorization

