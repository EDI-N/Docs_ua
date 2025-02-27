####################################################################
**Дані про підписанта (об'єкт ExEndUserSignInfo)**
####################################################################

**JSON:**

.. code:: json

  {
      "isStamp": false,
      "ownerInfo":
      {
          "issuer": "O=ТОВ \"Центр сертифікації ключів \"Україна\";CN=КНЕДП ТОВ \"Центр сертифікації ключів \"Україна\";Serial=UA-36865753-2101;C=UA;L=Київ;OI=NTRUA-36865753",
          "issuerCN": "КНЕДП ТОВ \"Центр сертифікації ключів \"Україна\"",
          "serial": "5897920700000000000000000000000000000001",
          "subject": "O=ТОВ \"Вайтдок\";Title=1;CN=Іванов Іван Іванович;SN=Іванов;GivenName=Іван Іванович;Serial=1234567890D;C=UA;L=місто КИЇВ",
          "subjCN": "Іванов Іван Іванович",
          "subjOrg": "ТОВ \"Вайтдок\"",
          "subjTitle": "1",
          "subjLocality": "місто КИЇВ",
          "subjFullName": "Іванов Іван Іванович",
          "subjEMail": "info@uakey.com.ua",
          "subjEDRPOUCode": "12345678",
          "subjDRFOCode": "1234567890"
      },
      "timeInfo":
      {
          "isTimeAvail": true,
          "isTimeStamp": true,
          "dateTime": 1703868299
      },
      "certificateInfo":
      {
          "issuer": "O=ТОВ \"Центр сертифікації ключів \"Україна\";CN=КНЕДП ТОВ \"Центр сертифікації ключів \"Україна\";Serial=UA-36865753-2101;C=UA;L=Київ;OI=NTRUA-36865753",
          "issuerCN": "КНЕДП ТОВ \"Центр сертифікації ключів \"Україна\"",
          "serial": "5897920700000000000000000000000000000001",
          "subject": "O=ТОВ \"Вайтдок\";Title=1;CN=Іванов Іван Іванович;SN=Іванов;GivenName=Іван Іванович;Serial=1234567890D;C=UA;L=місто КИЇВ",
          "subjCN": "Іванов Іван Іванович",
          "subjOrg": "ТОВ \"Вайтдок\"",
          "subjTitle": "1",
          "subjLocality": "місто КИЇВ",
          "subjFullName": "Іванов Іван Іванович",
          "subjEMail": "info@uakey.com.ua",
          "subjEDRPOUCode": "12345678",
          "subjDRFOCode": "1234567890",
          "certBeginTime": "Mar 30, 2022, 5:56:29 PM",
          "certEndTime": "Mar 29, 2024, 11:59:59 PM",
          "privKeyTimesAvail": false,
          "privKeyBeginTime": "Mar 30, 2022, 5:56:29 PM",
          "privKeyEndTime": "Mar 29, 2024, 11:59:59 PM",
          "publicKeyBits": 264,
          "publicKey": "33 AC 59 40 D1 B8 6C 6D C3 9D 55 C7 43 A0 51 8F 55 09 6A D4 AA 26 98 86 08 0D 32 B1 71 3D E4 02 00 ",
          "publicKeyID": "F1 73 2A 78 C0 F7 86 A2 3D B6 18 AF DE 4A 87 89 20 EE 0C FE F4 A0 12 06 1B 95 BB 0A BD 01 77 1F ",
          "issuerPublicKeyID": "52 ED 74 ED 3A E9 49 36 C5 78 B5 A0 60 0B 65 F1 10 09 BF EF 5F 1E ED 43 CD 23 A4 98 F0 7D E3 80 ",
          "keyUsage": "ЕЦП, Неспростовність",
          "extKeyUsages": "1.2.804.2.1.1.1.11.36865753.1",
          "policies": "Правила посиленої сертифікації",
          "crlDistribPoint1": "http://uakey.com.ua/list.crl",
          "crlDistribPoint2": "http://uakey.com.ua/list-delta.crl",
          "powerCert": true,
          "subjTypeAvail": false,
          "subjCA": false,
          "chainLength": 0,
          "publicKeyType": 1,
          "keyUsageType": 3,
          "OCSPAccessInfo": "http://uakey.com.ua/services/ocsp/",
          "issuerAccessInfo": "http://uakey.com.ua/uakeycert.p7b",
          "TSPAccessInfo": "http://uakey.com.ua/services/tsp/",
          "limitValueAvailable": false,
          "limitValue": 0,
          "subjType": 4,
          "subjSubType": 0,
          "subjCountry": "UA",
          "qscd": false,
          "certHashType": 1
      }
  }

Таблиця 1 - Опис параметрів об'єкта **ExEndUserSignInfo**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/ExEndUserSignInfo.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **EndUserOwnerInfo**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/EndUserOwnerInfo.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **ExEndUserTimeInfo**

.. csv-table:: 
  :file: ../../../integration_2_0/APIv2/Methods/EveryBody/for_csv/ExEndUserTimeInfo.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0
