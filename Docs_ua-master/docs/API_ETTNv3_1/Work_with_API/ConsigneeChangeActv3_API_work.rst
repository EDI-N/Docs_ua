Алгоритми "Акт про заміну пункту призначення вантажу" (ConsigneeChangeAct)
#####################################################################################################################

.. role:: red

.. role:: underline

.. role:: green

.. role:: purple

----------------------------------------------------

.. початок блоку для ConsigneeChangeActInstructions

.. attention::
   В залежності від того, хто є Ініціатором Акта, буде відрізнятися кількість учасників Акта та послідовність його підписання:
   
   1. Якщо ініціатором Акта є **Вантажоодержувач**, то в документа буде три сторони-підписувачі: :green:`"Вантажоодержувач" -> "Перевізник" -> "Замовник"`.
      1.1. Якщо ініціатором Акта є **Вантажоодержувач** і він же є **Замовником**, то повторно документ не підписується: :green:`"Вантажоодержувач" -> "Перевізник"`.
   2. Якщо ініціатором Акта є **Вантажовідправник**, то в документа буде три сторони-підписувачі: :green:`"Вантажовідправник" -> "Перевізник" -> "Замовник"`.
      2.1. Якщо ініціатором Акта є **Вантажовідправник** і він же є **Замовником**, то повторно документ не підписується: :green:`"Вантажовідправник" -> "Перевізник"`.
   3. Якщо ініціатором Акта є **Перевізник**, то в документа буде дві сторони-підписувачі: :green:`"Перевізник" -> "Замовник"`.
   4. Якщо ініціатором Акта є **Замовник**, то в документа буде дві сторони-підписувачі: :green:`"Замовник" -> "Перевізник"`.

.. кінець блоку для ConsigneeChangeActInstructions

----------------------------------------------------

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR4frexHTOelX507gkoPfGk_2ewyRR5FHCiEneMoo1khyjPVcV9631kkj-SbkVgtEJj5LZnhVP4B2qb/pubhtml?gid=397674501&single=true&range=A2:E8" width="1100" height="550" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </embed>

.. important::
   Повний опис всіх додаткових транзакцій та змін, що вносяться в ТТН при формуванні Актів за `посиланням <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Additional_transactions.html>`__.

----------------------------------------------------

1)

.. image:: pics/ConsigneeChangeActv3_API_work_005.png
   :align: center

.. csv-table:: 
  :file: ConsigneeChangeActv3_API_work_001.csv
  :widths:  40, 40
  :stub-columns: 0

-----------------------------------------------

2)

.. image:: pics/ConsigneeChangeActv3_API_work_006.png
   :align: center

.. csv-table:: 
  :file: ConsigneeChangeActv3_API_work_002.csv
  :widths:  40, 40
  :stub-columns: 0

-----------------------------------------------

3)

.. image:: pics/ConsigneeChangeActv3_API_work_007.png
   :align: center
   :width: 900px

.. csv-table:: 
  :file: ConsigneeChangeActv3_API_work_003.csv
  :widths:  40, 40
  :stub-columns: 0

-----------------------------------------------

4)

.. image:: pics/ConsigneeChangeActv3_API_work_008.png
   :align: center
   :width: 900px

.. csv-table:: 
  :file: ConsigneeChangeActv3_API_work_004.csv
  :widths:  40, 40
  :stub-columns: 0

-----------------------------------------------

.. toggle-header::
    :header: **Додаткові методи API**

    * `Отримання інформації про підписантів е-ТТН та Актів v3 (family=7) <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/GetEttnSignInfo.html>`__
    * `Отримати значення з віртуального довідника <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/GetVirtualDictionary.html>`__
    * `Додати значення в довідник <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/PostVirtualDictionaryValues.html>`__
    * `Отримання інформації про організацію по Назві/ІПН/КПП/GLN <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/OasIdentifiers.html>`__
    * `Отримання мета-даних документа <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/GetDocument.html>`__
    * `Отримання списку подій з ЦБД <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/MintransEvents.html>`__


