(this.webpackJsonpreact_admin_template=this.webpackJsonpreact_admin_template||[]).push([[37],{1325:function(t,n,e){"use strict";e.r(n),e.d(n,"export_txt_to_zip",(function(){return i}));var c=e(1326),a=e.n(c);function i(t,n,e,c){var i=new a.a,o=e||"file",r=c||"file",p=n,f="".concat(t,"\r\n");p.forEach((function(t){var n;n=t.toString(),f+="".concat(n,"\r\n")})),i.file("".concat(o,".txt"),f),i.generateAsync({type:"blob"}).then((function(t){saveAs(t,"".concat(r,".zip"))}),(function(t){alert("\u5bfc\u51fa\u5931\u8d25")}))}e(647)}}]);