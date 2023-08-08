########################################################################################################################
Ланцюжок документів на платформі EDIN 2.0
########################################################################################################################

.. початок блоку для Chain

.. role:: underline

.. role:: orange

.. |send| image:: /_constant/chain/chain_005.png

.. |green_send| image:: /_constant/chain/chain_003.png

.. |inbox| image:: /_constant/chain/chain_006.png

.. |green_inbox| image:: /_constant/chain/chain_004.png

.. |eye| image:: /_constant/chain/chain_009.png

При перегляді документів сервісу в правій частині відображається блок з **Ланцюжком документів**:

.. image:: /_constant/chain/chain_001.png
   :align: center

**Ланцюжок документів** - це послідовний список пов'язаних документів, що передбачаються документообігом. Деякі `торгові мережі та контагенти <https://wiki.edin.ua/uk/latest/ClientProcesses/Clients_list.html>`__ мають специфічні схеми документообігу - для таких контагентів **Ланцюжок документів** буде відмінним. :underline:`Типовими документообігами` в сервісі **"EDI Network"** вважаються:

1) `Замовлення (ORDERS) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#order>`__ **->** `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#ordrsp>`__ **->** `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#desadv>`__ **->** `Е-ТТН <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/Docs_ETTNv2_list.html>`__ **->** `Повідомлення про прийом (RECADV) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#recadv>`__ **->** `Прибуткова накладна (COMDOC_007) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#comdoc-007>`__
2) `Замовлення (ORDERS) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#order>`__ **->** `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#ordrsp>`__ **->** `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#desadv>`__ **->** `Рахунок (INVOICE) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#invoice>`__
3) `Підтвердження замовлення (ORDRSP) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#ordrsp>`__ **->** **Замінити новим** **->** `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#desadv>`__ **->** `Рахунок (INVOICE) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#invoice>`__
4) `Повідомлення про відвантаження (DESADV) <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#desadv>`__ **->** **Замінити новим** **->** `Е-ТТН <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/Docs_ETTNv2_list.html>`__

.. hint::
   Також документи пов'язуються в один ланцюжок в тому випадку, якщо у них ідентичні значення полів **"Відправник"**, **"Одержувач"**, **"Покупець"**, **"Точка доставки"** (GLN-и) і **"Номер замовлення"** (якщо відсутній, то **"Номер документа"**).

   .. image:: /integration_2_0/APIv2/Methods/pics/EdsChain_01.png
      :align: center

Решта документів, що можуть будуть пов'язані з документом із ланцюжка, але не є частиною конкретної схеми документообігу відображаються в цьому блоці, як **"Не в ланцюжку"**:

.. image:: /_constant/chain/chain_002.png
   :align: center

:underline:`В документах, що передбачаються схемою` жовтим кольором вказуються підказки, наприклад, :orange:`"Очікується створення"`, :orange:`"Документ створюється з "Замовлення""` і тому подібні. Якщо документ, який Ви переглядаєте за схемою передбачає створення інших документів, то такі документи можливо створити за допомогою кнопки **"Створити документ"**.

Документ в якому Ви перебуваєте виділений в ланцюжку, а завдяки іконкам та їх кольорам легко зрозуміти "напрямок" документа, його статус:

* |send| - очікується, що Ви створите та відправите цей документ;
* |green_send| - Ваш надісланий документ;
* |inbox| - очікується вхідний документ;
* |green_inbox| - вхідний документ.

Повні назви статусів доступні при наведенні курсора на іконку навпроти назви документа:

.. image:: /_constant/chain/chain_008.gif
   :align: center

Документи в ланцюжку об'єднуються за типом документа (кількість документів вказується в правому нижньому куті):

.. image:: /_constant/chain/chain_007.png
   :align: center

За допомогою кнопки |eye| можливо перемикати вигляд **Ланцюжка документів** між застарілим та оновленим:

.. image:: /_constant/chain/chain_010.gif
   :align: center

.. кінець блоку для Chain


