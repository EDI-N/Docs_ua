############################################################################################################################
**Обгортка для накладання підпису Вантажоотримувача на контент (об'єкт CONSIGNEE_SIGN_ENVELOPE)**
############################################################################################################################

**JSON:**

.. code:: json

  {
  "DECLARBODY":{
          "STAKE": "RECIPIENT",
          "TYPE":"AMENDMENT",
          "R09G2": 571.755,
          "DATE_ARRIVAL_UNLOAD": "2020-10-25",
          "DATE_DEPARTURE_UNLOAD": "2020-10-25",
          "R09G31": 22,
          "R09G32": 0,
          "R09G41": 23,
          "R09G42": 0,
          "R09G51": 0,
          "R09G52": 0,
          "R017G61S": "Старший комірник",
          "R017G6S": "Кузьменко Марія Петрівна"
      }
  }

Таблиця 1 - Опис параметрів об'єкта **CONSIGNEE_SIGN_ENVELOPE**

.. csv-table:: 
  :file: for_csv/CONSIGNEE_SIGN_ENVELOPE_REQUEST.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **CONSIGNEE_BODY**

.. csv-table:: 
  :file: for_csv/CONSIGNEE_BODY.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **DECLAR_ACT**

.. csv-table:: 
  :file: for_csv/DECLAR_ACT.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **CLAIM_TRANSFER**

.. csv-table:: 
  :file: for_csv/CLAIM_TRANSFER.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **SIGNATURE_RECIPIENT**

.. csv-table:: 
  :file: for_csv/SIGNATURE_RECIPIENT.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

