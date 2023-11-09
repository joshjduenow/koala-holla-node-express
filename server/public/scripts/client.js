console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios({
    method: 'GET',
    url: '/koalas'
  }).then(function (response) {
    console.log('getKoalas() response', response.data);
      renderKoalas(response.data);
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
      getKoalas();
  }).catch(function (error) {
    console.log('Error in POST', error)
    alert('Unable to add Koala at this time. Please try again later.');
  });
}
function renderKoalas(koalas) {
  console.log(koalas);
  const viewKoalas = document.getElementById('viewKoalas')
  viewKoalas.innerHTML = '';
    
    for (let koala of koalas) {

    // let readButtonText = 'Read'
    // if (book.isRead === true) {
    //   readButtonText = '🥹'
    // }

    // For each book, append a new row to our table
    viewKoalas.innerHTML += `
      <tr data-koalaId="${koala.id}">
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.transfer}</td>
        <td>${koala.notes}</td>
        <td><button onclick="deleteBook(event)">Delete</button></td>
   

      </tr>
    `}
    // <td><button onclick="checkRead(event)">${readButtonText}</button></td>

  }

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();
