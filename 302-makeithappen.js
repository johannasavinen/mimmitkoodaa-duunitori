function addNewTodo(name) {
  var newTodoKey = firebase
    .database()
    .ref()
    .child('todos')
    .push().key;
  updateTodo(newTodoKey, name, false);
}

function readTodos() {
  firebase
    .database()
    .ref('todos')
    .on('value', updateDOM);
}

function updateTodo(key, name, done) {
  firebase
    .database()
    .ref('todos/' + key)
    .set({
      name: name,
      done: done,
    });
}

function removeTodo(key) {
  firebase
    .database()
    .ref('todos/' + key)
    .remove();
}

function updateDOM(snapshot) {
  // Valitse sivulta ul-elementti
  var todos = document.getElementById('todos');
  todos.innerHTML = '';
  snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();

    var elem = document.createElement('li');

    if (childData.done) {
      elem.className = 'done';
    }

    elem.setAttribute('data-dbkey', childSnapshot.key);
    elem.innerHTML = childData.name;
    todos.appendChild(elem);
  });
}

// Firebase-tietokannan asetukset
var config = {
  apiKey: 'AIzaSyDZrvIXHig9GDl8cgFtXmTYheOVnnp-dAU',
  authDomain: 'todo-app-f7a03.firebaseapp.com',
  databaseURL: 'https://todo-app-f7a03.firebaseio.com',
  projectId: 'todo-app-f7a03',
  storageBucket: 'todo-app-f7a03.appspot.com',
  messagingSenderId: '153458446362',
};
// Avaa yhteys Firbase-tietokantaan
firebase.initializeApp(config);

// Lue tietokannasta tämänhetkinen todo-lista
readTodos();

document.addEventListener('submit', function(event) {
  event.preventDefault();
  addNewTodo(document.getElementById('task-input').value);
});

document.addEventListener('click', function(event) {
  console.log(event.target);
  updateTodo(
    event.target.getAttribute('dbkey'),
    event.target.innerHTML,
    !event.target.classList.contains('done')
  );
});
