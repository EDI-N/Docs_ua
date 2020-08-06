API DOCFLOW
######################

.. toctree::
   :caption: Авторизація
   :glob:
   :maxdepth: 1
   
   Methods/Authorization

.. toctree::
   :caption: Налаштування компанії аккаунту
   :glob:
   :maxdepth: 1

   Methods/CreateCompanyFromSign
   Methods/UpdateCompanyFromSign
   Methods/EditCompany

.. toctree::
   :glob: true
   :caption: Зовнішні документи
   :maxdepth: 1

   Methods/PostPackageDocumentStatus
   Methods/GetExtraDocumentTypes
   Methods/EditDocumentData
   Methods/GetDocumentTypes
   Methods/SetProviderAccess
   Methods/GetDocumentTypesXlsx
   Methods/PostDocumentTypes
   Methods/ActBlockDocumentType
   Methods/AddStructure
   Methods/PostPackageDocumentXml

.. toctree::
   :caption: Внутрішні документи
   :glob:
   :maxdepth: 1

   Methods/GetInternalDocumentInfo
   Methods/GetInternalDocumentStructure
   Methods/GetInternalDocuments
   Methods/CreateInternalDocument
   
.. toctree::
   :caption: Комплекти документів
   :glob:
   :maxdepth: 1
   
   Methods/GetPackageTypeByContract
   Methods/CreatePackage
   Methods/PutDocumentInPackage
   Methods/OptPackageDocument
   Methods/GetExtraPackageTypes
   Methods/CreateDocumentType
   Methods/GetPackagesByChain
   Methods/ChangePackageTypeStatus
   Methods/PostPackage
   Methods/PostPackageComment
   Methods/PostPackages
   Methods/PostPackageSend
   Methods/PostPackageStatus
   
.. toctree::
   :caption: Сценнарій документообігу
   :glob:
   :maxdepth: 1
   
   Methods/ContractSend
   Methods/ChangeContractStatus
   Methods/GetContract
   Methods/ContractDelete
   Methods/DelContractPackages
   Methods/PutContractPackages
   Methods/DelContractDictionary
   Methods/PutContractDictionary
   Methods/PostContract
   
.. toctree::
   :caption: Запрошення контрагентів
   :glob:
   :maxdepth: 1
   
   Methods/GetPartners
   Methods/PostPartner
   Methods/PostPartners
   Methods/PartnerSetInvitationMark
   Methods/SendInvitation
   
.. toctree::
   :caption: Підписання ЕЦП\КЕП
   :glob:
   :maxdepth: 1

   Methods/GetMobileSign
   Methods/GetMobileCerts
   Methods/GetDocumentBody
   Methods/GetDocumentSign
   Methods/GetDocumentArch
   Methods/GetPackage
   Methods/PutDocumentSignByUUID
   Methods/PutDocumentSign
   Methods/AccountSignSettings
   Methods/GetInternalDocumentsArch
   Methods/PutInternalDocumentSign
   Methods/GetInternalDocumentsBody
   Methods/GetPackageArch
   Methods/GetSignListArch
   Methods/GetPackageArchRequest
   
.. toctree::
   :caption: Управління користувачами
   :glob:
   :maxdepth: 1
   
   Methods/GetUsers
   Methods/GetRoles
   Methods/GetUser
   Methods/OptUser
   Methods/CreateRole
   Methods/PostUserProfile
   Methods/CreateUser
   Methods/PatchUserRoles
   
.. toctree::
   :caption: Процес погодження
   :glob:
   :maxdepth: 1
   
   Methods/CreateAgreementGroup
   Methods/GetAgreementGroup
   Methods/GetAgreementGroups
   Methods/GetAgreementProcs
   Methods/OptAgreementProcs
   Methods/GetDocInfo
   Methods/DelAgreementProcDocument
   Methods/DelAgreementGroup
   Methods/DelAgreementStep
   Methods/AgreementProcDocument
   Methods/PostAgreementProc
   Methods/GetPackageComments   
   Methods/PostAgreementStep
   
.. toctree::
   :caption: Налаштування доступу до документів
   :glob:
   :maxdepth: 1
   
   Methods/AddContracts2Route
   Methods/AddPackageType2Route
   Methods/DeleteContracts2Route
   Methods/DeletePackageType2Route
   Methods/EditRoute2Users
   
.. toctree::
   :caption: Управління тегами
   :glob:
   :maxdepth: 1
   
   Methods/DeleteContractTag
   Methods/DeletePackageTag
   Methods/DeleteTag
   Methods/GetTags
   Methods/PostTag
   Methods/PostTagXls
   Methods/PutContractTag
   Methods/PutPackageTag

.. toctree::
   :caption: Управління ярликами (виборками)
   :glob:
   :maxdepth: 1

   Methods/GetFilter
   Methods/PostFilter

.. toctree::
   :caption: Довідники компанії
   :glob:
   :maxdepth: 1

   Methods/GetDictionaries
   Methods/GetDictionary
   Methods/GetDictionaryXlsx
   Methods/PostDictionaryXlsx
   Methods/CreateDictionary
   Methods/OptDocumentTypesDictionary
   Methods/ActBlockDictionaryValue
   Methods/ActBlockDictionary
   Methods/AddDictionaryValue
   Methods/OptPackageDictionary
   
.. toctree::
   :caption: Додаткові атрибути
   :glob:
   :maxdepth: 1
   
   Methods/OptExtraField
   
.. toctree::
   :caption: Аналітика та звіти
   :glob:
   :maxdepth: 1
   
   Methods/CreateReport
   Methods/GetReportFile
   Methods/GetReports
   
.. toctree::
   :caption: Акаунт
   :glob:
   :maxdepth: 1
   
   Methods/GetCertificate
   Methods/GetCertificates
   Methods/Logout
   Methods/GetOffer
   Methods/PutCertificate
   Methods/GetAccount
   Methods/GetTransactions
   Methods/GetPaymentInvoice
   Methods/GetLogFile


   
   
   
   
   
   
