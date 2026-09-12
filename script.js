// Data Kasus Etika Psikologi
const cases = [
  {
    category: "KERAHASIAAN DATA",
    title: "Foto Hasil Tes Psikologi",
    description: "Seorang ilmuwan psikologi merasa gembira karena kliennya menunjukkan kemajuan pesat. Ia ingin mengunggah foto lembar jawaban tes klien ke media sosial untuk merayakan keberhasilan tersebut.",
    options: [
      {
        text: "Unggah Foto",
        desc: "Upload ke medsos dengan menyamarkan nama klien.",
        correct: false,
        feedback: "Salah! Meskipun nama disamarkan, mengunggah kerahasiaan data tes tanpa izin tertulis dan standar etika tetap melanggar asas kerahasiaan."
      },
      {
        text: "Minta Izin & Edit",
        desc: "Minta izin klien dan upload foto wajah klien.",
        correct: false,
        feedback: "Kurang tepat. Hasil tes dan identitas klien tetap sensitif untuk dipublikasikan di media sosial pribadi."
      },
      {
        text: "Jaga Kerahasiaan",
        desc: "Menyimpan data dengan aman dan tidak mengunggahnya.",
        correct: true,
        feedback: "Tepat sekali! Rahasia data klien harus dijaga ketat sesuai Standar Etika Kode Etik Psikologi."
      }
    ]
  },
  {
    category: "HUBUNGAN MAJEMUK",
    title: "Konseling Anggota Keluarga",
    description: "Seorang psikolog diminta memberikan layanan konseling intensif kepada adik kandungnya sendiri yang sedang mengalami stres berat.",
    options: [
      {
        text: "Terima Konseling",
        desc: "Langsung terima karena lebih paham sifat adiknya.",
        correct: false,
        feedback: "Salah. Hubungan ganda (keluarga sekaligus klien) dapat mengganggu objektivitas dan profesionalisme."
      },
      {
        text: "Rujuk ke Rekan",
        desc: "Merekam rujukan ke psikolog profesional lain.",
        correct: true,
        feedback: "Hebat! Merujuk ke profesional lain menghindari konflik kepentingan dan menjaga objektivitas layanan."
      },
      {
        text: "Beri Obat Penenang",
        desc: "Memberikan saran medis tanpa proses konseling.",
        correct: false,
        feedback: "Kurang tepat. Psikolog tidak memiliki wewenang memberikan resep obat medis."
      }
    ]
  },
  {
    category: "INFORMED CONSENT",
    title: "Persetujuan Sebelum Alur Tes",
    description: "Klien datang untuk asesmen klinis. Klien merasa gugup dan ingin langsung memulai tes tanpa mendengar penjelasan prosedur.",
    options: [
      {
        text: "Jelaskan Dulu",
        desc: "Tetap berikan penjelasan Informed Consent sebelum mulai.",
        correct: true,
        feedback: "Benar! Informed Consent wajib diberikan dan dipahami klien sebelum tindakan/asesmen dilakukan."
      },
      {
        text: "Langsung Tes",
        desc: "Menuruti keinginan klien agar merasa nyaman.",
        correct: false,
        feedback: "Kurang tepat. Memberikan tes tanpa penjelasan hak dan prosedur melanggar etika Informed Consent."
      },
      {
        text: "Batalkan Tes",
        desc: "Menolak memberikan layanan karena klien gugup.",
        correct: false,
        feedback: "Kurang tepat. Rasa gugup klien adalah hal wajar yang perlu ditenangkan oleh profesional."
      }
    ]
  },
  {
    category: "KOMPETENSI",
    title: "Layanan di Luar Keahlian",
    description: "Psikolog anak diminta menangani kasus gangguan jiwa berat pada orang dewasa, padahal ia tidak memiliki keahlian atau pelatihan di bidang klinis dewasa.",
    options: [
      {
        text: "Terima Saja",
        desc: "Coba-coba menangani sambil belajar di internet.",
        correct: false,
        feedback: "Salah! Memberikan layanan di luar batasan kompetensi berisiko merugikan klien."
      },
      {
        text: "Rujuk Ahli",
        desc: "Menerangkan batasan dan merujuk ke Psikolog Klinis Dewasa.",
        correct: true,
        feedback: "Luar biasa! Selalu memberikan layanan sesuai dengan batas kompetensi dan keahlian yang dimiliki."
      },
      {
        text: "Gunakan Tes Anak",
        desc: "Menggunakan tes instrumen anak untuk orang dewasa.",
        correct: false,
        feedback: "Salah! Alat tes harus valid dan sesuai dengan batasan usia serta tujuan evaluasi."
      }
    ]
  },
  {
    category: "HAK KLIEN",
    title: "Penghentian Layanan (Termination)",
    description: "Klien merasa masalahnya sudah teratasi dan ingin menghentikan konseling, namun konselor ingin melanjutkan sesi agar mendapatkan honor lebih.",
    options: [
      {
        text: "Paksa Lanjut",
        desc: "Menakut-nakuti klien agar tetap mengambil sesi.",
        correct: false,
        feedback: "Salah! Memaksa layanan demi keuntungan pribadi melanggar prinsip etika moral psikologi."
      },
      {
        text: "Hormati Keputusan",
        desc: "Evaluasi bersama dan akhiri layanan dengan baik.",
        correct: true,
        feedback: "Tepat sekali! Psikolog harus mengakhiri layanan jika klien tidak lagi membutuhkannya atau tidak memperoleh manfaat."
      },
      {
        text: "Naikkan Tarif",
        desc: "Memberi diskon agar klien mau bertahan.",
        correct: false,
        feedback: "Kurang tepat. Fokus utama adalah kesejahteraan klien, bukan keuntungan ekonomi."
      }
    ]
  }
];

