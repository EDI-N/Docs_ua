##########################################################################################################################
**Прайс-лист (PRICAT)**
##########################################################################################################################

.. epigraph::

   Прайс-лист (PRICAT) служить для опису товарів і послуг. Даний документ відправляється постачальником замовнику і в ньому вказується штрих-код продукту, його опис, ціна, ставка ПДВ. За допомогою Прайс-листа можна також вказати чи зросла/зменшилась ціна або не змінилася.

**XML:**

.. code:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <PRICAT>
   <ACTION>9</ACTION>
   <NUMBER>1000033</NUMBER>
   <DATE>2023-07-06</DATE>
   <DATEFROM>2023-07-03</DATEFROM>
   <DATETO>2023-07-04</DATETO>
   <TIMEFROM>12:10</TIMEFROM>
   <TIMETO>12:22</TIMETO>
   <CAMPAIGNNUMBER>111</CAMPAIGNNUMBER>
   <CUSTOMERREFNUMBER>1212</CUSTOMERREFNUMBER>
   <PRICATINFO>текст вільний</PRICATINFO>
   <ORDERCONTACT>
      <CONTACTFACE>Ярослав</CONTACTFACE>
      <TELEPHON>+380950909019</TELEPHON>
      <EMAIL>send@gmail.com</EMAIL>
   </ORDERCONTACT>
   <VAT>20</VAT>
   <CURRENCY>UAH</CURRENCY>
   <STOREACTION>
      <STOREGLN>9864065732181</STOREGLN>
   </STOREACTION>
   <SUPPLIER>9864065732181</SUPPLIER>
   <BUYER>9864065732211</BUYER>
   <SENDER>9864065732181</SENDER>
   <RECIPIENT>9864065732211</RECIPIENT>
   <EDIINTERCHANGEID>1000033</EDIINTERCHANGEID>
   <CATALOGUE>
      <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <ACTION>2</ACTION>
         <ITEMAVAILABLE>Так</ITEMAVAILABLE>
         <PRODUCT>1231231002</PRODUCT>
         <PRODUCTGROUPCODE>101</PRODUCTGROUPCODE>
         <IDSUPPLIER>777777</IDSUPPLIER>
         <IDBUYER>1111111</IDBUYER>
         <MINORDERQUANTITY>10</MINORDERQUANTITY>
         <MINORDERQUANTITYUNIT>BH</MINORDERQUANTITYUNIT>
         <MAXORDERQUANTITY>15</MAXORDERQUANTITY>
         <MAXORDERQUANTITYUNIT>BH</MAXORDERQUANTITYUNIT>
         <QUANTITYOFCUINTU>45</QUANTITYOFCUINTU>
         <QUANTITYOFCUINTUUNIT>BH</QUANTITYOFCUINTUUNIT>
         <PACKINGMULTIPLENESS>11</PACKINGMULTIPLENESS>
         <IDNATIONAL>12121212</IDNATIONAL>
         <IDINTERNATIONAL>343А3311</IDINTERNATIONAL>
         <IDGPC>191190101</IDGPC>
         <REPLACEPRODUCT>101010101012</REPLACEPRODUCT>
         <PRODUCTGROUP>група</PRODUCTGROUP>
         <ANALOGPRODUCT>101010101011</ANALOGPRODUCT>
         <BRAND>Янтар</BRAND>
         <SUBBRAND>Янтар1</SUBBRAND>
         <VARIATY>Ковбаса копчена</VARIATY>
         <NEWPOSITION>1</NEWPOSITION>
         <PUBLICPOSITION>1</PUBLICPOSITION>
         <PROMO>0</PROMO>
         <BESTSELLER>1</BESTSELLER>
         <FUNCTIONNAME>Ковбаса копчена 10г</FUNCTIONNAME>
         <PRODUCTNAME>Тестова позиція 003</PRODUCTNAME>
         <DEPTH>10</DEPTH>
         <DEPTHUNIT>CMT</DEPTHUNIT>
         <WIDTH>10</WIDTH>
         <WIDTHUNIT>CMT</WIDTHUNIT>
         <HEIGHT>10</HEIGHT>
         <HEIGHTUNIT>CMT</HEIGHTUNIT>
         <VOLUME>100</VOLUME>
         <VOLUMEUNIT>MTQ</VOLUMEUNIT>
         <WEIGHT>10000</WEIGHT>
         <WEIGHTUNIT>GRM</WEIGHTUNIT>
         <TEMPERATUREOFSTORAGE>
         <FROM>10</FROM>
         <TO>20</TO>
         </TEMPERATUREOFSTORAGE>
         <COUNTRYORIGIN>UA</COUNTRYORIGIN>
         <BESTBEFORDATE>2022-02-10</BESTBEFORDATE>
         <CERTIFICATEOFCONFORMITY>1010101010</CERTIFICATEOFCONFORMITY>
         <TAXRATE>20</TAXRATE>
         <BALANCE>11</BALANCE>
         <UNITPRICE>22.330000</UNITPRICE>
         <PRICEWITHVAT>43</PRICEWITHVAT>
         <UNIT>MIL</UNIT>
         <RETAILPRICE>100.00</RETAILPRICE>
         <ADVICEPRICE>110.00</ADVICEPRICE>
         <MAXORDERPRICE>140.00</MAXORDERPRICE>
         <MINORDERPRICE>135.00</MINORDERPRICE>
         <DISCONT>
         <PERUNIT>3</PERUNIT>
         <PERCENT>1</PERCENT>
         </DISCONT>
         <PACKAGE>BG</PACKAGE>
         <QUANTITYOFBOX>12</QUANTITYOFBOX>
         <QUANTITYOFPALLET>10</QUANTITYOFPALLET>
         <INFO>текст вільний</INFO>
         <PARTYAVAILABILITY>1</PARTYAVAILABILITY>
         <SSCCAVAILABILITY>1</SSCCAVAILABILITY>
         <PRODUCTFACTOR>маркування</PRODUCTFACTOR>
         <CONDITIONSTATUS>T11</CONDITIONSTATUS>
         <BONUSRATE>10</BONUSRATE>
         <FOREIGNTRADECODE>1233457</FOREIGNTRADECODE>
         <ENTERPRICE>110</ENTERPRICE>
         <RETROBONUS>10</RETROBONUS>
         <DELAYPAYMENT>10</DELAYPAYMENT>
         <POSITIONCURRENCY>UAH</POSITIONCURRENCY>
         <ACTUALQUANTITY>12</ACTUALQUANTITY>
      </POSITION>
   </CATALOGUE>
   </PRICAT>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=638340231&single=true" width="1100" height="2600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	PRICAT			Початок документа
   1	ACTION	O (M-для PAMPIK)	«9», «13», «15», «19», «51», «21», «99»	Тип документа: 9 - прайс-лист (повний), 13 - запит прайс-листа EDIN, 15 - для сервісу EDIN Distribution, 19 - запит прайс-листа EDIN2.0, 51 - відповідь на прайс-лист, 21 - доповнення існуючого прайс-листа, 99 - відмова на прайс-лист
   2	NUMBER	M	Рядок (16)	Номер документа
   3	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   4	DATEFROM	O	Дата (РРРР-ММ-ДД)	Вступає в силу з дати
   5	DATETO	O	Дата (РРРР-ММ-ДД)	Дата закінчення дії прайс-листа
   6	TIMEFROM	O	Час (год: хв)	Вступає в силу з часу
   7	TIMETO	O	Час (год: хв)	Час закінчення дії прайс-листа
   8	CAMPAIGNNUMBER	O	Рядок (35)	Номер договору на поставку
   9	PRICATINFO	O	Рядок (75)	Вільний текст
   10	ORDERCONTACT			Контактна інформація
   11	VAT	O	Число позитивне	Ставка ПДВ,%
   12	CURRENCY	M	Рядок (3)	Тризначний код валюти (наприклад, UAH, RUB, USD, EUR, MDL, BYR)
   13	STOREACTION			Дія для магазину (для ТМ Караван) - початок блоку
   13.1	STOREGLN			GLN магазину дії прайс-листа
   14	SUPPLIER	M	Число (13)	GLN постачальника
   15	BUYER	M	Число (13)	GLN покупця
   16	SENDER	M	Число (13)	GLN відправника
   17	RECIPIENT	M	Число (13)	GLN одержувача
   18	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції (Унікальний номер, що генерується відправником)
   19	CATALOGUE			Каталог (початок блоку)
   19.1	POSITION			Товарні позиції (початок блоку)
   19.1.1	POSITIONNUMBER	M	Число позитивне	Номер товарної позиції (Порядковий номер товарної позиції в документі (1, 2, 3, 4 … n))
   19.1.2	ACTION	O	« 2 »,« 3 »,« 4 »,« 27 »,« 29 »	Необхідна дія: 2 - додавання нових позицій, 3 - видалення, 4 - зміна, 27 - прийнято, 29 - не прийнято
   19.1.3	ITEMAVAILABLE	O (M-для Розетка)	Так / Ні	Доступність товару до замовлення: 0 - немає, 1 - так
   19.1.4	PRODUCT	M	Число (8, 10, 14)	Штрих-код продукту
   19.1.5	PRODUCTGROUPCODE	O	Число (4)	Код групи товару
   19.1.6	IDSUPPLIER	O (M-для Розетка)	Рядок (20)	Артикул в БД постачальника
   19.1.7	IDBUYER	О	Рядок (20)	Артикул в БД покупця
   19.1.8	MINORDERQUANTITY	O (M-для Розетка)	Число позитивне	Мінімальна кількість у замовленні
   19.1.9	MINORDERQUANTITYUNIT	O	Рядок (3)	Одиниці виміру
   19.1.10	MAXORDERQUANTITY	O	Число позитивне	Максимальна кількість в замовленні
   19.1.11	MAXORDERQUANTITYUNIT	O	Рядок (3)	Одиниці виміру
   19.1.12	QUANTITYOFCUINTU	O	Число позитивне	Кількість в упаковці
   19.1.13	QUANTITYOFCUINTUUNIT	O	Рядок (3)	Одиниці виміру
   19.1.14	IDNATIONAL	O	Рядок (35)	Код товару за національним класифікатором (код УКТЗЕД)
   19.1.15	IDINTERNATIONAL	O	Рядок (35)	Код товару за міжнародним класифікатором
   19.1.16	IDGPC	O	Рядок (35)	Код продукту відповідає Global Product Classification
   19.1.17	REPLACEPRODUCT	O	Число (8, 10, 14)	Продукт для заміни
   19.1.18	PRODUCTGROUP	O	Рядок (6)	Товарна група
   19.1.19	ANALOGPRODUCT	O	Число (8, 10, 14)	Описаний продукт має аналог
   19.1.20	BRAND	O	Рядок (75)	Бренд (торгова марка)
   19.1.21	SUBBRAND	O	Рядок (75)	суббренд (торгова марка нижчого рівня)
   19.1.22	VARIATY	O	Рядок (75)	Варіант (різновид) назви продукту
   19.1.23	NEWPOSITION	O	Число (1, 0)	Відмітка «Новинка» (0 - відсутня; 1 - присутня)
   19.1.24	PUBLICPOSITION	O	Число (1, 0)	Відмітка «Публічна позиція» (0 - відсутня; 1 - присутня)
   19.1.25	PROMO	О	Число (1, 0)	Відмітка «Акція» (0 - відсутня; 1 - присутня)
   19.1.26	BESTSELLER	О	Число (1, 0)	Відмітка «Хіт продажу» (0 - відсутня; 1 - присутня)
   19.1.27	FUNCTIONNAME	O	Рядок (75)	Функціональна назва
   19.1.28	PRODUCTNAME	M	Рядок (75)	Повна назва продукту
   19.1.29	DEPTH	O	Число позитивне	Глибина
   19.1.30	DEPTHUNIT	O	Рядок (3)	Одиниці виміру
   19.1.31	WIDTH	O	Число позитивне	Ширина
   19.1.32	WIDTHUNIT	O	Рядок (3)	Одиниці виміру
   19.1.33	HEIGHT	O	Число позитивне	Висота
   19.1.34	HEIGHTUNIT	O	Рядок (3)	Одиниці виміру
   19.1.35	VOLUME	O	Число позитивне	Об’єм
   19.1.36	VOLUMEUNIT	O	Рядок (3)	Одиниці виміру
   19.1.37	WEIGHT	O	Число позитивне	Вага
   19.1.38	WEIGHTUNIT	O	Рядок (3)	Одиниці виміру
   19.1.39.1	TEMPERATUREOFSTORAGE.FROM	O	Число [-100; 100]	Температура зберігання Від (Температура зберігання продукту вказується в градусах за Цельсієм)
   19.1.39.2	TEMPERATUREOFSTORAGE.TO	O	Число [-100; 100]	Температура зберігання До (Температура зберігання продукту вказується в градусах за Цельсієм)
   19.1.40	COUNTRYORIGIN	O	Рядок (2)	Країна виробник (код держави за стандартом ISO-3166 (2 букви))
   19.1.41	BESTBEFORDATE	O	Дата (РРРР-ММ-ДД)	Придатний до
   19.1.42	CERTIFICATEOFCONFORMITY	O	Рядок (35)	Номер сертифіката відповідності
   19.1.43	HYGIENICCERTIFICATE	O	Рядок (35)	Номер гігієнічного сертифіката
   19.1.44	TAXRATE	M	Число позитивне	Ставка ПДВ,%
   19.1.45	POSITIONCURRENCY	O (M-для Розетка)	Рядок	код валюти (UAH, RUB, USD …) по позиції
   19.1.46	BALANCE	O	Число десяткове	Поточний залишок (постачальник)
   19.1.47	UNITPRICE	M	Число десяткове	Ціна продукту без ПДВ
   19.1.48	PRICEWITHVAT	M	Число десяткове	Ціна продукту з ПДВ
   19.1.49	UNIT	М	Рядок (3)	Одиниці виміру
   19.1.50	RETAILPRICE	O	Число десяткове	Рекомендована роздрібна ціна
   19.1.51	ADVICEPRICE	O	Число десяткове	Рекомендована ціна (державою)
   19.1.52	MAXORDERPRICE	O	Число десяткове	Максимальна роздрібна ціна
   19.1.53	MINORDERPRICE	O	Число десяткове	Мінімальна роздрібна ціна
   19.1.54.1	DISCONT.PERUNIT	O	Число позитивне	Знижка за одиницю
   19.1.54.2	DISCONT.PERCENT	O	Число десяткове	Знижка у відсотках
   19.1.55	PACKAGE	O	Рядок (2, 3)	Тип упаковки
   19.1.56	QUANTITYOFBOX	О	Число позитивне	Кількість коробок
   19.1.57	QUANTITYOFPALLET	О	Число позитивне	Кількість палет
   19.1.58	INFO	O	Рядок (70)	Вільний текст
   19.1.59	PARTYAVAILABILITY	O	0 / 1	Наявність партії у товару: 0 - немає, 1 - так
   19.1.60	SSCCAVAILABILITY	O	0/1	Ознака серійного номера: 0 - немає, 1 - так
   19.1.61	PRODUCTFACTOR	O	Рядок (12)	Об’єднуюча ознака товару
   19.1.62	CONDITIONSTATUS	О	Рядок (3)	Статус кондиції
   19.1.63	BONUSRATE	O	Число десяткове	Бонусна ставка
   19.1.64	FOREIGNTRADECODE	О	Рядок	Код УКТ ЗЕД (для ТМ Дігма)
   19.1.65	ENTERPRICE	О	Число	Введення позиції, грн (для ТМ Дігма)
   19.1.66	RETROBONUS	О	Число	Ретро-бонус,% (для ТМ Дігма)
   19.1.67	DELAYPAYMENT	О	Число	Відстрочка платежу (для ТМ Дігма)
   19.1.68	POSITIONCURRENCY	О		Код валюти, допустимі значення:UAH, EUR, USD
   19.1.69	ACTUALQUANTITY	О	Число позитивне	Залишок по позиції
