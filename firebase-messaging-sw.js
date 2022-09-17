
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyC7s_qvCXXzuDpk_G2VabP9J4DHckdsEJA",
    authDomain: "q3carcare-6efb7.firebaseapp.com",
    databaseURL: "https://q3carcare-6efb7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "q3carcare-6efb7",
    storageBucket: "q3carcare-6efb7.appspot.com",
    messagingSenderId: "82800552387",
    appId: "1:82800552387:web:f5e4a0bd8377ee96fdf576",
    measurementId: "G-51XEMWDKY0"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    // const notificationTitle = 'Background Message Title';
    // const notificationOptions = {
    //   body: 'Background Message body.',
    //   icon: '/firebase-logo.png'
    // };

    const notification = JSON.parse(payload);
    const notificationTitle = notification.title;
    const notificationOptions = {
      body: notification.body,
      icon: notification.icon,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  