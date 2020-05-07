Опис помилок роботи методу для надання доступу до сертифіката
*********************************************************************

1) У разі коли сертифікат (``"cert_id":"21478457735367345"``) не належить користувачу, під яким пройдена авторизація:

.. code:: ruby

	{
	  "varMessage": "Сертификат не найден",
	  "intCode": 404
	}

2) Якщо в запиті був відсутній тип доступу (``"access_type":""``) або був переданий тип доступу, якого немає в довіднику:

.. code:: ruby

	{
	  "varMessage": "Не заполнено обязательное поле \"access_type\"",
	  "intCode": 400
	}

3) Якщо в запиті передано тип доступу "Обмежений доступ" та не заповнено поле "дії над доступом сертифіката" (``"access_action":""``) або це значення відсутнє в довіднику:

.. code:: ruby

	{
	  "varMessage": "Не заполнено обязательное поле \"access_action\"",
	  "intCode": 400
	}

.. code:: ruby

	{
	  "varMessage": "Недопустимый формат поля \"access_action\" 324",
	  "intCode": 400
	}

4) Якщо в запиті не заповнений параметр ``amigos_info``

Приклад **запиту**:

.. code:: ruby

	{
	"varToken":"jl4k81iq15utvdqtihghk38kk1",
	"cert_id":"2173",
	"access_type":"2",
	"access_action":"2"
	}

Приклад **відповіді**:

.. code:: ruby

	{
	  "varMessage": "Не заполнено обязательное поле \"amigos_info\"",
	  "intCode": 400
	}

5) Якщо в запиті не заповнено поле ``gln`` в блоці ``amigos_info``

Приклад **запиту**:

.. code:: ruby

	"amigos_info":[
	    {
	      "gln": "",
	      "isRetailer": true
	    },
	    {
	      "gln": "",
	      "isRetailer": true
	    },
	    {
	      "gln": "4829900023799",
	      "isRetailer": true
	    }
	  ]

Приклад **відповіді**:

.. code:: ruby

	{
	  "varMessage": "Не заполнено обязательное поле \"gln\" в блоке \"amigos_info\"",
	  "intCode": 400
	}

6) Якщо в запиті передано некорректний ``gln`` в блоці ``amigos_info``

Приклад **запиту**:

.. code:: ruby

	"amigos_info":[
	    {
	      "gln": "dfghdfg",
	      "isRetailer": true
	    },
	    {
	      "gln": "dgfhdfg",
	      "isRetailer": true
	    },
	    {
	      "gln": "4829900023799",
	      "isRetailer": true
	    }
	  ]
	}

Приклад **відповіді**:

.. code:: ruby

	{
	  "varMessage": "Недопустимый формат поля \"gln\" dfghdfg в блоке \"amigos_info\"",
	  "intCode": 400
	}

7) Якщо в запиті передано некорректний ``isRetailer`` в блоці ``amigos_info``

Приклад **запиту**:

.. code:: ruby

	"amigos_info":[
	    {
	      "gln": "9864066822430",
	      "isRetailer": "fdsa"
	    },
	    {
	      "gln": "9864064665428",
	      "isRetailer": false
	    },
	    {
	      "gln": "4829900023799",
	      "isRetailer": true
	    }
	  ]
	}

Приклад **відповіді**:

.. code:: ruby

	{
	  "varMessage": "Недопустимый формат поля \"isRetailer\" fdsa в блоке \"amigos_info\"",
	  "intCode": 400
	}

8) Якщо в запиті передано ``gln``, якого немає в БД

Приклад **запиту**:

.. code:: ruby

	"amigos_info":[
	    {
	      "gln": "9008727091081",
	      "isRetailer": false
	    },
	    {
	      "gln": "9008727092026",
	      "isRetailer": false
	    },
	    {
	      "gln": "9008727092071",
	      "isRetailer": false
	    },
	    {
	      "gln": "9008727092033",
	      "isRetailer": false
	    }
	  ]
	}

Приклад **відповіді**:

.. code:: ruby

	{
	  "varMessage": "Не найдены \"gln\" 9008727091081,9008727092026,9008727092071,9008727092033 в блоке \"amigos_info\"",
	  "intCode": 404
	}

9) Якщо в запиті передано ``gln``, що не відносяться до Торгової Мережі

Приклад **запиту**:

.. code:: ruby

	"amigos_info":[
	    {
	      "gln": "9864066822430",
	      "isRetailer": true
	    },
	    {
	      "gln": "9864064665428",
	      "isRetailer": true
	    },
	    {
	      "gln": "4829900023799",
	      "isRetailer": true
	    }
	  ]
	}

Приклад **відповіді**:

.. code:: ruby

	{
	  "varMessage": "Переданные данные в поле \"gln\" 9864066822430,9864064665428  блока \"amigos_info не принадлежат сети\"",
	  "intCode": 404
	}



