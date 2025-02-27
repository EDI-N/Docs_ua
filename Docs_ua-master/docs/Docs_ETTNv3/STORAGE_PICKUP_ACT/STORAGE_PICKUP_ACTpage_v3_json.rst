##########################################################################################################################
**"Акт завантаження на проміжному складі"**
##########################################################################################################################

.. https://docs.google.com/spreadsheets/d/1eiLgIFbZBOK9hXDf2pirKB88izrdOqj1vSdV3R8tvbM/edit?pli=1#gid=1342313557

.. important::
   Зверніть увагу, що поля в json та `в xml форматі <https://wiki.edin.ua/uk/latest/Docs_ETTNv3/STORAGE_PICKUP_ACT/STORAGE_PICKUP_ACTpage_v3.html>`__ відрізняються! 

**JSON:**

.. code:: json

  {
    "ram": "urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:103",
    "udt": "urn:un:unece:uncefact:data:standard:UnqualifiedDataType:27",
    "qdt": "urn:un:unece:uncefact:data:standard:QualifiedDataType:103",
    "uas": "urn:ua:signatures:SignaturesExtensions:1",
    "act": {
      "documentContext": {
        "transactionID": "0",
        "documentCode": {
          "id": "urn:ua:e-transport.gov.ua:act:01"
        },
        "documentSubCode": {
          "id": "urn:ua:e-transport.gov.ua:act:01:storage_pickup:001"
        }
      },
      "exchangedDocument": {
        "id": "123123",
        "issueDateTime": {
          "dateTime": "2022-10-26T21:32:52+02:00"
        },
        "issueLogisticsLocation": {
          "name": "Місце складання документу",
          "description": "79000, м.Львів, вул. Словацького, 1"
        },
        "includedNote": []
      },
      "storagePickupActPayload": {
        "previousAdministrativeReferencedDocuments": [
          {
            "typeCode": "730",
            "id": "79bb3ebe-0439-4b53-8361-be6c70731d2c",
            "formattedIssueDateTime": {
              "dateTime": "2023-07-11T12:08:00.000Z"
            }
          },
          {
            "typeCode": "136",
            "id": "79bb3ebe-0439-4b53-8361-682273105c",
            "formattedIssueDateTime": {
              "dateTime": "2023-07-11T12:08:00.000Z"
            }
          }
        ]
      },
      "storagePickupActPayload": {
        "storageTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "86726491"
          },
          "name": "ТОВ \"ТЕСТ 5\"",
          "roleCode": "WH",
          "specifiedGovernmentRegistrations": [
            {
              "id": "9864065748137",
              "typeCode": "TRADEPARTY_GLN"
            }
          ]
        },
        "carrierTradeParty": {
          "id": {
            "schemeAgencyID": "ЄДРПОУ",
            "value": "56543433"
          },
          "name": "ТОВ \"ТЕСТ 3\"",
          "roleCode": "CA",
          "tradeContact": {
            "personName": "Петренко Петро Петрович",
            "telephoneUniversalCommunication": {
              "completeNumber": "0443332211"
            },
            "mobileTelephoneUniversalCommunication": {
              "completeNumber": "0933332211"
            },
            "emailURIUniversalCommunication": {
              "completeNumber": "ivan@yahoo.com"
            }
          },
          "postalTradeAddress": {
            "postCode": "01001",
            "streetName": "вул.Хрещатик, 23",
            "cityName": "Київ",
            "countryID": "UA"
          },
          "taxRegistration": {
            "id": "1234567890"
          },
          "specifiedGovernmentRegistrations": [
            {
              "id": "9864065748120",
              "typeCode": "TRADEPARTY_GLN"
            }
          ]
        },
        "storageLogisticsLocation": {
          "id": {
            "schemeAgencyID": "КАТОТТГ",
            "value": "UA18040190010057814"
          },
          "name": "Склад в Житомирі",
          "description": "79000, м.Житомир, вул. Гусака, 1"
        },
        "utilizedLogisticsTransportEquipment": [
          {
            "id": "АА2525ВВ",
            "applicableNotes": [
              {
                "contentCode": "BRAND",
                "content": "VOLVO"
              },
              {
                "contentCode": "MODEL",
                "content": "КЕ-578"
              }
            ]
          }
        ],
        "pickupTransportEvent": {
          "certifyingTradeParties": [
            {
              "id": {
                "schemeAgencyID": "РНОКПП",
                "value": "1010101013"
              },
              "name": "Водій",
              "roleCode": "DR",
              "tradeContact": {
                "personName": "Петренко Петро Петрович"
              }
            }
          ]
        },
        "storageNotes": "Потрібно доставити вантаж отримувачу"
      },
      "certifyingPartyPayload": {
        "certifyingTradeParty": [
          {
            "id": {
              "schemeAgencyID": "РНОКПП",
              "value": "4444444400"
            },
            "name": "Директор",
            "roleCode": "WH",
            "tradeContact": {
              "personName": "Іванов Іван Іванович"
            }
          },
          {
            "id": {
              "schemeAgencyID": "РНОКПП",
              "value": "1010101013"
            },
            "name": "Директор",
            "roleCode": "DR",
            "tradeContact": {
              "personName": "Петренко Петро Петрович"
            }
          }
        ]
      }
    }
  }

