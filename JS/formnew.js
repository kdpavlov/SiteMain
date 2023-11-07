let input = document.querySelector('input');
function send() {
      document.getElementById("phone").value = input;
      document.getElementById("UserEnter").submit();
}

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)