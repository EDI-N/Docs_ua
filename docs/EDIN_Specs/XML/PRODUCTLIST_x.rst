##########################################################################################################################
**Електронна специфікація (PRODUCTLIST)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/elektronna-specifikaciia-productlist>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   PRODUCTLIST - узгоджене між контрагентами в паперовому вигляді доповнення до договору поставки (Специфікація). Документ призначений для підтримки покупцем на платформі EDIN актуального асортименту, для зміни і узгодження цін. Документ необхідний для оптимізації / автоматизації процесу узгодження цін між ТМ і постачальником

   **XML:**

   .. code:: xml

   <PRODUCTLIST>
      <NUMBER>1000006</NUMBER>
      <DATE>2020-01-27</DATE>
      <CONTRACTNUMBER>4600000000</CONTRACTNUMBER>
      <CONTRACTDESCRIPTION>Опис контракту</CONTRACTDESCRIPTION>
      <CONTRACTEXPIRYDATE>2020-12-31</CONTRACTEXPIRYDATE>
      <CAMPAIGNNUMBER>1900000040</CAMPAIGNNUMBER>
      <CAMPAIGNDATE>2017-01-01</CAMPAIGNDATE>
      <CONTRACTGLN>9864119011415</CONTRACTGLN>
      <REVIEWDEADLINE>123</REVIEWDEADLINE>
      <PROMO_REVIEWDEADLINE>321</PROMO_REVIEWDEADLINE>
      <AGREEMENTNUMBER>100</AGREEMENTNUMBER>
      <DISCOUNTWORKSTATUS>1</DISCOUNTWORKSTATUS>
      <PROLONGATIONCONTRACT>1</PROLONGATIONCONTRACT>
      <REGIONID>56009</REGIONID>
      <CONTRACTNUMBER_MARKETING>56009gt442</CONTRACTNUMBER_MARKETING>
      <CONTRACTDATE_MARKETING>2017-01-02</CONTRACTDATE_MARKETING>
      <ACTION_NAME>двотижнева акція</ACTION_NAME>
      <ACTION_ACTIVATION_PAYMENT>1</ACTION_ACTIVATION_PAYMENT>
      <COMPENSATION_PAYMENT>1</COMPENSATION_PAYMENT>
      <HEAD>
         <BUYER>9864067620417</BUYER>
         <SUPPLIER>9864119011415</SUPPLIER>
         <RECIPIENT>9864067620417</RECIPIENT>
         <SENDER>9864119011415</SENDER>
         <RESPONSIBLE_OFFICER>Іванов Іван Іванович</RESPONSIBLE_OFFICER>
         <POSITION>
            <POSITIONNUMBER>00020</POSITIONNUMBER>
               <ACTION>4</ACTION>
               <PRODUCT>4000000000167</PRODUCT>
            <PRODUCTIDBUYER>200005</PRODUCTIDBUYER>
            <DESCRIPTION>Бальзам д/мит.пос.Зелен.чай Frosch 500мл</DESCRIPTION>
            <UCCFEA>3000000000</UCCFEA>
               <DISCOUNTPRICE>30.1</DISCOUNTPRICE> 
               <DISCOUNTPRICEWITHVAT>30.2</DISCOUNTPRICEWITHVAT> 
               <DISCOUNTDATEFROM>2017-01-02</DISCOUNTDATEFROM>
               <DISCOUNTDATETO>2017-01-03</DISCOUNTDATETO>
            <PRICE>21</PRICE>
            <PRICEWITHVAT>30</PRICEWITHVAT>
               <PRICEDATEFROM>2017-01-02</PRICEDATEFROM>
               <PRICEDATETO>2017-01-03</PRICEDATETO>
            <PROMO>40.58</PROMO>
            <PROMOWITHVAT>48.70</PROMOWITHVAT>
            <PROMODATEFROM>2020-01-30</PROMODATEFROM>
            <PROMODATETO>2020-02-24</PROMODATETO>
               <PROMOQUANTITY>10.4</PROMOQUANTITY>
            <VAT>20</VAT>
            <UNIT>PCE</UNIT>
               <COMPENSATION_PERCENTAGE>20.1</COMPENSATION_PERCENTAGE>
               <ACTION_ACTIVATION_AMOUNT>200.1</ACTION_ACTIVATION_AMOUNT>
               <PROMOPRICEWITHVAT_RECOMMEND>10.2</PROMOPRICEWITHVAT_RECOMMEND>
         </POSITION>
      </HEAD>
   </PRODUCTLIST>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=1871733316&single=true" width="1100" height="1450" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>I	PRODUCTLIST	M		Початок документа
   1	NUMBER	M	Рядок (16)	Номер документа
   2	DATE	M	Дата (РРРР-ММ-ДД)	Дата документа
   3	CONTRACTNUMBER	M	Рядок (50)	Номер контракту
   4	CONTRACTDESCRIPTION	O	Рядок (70)	Опис контракту
   5	CONTRACTEXPIRYDATE	M	Дата (РРРР-ММ-ДД)	Дата закінчення дії контракту/специфікації
   6	CONTRACTGLN	M	Число (13)	GLN контракту
   7	CAMPAIGNNUMBER	M	Рядок (20)	Номер договору
   8	CAMPAIGNDATE	M	Дата (РРРР-ММ-ДД)	Дата договору
   9	REVIEWDEADLINE	О	Число (3)	Термін подачі на розгляд
   10	PROMO_REVIEWDEADLINE	О	Число (3)	Термін подачі на розгляд (промо)
   11	AGREEMENTNUMBER	О	Число (3)	Допустима кількість погоджень
   12	DISCOUNTWORKSTATUS	M	0,1	Робота з ціною зі знижкою: 0 - ні, 1 - так
   13	PROLONGATIONCONTRACT	O	Число	Автоматична пролонгація контракту: 0 - ні, 1 - так
   14	REGIONID	O	Рядок (100)	код регіону
   15	CONTRACTNUMBER_MARKETING	О	Рядок (16)	Номер маркетингового договору
   16	CONTRACTDATE_MARKETING	О	Дата (РРРР-ММ-ДД)	Дата маркетингового договору
   17	ACTION_NAME	О	Рядок (255)	Назва акції
   18	ACTION_ACTIVATION_PAYMENT	О	Число (1)	"Оплата за активацію акції. Допустимі значення:
   1 - Безкоштовно
   
   2 - З маркетингового бюджету
   
   3 - Окремий рахунок"
   19	COMPENSATION_PAYMENT	О	Число (1)	
   20	HEAD	M		Початок основного блоку
   20.1	BUYER	M	Число (13)	GLN покупця
   20.2	SUPPLIER	M	Число (13)	GLN продавця
   20.3	RECIPIENT	M	Число (13)	GLN одержувача
   20.4	SENDER	M	Число (13)	GLN відправника
   20.5	RESPONSIBLE_OFFICER	О	Рядок (255)	Відповідальний співробітник (ПІБ, контакти постачальника)
   20.6	POSITION	М		Товарні позиції (початок блоку)
   20.6.1	POSITIONNUMBER	М	Число ціле позитивне	Номер товарної позиції
   20.6.2	ACTION	O	Число (4, 2, 27)	"Можливі значення:
   4 - видалення товарної позиції,
   
   2 або 27 - введення або оновлення товарної позиції"
   20.6.3	PRODUCT	M	Число (13)	Штрихкод продукту
   20.6.4	PRODUCTIDBUYER	M	Рядок (15)	Внутрішній номер в БД
   20.6.5	DESCRIPTION	M	Рядок (255)	Опис продукту
   20.6.6	UCCFEA	O	Число (4-10)	Код УКТ ЗЕД
   20.6.7	DISCOUNTPRICE	O	Число десяткове (10,4)	Ціна зі знижкою без ПДВ
   20.6.8	DISCOUNTPRICEWITHVAT	О	Число десяткове (10,4)	Ціна зі знижкою з ПДВ
   20.6.9	DISCOUNTDATEFROM	O	Дата (РРРР-ММ-ДД)	Початок дії ціни зі знижкою
   20.6.10	DISCOUNTDATETO	O	Дата (РРРР-ММ-ДД)	Закінчення дії ціни зі знижкою
   20.6.11	PRICE	M	Число десяткове (10,4)	Ціна без ПДВ
   20.6.12	PRICEWITHVAT	O	Число десяткове (10,4)	Ціна з ПДВ
   20.6.13	PRICEDATEFROM	O	Дата (РРРР-ММ-ДД)	Початок дії ціни
   20.6.14	PRICEDATETO	O	Дата (РРРР-ММ-ДД)	Закінчення дії ціни
   20.6.15	PROMO	O	Число десяткове (10,4)	Промо ціна без ПДВ
   20.6.16	PROMOWITHVAT	O	Число десяткове (10,4)	Промо ціна з ПДВ
   20.6.17	PROMODATEFROM	O	Дата (РРРР-ММ-ДД)	Початок дії промо ціни
   20.6.18	PROMODATETO	O	Дата (РРРР-ММ-ДД)	Закінчення дії промо ціни
   20.6.19	PROMOQUANTITY	O	Число десяткове (10,3)	Кількість товару
   20.6.20	VAT	M	Число («20» / «7» / «0»)	Ставка ПДВ,%
   20.6.21	UNIT	M	Рядок (3)	Одиниці виміру
   20.6.22	COMPENSATION_PERCENTAGE	О	Позитивне число з плаваючою точкою (6 знаків до коми, 2 знака після коми)	% компенсації
   20.6.23	ACTION_ACTIVATION_AMOUNT	О	Позитивне число з плаваючою точкою (6 знаків до коми, 4 знака після коми)	Сума за активацію акції
   20.6.24	PROMOPRICEWITHVAT_RECOMMEND	О	Позитивне число з плаваючою точкою (6 знаків до коми, 4 знака після коми)	Рекомендована роздрібна ціна з ПДВ
