📑 API "Certificate" v2
############################

.. hint::
    Всі запити нижче перерахованих API методів сервісу направляються на адресу: https://edo-v2.edin.ua 

Авторизація
==============

+-----------+-----------------------------+--------------------------------------------------------------------------------------------------------------+
| **Метод** |       **URL запиту**        |                                                   **Опис**                                                   |
+===========+=============================+==============================================================================================================+
| POST      | ``/api/authorization/hash`` | `Авторизація <https://wiki.edin.ua/uk/latest/integration_2_0/APIv2/Methods/Authorization.html>`__            |
+-----------+-----------------------------+--------------------------------------------------------------------------------------------------------------+

.. beauty list

.. toctree::
   :hidden:
   :glob:

   /integration_2_0/APIv2/Methods/Authorization
   /integration_2_0/APIv2/Methods/AuthCheck

.. _certificate:

Робота з сертифікатами
=============================================================

+-----------+----------------------------+--------------------------------------------------------------------+
| **Метод** |       **URL запиту**       |                              **Опис**                              |
+===========+============================+====================================================================+
| POST      | ``/api/ecs/certificate``   | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificatePost`         |
+-----------+----------------------------+--------------------------------------------------------------------+
| PUT       | ``/api/ecs/certificate``   | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificatePut`          |
+-----------+----------------------------+--------------------------------------------------------------------+
| GET       | ``/api/ecs/certificate``   | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificateGet`          |
+-----------+----------------------------+--------------------------------------------------------------------+
| DELETE    | ``/api/ecs/certificate``   | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificateDel`          |
+-----------+----------------------------+--------------------------------------------------------------------+
| GET       | ``/api/ecs/body/download`` | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificateBodyDownload` |
+-----------+----------------------------+--------------------------------------------------------------------+
| PUT       | ``/api/ecs/archive``       | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/ArchiveCertificate`      |
+-----------+----------------------------+--------------------------------------------------------------------+
| PUT       | ``/api/ecs/access``        | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/ChangeCertificateAccess` |
+-----------+----------------------------+--------------------------------------------------------------------+
| PUT       | ``/api/ecs/copy``          | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CopyCertificate`         |
+-----------+----------------------------+--------------------------------------------------------------------+
| POST      | ``/api/ecs/search``        | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/SearchCertificates`      |
+-----------+----------------------------+--------------------------------------------------------------------+
| PUT       | ``/api/ecs/products``      | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificateProducts`     |
+-----------+----------------------------+--------------------------------------------------------------------+
| POST      | ``/api/ecs/certificates``  | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/Certificates`            |
+-----------+----------------------------+--------------------------------------------------------------------+
| POST      | ``/api/ecs/certdoc``       | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/Certdoc`                 |
+-----------+----------------------------+--------------------------------------------------------------------+

**Вкладення до сертифікатів:**

+-----------+-------------------+----------------------------------------------------------------+
| **Метод** |  **URL запиту**   |                            **Опис**                            |
+===========+===================+================================================================+
| POST      | ``/api/ecs/body`` | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificateBodyPost` |
+-----------+-------------------+----------------------------------------------------------------+
| PUT       | ``/api/ecs/body`` | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificateBodyPut`  |
+-----------+-------------------+----------------------------------------------------------------+
| GET       | ``/api/ecs/body`` | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificateBodyGet`  |
+-----------+-------------------+----------------------------------------------------------------+
| DELETE    | ``/api/ecs/body`` | :doc:`/Certificate/EDIN_2_0/APIv2/Methods/CertificateBodyDel`  |
+-----------+-------------------+----------------------------------------------------------------+


.. beauty list

.. toctree::
   :hidden:
   :glob:

   Methods/CertificatePost
   Methods/CertificatePut
   Methods/CertificateGet
   Methods/CertificateDel
   Methods/CertificateBodyDownload
   Methods/ArchiveCertificate
   Methods/ChangeCertificateAccess
   Methods/CopyCertificate
   Methods/SearchCertificates
   Methods/CertificateProducts
   Methods/Certificates
   Methods/Certdoc
   Methods/CertificateBodyPost
   Methods/CertificateBodyPut
   Methods/CertificateBodyGet
   Methods/CertificateBodyDel

---------------------------------

.. _cert-errors:

Опис помилок сервісу "Е-Сертифікати"
=========================================================================================

.. csv-table:: 
  :file: cert_errors.csv
  :widths:  10, 20, 20, 40
  :stub-columns: 0

.. _main-errors:

Загальні помилки при роботі з API (всі сервіси EDIN)
=========================================================================================

.. csv-table:: 
  :file: /_constant/common_api_errors.csv
  :widths:  10, 20, 20, 40
  :stub-columns: 0

.. csv-table:: 
  :file: /_constant/main_api_errors.csv
  :widths:  10, 20, 60
  :stub-columns: 0
