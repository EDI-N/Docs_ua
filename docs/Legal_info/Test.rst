Test
################################################################################################

   1

.. raw:: html

   <embed>
      <iframe align="middle" frameborder="1" height="907px" id="ID" scrolling="auto" src="https://wiki.edin.ua/uk/latest/_static/files/DDD.pdf" style="border:1px solid #666CCC" title="PDF" width="99.5%"></iframe>
   </embed>

   2

.. raw:: html

   <embed>
      <iframe align="middle" frameborder="1" height="907px" id="ID" scrolling="auto" src="https://drive.google.com/file/d/13N7_fYq33STg7uJBx_n65ep6u1MpBuuI/view" style="border:1px solid #666CCC" title="PDF" width="99.5%"></iframe>
   </embed>

   3

.. raw:: html

   <embed>
      <iframe align="middle" frameborder="1" height="907px" id="ID" scrolling="auto" src="https://raw.githubusercontent.com/EDI-N/Docs_ua/e7e1f1df83d7a5563179df4019c3dcc0a5e19477/docs/_static/files/DDD.pdf" style="border:1px solid #666CCC" title="PDF" width="99.5%"></iframe>
   </embed>

   4

.. raw:: html

   <embed>
      <iframe align="middle" frameborder="1" height="907px" id="ID" scrolling="auto" src="https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf" style="border:1px solid #666CCC" title="PDF" width="99.5%"></iframe>
   </embed>

   5

.. raw:: html

   <embed>
      <iframe align="middle" frameborder="1" height="907px" id="ID" scrolling="auto" src="https://github.com/EDI-N/Docs_ua/blob/master/docs/_static/files/DDD.pdf" style="border:1px solid #666CCC" title="PDF" width="99.5%"></iframe>
   </embed>

   6

.. raw:: html

   <embed src= "https://github.com/EDI-N/Docs_ua/blob/master/docs/_static/files/DDD.pdf" width= "500" height= "375">

   7

.. raw:: html
   <!-- 4:3 aspect ratio -->
   <div class="embed-responsive embed-responsive-4by3">
   <iframe class="embed-responsive-item" src="https://github.com/EDI-N/Docs_ua/blob/master/docs/_static/files/DDD.pdf"></iframe>
   </div>

   8

.. raw:: html
   <iframe src="http://docs.google.com/gview?url=https://github.com/EDI-N/Docs_ua/blob/master/docs/_static/files/DDD.pdf&embedded=true" style="width:600px; height:500px;" frameborder="0"></iframe>

   9

.. raw:: html

   <embed>
      <iframe src="http://docs.google.com/gview?url=https://github.com/EDI-N/Docs_ua/blob/master/docs/_static/files/DDD.pdf&embedded=true" style="width:600px; height:500px;" frameborder="0"></iframe>
   </embed>


10

.. raw:: html

   <iframe src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf&embedded=true" style="width:100%; height:500px;" frameborder="0"></iframe>

11

.. raw:: html

   <iframe src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf&embedded=true" style="width:100%; height:500px;" frameborder="0"></iframe>

12

.. raw:: html

   <iframe src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf&embedded=true" style="width:100%; height:500px;" frameborder="0"></iframe>

13

.. raw:: html

   <embed src="https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf" type="application/pdf" width="100%" height="100%">

14

.. raw:: html

   <embed src="../_static/files/DDD.pdf" type="application/pdf" width="100%" height="100%">

15

.. raw:: html

   <object data="DDD.pdf" type="application/pdf" width="100%" height="100%">
   <p>Alternative text - include a link <a href="https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf">to the PDF!</a></p>
   </object>

16

.. raw:: html

   <object data="DDD.pdf" type="application/pdf" width="100%" height="100%">
   <p>Alternative text - include a link <a href="https://github.com/EDI-N/Docs_ua/blob/master/docs/_static/files/DDD.pdf">to the PDF!</a></p>
   </object>

17JS

.. raw:: html

   <div id="example1"></div>
   <script src="pdfobject.js"></script>
   <script>PDFObject.embed("../_static/files/DDD.pdf", "#example1");</script>

18JS

.. raw:: html

   <div id="example2"></div>
   <script src="pdfobject.js"></script>
   <script>PDFObject.embed("/_static/files/DDD.pdf", "#example2");</script>

..

   JS2

   .. raw:: html

      <head>
      <div id="example3"></div>
      <script src="pdfobject.js"></script>
      <script>PDFObject.embed("../_static/files/DDD.pdf", "#example3");</script>
      </head>
      </html>

   JS3

   .. raw:: html

      <head>
      <div id="example4"></div>
      <script src="pdfobject.js"></script>
      <script>PDFObject.embed("/_static/files/DDD.pdf", "#example4");</script>
      </head>
      </html>

18JS

.. raw:: html

   <div id="example5"></div>
   <script src="pdfobject.js"></script>
   <script>PDFObject.embed("https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf", "#example5");</script>

no JS

.. raw:: html

   <object data='https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf' 
         type='application/pdf' 
         width='100%' 
         height='100%'>
   <p>This browser does not support inline PDFs. Please download the PDF to view it: <a href="https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf">Download PDF</a></p>
   </object>

JS pro

.. raw:: html

   <script src='/_static/pdfobject.js'></script>
   <script>
   PDFObject.embed("https://raw.githubusercontent.com/EDI-N/Docs_ua/master/docs/_static/files/DDD.pdf");
   </script>