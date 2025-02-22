##########################################################################################################################
**Акт взаємозаліку (COMDOC_015)**
##########################################################################################################################

.. include:: /EDIN_Specs/COMDOC.rst
   :start-after: .. початок блоку для ComdocHint
   :end-before: .. кінець блоку для ComdocHint

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <ЕлектроннийДокумент>
   <Заголовок>
      <НомерДокументу>номер</НомерДокументу>
      <ТипДокументу>Акт взаємозаліку</ТипДокументу>
      <КодТипуДокументу>015</КодТипуДокументу>
      <ДатаДокументу>2021-01-29</ДатаДокументу>
      <ТермінДії>
         <Початок>2021-01-29</Початок>
         <Кінець>2021-07-31</Кінець>
      </ТермінДії>
      <НомерЗамовлення>На замовлення</НомерЗамовлення>
      <ДатаЗамовлення>2021-01-29</ДатаЗамовлення>
      <МісцеСкладання>Мiсце складання</МісцеСкладання>
      <Коментар ІД="1">Коментар</Коментар>
      <Коментар ІД="2">Коментар2</Коментар>
      <ДокПідстава>
         <НомерДокументу>номер</НомерДокументу>
         <ТипДокументу>Рахунок-фактура</ТипДокументу>
         <КодТипуДокументу>016</КодТипуДокументу>
         <ДатаДокументу>2021-01-29</ДатаДокументу>
      </ДокПідстава>
   </Заголовок>
   <Сторони>
      <Контрагент>
         <СтатусКонтрагента>Відправник</СтатусКонтрагента>
         <ВидОсоби>Юридична</ВидОсоби>
         <НазваКонтрагента>FELEX TEST Bogdan</НазваКонтрагента>
         <КодКонтрагента>31600022</КодКонтрагента>
         <ІПН>1234567890</ІПН>
         <СвідоцтвоПДВ>47765</СвідоцтвоПДВ>
         <МФО>МФО</МФО>
         <ПоточРах>40989344</ПоточРах>
         <IBAN>UA160043430000000000000533445</IBAN>
         <Банк>банк</Банк>
         <Телефон>093585559983</Телефон>
         <GLN>9864065160861</GLN>
      </Контрагент>
      <Контрагент>
         <СтатусКонтрагента>Отримувач</СтатусКонтрагента>
         <ВидОсоби>Юридична</ВидОсоби>
         <НазваКонтрагента>ТОВ &quot;Перевізник&quot;</НазваКонтрагента>
         <КодКонтрагента>31600225</КодКонтрагента>
         <ІПН>31600225</ІПН>
         <СвідоцтвоПДВ>Свідоцтво ПДВ</СвідоцтвоПДВ>
         <МФО>222222</МФО>
         <ПоточРах>33333333</ПоточРах>
         <Банк>Назва банку</Банк>
         <Телефон>380500000000</Телефон>
         <GLN>4820000000000</GLN>
         <ВОсобіДиректора>В особі директора</ВОсобіДиректора>
         <ЮрАдреса>
         <Індекс>34534</Індекс>
         <Область>345345</Область>
         <Місто>345345</Місто>
         <Вулиця>Вулиця</Вулиця>
         <Адреса>Адреса</Адреса>
         </ЮрАдреса>
         <ФактАдреса>
         <Індекс>34534</Індекс>
         <Область>345345</Область>
         <Місто>345345435</Місто>
         <Вулиця>Вулиця</Вулиця>
         <Адреса>Адреса</Адреса>
         </ФактАдреса>
         <ПоштАдреса>
         <Індекс>34534</Індекс>
         <Область>345345</Область>
         <Місто>345345345</Місто>
         <Вулиця>Вулиця</Вулиця>
         <Адреса>Адреса</Адреса>
         </ПоштАдреса>
      </Контрагент>
   </Сторони>
   <Параметри>
      <Параметр ІД="1" назва="Параметри">56565</Параметр>
      <Параметр ІД="2" назва="Параметри">Параметри</Параметр>
   </Параметри>
   <Таблиця>
      <Рядок ІД="1">
         <НомПоз>1</НомПоз>
         <Найменування>Найменування</Найменування>
         <Взаєморозрахунки>
         <ДатаОперації>2021-01-29</ДатаОперації>
         <Дебет>343434</Дебет>
         <Кредит>343434</Кредит>
         </Взаєморозрахунки>
      </Рядок>
   </Таблиця>
   <ВсьогоПоДокументу>
      <СумаБезПДВ>0.0</СумаБезПДВ>
      <ПДВ>0.0</ПДВ>
      <Сума>0.0</Сума>
   </ВсьогоПоДокументу>
   </ЕлектроннийДокумент>

