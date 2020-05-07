Опис помилок роботи методу для відправки скарг на сертифікати
*********************************************************************

1) У разі коли сертифікат (``"cert_id":"21478457735367345"``) не належить користувачу, під яким пройдена авторизація:

.. code:: ruby

	{
	  "varMessage": "Сертификат не найден",
	  "intCode": 404
	}

2) Якщо в запиті був переданий неіснуючий тип помилки (``"type_error":"100"``):

.. code:: ruby

  {
    "varMessage": "Недопустимый формат поля ",
    "type_error": "100",
    "intCode": 400
  }

3) Якщо в запиті передано опис помилки довжиною більше 500 символів (``"text":"jl4k...8kk1"``):

.. code:: ruby

  {
  "varMessage": "Недопустимый формат поля "text" Тест тест jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4kjl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk181iq15utvdqtihghk38kk1jl4k81iq15utvdqtihghk38kk1, максимальное количество символов 500",
  "intCode": 400
  }

4) Якщо помилка була відправлена раніше:

.. code:: ruby

  {
    "varMessage": "Уведомление об ошибке было отправлено ранее",
    "intCode": 400
  }




