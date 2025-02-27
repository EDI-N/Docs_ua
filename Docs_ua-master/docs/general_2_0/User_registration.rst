Реєстрація та відновлення пароля на платформі EDI Network
##################################################################

.. сюда закину немного картинок для текста

.. |del_key| image:: /_constant/signing/del_key.png

.. role:: red

.. role:: underline

.. contents:: Зміст:
   :depth: 3

---------

.. raw:: html

   <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
       <iframe src="https://www.youtube.com/embed/VXlC2CKPJwE" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
   </div>

---------

.. _auth:

**1 Авторизація**
================================================

.. початок блоку для Auth

Для початку роботи з платформою **EDI Network** потрібно здійснити авторизований вхід (https://edo-v2.edin.ua/auth). Вже зареєстрованим користувачам потрібно ввести логін (email) та пароль (встановлюється при `Реєстрації <https://wiki.edin.ua/uk/latest/general_2_0/User_registration.html#register>`__ чи `Відновленні/зміні пароля <https://wiki.edin.ua/uk/latest/general_2_0/User_registration.html#pass-recovery>`__) і натиснути **"Вхід"**:

.. image:: /general_2_0/pics_User_registration/User_registration_031.png
   :align: center

.. hint::
   Також, в якості альтернативи, можливо виконати **"Вхід через Google"** за допомогою відповідної кнопки:

   .. image:: /general_2_0/pics_User_registration/User_registration_048.png
      :align: center

.. кінець блоку для Auth

.. _register:

**2 Реєстрація**
================================================

.. початок блоку для Register

Реєстрація користувача - це перший крок до отримання доступу до платформи EDI Network. Для реєстрації на платформі натисніть кнопку "Реєстрація" або перейдіть за `посиланням <https://edo-v2.edin.ua/register?source=reg-wiki>`__:

.. image:: /general_2_0/pics_User_registration/User_registration_032.png
   :align: center

Після натискання кнопки **"Реєстрація"** користувачу потрібно:

* Вказати Email (надалі він буде використовуватися в якості логіну при авторизації на платформі);
* Придумати Пароль (має бути не менше ніж 8 символів) - потребує повторного введення (підтвердження);
* Погодитись з офертою та політикою конфіденційності – встановіть позначку про підтвердження;
* Натиснути кнопку **"Реєстрація"**.

.. image:: /general_2_0/pics_User_registration/User_registration_033.png
   :align: center

.. hint::
   Також, в якості альтернативи, можливо **"Зареєстуватися через Google"** за допомогою відповідної кнопки:

   .. image:: /general_2_0/pics_User_registration/User_registration_049.png
      :align: center

Після чого система проінформує, що відправила листа на зазначену адресу:

.. image:: /general_2_0/pics_User_registration/User_registration_024.png
   :align: center

Очікуйте на лист - він потрібен для підтвердження email!

.. attention::
   Лист міг потрапити до спаму. Тому перевірте не тільки "Вхідні", але й "Спам". В разі попадання до спаму налаштуйте правила, щоб наступні листи від EDIN не потрапляли до спаму.

Після отримання листа, перейдіть за посиланням (дійсне 72 години) в ньому щоб підтвердити email:

.. image:: /general_2_0/pics_User_registration/User_registration_027.png
   :align: center

.. note::
   Сервіс з електронного обміну документами **"WhiteDoc"** потребує окремої `реєстрації <https://wiki.edin.ua/uk/latest/WhiteDoc/WD_Instructions/WD_registration.html>`__.

Для доступу до сервісів та `особистого кабінету <https://wiki.edin.ua/uk/latest/Personal_Cabinet/PCInstruction.html>`__ (приватної області) потрібно створити обліковий запис (акаунт). При переході до цих сервісів потрібно ввести особисті дані, покроково заповнивши поля на формі реєстрації:

.. image:: /general_2_0/pics_User_registration/User_registration_034.png
   :align: center

.. note::
   При переході до сервісу **"Вільний"** теж відкривається вище вказане модальне вікно, і зазначеної інформації достатньо для завершення реєстрації в даному сервісі:

   .. image:: /general_2_0/pics_User_registration/User_registration_045.png
      :align: center
   
   При переході в інші сервіси для створення облікового запису потрібно пройки ще кілька кроків. Доповнити цією інформацією після реєстрації у "Вільному" можливо натиснувши на кнопку **"Створити обліковий запис"**.

На другому кроці створення облікового запису потрібно обрати країну з випадаючого списку (можливо скористатись зручним пошуком за назвою):

.. image:: /general_2_0/pics_User_registration/User_registration_036.png
   :align: center

**Країна компанії** – використовується для перевірки коректності введених даних.

Для України Ваші дані можливо внести за допомогою Кваліфікованого Електронного Підпису - вкладка **"За КЕП"** (не доступно для інших країн) та вручну - вкладка **"За реквізитами"**:

.. image:: /general_2_0/pics_User_registration/User_registration_035.png
   :align: center

.. tabs::

   .. tab:: Реєстрація за реквізитами

      При реєстрації за реквізитами потрібно вказати ЄДРПОУ/ІПН та Назву компанії (обов'язкові поля відмічені червоною зірочкою :red:`*`). При введенні ЄДРПОУ/ІПН відбувається пошук і якщо Ваша компанія є у відкритих джерелах, то Назва компанії заповнюється автоматично:

      .. image:: /general_2_0/pics_User_registration/User_registration_037.gif
         :align: center

      .. include:: /general_2_0/User_reg_part.rst
         :start-after: .. початок блоку для QES
         :end-before: .. кінець блоку для QES

   .. tab:: Реєстрація за КЕП

      Для того, щоб внести дані за допомогою КЕП потрібно **"Вибрати"** ключ:

      .. image:: /general_2_0/pics_User_registration/User_registration_046.png
         :align: center

      .. tabs::

         .. tab:: Файловий ключ

            .. include:: /_constant/signing/signing.rst
               :start-after: .. початок блоку для Signing
               :end-before: .. кінець блоку для Signing

         .. tab:: Token

            .. include:: /_constant/token_signing/token_signing.rst
               :start-after: .. початок блоку для TokenSign
               :end-before: .. кінець блоку для TokenSign

         .. tab:: Гряда

            .. include:: /_constant/gryada_signing/gryada_signing.rst
               :start-after: .. початок блоку для GryadaSign
               :end-before: .. кінець блоку для GryadaSign

         .. tab:: Cloud

            .. include:: /_constant/cloud_signing/cloud_signing.rst
               :start-after: .. початок блоку для CloudSign
               :end-before: .. кінець блоку для CloudSign

      Після того, як ключ успішно зчитано на формі реєстрації поля "ЄДРПОУ / ІПН" та "Назва компанії / ПІБ" заповнюються автоматично даними з ключа без можливості їх редагування:

      .. image:: /general_2_0/pics_User_registration/User_registration_047.png
         :align: center

      .. include:: /general_2_0/User_reg_part.rst
         :start-after: .. початок блоку для QES
         :end-before: .. кінець блоку для QES

.. кінець блоку для Register

.. _pass-recovery:

**3 Відновлення/зміна пароля**
======================================

.. початок блоку для Pass_recovery

В разі якщо ви забули свій пароль є можливість його відновити. Для відновлення пароля потрібно натиснути на кнопку **"Забули пароль?"**:

.. image:: /general_2_0/pics_User_registration/User_registration_025.png
   :align: center

Далі в вікні ввести свою пошту, скориставшись кнопкою **"Відновити"**:

.. important::
   Відновлення пароля можливе тільки для користувачів в яких в якості логіну використовується email. В разі якщо логін відрізняється від email для відновлення пароля прохання звернутися до технічної підтримки!

.. image:: /general_2_0/pics_User_registration/User_registration_026.png
   :align: center

Після чого система проінформує про відправку листа для відновлення пароля на раніше вказану адресу:

.. image:: /general_2_0/pics_User_registration/User_registration_028.png
   :align: center

На пошту прийде лист з посиланням для переходу на форму введення нового пароля:

.. image:: /general_2_0/pics_User_registration/User_registration_029.png
   :align: center

При переході за посиланням вкажіть новий пароль та підтвердіть його:

.. image:: /general_2_0/pics_User_registration/User_registration_030.png
   :align: center

Після введення нового пароля одразу можливо здійснювати авторизацію до платформи **EDI Network**.

.. кінець блоку для Pass_recovery

------------------------------

.. include:: /_constant/kontakti.rst