.. role:: orange

.. include:: /EDIN_Specs/COMDOC.rst
   :start-after: .. початок блоку для ComdocHint2
   :end-before: .. кінець блоку для ComdocHint2

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=70047367&single=true" width="1100" height="2250" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
   1.2	ТипДокументу	M	Рядок (50)	Тип документу: Акт взаємозаліку
   1.3	КодТипуДокументу	M	«015»	Допустиме значення: 015 => Акт взаємозаліку (всі підтипи COMDOC)
   1.4	ДатаДокументу	M	Дата (РРРР-ММ-ДД)	Дата складання документу
   1.5	ТермінДії	O	Кількість входжень вузла: Min = 0; Max = 1	Термін, на період якого документ вважається чинним (початок блоку)
   1.5.1	Початок	M	Дата (РРРР-ММ-ДД)	Дата початку дії документу
   1.5.2	Кінець	M	Дата (РРРР-ММ-ДД)	Дата закінчення терміну дії документу
   1.6	НомерЗамовлення	O	Рядок (20)	Номер замовлення за документом
   1.7	ДатаЗамовлення	O	Дата (РРРР-ММ-ДД)	Дата здійснення замовлення
   1.8	МісцеСкладання	O	Рядок (255)	Місце складання документу
   1.9	Коментар	O	Рядок (50)	Максимальна кількість тегів – 10. У кожного наступного тега ідентифікатор (ІД) збільшується на одиницю.
   1.10	ДокПідстава	O	Кількість входжень вузла: Min = 0; Max = 10	Документ-підстава (початок блоку)
   1.10.1	НомерДокументу	M	Рядок (30)	Номер документу-підстави
   1.10.2	ТипДокументу	M	Рядок (50)	Типи документів: Договір, Додаткова угода…(типи коммерційних документів)
   1.10.3	КодТипуДокументу	M	«001» / «002» / «003» …	Код типу документу
   1.10.4	ДатаДокументу	M	Дата (РРРР-ММ-ДД)	Дата складання документу
   2	Сторони	M	Мількість входжень вузла: Min = 1; Max = 1	Сторони, між якими укладено документ (початок блоку)
   2.1	Контрагент	M	Кількість входжень вузла: Min = 2; Max = 10	Контрагент (початок блоку). Першим вказується блок відправника, другим – отримувача
   2.1.1	СтатусКонтрагента	M	Рядок (30)	Допустимі значення: Покупець; Отримувач; Продавець; Замовник; Виконавець; Перевізник; Платник; Підрядник; Відправник; Вантажоодержувач; Вантажовідправник; Експедитор; Клієнт; Консультант
   2.1.2	ВидОсоби	M	Рядок (20)	Допустимі значення: Юридична Фізична
   2.1.3	НазваКонтрагента	M	Рядок (50)	Назва контрагента
   2.1.4	КодКонтрагента	M	Рядок (8)	Значенням елемента є код платника згідно з ЄДРПОУ (Реєстраційний (обліковий) номер з Тимчасового реєстру ДПА України) або реєстраційний номер облікової картки платника (номер паспорта, записаний як послідовність двох великих літер української абетки та шести цифр)
   2.1.5	ІПН	M	Integer (10)	Індивідуальний податковий номер
   2.1.6	СвідоцтвоПДВ	O	Integer (10)	Свідоцтво платника ПДВ (податку на додану вартість)
   2.1.7	МФО	O	Рядок	МФО банку
   2.1.8	ПоточРах	O	Рядок	Поточний рахунок контрагента
   2.1.9	IBAN	O	Рядок (35)	IBAN (міжнародний номер банківського рахунку; використовується при міжнародних розрахунках)
   2.1.10	Банк			Банк контрагента
   2.1.11	Телефон	O	Рядок (20)	Телефон контрагента
   2.1.12	GLN	M	Integer (13)	Глобальний номер розташування (GLN) контрагента
   2.2	Контрагент	M	Кількість входжень вузла: Min = 2; Max = 10	Контрагент (початок блоку). Першим вказується блок відправника, другим – отримувача
   2.2.1	СтатусКонтрагента	M	Рядок (30)	Допустимі значення: Покупець; Отримувач; Продавець; Замовник; Виконавець; Перевізник; Платник; Підрядник; Відправник; Вантажоодержувач; Вантажовідправник; Експедитор; Клієнт; Консультант
   2.2.2	ВидОсоби	M	Рядок (20)	Допустимі значення: Юридична Фізична
   2.2.3	НазваКонтрагента	M	Рядок (50)	Назва контрагента
   2.2.4	КодКонтрагента	M	Рядок (8)	Значенням елемента є код платника згідно з ЄДРПОУ (Реєстраційний (обліковий) номер з Тимчасового реєстру ДПА України) або реєстраційний номер облікової картки платника (номер паспорта, записаний як послідовність двох великих літер української абетки та шести цифр)
   2.2.5	ІПН	M	Integer (10)	Індивідуальний податковий номер
   2.2.6	СвідоцтвоПДВ	O	Integer (10)	Свідоцтво платника ПДВ (податку на додану вартість)
   2.2.7	МФО	O	Рядок	МФО банку
   2.2.8	ПоточРах	O	Рядок	Поточний рахунок контрагента
   2.2.9	IBAN	O	Рядок (35)	IBAN (міжнародний номер банківського рахунку; використовується при міжнародних розрахунках)
   2.2.10	Банк			Банк контрагента
   2.2.11	Телефон	O	Рядок (20)	Телефон контрагента
   2.2.12	GLN	M	Integer (13)	Глобальний номер розташування (GLN) контрагента
   2.2.13	ВОсобіДиректора			Директор
   2.2.14	ЮрАдреса	O		Юридична адреса контрагента (початок блоку)
   2.2.14.1	Індекс	M	Integer (5)	Індекс
   2.2.14.2	Область	O	Рядок (50)	Область
   2.2.14.3	Місто	M	Рядок (50)	Місто
   2.2.14.4	Вулиця	M	Рядок (50)	Вулиця
   2.2.15	ФактАдреса	O		Фактична адреса контрагента (початок блоку)
   2.2.15.1	Індекс	M	Integer (5)	Індекс
   2.2.15.2	Область	O	Рядок (50)	Область
   2.2.15.3	Місто	M	Рядок (50)	Місто
   2.2.15.4	Вулиця	M	Рядок (50)	Вулиця
   2.2.16	ПоштАдреса	O		Поштова адреса контрагента (початок блоку)
   2.2.16.1	Індекс	M	Integer (5)	Індекс
   2.2.16.2	Область	O	Рядок (50)	Область
   2.2.16.3	Місто	M	Рядок (50)	Місто
   2.2.16.4	Вулиця	M	Рядок (50)	Вулиця
   3	Парамети	O		Параметри (початок блоку). Тег передбачає довільне значення; використовується для передачі додаткової інформації, що не входить до специфікації
   3.1	Параметр	O	Рядок (50)	Максимальна кількість тегів – 99. У кожного наступного тега ідентифікатор (ІД) збільшується на одиницю.
   4	Таблиця	O	Кількість входжень вузла: Min = 0; Max = 1	Таблиця (початок блоку)
   4.1	Рядок	M	Кількість входжень вузла: Min = 1;Max = 9999	Рядок (початок блоку). У кожного наступного блоку ідентифікатор (ІД) збільшується на одиницю
   4.1.1	НомПоз	M	Integer (3)	Номер позиції
   4.1.2	Найменування	M	Рядок (50)	Найменування товарної позиції
   4.1.3	Взаєморозрахунки	O		Взаєморозрахунки (початок блоку)
   4.1.3.1	ДатаОперації	O	Дата (РРРР-ММ-ДД)	Дата операції
   4.1.3.2	Дебет	O	Decimal (#.00)	Дебет
   4.1.3.3	Кредит	O	Decimal (#.00)	Кредит
   5	ВсьогоПоДокументу	O	Сумарні значення позицій за документом (початок блоку)	
   5.1	СумаБезПДВ	O	Decimal (#.00)	Сума без ПДВ
   5.2	ПДВ	O	Decimal (#.00)	Сума ПДВ в одиниці товару (послуги)
   5.3	Сума	O	Decimal (#.00)	Сума
