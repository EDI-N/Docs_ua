##########################################################################################################################
**Зведена специфікація послуг (COMDOC_026)**
##########################################################################################################################

.. include:: /EDIN_Specs/COMDOC.rst
   :start-after: .. початок блоку для ComdocHint
   :end-before: .. кінець блоку для ComdocHint

**XML:**

.. code:: xml

    <?xml version="1.0" encoding="utf-8"?>
    <ЕлектроннийДокумент>
    <Заголовок>
        <НомерДокументу>613_11</НомерДокументу>
        <ТипДокументу>Зведена специфікація послуг</ТипДокументу>
        <КодТипуДокументу>026</КодТипуДокументу>
        <ДатаДокументу>2017-03-03</ДатаДокументу>
        <ДокПідстава>
        <НомерДокументу>613_613_11</НомерДокументу>
        <ТипДокументу>Зведена специфікація послуг</ТипДокументу>
        <КодТипуДокументу>026</КодТипуДокументу>
        <ДатаДокументу>2017-03-03</ДатаДокументу>
        </ДокПідстава>
    </Заголовок>
    <Сторони>
        <Контрагент>
        <СтатусКонтрагента>Продавець</СтатусКонтрагента>
        <ВидОсоби>Юридична</ВидОсоби>
        <НазваКонтрагента>GLN GLN</НазваКонтрагента>
        <КодКонтрагента>90000031</КодКонтрагента>
        <ІПН>1111111111</ІПН>
        <МФО>05050505</МФО>
        <ПоточРах>3213213213213213</ПоточРах>
        <Телефон>380966666665</Телефон>
        <GLN>91010101093</GLN>
        </Контрагент>
        <Контрагент>
        <СтатусКонтрагента>Покупець</СтатусКонтрагента>
        <ВидОсоби>Юридична</ВидОсоби>
        <НазваКонтрагента>GLN test</НазваКонтрагента>
        <КодКонтрагента>1111111111</КодКонтрагента>
        <ІПН>123456789452</ІПН>
        <GLN>91010101099</GLN>
        </Контрагент>
    </Сторони>
    <Таблиця>
        <Рядок ІД="1">
        <НомПоз>1</НомПоз>
        <Штрихкод ІД="1">4607134684210</Штрихкод>
        <КодУКТЗЕД>3333333333</КодУКТЗЕД>
        <Найменування>AV блиск-бальзам д/губ фруктовий щербет №04 золота полуниця</Найменування>
        <ПрийнятаКількість>11.00</ПрийнятаКількість>
        <ОдиницяВиміру>шт.</ОдиницяВиміру>
        <БазоваЦіна>11.00</БазоваЦіна>
        <ПДВ>1.10</ПДВ>
        <Ціна>12.10</Ціна>
        <ВсьогоПоРядку>
            <СумаБезПДВ>121.00</СумаБезПДВ>
            <СумаПДВ>12.10</СумаПДВ>
            <Сума>133.10</Сума>
        </ВсьогоПоРядку>
        </Рядок>
    </Таблиця>
    <ВсьогоПоДокументу>
        <СумаБезПДВ>121.00</СумаБезПДВ>
        <ПДВ>12.10</ПДВ>
        <Сума>133.10</Сума>
    </ВсьогоПоДокументу>
    </ЕлектроннийДокумент>

.. role:: orange

