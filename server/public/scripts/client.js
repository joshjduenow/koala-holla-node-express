console.log('js');

function getKoalas() {
  console.log('in getKoalas');
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
    let koalaDisplay = ` <tr data-koalaId="${koala.id}">
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.transfer}</td>
      <td>${koala.notes}</td>
      <td><button onclick="deleteKoala(event)">Delete</button>`
      viewKoalas.innerHTML += koalaDisplay
    if (koala.transfer === false) {
        viewKoalas.innerHTML += `
        <button class="transferButton" onclick="saveKoala(event,${koala.id})">Ready for Transfer</button>` 
        }
        viewKoalas.innerHTML += `</td></tr>`
    }
}
function deleteKoala(event) {
  event.preventDefault();

  let deleteKoala = event.target.closest('tr');
  let koalaId = deleteKoala.getAttribute('data-koalaId');
  console.log("check delete button and koalaID", deleteKoala, koalaId)

  axios({
    method: 'DELETE',
    url: `/koalas/${koalaId}`
  }).then(function (response) {
    getKoalas();

  }).catch(function (error) {
    console.log('error in DELETE', error);
  });
}


function saveKoala(event,id) {
  event.preventDefault()
  console.log('in saveKoala');
  console.log("check save koala and koalaID")

  axios({
    method: 'PUT',
    url: `/koalas/${id}`
  }).then(function (response) {
    getKoalas();

  }).catch(function (error) {
    console.log('error in PUT', error);
  });
  // axios call to server to get koalas

}

getKoalas();
