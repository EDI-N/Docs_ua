Обробка вхідного "Акта примусового завершення"
###################################################################################################

.. картинки в текст

.. |лупа| image:: /_constant/icons/magnifying_glass.png

.. |будинок| image:: /_constant/icons/house.png

.. |pencil_stencil| image:: /_constant/icons/pencil_stencil.png

.. |лупа2| image:: /_constant/icons/magnifying_glass2.png

.. |trash| image:: /_constant/icons/trash.png

.. role:: red

.. role:: green

.. role:: orange

.. role:: underline

.. contents:: Зміст:
   :depth: 3

---------

"Акт примусового завершення" складається у разі неможливості завершення життєвого циклу "е-ТТН". Ініціатором "Акт примусового завершення" виступає **"Замовник"**. Обмін документом здійснюється та скріплюється електронними підписами представників між учасниками в наступному порядку: 

:green:`"Замовник" -> "Перевізник"`

Отримувачем "Акта примусового завершення" виступає учасник з роллю **"Перевізник"**.

.. _from-customer-to-carrier:

**1 Обробка вхідного "Акта примусового завершення" на стороні "Перевізника"**
====================================================================================================================

Для обробки "Акта примусового завершення" **Перевізником** в сервісі "EDI Network" потрібно перейти у **"Вхідні"** та вибрати **"Акт примусового завершення"** в статусі :orange:`"Очікує на підписання отримувачем"` (для зручності можливо скористатись рядком `пошуку <https://wiki.edin.ua/uk/latest/general_2_0/rabota_s_platformoj_EDIN_2.0.html#doc-search>`__):

.. image:: pics_Processing_Stop_Act/Processing_Stop_Act_001.png
   :align: center

Після ознайомлення з документом Ви можете **Прийняти** чи `"Відхилити" <https://wiki.edin.ua/uk/latest/ETTN_3_0/Stop_Act_Reject.html>`__ "Акт примусового завершення". Для того, щоб **Прийняти** документ обов'язково потрібно **"+Додати"** дані відповідальної особи в табличній частині блоку **"Вантажно-розвантажувальні операції"** в нижній частині документа:

.. image:: pics_Processing_Stop_Act/Processing_Stop_Act_002.png
   :align: center

Дані раніше доданих відповідальних осіб можливо обрати з віртуального довідника чи видалити зі списку за допомогою |trash|:

.. image:: pics_Processing_Stop_Act/Processing_Stop_Act_003.png
   :align: center

Довідник автоматично наповнюється при додаванні нового відповідального (кнопка **"+Додати особу"**). При додаванні нового відповідального в модальному вікні потрібно заповнити обов'язкові контактні дані (обов'язкові поля позначені червоною зірочкою :red:`*`).

Редагувати дані раніше введених осіб можливо за допомогою кнопки **"Змінити"** (|pencil_stencil|):

.. image:: pics_Processing_Stop_Act/Processing_Stop_Act_004.png
   :align: center

За потреби можливо **"Обрати"** (|лупа2|) іншу особу замість обраної/доданої раніше.

Після того, як обов'язкові дані будуть введені потрібно **"Зберегти"**:

.. image:: pics_Processing_Stop_Act/Processing_Stop_Act_005.png
   :align: center

та **"Підписати"** документ:

.. image:: pics_Processing_Stop_Act/Processing_Stop_Act_006.png
   :align: center

.. _sign:

**1.1 Підписання та відправка "Акта примусового завершення" "Перевізником"**
-----------------------------------------------------------------------------------------------------

.. include:: /_constant/atb_check/atb_check.rst
   :start-after: .. початок блоку для ATB_check
   :end-before: .. кінець блоку для ATB_check

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

Після підписання "Акта примусового завершення" інформація про нового підписанта відображається після натискання кнопки **"Переглянути підписи"**. Підписаний документ можливо **"Надіслати"**:

.. image:: pics_Processing_Stop_Act/Processing_Stop_Act_007.png
   :align: center

Життєвий цикл "Акту примусового завершення" завершено (документу присвоюється статус :green:`"Підписано всіма сторонами"`), а документ "е-ТТН" змінює свій статус на кінцевий статус :red:`"Завершено на підставі Акту примусового завершення"`:

.. image:: pics_Processing_Stop_Act/Processing_Stop_Act_008.png
   :align: center

Документообіг завершено.

---------------------------------

.. include:: /_constant/kontakti.rst
