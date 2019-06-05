SOAP API
#########

.. contents:: Зміст:

---------

WSDL схема для роботи з FTPEX по SOAP: https://soap.edi-n.com/soap/service.wsdl

Отримання списку доступних файлів (getList)
============================================================================================

*Сигнатура* (параметри які потрібно передати): логін і MD5 пароля (ті дані, які були видані користувачу при підключенні до платформи електронного документообігу) (MD5 генератор http://www.danstools.com/md5-hash-generator/).

*У відповідь* отримуємо список імен файлів, які на даний момент доступні користувачеві.

**Приклад відповіді**:

:: 

 <result>
            <errorCode>0</errorCode>
            <list>status_20150924144604_4679904.xml</list>
            <list>status_20150924144604_7259532.xml</list>
            <list>status_20150924144604_4784911.xml</list>
    ...
    ...
    <list>status_20151005123023_686803070.xml</list>
            <list>order_20151005132435_707890630.xml</list>
  </result>

**Можливі помилки**:

- errorCode 1 - помилка при авторизації,
- errorCode 2 - інша помилка

"Масове" отримання документів (кількох шуканих документів) (getDocuments)
============================================================================================

*Сигнатура* (параметри які потрібно передати): логін, MD5 пароля і конкретні імена файлів (імена файлів повертає getList)

*Що повертає*: код відповіді сервера (0 - успішна обробка), а також закодований в base64 zip архів із затребуваними файлами.

**Приклад запиту**:

::

      <soap:getDocumentsRequest>
         <!--Optional:-->
         <user>
            <!--Optional:-->
            <login>login</login>
            <!--Optional:-->
            <pass>parol</pass>
         </user>
         <!--Zero or more repetitions:-->
         <fileName>hello.xml</fileName>
        <fileName>musician.xml</fileName>
      </soap:getDocumentsRequest>

**Приклад відповіді**:

::

         <result>
            <errorCode>0</errorCode>
          <content>UEsDBBQACAgIAD...AAAA</content>
         </result>

**Можливі помилки**:

- errorCode 1 - помилка отримання документів (значення помилки повертається в <errorMessage/>)

Отримання конкретного файлу (getDoc)
============================================================================================

*Сигнатура* (параметри, які потрібно передати): логін, MD5 пароля і конкретне ім'я файлу (імена файлів повертає getList)

*У відповідь* отримуємо конкретний файл у вигляді BASE-64 рядка.

**Приклад відповіді**:

:: 

  <result>
            <errorCode>0</errorCode>
            <content>PFN0YXR1cz4KI...4KPC9TdGF0dXM+</content>
  </result>

Вміст поля <content> перекладається в XML подання шляхом розшифровки BASE-64 (в результаті виходить тіло XML файлу).

**Можливі помилки**:

- errorCode 1 - помилка при отриманні документа.

Передача конкретного файлу (sendDoc)
============================================================================================

*Сигнатура* (параметри які потрібно передати): логін, MD5 пароля, конкретне ім'я файлу і тіло файлу в вигляді BASE-64 рядка.

*У відповідь* отримуємо код відповіді сервера (0 - успішна передача).

**Приклад відповіді**:

:: 

 <result>
            <errorCode>0</errorCode>
 </result>

**Можливі помилки**:

- errorCode 3 - помилка при відправленні документа

Архівування документа (видалення конкретного файлу з сервера) (archiveDoc)
============================================================================================

*Сигнатура* (параметри які потрібно передати): логін, MD5 пароля і конкретне ім'я файлу (імена файлів повертає getList)

*Що повертає*: код відповіді сервера (0 - успішна обробка).

**Приклад відповіді**:

:: 

 <result>
            <errorCode>0</errorCode>
 </result>

**Можливі помилки**:

- errorCode 4 - помилка при архівуванні документа

"Масове" архівування документів (видалення файлів з сервера) (archiveDocuments)
============================================================================================

*Сигнатура* (параметри які потрібно передати): логін, MD5 пароля і конкретне ім'я файлу (імена файлів повертає getList)

*Що повертає*: код відповіді сервера (0 - успішна обробка).

**Приклад запиту**:

:: 

      <soap:archiveDocumentsRequest>
         <!--Optional:-->
         <user>
            <!--Optional:-->
            <login>login</login>
            <!--Optional:-->
            <pass>parol</pass>
         </user>
         <!--Zero or more repetitions:-->
             <fileName>hello.xml</fileName>
           <fileName>musician.xml</fileName>
      </soap:archiveDocumentsRequest>

**Приклад відповіді**:

:: 

 <result>
            <errorCode>0</errorCode>
 </result>

**Можливі помилки**:

- errorCode 4 - помилка при архівуванні документа (значення помилки повертається в<errorMessage/>)

Доповнення
============================================================================================

Повні запити і відповіді сервера по кожному методу:

:download:`sendDoc_response2.xml<SOAP_API_request_response/sendDoc_response2.xml>`

:download:`sendDoc_request2.xml<SOAP_API_request_response/sendDoc_request2.xml>`

:download:`getList_response2.xml<SOAP_API_request_response/getList_response2.xml>`

:download:`getList_request2.xml<SOAP_API_request_response/getList_request2.xml>`

:download:`getDocumentsResponse2.xml<SOAP_API_request_response/getDocumentsResponse2.xml>`

:download:`getDocumentsRequest2.xml<SOAP_API_request_response/getDocumentsRequest2.xml>`

:download:`getDoc_response2.xml<SOAP_API_request_response/getDoc_response2.xml>`

:download:`getDoc_request2.xml<SOAP_API_request_response/getDoc_request2.xml>`

:download:`archiveDocumentsResponse2.xml<SOAP_API_request_response/archiveDocumentsResponse2.xml>`

:download:`archiveDocumentsRequest2.xml<SOAP_API_request_response/archiveDocumentsRequest2.xml>`

:download:`archiveDoc_response2.xml<SOAP_API_request_response/archiveDoc_response2.xml>`

:download:`archiveDoc_request2.xml<SOAP_API_request_response/archiveDoc_request2.xml>`
