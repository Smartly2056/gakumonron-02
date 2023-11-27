"use strict"

function uploadPhoto() {
  let input = document.getElementById('photoInput');
  let displayArea = document.getElementById('displayArea');

  if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
          // 画像を表示
          displayArea.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Photo" style="max-width: 100%;">';
      };

      reader.readAsDataURL(input.files[0]);
  }
}
