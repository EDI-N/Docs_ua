#######################################################################################################
**Створення на сервері квитанції "Анулювання" (COMDOC_019)**
#######################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/ru/latest/integration_2_0/API/Authorization.html>`__ .

За допомогою GET методу **api/v2/eds/comdoc/repeal** можливо створити COMDOC "Аннулювання".

+--------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       **Метод запиту**                       |                                                                        **HTTP GET**                                                                         |
+==============================================================+=============================================================================================================================================================+
| **Content-Type**                                             | application/json (тіло HTTP запиту / відповіді в json форматі)                                                                                              |
+--------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                               | **https://edo-v2.edi-n.com/api/v2/eds/comdoc/repeal**?gln=9864232319979&doc_uuid=c1f6a1d0-5aaf-4a06-b78d-71c238f70986&reason=%D0%BF%D1%80%D0%BE%D1%81%D1%82 |
+--------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)** | У рядку заголовка (Header) "Cookie" обов'язково передається **SID** - токен отриманий при авторизації                                                       |
|                                                              |                                                                                                                                                             |
|                                                              | **Обов'язкові url-параметри:**                                                                                                                              |
|                                                              |                                                                                                                                                             |
|                                                              | **gln** - рядок (13); номер GLN організації, яка пов'язана з авторизованим користувачем платформи EDIN 2.0 на рівні акаунта                                 |
|                                                              |                                                                                                                                                             |
|                                                              | **doc_uuid** - рядок; UUID документа COMDOC                                                                                                                 |
|                                                              |                                                                                                                                                             |
|                                                              | **reason** - text; текст причини відмови/анулювання                                                                                                         |
|                                                              |                                                                                                                                                             |
|                                                              | **Опціональні url-параметри:**                                                                                                                              |
|                                                              |                                                                                                                                                             |
|                                                              | **response_type** - формат очікуваної відповіді; можливі варіанти: **json** (за замовчуванням), **xml**, **json_base64**, **xml_base64**                    |
+--------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. hint:: Також можливо виконати запит у вигляді curl-рядка:
          
          curl -X GET 'https://edo-v2.edi-n.com/api/v2/eds/comdoc/repeal?gln=9864232319979&doc_uuid=c1f6a1d0-5aaf-4a06-b78d-71c238f70986&reason=%D0%BF%D1%80%D0%BE%D1%81%D1%82' -b 'SID=458a0d38-5b56-4b8e-8998-009a1edd31eb'

Специфікація для розшифровки ключів curl запиту: https://curl.haxx.se/docs/manpage.html

**JSON-параметри в тілі HTTP запиту/відповіді**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``REQUEST``

В цьому методі json-тіло **запиту** відсутнє (інші дані передавати не потрібно).

``RESPONSE``

У **відповідь** передається тіло згенерованого COMDOC_019 в json форматі або форматі обраному в запиті (параметр **response_type**).

--------------

**Приклади**
~~~~~~~~~~~~~~~~~~

В цьому методі json-тіло **запиту** відсутнє (інші дані передавати не потрібно).

--------------

**Приклад тіла відповіді (json):**

.. code:: ruby

    {
      "documentForRepeal": {
        "code": "006",
        "date": "2019-08-08",
        "number": "F24F5899EF846E147AAC",
        "type": "Видаткова накладна"
      },
      "parties": {
        "partners": [
          {
            "IBAN": "UA153510050000026007614396500",
            "code": "33133118",
            "gln": "9864232319962",
            "inn": "3313311833",
            "name": "Левицкий М.Г.",
            "status": "Відправник",
            "type": "Юридична"
          },
          {
            "code": "33133119",
            "gln": "9864232319979",
            "inn": "3313311834",
            "name": "Левицкий М.Г.",
            "status": "Отримувач",
            "type": "Юридична"
          }
        ]
      },
      "title": {
        "code": "19",
        "comments": [],
        "date": "2019-12-24",
        "number": "F24F5899EF846E147AAC",
        "reapealText": "чето как то надо бы аннулировать то ли",
        "repealDate": "2019-12-24",
        "type": "Анулювання"
      }
    }

