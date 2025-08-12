  // Αρχικοποίηση Firebase
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);

  // Αντιμετώπιση υποβολής της φόρμας
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Αποτροπή της προεπιλεγμένης συμπεριφοράς φόρμας

    // Συλλογή δεδομένων από τη φόρμα
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Αποθήκευση δεδομένων στη βάση δεδομένων Firebase
    const db = firebase.firestore();
    await db.collection('messages').add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Καθαρισμός της φόρμας μετά την υποβολή
    contactForm.reset();
    alert('Το μήνυμα σας αποθηκεύτηκε με επιτυχία!');
  });
