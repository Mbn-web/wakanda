// Array of 10 users with personalized messages and user-specific videos
const users = [
    { username: 'user1', password: 'password1', photo: 'user1-photo.jpg', message: 'Welcome back, user1! You have 5 new messages.', video: 'logovid.mp4' },
    { username: 'user2', password: 'password2', photo: 'user2-photo.jpg', message: 'Hello, user2! You have 3 new notifications.', video: 'user2-video.mp4' },
    { username: 'user3', password: 'password3', photo: 'user3-photo.jpg', message: 'Hey, user3! Your last login was 2 days ago.', video: 'user3-video.mp4' },
    { username: 'user4', password: 'password4', photo: 'user4-photo.jpg', message: 'Welcome back, user4! You have 10 new followers.', video: 'user4-video.mp4' },
    { username: 'user5', password: 'password5', photo: 'user5-photo.jpg', message: 'Hello, user5! Your profile has been updated.', video: 'user5-video.mp4' },
    { username: 'user6', password: 'password6', photo: 'user6-photo.jpg', message: 'Hi, user6! Check out the latest updates in your dashboard.', video: 'user6-video.mp4' },
    { username: 'user7', password: 'password7', photo: 'user7-photo.jpg', message: 'Welcome, user7! Don’t forget to complete your profile.', video: 'user7-video.mp4' },
    { username: 'user8', password: 'password8', photo: 'user8-photo.jpg', message: 'Hey, user8! Your last post got 20 likes!', video: 'user8-video.mp4' },
    { username: 'user9', password: 'password9', photo: 'user9-photo.jpg', message: 'Hi, user9! You have 2 pending tasks to complete.', video: 'user9-video.mp4' },
    { username: 'user10', password: 'password10', photo: 'user10-photo.jpg', message: 'Welcome, user10! You’ve earned a badge for your contributions.', video: 'user10-video.mp4' }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Find the user by matching username and password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Hide login form and show welcome page
        document.querySelector(".login-container").style.display = "none";
        const welcomePage = document.getElementById("welcomePage");
        welcomePage.style.display = "flex";

        // Personalize the welcome message with the custom message for the user
        document.getElementById("welcomeText").textContent = user.message; // Display personalized message

        // Set user photo dynamically
        document.getElementById("userPhoto").src = user.photo; // Display the user's photo

        // Change the background video to the user's specific video
        document.getElementById("backgroundVideo").src = user.video; // Set user-specific video
        document.getElementById("backgroundVideo").load(); // Ensure the video starts playing
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
