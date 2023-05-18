Пряма схема документообігу е-ТТН v3
#############################################################

.. role:: red

.. role:: underline

.. role:: green

.. role:: purple

----------------------------------------------------

.. image:: pics/ETTNv3_API_schema_004.png
   :align: center

- * - «Акт про відмову вантажити» (LoadRejectAct) / «Акт примусового завершення е-ТТН» (StopAct)
- ** - «Акт розбіжностей про вантаж» (DisagreementAct) / «Акт примусового завершення е-ТТН» (StopAct) / «Акт перепломбування» (ResealingAct) / «Акт розвантаження на проміжному складі» (StorageDeliveryAct) / «Акт завантаження на проміжному складі» (StoragePickUpAct) / «Акт перевантаження» (ReloadAct) / «Акт про заміну пункту призначення вантажу» (ConsigneeChangeAct) / «Акт коригування» (AdjustmentAct)

----------------------------------------------------

.. csv-table:: 
  :file: ETTNv3_API_work.csv
  :widths:  40, 40
  :stub-columns: 0

-----------------------------------------------

.. toggle-header::
    :header: **Додаткові методи API**

    * `Отримання інформації про підписантів <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/GetSignersInfo.html>`__
    * `Отримати значення з віртуального довідника <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/GetVirtualDictionary.html>`__
    * `Додати значення в довідник <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/PostVirtualDictionaryValues.html>`__
    * `Отримання інформації про організацію по Назві/ІПН/КПП/GLN <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/OasIdentifiers.html>`__
    * `Отримання мета-даних документа <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/GetDocument.html>`__
    * `Отримання списку подій з ЦБД <https://wiki.edin.ua/uk/latest/API_ETTNv3_1/Methods/MintransEvents.html>`__

