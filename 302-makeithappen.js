// Tee jotain kivaa ja silleen

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDZrvIXHig9GDl8cgFtXmTYheOVnnp-dAU',
  authDomain: 'todo-app-f7a03.firebaseapp.com',
  databaseURL: 'https://todo-app-f7a03.firebaseio.com',
  projectId: 'todo-app-f7a03',
  storageBucket: 'todo-app-f7a03.appspot.com',
  messagingSenderId: '153458446362',
};
firebase.initializeApp(config);

readTodos();
addNewTodo('Tämä on kaikista uusin');

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
    .on('value', function(snapshot) {
      var todos = document.getElementById('todos');
      todos.innerHTML = '';
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childSnapshot.key);
        console.log(childData.name);
        console.log(childData.done);

        var elem = document.createElement('li');

        if (childData.done) {
          elem.className = 'done';
        }
        elem.innerHTML = childData.name;
        todos.appendChild(elem);
      });
    });
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
