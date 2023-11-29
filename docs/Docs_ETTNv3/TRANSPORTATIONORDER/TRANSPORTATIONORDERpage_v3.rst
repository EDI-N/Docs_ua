##########################################################################################################################
**"Заявка на транспортування" / "Підтвердження заявки на транспортування"**
##########################################################################################################################

.. important::
   Зверніть увагу, що поля в xml та `в json форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/TRANSPORTATIONORDER/TRANSPORTATIONORDERpage_v3_json.html>`__ відрізняються!

**XML:**

.. code:: xml

  <?xml version="1.0" encoding="UTF-8"?>
  <TRANSPORTATIONORDER>
    <NUMBER>Тест1</NUMBER>
    <DATE>2023-11-29</DATE>
    <SUBDOCTYPE>1</SUBDOCTYPE>
    <TRANSPORTATIONTYPE>1</TRANSPORTATIONTYPE>
    <CAMPAIGNNUMBER>1313</CAMPAIGNNUMBER>
    <CAMPAIGNDATE>2023-09-25</CAMPAIGNDATE>
    <PURCHASEORDERNUMBER>12331</PURCHASEORDERNUMBER>
    <TRANSPORTATIONPAYMENTTYPE>1</TRANSPORTATIONPAYMENTTYPE>
    <TRANSPORTATIONCOST>
      <WITHOUTVAT>121</WITHOUTVAT>
      <VAT>20</VAT>
      <WITHVAT>145.20</WITHVAT>
    </TRANSPORTATIONCOST>
    <TRANSPORTATIONMEANS>
      <ID>АА1111ОО</ID>
      <MODEL>2101</MODEL>
      <BRAND>Камаззз</BRAND>
      <TYPE>Бортовий</TYPE>
      <COLOR>Синій</COLOR>
    </TRANSPORTATIONMEANS>
    <TRANSPORTATIONMEANS>
      <CATEGORYCODE>TE</CATEGORYCODE>
      <CHARACTERISTICCODE>14</CHARACTERISTICCODE>
      <ID>АА1121АА</ID>
      <MODEL>Модель</MODEL>
      <BRAND>Марка</BRAND>
      <TYPE>ТИП</TYPE>
    </TRANSPORTATIONMEANS>
    <TRANSPORTATIONMEANS>
      <CATEGORYCODE>TE</CATEGORYCODE>
      <CHARACTERISTICCODE>14</CHARACTERISTICCODE>
      <ID>АА1121АА</ID>
      <MODEL>Модель</MODEL>
      <BRAND>Марка</BRAND>
      <TYPE>ТИП</TYPE>
    </TRANSPORTATIONMEANS>
    <LENGTHROUTE>120</LENGTHROUTE>
    <TEMPERATURE>
      <MIN>11</MIN>
      <MAX>20</MAX>
    </TEMPERATURE>
    <DESCRIPTION>Найменування вантажу</DESCRIPTION>
    <TOTALPACKAGEWEIGHT>233</TOTALPACKAGEWEIGHT>
    <TOTALPACKAGEQUANTITY>12</TOTALPACKAGEQUANTITY>
    <LOADFACTOR>30</LOADFACTOR>
    <INFO>Додаткова інформація</INFO>
    <FINANCIALINFO>Додаткова інформація для фінансового відділу</FINANCIALINFO>
    <TRANSPORTATIONMEANS_PARAMETERS>Відомості про транспорт (Ваго габаритні характеристики)</TRANSPORTATIONMEANS_PARAMETERS>
    <HEAD>
      <CUSTOMER>
        <GLN>9864065745518</GLN>
        <ID>12345678</ID>
        <NAME>ТОВ &quot;Тест1&quot;</NAME>
        <ADDRESS>Україна, 73000, Житомирська, Житомирський р-н, м. Житомир, *</ADDRESS>
      </CUSTOMER>
      <CARRIER>
        <GLN>9864065748106</GLN>
        <ID>9988663328</ID>
        <NAME>Перевізник ТТН</NAME>
        <ADDRESS>Україна, 4215423, Житомирська, Житомирський р-н, м. Житомир, Шевченка 2</ADDRESS>
      </CARRIER>
      <CONSIGNOR>
        <GLN>9864065745518</GLN>
        <ID>12345678</ID>
        <NAME>ТОВ &quot;Тест1&quot;</NAME>
        <ADDRESS>Україна, 73000, Житомирська, Житомирський р-н, м. Житомир, *</ADDRESS>
      </CONSIGNOR>
      <DRIVER>
        <GLN>9864232596134</GLN>
        <ID>213242232</ID>
        <NAME>Водій Стрига І.А._v3 (прод)</NAME>
        <LICENSE>XYY995511</LICENSE>
      </DRIVER>
      <POSITION>
        <POSITIONNUMBER>1</POSITIONNUMBER>
        <LOAD>
          <ADDRESS>
            <GLN>9864065748090</GLN>
            <ID>UA05020030010063857</ID>
            <NAME>Україна, 3232323323, Вінницький р-н, м. Вінниця</NAME>
            <ADDRESS>Лозова 6</ADDRESS>
          </ADDRESS>
          <DATE>2023-11-29 14:16</DATE>
          <CONSIGNORCONTACTFACENAME>Відповідальна особа</CONSIGNORCONTACTFACENAME>
          <CONSIGNORCONTACTFACENUMBER>380000000000</CONSIGNORCONTACTFACENUMBER>
        </LOAD>
        <UNLOAD>
          <ADDRESS>
            <GLN>9864065749073</GLN>
            <ID>UA18040190010057814</ID>
            <NAME>Україна, 131413413134, Житомирська, Житомирський р-н, м. Житомир</NAME>
            <ADDRESS>Одесська 33</ADDRESS>
          </ADDRESS>
          <DATE>2023-11-30 14:17</DATE>
          <CONSIGNEE>
            <GLN>9864065749073</GLN>
            <ID>85548668</ID>
            <NAME>Компанія &quot;Вантажоодержувач_v3&quot;</NAME>
            <ADDRESS>Україна, 131413413134, Житомирська, Житомирський р-н, м. Житомир, Одесська 33</ADDRESS>
          </CONSIGNEE>
          <CONSIGNEECONTACTFACENAME>Іванов Іван Івіанович</CONSIGNEECONTACTFACENAME>
          <CONSIGNEECONTACTFACENUMBER>380222222222</CONSIGNEECONTACTFACENUMBER>
        </UNLOAD>
        <PACKAGEWEIGHT>233</PACKAGEWEIGHT>
        <PACKAGEQUANTITY>11</PACKAGEQUANTITY>
        <TRANSPORTTYPE>Вид транспорту</TRANSPORTTYPE>
        <TEMPERATURE>
          <MIN>11</MIN>
          <MAX>20</MAX>
        </TEMPERATURE>
        <INFO>Коментар</INFO>
      </POSITION>
    </HEAD>
  </TRANSPORTATIONORDER>

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS26-juW1nVfoMUOAEl5EBG2M_GBbZiw4-YLBN1btAxU9yWI12nsZ1931PABr-SNS-dx0ey1gMD_gYy/pubhtml?gid=1874513573&single=true" width="1100" height="4450" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </embed>

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

