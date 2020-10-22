############################################################################################################################
**Тіло документа е-ТТН для накладання підпису Вантажовідправника (об'єкт CONSIGNOR_ETTN)**
############################################################################################################################

**JSON:**

.. code:: json

	{
	  "ENVELOPE": {
	    "STATE": "ORIGINATOR_SIGNED",
	    "DECLARHEAD": {
	      "C_DOC": "T01",
	      "C_DOC_SUB": "001",
	      "C_DOC_VER": "02"
	    },
	    "DECLARBODY": {
	      "TYPE": "CORE",
	      "STAKE": "ORIGINATOR",
	      "HFILL": "2020-10-22",
	      "HNUM": "Перевезення",
	      "R01G2S": "КК1234КК",
	      "R01G1S": "Ферарі",
	      "R01G11S": "Ферарі",
	      "R01G3S": "Червона",
	      "DOCUMENT_PLACE": "Київ",
	      "R01G10S": "приміське",
	      "SEAL_NO": "515151",
	      "TEMPERATURE": "-5...+10",
	      "R02G11S": "31600022",
	      "R02G1S": "ТОВ \"Перевiзник\"",
	      "R02G3S": "Васян",
	      "R02G31S": "Вася",
	      "R02G32S": "Васильович",
	      "R02G4S": "GHJ000000",
	      "R02G21S": "31600038",
	      "R02G2S": "Компанiя \"Вантажоотримувач\"",
	      "HTIN": "31600017",
	      "HNAME": "Компанiя \"Вантажовiдправник\"",
	      "HLOC": "Kyiv, Kyiv",
	      "R04G1S": "31600038",
	      "R04G2S": "Компанiя \"Вантажоотримувач\"",
	      "R04G3S": "Kyiv, Street2",
	      "R05G2S": "Киев, пр. Победы",
	      "R05G21": "8000000000",
	      "R05G4S": "м. Харків, вул. Тестова, 1",
	      "R05G41": "6300000000",
	      "T1RXXXXG81S": [
	        {
	          "ROWNUM": 1,
	          "message": "1"
	        }
	      ],
	      "T1RXXXXG9S": [
	        {
	          "ROWNUM": 1
	        }
	      ],
	      "T1RXXXXG10": [
	        {
	          "ROWNUM": 1
	        }
	      ],
	      "T1RXXXXG13S": [
	        {
	          "ROWNUM": 1
	        }
	      ],
	      "T1RXXXXG15": [
	        {
	          "ROWNUM": 1,
	          "message": "1"
	        }
	      ],
	      "T1RXXXXG14S": [
	        {
	          "ROWNUM": 1
	        }
	      ],
	      "T1RXXXXG11": [
	        {
	          "ROWNUM": 1
	        }
	      ],
	      "T1RXXXXG12": [
	        {
	          "ROWNUM": 1,
	          "message": ""
	        }
	      ],
	      "T1RXXXXG82": [
	        {
	          "ROWNUM": 1,
	          "message": ""
	        }
	      ],
	      "R013G1": 1,
	      "R013G2S": "1_одна ціла",
	      "R08G2": 1,
	      "DATE_ARRIVAL_LOAD": "2020-10-22",
	      "R08G31": 18,
	      "R08G32": 30,
	      "DATE_DEPARTURE_LOAD": "2020-10-22",
	      "R08G41": 18,
	      "R08G42": 30,
	      "R08G51": 18,
	      "R08G52": 30,
	      "R017G11S": "уіаа",
	      "R017G1S": "впвпкп",
	      "R001G10": 1,
	      "R012G3S": "одне",
	      "R001G12": 1,
	      "R010G3S": "одна грн 0 коп",
	      "R011G1": 0.17
	    },
	    "DECLAREXT": {
	      "EXTENSION": []
	    }
	  }
	}

Таблиця 1 - Опис параметрів об'єкта **CONSIGNOR_ETTN**

.. csv-table:: 
  :file: for_csv/CONSIGNOR_ETTN_REQUEST.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **CONSIGNOR_SIGN_ENVELOPE**

.. csv-table:: 
  :file: for_csv/CONSIGNOR_SIGN_ENVELOPE.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **ETTN_HEAD**

.. csv-table:: 
  :file: for_csv/ETTN_HEAD.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **ETTN_BODY**

.. csv-table:: 
  :file: for_csv/ETTN_BODY.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **DECLAR_SECURITY**

.. csv-table:: 
  :file: for_csv/DECLAR_SECURITY.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 6 - Опис параметрів об'єкта **DECLAREXT**

.. csv-table:: 
  :file: for_csv/DECLAREXT.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 7 - Опис параметрів об'єкта **EXTENSION**

.. csv-table:: 
  :file: for_csv/EXTENSION.csv
  :widths:  1, 5, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 8 - Опис параметрів об'єкта **RXXType**

.. csv-table:: 
  :file: for_csv/RXXType.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0