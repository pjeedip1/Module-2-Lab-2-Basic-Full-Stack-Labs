const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//books
// const books = [];
// app.get("/", (req, res) => {
//     res.render("books", { books }); //render books page with all book data in it.
// });
// app.post("/addBook", (req, res) => {
//     const { title, author, publicationYear } = req.body;
//     books.push({ title, author, publicationYear });
//     res.redirect("/");
// })

//userinfo
// function User(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }
// app.get("/users", (req, res) => {
//   // Replace this with your actual user data or database query
//   const users = [
//     { name: "User1", age: 25, email: "user1@example.com" },
//     { name: "User2", age: 30, email: "user2@example.com" },
//     // Add more user data as needed
//   ];
//   res.render("modifieduserinfo", { users }); // Pass the users data to the template
// });
// // route handler for the form
//   app.post("/createUser", (req, res) => {
//     const { name, age, email } = req.body;
//     const user = new User(name, age, email);
//     const users = [user]
//     //const { name: userName, age: userAge, email: userEmail } = user;
//     res.render("modifieduserinfo", { users });
//   });

//fruits
// const fruits = ["Apple", "Orange", "Banana"];
// app.get("/", (req, res) => {
//     res.render("modifiedfruits", {fruits});
// })
// app.post("/addFruit", (req, res) => {
//     const {fruit} = req.body;
//     fruits.push(fruit);
//     res.redirect("/");
// })

//Add the following javascript file to app.js
// GET route for async.ejs
// app.get("/", (req, res) => {
//     res.render("modifiedasync"); // Assuming you have set up EJS as your view engine
// });
// // GET route handler for /simulateAsync (already provided)
// // POST route handler for /simulateAsync
// app.post("/simulateAsync", (req, res) => {
//     setTimeout(() => {
//         res.json({ message: "Asynchronous operation using POST completed!" });
//     }, 2000);
// });

// Serve the EJS file
// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//     res.render("modifiedhttpRequest");
// });
// // Handle POST request to /makeRequest
// app.post("/makeRequest", async (req, res) => {
//     const { url } = req.body;
//     try {
//         const response = await axios.get(url); // Make the GET request with Axios
//         res.json(response.data);
//     } catch (error) {
//         res.json({ error: error.message });
//     }
// });

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
