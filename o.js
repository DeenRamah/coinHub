document.getElementById('cat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var catName = document.getElementById('cat-name').value;
    var catAge = document.getElementById('cat-age').value;
    var catColor = document.getElementById('cat-color').value;
    var catList = document.getElementById('cat-list');
    var newCat = document.createElement('li');
    newCat.innerHTML = '<strong>' + catName + '</strong> is a ' + catAge + ' year old ' + catColor + ' cat.';
    catList.appendChild(newCat);
    document.getElementById('cat-form').reset();
  });