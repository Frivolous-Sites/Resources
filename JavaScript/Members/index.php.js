function getKey(fileName, ogID, changeID) {
  $.ajax({
    type: 'POST',
    url: "ajax-key.php",
    data: {
      'fileNM': fileName
    },
    success: function(data) {
      document.getElementById(changeID).innerHTML = data;
    }
  });
  document.getElementById(ogID).remove();
}

// Copyright 2018 Resources (resources.ga). All rights reserved.
