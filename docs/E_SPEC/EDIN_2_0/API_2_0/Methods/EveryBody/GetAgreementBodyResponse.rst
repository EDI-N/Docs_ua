#############################################################
**Перегляд пропозиції (Response)**
#############################################################

**JSON body_type=1 (Документ AGREEM):**

`Специфікація AGREEM <https://wiki.edin.ua/uk/latest/XML/XML-structure.html#agreem>`__ .


.. code:: json

  {
    "DATE": "2020-05-21",
    "NUMBER": "2000000038",
    "DOCSTARTDATE": "2020-05-24",
    "DOCENDDATE": "2020-05-31",
    "CONTRACTNUMBER": "1200.996633",
    "CAMPAIGN_GLN": "9864119011415",
    "CONTRACTEXPIRYDATE": "2020-05-31",
    "CAMPAIGNNUMBER": "1200",
    "CAMPAIGNDATE": "2020-07-27",
    "PRICETYPE": "regular",
    "DOCACTION": "0",
    "HEAD": [
      {
        "SENDER": "9864067620417",
        "RECIPIENT": "9864119011415",
        "BUYER": "9864119011415",
        "SUPPLIER": "9864067620417",
        "POSITION": [
          {
            "POSITIONNUMBER": "1",
            "POSITIONIDBUYER": "1",
            "PRODUCTIDBUYER": "34734",
            "PRODUCT": "5908230523946",
            "DESCRIPTION": "Kabanos Pork",
            "PRICEWITHOUTVAT": "81.71",
            "PRICEWITHVAT": "98.05",
            "PRICEWITHOUTVAT_CHNG": "100",
            "PRICEWITHVAT_CHNG": "120",
            "DISCOUNTPRICEWITHOUTVAT": "60.00",
            "DISCOUNTPRICEWITHVAT": "72.00",
            "DISCOUNTPRICEWITHOUTVAT_CHNG": "60.00",
            "DISCOUNTPRICEWITHVAT_CHNG": "72",
            "STATE": 1,
            "UNIT": "PCE",
            "VAT": "20",
            "DIFFPRICE": "22.38",
            "DIFFDISCOUNTPRICE": "0",
            "DISCOUNTVAL_CHNG": "40",
            "DISCOUNTVAL": "26.57",
            "UCCFEA": "0000000000"
          },
          {
            "POSITIONNUMBER": "2",
            "POSITIONIDBUYER": "2",
            "PRODUCTIDBUYER": "34735",
            "PRODUCT": "5908230523953",
            "DESCRIPTION": "Kabanos Poultry",
            "PRICEWITHOUTVAT": "81.71",
            "PRICEWITHVAT": "98.05",
            "PRICEWITHOUTVAT_CHNG": "120",
            "PRICEWITHVAT_CHNG": "144",
            "DISCOUNTPRICEWITHOUTVAT": "60.00",
            "DISCOUNTPRICEWITHVAT": "72.00",
            "DISCOUNTPRICEWITHOUTVAT_CHNG": "60.00",
            "DISCOUNTPRICEWITHVAT_CHNG": "72",
            "STATE": 0,
            "UNIT": "PCE",
            "VAT": "20",
            "DIFFPRICE": "46.86",
            "DIFFDISCOUNTPRICE": "0",
            "DISCOUNTVAL_CHNG": "50",
            "DISCOUNTVAL": "26.57",
            "UCCFEA": "1111111111"
          }
        ],
        "ATTACHMENT": "attachdoc.pdf"
      }
    ]
  }
 


**JSON body_type=2 (налаштування ритейлера/мережі - лише перегляд):**

.. code:: json

  {
     "changePriceTerm": 1,
     "isPriceWithDiscount": false,
     "isPriceWithVat": false,
     "maxNumbersOfAgreements": 0,
     "isChangePricePeriod": false,
     "changePromoPriceTerm": 3,
     "changeLastingTerm": 0,
     "changePromoLastingTerm": 0,
     "changeOutputGoodsTerm": 2,
     "isNewPositions": false,
     "isExtendedSpec": false,
     "isOutputGoods": true,
     "isTypePromo": true,
     "isPromoQuantity": false,
     "isExtendedSpecUcat": false,
     "isSignUnBlock": false,
     "isProlongationContract": true,
     "isNewSupplier": true,
     "isReplaceProductlistData": true,
     "isActionControl": true
  }

**JSON body_type=3 (Обгрунтування)**

Передається бінарний файл з вкладенням.