######################################################################
**Дані товарів, що долучаються в Прайс-лист (об'єкт XPriceList)**
######################################################################

.. фактично клон з Дистриб"юшина (тут інший приклад, що важливо для запиту)

**JSON:**

.. code:: json

	{
	  "period": {
	    "date_from": 0,
	    "date_to": 0
	  },
	  "price": [
	    {
	      "category_name": "Чай",
	      "children": [
	        {
	          "category_name": "Грінфілд",
	          "children": [
	            {
	              "category_name": "Листовий ж/б",
	              "children": [],
	              "prods": [
	                {
	                  "regions": "Дніпропетровська,Харківська,Сумська,Полтавська",
	                  "article": "6181",
	                  "name": "Ж/Б Oriental Spirits 125гр.х14п.\"Грінфілд\" Укр",
	                  "barcode": "4820022865830",
	                  "producer_code": "BP0836",
	                  "user_code": "902200010",
	                  "unit_weight": "0.4",
	                  "box_qty": "14",
	                  "box_weight": "5.6",
	                  "box_in_layer": "3",
	                  "box_in_palette": "9",
	                  "palette_weight": "99.18",
	                  "unit_id": "8",
	                  "stock_balance": "100",
	                  "price_without_vat": "66.05",
	                  "price_with_vat": "79.26",
	                  "vat": "5",
	                  "quota": "25",
	                  "comment": "Коментар",
	                  "is_new": true,
	                  "is_promo": false,
	                  "is_pickup": true
	                }
	              ]
	            }
	          ],
	          "prods": []
	        }
	      ],
	      "prods": []
	    },
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
	                  "regions": "Португалія",
	                  "article": "7127",
	                  "name": "\"Традиційний\"  400х12 зернова кава Жокей Укр",
	                  "barcode": "4820022867421",
	                  "producer_code": "BP0837",
	                  "user_code": "901120000",
	                  "unit_weight": "0.321",
	                  "box_qty": "12",
	                  "box_weight": "3.852",
	                  "box_in_layer": "5",
	                  "box_in_palette": "10",
	                  "palette_weight": "25.75",
	                  "unit_id": "8",
	                  "stock_balance": "100",
	                  "price_without_vat": "80.05",
	                  "price_with_vat": "96.06",
	                  "vat": "5",
	                  "quota": "25",
	                  "comment": "Коментар",
	                  "is_new": false,
	                  "is_promo": false,
	                  "is_pickup": false
	                },
	                {
	                  "regions": "Запорізька",
	                  "article": "7115",
	                  "name": "\"Класичний\"  250х16 зернова кава Жокей Укр",
	                  "barcode": "4820022867438",
	                  "producer_code": "BP0838",
	                  "user_code": "901120000",
	                  "unit_weight": "1.2",
	                  "box_qty": "16",
	                  "box_weight": "19.2",
	                  "box_in_layer": "4",
	                  "box_in_palette": "8",
	                  "palette_weight": "78.65",
	                  "unit_id": "8",
	                  "stock_balance": "100",
	                  "price_without_vat": "57.75",
	                  "price_with_vat": "69.3",
	                  "vat": "5",
	                  "quota": "25",
	                  "comment": "Коментар",
	                  "is_new": false,
	                  "is_promo": true,
	                  "is_pickup": false
	                }
	              ]
	            }
	          ],
	          "prods": []
	        }
	      ],
	      "prods": []
	    }
	  ],
	  "distributors": []
	}

Таблиця 1 - Опис параметрів об'єкта XPriceList

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/XPriceList.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта XPriceListPeriod

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/XPriceListPeriod.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта XPriceListElement

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/XPriceListElement.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

.. deprecated * для сервісу Є-Товар: категорії/групи/підгрупи 

Таблиця 4 - Опис параметрів об'єкта XPriceListDistributor

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/XPriceListDistributor.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта XPriceListProduct

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/XPriceListProduct.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта Сharacteristics

.. csv-table:: 
  :file: ../../../Distribution/EDIN_2_0/API_2_0/Methods/EveryBody/for_csv/Сharacteristics.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
