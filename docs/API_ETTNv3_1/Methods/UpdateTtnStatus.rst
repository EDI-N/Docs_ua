######################################################################################
**Зміна статусу "Зведеної ТТН"**
######################################################################################

.. this is additional route for consolidated ttn - noq for epicentr only (not announced)
   https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_Instructions/Epicentr_consolidated_TTN_instruction.html
   https://wiki.edin.ua/uk/latest/ClientProcesses/Epicentr/Epicentr_Instructions/Epicentr_consolidated_TTN_instruction_web.html

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__.

.. important:: 
   Зміна статусу для "Зведеної ТТН" виконуєтсья за умови, що всі пов'язані ТТН були **Підписані** та **Надіслані** (мають `статус <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/EveryBody/extraFields_sub_status_v3.html>`__ відмінний від поточного статусу "Зведеної ТТН", тобто **sub_status_id**). Статус змінюється покроково: "1" -> "6" -> "7"

.. csv-table:: 
  :file: UpdateTtnStatus.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

Код сервера 200 (ok).