--------------

**Приклад тіла відповіді (xml):**

.. code:: ruby

    <?xml version="1.0" encoding="UTF-8"?> 
    <ЕлектроннийДокумент>
      <Заголовок>
        <НомерДокументу>2019-12-03-TEST-003</НомерДокументу>
        <ТипДокументу>Анулювання</ТипДокументу>
        <КодТипуДокументу>19</КодТипуДокументу>
        <ДатаДокументу>2020-01-03</ДатаДокументу>
        <ПричинаАнулювання>Какая то супер причина для аннулирования</ПричинаАнулювання>
        <ДатаАнулювання>2020-01-03</ДатаАнулювання>
      </Заголовок>
      <ДокументЩоАнулюється>
        <НомерДокументу>2019-12-03-TEST-003</НомерДокументу>
        <ТипДокументу>Видаткова накладна</ТипДокументу>
        <КодТипуДокументу>006</КодТипуДокументу>
        <ДатаДокументу>2019-12-03</ДатаДокументу>
      </ДокументЩоАнулюється>
      <Сторони>
        <Контрагент>
          <СтатусКонтрагента>Відправник</СтатусКонтрагента>
          <ВидОсоби>Юридична</ВидОсоби>
          <НазваКонтрагента>Левицкий М.Г.</НазваКонтрагента>
          <КодКонтрагента>33133118</КодКонтрагента>
          <ІПН>3313311833</ІПН>
          <IBAN>UA153510050000026007614396500</IBAN>
          <GLN>9864232319962</GLN>
        </Контрагент>
        <Контрагент>
          <СтатусКонтрагента>Отримувач</СтатусКонтрагента>
          <ВидОсоби>Юридична</ВидОсоби>
          <НазваКонтрагента>Левицкий М.Г.</НазваКонтрагента>
          <КодКонтрагента>33133119</КодКонтрагента>
          <ІПН>3313311834</ІПН>
          <GLN>9864232319979</GLN>
        </Контрагент>
      </Сторони>
    </ЕлектроннийДокумент>

--------------

**Приклад тіла відповіді (json_base64):**

.. code:: ruby

    eyJ0aXRsZSI6eyJudW1iZXIiOiIyMDE5LTEyLTAzLVRFU1QtMDAzIiwidHlwZSI6ItCQ0L3Rg9C7
    0Y7QstCw0L3QvdGPIiwiY29kZSI6IjE5IiwiZGF0ZSI6IjIwMjAtMDEtMDMiLCJyZWFwZWFsVGV4
    dCI6ItCa0LDQutCw0Y8g0YLQviDRgdGD0L/QtdGAINC/0YDQuNGH0LjQvdCwINC00LvRjyDQsNC9
    0L3Rg9C70LjRgNC+0LLQsNC90LjRjyIsInJlcGVhbERhdGUiOiIyMDIwLTAxLTAzIiwiY29tbWVu
    dHMiOltdfSwiZG9jdW1lbnRGb3JSZXBlYWwiOnsibnVtYmVyIjoiMjAxOS0xMi0wMy1URVNULTAw
    MyIsInR5cGUiOiLQktC40LTQsNGC0LrQvtCy0LAg0L3QsNC60LvQsNC00L3QsCIsImNvZGUiOiIw
    MDYiLCJkYXRlIjoiMjAxOS0xMi0wMyJ9LCJwYXJ0aWVzIjp7InBhcnRuZXJzIjpbeyJzdGF0dXMi
    OiLQktGW0LTQv9GA0LDQstC90LjQuiIsInR5cGUiOiLQrtGA0LjQtNC40YfQvdCwIiwibmFtZSI6
    ItCb0LXQstC40YbQutC40Lkg0Jwu0JMuIiwiY29kZSI6IjMzMTMzMTE4IiwiaW5uIjoiMzMxMzMx
    MTgzMyIsIklCQU4iOiJVQTE1MzUxMDA1MDAwMDAyNjAwNzYxNDM5NjUwMCIsImdsbiI6Ijk4NjQy
    MzIzMTk5NjIifSx7InN0YXR1cyI6ItCe0YLRgNC40LzRg9Cy0LDRhyIsInR5cGUiOiLQrtGA0LjQ
    tNC40YfQvdCwIiwibmFtZSI6ItCb0LXQstC40YbQutC40Lkg0Jwu0JMuIiwiY29kZSI6IjMzMTMz
    MTE5IiwiaW5uIjoiMzMxMzMxMTgzNCIsImdsbiI6Ijk4NjQyMzIzMTk5NzkifV19fQ==

