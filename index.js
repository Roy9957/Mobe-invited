const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  // HTML Content with Title and Yes/No buttons
  const html_content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Join The Game - MOBE GAME</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-image: url('https://assets.onecompiler.app/42swzbgaa/4324xpz7j/1000048826.jpg');
                background-size: cover;
                background-repeat: no-repeat;
                color: #FFFFFF;
                text-align: center;
                height: 100vh;
                overflow: hidden;
                position: relative;
            }
            .container {
                background-color: rgba(0, 0, 0, 0.6);
                padding: 30px;
                justify-content: center;
                margin-top: 250px;
                left:25px;
                border-radius: 10px;
                width: 320px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
                position: relative;
                z-index: 2;
            }
            h1 {
                font-size: 30px;
                color: #33cc33;
                margin-bottom: 20px;
            }
            p {
                font-size: 16px;
                color: #ccc;
                margin-bottom: 20px;
            }
            .join-btn, .exit-btn {
                background-color: #33cc33;
                color: #fff;
                font-size: 18px;
                padding: 15px 30px;
                border-radius: 5px;
                text-decoration: none;
                margin: 10px;
                display: inline-block;
                transition: background-color 0.3s ease, transform 0.3s ease;
            }
            .join-btn:hover, .exit-btn:hover {
                background-color: #28a728;
                transform: scale(1.1);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to MOBE GAME!</h1>
            <p>Click "Join" to start your adventure, or click "Exit" if you decide to leave.</p>
            <a href="#" class="join-btn" id="joinBtn">Join The Game</a>
            <a href="#" class="exit-btn" id="exitBtn">Exit</a>
        </div>

        <script>
            // Join button functionality
            document.querySelector('.join-btn').addEventListener('click', function() {
                // Redirect to the game page
                setTimeout(function() {
                    window.location.href = "https://roy9957.github.io/MOBE-GAME/game.html";
                }, 500);
            });

            // Exit button functionality
            document.querySelector('.exit-btn').addEventListener('click', function() {
                document.body.innerHTML = "<h2 style='color:white; text-align:center;'>Thank you for joining!</h2>";
                setTimeout(function() {
                    window.close();
                    if (!window.closed) {
                        alert("You can back now.");
                    }
                }, 2000);
            });
        </script>
    </body>
    </html>
  `;
  res.send(html_content);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
