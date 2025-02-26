// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJRjGUWFhK706EGgBL3TGpUenO88-Bi1o",
    authDomain: "researchq2.firebaseapp.com",
    databaseURL: "https://researchq2-default-rtdb.firebaseio.com",
    projectId: "researchq2",
    storageBucket: "researchq2.firebasestorage.app",
    messagingSenderId: "1067639834355",
    appId: "1:1067639834355:web:56ac897d699cec7a699986",
    measurementId: "G-PJ661W6W8Q"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);
//const app = firebase.initializeApp(firebaseConfig);

// Function to send data to Firebase
function sendDataToFirebase() {
    const ref = firebase.database().ref('ResearchQ2');
    ref.push(answers)
        .then(() => {
            //alert("Data successfully sent to Firebase!");
        })
        .catch((error) => {
            console.error("Error sending data to Firebase:", error);
            alert("Failed to send data to Firebase.");
        });
}

function sendDataScenarioToFirebase() {
    const ref = firebase.database().ref('ResearchQ2');
    ref.push(scenarioData)
        .then(() => {
            //alert("Data successfully sent to Firebase!");
        })
        .catch((error) => {
            console.error("Error sending data to Firebase:", error);
            alert("Failed to send data to Firebase.");
        });
}


//reference your database
//var questionnaireDB = firebase.database().ref('ResearchQ2'); 

// Add a button in your HTML to trigger sending data to Firebase
document.getElementById("send-to-firebase-button").addEventListener("click", sendDataToFirebase);
document.getElementById("send-to-firebase-button").addEventListener('click', () => {
    // Simulate sending data to Firebase
        // Show the thank-you message after "sending" the data
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.style.display = 'block';
});
document.getElementById("next-scenario-button").addEventListener("click", sendDataScenarioToFirebase);
