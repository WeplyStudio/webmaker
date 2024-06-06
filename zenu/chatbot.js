// chatbot.js
document.addEventListener("DOMContentLoaded", function() {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const deleteButton = document.getElementById("delete-button");

    const MESSAGE_LIMIT = 100;
    const STORAGE_KEY = 'chatbotMessageLimit';

    function loadLimitStatus() {
        const status = localStorage.getItem(STORAGE_KEY);
        if (status) {
            return JSON.parse(status);
        } else {
            return {
                count: 0,
                date: new Date().toLocaleDateString()
            };
        }
    }

    function saveLimitStatus(status) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
    }

    let limitStatus = loadLimitStatus();

    const currentDate = new Date().toLocaleDateString();
    if (limitStatus.date !== currentDate) {
        limitStatus = {
            count: 0,
            date: currentDate
        };
        saveLimitStatus(limitStatus);
    }

    deleteButton.addEventListener("click", function() {
        clearChatLog();
    });

    function clearChatLog() {
        chatLog.innerHTML = "";
    }

    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    userInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function appendMessage(message, isUserMessage) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = message.replace(/\n/g, "<br>");
        messageElement.classList.add("chat-card");

        if (isUserMessage) {
            messageElement.classList.add("user-message");
        } else {
            messageElement.classList.add("bot-message");
        }

        chatLog.appendChild(messageElement);
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        if (limitStatus.count >= MESSAGE_LIMIT) {
            appendMessage("Maaf, Anda telah mencapai limit pesan harian.", false);
            userInput.value = "";
            return;
        }

        const isProfane = checkForProfanity(userMessage);
        if (isProfane) {
            appendMessage("Gausah toxic, gausah kebanyakan gaya lu toxic mulu, gw banned tau rasa lu", false);
            userInput.value = "";
            return;
        }

        const userWords = userMessage.split(/\s+/);
        for (const word of userWords) {
            if (checkForProfanity(word)) {
                appendMessage("Maaf, Anda tidak diizinkan mengirimkan pesan kasar.", false);
                userInput.value = "";
                return;
            }
        }

        appendMessage(userMessage, true);

        limitStatus.count++;
        saveLimitStatus(limitStatus);

        setTimeout(function() {
            const botResponse = getBotResponse(userMessage);
            appendMessage(botResponse, false);
        }, 1000);

        userInput.value = "";
    }
            
    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        
        if (lowerCaseMessage.includes("ada") || lowerCaseMessage.includes("ad") || lowerCaseMessage.includes("ada dong") || lowerCaseMessage.includes("ad dong") || lowerCaseMessage.includes("ada duong") || lowerCaseMessage.includes("yah ada dong")) {
            return "Emang lu butuh bantuan apaan? sini kasih tau gw, tapi ntar aja pas gw udah di upgrade, soalnya gw nih masih belum pinter, masih harus banyak belajar awoakwowk :)";
        } else
        if (lowerCaseMessage.includes("berapa limit saya") || lowerCaseMessage.includes("berapa limit gw") || lowerCaseMessage.includes("woy berapa limit gw") || lowerCaseMessage.includes("sisa limit") || lowerCaseMessage.includes(".limit")) {
    return `Sisa limit pesan harian kamu adalah ${MESSAGE_LIMIT - limitStatus.count} pesan.`;
}
        if (lowerCaseMessage.includes("lah") || lowerCaseMessage.includes("lah napa nih") || lowerCaseMessage.includes("lah ini napa") || lowerCaseMessage.includes("lah napa lu?") || lowerCaseMessage.includes("lah lu napa?")) {
            return "Gak semua perintah lu bisa gw jawab kocak, gw juga masih belum sempurna :v gak kayak dia yang udah sempurna :)";
        } else
        if (lowerCaseMessage.includes("hai") || lowerCaseMessage.includes("halo") || lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            return "Halo!\n\nGw tuh Zenu AI, ada yang bisa gw bantu? kalau gak butuh bantuan gausah spam! ntar limit lu habis malah nangis :v";
        } else 
        if (lowerCaseMessage.includes("oke") || lowerCaseMessage.includes("oukey") || lowerCaseMessage.includes("oughey") || lowerCaseMessage.includes("ngoghey") || lowerCaseMessage.includes("okey") || lowerCaseMessage.includes("ohh oke") || lowerCaseMessage.includes("ohh ok") || lowerCaseMessage.includes("ohh oughey") || lowerCaseMessage.includes("oh ok") || lowerCaseMessage.includes("yaudah") || lowerCaseMessage.includes("ywdh") || lowerCaseMessage === "ok") {
            const responses = [
                "yaudah, ada yang bisa gw bantu? kalau gak ada gausah spam! ntar limit lu abis malah nangess awokawok",
                "Siapp lah, ada yang bisa gw bantu? kalau gak ada gausah spam! ati ati limit lu abis wkwkw :v",
                "Siap boss!, ada yang bisa gw bantu? kalau gak ada gausah spam! kalo limit lu abis jan salahin gw soalnya lu yang ngespam",
                "Oke, gw ngerti, ada yang bisa gw bantu? kalau gak ada gausah spam! ntar limit lu abis jan nangis",
                "oughey, jangan spam yak ntar limit lu habis malah nangis awoakowwoo :v"
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        } else 
        if (lowerCaseMessage.includes("apa itu indonesia?") || lowerCaseMessage.includes("dimana negara indonesia?") || lowerCaseMessage.includes("apa itu indo") || lowerCaseMessage.includes("apasih indonesia itu") || lowerCaseMessage.includes("apa itu indonesia") || lowerCaseMessage.includes("siapa itu indonesia") || lowerCaseMessage === "apa itu indo") {
            const responses = [
                "jadi indonesia tuh sebuah negara kepualauan bray, nah indoensia tuh terletak di Asia Tenggara dan Oseania. \n\n𝗚𝗲𝗼𝗴𝗿𝗮𝗳𝗶: Indonesia terdiri dari lebih dari 17.000 pulau, dengan pulau-pulau utama termasuk Sumatra, Jawa, Kalimantan (bagian dari Borneo), Sulawesi, dan Papua. Negara ini berbatasan dengan Malaysia, Papua Nugini, dan Timor Leste.\n\n𝗣𝗼𝗽𝘂𝗹𝗮𝘀𝗶: Indonesia adalah negara dengan populasi terbesar keempat di dunia, dengan lebih dari 270 juta penduduk. Mayoritas penduduknya beragama Islam, menjadikannya negara dengan populasi Muslim terbesar di dunia.\n\n𝗜𝗯𝘂𝗸𝗼𝘁𝗮: Jakarta adalah ibukota dari negara indonesia, kota tersebut merupakan kote metropolitan yah bray!\n\nIndonesia dikenal dengan keindahan alamnya, termasuk pantai-pantai yang indah, gunung berapi yang aktif, dan hutan hujan tropis yang lebat, menjadikannya destinasi populer bagi wisatawan dari seluruh dunia. Udah ngerti kan bray? kalau belum yaudah belajar sendiri aja :v"
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        } else
        if (lowerCaseMessage.includes("siapa yang buat lu?") || lowerCaseMessage.includes("oukey") || lowerCaseMessage.includes("siapa yang buat lu") || lowerCaseMessage.includes("siapa pencipta lu") || lowerCaseMessage.includes("siapa pencipta lu?") || lowerCaseMessage.includes("siapa yang punya lu?") || lowerCaseMessage.includes("owner lu saha?") || lowerCaseMessage.includes("siapa lu?") || lowerCaseMessage.includes("siapa lu") || lowerCaseMessage.includes("saha lu") || lowerCaseMessage.includes("saha lu?") || lowerCaseMessage === "pencipta lu?") {
            const responses = [
                "Gw tuh ZenuAI, gw dibuat sama Weply Studio dan gw bakalan bantuin semua masalah lu, tapi masalah nya yang masuk akal dong, jangan suruh gw buat nyuri piring atau benerin laptop juga :v"
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        } else
        
         {
            return "Maaf, Zenu AI sedang dalam tahap pengembangan, beberapa perintah belum dapat dijawab otomatis oleh AI!";
        }
    }
    function checkForProfanity(message) {
        const profaneWords = ["anjing", "babi", "bangsat", "kontol", "ngentod", "memek", "asu", "chawnimale", "chibay", "cibay", "entod", "sange", "asw" ,"bangke", "anjay", "anj", "anjrit", "anjir", "bodoh", "goblok", "gblk", "tolol", "pepek", "toket", "tobrut", "kemem", "gblk", "ngtd", "jnck", "bngke", "mmk", "mmek", "memk", "kontl", "kntol", "kntl", "kintil", "bgst", "ppk", "anjr", "cnm", "cby", "ewe", "ew"];
        const lowerCaseMessage = message.toLowerCase();
        for (const word of profaneWords) {
            if (lowerCaseMessage.includes(word)) {
                return true;
            }
        }
        return false;
    }
});