.. include:: /EDIN_Specs/COMDOC.rst
   :start-after: .. початок блоку для ComdocHint2
   :end-before: .. кінець блоку для ComdocHint2

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1459625517&single=true" width="1100" height="1300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div> I	ЕлектроннийДокумент	M		Початок документу
    1	Заголовок	M	Кількість входжень вузла: Min = 1; Max = 1	Заголовок (початок блоку)
    1.1	НомерДокументу	M	Рядок (16)	Номер документу
    1.2	ТипДокументу	M	Рядок (50)	Тип документу: Зведена специфікація послуг
    1.3	КодТипуДокументу	M	«026»	Допустиме значення: 026 => Зведена специфікація послуг (всі підтипи COMDOC)
    1.4	ДатаДокументу	M	Дата (РРРР-ММ-ДД)	Дата складання документу
    1.5	ДокПідстава	O	Кількість входжень вузла: Min = 0; Max = 10	Документ-підстава (початок блоку)
    1.5.1	НомерДокументу	M	Рядок (30)	Номер документу-підстави
    1.5.2	ТипДокументу	M	Рядок (50)	Типи документів: Договір, Додаткова угода…(типи коммерційних документів)
    1.5.3	КодТипуДокументу	M	«001» / «002» / «003» …	Код типу документу
    1.5.4	ДатаДокументу	M	Дата (РРРР-ММ-ДД)	Дата складання документу
    2	Сторони	M	Мількість входжень вузла: Min = 1; Max = 1	Сторони, між якими укладено документ (початок блоку)
    2.1	Контрагент	M	Кількість входжень вузла: Min = 2; Max = 10	Контрагент (початок блоку). Першим вказується блок відправника, другим – отримувача
    2.1.1	СтатусКонтрагента	M	Рядок (30)	Допустимі значення: Покупець; Отримувач; Продавець; Замовник; Виконавець; Перевізник; Платник; Підрядник; Відправник; Вантажоодержувач; Вантажовідправник; Експедитор; Клієнт; Консультант
    2.1.2	ВидОсоби	M	Рядок (20)	Допустимі значення: Юридична Фізична
    2.1.3	НазваКонтрагента	M	Рядок (50)	Назва контрагента
    2.1.4	КодКонтрагента	M	Рядок (8)	Значенням елемента є код платника згідно з ЄДРПОУ (Реєстраційний (обліковий) номер з Тимчасового реєстру ДПА України) або реєстраційний номер облікової картки платника (номер паспорта, записаний як послідовність двох великих літер української абетки та шести цифр)
    2.1.5	ІПН	M	Рядок (12)	Індивідуальний податковий номер контрагента
    2.1.6	МФО	O	Integer (6)	МФО банку контрагента
    2.1.7	ПоточРах	O	Рядок	Поточний рахунок контрагента
    2.1.8	IBAN	O	Рядок (35)	IBAN (міжнародний номер банківського рахунку; використовується при міжнародних розрахунках)
    2.1.9	Телефон	O	Рядок (20)	Телефон
    2.1.10	GLN	M	Integer (13)	Глобальний номер розташування (GLN) контрагента
    3	Таблиця	O	Кількість входжень вузла: Min = 0; Max = 1	Таблиця (початок блоку)
    3.1	Рядок	M	Кількість входжень вузла: Min = 1;Max = 9999	Рядок (початок блоку). У кожного наступного блоку ідентифікатор (ІД) збільшується на одиницю
    3.1.1	НомПоз	M	Integer (3)	Номер позиції
    3.1.2	Штрихкод	O	Рядок (13)	Максимальна кількість тегів – 99. У кожного наступного тега ідентифікатор (ІД) збільшується на одиницю.
    3.1.3	КодУКТЗЕД	O	Integer (10)	Код товару згідно з УКТ ЗЕД; для COMDOC 006 значення не менше 4 і не більше 10 символів
    3.1.4	Найменування	M	Рядок (50)	Найменування товарної позиції
    3.1.5	ПрийнятаКількість	O	Decimal (#.000)	Прийнята кількість товарних позицій
    3.1.6	ОдиницяВиміру	O	Рядок (10)	Одиниці виміру
    3.1.7	БазоваЦіна	O	Decimal (#.00)	Ціна за одиницю без ПДВ
    3.1.8	ПДВ	O	Decimal (#.00)	Сума ПДВ в одиниці товару (послуги)
    3.1.9	Ціна	O	Decimal (#.00)	Ціна за одиницю з ПДВ
    3.1.10	ВсьогоПоРядку	O	Кількість входжень вузла: Min = 0; Max = 1	Загальна сума по рядку (початок блоку)
    3.1.10.1	СумаБезПДВ	O	Decimal (#.00)	Сума без ПДВ
    3.1.10.2	СумаПДВ	O	Decimal (#.00)	Сума ПДВ
    3.1.10.3	Сума	O	Decimal (#.00)	Сума
    4	ВсьогоПоДокументу	O		Сумарні значення позицій за документом (початок блоку)
    4.1	СумаБезПДВ	O	Decimal (#.00)	Сума без ПДВ
    4.2	ПДВ	O	Decimal (#.00)	Сума ПДВ в одиниці товару (послуги)
    4.3	Сума	O	Decimal (#.00)	Сума
