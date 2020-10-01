Створення, підписання, відправлення та відхилення е-ТТН вантажовідправником
###################################################################################################

.. role:: red

.. role:: underline

.. сюда закину немного картинок для текста

.. |мусорка| image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_44.png

.. |drop_pass| image:: signing/drop_pass.png

.. |del_key| image:: signing/del_key2.png

.. |green_house| image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_333333333333.png

.. contents:: Зміст:
   :depth: 6

---------

**1 Створення документа**
================================================

.. important::
   Ініціатор документообігу повинен бути присутнім серед учасників документообігу! 

Для створення е-ТТН на платформі необхідно натиснути на кнопку "Створити".

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_01new.png
   :align: center

Після цього необхідно вибрати тип створюваного документа в модальному вікні:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_02n.png
   :align: center

Далі необхідно заповнити форму е-ТТН (кнопка "Зберегти" активується лише для заповненої форми):

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_03n.png
   :align: center

.. hint::
   Поля обов'язкові до заповнення позначені червоною зірочкою :red:`*`!





Якщо водій відсутній в списку його можливо додати через кнопку **"Новий водій"**:

.. image:: pics_Creation_signing_ending_rejection_Proposal/Creation_signing_ending_rejection_Proposal_60n.png
   :align: center

Після чого в модальному вікні потрібно буде заповнити дані про водія ("Серія, номер посвідчення водія" заповнюється в форматі "3 заголовні латинські літери + 6 цифр", наприклад "DGJ123456"). Обов'язкові поля позначені червоною зірочкою :red:`*` . Доданий водій прив'язується в системі до вказаного **"Перевізника"**. Є можливість зробити доступним номер телефону водія для учасників документообігу (відмітка "Відображати номер телефону водія").

.. image:: pics_Creation_signing_ending_rejection_Proposal/Creation_signing_ending_rejection_Proposal_42n.png
   :align: center








Для автомобілів та причепів реалізований автоматичний довідник, в який записуються "Реєстраційний номер", "Марка/модель", "Тип". Для раніше введеного реєстрайійного номеру, наприклад, **КК1234КК** користувач може скористатись пошуком (мінімум 3 символи): ``КК1, К12, 123, 234, 34К, 4КК``.

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_42.png
   :align: center

.. note::
   Якщо користувач вказує будь-які дані причіпа/напівпричіпа, то відповідні поля: реєстраційний номер, марка та тип стають обов'язковими до заповнення!

.. important::
   Вибір організацій-контрагентів, водія, адрес навантаження/розвантаження доступні з випадаючого списку. Також дані **Автомобільного перевізника** та **Вантажоодержувача** можливо додати вручну (кнопки "Новий перевізник", "Новий вантажоодержувач" відповідно).

.. note::
   Якщо контрагенти були введені вручну (поки не зареєстровані на платформі EDIN), то при збереженні документа відобразиться попередження, наприклад, для **Вантажоодержувача**:

   .. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_39new.png
      :align: center

Якщо **Автомобільний перевізник** відсутній на платформі EDIN, то його можливо додати через кнопку **"Новий перевізник"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_36new.png
   :align: center

Відкриється модальне вікно, в якому потрібно буде заповнити основні обов'язкові дані майбутного контрагента (**Назву, Тип, ЄДРПОУ, ІПН, Місто, Адресу** організації та співробітника) та натиснути **"Додати"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_37new.png
   :align: center

При корректному заповненні даних (унікальні email, ЄДРПОУ) на вказаний email буде відправлено запрошення з унікальним посиланням для подальшої реєстрації на платформі EDIN:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_38new.png
   :align: center

* **Водій** (рядок стає активним тільки після вибору перевізника) – необхідно поставити курсор в рядок та обрати його з випадаючого списку;

Якщо водій відсутній в списку його можливо додати через кнопку **"Новий водій"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_25n.png
   :align: center

При додаванні нового перевізника автоматично підтягуються дані вказаної особи аби її можливо було вказати в якості **Водія**. Також можливо додати водія через кнопку **"Додати нового водія"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_!!!!!!.png
   :align: center

