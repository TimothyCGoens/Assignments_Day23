let newGroceryStoreText = document.getElementById('newGroceryStoreText')
let addGroceryStore = document.getElementById('addGroceryStore')
let viewGroceryStores = document.getElementById('viewGroceryStores')
let listOfStores = document.getElementById('listOfStores')

let database = firebase.database()

let users = []

database.ref("users")
.on("child_added", function(snapshot){
  let user = new User(snapshot.key, snapshot.val().name)
  users.push(user)
})

// adds store to database on click
addGroceryStore.addEventListener('click', function(){

  let name = newGroceryStoreText.value
  let usersRef = database.ref("users")
  let userRef = usersRef.push({
    name: name
  })
})

// displays the all the stores
viewGroceryStores.addEventListener('click', function(){
  let storeItems = users.map(function(user) {
    return `<li>
            ${user.name}
            <button id="delete" onclick="deleteStore('${user.key}')">Delete Store</button>
            </li>`
  })
  listOfStores.innerHTML = storeItems.join('')
})

//deletes the store from database
function deleteStore(key) {
  database.ref("users").child(key).remove()
}

$('#top').delay(500).animate({
  left: 575
})
$('#bottom').delay(1000).animate({
  left: 625
})
$('#addGroceryStore').delay(2000).animate({
  left: 575
})
$('#viewGroceryStores').delay(2500).animate({
  left: 575
})
$('#newGroceryStoreText').delay(1500).animate({
  left: 575
})
$('#colorSquare').delay(1600).animate({
  height: '50px',
  width: '150px'
})
$('#secondColorSquare').delay(2000).animate({
  height: '65px',
  width: '220px'
})
