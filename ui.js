$(document).ready(function(){

    // Sample random conversations about crypto
    const cryptoConversations = [
        "I want to buy some coins. Can you help me?",
        "I'm interested in buying Bitcoin. How much do you have?",
        "I'm looking to buy $1000 worth of Ethereum. Do you have any available?",
        "I've sent you my wallet address: 12ytwyhgfditerghgfeyrfhds. Please confirm.",
        "Here's the screenshot of the transaction. Please check.",
        "Please provide feedback after completing the trade.",
        // Add more crypto conversations here
    ];

    // Function to display a random conversation
    function displayRandomConversation() {
        const randomIndex = Math.floor(Math.random() * cryptoConversations.length);
        const randomConversation = cryptoConversations[randomIndex];
        $(".msg_card_body").append('<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">' + randomConversation + '<span class="msg_time">' + getCurrentTime() + '</span></div></div>');
    }

    // Function to get the current time in HH:MM format
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return hours + ':' + minutes;
    }

    // Send message function
    function sendMessage() {
        const message = $(".type_msg").val();
        if (message.trim() !== '') {
            $(".msg_card_body").append('<div class="d-flex justify-content-end mb-4"><div class="msg_cotainer_send">' + message + '<span class="msg_time_send">' + getCurrentTime() + '</span></div><div class="img_cont_msg"><img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256" class="rounded-circle user_img_msg"></div></div>');
            $(".type_msg").val('');
            // Automatically scroll to the bottom of the chat box
            $(".msg_card_body").scrollTop($(".msg_card_body")[0].scrollHeight);
            // Simulate typing indicator for the other user
            simulateTyping();
            // After a short delay, display a random conversation
            setTimeout(function() {
                displayRandomConversation();
            }, 1000);
        }
    }

    // Function to simulate typing indicator
    function simulateTyping() {
        $(".msg_card_body").append('<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">Typing...<span class="msg_time">' + getCurrentTime() + '</span></div></div>');
        // Automatically scroll to the bottom of the chat box
        $(".msg_card_body").scrollTop($(".msg_card_body")[0].scrollHeight);
    }

    // Function to handle sending message when Enter key is pressed
    $(".type_msg").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            sendMessage();
        }
    });

    // Function to handle sending message when send button is clicked
    $(".send_btn").click(function(){
        sendMessage();
    });

    // Function to handle displaying random conversation when attachment button is clicked
    $(".attach_btn").click(function(){
        displayRandomConversation();
    });

    // Function to handle video call button click
    $(".video_cam").click(function(){
        // Implement video call functionality here
        alert("Initiating video call...");
    });

    // Function to handle voice call button click
    $(".voice_call").click(function(){
        // Implement voice call functionality here
        alert("Initiating voice call...");
    });

    // Function to handle feedback button click
    $(".feedback_btn").click(function(){
        // Implement feedback functionality here
        alert("Please provide feedback after completing the trade.");
    });

    // Function to handle file upload button click
    $(".file_upload").click(function(){
        // Implement file upload functionality here
        alert("Choose file to upload...");
    });

    // Moderator introduction
    $(".msg_card_body").append('<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">Hello, I am the moderator for this trade. Please ensure that all transactions are legitimate and abide by the trading guidelines.<span class="msg_time">' + getCurrentTime() + '</span></div></div>');

});
