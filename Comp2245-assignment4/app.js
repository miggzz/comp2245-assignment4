document.getElementById('searchButton').addEventListener('click', function () {

    const searchTerm = document.getElementById('searchInput').value;
  
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle the response data
        const result = JSON.parse(xhr.responseText);
        displayResult(result);
      }
    };
  
    xhr.open('GET', `superheroes.php?query=${encodeURIComponent(searchTerm)}`, true);
    xhr.send();
  });
  
  function displayResult(result) {
    const resultDiv = document.getElementById('result');
  
    if (result.length === 0) {
      resultDiv.innerHTML = 'Superhero not found';
    } else {
        
      const superhero = result[0];
      resultDiv.innerHTML = `
        <h3>${superhero.alias}</h3>
        <h4>${superhero.name}</h4>
        <p>${superhero.biography}</p>
      `;
    }
  }
  