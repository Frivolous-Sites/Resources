var modal = document.getElementById("AModal");

function infoSubmit() {
  var cookATS = getCookie("_ATS");
  if (cookATS == "WWVzIQ==") {
    jsSubmitForm("zero", "first", "second");
  } else {
    modal.style.display = "block";
  }
}

function disagree() {
  alert(
    'Sorry, you cannot use this service unless you read and agree with our "Terms of Service".'
  );
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    disagree();
  }
};

var btn_agree = document.getElementById("agree");
btn_agree.onclick = function() {
  setCookie("_ATS", "WWVzIQ==", "/", 0);
  modal.style.display = "none";
  jsSubmitForm("zero", "first", "second");
};

function capitalizationEN(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function jsSubmitForm(id1, id2, id3) {
  var id1_v = document.getElementsByName(id1)[0].value;
  var id2_v = document.getElementsByName(id2)[0].value;
  var id3_v = document.getElementsByName(id3)[0].value;

  id1 = capitalizationEN(id1);
  id2 = capitalizationEN(id2);
  id3 = capitalizationEN(id3);

  if (id1_v != "" && id2_v != "" && id3_v != "") {
    var form = document.createElement("form");
    form.setAttribute("method", "post");

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", id1);
    hiddenField.setAttribute("value", id1_v);
    form.appendChild(hiddenField);

    var hF2 = document.createElement("input");
    hF2.setAttribute("type", "hidden");
    hF2.setAttribute("name", id2);
    hF2.setAttribute("value", id2_v);
    form.appendChild(hF2);
    var hF3 = document.createElement("input");
    hF3.setAttribute("type", "hidden");
    hF3.setAttribute("name", id3);
    hF3.setAttribute("value", id3_v);
    form.appendChild(hF3);

    document.body.appendChild(form);
    form.submit();
  } else {
    alert("Please make selections in all three lists!");
  }
}

$(".rolldown-list li").each(function() {
  var delay = $(this).index() / 4 + "s";
  $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
  });
});

var categories = Object();
categories["Operating Systems"] = "Microsoft|macOS|Linux";
categories["Productivity Apps"] = "Office|Google Chrome|DaVinci Resolve|Boot Camp|Logger Pro|VPN & Proxy";
categories["Developer Tools"] = "Visual Studio|Anaconda Python|Java Development Kit|Greenfoot";

var sub_categories = Object();
sub_categories["Microsoft"] = "MS-DOS|Windows XP|Windows 7|Windows 10|Windows Server";
sub_categories["macOS"] = "Sierra";
sub_categories["Linux"] = "Ubuntu";
sub_categories["Office"] = "Office 2016";
sub_categories["Google Chrome"] = "For macOS|For Windows|For Linux";
sub_categories["DaVinci Resolve"] = "14";
sub_categories["Boot Camp"] = "6.1";
sub_categories["Logger Pro"] = "For macOS|For Windows";
sub_categories["VPN & Proxy"] = "OpenVPN|Shadowsocks|Glype|PHP-Proxy";
sub_categories["Visual Studio"] = "For macOS|For Windows";
sub_categories["Anaconda Python"] = "2.7|3.6";
sub_categories["Java Development Kit"] = "For macOS|For Windows|For Linux";
sub_categories["Greenfoot"] = "Environment|Projects";

html = "";
for (category in categories) {
  if (window.CP.shouldStopExecution(1)) {
    break;
  }
  if (window.CP.shouldStopExecution(1)) {
    break;
  }
  html += '<option value="' + category + '">' + category + "</option>";
  window.CP.exitedLoop(1);
}

window.CP.exitedLoop(1);
document.getElementById("category").innerHTML = document.getElementById("category").innerHTML + html;

function set_first(oCategorySel, oSubCategorySel, oSubSubCategorySel) {
  var subCategoryArr;
  oSubCategorySel.length = 0;
  oSubSubCategorySel.length = 0;
  var category = oCategorySel.options[oCategorySel.selectedIndex].text;
  if (categories[category]) {
    oSubCategorySel.disabled = false;
    oSubSubCategorySel.disabled = true;
    oSubCategorySel.options[0] = new Option("SELECT", "");
    subCategory = categories[category].split("|");
    for (var i = 0; i < subCategory.length; i++) {
      if (window.CP.shouldStopExecution(2)) {
        break;
      }
      if (window.CP.shouldStopExecution(2)) {
        break;
      }
      oSubCategorySel.options[i + 1] = new Option(
        subCategory[i],
        subCategory[i]
      );
      window.CP.exitedLoop(2);
    }
    window.CP.exitedLoop(2);
  } else {
    oSubCategorySel.disabled = true;
  }
}

function set_second(oSubCategorySel, oSubSubCategorySel) {
  var subSubCategoryArr;
  oSubSubCategorySel.length = 0;
  var subCategory = oSubCategorySel.options[oSubCategorySel.selectedIndex].text;
  if (sub_categories[subCategory]) {
    oSubSubCategorySel.disabled = false;
    oSubSubCategorySel.options[0] = new Option("SELECT", "");
    subSubCategoryArr = sub_categories[subCategory].split("|");
    for (var i = 0; i < subSubCategoryArr.length; i++) {
      if (window.CP.shouldStopExecution(3)) {
        break;
      }
      if (window.CP.shouldStopExecution(3)) {
        break;
      }
      oSubSubCategorySel.options[i + 1] = new Option(
        subSubCategoryArr[i],
        subSubCategoryArr[i]
      );
      window.CP.exitedLoop(3);
    }
    window.CP.exitedLoop(3);
  } else {
    oSubSubCategorySel.disabled = true;
  }
}

function print_second(oSubCategorySel, oSubSubCategorySel) {
  var first = oSubCategorySel.options[oSubCategorySel.selectedIndex].text;
  var second = oSubSubCategorySel.options[oSubSubCategorySel.selectedIndex].text;
}

// Copyright 2018 Resources (resources.ga). All rights reserved.
