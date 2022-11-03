#########################################################################
**Дані підписантів (масив об'єктів ClientSigner)**
#########################################################################

**JSON:**

.. code:: json

	[
	  {
	    "signerId": 801,
	    "accountId": 36633,
	    "signerRoleId": 1,
	    "fullName": "Петров Петро Петрович",
	    "position": "Двірник",
	    "ownershipId": 1,
	    "actsOnBasisId": 2,
	    "fileDate": "2022-11-02 00:00:00",
	    "fileId": 257,
	    "isActual": 1,
	    "createdAt": "2022-11-02 16:23:38",
	    "modifiedAt": "2022-11-02 16:23:38",
	    "modifiedBy": 0,
	    "file": {
	      "fileId": 257,
	      "fileTypeID": 1,
	      "fileName": "EDIN.pdf",
	      "fileExt": "pdf"
	    }
	  }
	]

Таблиця 1 - Опис параметрів об'єкта **ClientSigner**

.. csv-table:: 
  :file: for_csv/ClientSigner.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **ClientSignerFile**

.. csv-table:: 
  :file: for_csv/ClientSignerFile.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

-------------------------