##########################################################################################################################
**Обмеження (LIMITS)**
##########################################################################################################################

.. epigraph::

   Обмеження (LIMITS) на замовлення відправляється Продавцем (Виробником); в документі вказуються ціни та кількості по формуванню замовлення у вказаного Покупця (Дистриб'ютора).

**XML:**

.. code:: xml

   <DISTRIBEX_LIMITS>
   <HEAD>
      <SENDER>9876543210123</SENDER>
      <RECIPIENT>3210987654321</RECIPIENT>
         <LIMITS>
               <LIMIT>
                  <NAME>min_sum_nds</NAME>
                  <VALUE>2000.00</VALUE>
               </LIMIT>
               <LIMIT>
                  <NAME>max_sum_nds</NAME>
                  <VALUE>20000.00</VALUE>
               </LIMIT>
               <LIMIT>
                  <NAME>credit_limit</NAME>
                  <VALUE>100000.00</VALUE>
               </LIMIT>
               <LIMIT>
                  <NAME>max_weight</NAME>
                  <VALUE>500.000</VALUE>
               </LIMIT>
               <LIMIT>
                  <NAME>max_pos_qty</NAME>
                  <VALUE>300</VALUE>
               </LIMIT>
               <LIMIT>
                  <NAME>max_pack_qty</NAME>
                  <VALUE>350</VALUE>
               </LIMIT>
               <LIMIT>
                  <NAME>max_pallet_qty</NAME>
                  <VALUE>12</VALUE>
               </LIMIT>
               <LIMIT>
                  <NAME>multiplicity_packing</NAME>
                  <VALUE>0</VALUE>
               </LIMIT>
         </LIMITS>
   </HEAD>
   </DISTRIBEX_LIMITS>

-------------------------

.. csv-table:: Обмеження (LIMITS)
  :file: files/LIMITS.csv
  :widths:  40, 7, 12, 41
  :header-rows: 1

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

.. [#] елементи структури мають наступний вигляд:

   * параметрЗіЗначенням;
   * **об'єктЗПараметрами**;
   * :orange:`масивОб'єктів`;
   * жовтим фоном виділяються комірки, в яких відбувались останні зміни
