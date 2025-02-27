##########################################################################################################################
**Резерв товару (PRDRSRVN)**
##########################################################################################################################

.. epigraph::

   Резерв товару (PRDRSRVN) відправляється покупцем (роздрібною мережею) постачальнику й дозволяє створювати, змінювати та відстежувати резерв товару через EDI, щоб ефективно керувати запасами.

**XML:**

.. code:: xml

   <PRDRSRVN>
      <NUMBER>prdrsrvn_test6</NUMBER>
      <DATE>2024-06-28</DATE>
      <DELIVERYDATE>2024-07-10</DELIVERYDATE>
      <CAMPAIGNNUMBER>94110</CAMPAIGNNUMBER>
      <TYPE>1</TYPE>
      <INFO>Контактнийй телефон магазину:#</INFO>
      <HEAD>
         <SUPPLIER>9864065750130</SUPPLIER>
         <BUYER>9864065750123</BUYER>
         <BUYERCODE>1001</BUYERCODE>
         <BRANCHCODE>30 Логістичний центр &quot;Калинівка&quot;</BRANCHCODE>
         <DELIVERYPLACE>9864065750116</DELIVERYPLACE>
         <SENDER>9864065750123</SENDER>
         <RECIPIENT>9864065750130</RECIPIENT>
         <EDIINTERCHANGEID>50936691749</EDIINTERCHANGEID>
         <POSITION>
            <POSITIONNUMBER>1</POSITIONNUMBER>
            <POSITIONCODE>888</POSITIONCODE>
            <PRODUCT>4820083900013</PRODUCT>
            <PRODUCTIDSUPPLIER>;</PRODUCTIDSUPPLIER>
            <PRODUCTIDBUYER>11201407</PRODUCTIDBUYER>
            <RESERVQUANTITY>75.00000</RESERVQUANTITY>
            <RESERVUNIT>PCE</RESERVUNIT>
            <RESERVPRICE>32.10</RESERVPRICE>
            <PRICEWITHVAT>38.52</PRICEWITHVAT>
            <CHARACTERISTIC>
            <DESCRIPTION>Корм сухий для собак ГАВ, м&apos;ясне асорті, 500г</DESCRIPTION>
            </CHARACTERISTIC>
         </POSITION>
         <POSITION>
            <POSITIONNUMBER>2</POSITIONNUMBER>
            <POSITIONCODE>999</POSITIONCODE>
            <PRODUCT>4820215361071</PRODUCT>
            <PRODUCTIDBUYER>11219329</PRODUCTIDBUYER>
            <RESERVQUANTITY>30.00000</RESERVQUANTITY>
            <RESERVUNIT>PCE</RESERVUNIT>
            <RESERVPRICE>446.10</RESERVPRICE>
            <PRICEWITHVAT>535.32</PRICEWITHVAT>
            <CHARACTERISTIC>
            <DESCRIPTION>Корм сухий для собак ГАВ, м&apos;ясне асорті, 10кг</DESCRIPTION>
            </CHARACTERISTIC>
         </POSITION>
      </HEAD>
   </PRDRSRVN>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=14923249&single=true" width="1100" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	PRDRSRVN	М		Початок документа
   1	NUMBER	М	Рядок (50)	Номер документа
   2	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   3	DELIVERYDATE	М	Дата (РРРР-ММ-ДД)	Дата поставки
   4	CAMPAIGNNUMBER	O	Рядок (70)	Номер договору на поставку
   5	CAMPAIGNNUMBERDATE	O	Дата (РРРР-ММ-ДД)	Дата договору
   6	VAT	O	Число позитивне	Ставка ПДВ,%
   7	INFOCODED	O	Рядок (35)	Інфокод
   8	SUPORDER	O	Рядок (35)	Номер замовлення постачальника
   9	TYPE	M	Рядок (35)	"Тип резерву:
   1 - Резерв (оригінальний документ)
   2 - Транзакція (зміни в табличній частині)"
   10	INFO	O	Рядок (70)	Вільний текст
   11	HEAD	M		Початок основного блоку
   11.1	SUPPLIER	M	Число (13)	GLN постачальника
   11.2	BUYER	M	Число (13)	GLN покупця
   11.3	BUYERCODE	O	Рядок (35)	Код покупця
   11.4	BRANCHCODE	O	Рядок	Код філіалу (для Нова Лінія та ЕПІЦЕНТР К )
   11.5	DELIVERYPLACE	M	Число (13)	GLN місця доставки
   11.6	FINALRECIPIENT	O	Число (13)	GLN кінцевого консигнатора
   11.7	ORDERPARTNER	O	Число (13)	GLN замовника
   11.8	INVOICEPARTNER	O	Число (13)	GLN платника
   11.9	SENDER	M	Число (13)	GLN відправника повідомлення
   11.10	RECIPIENT	M	Число (13)	GLN одержувача повідомлення
   11.11	CONSIGNEE	О	Число (13)	GLN вантажоодержувача
   11.12	INFO	O	Рядок (70)	Вільний текст
   11.13	DISCOUNTVALUE	O	Число позитивне	Розмір знижки
   11.14	RECIPIENTCONTACTFACE	O	Рядок (70)	Контактна особа
   11.15	EDIINTERCHANGEID	O	Рядок (70)	Номер транзакції
   11.16	POSITION	М		Товарні позиції (початок блоку)
   11.16.1	POSITIONNUMBER	М	Число позитивне	Номер товарної позиції
   11.16.2	POSITIONCODE	М	Число позитивне	Унікальний ідентифікатор коду товарної позиції
   11.16.3	ACTION	O / M	Число позитивне	"Поле обовʼязкове, тільки у випадку роботи з транзакціями.
   0 - Погодження кількості резерву / відхилення резерву (від Постачальника)
   1 - додавання позицій / кількості (від Мережі)
   2 - видалення позицій / кількості (від мережі)"
   11.16.4	PRODUCT	M	Число (8, 10, 14)	Штрихкод продукту
   11.16.5	PRODUCTIDSUPPLIER	O	Рядок (16)	Артикул в БД
   11.16.6	PRODUCTIDBUYER	O	Рядок (16)	Артикул в БД покупця
   11.16.7	BUYERPARTNUMBER	О	Рядок (16)	Внутрішній системний номер артикулу в БД покупця
   11.16.8	RESERVQUANTITY	M	Число позитивне	Зарезервована ​​кількість
   11.16.9	ACCEPTEDQUANTITY	O/M	Число позитивне	Підтверджена кількість на резерв. Обовʼязкове поле при типу транзакції - підтвердження
   11.16.10	QUANTITYOFCUINTU	О	Число позитивне	Кількість в упаковці
   11.16.11	RESERVUNIT	О	Рядок (3)	Одиниці виміру
   11.16.12	RESERVPRICE	O	Число десяткове	Ціна продукту без ПДВ
   11.16.13	PRICEWITHVAT	O	Число десяткове	Ціна продукту з ПДВ
   11.16.14	AMOUNT	O	Число десяткове	Сума товару (без ПДВ)
   11.16.15	AMOUNTWITHVAT	О	Число десяткове	Сума товару (з ПДВ)
   11.16.16	VAT	O	Число десяткове	Ставка ПДВ,%
   11.16.17	DELIVERYPLACE	О	Число (13)	GLN кінцевого місця доставки
   11.16.18	INFOCODED	O	Рядок (35)	Інфокод
   11.16.19	INFO	O	Рядок (90)	Вільний текст
   11.16.20	PRICEWITHDISCOUNT	O	Число десяткове	Ціна з урахуванням знижки
   11.16.21	CHARACTERISTIC	О		Характеристики (початок блоку)
   11.16.21.1	DESCRIPTION	О	Рядок (70)	Опис продукту(Найменування товару)
