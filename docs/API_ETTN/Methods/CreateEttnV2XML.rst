##########################################################################################################################
**Створення XML документа для подальшого підписання**
##########################################################################################################################

.. important::
  XML формується **лише** в результаті першого виклику методу. При повторних викликах цього методу (незалежно від передаваємого в запиті тіла) XML вже не змінюється!

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/API_ETTN/Methods/Authorization.html>`__ .

.. csv-table:: 
  :file: CreateEttnV2XML.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

У тілі **відповіді** передається XML з відповідним документом `е-ТТН <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/Docs_ETTNv2_list.html>`__ для подальшої операції підписання.

