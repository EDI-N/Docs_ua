########################################################################################################################
Алгоритм роботи зі «Зведеною ТТН»
########################################################################################################################

.. this instruction not announced

.. role:: green

.. role:: blue

**Постачальники** (Вантажовідправники) відправляють свої ТТН (`за стандартним процесом <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Work_with_API/ETTNv3_API_work.html>`__) в РЦ мережі "Епіцентр", що виступає Вантажоодержувачем в даних документах. Далі РЦ мережі "Епіцентр" формує нові ТТН та відправляє в свої ТЦ (`за стандартним процесом <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Work_with_API/ETTNv3_API_work.html>`__).

«Зведена ТТН» дозволяє прив'язати нові ТТН мережі "Епіцентр", що відносяться до одного ТЦ і спростити прийомку товарів на рівні однієї «Зведеної ТТН».

«Зведена ТТН» - є внутрішнім документом і не реєструється в ЦБД!

**Загальна схема документообігу:**

.. image:: pics_Epicentr_consolidated_TTN_instruction/Epicentr_consolidated_TTN_instruction_001.png
   :align: center

**Алгоритм формування «Зведеної ТТН»:**

* :green:`1` `Авторизація РЦ <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__
* :green:`2` `Створення чернетки Зведеної ТТН <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/CreateEcmrEttn.html>`__
* :blue:`3` `Прив'язка (додавання) ТТН до Зведеної ТТН <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/PostLinkDocs.html>`__

   `Отримання пов'язаних документів Зведеної ТТН <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetLinkDocs.html>`__
   `Розірвання прив'язки (видалення) ТТН до Зведеної ТТН <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/DelLinkDocs.html>`__
* :green:`4` `Відправка Зведеної ТТН РЦ <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/SendEcmrDoc.html>`__

**Технічні моменти:**

1) Створення чернетки «Зведеної ТТН»

Специфікація «Зведеної ТТН» відрізняється від звичайної ТТН (`XML <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3.html>`__ / `JSON <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/ETTN/ETTNpage_v3_json.html>`__) значенням тега **ExchangedDocumentContext.GuidelineSpecifiedDocumentContextParameter**:

* urn:ua:e-transport.gov.ua:ettn:01:generic:001 => 1 - (звичайна ТТН).
* urn:ua:e-transport.gov.ua:ettn:01:generic:101 => 101 - ("Зведена ТТН").
2) Чернетка «Зведеної ТТН» не доступна до редагування (лише для перегляду).
3) При відправці для «Зведеної ТТН» виконуються додаткові перевірки: всі пов'язані документи мають бути відправлені + перевірки, що і при додаванні ТТН документів.
4) Після відправки «Зведеної ТТН» прив'язувати (додавати) нові ТТН заборонено, однак можливо видаляти раніше прив'язані ТТН.

