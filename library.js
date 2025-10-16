document.body.innerHTML = "";

const message = document.createElement("div");
message.textContent = "License Expired: You have not paid the developer (zubitodesigns@gmail.com).";
message.style.position = "fixed";
message.style.top = "50%";
message.style.left = "50%";
message.style.transform = "translate(-50%, -50%)";
message.style.background = "#ff0000";
message.style.color = "#ffffff";
message.style.padding = "20px";
message.style.fontSize = "20px";
message.style.fontWeight = "bold";
message.style.textAlign = "center";
message.style.borderRadius = "10px";
document.body.appendChild(message);
