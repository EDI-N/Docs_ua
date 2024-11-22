########################################################################################################
**Приклад відповіді при створенні квитанції "Повідомлення про відмову від підписання документу"**
########################################################################################################

**Приклад тіла відповіді (JSON):**

.. code:: json

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

------------------

**Приклад тіла відповіді (XML):**

.. code:: XML

  <?xml version="1.0" encoding="UTF-8"?>
  <ЕлектроннийДокумент>
    <Заголовок>
      <НомерДокументу>7C_ftpTest_test1</НомерДокументу>
      <ТипДокументу>Повідомлення про відмову від підписання документу</ТипДокументу>
      <КодТипуДокументу>021</КодТипуДокументу>
      <ДатаДокументу>2022-10-25</ДатаДокументу>
    </Заголовок>
    <Сторони>
      <Контрагент>
        <СтатусКонтрагента>Відправник</СтатусКонтрагента>
        <ВидОсоби>Фізична</ВидОсоби>
        <НазваКонтрагента>FELEX TEST Bogdan</НазваКонтрагента>
        <КодКонтрагента>876543221</КодКонтрагента>
        <ІПН>86543326</ІПН>
        <GLN>9864065160861</GLN>
      </Контрагент>
      <Контрагент>
        <СтатусКонтрагента>Отримувач</СтатусКонтрагента>
        <ВидОсоби>Фізична</ВидОсоби>
        <НазваКонтрагента>ТОВ &quot;МЕТРО КЕШ ЕНД КЕРІ УКРАЇНА&quot;</НазваКонтрагента>
        <КодКонтрагента>12345670</КодКонтрагента>
        <ІПН>1234445670</ІПН>
        <GLN>4820086630009</GLN>
      </Контрагент>
    </Сторони>
    <Текст>testreject</Текст>
  </ЕлектроннийДокумент>

.. code:: XML

  <?xml version="1.0" encoding="UTF-8"?>
  <Document-Invoice>
    <Invoice-Header>
      <InvoiceNumber>PRN_4855_1</InvoiceNumber>
      <InvoiceDate>2024-10-07</InvoiceDate>
      <DocumentFunctionCode>RPLN</DocumentFunctionCode>
      <InvoiceCancelReason>TEST</InvoiceCancelReason>
    </Invoice-Header>
    <BasementInvoice-Reference>
      <Number>PRN_4855_1</Number>
      <Date>2024-10-07</Date>
      <FunctionCode>PRN</FunctionCode>
    </BasementInvoice-Reference>
    <Invoice-Parties>
      <Buyer>
        <ILN>4824034000005</ILN>
        <TaxID>1020301020</TaxID>
        <UtilizationRegisterNumber>34554362</UtilizationRegisterNumber>
        <Name>ТОВ &quot;Фоззі-Фуд&quot;</Name>
      </Buyer>
      <Seller>
        <ILN>9864065732181</ILN>
        <TaxID>1010101016</TaxID>
        <UtilizationRegisterNumber>34554363</UtilizationRegisterNumber>
        <Name>FelEx_1</Name>
      </Seller>
      <DeliveryPoint>
        <ILN>4824034000005</ILN>
        <Name>ТОВ &quot;Фоззі-Фуд&quot;</Name>
        <CityName>м. Вишневе</CityName>
        <StreetAndNumber>вул. Промислова, 5</StreetAndNumber>
        <PostalCode>8132</PostalCode>
      </DeliveryPoint>
      <Payer>
        <ILN>4824034000005</ILN>
        <Name>ТОВ &quot;Фоззі-Фуд&quot;</Name>
        <CityName>м. Вишневе</CityName>
        <StreetAndNumber>вул. Промислова, 5</StreetAndNumber>
        <PostalCode>8132</PostalCode>
      </Payer>
      <Repealer>
        <ILN>9864065732181</ILN>
        <TaxID>1010101016</TaxID>
        <UtilizationRegisterNumber>34554363</UtilizationRegisterNumber>
        <Name>FelEx_1</Name>
      </Repealer>
    </Invoice-Parties>
  </Document-Invoice>

--------------

**Приклад тіла відповіді (json_base64):**

.. code:: json

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

.. code:: json

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



