#############################################################
**Квитанції документа (масив об'єктів XTicket)**
#############################################################

**JSON:**

.. code:: json

	[
	  {
	    "docID": 3788,
	    "transactionType": 1,
	    "version": 1,
	    "documentType": 59,
	    "date": 1635410558,
	    "uuid": "96c9669f-72eb-4a62-aba5-ccc0cf2b4557",
	    "senderID": 13200757,
	    "recipientID": 15399,
	    "sosID": 0,
	    "status": "00000100",
	    "bodys": [
	      {
	        "docID": 3788,
	        "transactionType": 1,
	        "type": 1,
	        "version": 1
	      }
	    ]
	  },
	  {
	    "docID": 3788,
	    "transactionType": 2,
	    "version": 1,
	    "documentType": 59,
	    "date": 1635410741,
	    "uuid": "648b527c-6a7e-4e50-bc14-8ae6b6b51734",
	    "senderID": 15399,
	    "recipientID": 13200757,
	    "sosID": 0,
	    "status": "00010000",
	    "bodys": [
	      {
	        "docID": 3788,
	        "transactionType": 2,
	        "type": -1,
	        "version": 1
	      },
	      {
	        "docID": 3788,
	        "transactionType": 2,
	        "type": 1,
	        "version": 1
	      }
	    ]
	  }
	]

Таблиця 1 - Опис параметрів об'єкта **XTicket**

.. csv-table:: 
  :file: for_csv/XTicket.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **XTicketBody**

.. csv-table:: 
  :file: for_csv/XTicketBody.csv
  :widths:  1, 19, 41
  :header-rows: 1
  :stub-columns: 0