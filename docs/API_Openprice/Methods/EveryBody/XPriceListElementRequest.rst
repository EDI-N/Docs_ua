###############################################################################
**Дані товарної позиції Прайс-листа (об'єкт XPriceListElement)**
###############################################################################

.. фактично клон з Дистриб"юшина (тут інший приклад, що важливо для запиту)

**JSON:**

.. code:: json

	{
	  "category_name": "Кава",
	  "children": [
	    {
	      "category_name": "Жокей",
	      "children": [
	        {
	          "category_name": "Зернову",
	          "children": [],
	          "prods": [
	            {
	              "article": "7115",
	              "name": "\"Класичний\"  250х16 зернова кава Жокей Укр",
	              "barcode": "4820022867438",
	              "producer_code": "BP08333",
	              "user_code": "901120000",
	              "unit_weight": "1.2",
	              "box_qty": "16",
	              "box_weight": "19.2",
	              "box_in_layer": "4",
	              "box_in_palette": "8",
	              "palette_weight": "78.65",
	              "id": 11,
	              "producer_id": 13200791,
	              "product_id": 150,
	              "unit_id": 8,
	              "stock_balance": 100,
	              "price_without_vat": 57.75,
	              "price_with_vat": 69.3,
	              "date_to": 0,
	              "date_from": 0,
	              "date_changed": 1648049515,
	              "vat": 5,
	              "quota": 25,
	              "comment": "Коментар",
	              "is_new": false,
	              "is_promo": true,
	              "is_surcharge": false,
	              "is_pickup": false,
	              "regions": "Запорізька"
	            }
	          ]
	        }
	      ],
	      "prods": []
	    }
	  ],
	  "prods": []
	}

Таблиця 1 - Опис параметрів

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/XPriceListElement.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. deprecated * для сервісу Є-Товар: категорії/групи/підгрупи 

Таблиця 2 - Опис параметрів об'єкта XPriceListProduct

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/XPriceListProduct.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта Сharacteristics

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/Сharacteristics.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
