// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwAxVXpEG7d2Jw41NbW9f1DUcAhh4zd6o",
    authDomain: "researchq1-375c7.firebaseapp.com",
    databaseURL: "https://researchq1-375c7-default-rtdb.firebaseio.com",
    projectId: "researchq1-375c7",
    storageBucket: "researchq1-375c7.firebasestorage.app",
    messagingSenderId: "670843952693",
    appId: "1:670843952693:web:9a0b6095a1ee204f5bdb7c",
    measurementId: "G-2YJXME3X7C"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);
//const app = firebase.initializeApp(firebaseConfig);

// Function to send data to Firebase
function sendDataToFirebase() {
    const ref = firebase.database().ref('ResearchQ1');
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
    const ref = firebase.database().ref('ResearchQ1');
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
//var questionnaireDB = firebase.database().ref('ResearchQ1'); 

// Add a button in your HTML to trigger sending data to Firebase
document.getElementById("send-to-firebase-button").addEventListener("click", sendDataToFirebase);
document.getElementById("send-to-firebase-button").addEventListener('click', () => {
    // Simulate sending data to Firebase
        // Show the thank-you message after "sending" the data
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.style.display = 'block';
});
document.getElementById("next-scenario-button").addEventListener("click", sendDataScenarioToFirebase);
