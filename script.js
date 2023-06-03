document.getElementById('eligibility-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var age = parseInt(document.getElementById('age').value);
    var province = document.getElementById('province').value;
    var income = parseFloat(document.getElementById('income').value);
  
    // Check eligibility
    var eligiblePrograms = [];
  
    if (age < 12 && province === 'Ontario' && income < 90000) {
      eligiblePrograms.push('Canada Dental Benefits');
    }
    if (age < 17 && province === 'Ontario' && income < 24930) {
      eligiblePrograms.push('Healthy Smile Ontario');
    }
    if (age > 65 && province === 'Ontario') {
      eligiblePrograms.push('Ontario Seniors Dental Care Program');
    }
  
    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
  
    if (eligiblePrograms.length > 0) {
      var resultText = '<h2>Based on your responses, you may be eligible for the following program:</h2>';
      resultText += '<ul>';
  
      for (var i = 0; i < eligiblePrograms.length; i++) {
        resultText += '<li>' + eligiblePrograms[i] + '</li>';
      }
  
      resultText += '</ul>';
      resultText += '<p>Please reference the relevant resources to confirm your eligibility.</p>';
  
      resultElement.innerHTML = resultText;
      resultElement.classList.remove('hidden');
    } else {
      var resultText = '<h2>Based on your responses, we couldn\'t find an eligible government-funded program.</h2>';
      resultText += '<p>Please reference the following site to confirm:</p>';
      resultText += '<a href="https://example.com">Example Government Benefits Website</a>';
  
      resultElement.innerHTML = resultText;
      resultElement.classList.remove('hidden');
    }
  });
  