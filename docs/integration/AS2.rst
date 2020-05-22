###################
Конфігурація AS2
###################


Mendelson AS2 configuration
==============================================
.. csv-table:: Таблиця 1 - Mendelson AS2 configuration
  :file: Tables/Table_1_Mendelson_AS2_configuration.csv
  :widths:  5, 5

Параметри передачі даних
==============================================
.. csv-table:: Таблиця 2 - Параметри передачі даних
  :file: Tables/Table_2_Parametry_peredachi_dannyh.csv
  :widths:  5, 5, 5
  
AS2 Сертифікування
==============================================
.. csv-table:: Таблиця 3 - AS2 Сертифікування
  :file: Tables/Table_3_AS2_Sert.csv
  :widths:  5, 5


**Сертифікати** використовуються при передачі даних по https, а також для їх шифрування (додаткового в разі передачі по https).

Повний ланцюжок сертифікатів, необхідний для встановлення зв'язку: **root - intermedia - edin**

:download:`Root сертифікат - DigiCert_Global_Root_CA.crt<DigiCert_Global_Root_CA.crt>`

:download:`Сертифікат Intermediate CA - Intermediate_CA.crt<Intermediate_CA.crt>`

:download:`Вкладений сертифікат EDI-N (Organization Validation) - OV_edi-n.com.crt<OV_edi-n.com.crt>`
