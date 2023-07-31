function getTimestamp() {
  const dateString = document.getElementById('dateString').value;
  fetch(`/api/timestamp/${encodeURIComponent(dateString)}`) // Ensure proper encoding of the date string
    .then(response => response.json())
    .then(data => {
      const resultDiv = document.getElementById('result');
      resultDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error(error));
}
