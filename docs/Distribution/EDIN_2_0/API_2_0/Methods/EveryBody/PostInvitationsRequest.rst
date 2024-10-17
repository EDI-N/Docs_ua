#########################################################################
**Відправка запрошень Покупцям (ініціатор Продавець (Виробник))**
#########################################################################

Приклади тіл запитів:

**Запросити одного Покупця, приклавши файл-вкладення (pdf):**

.. code:: json

   -----------------------------339686098424586820212953841379
   Content-Disposition: form-data; name="attachment"; filename="_pdf_meme.pdf"
   Content-Type: application/pdf

   (data)

   -----------------------------339686098424586820212953841379--

**Масово запросити Покупців, приклавши файл-вкладення (pdf):**

.. code:: json

   -----------------------------42215802802152663972618512251
   Content-Disposition: form-data; name="json"; filename="json"
   Content-Type: application/json

   [{"buyerContact":"test@gmail.com","buyerIPN":"14360570"},{"buyerContact":"test2@gmail.com","buyerIPN":"14360570"}]
   -----------------------------42215802802152663972618512251
   Content-Disposition: form-data; name="file"; filename="_pdf_meme.pdf"
   Content-Type: application/pdf

   (data)

   -----------------------------42215802802152663972618512251--

Таблиця 1 - Опис параметрів об'єкта **XDistribexInvitation**

.. csv-table:: 
  :file: for_csv/XDistribexInvitation.csv
  :widths:  1, 2, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта Identificator

.. csv-table:: 
  :file: ../../../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/Identificator.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.