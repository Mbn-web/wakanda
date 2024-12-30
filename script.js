// Static user credentials and personalized messages
const users = [
    { username: 'user1', password: 'password1', message: 'Welcome beta tester, report the issues' },
    { username: 'Abhay', password: 'Dsec', message: 'Hello, User 2!' },
    { username: 'Parayush', password: 'meethi', message: 'Greetings, User 3!' },
    { username: 'Neeraj', password: 'Shruti', message: 'Hi, User 4!' },
    { username: 'Vijayendra', password: 'Jayverdhane', message: 'Welcome, User 5!' },
    { username: 'Angel', password: 'Maggie', message: 'Good to see you, User 6!' },
    { username: 'Tanisha', password: 'Carlos', message: 'Hey there, User 7!' },
    { username: 'Khushi', password: 'Rohit', message: 'Welcome aboard, User 8!' },
    { username: 'Kajol', password: 'Kejual', message: 'Hello again, User 9!' },
    { username: 'Shrushti', password: 'Volleyball', message: 'Hi, User 10!' },
];

// Array of 50 images with descriptions
const imageCollection = [
    { src: `image/img1.jpg`, description: `This is vijay aana.` },
    { src: 'image/img2.jpg', description: 'This is neeru' },
    { src: 'image/img3.jpg', description: 'This is ' },
    { src: 'image/img4.jpg', description: 'This is neeru' },
    { src: 'image/img5.jpg', description: 'This is neeru' },
    { src: 'image/img6.jpg', description: 'This is neeru' },
    { src: 'image/img7.jpg', description: 'This is mbn' },
    { src: 'image/img8.jpg', description: 'This is neeru' },
    { src: 'image/img9.jpg', description: 'This is neeru' },
    { src: 'image/img10.jpg', description: 'This is neeru' },
    { src: 'image/img11.jpg', description: 'This ' },
    { src: 'image/img12.jpg', description: 'This is neeru' },
    { src: 'image/img13.jpg', description: 'This is neeru' },
    { src: 'image/img14.jpg', description: 'This is neeru' },
    { src: 'image/img15.jpg', description: 'This is neeru' },
    { src: 'image/img16.jpg', description: 'This is neeru' },
    { src: 'image/img17.jpg', description: 'This is neeru' },
    { src: 'image/img18.jpg', description: 'This is neeru' },
    { src: 'image/img19.jpg', description: 'This is neeru' },
    { src: 'image/img20.jpg', description: 'This is neeru' },
    { src: 'image/img21.jpg', description: 'This is neeru' },
    { src: 'image/img22.jpg', description: 'This is neeru' },
    { src: 'image/img23.jpg', description: 'This is neeru' },
    { src: 'image/img24.jpg', description: 'This is neeru' },
    { src: 'image/img25.jpg', description: 'This is neeru' },
    { src: 'image/img26.jpg', description: 'This is neeru' },
    { src: 'image/img27.jpg', description: 'This is neeru' },
    { src: 'image/img28.jpg', description: 'This is neeru' },
    { src: 'image/img29.jpg', description: 'This is neeru' },
    { src: 'image/img30.jpg', description: 'This is neeru' },
    { src: 'image/img31.jpg', description: 'This is neeru' },
    { src: 'image/img32.jpg', description: 'This is neeru' },
    { src: 'image/img33.jpg', description: 'This is neeru' },
    { src: 'image/img34.jpg', description: 'This is neeru' },
    { src: 'image/img35.jpg', description: 'This is neeru' },
    { src: 'image/img36.jpg', description: 'This is neeru' },
    { src: 'image/img37.jpg', description: 'This is neeru' },
    { src: 'image/img38.jpg', description: 'This is neeru' },
    { src: 'image/img39.jpg', description: 'This is neeru' },
    { src: 'image/img40.jpg', description: 'This is neeru' },
    { src: 'image/img41.jpg', description: 'This is neeru' },
    { src: 'image/img42.jpg', description: 'This is neeru' },


];

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate user credentials
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Hide login form and show gallery
        document.querySelector(".login-container").style.display = "none";
        const welcomePage = document.getElementById("welcomePage");
        welcomePage.style.display = "block";

        // Add class to body for scrollable content
        document.body.classList.remove('login-page'); // Remove login-page class
        document.body.classList.add('welcome-page'); // Add welcome-page class

        // Display personalized message
        document.getElementById("welcomeMessage").innerText = user.message;

        // Populate the photo gallery
        const photoGallery = document.getElementById("photoGallery");
        photoGallery.innerHTML = ""; // Clear previous content

        imageCollection.forEach((image, index) => {
            const photoItem = document.createElement("div");
            photoItem.classList.add("photo-item");

            photoItem.innerHTML = `
                <div class="description">${image.description}</div>
                <img src="${image.src}" alt="Image ${index + 1}">
            `;

            photoGallery.appendChild(photoItem);
        });
    } else {
        alert("Invalid credentials. Please try again.");
    }

});