--------------

**Приклад тіла відповіді (xml_base64):**

.. code:: ruby

    PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4gCjzQldC70LXQutGC0YDQvtC9
    0L3QuNC50JTQvtC60YPQvNC10L3Rgj4KICA80JfQsNCz0L7Qu9C+0LLQvtC6PgogICAgPNCd0L7Q
    vNC10YDQlNC+0LrRg9C80LXQvdGC0YM+MjAxOS0xMi0wMy1URVNULTAwMzwv0J3QvtC80LXRgNCU
    0L7QutGD0LzQtdC90YLRgz4KICAgIDzQotC40L/QlNC+0LrRg9C80LXQvdGC0YM+0JDQvdGD0LvR
    jtCy0LDQvdC90Y88L9Ci0LjQv9CU0L7QutGD0LzQtdC90YLRgz4KICAgIDzQmtC+0LTQotC40L/R
    g9CU0L7QutGD0LzQtdC90YLRgz4xOTwv0JrQvtC00KLQuNC/0YPQlNC+0LrRg9C80LXQvdGC0YM+
    CiAgICA80JTQsNGC0LDQlNC+0LrRg9C80LXQvdGC0YM+MjAyMC0wMS0wMzwv0JTQsNGC0LDQlNC+
    0LrRg9C80LXQvdGC0YM+CiAgICA80J/RgNC40YfQuNC90LDQkNC90YPQu9GO0LLQsNC90L3Rjz7Q
    mtCw0LrQsNGPINGC0L4g0YHRg9C/0LXRgCDQv9GA0LjRh9C40L3QsCDQtNC70Y8g0LDQvdC90YPQ
    u9C40YDQvtCy0LDQvdC40Y88L9Cf0YDQuNGH0LjQvdCw0JDQvdGD0LvRjtCy0LDQvdC90Y8+CiAg
    ICA80JTQsNGC0LDQkNC90YPQu9GO0LLQsNC90L3Rjz4yMDIwLTAxLTAzPC/QlNCw0YLQsNCQ0L3R
    g9C70Y7QstCw0L3QvdGPPgogIDwv0JfQsNCz0L7Qu9C+0LLQvtC6PgogIDzQlNC+0LrRg9C80LXQ
    vdGC0KnQvtCQ0L3Rg9C70Y7RlNGC0YzRgdGPPgogICAgPNCd0L7QvNC10YDQlNC+0LrRg9C80LXQ
    vdGC0YM+MjAxOS0xMi0wMy1URVNULTAwMzwv0J3QvtC80LXRgNCU0L7QutGD0LzQtdC90YLRgz4K
    ICAgIDzQotC40L/QlNC+0LrRg9C80LXQvdGC0YM+0JLQuNC00LDRgtC60L7QstCwINC90LDQutC7
    0LDQtNC90LA8L9Ci0LjQv9CU0L7QutGD0LzQtdC90YLRgz4KICAgIDzQmtC+0LTQotC40L/Rg9CU
    0L7QutGD0LzQtdC90YLRgz4wMDY8L9Ca0L7QtNCi0LjQv9GD0JTQvtC60YPQvNC10L3RgtGDPgog
    ICAgPNCU0LDRgtCw0JTQvtC60YPQvNC10L3RgtGDPjIwMTktMTItMDM8L9CU0LDRgtCw0JTQvtC6
    0YPQvNC10L3RgtGDPgogIDwv0JTQvtC60YPQvNC10L3RgtCp0L7QkNC90YPQu9GO0ZTRgtGM0YHR
    jz4KICA80KHRgtC+0YDQvtC90Lg+CiAgICA80JrQvtC90YLRgNCw0LPQtdC90YI+CiAgICAgIDzQ
    odGC0LDRgtGD0YHQmtC+0L3RgtGA0LDQs9C10L3RgtCwPtCS0ZbQtNC/0YDQsNCy0L3QuNC6PC/Q
    odGC0LDRgtGD0YHQmtC+0L3RgtGA0LDQs9C10L3RgtCwPgogICAgICA80JLQuNC00J7RgdC+0LHQ
    uD7QrtGA0LjQtNC40YfQvdCwPC/QktC40LTQntGB0L7QsdC4PgogICAgICA80J3QsNC30LLQsNCa
    0L7QvdGC0YDQsNCz0LXQvdGC0LA+0JvQtdCy0LjRhtC60LjQuSDQnC7Qky48L9Cd0LDQt9Cy0LDQ
    mtC+0L3RgtGA0LDQs9C10L3RgtCwPgogICAgICA80JrQvtC00JrQvtC90YLRgNCw0LPQtdC90YLQ
    sD4zMzEzMzExODwv0JrQvtC00JrQvtC90YLRgNCw0LPQtdC90YLQsD4KICAgICAgPNCG0J/QnT4z
    MzEzMzExODMzPC/QhtCf0J0+CiAgICAgIDxJQkFOPlVBMTUzNTEwMDUwMDAwMDI2MDA3NjE0Mzk2
    NTAwPC9JQkFOPgogICAgICA8R0xOPjk4NjQyMzIzMTk5NjI8L0dMTj4KICAgIDwv0JrQvtC90YLR
    gNCw0LPQtdC90YI+CiAgICA80JrQvtC90YLRgNCw0LPQtdC90YI+CiAgICAgIDzQodGC0LDRgtGD
    0YHQmtC+0L3RgtGA0LDQs9C10L3RgtCwPtCe0YLRgNC40LzRg9Cy0LDRhzwv0KHRgtCw0YLRg9GB
    0JrQvtC90YLRgNCw0LPQtdC90YLQsD4KICAgICAgPNCS0LjQtNCe0YHQvtCx0Lg+0K7RgNC40LTQ
    uNGH0L3QsDwv0JLQuNC00J7RgdC+0LHQuD4KICAgICAgPNCd0LDQt9Cy0LDQmtC+0L3RgtGA0LDQ
    s9C10L3RgtCwPtCb0LXQstC40YbQutC40Lkg0Jwu0JMuPC/QndCw0LfQstCw0JrQvtC90YLRgNCw
    0LPQtdC90YLQsD4KICAgICAgPNCa0L7QtNCa0L7QvdGC0YDQsNCz0LXQvdGC0LA+MzMxMzMxMTk8
    L9Ca0L7QtNCa0L7QvdGC0YDQsNCz0LXQvdGC0LA+CiAgICAgIDzQhtCf0J0+MzMxMzMxMTgzNDwv
    0IbQn9CdPgogICAgICA8R0xOPjk4NjQyMzIzMTk5Nzk8L0dMTj4KICAgIDwv0JrQvtC90YLRgNCw
    0LPQtdC90YI+CiAgPC/QodGC0L7RgNC+0L3QuD4KPC/QldC70LXQutGC0YDQvtC90L3QuNC50JTQ
    vtC60YPQvNC10L3Rgj4=






