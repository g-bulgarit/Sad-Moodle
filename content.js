// Fetch the carousel htmlCollection from the DOM
var children_collection = document.getElementsByClassName("carousel-inner").item(0).children;

// Some random sad images from unsplash...
var img_arr = ['https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80',
               'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
               'https://images.unsplash.com/photo-1544466387-2ed2ced1183a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
               'https://images.unsplash.com/photo-1542849790-bd68b88fbe11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80'];

// Switch all of the background images in the carousel with the sad images from unsplash
for (let i = 0; i < children_collection.length; i++) {
    children_collection[i].style.backgroundImage = `url('${img_arr[i]}')`;
  }