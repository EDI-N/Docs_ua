#########################################################################
**Дані договору за GLN (об'єкт IdentificatorAgreement)**
#########################################################################

**JSON:**

.. code:: json

	{
	  "date": 1672869600,
	  "gln": "9864067143367",
	  "number": "100500",
	  "partner": {
	    "id": 13201459
	  },
	  "prolongation": 1,
	  "type": 1
	}

Таблиця 1 - Опис параметрів об'єкта **IdentificatorAgreement**

.. csv-table:: 
  :file: for_csv/IdentificatorAgreement.csv
  :widths:  1, 5, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **Identificator** (в запиті важливо передати лише **id** компанії-партнера (решта не обов'язково))

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/Identificator.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

-------------------------