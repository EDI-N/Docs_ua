Фоззі
#############################################

.. deprecated
   Fozzy_Instructions/Fozzy_ORDRSP_instruction
   Fozzy_Instructions/Fozzy_IFTMIN_instruction
   Fozzy_Instructions/Fozzy_DOCUMENTINVOICE_TN_instruction
   Fozzy_Instructions/Fozzy_DOCUMENTINVOICE_PRN_instruction

.. toctree::
   :caption: Робота з мережею "Фоззі" на платформі EDI Network 2.0
   :maxdepth: 1
   
   Fozzy_Instructions/Fozzy_EDI

.. toctree::
   :caption: Специфікації документів (XML) для роботи з "Fozzy" [1]
   :maxdepth: 1
   
   Fozzy_XML-structure

-------------------------

.. [#] В переліку специфікацій вказані лише модифіковані під клієнта документи. Специфікації "стандартних" документів на платформі EDI Network 2.0:

   * для `"EDI Network" <https://wiki.edin.ua/uk/latest/EDIN_Specs/EDIN_Specs_list.html>`__ сервісу;
   * для `"Е-ТТН" <https://wiki.edin.ua/uk/latest/Docs_ETTNv2/Docs_ETTNv2_list.html>`__ сервісу;
   * для `"Е-Специфікація" <https://wiki.edin.ua/uk/latest/E_SPEC/EDIN_2_0/XML/XML_structure.html>`__ сервісу;
   * для `"Маркет" <https://wiki.edin.ua/uk/latest/Distribution/EDIN_2_0/XML/XML_structure.html>`__ сервісу.




.. 	@startuml
	skinparam componentStyle rectangle
	skinparam groupInheritance 1
	left to right direction
	' Horizontal lines: -->, <--, <-->
	' Vertical lines: ->, <-, <->

	folder "Постачальник" as Pos {
	  file "ORDERS" as ORDERSp
	  file "ORDRSP" as ORDRSPp
	  file "IFTMIN" as IFTMINp
	  file "DOCUMENTINVOICE_TN" as DOCUMENTINVOICE_TNp
	  file "DOCUMENTINVOICE_PRN" as DOCUMENTINVOICE_PRNp
	  file "COMDOC_009" as COMDOC_009p
	  file "DOCCORINVOICE_PRN" as DOCCORINVOICE_PRNp
	  file "DOCCORINVOICE_TN" as DOCCORINVOICE_TNp
	  ORDERSp -left-> ORDRSPp
	  ORDERSp .left-> IFTMINp
	  ORDERSp -left-> DOCUMENTINVOICE_TNp
	  DOCUMENTINVOICE_TNp -left-> DOCUMENTINVOICE_PRNp
	  ORDERSp -left-> DOCUMENTINVOICE_PRNp
	  DOCUMENTINVOICE_PRNp -left-> COMDOC_009p #line:white;line.dotted
	  DOCUMENTINVOICE_TNp .left-> DOCCORINVOICE_TNp
	  DOCUMENTINVOICE_PRNp .left-> DOCCORINVOICE_PRNp
	}

	package "Fozzy" as Foz {
	  file "ORDERS" as ORDERSf
	  file "ORDRSP" as ORDRSPf
	  file "IFTMIN" as IFTMINf
	  file "DOCUMENTINVOICE_TN" as DOCUMENTINVOICE_TNf
	  file "DOCUMENTINVOICE_PRN" as DOCUMENTINVOICE_PRNf
	  file "COMDOC_009" as COMDOC_009f
	  file "DOCCORINVOICE_PRN" as DOCCORINVOICE_PRNf
	  file "DOCCORINVOICE_TN" as DOCCORINVOICE_TNf
	}

	ORDERSp <-- ORDERSf
	ORDRSPp --> ORDRSPf
	IFTMINp --> IFTMINf
	DOCUMENTINVOICE_TNp --> DOCUMENTINVOICE_TNf
	DOCUMENTINVOICE_PRNp --> DOCUMENTINVOICE_PRNf
	COMDOC_009p <-- COMDOC_009f
	DOCCORINVOICE_PRNp --> DOCCORINVOICE_PRNf
	DOCCORINVOICE_TNp --> DOCCORINVOICE_TNf
	@enduml