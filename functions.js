import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm9HdJ92vSLrKRclI6Z2J4bmvlFgR4AuU",
  authDomain: "mang-yana.firebaseapp.com",
  projectId: "mang-yana",
  storageBucket: "mang-yana.appspot.com",
  messagingSenderId: "1094982396668",
  appId: "1:1094982396668:web:2d103526ab40a59efc0579",
  measurementId: "G-MF48P7VG5P"
};
// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function ambilDaftarMapel() {
  const refDokumen = collection(db, "Mapel");
  const kueri = query(refDokumen, orderBy("hari"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      hari: dok.data().hari,
      jamke: dok.data().jamke,
      kelas: dok.data().kelas,
      mapel: dok.data().mapel,
      namaguruMapel: dok.data().namaguruMapel,
      waktu: dok.data().waktu,
     

    });
  });



  return hasil;
}

// ambil data untuk guru
export async function ambilDaftarGuru() {
  const refDokumen = collection(db, "guru");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      hari: dok.data().hari,
      jamke: dok.data().jamke,
      kelas: dok.data().kelas,
      mapel: dok.data().mapel,
      namaguruMapel: dok.data().namaguruMapel,
      waktu: dok.data().waktu,
      
    });
  });



  return hasil;
}

export function formatAngka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  export async function ubahMapel(docId, hari, jamke, kelas, mapel, namagurumapel, waktu, mp) {
    await updateDoc(doc(db, "mapel", docId), {
      hari: hari,
      jamke: jamke,
      kelas: kelas,
      mapel: mapel,
      namagurumapel: namagurumapel,
      waktu: waktu,
      mp: mp
    });
  };

//  ambil data
export async function ambilMapel(docId) {
    const docRef = await doc(db, "Mapel", docId);
    const docSnap = await getDoc(docRef);
  
    return await docSnap.data();
  }