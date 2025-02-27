#################################################################################################
**Приклад JSON фінальної версії е-ТТН (разом зі змінами, що були внесені актами) (Response)**
#################################################################################################

**JSON:**

.. code:: json

	{
	  "STATE": "RECIPIENT_SIGNED",
	  "ENVELOPE": {
	    "STATE": "TRANSPORTER_SIGNED_LOADED",
	    "ENVELOPE": {
	      "STATE": "ORIGINATOR_SIGNED",
	      "DECLARHEAD": {
	        "C_DOC": "T01",
	        "C_DOC_SUB": "001",
	        "C_DOC_VER": "02"
	      },
	      "DECLARBODY": {
	        "STAKE": "ORIGINATOR",
	        "TYPE": "CORE",
	        "HFILL": "2021-05-11",
	        "HNUM": "test_final",
	        "DOCUMENT_PLACE": "test",
	        "R01G1S": "Тестовая марка 2",
	        "R01G11S": "Тестовая модель 2",
	        "R01G2S": "AA0001AA",
	        "R01G3S": "Тестовый тип 2",
	        "R01G10S": "централізоване перевезення",
	        "R02G11S": "31600022",
	        "R02G1S": "ТОВ \"Перевiзник\"",
	        "R02G21S": "31600017",
	        "R02G2S": "Компанiя \"Вантажовiдправник\"",
	        "R02G3S": "Сідоров",
	        "R02G31S": "Сергій",
	        "R02G32S": "Сергійович",
	        "R02G4S": "ABN876340",
	        "HTIN": "31600017",
	        "HNAME": "Компанiя \"Вантажовiдправник\"",
	        "HLOC": "Kyiv, Kyiv",
	        "R04G1S": "31600038",
	        "R04G2S": "Компанiя \"Вантажоотримувач\"",
	        "R04G3S": "Kyiv, Street2",
	        "R05G21": "6810100000",
	        "R05G2S": "Kyiv, Street1",
	        "R05G41": "0122080810",
	        "R05G4S": "Kyiv, Stree3",
	        "R012G3S": "тридцять два",
	        "R013G1": "571.755",
	        "R013G2S": "571.755_п'ятсот сімдесят одна ціла сімсот п'ятдесят п'ять тисячних",
	        "R010G3S": "одна тисяча сто двадцять п'ять грн 72 коп",
	        "R011G1": "187.62",
	        "T1RXXXXG81S": [
	          {
	            "ROWNUM": "1",
	            "message": "Датчик руху 1"
	          },
	          {
	            "ROWNUM": "2",
	            "message": "Датчик руху 2"
	          },
	          {
	            "ROWNUM": "3",
	            "message": "Датчик руху 3"
	          },
	          {
	            "ROWNUM": "4",
	            "message": "Датчик руху 4"
	          },
	          {
	            "ROWNUM": "5",
	            "message": "Датчик руху 5"
	          },
	          {
	            "ROWNUM": "6",
	            "message": "Датчик руху 6"
	          }
	        ],
	        "T1RXXXXG82": [
	          {
	            "ROWNUM": "1"
	          },
	          {
	            "ROWNUM": "2"
	          },
	          {
	            "ROWNUM": "3"
	          },
	          {
	            "ROWNUM": "4"
	          },
	          {
	            "ROWNUM": "5"
	          },
	          {
	            "ROWNUM": "6"
	          }
	        ],
	        "T1RXXXXG9S": [
	          {
	            "ROWNUM": "1",
	            "message": "штука"
	          },
	          {
	            "ROWNUM": "2",
	            "message": "палета"
	          },
	          {
	            "ROWNUM": "3",
	            "message": "штука"
	          },
	          {
	            "ROWNUM": "4",
	            "message": "ящик"
	          },
	          {
	            "ROWNUM": "5",
	            "message": "штука"
	          },
	          {
	            "ROWNUM": "6",
	            "message": "штука"
	          }
	        ],
	        "T1RXXXXG10": [
	          {
	            "ROWNUM": "1",
	            "message": "15"
	          },
	          {
	            "ROWNUM": "2"
	          },
	          {
	            "ROWNUM": "3"
	          },
	          {
	            "ROWNUM": "4",
	            "message": "2"
	          },
	          {
	            "ROWNUM": "5"
	          },
	          {
	            "ROWNUM": "6",
	            "message": "15"
	          }
	        ],
	        "T1RXXXXG11": [
	          {
	            "ROWNUM": "1",
	            "message": "100.00"
	          },
	          {
	            "ROWNUM": "2",
	            "message": "50.00"
	          },
	          {
	            "ROWNUM": "3"
	          },
	          {
	            "ROWNUM": "4",
	            "message": "25.00"
	          },
	          {
	            "ROWNUM": "5",
	            "message": "10.25"
	          },
	          {
	            "ROWNUM": "6",
	            "message": "30.10"
	          }
	        ],
	        "T1RXXXXG12": [
	          {
	            "ROWNUM": "1",
	            "message": "240.00"
	          },
	          {
	            "ROWNUM": "2",
	            "message": "240.00"
	          },
	          {
	            "ROWNUM": "3"
	          },
	          {
	            "ROWNUM": "4",
	            "message": "60.00"
	          },
	          {
	            "ROWNUM": "5",
	            "message": "369.00"
	          },
	          {
	            "ROWNUM": "6",
	            "message": "216.72"
	          }
	        ],
	        "T1RXXXXG13S": [
	          {
	            "ROWNUM": "1"
	          },
	          {
	            "ROWNUM": "2"
	          },
	          {
	            "ROWNUM": "3"
	          },
	          {
	            "ROWNUM": "4"
	          },
	          {
	            "ROWNUM": "5"
	          },
	          {
	            "ROWNUM": "6"
	          }
	        ],
	        "T1RXXXXG14S": [
	          {
	            "ROWNUM": "1"
	          },
	          {
	            "ROWNUM": "2"
	          },
	          {
	            "ROWNUM": "3"
	          },
	          {
	            "ROWNUM": "4"
	          },
	          {
	            "ROWNUM": "5"
	          },
	          {
	            "ROWNUM": "6"
	          }
	        ],
	        "T1RXXXXG15": [
	          {
	            "ROWNUM": "1",
	            "message": "50.65"
	          },
	          {
	            "ROWNUM": "2",
	            "message": "130.35"
	          },
	          {
	            "ROWNUM": "3",
	            "message": "200.90"
	          },
	          {
	            "ROWNUM": "4",
	            "message": "43.7"
	          },
	          {
	            "ROWNUM": "5",
	            "message": "10.60"
	          },
	          {
	            "ROWNUM": "6",
	            "message": "135.555"
	          }
	        ],
	        "R001G10": "32",
	        "R001G12": "1125.72",
	        "R08G2": "571.755",
	        "DATE_ARRIVAL_LOAD": "2021-05-11",
	        "R08G31": 20,
	        "R08G32": 0,
	        "DATE_DEPARTURE_LOAD": "2021-05-11",
	        "R08G41": 21,
	        "R08G42": 0,
	        "R08G51": 0,
	        "R08G52": 0,
	        "R017G11S": "test",
	        "R017G1S": "test"
	      },
	      "DECLAREXT": {
	        "EXTENSION": [
	          {
	            "STAKE": "RECIPIENT",
	            "TYPE": "QUANTITY",
	            "VISIBLE": "VISIBLE",
	            "CARGO_ROWNUM": "1",
	            "DATA": "2"
	          },
	          {
	            "STAKE": "RECIPIENT",
	            "TYPE": "QUANTITY",
	            "VISIBLE": "VISIBLE",
	            "CARGO_ROWNUM": "2",
	            "DATA": "4"
	          },
	          {
	            "STAKE": "RECIPIENT",
	            "TYPE": "QUANTITY",
	            "VISIBLE": "VISIBLE",
	            "CARGO_ROWNUM": "5",
	            "DATA": "30"
	          },
	          {
	            "STAKE": "RECIPIENT",
	            "TYPE": "QUANTITY",
	            "VISIBLE": "VISIBLE",
	            "CARGO_ROWNUM": "6",
	            "DATA": "6"
	          }
	        ]
	      }
	    },
	    "DECLARBODY": {
	      "STAKE": "TRANSPORTER",
	      "TYPE": "AMENDMENT",
	      "R017G2S": "Водій",
	      "R017G3S": "Дальнобій Едуард Манович"
	    },
	    "DECLAREXT": {}
	  },
	  "DECLARBODY": {
	    "STAKE": "RECIPIENT",
	    "TYPE": "AMENDMENT"
	  },
	  "DECLAREXT": {}
	}


