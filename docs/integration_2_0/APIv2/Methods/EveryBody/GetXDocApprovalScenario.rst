#######################################################################
**Дані сценарію/-їв (об'єкт / масив об'єктів XDocApprovalScenario)**
#######################################################################

**Приклад відповіді за всіма сценаріями (JSON):**

.. code:: json

	[
	  {
	    "id": 1,
	    "actual": true,
	    "userId": 50206653,
	    "name": "First Scenario",
	    "body": {
	      "1": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 123,
	          "stepStatus": 0,
	          "operationType": 1,
	          "dateChanged": 0
	        }
	      ],
	      "2": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 321,
	          "stepStatus": 0,
	          "operationType": 2,
	          "dateChanged": 0
	        }
	      ],
	      "3": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 333,
	          "stepStatus": 0,
	          "operationType": 1,
	          "dateChanged": 0
	        },
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 334,
	          "stepStatus": 0,
	          "operationType": 2,
	          "dateChanged": 0
	        }
	      ],
	      "4": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 321,
	          "stepStatus": 0,
	          "operationType": 2,
	          "dateChanged": 0
	        }
	      ]
	    }
	  },
	  {
	    "id": 6,
	    "actual": true,
	    "userId": 50206653,
	    "name": "Акт приймання наданих послуг",
	    "body": {
	      "1": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 60213505,
	          "stepStatus": 0,
	          "operationType": 1,
	          "dateChanged": 0
	        }
	      ],
	      "2": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 50206653,
	          "stepStatus": 0,
	          "operationType": 2,
	          "dateChanged": 0
	        }
	      ]
	    }
	  },
	  {
	    "id": 7,
	    "actual": true,
	    "userId": 50206653,
	    "name": "Щоденний донат на ЗСУ",
	    "body": {
	      "1": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 60215367,
	          "stepStatus": 0,
	          "operationType": 1,
	          "dateChanged": 0
	        }
	      ],
	      "2": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 50206653,
	          "stepStatus": 0,
	          "operationType": 1,
	          "dateChanged": 0
	        }
	      ],
	      "3": [
	        {
	          "docId": 0,
	          "scenarioId": 0,
	          "stepId": 0,
	          "userId": 60213505,
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
	  "userId": 50206653,
	  "name": "TEST_1",
	  "body": {
	    "1": [
	      {
	        "docId": 0,
	        "scenarioId": 0,
	        "stepId": 0,
	        "userId": 60213505,
	        "stepStatus": 0,
	        "operationType": 1,
	        "dateChanged": 0
	      }
	    ],
	    "2": [
	      {
	        "docId": 0,
	        "scenarioId": 0,
	        "stepId": 0,
	        "userId": 50206653,
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
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **XDocApprovalStep**

.. csv-table:: 
  :file: for_csv/XDocApprovalStep.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0