#########################################################################################
**Дані кроків за сценарієм (об'єкт з масивами об'єктів XDocApprovalStep)**
#########################################################################################

**JSON:**

.. code:: json

	{
		"name": "Бахмут - це Україна",
		"userId": 50206653,
		"actual": true,
		"auto": false,
		"partners":
		[],
		"documentSumMin": "500",
		"documentSumMax": "1000",
		"steps":
		{
			"1":
			[
					{
						"userId": "50206653",
						"operationType": "1"
					}
			],
			"2":
			[
					{
						"userId": "60215367",
						"operationType": "2"
					}
			]
		},
		"docType": 28,
		"subDocTypes":
		[
			13
		]
	}

Таблиця 1 - Опис параметрів об'єкта **XDocApprovalScenario**

.. csv-table:: 
  :file: for_csv/XDocApprovalScenario.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **XDocApprovalStep**

.. csv-table:: 
  :file: for_csv/XDocApprovalStep.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.
