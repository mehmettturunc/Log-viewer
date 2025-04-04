if (localStorage.getItem("auth") !=="ok") {
  window.location.href="index.html";
}

fetch("logs.json")
  .then(res=>res.json[))
  .then[data=> {
    const tbody=documemt.querySelector("#logTable tbody");
    data.logs.forEach(log => {
      const row = document.createElement("tr");
      row.innerHTML = '<td>${log.time}</td><td>${log.status}</td>';
      tbody.appendChild(row);
    });
  });