Після чого в модальному вікні потрібно буде заповнити дані про водія ("Серія, номер посвідчення водія" заповнюється в форматі "3 заголовні латинські літери + 6 цифр", наприклад "DGJ123456"). Обов'язкові поля позначені червоною зірочкою :red:`*` . Доданий водій прив'язується в системі до вказаного **"Перевізника"**.

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_26new.png
   :align: center

* **Серія, номер посвідчення водія** буде додано автоматично після вибору водія;
* **Замовник** – необхідно обрати з випадаючого списку (для цього в рядку необхідно ввести мінімум 3 символи найменування/П.І.Б. замовника, після цього обрати його з випадаючого списку) або **"Вказати себе"** (кнопка |green_house|);
* **Вантажовідправник** – необхідно обрати з випадаючого списку (для цього в рядку необхідно ввести мінімум 3 символи найменування/П.І.Б. вантажовідправника, після цього обрати його з випадаючого списку) або **"Вказати себе"** (кнопка |green_house|); місцезнаходження/місце проживання буде додано автоматично;
* **Вантажоодержувач** – необхідно обрати з випадаючого списку (для цього в рядку необхідно ввести мінімум 3 символи найменування/П.І.Б. вантажоодержувача, після цього обрати його з випадаючого списку) або **"Вказати себе"** (кнопка |green_house|); місцезнаходження/місце проживання буде додано автоматично;

Якщо **Вантажоодержувач** відсутній на платформі EDIN, то його можливо додати через кнопку **"Новий вантажоодержувач"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_40new.png
   :align: center

Відкриється модальне вікно, в якому потрібно буде заповнити основні обов'язкові дані майбутного контрагента (**Назву, Тип, ЄДРПОУ, ІПН, Місто, Адресу** організації та співробітника) та натиснути **"Додати"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_41new.png
   :align: center

При корректному заповненні даних (унікальні email, ЄДРПОУ) на вказаний email буде відправлено запрошення з унікальним посиланням для подальшої реєстрації на платформі EDIN:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_38new.png
   :align: center

* **Пункт навантаження** – необхідно обрати з випадаючого списку (для цього в рядку необхідно ввести мінімум 3 символи найменування, після цього обрати його з випадаючого списку);
* **Пункт розвантаження** – необхідно обрати з випадаючого списку (для цього в рядку необхідно ввести мінімум 3 символи найменування, після цього обрати його з випадаючого списку);

Якщо адреси у вказаному списку немає, то її можливо додати вручну через кнопку **"Нова адреса"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_27n.png
   :align: center

Після чого в модальному вікні потрібно буде додати населений пункт, адресу та вибрати КОАТУУ (в цьому рядку можливо здійснювати пошук по назві чи коду). Код КОАТУУ вказується автоматично. Додана адреса навантаження прив'язується в системі до вказаного **"Вантажовідправника"**, а адреса розвантаження - до **"Вантажоодержувача"**.

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_28n.png
   :align: center

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_29n.png
   :align: center




.. охрана вантажу

.. tip:: Для повторного вибору перевізника, водія, вантажовідправника, вантажоодержувача, пунктів навантаження/розвантаження необхідно натиснути на кнопку "Обрати".

Для збереження е-ТТН необхідно натиснути кнопку **"Зберегти"**, документ потрапить у папку **"Чернетки"**.




**1.1 Заповнення табличної частини**
---------------------------------------

**1.1.1 Відомості про вантаж**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Заповнення "Відомостей про вантаж" є обов'язковим і його можливо здійснити кількома способами: 

**1) Вручну**
""""""""""""""""""""""""""""""""""""

Потрібно натиснути на кнопку **"Додати"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_04new.png
   :align: center

Після натискання на кнопку "Додати" відкриється модальне вікно, де необхідно заповнити рядки (найменування вантажу, кількість місць, одиниця виміру, ціна без ПДВ за одиницю, вид пакування (необов’язково), маса брутто, документи з вантажем) та натиснути на кнопку "Додати".

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_05new.png
   :align: center

