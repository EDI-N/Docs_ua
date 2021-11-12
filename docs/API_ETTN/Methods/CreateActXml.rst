##########################################################################################################################
**Створення XML Акта для подальшого підписання**
##########################################################################################################################

.. role:: green

.. note::
  Метод є універсальним (тип документа визначається по **doc_uuid**) і використовується для створення XML для:

  * **"Акта перевантаження"**
  * **"Акта розбіжностей до ТТН"**
  * **"Акта про заміну пункту призначення вантажу"**
  * **"Акта коригування"**

.. important::
  XML формується **лише** в результаті першого виклику методу. При повторних викликах цього методу (незалежно від передаваємого в запиті тіла) XML вже не змінюється!

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: CreateActXml.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповіді** передається XML з відповідним актом:

:green:`для "Акта перевантаження":`

* для подальшої операції підписання `Перевізником, що здає вантаж <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/RELOAD_ACT_ORIGINATOR_SIGNEDPage_v2.html>`__;
* для подальшої операції підписання `Перевізником, що приймає вантаж <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/RELOAD_ACT_TRANSPORTER_SIGNEDPage_v2.html>`__.

:green:`для "Акта розбіжностей до ТТН":`

* для подальшої операції підписання `Вантажоотримувачем <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/DISAGREEMENT_ORIGINATOR_SIGNEDPage.html>`__;
* для подальшої операції підписання `Перевізником <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/DISAGREEMENT_TRANSPORTER_SIGNEDPage.html>`__;
* для подальшої операції підписання `Вантажовідправником <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/DISAGREEMENT_ORIGINATOR_SIGNEDPage.html>`__.

:green:`для "Акта про заміну пункту призначення вантажу":`

* для подальшої операції підписання `Ініціатором (Вантажовідправник/Вантажоодержувач/Перевізник/Замовник) <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/WAREHOUSE_CHANGE_ORIGINATOR_SIGNED.html>`__;
* для подальшої операції підписання `Перевізником чи Замовником <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/WAREHOUSE_CHANGE_TRANSPORTER_SIGNED.html>`__;
* для подальшої операції підписання `Замовником <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/WAREHOUSE_CHANGE_CUSTOMER_SIGNED.html>`__.

:green:`для "Акта коригування":`

* для подальшої операції підписання `Ініціатором (Вантажовідправник/Перевізник/Вантажоодержувач/Замовник) <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/ADJUSTMENT_ORIGINATOR_SIGNED.html>`__;
* для подальшої операції підписання `Вантажовідправником чи Перевізником <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/ADJUSTMENT_CONSIGNOR_SIGNED.html>`__;
* для подальшої операції підписання `Перевізником чи Вантажоотримувачем <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/ADJUSTMENT_TRANSPORTER_SIGNED.html>`__;
* для подальшої операції підписання `Вантажоотримувачем <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/ADJUSTMENT_RECIPIENT_SIGNED.html>`__.




