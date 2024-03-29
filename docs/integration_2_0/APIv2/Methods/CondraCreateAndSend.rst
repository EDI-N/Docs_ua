#################################################################################################################
**Створення й відправка "Універсального/неструктурованого документа" (CONDRA) без створення чернетки**
#################################################################################################################

Для роботи з цим методом користувач повинен бути `авторизованим <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__ .

За допомогою цього POST методу **/api/v2/eds/doc/condra/create_and_send** відбувається одночасне створення та відправка "Універсального/неструктурованого документа" (CONDRA).

.. csv-table:: 
  :file: CondraCreateAndSend.csv
  :widths:  10, 41
  :stub-columns: 0

**RESPONSE**

**doc_uuid** - ідентифікатор документа на платформі EDIN 2.0;

**chain_uuid** - ідентифікатор ланцюжка, в якому знаходиться документ.

**Приклад відповіді (JSON):**

.. code:: json

   {
      "doc_uuid": "0ca98f00-6988-4aac-a660-8f289a24fe2d",
      "chain_uuid": "4838e8fe-c0aa-4fe9-ad78-74832d9e2b59"
   }

