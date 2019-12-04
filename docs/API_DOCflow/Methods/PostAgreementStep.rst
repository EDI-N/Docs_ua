#############################################################
**Створення/редагування кроку узгодження**
#############################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edi-n.com/uk/latest/API_DOCflow/Methods/Authorization.html>`__ .

.. important:: 
    Вибір дії (створення або редагування). В разі якщо в тілі запиту (json) присутній **agreementStepId**, то крок узгодження з зазначеним **Id** підлягає редагуванню. Відсутність параметра **agreementStepId** веде до створення нового кроку узгодження.

+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------+
|                        **Метод запиту**                        |                                                              **HTTP POST**                                                               |
+================================================================+==========================================================================================================================================+
| **Content-Type**                                               | application/json (тіло запиту/відповіді в json форматі в тілі HTTP запиту)                                                               |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------+
| **URL запиту**                                                 | https://doc.edi-n.com/bdoc/agreement_step                                                                                                |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------+
| **Параметри, що передаються в URL (разом з адресою методу)**   | В рядку заголовка (Header) "Set-Cookie" обов'язково передається SID - токен, отриманий при авторизації                                   |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------+
| **Обов'язкові параметри, що передаються в тілі запиту (json)** | **agreementStepId** (для редагування контракту), agreementExecType, agreementTaskType, agreementStepId, agreementProcId, agreementGroups |
+----------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------+

**JSON-параметри в тілі HTTP запиту/відповіді**
*******************************************************************

``REQUEST``

Опис json-параметрів **запиту** метода API (об'єкт **AgreementStep**)

Таблиця 1 - Опис параметрів об'єкта **AgreementStep**

.. csv-table:: 
  :file: for_csv/AgreementStep.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **AgreementGroup**

.. csv-table:: 
  :file: for_csv/AgreementGroup.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

``RESPONSE``

Опис json-параметрів **відповіді** метода API (об'єкт **AgreementProc**)

Таблиця 3 - Опис параметрів об'єкта **AgreementProc**

.. csv-table:: 
  :file: for_csv/AgreementProc.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **AgreementStep**

.. csv-table:: 
  :file: for_csv/AgreementStep.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **AgreementProc2Doc**

.. csv-table:: 
  :file: for_csv/AgreementProc2Doc.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **Document**

.. csv-table:: 
  :file: for_csv/Document.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **Company**

.. csv-table:: 
  :file: for_csv/Company.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

--------------

**Приклади**
*****************

Приклад тіла **запиту** (json) для **Створення кроку узгождення**:

.. code:: ruby

    {
	  "agreementProcId": 119,
	  "stepNumber": 0,
	  "agreementTaskType": "1",
	  "agreementExecType": "1",
	  "agreementExecPeriod": null,
	  "agreementStepPriority": null,
	  "agreementGroups": [
	    {
	      "groupId": 136,
	      "groupName": "Группа - 2 "
	    }
	  ]
	}

--------------

Приклад тіла **запиту** (json) для **Редагування кроку узгождення**:

.. code:: ruby

	{
	  "agreementProcId": 119,
	  "stepNumber": 0,
	  "agreementStepId": 477,
	  "agreementTaskType": "1",
	  "agreementExecType": "1",
	  "agreementExecPeriod": null,
	  "agreementStepPriority": null,
	  "agreementGroups": [
	    {
	      "groupId": 136,
	      "groupName": "Группа - 2 "
	    }
	  ]
	}

--------------

Приклад тіла **відповіді** (json) - однаковий для **Створення/Редагування**: 

.. code:: ruby

    {
	  "agrementSteps": [
	    {
	      "agreementGroups": [
	        {
	          "users": [],
	          "groupId": 136,
	          "companyId": 4,
	          "groupName": "Группа - 2 "
	        }
	      ],
	      "agreementStepId": 477,
	      "agreementProcId": 119,
	      "agreementTaskType": 1,
	      "agreementExecType": 1,
	      "agreementExecPeriod": 0,
	      "agreementStepPriority": 0
	    },
	    {
	      "agreementGroups": [
	        {
	          "users": [],
	          "groupId": 136,
	          "companyId": 4,
	          "groupName": "Группа - 2 "
	        }
	      ],
	      "agreementStepId": 479,
	      "agreementProcId": 119,
	      "agreementTaskType": 1,
	      "agreementExecType": 1,
	      "agreementExecPeriod": 0,
	      "agreementStepPriority": 0
	    },
	    {
	      "agreementGroups": [
	        {
	          "users": [],
	          "groupId": 136,
	          "companyId": 4,
	          "groupName": "Группа - 2 "
	        }
	      ],
	      "agreementStepId": 481,
	      "agreementProcId": 119,
	      "agreementTaskType": 1,
	      "agreementExecType": 1,
	      "agreementExecPeriod": 0,
	      "agreementStepPriority": 0
	    }
	  ],
	  "agreementProc2Docs": [
	    {
	      "document": {
	        "documentId": 2289,
	        "companyId": 4,
	        "company": {
	          "companyId": 0,
	          "accountId": 0,
	          "type": 0,
	          "name": "Царь Царей",
	          "code": "34554355",
	          "isApproved": 0,
	          "isSignedOffer": 0,
	          "isActive": 0,
	          "ownershipTypeId": 0,
	          "certificates": [],
	          "dictionaries": [],
	          "notifySettings": []
	        },
	        "name": "Старые закончились",
	        "type": 1,
	        "code": "432432",
	        "agreementProcId": 0,
	        "isActive": 1,
	        "extraFields": []
	      }
	    }
	  ],
	  "agreementProcId": 119,
	  "companyId": 4,
	  "company": {
	    "companyId": 4,
	    "accountId": 0,
	    "type": 0,
	    "name": "Царь Царей",
	    "code": "34554355",
	    "isApproved": 0,
	    "isSignedOffer": 0,
	    "isActive": 0,
	    "ownershipTypeId": 0,
	    "certificates": [],
	    "dictionaries": [],
	    "notifySettings": []
	  },
	  "name": "Бухгалтер",
	  "status": 1
	}


