function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: 1, name: "John" };
      resolve(userData);
    }, 1000);
  });
}

function fetchUserPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userPosts = ["Post 1", "Post 2", "Post 3"];
      resolve(userPosts);
    }, 1000);
  });
}

fetchUserData()
  .then((userData) => {
    console.log("Nome dell'utente:", userData.name);
    return fetchUserPosts(userData.id);
  })
  .then((userPosts) => {
    console.log("Titoli dei post:", userPosts);
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
