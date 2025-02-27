#######################################################################################################################################################################################
**Дані по поточному стану балансу, всім активним і доступним тарифним пакетам, історії транзакцій компанії (об'єкт TariffBalanceData)**
#######################################################################################################################################################################################

**JSON:**

.. code:: json

    {
      "tariffProducts": [
        {
          "id": 26,
          "name": "EDI",
          "type": 1,
          "period": 1,
          "multiplier": false,
          "sortPosition": 1,
          "description": "EDI - структуровані стандартизовані документи без використання КЕП.\n*Поставка – ланцюг документів без використання КЕП, який необхідний для виконання постачання товару від постачальника до покупця (мережі, дистриб’ютора, кінцевого покупця).",
          "hasOptions": true,
          "onlyOneTariffByMonth": true,
          "extraTariff": true,
          "billingCountType": 1,
          "shortName": "edi",
          "tariffs": [
            {
              "id": 1706,
              "name": "EDI-5",
              "price": 7.0,
              "priceWithoutVAT": 7.0,
              "limit": 5,
              "currencyID": 0
            },
            {
              "id": 3936,
              "name": "EDI-10",
              "price": 16.0,
              "priceWithoutVAT": 0.0,
              "limit": 10,
              "currencyID": 0
            },
            {
              "id": 3937,
              "name": "EDI-30",
              "price": 39.0,
              "priceWithoutVAT": 0.0,
              "limit": 30,
              "currencyID": 0
            },
            {
              "id": 3938,
              "name": "EDI-60",
              "price": 77.0,
              "priceWithoutVAT": 0.0,
              "limit": 60,
              "currencyID": 0
            },
            {
              "id": 3988,
              "name": "EDI-160",
              "price": 104.0,
              "priceWithoutVAT": 0.0,
              "limit": 160,
              "currencyID": 0
            },
            {
              "id": 3989,
              "name": "EDI-400",
              "price": 177.0,
              "priceWithoutVAT": 0.0,
              "limit": 400,
              "currencyID": 0
            },
            {
              "id": 3990,
              "name": "EDI-1000",
              "price": 272.0,
              "priceWithoutVAT": 0.0,
              "limit": 1000,
              "currencyID": 0
            },
            {
              "id": 3991,
              "name": "EDI-2000",
              "price": 524.0,
              "priceWithoutVAT": 0.0,
              "limit": 2000,
              "currencyID": 0
            },
            {
              "id": 3992,
              "name": "EDI-4000",
              "price": 802.0,
              "priceWithoutVAT": 0.0,
              "limit": 4000,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 27,
          "name": "ЮЗД",
          "type": 1,
          "period": 1,
          "multiplier": false,
          "sortPosition": 2,
          "description": "ЮЗД\nструктуровані та/або неструктуровані документи з використанням КЕП.\n\n*ЮЗД – юридично-значущий документообіг. До ЮЗД входить:\n - Відправка документу з КЕП\n - Підписання у відповідь\n - Отримання підписаного документу, в т.ч. підписаного у відповідь\n - Відмова від підписання\n - Анулювання підписаного документу\n",
          "hasOptions": true,
          "onlyOneTariffByMonth": true,
          "extraTariff": true,
          "billingCountType": 2,
          "shortName": "uzd",
          "tariffs": [
            {
              "id": 3939,
              "name": "ЮЗД-30",
              "price": 18.0,
              "priceWithoutVAT": 0.0,
              "limit": 30,
              "currencyID": 0
            },
            {
              "id": 3940,
              "name": "ЮЗД-150",
              "price": 75.0,
              "priceWithoutVAT": 0.0,
              "limit": 150,
              "currencyID": 0
            },
            {
              "id": 3941,
              "name": "ЮЗД-250",
              "price": 103.0,
              "priceWithoutVAT": 0.0,
              "limit": 250,
              "currencyID": 0
            },
            {
              "id": 3993,
              "name": "ЮЗД-500",
              "price": 204.0,
              "priceWithoutVAT": 0.0,
              "limit": 500,
              "currencyID": 0
            },
            {
              "id": 3994,
              "name": "ЮЗД-700",
              "price": 283.0,
              "priceWithoutVAT": 0.0,
              "limit": 700,
              "currencyID": 0
            },
            {
              "id": 3995,
              "name": "ЮЗД-1000",
              "price": 320.0,
              "priceWithoutVAT": 0.0,
              "limit": 1000,
              "currencyID": 0
            },
            {
              "id": 3996,
              "name": "ЮЗД-2000",
              "price": 577.0,
              "priceWithoutVAT": 0.0,
              "limit": 2000,
              "currencyID": 0
            },
            {
              "id": 4000,
              "name": "ЮЗД-3000",
              "price": 600.0,
              "priceWithoutVAT": 0.0,
              "limit": 3000,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 45,
          "name": "EDI+ЮЗД",
          "type": 1,
          "period": 1,
          "multiplier": false,
          "sortPosition": 3,
          "description": "EDI+ЮЗД\nкомплексний пакет",
          "hasOptions": true,
          "onlyOneTariffByMonth": true,
          "extraTariff": true,
          "billingCountType": 1,
          "shortName": "edi_uzd",
          "tariffs": [
            {
              "id": 1564,
              "name": "EDI+ЮЗД-30",
              "price": 76.0,
              "priceWithoutVAT": 0.0,
              "limit": 30,
              "currencyID": 0
            },
            {
              "id": 1704,
              "name": "EDI+ЮЗД-5",
              "price": 11.0,
              "priceWithoutVAT": 11.0,
              "limit": 5,
              "currencyID": 0
            },
            {
              "id": 3980,
              "name": "EDI+ЮЗД-10",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 10,
              "currencyID": 0
            },
            {
              "id": 3981,
              "name": "EDI+ЮЗД-30",
              "price": 76.0,
              "priceWithoutVAT": 0.0,
              "limit": 30,
              "currencyID": 0
            },
            {
              "id": 3982,
              "name": "EDI+ЮЗД-60",
              "price": 158.0,
              "priceWithoutVAT": 0.0,
              "limit": 60,
              "currencyID": 0
            },
            {
              "id": 3983,
              "name": "EDI+ЮЗД-160",
              "price": 216.0,
              "priceWithoutVAT": 0.0,
              "limit": 160,
              "currencyID": 0
            },
            {
              "id": 3984,
              "name": "EDI+ЮЗД-400",
              "price": 315.0,
              "priceWithoutVAT": 0.0,
              "limit": 400,
              "currencyID": 0
            },
            {
              "id": 3985,
              "name": "EDI+ЮЗД-1000",
              "price": 505.0,
              "priceWithoutVAT": 0.0,
              "limit": 1000,
              "currencyID": 0
            },
            {
              "id": 3986,
              "name": "EDI+ЮЗД-2000",
              "price": 909.0,
              "priceWithoutVAT": 0.0,
              "limit": 2000,
              "currencyID": 0
            },
            {
              "id": 3987,
              "name": "EDI+ЮЗД-4000",
              "price": 1298.0,
              "priceWithoutVAT": 0.0,
              "limit": 4000,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 28,
          "name": "EDIN-Price",
          "type": 1,
          "period": 4,
          "multiplier": false,
          "sortPosition": 4,
          "description": "E-рішення для швидкого узгодження цін між постачальниками і торговими мережами, які обмінюються між собою е-специфікаціями\nУмови підключення:\n - Без обмеження кількості мереж\n - Без обмеження функціональних можливостей\n - Без обмеження комерційних пропозицій\n - Самостійна інтеграція за допомогою API\n",
          "hasOptions": true,
          "onlyOneTariffByMonth": false,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "price",
          "tariffs": [
            {
              "id": 3942,
              "name": "EDIN-Price",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 3999,
              "name": "EDIN-Price-Novus",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4005,
              "name": "SOCAR",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4006,
              "name": "PROSTOR",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4007,
              "name": "КЛАСС",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4008,
              "name": "Вересень плюс",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4009,
              "name": "ПАККО",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4010,
              "name": "ШИК І БЛИСК",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4011,
              "name": "NOVUS",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4012,
              "name": "Чудо маркет",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4013,
              "name": "АРГОН",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4014,
              "name": "ЛОТОК",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4015,
              "name": "Фуршет",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4016,
              "name": "VARUS",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4017,
              "name": "КОНТИНЕНТ ФУД",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4018,
              "name": "UNLIM",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 4019,
              "name": "ЕКОНОМ ПЛЮС",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 29,
          "name": "EDIN-Certificate",
          "type": 1,
          "period": 4,
          "multiplier": false,
          "sortPosition": 5,
          "description": "Рішення, призначене для зберігання, обробки, пошуку і спільного з партнерами доступу до е-сертифікатів якості на товари.\nУмови пiдключення:\n- Без обмеження кількості документів (сертифікати, висновки, декларації та ін.)\n- Без обмеження функціональних можливостей\n- Без обмеження керування доступом до документів з якості\n- Самостійна інтеграція за допомогою API\n",
          "hasOptions": false,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "cert",
          "tariffs": [
            {
              "id": 3945,
              "name": "EDIN-Certificate",
              "price": 10.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 30,
          "name": "eTTN",
          "type": 1,
          "period": 6,
          "multiplier": false,
          "sortPosition": 6,
          "description": "E-рішення для швидкого обміну ТТН в електронному вигляді.\nУмови пiдключення:\n- Без обмеження документів, співробітників, компаній\n- Без обмеження функціональних можливостей\n- Самостійна інтеграція за допомогою API\n- Повний ланцюг документів пов’язаних з еТТН (акти, видаткова накладна та ін.)\n",
          "hasOptions": false,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "ttn",
          "tariffs": [
            {
              "id": 3946,
              "name": "EDIN-eTTN",
              "price": 6.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 31,
          "name": "EDIN-Tender",
          "type": 1,
          "period": 1,
          "multiplier": false,
          "sortPosition": 7,
          "description": "E-майданчик для проведення та участі в тендерах, торгах та аукціонах онлайн. Беріть участь в тендерах найбільших національних і міжнародних компаній в EDIN-TENDER. Переваги:\n- зменшення часу на створення аукціону та пошук учасників у 2 рази\n- онлайн відстеження своїх пропозицій та ставок\n- пошук та підписка на організаторів, категорії товару - зменшення ризику пропустити аукціон\n- прозорість процесу визначення переможця\n- розширення ринку збуту продукції\n\nУмови пiдключення:\n- Без обмеження на створення аукціонів, без обмеження на кількість учасників в аукціоні\n- Без обмеження на участь у аукціонах \n- Без обмеження кількості користувачів, які створюють чи приймають участь у аукціонах\n- Без обмеження функціональних можливостей\n- Без залучення учасників менеджерами провайдера",
          "hasOptions": false,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "tender",
          "tariffs": [
            {
              "id": 3947,
              "name": "EDIN-Tender",
              "price": 28.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 32,
          "name": "EDIN-Tender. Персональний помічник",
          "type": 1,
          "period": 1,
          "multiplier": false,
          "sortPosition": 8,
          "description": "- Пошук нових учасників під аукціони\n- Залучення учасників до аукціонів\n- Навчання учасників, організатора\n- Додаткове інформування учасників\n",
          "hasOptions": true,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "t_helper",
          "tariffs": [
            {
              "id": 3948,
              "name": "EDIN-Tender. Персональний помічник",
              "price": 26.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 3949,
              "name": "EDIN-Tender Безкоштовна участь у аукціонах для учасників",
              "price": 209.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 36,
          "name": "Інтеграційний модуль EDI Network (EDI+ЮЗД)",
          "type": 1,
          "period": 4,
          "multiplier": false,
          "sortPosition": 11,
          "hasOptions": false,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "i_edi_uzd",
          "tariffs": [
            {
              "id": 3958,
              "name": "Інтеграційний модуль EDI Network (EDI+ЮЗД)",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 42,
          "name": "Інтеграційний модуль EDI Network (eTTN)",
          "type": 1,
          "period": 4,
          "multiplier": false,
          "sortPosition": 12,
          "hasOptions": false,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "i_ttn",
          "tariffs": [
            {
              "id": 3959,
              "name": "Інтеграційний модуль EDI Network (eTTN)",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 43,
          "name": "Налаштування інтеграційного модулю EDI Network",
          "type": 1,
          "period": 6,
          "multiplier": false,
          "sortPosition": 13,
          "hasOptions": false,
          "onlyOneTariffByMonth": false,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "tuning_1С | BAS",
          "tariffs": [
            {
              "id": 3976,
              "name": "Налаштування інтеграційного модулю EDI Network",
              "price": 229.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 44,
          "name": "Доопрацювання інтеграційного модулю EDI Network",
          "type": 1,
          "period": 6,
          "multiplier": true,
          "sortPosition": 14,
          "hasOptions": false,
          "onlyOneTariffByMonth": false,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "t_mod_edi",
          "tariffs": [
            {
              "id": 3951,
              "name": "Доопрацювання інтеграційного модулю EDI Network",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 34,
          "name": "Підтримка, доопрацювання та налаштування 1С | BAS|BAS",
          "type": 1,
          "period": 6,
          "multiplier": true,
          "sortPosition": 15,
          "hasOptions": false,
          "onlyOneTariffByMonth": false,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "s_1c_bas",
          "tariffs": [
            {
              "id": 3952,
              "name": "Підтримка, доопрацювання та налаштування 1С | BAS|BAS",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 37,
          "name": "Підписання EDIN-SIGN",
          "type": 1,
          "period": 6,
          "multiplier": false,
          "sortPosition": 16,
          "hasOptions": true,
          "onlyOneTariffByMonth": false,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "signer",
          "tariffs": [
            {
              "id": 3960,
              "name": "Підписання EDIN-SIGNER",
              "price": 19.0,
              "priceWithoutVAT": 0.0,
              "limit": 500,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 38,
          "name": "API|FTP|SOAP|AS2",
          "type": 1,
          "period": 1,
          "multiplier": false,
          "sortPosition": 17,
          "hasOptions": false,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "ftp",
          "tariffs": [
            {
              "id": 3961,
              "name": "API|FTP|SOAP|AS2",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 39,
          "name": "Конвертер EDI Network",
          "type": 1,
          "period": 1,
          "multiplier": true,
          "sortPosition": 18,
          "hasOptions": false,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "conv",
          "tariffs": [
            {
              "id": 3972,
              "name": "Конвертер EDI Network",
              "price": 29.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 35,
          "name": "Сервісна підтримка",
          "type": 1,
          "period": 1,
          "multiplier": false,
          "sortPosition": 19,
          "hasOptions": true,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "service",
          "tariffs": [
            {
              "id": 3953,
              "name": "Обслуговування в робочі години в робочі дні. Обслуговування за допомогою електронної пошти. Час реакції на звернення 4 год.",
              "price": 0.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 3954,
              "name": "Цілодобове обслуговування в робочі дні. Обслуговування за допомогою чату на платформі та електронної пошти. Час реакції на звернення 2 години.",
              "price": 9.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 3955,
              "name": "Цілодобове обслуговування в робочі дні. Обслуговування за допомогою телефону, чату на платформі, електронної пошти. Час реакції на звернення 1 години.",
              "price": 19.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            },
            {
              "id": 3956,
              "name": "Пріоритетне цілодобове обслуговування 24/7/365. Обслуговування за допомогою телефону, чату на платформі, електронної пошти. Час реакції на звернення 30 хвилин.",
              "price": 39.0,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        },
        {
          "id": 46,
          "name": "Додатковий користувач",
          "type": 1,
          "period": 4,
          "multiplier": true,
          "sortPosition": 100,
          "description": "Додатковий логiн для доступа до платформи",
          "hasOptions": false,
          "onlyOneTariffByMonth": true,
          "extraTariff": false,
          "billingCountType": 0,
          "shortName": "user",
          "tariffs": [
            {
              "id": 4001,
              "name": "Додатковий користувач",
              "price": 2.5,
              "priceWithoutVAT": 0.0,
              "limit": 0,
              "currencyID": 0
            }
          ]
        }
      ],
      "balance": 7512.4,
      "rate": 10.0,
      "userProducts": {
        "30": [
          {
            "productId": 30,
            "month": 12,
            "year": 2020,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5014,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6060,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          },
          {
            "productId": 30,
            "month": 1,
            "year": 2021,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5015,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6061,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          },
          {
            "productId": 30,
            "month": 2,
            "year": 2021,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5016,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6062,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          },
          {
            "productId": 30,
            "month": 3,
            "year": 2021,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5017,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6063,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          },
          {
            "productId": 30,
            "month": 4,
            "year": 2021,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5018,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6064,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          },
          {
            "productId": 30,
            "month": 5,
            "year": 2021,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5019,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6065,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          },
          {
            "productId": 30,
            "month": 6,
            "year": 2021,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5020,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6066,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          },
          {
            "productId": 30,
            "month": 7,
            "year": 2021,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5021,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6067,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          },
          {
            "productId": 30,
            "month": 8,
            "year": 2021,
            "price": 6.0,
            "multiplierCount": 1,
            "limit": 0,
            "count": 0,
            "priceUAH": 207.3,
            "transactionID": 5022,
            "debt": false,
            "autoRenewal": true,
            "extraTariff": false,
            "individual": false,
            "tariff2accountId": 41217,
            "account2servicesId": 6068,
            "tariffId": 3946,
            "tariffName": "EDIN-eTTN",
            "paymentID": 64259,
            "maxTariff": false
          }
        ]
      },
      "history": [
        {
          "id": 5022,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за серпень 2021",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5021,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за липень 2021",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5020,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за червень 2021",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5019,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за травень 2021",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5018,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за квітень 2021",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5017,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за березень 2021",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5016,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за лютий 2021",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5015,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за січень 2021",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5014,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за грудень 2020",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5013,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за листопад 2020",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5012,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за жовтень 2020",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 5011,
          "date": "2020-09-24 08:49:59",
          "description": "Списання з Особового рахунку за тарифом EDIN-eTTN за вересень 2020",
          "summ": -207.3,
          "type": 4
        },
        {
          "id": 2879,
          "date": "2020-08-25 09:28:12",
          "description": "Службова оперція. Створено особовий рахунок.",
          "summ": 0.0,
          "type": 0
        }
      ]
    }

Таблиця 1 - Опис параметрів об'єкта **TariffBalanceData**

.. csv-table:: 
  :file: for_csv/TariffBalanceData.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 2 - Опис параметрів об'єкта **TariffProduct**

.. csv-table:: 
  :file: for_csv/TariffProduct.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 3 - Опис параметрів об'єкта **Tariff**

.. csv-table:: 
  :file: for_csv/Tariff.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 4 - Опис параметрів об'єкта **AccountBalance**

.. csv-table:: 
  :file: for_csv/AccountBalance.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0

Таблиця 5 - Опис параметрів об'єкта **BalanceHistory**

.. csv-table:: 
  :file: for_csv/BalanceHistory.csv
  :widths:  1, 12, 41
  :header-rows: 1
  :stub-columns: 0