.. role:: orange

.. raw:: html

    <embed>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPbzkPgNe3yqDqIzd_3PyYlNGPbaL27tiF7z5CPd5iexGV74qv6KkAGquRrJL9OQ/pubhtml?gid=677119598&single=true" width="1100" height="4350" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </embed>

-------------------------

.. [#] Під визначенням колонки **Тип поля** мається на увазі скорочене позначення:

   * M (mandatory) — обов'язкові до заповнення поля;
   * O (optional) — необов'язкові (опціональні) до заповнення поля.

.. [#] елементи структури мають наступний вигляд:

   * параметрЗіЗначенням;
   * **об'єктЗПараметрами**;
   * :orange:`масивОб'єктів`;
   * жовтим фоном виділяються комірки, в яких відбувались останні зміни

.. data from table (remember to renew time to time)

.. raw:: html

  <!-- <div>№ з/п,Параметр²,Тип¹,Формат,Опис
  I,act,M,,(початок змісту документа)
  1,documentContext,M,,Технічні дані
  1.1,transactionID,M,string,Номер версії документа (транзакції) в ланцюгу підписання документів
  1.2.1,documentCode.id,M,string,код документа
  1.3.1,documentSubCode.id,M,unsignedByte,підтип документа
  2,exchangedDocument,M,,Реквізити Акта
  2.1,id,M,string,номер документа
  2.2.1,issueDateTime.dateTime,M,datetime (2021-12-13T14:19:23+02:00),Дата і час складання Акта
  2.3,remarks,O,string,Інші примітки
  2.4.1,issueLogisticsLocation.name,M,string,Найменування місця складання Акта
  2.4.2,issueLogisticsLocation.description,M,string,Опис (адреса) місця складання Акта
  3,storagePickupActPayload,M,,Зміст «Акта завантаження на проміжному складі»
  3.1,previousAdministrativeReferencedDocuments (TypeCode=730),M,,"Інформація про е-ТТН, для якої складається акт"
  3.1.1,typeCode,M,decimal,Тип документа (730 - ТТН). Довідник кодів документів
  3.1.2,id,M,string,Номер документа-підстави (ТТН); має відповідати номеру документа ExchangedDocument.ID еТТН
  3.1.3.1,formattedIssueDateTime.dateTime,M,datetime (2021-12-13T14:19:23+02:00),Дата та час документа-підстави (ТТН); має відповідати даті документа ExchangedDocument.IssueDateTime еТТН
  3.1.4,attachedSpecifiedBinaryFile,M,,"Дані е-ТТН, для якої складається акт"
  3.1.4.1,id,M,string,Ідентифікатор (guid) документа-підстави (ТТН); має відповідати document.id еТТН в ЦБД (значення ettnId з методу Отримання списку подій з ЦБД = значення external_doc_id Отримання мета-даних документа)
  3.1.4.2,uriid,O,string,посилання на документ
  3.1.4.3,MIMECode,O,string,MIME типізація
  3.1.4.4,SizeMeasure,O,long,розмір файлу в байтах
  3.2,previousAdministrativeReferencedDocuments (TypeCode=916),M,,"Інформація про Акт розвантаження, до якого складається цей акт"
  3.2.1,typeCode,M,decimal,Тип документа (916 - Акт). Довідник кодів документів
  3.2.2,id,M,string,Номер документа-підстави (Акт); має відповідати номеру документа ExchangedDocument.ID Акта розвантаження
  3.2.3.1,formattedIssueDateTime.dateTime,M,datetime (2021-12-13T14:19:23+02:00),Дата документа-підстави (Акт); має відповідати даті документа ExchangedDocument.IssueDateTime Акта розвантаження
  3.3,previousAdministrativeReferencedDocuments,-/M,,"Інформація про попередній акт, у випадку наступної транзакції"
  3.3.1,typeCode,M,decimal,Тип документа. Довідник кодів документів
  3.3.2,id,M,string,Номер документа-підстави (Акт); має відповідати номеру документа ExchangedDocument.ID Акта
  3.3.3.1,formattedIssueDateTime.dateTime,M,datetime (2021-12-13T14:19:23+02:00),Дата та час документа-підстави (Акта)
  3.4,storageTradeParty,M,,Проміжний склад
  3.4.1.1,id.schemeAgencyID,M,string,ЄДРПОУ Проміжного складу
  3.4.1.2,id.value,M,decimal,Значення
  3.4.2,name,M,string,Повне найменування Проміжного складу
  3.4.3,roleCode,M,string,Роль учасника (Проміжний склад - WH). Довідник ролей
  3.4.4.1,specifiedGovernmentRegistrations.id,M/O,decimal,GLN Проміжного складу (поле обов’язкове до заповнення для відправника транзакції)
  3.4.4.2,specifiedGovernmentRegistrations.typeCode,O,string,"Код типу:
    TRADEPARTY_GLN"
  3.5,carrierTradeParty,M,,Перевізник
  3.5.1.1,id.schemeAgencyID,M,string,ЄДРПОУ Перевізника
  3.5.1.2,id.value,M,decimal,Значення
  3.5.2,name,M,string,Повне найменування Перевізника
  3.5.3,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
  3.5.4,tradeContact,O,,Контакти відповідального представника Перевізника
  3.5.4.1,personName,O,string,ПІБ
  3.5.4.2.1,telephoneUniversalCommunication.completeNumber,O,string,Основний телефон
  3.5.4.3.1,mobileTelephoneUniversalCommunication.completeNumber,O,string,Мобільний телефон
  3.5.4.4.1,emailURIUniversalCommunication.completeNumber,O,string,Електронна адреса
  3.5.5,postalTradeAddress,O,,Юридична адреса Проміжного складу
  3.5.5.1,postCode,O,decimal,Індекс
  3.5.5.2,streetName,M,string,Адреса (назва вулиці + номер будівлі)
  3.5.5.3,cityName,M,string,Місто (назва населеного пункту)
  3.5.5.4,countryID,M,string,Країна (UA)
  3.5.5.5,countrySubDivisionName,O,string,Область та район (за наявності)
  3.5.6,specifiedGovernmentRegistrations,M,,Посвідчення Водія / GLN Водія / GLN компанії-учасника
  3.5.6.1,id,M/O,"* string
  * decimal при typeCode=DRIVER_GLN / TRADEPARTY_GLN","Серія та номер водійського посвідчення Водія (поле обов’язкове до заповнення). Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456

  для typeCode=DRIVER_GLN - GLN Водія (поле опціональне до заповнення)

  для typeCode=TRADEPARTY_GLN - GLN компанії-учасника (поле обов’язкове до заповнення для відправника транзакції)"
  3.5.6.2,typeCode,O,string,"Код типу:
    DRIVER_GLN

  TRADEPARTY_GLN"
  3.6,storageLogisticsLocation,M,,Місцезнаходження складу
  3.6.1.1,id.schemeAgencyID,M,string,КАТОТТГ складу тимчасового зберігання
  3.6.1.2,id.value,M,string,Значення
  3.6.2,name,M,string,Найменування складу тимчасового зберігання
  3.6.3,description,M,string,Опис (адреса) складу тимчасового зберігання
  3.6.4,physicalGeographicalCoordinate,M,,Географічні координати
  3.6.4.1,latitudeMeasure,O,string,Географічні координати (Широта)
  3.6.4.2,longitudeMeasure,O,string,Географічні координати (Довгота)
  3.6.4.3.1,systemId.schemeAgencyID,M/O,decimal,GLN компанії-учасника (поле обов’язкове до заповнення для відправника транзакції)
  3.6.4.3.2,systemId.value,M,decimal,Значення
  3.7,utilizedLogisticsTransportEquipments,M,,"Автомобіль, що завантажується"
  3.7.1,id,M,string,"Реєстраційний номер автомобіля згідно з техпаспортом
    укр.номери: має відповідати одному з патернів для автомобільних номерних знаків

  єврономери: без валідації"
  3.7.2.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування автомобіля"
  3.7.3,settingTransportSettingTemperature,O,,Інструкції з експлуатації
  3.7.3.1,minimum,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
  3.7.3.1.1,unitCode,O,string,код одиниці виміру (CEL)
  3.7.3.1.2,value,O,decimal,Значення
  3.7.3.2,maximum,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
  3.7.3.2.1,unitCode,O,string,код одиниці виміру (CEL)
  3.7.3.2.2,value,O,decimal,Значення
  3.7.4.1,applicableNotes (з кодом BRAND).contentCode,M,string,Код BRAND
  3.7.4.2,applicableNotes (з кодом BRAND).content,M,string,Марка автомобіля згідно з техпаспортом
  3.7.5.1,applicableNotes (з кодом MODEL).contentCode,M,string,Код MODEL
  3.7.5.2,applicableNotes (з кодом MODEL).content,M,string,Модель автомобіля згідно з техпаспортом
  3.7.6.1,applicableNotes (з кодом COLOR).contentCode,O,string,Код COLOR
  3.7.6.2,applicableNotes (з кодом COLOR).content,O,string,Колір автомобіля згідно з техпаспортом
  3.8,utilizedLogisticsTransportEquipments (CategoryCode=TE),O,,"Причіп/напівпричіп, що завантажується"
  3.8.1,id,O,string,Реєстраційний номер причіпа/напівпричіпа згідно з техпаспортом
  3.8.2,categoryCode,O,string,Тип TE - Причіп/напівпричіп
  3.8.3,characteristicCode,O,string,"Код визначення Причіп/напівпричіп:
    14 - Причіп

  17 - Напівпричіп"
  3.8.4.1,affixedLogisticsSeals.id,O,string,"Номер пломби, якою проводилося пломбування причіпа/напівпричіпа"
  3.8.5,settingTransportSettingTemperature,O,,Інструкції з експлуатації
  3.8.5.1,minimum,O,,"Температурний режим, необхідний для перевезення вантажу. Мінімальне значення температури"
  3.8.5.1.1,unitCode,O,string,код одиниці виміру (CEL)
  3.8.5.1.2,value,O,decimal,Значення
  3.8.5.2,maximum,O,,"Температурний режим, необхідний для перевезення вантажу. Максимальне значення температури"
  3.8.5.2.1,unitCode,O,string,код одиниці виміру (CEL)
  3.8.5.2.2,value,O,decimal,Значення
  3.8.6.1,applicableNotes (з кодом BRAND).contentCode,O,string,Код BRAND
  3.8.6.2,applicableNotes (з кодом BRAND).content,O,string,Марка причіпа/напівпричіпа згідно з техпаспортом
  3.8.7.1,applicableNotes (з кодом MODEL).contentCode,O,string,Код MODEL
  3.8.7.2,applicableNotes (з кодом MODEL).content,O,string,Модель причіпа/напівпричіпа згідно з техпаспортом
  3.8.8.1,applicableNotes (з кодом COLOR).contentCode,O,string,Код COLOR
  3.8.8.2,applicableNotes (з кодом COLOR).content,O,string,Колір причіпа/напівпричіпа згідно з техпаспортом
  3.9,pickupTransportEvent,O,,Навантажувальні роботи
  3.9.1,id,O,string,Порядковий номер події (події завжди нумеруються в порядку поступового зростання за принципом N+1)
  3.9.2,typeCode,O,decimal,Тип операції (розвантаження=5). Завжди одне значення (5)
  3.9.3,description,O,string,Опис
  3.9.4.1,actualOccurrenceDateTime.dateTime,O,datetime (2021-12-13T14:19:23+02:00),Дата та час прибуття автомобіля на завантаження
  3.9.5.1,scheduledOccurrenceDateTime.dateTime,O,datetime (2021-12-13T14:19:23+02:00),Дата та час вибуття автомобіля з-під завантаження
  3.9.6,certifyingTradeParties (RoleCode=WH),M,,Інформація про відповідальних осіб Проміжного складу
  3.9.6.1,name,M,string,Посада відповідальної особи Проміжного складу
  3.9.6.2,roleCode,M,string,Роль учасника (Проміжний склад - WH). Довідник ролей
  3.9.6.3.1,tradeContact.personName,M,string,ПІБ відповідальної особи Проміжного складу
  3.9.6.4.1,id.schemeAgencyID,O,string,РНОКПП Проміжного складу
  3.9.6.4.2,id.value,O,decimal,Значення
  3.9.7,certifyingTradeParties (RoleCode=DR),M,,Інформація про водія Перевізника
  3.9.7.1,name,M,string,"Посада водія, що прийняв вантаж"
  3.9.7.2,roleCode,M,string,Роль учасника (Водій - DR). Довідник ролей
  3.9.7.3.1,tradeContact.personName,M,string,"ПІБ водія, що прийняв вантаж"
  3.9.7.4.1,id.schemeAgencyID,O,string,РНОКПП Водія
  3.9.7.4.2,id.value,O,decimal,Значення
  3.9.8,certifyingTradeParties (RoleCode=CA),O,,Інформація про відповідальних осіб Перевізника
  3.9.8.1,name,M,string,Посада відповідальної особи Перевізника
  3.9.8.2,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
  3.9.8.3.1,tradeContact.personName,M,string,ПІБ відповідальної особи Перевізника
  3.9.8.4.1,id.schemeAgencyID,O,string,РНОКПП Перевізника
  3.9.8.4.2,id.value,O,decimal,Значення
  3.9.9.1,applicableNotes (з кодом GROSSWEIGHT).contentCode,O,string,Код GROSSWEIGHT
  3.9.9.2,applicableNotes (з кодом GROSSWEIGHT).content,O,decimal,Маса брутто отриманого вантажу в місці завантаження в кілограмах
  3.9.10.1,applicableNotes (з кодом DOWNTIME).contentCode,O,string,Код DOWNTIME
  3.9.10.2,applicableNotes (з кодом DOWNTIME).content,O,unsignedByte,Час (години) простою під завантаженням
  3.10,storageNotes,M,string,Короткий або повний опис причин складання Акта (Проміжний склад)
  3.11,carrierNotes,O,string,Особливі відмітки / Інформація щодо незгоди зі змістом Акта (Перевізник)
  4,certifyingPartyPayload,M,,Інформація про відповідальних осіб
  4.1,certifyingTradeParty (RoleCode=WH),M,,Інформація про відповідальних осіб Проміжного складу
  4.1.1.1,id.schemeAgencyID,O,string,РНОКПП
  4.1.1.2,id.value,O,decimal,Значення
  4.1.2,name,M,string,Посада відповідальної особи Проміжного складу
  4.1.3,roleCode,M,string,Роль учасника (Проміжний склад - WH). Довідник ролей
  4.1.4.1,tradeContact.personName,M,string,ПІБ відповідальної особи Проміжного складу
  4.2,certifyingTradeParty (RoleCode=DR),M,,"Інформація про водія Перевізника, що здав вантаж"
  4.2.1.1,id.schemeAgencyID,O,string,РНОКПП
  4.2.1.2,id.value,O,decimal,Значення
  4.2.2,name,M,string,Посада Водія
  4.2.3,roleCode,M,string,Роль учасника (Водій - DR). Довідник ролей
  4.2.4.1,tradeContact.personName,M,string,ПІБ водія
  4.2.5.1,specifiedGovernmentRegistrations.id,M,string,"Серія та номер водійського посвідчення Водія. Заповнюється в форматі «3 заголовні кириличні літери + 6 цифр без пробілів», наприклад: DGJ123456, АБВ123456"
  4.3,certifyingTradeParty (RoleCode=CA),O,,Інформація про Перевізника
  4.3.1.1,id.schemeAgencyID,O,string,РНОКПП
  4.3.1.2,id.value,O,decimal,Значення
  4.3.2,name,M,string,Посада Перевізника
  4.3.3,roleCode,M,string,Роль учасника (Перевізник - CA). Довідник ролей
  4.3.4.1,tradeContact.personName,M,string,ПІБ Перевізника
  II,signatureStorage,M,,Підписи
  5,signatures (SigningPartyRoleCode=WH),M,,"КЕП відповідальної особи Проміжного складу, що здає вантаж"
  5.1,signingPartyRoleCode,M,string,Роль підписанта (Проміжний склад - WH). Довідник ролей
  5.2,partySignature,M,string,Підпис (base64 підпису p7s)
  5.3,name,M,string,ПІБ підписанта (відповідальної особи Проміжного складу)
  5.4,position,O,string,Посада підписанта (відповідальної особи Проміжного складу)
  5.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (відповідальної особи Проміжного складу)
  6,signatures (SigningPartyRoleCode=DR),M,,"КЕП Водія, що приймає вантаж"
  6.1,signingPartyRoleCode,M,string,Роль підписанта (Водій - DR). Довідник ролей
  6.2,partySignature,M,string,Підпис (base64 підпису p7s)
  6.3,name,M,string,ПІБ підписанта (Водія)
  6.4,position,O,string,Посада підписанта (Водія)
  6.5.1,specifiedTaxRegistration.id,M,string,РНОКПП підписанта (Водія)
  7,signatures (SigningPartyRoleCode=CA),O,,"КЕП Перевізника, що приймає вантаж"
  7.1,signingPartyRoleCode,O,string,Роль підписанта (Перевізник - CA). Довідник ролей
  7.2,partySignature,O,string,Підпис (base64 підпису p7s)
  7.3,name,O,string,ПІБ підписанта (Перевізника)
  7.4,position,O,string,Посада підписанта (Перевізника)
  7.5.1,specifiedTaxRegistration.id,O,string,РНОКПП підписанта (Перевізника)

.. old style

  Таблиця 1 - Специфікація "Акта завантаження на проміжному складі" (JSON)

  .. csv-table:: 
    :file: for_csv/storagepickup_act_v3_json.csv
    :widths:  1, 1, 5, 12, 41
    :header-rows: 1
    :stub-columns: 0


