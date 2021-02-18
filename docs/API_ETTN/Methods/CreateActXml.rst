##########################################################################################################################
**Створення XML Акта для подальшого підписання**
##########################################################################################################################

.. role:: green

.. note::
  Метод є універсальним (тип документа визначається по **doc_uuid**) і використовується для створення XML для:

  * **"Акта перевантаження"**
  * **"Акта розбіжностей до ТТН"**

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