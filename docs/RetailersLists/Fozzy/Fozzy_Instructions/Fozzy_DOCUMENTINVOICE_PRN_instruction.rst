##################################################################################################################################################################################
Формування та відправка "Цінової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = PRN) мережі Фоззі за схемою "Match Invoice". Інструкція для Постачальника.
##################################################################################################################################################################################

.. сюда закину немного картинок для текста

.. role:: red

.. contents:: Зміст:
   :depth: 2

---------

"Цінова накладна" (DOCUMENTINVOICE.DocumentFunctionCode = PRN) є юридично значущим документом (ЮЗД) і може використовуватись при роботі з мережею Фоззі в схемі документообігу "Match Invoice". "Цінова накладна" може бути створена Постачальником:

* на підставі вхідного "Замовлення" (ORDER);
* на підставі відправленої "Накладної за кількістю" (DOCUMENTINVOICE.DocumentFunctionCode = TN).

При цьому якщо в ланцюжку документів вже відправлена "Накладна за кількістю", то "Цінову накладну" можливо сстворити лише на підставі "Накладної за кількістю".

.. `XML Специфікації для роботи з Фоззі (за схемою «Match Invoice») <https://wiki.edin.ua/uk/latest/XML/Fozzy_XML-structure.html>`__





1 Формування "Цінової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = PRN) на підставі вхідного "Замовлення" (ORDER)
====================================================================================================================================

Для формування "Цінової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = PRN) на підставі "Замовлення" (ORDER) потрібно перейти в розділ "Вхідні" та обрати потрібний документ. Для зручності можливо скористатись пошуком (за типом документа (приклад в зображенні), номером документа чи GLN):

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_001.png
   :align: center

У відкритому документі на формі-підказці виберіть зі списку **"Цінова накладна"**:

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_002.png
   :align: center

Після чого на підставі "Замовлення" (ORDER) автоматично створюється "Цінової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = PRN). На формі створюваного документа значення більшості полів заповняться (пененесутся) з документа-підстави. Всі поля, позначені червоною зірочкою :red:`*` - **обов'язкові до заповнення**:

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_003.png
   :align: center

В табличній частині створеного документа знаходяться всі товарні позиції (перенесені з документа-підстави "Замовлення" (ORDER)). Детальну інформацію по позиції можливо переглянути натиснувши на кнопку біля номера позиції:

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_004.png
   :align: center

"Ставку ПДВ" можливо замінити при перегляді таблиці, а інші дані позицій можливо відредагувати та **"Змінити"** через pop-up вікно, що відкривається по кліку на штрихкод товару:

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_004.png
   :align: center

Також можливо **"Видалити"** товарні позиції з табличної частини документа:

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_005.png
   :align: center

До табличної частини "Цінової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = PRN) можливо додавати лише ті позиції, що були вказані в "Замовленні" (вибрати зі списку). Якщо всі позиції співпадають з позиціями в "Замовленні" (ORDER), то в табличній частині кнопка **"+Додати"** не відображається:

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_005.png
   :align: center

Після внесення всіх необхідних змін в документ потрібно натиснути кнопку **"Зберегти"** (1), після чого можливо **"Підписати"** (2):

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_006.png
   :align: center

.. _sign:

1.1 Підписання та відправка "Цінової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = PRN)
--------------------------------------------------------------------------------------------------

.. include:: /_constant/signing/signing.rst
   :start-after: .. початок блоку для Signing
   :end-before: .. кінець блоку для Signing

Після підписання "Цінової накладної" (DOCUMENTINVOICE.DocumentFunctionCode = PRN) документ потрібно **"Відправити"**:

.. image:: pics_Fozzy_DOCUMENTINVOICE_instruction/Fozzy_DOCUMENTINVOICE_instruction_007.png
   :align: center

Відправлений документ автоматично потрапляє в папку **"Надіслані"** і буде знаходитись в ланцюжку документів разом із пов'язаними документами. Мережа Фоззі зі своєї сторони переглядає та підписує документ.

------------------------------------------------

.. include:: /_constant/kontakti.rst
