// GANTI NOMOR INI dengan nomor WhatsApp kedai/klien Anda (Gunakan kode negara, contoh 62812345xxx)
const NOMOR_WHATSAPP = "6281234567890";

// 1. FUNGSI FILTER KATEGORI MENU (ALL / COFFEE / NON-COFFEE / SNACK)
function filterMenu(category) {
    // Ambil semua element kartu menu
    const cards = document.querySelectorAll('.menu-card');
    // Ambil semua tombol tab
    const tabs = document.querySelectorAll('.tab-btn');

    // Mengubah tombol aktif secara visual
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Menyaring kartu menu berdasarkan kategori data-category
    cards.forEach(card => {
        const itemCategory = card.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            card.style.display = 'block'; // Tampilkan jika cocok
        } else {
            card.style.display = 'none';  // Sembunyikan jika tidak cocok
        }
    });
}

// 2. FUNGSI KIRIM PESAN STRUKTUR OTOMATIS KE WHATSAPP
function pesanKopi(namaMenu, hargaMenu) {
    // Menyusun teks template manis agar terlihat profesional saat masuk ke WA Barista
    const teksPesan = `Halo Kopi Selasar, saya ingin memesan menu ini:\n\n` +
                      `• *Menu:* ${namaMenu}\n` +
                      `• *Harga:* ${hargaMenu}\n\n` +
                      `Mohon info ketersediaan menu dan total pembayarannya ya. Terima kasih!`;

    // Mengubah teks ke format URL link aman (mengganti spasi menjadi %20, dll)
    const urlSandi = encodeURIComponent(teksPesan);

    // Membuat link utuh tautan WhatsApp API resmi
    const linkWhatsApp = `https://wa.me/${NOMOR_WHATSAPP}?text=${urlSandi}`;

    // Membuka tab browser baru / langsung memicu aplikasi WhatsApp di HP pelanggan
    window.open(linkWhatsApp, '_blank');
}