.. [#] елементи структури мають наступний вигляд:

   * параметрЗіЗначенням;
   * **об'єктЗПараметрами**;
   * :orange:`масивОб'єктів`

.. data from table (remember to renew time to time)

  № з/п,Параметр²,Тип¹,Формат,Опис
  I,TRANSPORTATIONORDER,M,,Початок документа
  1,NUMBER,M,Рядок (50),Номер документа
  2,DATE,M,YYYY-MM-DD,Дата документа
  3,SUBDOCTYPE,M,Число (1),"Підтип документа:
    1 - заявка на транспортування (ORDER)

  2 - підтвердження заявки на транспортування (CONFIRMATION)"
  4,ASSOCIATEDREFERENCEDDOCUMENT,O,,Посилання на документ-підставу
  4.1,NUMBER,O,Рядок (50),Номер документа-підстави
  4.2,DATE,O,YYYY-MM-DD,Дата документа-підстави
  4.3,UUID,O,Рядок,UUID документа-підстави
  5,TRANSPORTATIONTYPE,M,Число (1),"Вид перевезень:
    1 - покілометровий тариф;

  2 - погодинний тариф;

  3 - відрядний тариф;

  4 - централізоване перевезення;

  5 - внутрішньоміське;

  6 - приміське;

  7 - міжміське;

  8 - міжнародне перевезення;

  9 - перевезення між складами (шатлінг);

  10 - доставка до дистриб’ютора та ключових клієнтів (дистрибуція);

  11 - перевезення збірного вантажу (пулінг)"
  6,CAMPAIGNNUMBER,O,Рядок (100),Номер договору
  7,CAMPAIGNDATE,O (M - якщо заповнено CAMPAIGNNUMBER),YYYY-MM-DD,Дата договору
  8,PURCHASEORDERNUMBER,O,Рядок,Замовлення на закупівлю
  9,TRANSPORTATIONPAYMENTTYPE,O,Число (1),"Cпосіб тарифікації:
    1 - фіксована вартість;

  2 - за кілометраж;

  3 - за тоннаж"
  10,TRANSPORTATIONCOST,O,,Вартість перевезення
  10.1,WITHOUTVAT,O (M - якщо TRANSPORTATIONPAYMENTTYPE = 1),"Позитивне число з плаваючою точкою (10,2)",Вартість перевезення без ПДВ
  10.2,VAT,O,Число (2),"Ставка ПДВ, %: 20, 7, 0"
  10.3,WITHVAT,O (M - якщо TRANSPORTATIONPAYMENTTYPE = 1),"Позитивне число з плаваючою точкою (10,2)",Вартість перевезення з ПДВ
  11,TRANSPORTATIONMEANS,O (М - якщо SUBDOCTYPE = 2),,Інформація про транспортний засіб
  11.1,CATEGORYCODE,M,Рядок,"Тип транспортного засобу:
    TRUCK - Вантажний (якщо нічого не вказано)

  TE - Trailer (причіп/напівпричіп)"
  11.2,CHARACTERISTICCODE,О (М - якщо CATEGORYCODE = TE),Число (2),"Код визначення Причіп/напівпричіп:
    14 - Причіп

  17 - Напівпричіп"
  11.3,ID,M,Рядок (16),Реєстраційний номер
  11.4,MODEL,M,Рядок,Модель
  11.5,BRAND,M,Рядок,Марка
  11.6,TYPE,M,Рядок,Тип
  11.7,COLOR,O,Рядок,Колір
  11.8,TEMPERATURE,O,,Температура
  11.8.1,MIN,M,Рядок,Мінімальна температура
  11.8.2,MAX,M,Рядок,Максимальна температура
  12,LENGTHROUTE,O (M - якщо TRANSPORTATIONPAYMENTTYPE = 2),"Позитивне число з плаваючою точкою (10,3)",Загальна відстань перевезення (кілометраж)
  13,TRANSPORTTYPE,O,Рядок,Тип транспорту
  14,TEMPERATURE,O,,Температура
  14.1,MIN,M,Рядок,Мінімальна температура
  14.2,MAX,M,Рядок,Максимальна температура
  15,DESCRIPTION,O,Рядок,Найменування вантажу
  16,TOTALPACKAGEWEIGHT,M,"Позитивне число з плаваючою точкою (10,3)","Загальна маса брутто, кг"
  17,TOTALPACKAGEQUANTITY,O,"Позитивне число з плаваючою точкою (10,3)",Загальна кількість місць
  18,LOADFACTOR,O,"Позитивне число з плаваючою точкою (10,2)",Коефіцієнт завантаження
  19,INFO,O,Рядок,Додаткова інформація
  20,FINANCIALINFO,O,Рядок,Додаткова інформація для фінансового відділу
  21,HEAD,M,,Початок основного блоку
  21.1,CUSTOMER,M,,Дані Замовника
  21.1.1,GLN,M,Число (13),GLN Замовника (відправника)
  21.1.2,ID,M,"Позитивне ціле число (8) - ЄДРПОУ

  Позитивне ціле число (10) - ІПН

  Рядок (8) - серія, номер паспорта

  Позитивне ціле число (9) - ID карта","ЄДРПОУ / ІПН / ID карта / серія, номер паспорта Замовника"
  21.1.3,NAME,M,Рядок,Назва компанії Замовника
  21.1.4,ADDRESS,M,Рядок,Юридична адреса Замовника
  21.2,CARRIER,M,,Дані Перевізника
  21.2.1,GLN,M,Число (13),GLN Перевізника (отримувача)
  21.2.2,ID,M,"Позитивне ціле число (8) - ЄДРПОУ

  Позитивне ціле число (10) - ІПН

  Рядок (8) - серія, номер паспорта

  Позитивне ціле число (9) - ID карта","ЄДРПОУ / ІПН / ID карта / серія, номер паспорта Замовника"
  21.2.3,NAME,M,Рядок,Назва компанії Перевізника
  21.2.4,ADDRESS,M,Рядок,Юридична адреса Перевізника
  21.3,CONSIGNOR,M,,Дані Вантажовідправника
  21.3.1,GLN,M,Число (13),GLN Вантажовідправника
  21.3.2,ID,M,"Позитивне ціле число (8) - ЄДРПОУ

  Позитивне ціле число (10) - ІПН

  Рядок (8) - серія, номер паспорта

  Позитивне ціле число (9) - ID карта","ЄДРПОУ / ІПН / ID карта / серія, номер паспорта Вантажовідправника"
  21.3.3,NAME,M,Рядок,Назва компанії Вантажовідправника
  21.3.4,ADDRESS,M,Рядок,Юридична адреса Вантажовідправника
  21.4,DRIVER,O,,Дані Водія
  21.4.1,GLN,M,Число (13),GLN Водія
  21.4.2,ID,M,"Позитивне ціле число (8) - ЄДРПОУ

  Позитивне ціле число (10) - ІПН

  Рядок (8) - серія, номер паспорта

  Позитивне ціле число (9) - ID карта","ЄДРПОУ / ІПН / ID карта / серія, номер паспорта Водія"
  21.4.3,NAME,M,Рядок,ПІБ Водія
  21.4.4,LICENSE,M,"Рядок (9) - 3 букви, 6 цифр","Серія, номер водійського посвідчення"
  21.5,TEXT,O,Рядок,Додаткова інформація від ініціатора документа
  21.6,POSITION,M,,Інформація про маршрут і вантаж
  21.6.1,POSITIONNUMBER,M,Позитивне ціле число,Номер позиції
  21.6.2,LOAD,M,,Пункт навантаження
  21.6.2.1,ADDRESS,M,,Адреса пункту навантаження
  21.6.2.1.1,GLN,M,Число (13),GLN пункту навантаження
  21.6.2.1.2,ID,M,Рядок (19),Код КАТОТТГ
  21.6.2.1.3,NAME,M,Рядок,Населений пункт навантаження
  21.6.2.1.4,ADDRESS,M,Рядок,Адреса пункту навантаження
  21.6.2.2,DATE,M,YYYY-MM-DD HH:MM,Дата-час навантаження
  21.6.2.3,CONSIGNORCONTACTFACENAME,O,Рядок,ПІБ відповідальної особи Вантажовідправника
  21.6.2.4,CONSIGNORCONTACTFACENUMBER,O,Рядок,Моб. телефон відповідальної особи Вантажовідправника
  21.6.3,UNLOAD,M,,Пункт розвантаження
  21.6.3.1,ADDRESS,M,,Адреса пункту розвантаження
  21.6.3.1.1,GLN,M,Число (13),GLN пункту розвантаження
  21.6.3.1.2,ID,M,Рядок (19),Код КАТОТТГ
  21.6.3.1.3,NAME,M,Рядок,Населений пункт розвантаження
  21.6.3.1.4,ADDRESS,M,Рядок,Адреса пункту розвантаження
  21.6.3.2,DATE,O,YYYY-MM-DD HH:MM,Дата-час розвантаження
  21.6.3.3,CONSIGNEE,M,,Дані Вантажоодержувача
  21.6.3.3.1,GLN,M,Число (13),GLN Вантажоодержувача
  21.6.3.3.2,ID,M,"Позитивне ціле число (8) - ЄДРПОУ

  Позитивне ціле число (10) - ІПН

  Рядок (8) - серія, номер паспорта

  Позитивне ціле число (9) - ID карта","ЄДРПОУ / ІПН / ID карта / серія, номер паспорта Вантажоодержувача"
  21.6.3.3.3,NAME,M,Рядок,Назва компанії Вантажоодержувача
  21.6.3.3.4,ADDRESS,M,Рядок,Юридична адреса Вантажоодержувача
  21.6.3.4,CONSIGNEECONTACTFACENAME,O,Рядок,ПІБ відповідальної особи Вантажоодержувача
  21.6.3.5,CONSIGNEECONTACTFACENUMBER,O,Рядок,Моб. телефон відповідальної особи Вантажоодержувача
  21.6.4,PACKAGEWEIGHT,O,"Позитивне число з плаваючою точкою (10,3)","Маса брутто, кг"
  21.6.5,PACKAGEQUANTITY,O,"Позитивне число з плаваючою точкою (10,3)",Кількість місць
  21.6.6,TRANSPORTTYPE,O,Рядок,Вид транспорту
  21.6.7,TEMPERATURE,O,,Температура
  21.6.7.1,MIN,M,Рядок,Мінімальна температура
  21.6.7.2,MAX,M,Рядок,Максимальна температура
  21.6.8,INFO,O,Рядок,Додаткова інформація

.. old style

  Таблиця 1 - Специфікація "Заявки на транспортування" / "Підтвердження заявки на транспортування" (XML)

  .. csv-table:: 
    :file: for_csv/transportationorder_v3.csv
    :widths:  1, 5, 12, 41
    :header-rows: 1
    :stub-columns: 0

  :download:`Приклад "Заявки на транспортування" / "Підтвердження заявки на транспортування"<examples/transportationorder_v3.xml>`


