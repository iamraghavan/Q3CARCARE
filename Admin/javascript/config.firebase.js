var firebaseConfig = {
    apiKey: "AIzaSyC7s_qvCXXzuDpk_G2VabP9J4DHckdsEJA",
    authDomain: "q3carcare-6efb7.firebaseapp.com",
    databaseURL: "https://q3carcare-6efb7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "q3carcare-6efb7",
    storageBucket: "q3carcare-6efb7.appspot.com",
    messagingSenderId: "82800552387",
    appId: "1:82800552387:web:f5e4a0bd8377ee96fdf576",
    measurementId: "G-51XEMWDKY0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
// firebase.analytics();