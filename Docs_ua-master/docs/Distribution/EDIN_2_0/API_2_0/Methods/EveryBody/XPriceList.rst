#############################################################
**Дані товарів, що долучаються в Прайс-лист (XPriceList)**
#############################################################

**JSON:**

.. code:: json

	{
	  "vatIncluded": "0",
	  "distributors": [
	    {
	      "gln": "9864065732327",
	      "id": 13200793,
	      "name": "Dist_Test_1"
	    },
	    {
	      "gln": "9864065732334",
	      "id": 13200795,
	      "name": "Dist_Test_2"
	    }
	  ],
	  "period": {
	    "date_from": 1588626000,
	    "date_to": 1598821200
	  },
	  "price": [
	    {
	      "category_name": "Кухня",
	      "children": [
	        {
	          "category_name": "Кастрюлі",
	          "children": [
	            {
	              "category_name": "Емальовані",
	              "children": [],
	              "prods": [
	                {
	                  "article": 2222,
	                  "barcode": "4800000000001",
	                  "box_in_layer": 25,
	                  "box_in_palette": 50,
	                  "box_qty": 100,
	                  "box_weight": 199,
	                  "comment": "супер",
	                  "is_new": true,
	                  "is_promo": true,
	                  "is_public": false,
	                  "name": "\"Кастрюля\"  квадратна унікальна",
	                  "palette_weight": 100,
	                  "price_with_vat": 80,
	                  "price_without_vat": 100500,
	                  "quota": 550,
	                  "stock_balance": 250,
	                  "unit_id": 8,
	                  "unit_weight": 1.99,
	                  "user_code": 900000001,
	                  "vat": 5
	                }
	              ]
	            }
	          ],
	          "prods": []
	        }
	      ],
	      "prods": []
	    }
	  ]
	}

Таблиця 1 - Опис параметрів об'єкта XPriceList

.. csv-table:: 
  :file: for_csv/XPriceList.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта XPriceListPeriod

.. csv-table:: 
  :file: for_csv/XPriceListPeriod.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта XPriceListElement

.. csv-table:: 
  :file: for_csv/XPriceListElement.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. deprecated * для сервісу Є-Товар: категорії/групи/підгрупи 

Таблиця 4 - Опис параметрів об'єкта XPriceListDistributor

.. csv-table:: 
  :file: for_csv/XPriceListDistributor.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта XPriceListProduct

.. csv-table:: 
  :file: for_csv/XPriceListProduct.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта Сharacteristics

.. csv-table:: 
  :file: for_csv/Сharacteristics.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.






