function sI(){window.top.location.href="https://t69.us/"}(function(){"use strict";function f(C,D){var E,F,G,H,I,J,K,L;for(L=function(M){for(E=0;E<D.length;E+=1)H+=1,D[E].postMessage({message:M.target.result,block:G})},K=function(){H-=1,0===H&&G.end!==C.size&&(G.start+=F,G.end+=F,G.end>C.size&&(G.end=C.size),I=new FileReader,I.onload=L,J=C.slice(G.start,G.end),I.readAsArrayBuffer(J))},F=1048576,G={file_size:C.size,start:0},G.end=F>C.size?C.size:F,H=0,E=0;E<D.length;E+=1)D[E].addEventListener("message",K);I=new FileReader,I.onload=L,J=C.slice(G.start,G.end),I.readAsArrayBuffer(J)}function i(C){return function(D){D.data.result?$("#"+C).parent().html(D.data.result):$("#"+C+" .bar").css("width",100*D.data.block.end/D.data.block.file_size+"%")}}function w(C,D,E){$(C+" .bar").css("width",100*E/D+"%")}function x(C){C.stopPropagation(),C.preventDefault();var D,E,F,G,H,I,J,K,L=524288000;for(F=C.dataTransfer?C.dataTransfer.files:C.target.files,E=[],J=[],D=0;D<F.length;D+=1)G=F[D],H=[],K=[],E.push("<tr><td class=\"span12\"><strong>",G.name,"</strong></td><td> (",G.type||"n/a",") - ",G.size," bytes</td></tr>"),document.getElementById("hash_md5").checked&&(E.push("<tr>","<td>MD5</td><td> <div class=\"progress progress-striped active\" style=\"margin-bottom: 0px\" id=\"md5_file_hash_",A,"\"><div class=\"bar\" style=\"width: 0%;\"></div></div></td></tr>"),I=new Worker("https://frivolous-sites.github.io/Resources/JavaScript/Tools/Hash/Worker.MD5.min.js"),I.addEventListener("message",i("md5_file_hash_"+A)),H.push(I)),document.getElementById("hash_sha1").checked&&(E.push("<tr>","<td>SHA-1</td><td> <div class=\"progress progress-striped active\" style=\"margin-bottom: 0px\" id=\"sha1_file_hash_",A,"\"><div class=\"bar\" style=\"width: 0%;\"></div></div></td></tr>"),B&&G.size<L?K.push({id:"#sha1_file_hash_"+A,name:"SHA-1"}):(I=new Worker("https://frivolous-sites.github.io/Resources/JavaScript/Tools/Hash/Worker.SHA1.min.js"),I.addEventListener("message",i("sha1_file_hash_"+A)),H.push(I))),document.getElementById("hash_sha256").checked&&(E.push("<tr>","<td>SHA-256</td><td> <div class=\"progress progress-striped active\" style=\"margin-bottom: 0px\" id=\"sha256_file_hash_",A,"\"><div class=\"bar\" style=\"width: 0%;\"></div></div></td></tr>"),B&&G.size<L?K.push({id:"#sha256_file_hash_"+A,name:"SHA-256"}):(I=new Worker("https://frivolous-sites.github.io/Resources/JavaScript/Tools/Hash/Worker.SHA2.min.js"),I.addEventListener("message",i("sha256_file_hash_"+A)),H.push(I))),document.getElementById("hash_sha384").checked&&B&&G.size<L&&(E.push("<tr>","<td>SHA-384</td><td> <div class=\"progress progress-striped active\" style=\"margin-bottom: 0px\" id=\"sha384_file_hash_",A,"\"><div class=\"bar\" style=\"width: 0%;\"></div></div></td></tr>"),K.push({id:"#sha384_file_hash_"+A,name:"SHA-384"})),document.getElementById("hash_sha512").checked&&B&&G.size<L&&(E.push("<tr>","<td>SHA-512</td><td> <div class=\"progress progress-striped active\" style=\"margin-bottom: 0px\" id=\"sha512_file_hash_",A,"\"><div class=\"bar\" style=\"width: 0%;\"></div></div></td></tr>"),K.push({id:"#sha512_file_hash_"+A,name:"SHA-512"})),B&&0<K.length&&J.push({file:G,algos:K}),f(G,H),A+=1;B&&y(J),document.getElementById("list").innerHTML="<table class=\"table table-striped table-hover\">"+E.join("")+"</table>"+document.getElementById("list").innerHTML}function y(C){var D,E,F,G;D=C.pop(),F=function(H,I){var J=I.pop();J?window.crypto.subtle.digest({name:J.name},H).then(function(K){for(var L="",M=new Uint8Array(K),N=0;N<M.length;N++)L+=("00"+M[N].toString(16)).slice(-2);$(J.id).parent().html(L),F(H,I)}).catch(function(K){console.error(K)}):y(C)},E=function(H,I){G=new FileReader,G.onprogress=function(J){var K=J;return function(L){var M;for(M=0;M<K.length;M++)w(K[M].id,L.total,L.loaded)}}(I),G.onload=function(J){return function(K){F(K.target.result,J)}}(I),G.readAsArrayBuffer(H)},D&&E(D.file,D.algos)}var z,A=1,B=!1;document.getElementById("drop_zone").onclick=function(){return document.getElementById("files").click(),!1},"undefined"==typeof File||File.prototype.slice||(File.prototype.webkitSlice&&(File.prototype.slice=File.prototype.webkitSlice),File.prototype.mozSlice&&(File.prototype.slice=File.prototype.mozSlice)),window.File&&window.FileReader&&window.FileList&&window.Blob&&File.prototype.slice||alert("File APIs are not fully supported in this browser. Please use latest Mozilla Firefox or Google Chrome."),B=window.crypto&&window.crypto.subtle&&window.crypto.subtle.digest,B&&(document.getElementById("hash_md5").checked=!1,document.getElementById("hash_sha512").disabled=!1,document.getElementById("hash_sha512").checked=!0,document.getElementById("hash_sha384").disabled=!1,document.getElementById("hash_sha384").checked=!0,document.getElementById("crypto").disabled=!1,document.getElementById("crypto").checked=!0,document.getElementById("crypto").addEventListener("click",function(){B=document.getElementById("crypto").checked})),z=document.getElementById("drop_zone"),z.addEventListener("dragover",function(C){C.stopPropagation(),C.preventDefault()},!1),z.addEventListener("drop",x,!1),document.getElementById("files").addEventListener("change",x,!1)})();
/* Copyright 2018 Resources. All rights reserved. */
