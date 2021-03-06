######################################################################
**Отримання переліку роздрібних мереж, які пов'язані із заданим GLN**
######################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/API/Authorization.html>`__ .

За допомогою методу **api/oas/retailers** можливо отримати перелік всіх роздрібних мереж-контрагентів користувача.

+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                        **HTTP GET**                                                         |
+==============================================================+=============================================================================================================================+
| **Content-Type**                                             | application/json (тіло HTTP запиту / відповіді в json форматі)                                                              |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | https://edo-v2.edin.ua/api/oas/retailers?gln=9864065702429                                                                  |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | У рядку заголовка (Header) "Cookie" обов'язково передається **SID** - токен отриманий при авторизації                       |
|                                                              |                                                                                                                             |
|                                                              | **Обов'язкові url-параметри:**                                                                                              |
|                                                              |                                                                                                                             |
|                                                              | **gln** - рядок (13); номер GLN організації, яка пов'язана з авторизованим користувачем платформи EDIN 2.0 на рівні акаунта |
|                                                              |                                                                                                                             |
+--------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+

.. hint:: Також можливо виконати запит у вигляді curl-рядка:
          
          curl -X GET 'https://edo-v2.edin.ua/api/oas/retailers?gln=9864065702429' -b 'SID=458a0d38-5b56-4b8e-8998-009a1edd31eb'

Специфікація для розшифровки ключів curl запиту: https://curl.haxx.se/docs/manpage.html

--------------

**JSON-параметри в тілі HTTP запиту/відповіді**

--------------

**REQUEST**

--------------

У цьому методі json-тіло **запиту** відсутнє (інші дані передавати не потрібно).

--------------

**RESPONSE**

--------------

**Відповідь:** масив об'єктів даних про роздрібні мережі

Таблиця 4 - Опис json-параметрів, які можуть передаватися у **відповідь** на метод API

+-----------+--------+---------------------------------------+
| Параметр  | Формат |                 Опис                  |
+===========+========+=======================================+
| id        | long   | ідентифікатор роздрібної мережі       |
+-----------+--------+---------------------------------------+
| name      | String | найменування роздрібної мережі        |
+-----------+--------+---------------------------------------+
| gln       | String | GLN роздрібної мережі                 |
+-----------+--------+---------------------------------------+
| aliasName | String | брендування роздрібної мережі         |
+-----------+--------+---------------------------------------+
| type      | String | тип/ознака роздрібної мережі (type=1) |
+-----------+--------+---------------------------------------+

--------------

**Приклади**

--------------

**При використанні методу json-тіло запиту відсутнє (дані передавати не потрібно)**

--------------

**Приклад тіла відповіді (json):**

.. code:: ruby

    [
    {
        "id": 9,
        "name": "АТБ-маркет",
        "gln": "4820128010004",
        "aliasName": "АТБ-маркет",
        "type": 1
    },
    {
        "id": 17,
        "name": "Метро",
        "gln": "4820086630009",
        "aliasName": "Метро",
        "type": 1
    },
    {
        "id": 39,
        "name": "Край",
        "gln": "4820104810017",
        "aliasName": "Край",
        "type": 1
    },
    {
        "id": 55,
        "name": "Ватсонс",
        "gln": "4829900001605",
        "aliasName": "Ватсонс",
        "type": 1
    },
    {
        "id": 56,
        "name": "ЕпіцентрК (НЕАКТУАЛЬНО)",
        "gln": "9991027012934",
        "type": 1
    }
    ] 




