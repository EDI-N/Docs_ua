##########################################################################################################################
**Рахунок-фактура (COMDOC_016)**
##########################################################################################################################

.. include:: /EDIN_Specs/COMDOC.rst
   :start-after: .. початок блоку для ComdocHint
   :end-before: .. кінець блоку для ComdocHint

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="utf-8"?>
   <ЕлектроннийДокумент>
   <Заголовок>
      <НомерДокументу>ТВ000000175</НомерДокументу>
      <ТипДокументу>Рахунок-фактура</ТипДокументу>
      <КодТипуДокументу>016</КодТипуДокументу>
      <ДатаДокументу>2018-01-01</ДатаДокументу>
      <МісцеСкладання>м.Київ</МісцеСкладання>
   </Заголовок>
   <Сторони>
      <Контрагент>
         <СтатусКонтрагента>Покупець</СтатусКонтрагента>
         <ВидОсоби>Фізична</ВидОсоби>
         <НазваКонтрагента>ФОП Фамилия Имя Отчество</НазваКонтрагента>
         <КодКонтрагента>3555555559</КодКонтрагента>
         <ІПН>11111</ІПН>
         <СвідоцтвоПДВ>11111</СвідоцтвоПДВ>
         <МФО>11111</МФО>
         <ПоточРах>11111</ПоточРах>
         <Телефон>11111</Телефон>
         <GLN>9333333333332</GLN>
      </Контрагент>
      <Контрагент>
         <СтатусКонтрагента>Продавець</СтатусКонтрагента>
         <ВидОсоби>Юридична</ВидОсоби>
         <НазваКонтрагента>ТОВ "TEST"</НазваКонтрагента>
         <КодКонтрагента>11111111</КодКонтрагента>
         <ІПН>198888888826</ІПН>
         <СвідоцтвоПДВ>100444403</СвідоцтвоПДВ>
         <МФО>666666</МФО>
         <ПоточРах>00000000000</ПоточРах>
         <Телефон>(044)555-55-55</Телефон>
         <GLN>4848484848484</GLN>
      </Контрагент>
   </Сторони>
   <Параметри>
      <Параметр ІД="1" назва="Номер договору">ВУЗ-3000</Параметр>
      <Параметр ІД="2" назва="Дата договору">2016-09-16</Параметр>
      <Параметр ІД="3" назва="Адреса Продавець">65015, м. ТЕСТ, вул. Тестова, 15, кв. 28</Параметр>
      <Параметр ІД="4" назва="Адреса Покупець">м. ТЕСТ, вул. Тестова, дом № 14</Параметр>
      <Параметр ІД="5" назва="Назва банку Покупець">ПАТ "БАНК", м.ТЕСТ</Параметр>
   </Параметри>
   <Текст><![CDATA[Арендная плата]]></Текст>
   <Таблиця>
      <Рядок ІД="1">
         <НомПоз>1</НомПоз>
         <Найменування>Оренда нежилого приміщення</Найменування>
         <ПрийнятаКількість>4.00</ПрийнятаКількість>
         <ОдиницяВиміру>м</ОдиницяВиміру>
         <БазоваЦіна>672.44</БазоваЦіна>
         <ПДВ>134.49</ПДВ>
         <Ціна>806.93</Ціна>
         <ВсьогоПоРядку>
         <СумаБезПДВ>2689.77</СумаБезПДВ>
         <СумаПДВ>537.96</СумаПДВ>
         <Сума>3227.73</Сума>
         </ВсьогоПоРядку>
      </Рядок>
   </Таблиця>
   <ВсьогоПоДокументу>
      <СумаБезПДВ>2689.78</СумаБезПДВ>
      <ПДВ>537.95</ПДВ>
      <Сума>3227.73</Сума>
   </ВсьогоПоДокументу>
   </ЕлектроннийДокумент>

.. role:: orange

.. include:: /EDIN_Specs/COMDOC.rst
   :start-after: .. початок блоку для ComdocHint2
   :end-before: .. кінець блоку для ComdocHint2

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1462733094&single=true" width="1100" height="1300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </embed>

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

