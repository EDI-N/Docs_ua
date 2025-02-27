Опис помилок роботи методу створення картки сертифіката
*********************************************************************

1) Якщо в запиті не заповнено одне з обов'язкових полей (**cert_number / cert_date / cert_sub_type / cert_type / cert_start_date / cert_end_date / cert_part_number / cert_gln_creator**):

.. code:: ruby

  {
    "varMessage": "Не заполнено обязательное поле "cert_number",
    "intCode": 400
  }

2) Якщо в запиті в полях **cert_number / cert_part_number / cert_lot_number / cert_gtd** передана кількість символів більша допустимого (таблиця 1), наприклад, ``"поле":"r5hgjj4h70it9eieg4356ojop5r5hgjj4h70it9eieg4356ojop5r5hgjj4h70it9eieg4356ojop5r5hgjj4h70it9eieg4356ojop5"``: 

.. code:: ruby

  {
    "varMessage": "Недопустимый формат поля "поле" r5hgjj4h70it9eieg4356ojop5r5hgjj4h70it9eieg4356ojop5r5hgjj4h70it9eieg4356ojop5r5hgjj4h70it9eieg4356ojop5, максимальное количество символов N",
    "intCode": 400
  }

3) Якщо в запиті в полі **cert_gln_creator** передано значення неправильного формату (``"cert_gln_creator":"sdfgsdfsfdgsdf"``):

.. code:: ruby

  {
    "varMessage": "Недопустимый формат поля \"cert_gln_creator\" sdfgsdfsfdgsdf",
    "intCode": 400
  }

4) Якщо в запиті в полі **cert_sub_type** передано некорректне значення ключа (``"cert_sub_type":"fsew"``):

.. code:: ruby

  {
    "varMessage": "Недопустимый формат поля \"cert_sub_type\" fsew, вид сертификата не найден",
    "intCode": 400
  }

5) Якщо в запиті в полі **cert_type** передано некорректне значення ключа (``"cert_type":"fsew"``):

.. code:: ruby

  {
    "varMessage": "Недопустимый формат поля \"cert_type\" fsew, тип сертификата не найден",
    "intCode": 400
  }

6) Якщо в запиті в "полі_дати" ( **cert_date / cert_start_date / cert_end_date** ) передано некорректне значення ключа (відмінне від DD.MM.YYYY), наприклад, ``"поле_дата":"wetryert"``:

.. code:: ruby

  {
    "varMessage": "Недопустимый формат поля \"поле_дата\" wetryert, формат даты DD.MM.YYYY",
    "intCode": 400
  }

7) Якщо в запиті передано номер сертифіката (**cert_number**), котрий вже є під GLN користувача (дублювання):

.. code:: ruby

  {
    "varMessage": "Сертификат с номером Test_api_20 уже создан",
    "intCode": 404
  }

8) Якщо в запиті передано GLN (``"cert_gln_creator":"4607164999995"``), котрий не підв'язаний під користувачем:

.. code:: ruby

  {
    "varMessage": "Gln 4607164999995 не найден",
    "intCode": 404
  }

9) Якщо дата початку (**cert_start_date**) більша за дату закінчення (**cert_end_date**):

.. code:: ruby

  {
    "varMessage": "Дата начала 30.06.2018 не может быть больше даты окончания 12.05.2018",
    "intCode": 400
  }


