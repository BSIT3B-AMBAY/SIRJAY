// Import the html5-qrcode library
const html5QrCode = new Html5Qrcode("reader");

html5QrCode.start(
  { facingMode: "environment" }, // Use rear camera
  {
    fps: 10,
    qrbox: { width: 250, height: 250 },
  },
  (decodedText, decodedResult) => {
    // Process the scanned data
    console.log(decodedText);
    addAttendance(decodedText);
  },
  (errorMessage) => {
    console.warn(errorMessage); // Handle scan errors
  }
);

function addAttendance(data) {
  const tableBody = document.getElementById("attendance-logs");
  const row = document.createElement("tr");
  
  // Add Name and Time
  const nameCell = document.createElement("td");
  nameCell.innerText = data;
  const timeCell = document.createElement("td");
  timeCell.innerText = new Date().toLocaleTimeString();

  row.appendChild(nameCell);
  row.appendChild(timeCell);
  tableBody.appendChild(row);
}
