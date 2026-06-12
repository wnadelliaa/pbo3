// Mengimpor file CSS untuk styling komponen App
import './App.css'

// Membuat komponen React bernama App
export default function App() {

  // Membuat variabel berisi elemen JSX
  // Saat ini belum digunakan sehingga tidak tampil di browser
  const element = <h1>Hello, world</h1>;

  // Mengembalikan tampilan (UI) yang akan dirender React
  return (
    // Elemen utama halaman
    <main>

      {/* Menampilkan variabel JSX */}
      {/* Jika tidak ingin ditampilkan, hapus baris ini */}
      {element}

      {/* Heading level 2 */}
      <h2>Belajar menggunakan JSX pada React</h2>

      {/* Bagian header halaman */}
      <header>

        {/* Judul utama halaman */}
        <h1>Belajar menggunakan JSX pada React</h1>

        {/* Paragraf/deskripsi */}
        <p>Tutorial Reactjs untuk Pemula</p>

      </header>

    </main>
  )
}
