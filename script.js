// masukkan URL Google Apps Script yang didapat dari Langkah 1
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHbR_-1sya5gGkECd6N3Jv6ummGiBIm_Z-ufgoa3PPnRA-DLkypCyQxx-d_STKYIZxYA/exec";

// Data Kasus Etika Psikologi (Total 7 Soal: 5 Pilihan Ganda dengan 4 Opsi, 2 Isian)
const allCases = [
  // --- SOAL 1 (Pilihan Ganda) ---
  {
    type: "choice",
    category: "PSIKOLOGI FORENSIK",
    title: "Kewenangan Pembuatan Laporan Kasus Hukum",
    description: "Seorang psikolog forensik diminta membuat laporan hasil pemeriksaan terhadap seseorang yang terlibat dalam kasus hukum. Berdasarkan Kode Etik HIMPSI Pasal 58, kapan psikolog berwenang membuat laporan tersebut?",
    options: [
      { text: "Setelah menerima permintaan dari pihak yang menangani kasus hukum.", desc: "Menerima permintaan langsung dari pihak hukum.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah C" },
      { text: "Setelah memperoleh informasi dari keluarga atau pihak terdekat saja.", desc: "Mengandalkan info keluarga/pihak terdekat.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah C" },
      { text: "Setelah melakukan pemeriksaan sesuai standar prosedur pemeriksaan psikologi.", desc: "Melaksanakan pemeriksaan sesuai standar baku.", correct: true, feedback: "Tepat sekali! Jawaban Benar" },
      { text: "Setelah mengetahui kronologi kasus dari media massa.", desc: "Mengikuti kronologi di berita/media massa.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah C" }
    ]
  },

  // --- SOAL 2 (Isian) ---
  {
    type: "input",
    category: "STANDAR ASESMEN",
    title: "Landasan Baku Pemeriksaan Psikologi",
    description: "Dalam menjalankan tanggung jawabnya psikolog harus mendasarkan pada standar pemeriksaan psikologi yang baku sesuai kode etik psikologi yang terkait dengan asesmen, dan intervensi. Sesuai yang tercantum pada Kode Etik Psikologi Indonesia Pasal… (Ketik angka pasal, misal: 520)",
    answer: "57",
    feedback: "Jawaban Benar!",
    wrongFeedback: "Jawaban Salah!"
  },

  // --- SOAL 3 (Pilihan Ganda) ---
  {
    type: "choice",
    category: "ETIKA PUBLIKASI & MEDIA",
    title: "Pernyataan Publik Terkait Kasus Hukum",
    description: "Seorang psikolog forensik diminta memberikan pernyataan kepada media mengenai kasus hukum yang sedang ditanganinya. Berdasarkan Kode Etik HIMPSI Pasal 61, tindakan yang tepat adalah ...",
    options: [
      { text: "Memberikan seluruh informasi kasus agar masyarakat mengetahui fakta yang sebenarnya.", desc: "Membuka seluruh detail kasus ke publik.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah B" },
      { text: "Memberikan pernyataan berdasarkan kaidah psikologi dengan mempertimbangkan kepentingan masyarakat dan kerahasiaan.", desc: "Berdasarkan kaidah ilmiah & rahasia.", correct: true, feedback: "Luar biasa! Jawaban Benar" },
      { text: "Menyampaikan pendapat pribadi mengenai pihak yang diduga melakukan tindak pidana.", desc: "Berpendapat pribadi mengenai dugaan pidana.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah B" },
      { text: "Memberikan kesimpulan kasus meskipun belum melakukan pemeriksaan psikologis.", desc: "Memberi kesimpulan tanpa asesmen.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah B" }
    ]
  },

  // --- SOAL 4 (Pilihan Ganda) ---
  {
    type: "choice",
    category: "KESAKSIAN AHLI",
    title: "Tujuan Utama Kesaksian Psikolog",
    description: "Dalam memberikan kesaksian, psikolog harus bertujuan menegakkan .... dan ...",
    options: [
      { text: "Keadilan & Kesejahteraan", desc: "Keadilan dan Kesejahteraan", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah D" },
      { text: "Kebenaran & Kebaikan", desc: "Kebenaran dan Kebaikan", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah D" },
      { text: "Kerahasiaan & Kenyamanan", desc: "Kerahasiaan dan Kenyamanan", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah D" },
      { text: "Kebenaran & Keadilan", desc: "Kebenaran dan Keadilan", correct: true, feedback: "Good! Jawaban Benar " }
    ]
  },

  // --- SOAL 5 (Pilihan Ganda) ---
  {
    type: "choice",
    category: "KONFLIK KEPENTINGAN",
    title: "Hubungan Terapeutik dan Saksi Ahli",
    description: "Seorang psikolog pernah menjadi terapis bagi seseorang yang kemudian menjadi terdakwa dalam kasus pidana. Pengadilan meminta psikolog tersebut untuk memberikan kesaksian sebagai saksi ahli. Bagaimana seharusnya psikolog menyikapi situasi tersebut?",
    options: [
      { text: "Menolak memberikan kesaksian dalam keadaan apa pun", desc: "Menolak mutlak karena hubungan terapeutik.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah B" },
      { text: "Mempertimbangkan ketentuan hukum yang berlaku, tetap bersikap profesional saat memberikan kesaksian, serta menjaga atau meminimalkan konflik", desc: "Mempertimbangkan hukum & profesional.", correct: true, feedback: "Tepat sekali! Jawaban Benar" },
      { text: "Menghindari kesaksian dengan menyerahkan seluruh tanggung jawab kepada psikolog lain", desc: "Menghindar dan melempar ke psikolog lain.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah B" },
      { text: "Psikolog boleh membuka semua informasi terapi tanpa mempertimbangkan batasan lain", desc: "Membuka seluruh data terapi tanpa batasan.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah B" }
    ]
  },

  // --- SOAL 6 (Pilihan Ganda) ---
  {
    type: "choice",
    category: "KOMPETENSI PROFESIONAL",
    title: "Standar Praktik Psikologi Forensik",
    description: "Psikolog dan/atau Ilmuwan Psikologi yang melakukan praktik psikologi forensik harus...",
    options: [
      { text: "Memiliki kompetensi sesuai kode etik, memahami standar forensik, dan mendasarkan pekerjaan pada sistem hukum.", desc: "Kompetensi kode etik, paham forensik, basis hukum.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah C" },
      { text: "Memiliki kompetensi standar forensik, memahami kode etik, dan mendasarkan pekerjaan pada sistem hukum.", desc: "Kompetensi forensik, paham kode etik, basis hukum.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah C" },
      { text: "Memiliki kompetensi sesuai dengan standar psikologi forensik, memahami sistem hukum di Indonesia dan mendasarkan pekerjaannya pada kode etik psikologi.", desc: "Kompetensi forensik, paham hukum, basis kode etik.", correct: true, feedback: "Hebat! Jawaban Benar" },
      { text: "Memiliki kompetensi sesuai sistem hukum, memahami standar forensik, dan mendasarkan pada kode etik.", desc: "Kompetensi sistem hukum, paham forensik, basis kode etik.", correct: false, feedback: "Pilihan Jawaban Yang Tepat Adalah C" }
    ]
  },

  // --- SOAL 7 (Isian) ---
  {
    type: "input",
    category: "RUANG LINGKUP FORENSIK",
    title: "Definisi Bidang Hukum Psikologi Forensik",
    description: "Psikolog forensik adalah psikolog yang tugasnya memberikan bantuan profesional psikologi berkaitan dengan permasalahan hukum, khususnya... (Ketik jawabanmu, misal: earth moon)",
    answer: "peradilan pidana",
    feedback: "Jawaban benar!",
    wrongFeedback: "Jawaban Salah!"
  }
];

// State Game
let cases = [];
let playerName = "";
let currentCaseIndex = 0;
let score = 0;
let lives = 3; // Diubah menjadi 3 nyawa

// Bobot Nilai: Pilihan Ganda = 6, Isian = 10 (Total maksimal = 50)
const scoreChoice = 6;
const scoreInput = 10;

let isMuted = false;

// Element DOM
const startModal = document.getElementById("start-modal");
const nameInput = document.getElementById("player-name-input");
const playerDisplayName = document.getElementById("player-display-name");
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
const saveStatusEl = document.getElementById("save-status");
const characterEl = document.getElementById("character");
const bgMusic = document.getElementById("bg-music");
const musicToggleBtn = document.getElementById("music-toggle-btn");
const sfxCorrect = document.getElementById("sfx-correct");
const sfxWrong = document.getElementById("sfx-wrong");

function playSFX(audioElement) {
  if (audioElement && !isMuted) {
    audioElement.currentTime = 0;
    audioElement.play().catch(err => console.log("Gagal memutar SFX:", err));
  }
}

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    isMuted = false;
    musicToggleBtn.innerText = "🔊";
    musicToggleBtn.classList.remove("muted");
  } else {
    bgMusic.pause();
    isMuted = true;
    musicToggleBtn.innerText = "🔇";
    musicToggleBtn.classList.add("muted");
  }
}

function startGame(event) {
  event.preventDefault();
  const inputVal = nameInput.value.trim();
  if (!inputVal) return;

  playerName = inputVal;
  startModal.classList.add("hidden");

  cases = shuffleArray(allCases);

  bgMusic.volume = 0.4;
  bgMusic.play().then(() => {
    isMuted = false;
    musicToggleBtn.innerText = "🔊";
  }).catch(err => {
    console.log("Autoplay dicegah browser:", err);
  });

  score = 0;
  lives = 3; // Reset nyawa menjadi 3 saat mulai game
  currentCaseIndex = 0;
  scoreEl.innerText = score;
  updateHearts();
  loadCase();
}

function updateHearts() {
  let heartsHtml = "";
  for (let i = 0; i < 3; i++) { // Looping sebanyak 3 kali untuk 3 nyawa
    if (i < lives) {
      heartsHtml += "♥ ";
    } else {
      heartsHtml += "♡ ";
    }
  }
  heartsEl.innerText = heartsHtml.trim();
}

function loadCase() {
  const currentCase = cases[currentCaseIndex];

  feedbackEl.style.display = "none";
  feedbackEl.className = "feedback";
  nextBtn.style.display = "none";
  speechEl.innerText = `Hai ${playerName}! Yuk selesaikan kasus ini! 💗`;

  progressEl.innerText = `${currentCaseIndex + 1}/${cases.length}`;
  caseCategoryEl.innerText = currentCase.category;
  caseTitleEl.innerText = currentCase.title;
  caseDescriptionEl.innerText = currentCase.description;

  actionButtonsEl.innerHTML = "";

  if (currentCase.type === "choice") {
    actionButtonsEl.style.display = "grid";
    actionButtonsEl.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";

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
  } else if (currentCase.type === "input") {
    actionButtonsEl.style.display = "block";

    const inputContainer = document.createElement("div");
    inputContainer.style.display = "flex";
    inputContainer.style.flexDirection = "column";
    inputContainer.style.gap = "10px";
    inputContainer.style.width = "100%";

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = "user-answer-input";
    textInput.className = "input-name";
    textInput.placeholder = "Ketik jawabanmu di sini...";

    const submitBtn = document.createElement("button");
    submitBtn.className = "next-btn";
    submitBtn.style.marginTop = "0";
    submitBtn.innerText = "Kirim Jawaban";
    submitBtn.onclick = () => checkInputAnswer(currentCase, textInput.value);

    inputContainer.appendChild(textInput);
    inputContainer.appendChild(submitBtn);
    actionButtonsEl.appendChild(inputContainer);
  }
}

function selectOption(option) {
  const buttons = actionButtonsEl.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  if (option.correct) {
    score += scoreChoice;
    scoreEl.innerText = score;
    playSFX(sfxCorrect);

    feedbackEl.className = "feedback correct";
    feedbackEl.innerHTML = `<strong>Jawaban Benar! (+6 Poin) ✨</strong><br>${option.feedback}`;
    speechEl.innerText = "Wah, hebat sekali! Pilihanmu tepat! 🎉";
  } else {
    lives--;
    updateHearts();
    playSFX(sfxWrong);

    feedbackEl.className = "feedback wrong";
    feedbackEl.innerHTML = `<strong>Kurang Tepat! 😅</strong><br>${option.feedback}`;
    speechEl.innerText = "Hmm... Pilihan itu kurang sesuai. Tetap semangat!";

    characterEl.classList.add("shake");
    setTimeout(() => characterEl.classList.remove("shake"), 400);
  }

  feedbackEl.style.display = "block";

  if (currentCaseIndex < cases.length - 1 && lives > 0) {
    nextBtn.style.display = "inline-block";
  } else {
    setTimeout(showEndModal, 1200);
  }
}

function checkInputAnswer(currentCase, userVal) {
  const cleanUserVal = userVal.trim().toLowerCase();
  if (!cleanUserVal) return;

  const submitBtn = actionButtonsEl.querySelector("button");
  const textInput = actionButtonsEl.querySelector("input");
  if (submitBtn) submitBtn.disabled = true;
  if (textInput) textInput.disabled = true;

  if (cleanUserVal.includes(currentCase.answer.toLowerCase())) {
    score += scoreInput;
    scoreEl.innerText = score;
    playSFX(sfxCorrect);

    feedbackEl.className = "feedback correct";
    feedbackEl.innerHTML = `<strong>Jawaban Benar! (+10 Poin) ✨</strong><br>${currentCase.feedback}`;
    speechEl.innerText = "Jawabanmu akurat sekali! Hebat! 🌟";
  } else {
    lives--;
    updateHearts();
    playSFX(sfxWrong);

    feedbackEl.className = "feedback wrong";
    feedbackEl.innerHTML = `<strong>Salah! 😅</strong><br>${currentCase.wrongFeedback}<br><small>Jawaban yang tepat adalah: <b>${currentCase.answer}</b></small>`;
    speechEl.innerText = "Belum tepat, ayo coba soal berikutnya!";

    characterEl.classList.add("shake");
    setTimeout(() => characterEl.classList.remove("shake"), 400);
  }

  feedbackEl.style.display = "block";

  if (currentCaseIndex < cases.length - 1 && lives > 0) {
    nextBtn.style.display = "inline-block";
  } else {
    setTimeout(showEndModal, 1200);
  }
}

function nextCase() {
  currentCaseIndex++;
  if (currentCaseIndex < cases.length) {
    loadCase();
  }
}

function showEndModal() {
  endModal.classList.remove("hidden");
  finalScoreEl.innerText = score;
  playerDisplayName.innerText = playerName;

  let evalText = "";
  if (score >= 40) {
    evalText = "Luar biasa! Kamu memahami prinsip etika psikologi forensik dengan sangat baik. 🌟";
  } else if (score >= 25) {
    evalText = "Bagus! Kamu sudah berusaha memahami dasar-dasar etika forensik dengan cukup baik. 👍";
  } else {
    evalText = "Jangan berkecil hati! Pelajari kembali materi etika psikologi forensik dan coba lagi ya! 💪";
  }

  evaluationEl.innerText = evalText;

  saveResultToSpreadsheet(playerName, score);
}

function saveResultToSpreadsheet(name, finalScore) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("URL_APPS_SCRIPT_ANDA")) {
    saveStatusEl.innerText = "⚠️ Masukkan URL Apps Script untuk menyimpan nilai ke Spreadsheet.";
    return;
  }

  saveStatusEl.innerText = "⏳ Menyimpan skor ke Spreadsheet...";

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      playerName: name,
      score: finalScore
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      saveStatusEl.innerText = "✅ Data berhasil tersimpan ke Spreadsheet!";
    } else {
      saveStatusEl.innerText = "❌ Gagal menyimpan data.";
    }
  })
  .catch((err) => {
    console.log("Pengiriman selesai:", err);
    saveStatusEl.innerText = "✅ Data berhasil tersimpan ke Spreadsheet!";
  });
}