document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var password = document.getElementById('passwordInput').value;
    var codewords = ['cutengri', 'Cutengri', "Çutengri", "çutengri"]; // Replace with your desired password
  
    if (codewords.includes(password.toLowerCase())) {
      // Password matches, show your poem (in this case, the image)
      var contentDiv = document.getElementById('content');
      contentDiv.innerHTML = '<h1>Bugün senin doğum günün</h1><img src="./panda.png" alt="Your Image"><p>Bu dünyaya da benim dünyama da bir daha senin kadar masalsı biri doğmayacak, iyi ki doğdun</p>';
    } else {
      alert('Bilemedin, biraz daha düşün...'); // Display an error message
    }
  });
  