// State Game
let currentCaseIndex = 0;
let score = 0;
let lives = 5;
const maxScorePerCase = 20;

// Element DOM
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const heartsEl = document.getElementById("hearts");
const speechEl = document.getElementById("speech");
const caseCategoryEl = document.getElementById("case-category");
const caseTitleEl = document.getElementById("case-title");
const caseDescriptionEl = document.getElementById("case-description");
const actionButtonsEl = document.getElementById("action-buttons");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const endModal = document.getElementById("end-modal");
const finalScoreEl = document.getElementById("final-score");
const evaluationEl = document.getElementById("evaluation");
const characterEl = document.getElementById("character");

// Render Nyawa (Hearts)
function updateHearts() {
  let heartsHtml = "";
  for (let i = 0; i < 5; i++) {
    if (i < lives) {
      heartsHtml += "♥ ";
    } else {
      heartsHtml += "♡ ";
    }
  }
  heartsEl.innerText = heartsHtml.trim();
}

// Memuat Kasus
function loadCase() {
  const currentCase = cases[currentCaseIndex];

  // Reset tampilan UI
  feedbackEl.style.display = "none";
  feedbackEl.className = "feedback";
  nextBtn.style.display = "none";
  speechEl.innerText = "Yuk bantu aku memilih tindakan yang paling etis! 💗";

  // Render Info Kasus
  progressEl.innerText = `${currentCaseIndex + 1}/${cases.length}`;
  caseCategoryEl.innerText = currentCase.category;
  caseTitleEl.innerText = currentCase.title;
  caseDescriptionEl.innerText = currentCase.description;

  // Render Pilihan Jawaban
  actionButtonsEl.innerHTML = "";
  currentCase.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "btn-action";
    btn.innerHTML = `
      <div class="option-icon">${String.fromCharCode(65 + index)}</div>
      <strong>${opt.text}</strong>
      <small>${opt.desc}</small>
    `;
    btn.onclick = () => selectOption(opt);
    actionButtonsEl.appendChild(btn);
  });
}

// Memilih Jawaban
function selectOption(option) {
  // Nonaktifkan semua tombol agar tidak bisa diklik dua kali
  const buttons = actionButtonsEl.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  if (option.correct) {
    score += maxScorePerCase;
    scoreEl.innerText = score;

    feedbackEl.className = "feedback correct";
    feedbackEl.innerHTML = `<strong>Jawaban Benar! ✨</strong><br>${option.feedback}`;
    speechEl.innerText = "Wah, hebat sekali! Pilihanmu sangat etis! 🎉";
  } else {
    lives--;
    updateHearts();

    feedbackEl.className = "feedback wrong";
    feedbackEl.innerHTML = `<strong>Kurang Tepat! 😅</strong><br>${option.feedback}`;
    speechEl.innerText = "Hmm... Pilihan itu kurang sesuai dengan etika. Tetap semangat! 🥺";

    // Efek animasi getar jika salah
    characterEl.classList.add("shake");
    setTimeout(() => characterEl.classList.remove("shake"), 400);
  }

  feedbackEl.style.display = "block";

  // Cek apakah game berlanjut atau tamat
  if (currentCaseIndex < cases.length - 1 && lives > 0) {
    nextBtn.style.display = "inline-block";
  } else {
    setTimeout(showEndModal, 1200);
  }
}

// Tombol Lanjut ke Kasus Berikutnya
function nextCase() {
  currentCaseIndex++;
  if (currentCaseIndex < cases.length) {
    loadCase();
  }
}

// Tampilkan Modal Hasil Akhir
function showEndModal() {
  endModal.classList.remove("hidden");
  finalScoreEl.innerText = score;

  let evalText = "";
  if (score === 100) {
    evalText = "Sempurna! Kamu adalah Penjaga Etika sejati! Semua keputusanmu sangat tepat dan profesional. 🌟";
  } else if (score >= 60) {
    evalText = "Bagus sekali! Kamu sudah memahami prinsip-prinsip dasar Kode Etik Psikologi dengan baik. 👍";
  } else {
    evalText = "Jangan berkecil hati! Pelajari kembali Kode Etik Psikologi dan coba lagi ya! 💪";
  }

  evaluationEl.innerText = evalText;
}

// Jalankan game saat pertama kali dibuka
window.onload = () => {
  score = 0;
  lives = 5;
  updateHearts();
  loadCase();
};