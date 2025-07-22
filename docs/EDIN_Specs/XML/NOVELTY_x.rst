##########################################################################################################################
**Комерційна пропозиція (NOVELTY)**
##########################################################################################################################

**Шановні користувачі!**

Ми активно працюємо над оновленням бази знань EDIN-WiKi, тому ця сторінка втратила актуальність.

Актуальну версію документації ви знайдете за новим `посиланням <https://wiki-v2.edin.ua/books/xml-specifikaciyi-dokumentiv/page/komerciina-propoziciia-novelty>`__

Свої побажання, зауваження ви можете залишати в коментарях до статті на новій EDIN-WiKi.

Дякуємо за розуміння та користування сервісом!

.. сторінка перенесена на нову вікі

   .. epigraph::

   Комерційна пропозиція (NOVELTY) формується постачальником і відправляється в торговельну мережу, з якою налаштований документообіг (мережа прийняла заявку на підключення)

   **XML:**

   .. code:: xml

   <?xml version="1.0" encoding="UTF-8" ?>
      <SENDER>1111111111111</SENDER>
      <RECIPIENT>2222222222222</RECIPIENT>
      <NUMBER>0001</NUMBER>
      <DATE>2021-10-29</DATE>
      <CATEGORY>Вода</CATEGORY>
      <GROUP1>Водичка</GROUP1>
      <GROUP2>Сильногазовані</GROUP2>
      <GROUP_ID>Моршинська</GROUP_ID>
      <POSTPONEMENT>5</POSTPONEMENT>
      <MARKETING>
         <PROMOTION>Продвижение</PROMOTION>
         <LOGISTICS>Логистика</LOGISTICS>
         <DAMAGE>Порча продукта</DAMAGE>
         <TPR>ТPR-бюджет</TPR>
      </MARKETING>
      <RESPONSIBLE_OFFICER>
         <SURNAME>Петренко</SURNAME>
         <NAME>Ответственный сотрудник поставщика</NAME>
         <MIDDLENAME>Петрович</MIDDLENAME>
         <EMAIL>petrovich.best@gmail.com</EMAIL>
         <PHONE>+380991234567</PHONE>
      </RESPONSIBLE_OFFICER>
      <STORAGE_CONDITIONS>Условия хранения товара</STORAGE_CONDITIONS>
      <DELIVERY_OPTION>распределительный центр и/или магазин</DELIVERY_OPTION>
      <MINIMAL_AMOUNT>Минимальная сумма заказа</MINIMAL_AMOUNT>
      <DELIVERY_REGION>Дніпропетровська</DELIVERY_REGION>
      <REASON_REJECTION>Щось зламалось</REASON_REJECTION>
      <ACCEPTATION_COMMENT>Коментар</ACCEPTATION_COMMENT>
      <POSITION>
         <POSITIONNUMBER>1</POSITIONNUMBER>
         <NAME>Наименование1</NAME>
         <BARCODE>Штрихкод1</BARCODE>
         <BRAND>Торговая марка 1</BRAND>
         <PRODUCER_NAME>Производитель1</PRODUCER_NAME>
         <UNIT>шт.</UNIT>
         <UNIT_WEIGHT>21</UNIT_WEIGHT>
         <UNIT_VOLUME>31</UNIT_VOLUME>
         <UNIT_PRICE>11.5</UNIT_PRICE>
         <WEIGHT_PRICE>201</WEIGHT_PRICE>
         <VOLUME_PRICE>201</VOLUME_PRICE>
         <VAT>1</VAT>
         <PROFITABILITY>2</PROFITABILITY>
         <ICON_LINK>посилання на іконку</ICON_LINK>
         <LOGO_LINK>посилання на фото</LOGO_LINK>
         <TRADE_CONDITION>
               <RETAILER_NAME>Розничная сеть №1</RETAILER_NAME>
               <EDRPOU_CODE>3333331</EDRPOU_CODE>
               <PRICE>9.5</PRICE>
         </TRADE_CONDITION>
      </POSITION>

   .. role:: orange

   .. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxinOWh0XZPuImDPCyCo0wpZU89EAoEfEXkL-YFP0hoA5A27BfY5A35CZChtiddQ/pubhtml?gid=2018175939&single=true" width="1100" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

   <!-- <div>1	SENDER	M	Число (13)	GLN відправника
   2	RECIPIENT	M	Число (13)	GLN одержувача
   3	NUMBER	М	Рядок (16)	Номер документа
   4	DATE	М	Дата (РРРР-ММ-ДД)	Дата документа
   5	CATEGORY	М	Рядок	Категорія
   6	GROUP1	М	Рядок	Група
   7	GROUP2	М	Рядок	Підгрупа
   8	GROUP_ID	М	Рядок	Товарний сегмент
   9	POSTPONEMENT	М	Число	Відстрочка платежу (днів)
   10	MARKETING	O		Маркетингові умови (початок блоку)
   10.1	PROMOTION	O	Число	Просування (% компенсації)
   10.2	LOGISTICS	O	Число	Логістика (% компенсації)
   10.3	DAMAGE	O	Число	Псування продукту (% компенсації)
   10.4	TPR	O	Число	ТPR-бюджет
   11	RESPONSIBLE_OFFICER	M		Відповідальний співробітник постачальника (початок блоку)
   11.1	SURNAME	М	Рядок	Прізвище
   11.2	NAME	М	Рядок	Ім’я
   11.3	MIDDLENAME	O	Рядок	По батькові
   11.4	EMAIL	М	Рядок	Email
   11.5	PHONE	М	Число	Номер телефона
   12	STORAGE_CONDITIONS	O	Рядок	Умови зберігання товару
   13	RETURN_CONDITIONS	O	Рядок	Умови повернення товару
   14	DELIVERY_OPTION	O	Рядок	Можливість постачання (Розподільчий центр чи/та Магазин)
   15	MINIMAL_AMOUNT	O	Число	Мінімальна сума замовлення (грн)
   16	DELIVERY_REGION	O	Рядок	Регіон постачання (список областей через кому)
   17	REASON_REJECTION	O/M	Рядок (500)	Причина відхилення. Обов’язково передається при відхиленні документа
   18	ACCEPTATION_COMMENT	O	Рядок (500)	Коментар (інформація щодо прийняття)
   19	POSITION	M		Товарні позиції (початок блоку)
   19.1	POSITIONNUMBER	М	Число позитивне (3)	Номер позиції в документі
   19.2	NAME	М	Рядок	Найменування
   19.3	BARCODE	М	Число	Штрих-код
   19.4	BRAND	М	Рядок	Торгова марка
   19.5	PRODUCER_NAME	М	Рядок	Виробник
   19.6	UNIT	M	Рядок (3)	Одиниці виміру
   19.7	UNIT_WEIGHT	O	Число	Вага одиниці виміру (кг)
   19.8	UNIT_VOLUME	O	Число	Об’єм одиниці виміру (літ)
   19.9	UNIT_PRICE	M	Число	Ціна за одиницю
   19.10	WEIGHT_PRICE	O	Число	Ціна за кг
   19.11	VOLUME_PRICE	O	Число	Ціна за літр
   19.12	VAT	O	Число («20» / «19» / «7» / «0.00»)	Ставка ПДВ,%
   19.13	PROFITABILITY	М	Число	Націнка
   19.14	ICON_LINK	O	Рядок	Посилання на іконку товару
   19.15	LOGO_LINK	O	Рядок	Посилання на фото товару
   19.16	TRADE_CONDITION	O		Моніторинг цін для інших мереж (початок блоку)
   19.16.1	RETAILER_NAME	O		Назва мережі
   19.16.2	EDRPOU_CODE	M		Код ЄДРПОУ мережі
   19.16.3	PRICE	M		Ціна для мережі