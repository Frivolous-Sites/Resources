$.getJSON("https://api.ipify.org/?format=json",function(a){$.each(a,function(b,c){document.getElementById("US").value=c})}),pj("home");
