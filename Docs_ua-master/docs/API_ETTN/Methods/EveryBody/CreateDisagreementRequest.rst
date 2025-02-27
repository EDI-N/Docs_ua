############################################################################################################################
**Тіло «Акта розбіжностей» до ТТН для накладання підпису Вантажоотримувача (об'єкт ConsignorDisagreement)**
############################################################################################################################

**JSON:**

.. code:: json

	{
	  "ENVELOPE": {
	    "STATE": "ORIGINATOR_SIGNED",
	    "DECLARHEAD": {
	      "C_DOC": "A01",
	      "C_DOC_SUB": "01",
	      "C_DOC_VER": "01"
	    },
	    "DECLARBODY": {
	      "TYPE": "CORE",
	      "STAKE": "ORIGINATOR",
	      "HNUM": "1551",
	      "HFILL": "2021-02-17",
	      "BASE_HNUM": "ТТНка-7",
	      "BASE_HFILL": "2021-02-17",
	      "UUID_TTN": "c04075b3-7015-46e9-9294-7c5ac283facc",
	      "DOCUMENT_PLACE": "Зашкварівка",
	      "R04G1S": "31600038",
	      "R04G2S": "Компанiя \"Вантажоотримувач\"",
	      "R04G3S": "Kyiv, Street2",
	      "R02G11S": "31600022",
	      "R02G1S": "ТОВ \"Перевiзник\"",
	      "R02G3S": "Васян",
	      "R02G31S": "Вася",
	      "R02G32S": "Васильович",
	      "R02G4S": "GHJ000000",
	      "HTIN": "31600017",
	      "HNAME": "Компанiя \"Вантажовiдправник\"",
	      "HLOC": "Kyiv, Kyiv",
	      "SEAL_NO": "щз567",
	      "SEAL_NO_DAMAGE": "",
	      "TEMPERATURE": "-5...+10",
	      "TEMPERATURE_MISMATCH": "",
	      "PACKAGE_DAMAGE": "",
	      "OTHER_MISMATCH": "",
	      "DISAGREEMENT_INFORMATION": "причина: відхилення",
	      "DISAGREEMENT_CONCLUSION": "Непотребство, як висновок",
	      "T1RXXXXG81S": [
	        {
	          "ROWNUM": 1,
	          "message": "Пельмешки"
	        },
	        {
	          "ROWNUM": 2,
	          "message": "Картопля"
	        },
	        {
	          "ROWNUM": 3,
	          "message": "Сало"
	        }
	      ],
	      "T1RXXXXG9S": [
	        {
	          "ROWNUM": 1,
	          "message": "тонна"
	        },
	        {
	          "ROWNUM": 2,
	          "message": "штука"
	        },
	        {
	          "ROWNUM": 3,
	          "message": "кілограм"
	        }
	      ],
	      "T1RXXXXG10": [
	        {
	          "ROWNUM": 1,
	          "message": "5"
	        },
	        {
	          "ROWNUM": 2,
	          "message": "1"
	        },
	        {
	          "ROWNUM": 3,
	          "message": "1"
	        }
	      ],
	      "CARGO_NUMBER_PLACES_FACT": [
	        {
	          "ROWNUM": 1
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "CARGO_NUMBER_PLACES_MISMATCH": [
	        {
	          "ROWNUM": 1
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "CARGO_NUMBER_PLACES_REASON": [
	        {
	          "ROWNUM": 1
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "T1RXXXXG15": [
	        {
	          "ROWNUM": 1,
	          "message": "5000"
	        },
	        {
	          "ROWNUM": 2,
	          "message": "0.1"
	        },
	        {
	          "ROWNUM": 3,
	          "message": "1"
	        }
	      ],
	      "CARGO_GROSS_WEIGHT_FACT": [
	        {
	          "ROWNUM": 1
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "CARGO_GROSS_WEIGHT_MISMATCH": [
	        {
	          "ROWNUM": 1
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "CARGO_GROSS_WEIGHT_REASON": [
	        {
	          "ROWNUM": 1
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "T1RXXXXG12": [
	        {
	          "ROWNUM": 1,
	          "message": "60000.00"
	        },
	        {
	          "ROWNUM": 2,
	          "message": "1.20"
	        },
	        {
	          "ROWNUM": 3,
	          "message": "1.20"
	        }
	      ],
	      "CARGO_SUM_FACT": [
	        {
	          "ROWNUM": 1,
	          "message": "59999.00"
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "CARGO_SUM_MISMATCH": [
	        {
	          "ROWNUM": 1,
	          "message": "-1.00"
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "CARGO_SUM_REASON": [
	        {
	          "ROWNUM": 1
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "CARGO_OTHER_MISMATCH": [
	        {
	          "ROWNUM": 1
	        },
	        {
	          "ROWNUM": 2,
	          "message": ""
	        },
	        {
	          "ROWNUM": 3,
	          "message": ""
	        }
	      ],
	      "CARGO_TOTAL_GROSS_WEIGHT": "5001.1",
	      "CARGO_TOTAL_GROSS_WEIGHT_MISMATCH": "",
	      "CARGO_TOTAL_SUM": "60002.4",
	      "CARGO_TOTAL_SUM_MISMATCH": "-1"
	    }
	  }
	}

Таблиця 1 - Опис параметрів об'єкта **OriginatorDisagreement**

.. csv-table:: 
  :file: for_csv/DISAGREEMENT/OriginatorDisagreement.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **ORIGINATOR_SIGN_ENVELOPE**

.. csv-table:: 
  :file: for_csv/DISAGREEMENT/ORIGINATOR_SIGN_ENVELOPE.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **HEAD**

.. csv-table:: 
  :file: for_csv/DISAGREEMENT/HEAD.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **DBODY**

.. csv-table:: 
  :file: for_csv/DISAGREEMENT/DBODY.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **RXXType**

.. csv-table:: 
  :file: for_csv/DISAGREEMENT/RXXType.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

-------------------------
