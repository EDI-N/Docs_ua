Cхема документообігу "Акт примусового завершення е-ТТН" (StopAct)
#####################################################################################################################

.. role:: red

.. role:: underline

.. role:: green

.. role:: purple

----------------------------------------------------

.. attention::
   Акт складається Замовником або Перевізником.  В залежності від того, хто є ініціатором Акта, буде відрізнятися послідовність його підписання:

   1. Якщо ініціатором Акта є Перевізник, то документ буде підписано спочатку Перевізником, потім Замовником.
   2. Якщо ініціатором Акта є Замовник, то документ буде підписано спочатку Замовником, потім Перевізником.

----------------------------------------------------

1)

.. image:: pics/StopActv3_API_work_002.png
   :align: center
   :width: 600px

.. csv-table:: 
  :file: StopActv3_API_work_001.csv
  :widths:  40, 40
  :stub-columns: 0

-----------------------------------------------

2)

.. image:: pics/StopActv3_API_work_003.png
   :align: center
   :width: 600px

.. csv-table:: 
  :file: StopActv3_API_work_002.csv
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


