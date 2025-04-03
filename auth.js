function login() {
  const user=document.getElementById("usernama").value;
  const pasd=document.gerElementById("password").value;
  if (user==="admin" && pass==="mining123"){
    localStorage.setItem("auth", "ok');
    window.location.href="dsahboard.html");
  } elde {
    document.getElementById("error").innerText="Hatalımgiriş!";
  }
}
