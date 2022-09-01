#########################################################################
**Параметри пошуку контрагентів (об'єкт EDistribexPriceQuery)**
#########################################################################

.. note::
   Для ключа: "Область або країна наявності товару" пошук спрацьовує лише за повним збігом (за повною назвою області або країни), а для ключів: "Назва компанії", "Категорія товару" пошук працює як за повним так і частковим збігом.

**JSON:**

.. code:: json

   {
      "producerName": "Сухаренко",
      "categoryName": "Чай",
      "regions": [
         "Одеська",
         "Полтавська"
      ]
   }

Таблиця 1 - Опис параметрів об'єкта **EDistribexPriceQuery**

.. csv-table:: 
  :file: for_csv/EDistribexPriceQuery.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Limitation**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/Limitation.csv
  :widths:  1, 7, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **EDistribexRegion**

.. csv-table:: 
  :file: for_csv/EDistribexRegion.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0