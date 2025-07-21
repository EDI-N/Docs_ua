##########################################################################################################################
**Товарне узгодження (AGREEM)**
##########################################################################################################################

.. note::
   При передаванні дублів позицій (позиції з однаковими значеннями штрих-коду <PRODUCT> + артикулу <PRODUCTIDBUYER>) документ не відправляється, а потрапляє в помилки.

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/tovarne-uzgodzennia-agreem>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Товарне узгодження (AGREEM) щодо зміни цін формується постачальником на підставі специфікації і відправляється в торговельну мережу

   **XML:**

   .. code:: xml

   <?xml version="1.0" encoding="utf-8"?>
   <AGREEM>
      <NUMBER>100000027</NUMBER>
      <DATE>2020-03-23</DATE>
      <CONTRACTNUMBER>4600000011</CONTRACTNUMBER>
      <CONTRACTEXPIRYDATE>2023-12-31</CONTRACTEXPIRYDATE>
      <CAMPAIGNNUMBER>19000000016</CAMPAIGNNUMBER>
      <CAMPAIGNDATE>2016-07-01</CAMPAIGNDATE>
      <CAMPAIGN_GLN>9800000000088</CAMPAIGN_GLN>
      <DOCSTARTDATE>2020-03-26</DOCSTARTDATE>
      <DOCENDDATE>2023-12-31</DOCENDDATE>
      <PRICETYPE>regular</PRICETYPE>
      <DOCACTION>0</DOCACTION>
      <CONTRACTDATE_MARKETING>2023-12-31</CONTRACTDATE_MARKETING>
      <ACTION_NAME>Двотижнева акція</ACTION_NAME>
      <ACTION_ACTIVATION_PAYMENT>1</ACTION_ACTIVATION_PAYMENT>
      <COMPENSATION_PAYMENT>1</COMPENSATION_PAYMENT>
      <REASON_REJECTION>1</REASON_REJECTION>
      <HEAD>
         <BUYER>9800000002688</BUYER>
         <SUPPLIER>4800000006563</SUPPLIER>
         <RECIPIENT>9860000000688</RECIPIENT>
         <SENDER>4800000006563</SENDER>
         <ATTACHMENT>Назва файлу</ATTACHMENT>
         <RESPONSIBLE_OFFICER>Іванов Іван Іванович</RESPONSIBLE_OFFICER>
         <POSITION>
               <POSITIONNUMBER>00070</POSITIONNUMBER>
               <PRODUCT>4800000000868</PRODUCT>
               <PRODUCTIDBUYER>200006</PRODUCTIDBUYER>
               <UCCFEA>3400000000</UCCFEA>
               <POSITIONIDBUYER>00000</POSITIONIDBUYER>
               <DESCRIPTION>Засіб для прочищення труб Крот Turbo 50г</DESCRIPTION>
               <PRICEWITHOUTVAT>1.45</PRICEWITHOUTVAT>
               <PRICEWITHVAT>1.94</PRICEWITHVAT>
               <PRICEWITHOUTVAT_CHNG>1.00</PRICEWITHOUTVAT_CHNG>
               <PRICEWITHVAT_CHNG>1.60</PRICEWITHVAT_CHNG>
               <DIFFPRICE>1.38</DIFFPRICE>
               <DISCOUNTPRICEWITHOUTVAT>0.00</DISCOUNTPRICEWITHOUTVAT>
               <DISCOUNTPRICEWITHVAT>0.00</DISCOUNTPRICEWITHVAT>
               <DISCOUNTVAL>0.00</DISCOUNTVAL>
               <DISCOUNTPRICEWITHOUTVAT_CHNG>0.00</DISCOUNTPRICEWITHOUTVAT_CHNG>
               <DISCOUNTPRICEWITHVAT_CHNG>0.00</DISCOUNTPRICEWITHVAT_CHNG>
               <DIFFDISCOUNTPRICE>0.00</DIFFDISCOUNTPRICE>
               <DISCOUNTVAL_CHNG>100.00</DISCOUNTVAL_CHNG>
               <PROMO>10.20</PROMO>
               <PROMOWITHVAT>10.30</PROMOWITHVAT>
               <PROMODISCOUNT>10</PROMODISCOUNT>
               <PROMOQUANTITY>10</PROMOQUANTITY>
               <COMPENSATION_PERCENTAGE>2</COMPENSATION_PERCENTAGE>
               <ACTION_ACTIVATION_AMOUNT>6</ACTION_ACTIVATION_AMOUNT>
               <PROMOPRICEWITHVAT_RECOMMEND>6</PROMOPRICEWITHVAT_RECOMMEND>
               <VAT>20</VAT>
               <UNIT>PCE</UNIT>
               <STATE>1</STATE>
               <POSITIONACTION>decline</POSITIONACTION>
         </POSITION>
      </HEAD>
   </AGREEM>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=485836411&single=true" width="1100" height="1750" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	AGREEM	М		Початок документа
   1	NUMBER	М	Рядок (16)	Номер документа
   2	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   3	CONTRACTNUMBER	М	Рядок (20)	Номер контракту
   4	CONTRACTEXPIRYDATE	М	Дата (РРРР-ММ-ДД)	Дата закінчення дії контракту
   5	CAMPAIGNNUMBER	М	Рядок (20)	Номер договору
   6	CAMPAIGNDATE	М	Дата (РРРР-ММ-ДД)	Дата договору
   7	CAMPAIGN_GLN	M	Число (13)	GLN контракту
   8	DOCSTARTDATE	М	Дата (РРРР-ММ-ДД)	Дата початку дії нової ціни
   9	DOCENDDATE	М	Дата (РРРР-ММ-ДД)	Дата закінчення дії нової ціни
   10	PRICETYPE	М	Рядок («regular» / «promo» / «promo_compensation» / «promo_combo»)	"підтип документа (дія)
   regular - змінити регулярну ціну
   
   promo - змінити промо ціну-Зниження ціни
   
   promo_compensation - змінити промо ціну-Компенсація
   
   promo_combo - змінити промо ціну-Комбо (Зниження ціни + Компенсація)"
   11	DOCACTION	М	Число (1)	ознака документа (0 - за замовчуванням; 1 - документ AGREEM з відхиленими позиціями)
   12	CONTRACTNUMBER_MARKETING	O	Число	Номер маркетингового договору
   13	CONTRACTDATE_MARKETING	O	Дата (РРРР-ММ-ДД)	Дата маркетингового договору
   14	ACTION_NAME	O	Рядок (255)	Назва акції
   15	ACTION_ACTIVATION_PAYMENT	O	Число	"Оплата за активацію акції
   1 - Безкоштовно
   
   2 - З маркетингового бюджету
   
   3 - Окремий рахунок"
   16	COMPENSATION_PAYMENT	O	Число	"Оплата за компенсацію
   1 - З маркетингового бюджету
   
   2 - Окремий рахунок"
   17	REASON_REJECTION	O/M	Рядок (500)	Причина відхилення. Обов’язково передається при відхиленні документа чи його позицій (DOCACTION = 1)
   18	HEAD			Початок основного блоку
   18.1	SUPPLIER	M	Число (13)	GLN продавця
   18.2	BUYER	M	Число (13)	GLN покупця
   18.3	RECIPIENT	M	Число (13)	GLN одержувача
   18.4	SENDER	M	Число (13)	GLN відправника
   18.5	ATTACHMENT	O	Рядок	Вкладення (назва файлу)
   18.6	RESPONSIBLE_OFFICER	O	Рядок (255)	Відповідальний співробітник (ПІП; контакти)
   18.7	POSITION			Товарні позиції (початок блоку)
   18.7.1	POSITIONNUMBER	М	Число позитивне (3)	Номер позиції в документі
   18.7.2	PRODUCT	M	Число (13)	Штрихкод продукту
   18.7.3	PRODUCTIDBUYER	М	Рядок (10)	Артикул покупця
   18.7.4	UCCFEA	O/M	Число (4-10)	Код УКТ ЗЕД. За запитом мережі поле може бути обов’язковим (в випадку наявності цього поля в PRODUCTLIST)
   18.7.5	POSITIONIDBUYER	O	Рядок (10)	id товарної позиції
   18.7.6	DESCRIPTION	M	Рядок (50)	Найменування
   18.7.7	PRICEWITHOUTVAT	М	Decimal (#.00)	Ціна без ПДВ
   18.7.8	PRICEWITHVAT	M	Decimal (#.00)	Ціна з ПДВ
   18.7.9	PRICEWITHOUTVAT_CHNG	О	Decimal (#.00)	Нова ціна без ПДВ
   18.7.10	PRICEWITHVAT_CHNG	M	Decimal (#.00)	Нова ціна з ПДВ
   18.7.11	DIFFPRICE	M	Decimal (#.00)	% зміни ціни
   18.7.12	DISCOUNTPRICEWITHOUTVAT	O	Decimal (#.00)	Ціна зі знижкою без ПДВ
   18.7.13	DISCOUNTPRICEWITHVAT	O	Decimal (#.00)	Ціна зі знижкою з ПДВ
   18.7.14	DISCOUNTVAL	O	Decimal (#.00)	% знижки
   18.7.15	DISCOUNTPRICEWITHOUTVAT_CHNG	O	Decimal (#.00)	Нова ціна зі знижкою без ПДВ
   18.7.16	DISCOUNTPRICEWITHVAT_CHNG	O	Decimal (#.00)	Нова ціна зі знижкою з ПДВ
   18.7.17	DIFFDISCOUNTPRICE	O	Decimal (#.00)	% зміни ціни зі знижкою
   18.7.18	DISCOUNTVAL_CHNG	O	Decimal (#.00)	% нової знижки
   18.7.19	PROMO	O	Decimal (#.00)	промоціна без ПДВ
   18.7.20	PROMOWITHVAT	O	Decimal (#.00)	промоціна з ПДВ
   18.7.21	PROMODISCOUNT	O	Число	% промознижки
   18.7.22	PROMOQUANTITY	O	Число (10,3)	Кількість промо
   18.7.23	COMPENSATION_PERCENTAGE	O	Число (6,2)	% компенсації
   18.7.24	ACTION_ACTIVATION_AMOUNT	O	Число (6,4)	Сума за активацію акції
   18.7.25	PROMOPRICEWITHVAT_RECOMMEND	O	Число (6,4)	Рекомендована роздрібна ціна з ПДВ
   18.7.26	VAT	O	Число («20» / «7» / «0»)	Ставка ПДВ,%
   18.7.27	UNIT	O	Рядок (3)	Одиниці виміру
   18.7.28	STATE	O	Число («-1» / «0» / «1»)	"Стан позиції
   -1 - статус відсутній
   
   0 - позиція відхилена
   
   1 - позиція прийнята"
   18.7.29	POSITIONACTION	O/М	Рядок («decline»)	Статус позиції при відхиленні AGREEM. Обов’язково передається при відхиленні документа чи його позицій (DOCACTION = 1)