**2) Шаблоном** 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Також для додавання табличних даних (вантаж) є можливість скористатись шаблоном. Для цього над таблицею необхідно натиснути **"Зберегти шаблон Excel"** (1).

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_06new.png
   :align: center

На Ваш комп’ютер буде завантажено файл з назвою **ettn_products_sample.xlsx**. Відкривши його, необхідно внести інформацію про вантаж.

Обов’язкові для заповнення поля в файлі відмічені жовтим кольором ("Найменування вантажу", "Маса брутто, кг").

.. important:: Ні в якому разі не змінювати формат шаблону, не видаляти або додавати нові стовпці. Також не допускається зміна формату комірок.

Після збереження заповненої інформації завантажуємо файл на веб-портал, скориставшись кнопкою **"Завантажити позиції з Excel"** (2).

За необхідністю є можливість додавати ще вантаж(і), для цього необхідно натиснути на кнопку **"Додати"** та заповнити інформацію в модальному вікні.

Для редагування інформації щодо вантажу необхідно навести курсор на рядок цього вантажу та натиснути "Змінити", для видалення – "Видалити".

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_07n.png
   :align: center

.. **3) З файлу**  
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. attention::
      Цей метод повністю виключає використання інших (попердніх) способів додавання позицій до табличної частини.

   При натисканні на кнопку **"Додати з файлу"** відкривається попап вікно для заповнення відомостей про вантаж:

   .. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_32new.png
      :align: center

   Обов'язково потрібно заповнити всі поля, а також вказати місцерозташування файлу-документа ("Додати файл"): 

   .. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_33.png
      :align: center

   .. important::
      Спосіб дозволяє додати лише 1 файл до табличної частини! Після доданої таким чином табличної позиції зникає можливість додавати інші позиції!

   Поле "Супровідні документи" автоматично заповнюється назвою доданого файлу, який також відображається в супровідних документах на вантаж:

   .. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_34.png
      :align: center

   Додану "Позицію з файлу" можливо видалити з табличної частини:

   .. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_35new.png
      :align: center

   .. important::
      Позиції відправлені в файловому вигляді, а також інші додані файли недоступні для ролі **"Перевізника"** та водіїв.

**Вантажно-розвантажувальні операції**
""""""""""""""""""""""""""""""""""""""""""""""""""""""

Обов'язково повинні бути заповнені дані ("Маса бруто, кг", "Дата прибуття", "Дата відправлення", "Відповідальна особа вантажовідправника") в таблиці вантажно-розвантажувальних операцій.

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_35new.png
   :align: center

.. hint::
   При переміщенні курсора в поле "Маса бруто, кг" система автоматично проставляє загальну масу всього вантажу із таблиці відомостей про вантаж:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_35new.png
   :align: center

**Додаткові дані**
""""""""""""""""""""""""""""""""""""""""""""""""""""""

Опціонально можуть бути заповнені додаткові дані в таблицю, як для всіх учасників документообігу так і межах однієї сторони.

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_35new.png
   :align: center

--------

За необхідністю є можливість додати супровідні документи на вантаж. Для цього необхідно натиснути на кнопку "Додати файл" (назва файлу повина бути унікальною).

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_08.png
   :align: center

Для того щоб видалити доданий файл необхідно натиснути на іконку корзини. Для того щоб зберегти доданий файл необхідно натиснути на його назву. Назва доданого файлу автоматично додається в поле "Супровідні документи".

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_09.png
   :align: center

.. --------

   Також у **"Вантажовідправника"** є можливість вказати дані пломб автомобіля та причепа з прив'язкою до створюваної еТТН:

   .. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_45.png
      :align: center

   .. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_46.png
      :align: center

   .. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_47.png
      :align: center

   **"Вантажовідправник"** за бажання може видалити дані опломбування (кнопка |мусорка|).

--------

Для підписання е-ТТН необхідно натинути на кнопку "Підписати".

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_10n.png
   :align: center

**2 Підписання та відправка документа**
================================================

