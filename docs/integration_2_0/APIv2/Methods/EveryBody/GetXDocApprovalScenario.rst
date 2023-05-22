#######################################################################
**Дані сценарію/-їв (об'єкт / масив об'єктів XDocApprovalScenario)**
#######################################################################

**Приклад відповіді за всіма сценаріями (JSON):**

.. code:: json

	[
		{
			"id": 1,
			"actual": true,
			"userId": 50206655,
			"docType": 0,
			"auto": false,
			"name": "very short",
			"documentSumMin": 0.0,
			"documentSumMax": 0.0,
			"steps":
			{
					"1":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206655,
							"stepStatus": 0,
							"operationType": 2,
							"dateChanged": 0
						}
					]
			}
		},
		{
			"id": 2,
			"actual": true,
			"userId": 50206655,
			"docType": 0,
			"auto": false,
			"name": "Акт наданих послуг",
			"documentSumMin": 0.0,
			"documentSumMax": 0.0,
			"steps":
			{
					"1":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206655,
							"stepStatus": 0,
							"operationType": 2,
							"dateChanged": 0
						}
					]
			}
		},
		{
			"id": 3,
			"actual": true,
			"userId": 50206655,
			"docType": 0,
			"auto": false,
			"name": "test skip first step",
			"documentSumMin": 0.0,
			"documentSumMax": 0.0,
			"steps":
			{
					"1":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206661,
							"stepStatus": 0,
							"operationType": 1,
							"dateChanged": 0
						}
					],
					"2":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206655,
							"stepStatus": 0,
							"operationType": 1,
							"dateChanged": 0
						}
					]
			}
		},
		{
			"id": 4,
			"actual": true,
			"userId": 50206655,
			"docType": 0,
			"auto": false,
			"name": "На Дарʼю",
			"documentSumMin": 0.0,
			"documentSumMax": 0.0,
			"steps":
			{
					"1":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206655,
							"stepStatus": 0,
							"operationType": 1,
							"dateChanged": 0
						}
					],
					"2":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206661,
							"stepStatus": 0,
							"operationType": 2,
							"dateChanged": 0
						}
					]
			}
		},
		{
			"id": 5,
			"actual": true,
			"userId": 50206655,
			"docType": 28,
			"auto": true,
			"name": "СценкаНова",
			"subDocTypes":
			[
					13
			],
			"partners":
			[],
			"documentSumMin": 0.0,
			"documentSumMax": 0.0,
			"steps":
			{
					"1":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206655,
							"stepStatus": 0,
							"operationType": 1,
							"dateChanged": 0
						}
					],
					"2":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206655,
							"stepStatus": 0,
							"operationType": 2,
							"dateChanged": 0
						}
					]
			}
		},
		{
			"id": 6,
			"actual": false,
			"userId": 50206655,
			"docType": 28,
			"auto": false,
			"name": "На підтримку ЗСУ",
			"subDocTypes":
			[
					13
			],
			"partners":
			[
					"1234567890AaB",
					"4823058722214"
			],
			"documentSumMin": 5.0E+10,
			"documentSumMax": 5000000000000001,
			"steps":
			{
					"1":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206655,
							"stepStatus": 0,
							"operationType": 1,
							"dateChanged": 0
						}
					],
					"2":
					[
						{
							"docId": 0,
							"scenarioId": 0,
							"stepId": 0,
							"userId": 50206655,
							"stepStatus": 0,
							"operationType": 2,
							"dateChanged": 0
						}
					]
			}
		}
	]

**Приклад відповіді за одним сценарієм (JSON):**

.. code:: json

	{
		"id": 5,
		"actual": true,
		"userId": 50206655,
		"docType": 28,
		"auto": true,
		"name": "СценкаНова",
		"subDocTypes":
		[
			13
		],
		"partners":
		[],
		"documentSumMin": 0.0,
		"documentSumMax": 0.0,
		"steps":
		{
			"1":
			[
					{
						"docId": 0,
						"scenarioId": 0,
						"stepId": 0,
						"userId": 50206655,
						"stepStatus": 0,
						"operationType": 1,
						"dateChanged": 0
					}
			],
			"2":
			[
					{
						"docId": 0,
						"scenarioId": 0,
						"stepId": 0,
						"userId": 50206655,
						"stepStatus": 0,
						"operationType": 2,
						"dateChanged": 0
					}
			]
		}
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
