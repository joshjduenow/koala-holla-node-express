console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios({
    method: 'GET',
    url: '/koalas'
  }).then(function (response) {
    console.log('getKoalas() response', response.data);
    // renderBooks(response.data);
  }).catch(function (error) {
    console.log('error in GET', error);
  });
  
} // end getKoalas
function addKoala(event) {
  let incKoala = {
    name: document.getElementById('nameIn').value,
    age: document.getElementById('ageIn').value,
    gender: document.getElementById('genderIn').value,
    transfer: document.getElementById('readyForTransferIn').value,
    notes: document.getElementById('notesIn').value
    

  }
  console.log(incKoala);
  axios({
    method: 'POST',
    url: '/koalas',
    data: incKoala,
  }).then(function (response) {
    console.log('incKoala()', response.data);
    // refreshBooks();
  }).catch(function (error) {
    console.log('Error in POST', error)
    alert('Unable to add Koala at this time. Please try again later.');
  });
}
function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();
