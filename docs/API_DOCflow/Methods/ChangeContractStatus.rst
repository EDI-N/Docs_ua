#############################################################
**Зміна статусу сценарію документообіга**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                                **HTTP OPTIONS**                                                                |
+==============================================================+================================================================================================================================================+
| **Content-Type**                                             | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                                                     |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               |   **https://doc.edin.ua/bdoc/contract**?contract_id=2169&status=2                                                                              |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | В рядку заголовка (Header) "Set-Cookie" обов'язково передається SID - токен, отриманий при авторизації                                         |
|                                                              |                                                                                                                                                |
|                                                              | **Обов'язкові url-параметри:**                                                                                                                 |
|                                                              |                                                                                                                                                |
|                                                              | **contract_id** - ID сценарію документообіга                                                                                                   |
|                                                              |                                                                                                                                                |
|                                                              | **status** - новий статус сценарію документообіга ( 0 - Чернетка; 1 - Новий; 2 - Прийнято; 3 - Відхилено; 4 - Розірвано; 5 - Чекає підписання) |
+--------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
***********************************************************

``REQUEST``

В цьому методі json-тіло **запиту** відсутнє (інші дані передавати не потрібно).

``RESPONSE``

У **відповідь** передається код сервера 200 (ok).

**Приклади**
*********************************

**При використанні методу json-тіло запиту відсутнє (дані передавати не потрібно)**

--------------

У **відповідь** передається код сервера 200 (ok).


