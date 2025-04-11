// This file will contain the JavaScript for the web demo
document.getElementById("submitBtn").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    fetch("https://api-inference.huggingface.co/models/raarongraham/cert-skill-match", {
        method: "POST",
        headers: { "Authorization": "Bearer" + prompt("Enter your Hugging Face API token:") + "" },
        body: JSON.stringify({ inputs: userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("output").innerText = data[0].answer;
    })
    .catch(error => {
        document.getElementById("output").innerText = "Error: " + error;
    });
});
