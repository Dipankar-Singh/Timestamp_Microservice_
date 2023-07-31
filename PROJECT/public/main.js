function getTimestamp() {
  const dateString = document.getElementById('dateString').value;
  fetch(`/api/timestamp/${dateString}`)
    .then(response => response.json())
    .then(data => {
      const resultDiv = document.getElementById('result');
      resultDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error(error));
}