.. [#] елементи структури мають наступний вигляд:

   * параметрЗіЗначенням;
   * **об'єктЗПараметрами**;
   * :orange:`масивОб'єктів`;
   * жовтим фоном виділяються комірки, в яких відбувались останні зміни

.. data from table (remember to renew time to time)

.. raw:: html

   <!-- <div>I	ЕлектроннийДокумент	M		Початок документу
   1	Заголовок	M	Кількість входжень вузла: Min = 1; Max = 1	Заголовок (початок блоку)
   1.1	НомерДокументу	M	Рядок (16)	Номер документу
   1.2	ТипДокументу	M	Рядок (50)	Тип документу: Рахунок-фактура
   1.3	КодТипуДокументу	M	«016»	Допустиме значення: 016 => Рахунок-фактура (всі підтипи COMDOC)
   1.4	ДатаДокументу	M	Дата (РРРР-ММ-ДД)	Дата складання документу
   1.5	МісцеСкладання	O	Рядок (255)	Місце складання документу
   2	Сторони	M	Мількість входжень вузла: Min = 1; Max = 1	Сторони, між якими укладено документ (початок блоку)
   2.1	Контрагент	M	Кількість входжень вузла: Min = 2; Max = 10	Контрагент (початок блоку). Першим вказується блок відправника, другим – отримувача
   2.1.1	СтатусКонтрагента	M	Рядок (30)	Допустимі значення: Покупець; Отримувач; Продавець; Замовник; Виконавець; Перевізник; Платник; Підрядник; Відправник; Вантажоодержувач; Вантажовідправник; Експедитор; Клієнт; Консультант
   2.1.2	ВидОсоби	M	Рядок (20)	Допустимі значення: Юридична Фізична
   2.1.3	НазваКонтрагента	M	Рядок (50)	Назва контрагента
   2.1.4	КодКонтрагента	M	Рядок (8)	Значенням елемента є код платника згідно з ЄДРПОУ (Реєстраційний (обліковий) номер з Тимчасового реєстру ДПА України) або реєстраційний номер облікової картки платника (номер паспорта, записаний як послідовність двох великих літер української абетки та шести цифр)
   2.1.5	ІПН	M	Integer (10)	Індивідуальний податковий номер
   2.1.6	СвідоцтвоПДВ	O	Integer (10)	Свідоцтво платника ПДВ (податку на додану вартість)
   2.1.7	МФО	O	Рядок	МФО банку
   2.1.8	Телефон	O	Рядок (20)	Телефон контрагента
   2.1.9	ПоточРах	O	Рядок	Поточний рахунок контрагента
   2.1.10	IBAN	O	Рядок (35)	IBAN (міжнародний номер банківського рахунку; використовується при міжнародних розрахунках)
   2.1.11	GLN	M	Integer (13)	Глобальний номер розташування (GLN) контрагента
   3	Парамети	O		Параметри (початок блоку). Тег передбачає довільне значення; використовується для передачі додаткової інформації, що не входить до специфікації
   3.1	Параметр	O	Рядок (50)	Максимальна кількість тегів – 99. У кожного наступного тега ідентифікатор (ІД) збільшується на одиницю.
   4	Текст	O	Рядок (100)	Додаткова інформація
   5	Таблиця	O	Кількість входжень вузла: Min = 0; Max = 1	Таблиця (початок блоку)
   5.1	Рядок	M	Кількість входжень вузла: Min = 1;Max = 9999	Рядок (початок блоку). У кожного наступного блоку ідентифікатор (ІД) збільшується на одиницю
   5.1.1	НомПоз	M	Integer (3)	Номер позиції
   5.1.2	Найменування	M	Рядок (50)	Найменування товарної позиції
   5.1.3	ПрийнятаКількість	O	Decimal (#.000)	Прийнята кількість товарних позицій
   5.1.4	ОдиницяВиміру	O	Рядок (10)	Одиниці виміру
   5.1.5	БазоваЦіна	O	Decimal (#.00)	Ціна за одиницю без ПДВ
   5.1.6	ПДВ	O	Decimal (#.00)	Сума ПДВ в одиниці товару (послуги)
   5.1.7	Ціна	O	Decimal (#.00)	Ціна за одиницю з ПДВ
   5.1.8	ВсьогоПоРядку	O	Кількість входжень вузла: Min = 0; Max = 1	Загальна сума по рядку (початок блоку)
   5.1.8.1	СумаБезПДВ	O	Decimal (#.00)	Сума без ПДВ
   5.1.8.2	СумаПДВ	O	Decimal (#.00)	Сума ПДВ
   5.1.8.3	Сума	O	Decimal (#.00)	Сума
   6	ВсьогоПоДокументу	O		Сумарні значення позицій за документом (початок блоку)
   6.1	СумаБезПДВ	O	Decimal (#.00)	Сума без ПДВ
   6.2	ПДВ	O	Decimal (#.00)	Сума ПДВ в одиниці товару (послуги)
   6.3	Сума	O	Decimal (#.00)	Сума
