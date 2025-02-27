##########################################################################################################################
**Повідомлення про відвантаження для розподільного центру (DESSCC)**
##########################################################################################################################

.. epigraph::

   Повідомлення про відвантаження для розподільного центру (DESSCC)

**XML:**

.. code:: xml

   <DESSCC>
   <NUMBER>111112</NUMBER>
   <DATE>2023-04-07</DATE>
   <DELIVERYDATE>2023-04-07</DELIVERYDATE>
   <DELIVERYTIME>20:55</DELIVERYTIME>
   <ORDERNUMBER>1111</ORDERNUMBER>
   <ORDERDATE>2023-04-05</ORDERDATE>
   <DELIVERYNOTENUMBER>1111</DELIVERYNOTENUMBER>
   <DELIVERYNOTEDATE>2023-03-03</DELIVERYNOTEDATE>
   <TOTALPACKAGES>40</TOTALPACKAGES>
   <WEIGHTUNIT>кг</WEIGHTUNIT>
   <INFO>11111</INFO>
   <SHIPMENTS>1</SHIPMENTS>
   <CAMPAIGNNUMBER>1111</CAMPAIGNNUMBER>
   <SELFSHIPMENT>1</SELFSHIPMENT>
   <TRANSPORTERPHONE>+380955678484</TRANSPORTERPHONE>
   <TRANSPORTQUANTITY>1</TRANSPORTQUANTITY>
   <TRANSPORTMARK>Reno Master</TRANSPORTMARK>
   <TRANSPORTID>111111</TRANSPORTID>
   <TRANSPORTERNAME>Сергій</TRANSPORTERNAME>
   <TRAILERNUMBER>АК3456ЕІ</TRAILERNUMBER>
   <TRANSPORTTYPE>30</TRANSPORTTYPE>
   <TRANSPORTERTYPE>31</TRANSPORTERTYPE>
   <HEAD>
   <SUPPLIER>9864065732181</SUPPLIER>
   <BUYER>9864065732211</BUYER>
   <DELIVERYPLACE>9864065732211</DELIVERYPLACE>
   <SENDER>9864065732181</SENDER>
   <RECIPIENT>9864065732211</RECIPIENT>
   <PACKINGSEQUENCE>
   <EUROPALLET>2</EUROPALLET>
   <HEIGHT>5m</HEIGHT>
   <WIDTH>10m</WIDTH>
   <LATERALUNLOADING>1</LATERALUNLOADING>
   <LENGTH>10m</LENGTH>
   <LENGTHUNIT>MTR</LENGTHUNIT>
   <WEIGHTBRUTTO>25.40</WEIGHTBRUTTO>
   <WEIGHTNETTO>20.40</WEIGHTNETTO>
   <PACKAGETYPE>RO</PACKAGETYPE>
   <QUANTITYOFBOXPAL>11</QUANTITYOFBOXPAL>
   <HIERARCHICALID>2</HIERARCHICALID>
   <SSCC>098640672200000009</SSCC>
   <LOCATION>9864065735380</LOCATION>
   <VOLUME>10.30</VOLUME>
   <WEIGHT>15.40</WEIGHT>
   <POSITION>
   <POSITIONNUMBER>1</POSITIONNUMBER>
   <PRODUCT>1111111</PRODUCT>
   <PRODUCTIDSUPPLIER>134551</PRODUCTIDSUPPLIER>
   <PRODUCTIDBUYER>123455</PRODUCTIDBUYER>
   <DELIVEREDQUANTITY>11111</DELIVEREDQUANTITY>
   <DELIVEREDUNIT>кг</DELIVEREDUNIT>
   <ORDEREDQUANTITY>111</ORDEREDQUANTITY>
   <DESCRIPTION>мандарин</DESCRIPTION>
   <COUNTRYORIGIN>AZ</COUNTRYORIGIN>
   <CUSTOMSTARIFFNUMBER>11111</CUSTOMSTARIFFNUMBER>
   <PRICE>11.000000</PRICE>
   <VAT>0.00</VAT>
   <EXPIREDATE>2023-04-10</EXPIREDATE>
   </POSITION>
   </PACKINGSEQUENCE>
   </HEAD>
   </DESSCC>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=863287501&single=true" width="1100" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	DESSCC			Початок документа
   1	NUMBER	M	Рядок (50)	Номер документа
   2	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   3	DELIVERYDATE	M	Дата (РРРР-ММ-ДД)	Дата доставки
   4	DELIVERYTIME	O	Дата (РРРР-ММ-ДД)	Час доставки
   5	ORDERNUMBER	M	Рядок (50)	Номер замовлення
   6	ORDERDATE	M	Дата (РРРР-ММ-ДД)	Дата замовлення
   7	DELIVERYNOTENUMBER	O	Рядок (50)	Номер накладної
   8	DELIVERYNOTEDATE	O	Дата (РРРР-ММ-ДД)	Дата накладної
   9	TOTALPACKAGES	O	Число позитивне	Загальна кількість упаковок по документа
   10	WEIGHTUNIT	O	Число десяткове	Одиниця виміру
   11	INFO	O	Рядок (200)	Вільний текст
   12	SHIPMENTS	O	Рядок (1)	Кількість відвантажень по замовленню
   13	CAMPAIGNNUMBER	O	Рядок (70)	Номер договора на поставку
   14	SELFSHIPMENT	O	Число позитивне	Самовивіз (1- так, 0 - Ні)
   15	TRANSPORTERPHONE	O	Рядок (12)	Телефон водія
   16	TRANSPORTQUANTITY	O	Число позитивне	Кількість автомобілів
   17	TRANSPORTMARK	O	Рядок (70)	Марка авто
   18	TRANSPORTID	O	Рядок (70)	Держномер т/з
   19	TRANSPORTERNAME	O	Рядок (70)	ПІБ водія
   20	TRAILERNUMBER	O	Рядок (70)	Номер прицепу
   21	TRANSPORTTYPE	O	Рядок (2, 3)	"Тип транспортування:
   20 — залізничний,
   
   30 — дорожний,
   
   40 — повітряний,
   
   60 — зпарений,
   
   100 — кур’єрська служба"
   22	TRANSPORTERTYPE	O	Рядок (16)	"Тип транспортного засобу:
   31 — грузовий
   
   48 — легковий"
   23	HEAD			Початок основного блоку
   23.1	SUPPLIER	M	Число (13)	GLN постачальника
   23.2	BUYER	O	Число (13)	GLN покупця
   23.3	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   23.4	SENDER	M	Число (13)	GLN відправника повідомлення
   23.5	RECIPIENT	M	Число (13)	GLN одержувача повідомлення
   23.6	PACKINGSEQUENCE			Робота з товарними позиціями (початок блоку)
   23.6.1	EUROPALLET	O	Число позитивне	Ознака європалети 1- Так, 0 - ні
   23.6.2	HEIGHT	M	Рядок (16)	Висота
   23.6.3	WIDTH	M	Рядок (16)	Ширина
   23.6.4	LATERALUNLOADING	O	Рядок (16)	Бокове завантаження: 1 - так, 0 - ні
   23.6.5	LENGTH	M	Рядок (16)	Довжина
   23.6.6	LENGTHUNIT	O	Рядок (3)	"Одиниці виміру:
   Сантиметри: CMT
   
   Міліметри: MMT
   
   Метри: MTR"
   23.6.7	WEIGHTBRUTTO	O	Число десяткове	Вага брутто в КГ
   23.6.8	WEIGHTNETTO	O	Число десяткове	Вага нетто в КГ
   23.6.9	PACKAGETYPE	O	Рядок (3)	"201 - 120x80 EURO Pallet
   
   202 - 120x100 AMER
   
   200 - 0-1/2 EURO Pallet
   
   RO - Рулон/Ролік
   
   EH - ящик з металевим піддоном (для дверей)
   
   PC - Посилка (Коробка)
   
   PX - Інше"
   23.6.10	QUANTITYOFBOXPAL	O	Число позитивне	Кількість коробок на палеті
   23.6.11	HIERARCHICALID	M	Число позитивне	"Номер ієрархії упаковки
   1- CONSUMERUNIT
   
   2- TRADEUNIT
   
   3- DESPATCHUNIT"
   23.6.12	SSCC	M	Число (18)	Штрихове кодування логістичних одиниць (дозволяє автоматизувати процес ідентифікації: палет, контейнерів, ящиків, пакувань)
   23.6.13	LOCATION	M	Число (13)	GLN місця доставки палети
   23.6.14	VOLUME	O	Число десяткове	Об’єм
   23.6.15	WEIGHT	O	Число десяткове	Вага
   23.6.16	POSITION	M		Товарні позиції (початок блоку)
   23.6.16.1	POSITIONNUMBER	M	Число позитивне	Номер позиції
   23.6.16.2	PRODUCT	M	Число (8, 10, 14)	ШК товару
   23.6.16.3	PRODUCTIDSUPPLIER	O	Рядок (16)	Артикул продавця
   23.6.16.4	PRODUCTIDBUYER	O	Рядок (16)	Артикул покупця
   23.6.16.5	DELIVEREDQUANTITY	M	Число позитивне	Відвантажена кількість
   23.6.16.6	DELIVEREDUNIT	M	Рядок (3)	Одиниці виміру
   23.6.16.7	ORDEREDQUANTITY	O	Число позитивне	Замовлена кількість
   23.6.16.8	DESCRIPTION	M	Рядок (16)	Опис товару
   23.6.16.9	COUNTRYORIGIN	O	Рядок (3)	Країна виробник
   23.6.16.10	CUSTOMSTARIFFNUMBER	O	Число позитивне	Код УКТЗЕД для кожної позиції
   23.6.16.11	PRICE	O	Число десяткове	Ціна продукту без ПДВ
   23.6.16.12	VAT	O	Рядок (3)	Ставка ПДВ,%
   23.6.16.13	EXPIREDATE	O	Дата (РРРР-ММ-ДД)	Термін придатності, дата до…
