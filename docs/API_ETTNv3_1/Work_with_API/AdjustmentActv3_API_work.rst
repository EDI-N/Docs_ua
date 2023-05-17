Алгоритм "Акт коригування" (AdjustmentAct)
#####################################################################################################################

.. role:: red

.. role:: underline

.. role:: green

.. role:: purple

----------------------------------------------------

.. attention::
   Акт коригування складається Замовником або будь-яким іншим учасником е-ТТН, що ініціює виправлення помилки. В залежності від стадії перевезення набір сторін-підписувачів може змінюватись. Так, **Акт підписується всіма учасниками перевезення, які заявлені в мета-даних е-ТТН і накладали свій підпис на документ у процесі перевезення** , при цьому учасники, які ще не накладали підпис на е-ТТН (наприклад, Вантажоодержувач), можуть не підписувати Акт.

----------------------------------------------------

Схема роботи з "Актом коригування", створеного на підставі типової е-ТТН, виглядатиме наступним чином:

.. image:: pics/AdjustmentActv3_API_work_002.png
   :align: center
   :width: 800px

-----------------------------------------------

.. csv-table:: 
  :file: AdjustmentActv3_API_work.csv
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

