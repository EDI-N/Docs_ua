########################################################################################################################
Документообіг з мережею "Фоззі" на платформі EDI Network 2.0: "Match Invoice"
########################################################################################################################












@startuml
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


[Component] -left-> left
[Component] -right-> right
[Component] -up-> up
[Component] -down-> down


foo --> (bar1) #line:red;line.bold;text:red  : красная, жирный
foo --> (bar2) #green;line.dashed;text:green : зеленая, штриховой
foo --> (bar3) #blue;line.dotted;text:blue   : синяя, пунктирный



ORDERSp <-- ORDERSf
ORDRSPp --> ORDRSPf
IFTMINp --> IFTMINf
DOCUMENTINVOICE_TNp --> DOCUMENTINVOICE_TNf
DOCUMENTINVOICE_PRNp --> DOCUMENTINVOICE_PRNf
COMDOC_009p <-- COMDOC_009f
DOCCORINVOICE_PRNp --> DOCCORINVOICE_PRNf
DOCCORINVOICE_TNp --> DOCCORINVOICE_TNf
@enduml