Після ініціалізації бібліотеки підписання, система надасть можливість додати ключ для підписання. При :underline:`першому` підписанні у модальному вікні потрібно обрати файл чи токен (1), ввести пароль (2) та натиснути **"Считати"** (3) ключ для підписання:

.. image:: signing/file1n.png
   :align: center

.. image:: signing/file2n.png
   :align: center

При успішному додаванні ключа автоматично відобразиться особа, від імені якої буде здійснено підписання. У користувача може бути додано кілька ключів - для вибору потрібного для здійснення операції підписання потрібно проставити відмітку (4) лівою кнопкою миші і натиснути "Підписати" (5):

.. image:: signing/file3n.png
   :align: center

.. important::
   Якщо підписання цим ключем вже було здійснено або знайдена невідповідність даних ЄДРПОУ/ІПН (перевірка), то підписання блокується, а користувачу виводиться відповідне повідомлення:

.. image:: signing/wrong_key.png
   :align: center

Додатково в вікні підписання можливо натиснути **"Детальніше"** для того, щоб переглянути інформацію про підписанта; можливо видалити помилкові ключі (|del_key|).

При подальшій роботі з раніше доданим ключем/-ами потрібно вводити лише пароль для обраного ключа:

.. image:: signing/file4n.png
   :align: center

.. image:: signing/file5n.png
   :align: center

Після підписання е-ТТН відображається інформація щодо підписантів. Для відправки е-ТТН необхідно натинути на кнопку "Надіслати".

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_15new.png
   :align: center

Після відправки документа контрагенту він відображається в журналі надісланих документів. Для відправленної **Вантажовідправником** е-ТТН присвоєно статус **"Очікує підписання водієм / перевізником"**:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_17new.png
   :align: center

Відправлена е-ТТН має наступний вигляд:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_18n.png
   :align: center

На формі е-ТТН у лівій верхній частині відображаються QR-код та унікальний ідентифікатор документа.

Користувач може скористатись функціоналом для "Друку", "Завантаження" чи "Клонування" (1); також у разі виявлення помилки в документі у **"Вантажовідправника"** є можливість відхилити відправлену е-ТТН **до підписання "Перевізником"**. Для цього потрібно натиснути на кнопку "Відхилити" (2).

**2 Відхилення документа**
================================================

Для того, щоб відхилити документ (доступно **до підписання "Перевізником"**) потрібно натиснути **"Відхилити"**. Після чого в модульному вікні обов'язково потрібно заповнити причину відміни документа:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_30n.png
   :align: center

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_19new.png
   :align: center

На платформі відображається повідомлення та змінюється статус документа в ланцюжку (**"Скасовано вантажовідправником"**).

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_20new.png
   :align: center

**3 Створення документа на підставі чернетки Перевізника чи Вантажоотримувача**
================================================================================================

Існують схеми документообігу, в яких ініціатором виступає не **"Вантажовідправник"**, а **"Перевізник"** чи **"Вантажоотримувач"**. В такому випадку ініціатор створює та відправляє документ-чернетку, яку не потрібно підписувати. 

Далі згідно `оберненої схеми <https://wiki.edin.ua/uk/latest/ETTN_2_0/Work_with_ETTN.html#reverse-schema>`__ документообігу контрагент з роллю **"Вантажовідправник"** отримує документ-чернетку:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_21new.png
   :align: center

Для ролі **"Вантажовідправника"** вхідний документ-чернетка відображається з інформативною підказкою і дозволяє **"Створити"** (1) на основі вхідної чернетки документ, що потребує підписання:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_22new.png
   :align: center

В створений такий чином документ копіюється вся інформація та вкладення з чернетки. Документ можливо **"Зберегти"** (2) чи внести зміни (**"Змінити"** (2)), **"Підписати"** (3) та **"Надіслати"** (4):

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_23new.png
   :align: center

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_43.png
   :align: center

Особливістю такого документообігу є те, що в ланцюжку документів присутня чернетка, як документ-ініціатор документообігу:

.. image:: pics_Creation_signing_ending_rejection_ETTN_shipper/Creation_signing_ending_rejection_ETTN_shipper_24new.png
   :align: center

.. include:: kontakti.rst



