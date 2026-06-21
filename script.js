/* ──────────────────────────────────────────────────────────────
   Phonics Data — A–Z
   Each entry separates:
     letterName  → the alphabet letter (A, B, C...)
     phoneme     → descriptive name of the sound
     displaySound → IPA-style label shown in UI
     audio       → path to phoneme audio file
     words       → example words (only these use speech synthesis)
   ────────────────────────────────────────────────────────────── */

var phonicsData = {
    A: {
        letterName: "A",
        phoneme: "short a",
        displaySound: "/æ/",
        audio: "audio/a.mp3",
        words: [
            { word: "Apple", emoji: "🍎" },
            { word: "Ant", emoji: "🐜" },
            { word: "Alligator", emoji: "🐊" },
            { word: "Arrow", emoji: "🏹" },
            { word: "Astronaut", emoji: "👨‍🚀" },
            { word: "Axe", emoji: "🪓" }
        ]
    },
    B: {
        letterName: "B",
        phoneme: "b sound",
        displaySound: "/b/",
        audio: "audio/b.mp3",
        words: [
            { word: "Ball", emoji: "⚽" },
            { word: "Banana", emoji: "🍌" },
            { word: "Bear", emoji: "🐻" },
            { word: "Bird", emoji: "🐦" },
            { word: "Book", emoji: "📖" },
            { word: "Butterfly", emoji: "🦋" }
        ]
    },
    C: {
        letterName: "C",
        phoneme: "k sound",
        displaySound: "/k/",
        audio: "audio/c.mp3",
        words: [
            { word: "Cat", emoji: "🐱" },
            { word: "Car", emoji: "🚗" },
            { word: "Cup", emoji: "☕" },
            { word: "Cake", emoji: "🎂" },
            { word: "Cow", emoji: "🐄" },
            { word: "Clock", emoji: "🕐" }
        ]
    },
    D: {
        letterName: "D",
        phoneme: "d sound",
        displaySound: "/d/",
        audio: "audio/d.mp3",
        words: [
            { word: "Dog", emoji: "🐶" },
            { word: "Duck", emoji: "🦆" },
            { word: "Door", emoji: "🚪" },
            { word: "Dolphin", emoji: "🐬" },
            { word: "Drum", emoji: "🥁" },
            { word: "Diamond", emoji: "💎" }
        ]
    },
    E: {
        letterName: "E",
        phoneme: "short e",
        displaySound: "/ĕ/",
        audio: "audio/e.mp3",
        words: [
            { word: "Egg", emoji: "🥚" },
            { word: "Elephant", emoji: "🐘" },
            { word: "Elf", emoji: "🧝" },
            { word: "Elbow", emoji: "💪" },
            { word: "Envelope", emoji: "✉️" },
            { word: "Exit", emoji: "🚪" }
        ]
    },
    F: {
        letterName: "F",
        phoneme: "f sound",
        displaySound: "/f/",
        audio: "audio/f.mp3",
        words: [
            { word: "Fish", emoji: "🐟" },
            { word: "Frog", emoji: "🐸" },
            { word: "Flower", emoji: "🌸" },
            { word: "Fox", emoji: "🦊" },
            { word: "Fire", emoji: "🔥" },
            { word: "Fan", emoji: "🪭" }
        ]
    },
    G: {
        letterName: "G",
        phoneme: "g sound",
        displaySound: "/g/",
        audio: "audio/g.mp3",
        words: [
            { word: "Goat", emoji: "🐐" },
            { word: "Grapes", emoji: "🍇" },
            { word: "Gift", emoji: "🎁" },
            { word: "Garden", emoji: "🌻" },
            { word: "Guitar", emoji: "🎸" },
            { word: "Globe", emoji: "🌍" }
        ]
    },
    H: {
        letterName: "H",
        phoneme: "h sound",
        displaySound: "/h/",
        audio: "audio/h.mp3",
        words: [
            { word: "Hat", emoji: "🎩" },
            { word: "Horse", emoji: "🐴" },
            { word: "House", emoji: "🏠" },
            { word: "Heart", emoji: "❤️" },
            { word: "Hammer", emoji: "🔨" },
            { word: "Honey", emoji: "🍯" }
        ]
    },
    I: {
        letterName: "I",
        phoneme: "short i",
        displaySound: "/ĭ/",
        audio: "audio/i.mp3",
        words: [
            { word: "Igloo", emoji: "🏠" },
            { word: "Insect", emoji: "🐛" },
            { word: "Ink", emoji: "🖊️" },
            { word: "Itch", emoji: "🤚" },
            { word: "Iguana", emoji: "🦎" },
            { word: "Inch", emoji: "📏" }
        ]
    },
    J: {
        letterName: "J",
        phoneme: "j sound",
        displaySound: "/dʒ/",
        audio: "audio/j.mp3",
        words: [
            { word: "Jug", emoji: "🫗" },
            { word: "Juice", emoji: "🧃" },
            { word: "Jam", emoji: "🫙" },
            { word: "Jellyfish", emoji: "🪼" },
            { word: "Jet", emoji: "✈️" },
            { word: "Jungle", emoji: "🌴" }
        ]
    },
    K: {
        letterName: "K",
        phoneme: "k sound",
        displaySound: "/k/",
        audio: "audio/k.mp3",
        words: [
            { word: "Kite", emoji: "🪁" },
            { word: "King", emoji: "🤴" },
            { word: "Kangaroo", emoji: "🦘" },
            { word: "Key", emoji: "🔑" },
            { word: "Koala", emoji: "🐨" },
            { word: "Kitchen", emoji: "🍳" }
        ]
    },
    L: {
        letterName: "L",
        phoneme: "l sound",
        displaySound: "/l/",
        audio: "audio/l.mp3",
        words: [
            { word: "Lion", emoji: "🦁" },
            { word: "Lamp", emoji: "💡" },
            { word: "Leaf", emoji: "🍃" },
            { word: "Lemon", emoji: "🍋" },
            { word: "Ladybug", emoji: "🐞" },
            { word: "Lock", emoji: "🔒" }
        ]
    },
    M: {
        letterName: "M",
        phoneme: "m sound",
        displaySound: "/m/",
        audio: "audio/m.mp3",
        words: [
            { word: "Monkey", emoji: "🐵" },
            { word: "Moon", emoji: "🌙" },
            { word: "Mango", emoji: "🥭" },
            { word: "Mouse", emoji: "🐭" },
            { word: "Mountain", emoji: "⛰️" },
            { word: "Mushroom", emoji: "🍄" }
        ]
    },
    N: {
        letterName: "N",
        phoneme: "n sound",
        displaySound: "/n/",
        audio: "audio/n.mp3",
        words: [
            { word: "Nest", emoji: "🪹" },
            { word: "Nose", emoji: "👃" },
            { word: "Nut", emoji: "🥜" },
            { word: "Necklace", emoji: "📿" },
            { word: "Night", emoji: "🌙" },
            { word: "Notebook", emoji: "📓" }
        ]
    },
    O: {
        letterName: "O",
        phoneme: "short o",
        displaySound: "/ŏ/",
        audio: "audio/o.mp3",
        words: [
            { word: "Octopus", emoji: "🐙" },
            { word: "Orange", emoji: "🍊" },
            { word: "Oven", emoji: "🍳" },
            { word: "Onion", emoji: "🧅" },
            { word: "Otter", emoji: "🦦" },
            { word: "Olive", emoji: "🫒" }
        ]
    },
    P: {
        letterName: "P",
        phoneme: "p sound",
        displaySound: "/p/",
        audio: "audio/p.mp3",
        words: [
            { word: "Pig", emoji: "🐷" },
            { word: "Penguin", emoji: "🐧" },
            { word: "Pizza", emoji: "🍕" },
            { word: "Panda", emoji: "🐼" },
            { word: "Parrot", emoji: "🦜" },
            { word: "Pumpkin", emoji: "🎃" }
        ]
    },
    Q: {
        letterName: "Q",
        phoneme: "kw sound",
        displaySound: "/kw/",
        audio: "audio/q.mp3",
        words: [
            { word: "Queen", emoji: "👸" },
            { word: "Quilt", emoji: "🛏️" },
            { word: "Question", emoji: "❓" },
            { word: "Quail", emoji: "🐦" },
            { word: "Quarter", emoji: "🪙" }
        ]
    },
    R: {
        letterName: "R",
        phoneme: "r sound",
        displaySound: "/r/",
        audio: "audio/r.mp3",
        words: [
            { word: "Rabbit", emoji: "🐰" },
            { word: "Rainbow", emoji: "🌈" },
            { word: "Rocket", emoji: "🚀" },
            { word: "Robot", emoji: "🤖" },
            { word: "Ring", emoji: "💍" },
            { word: "Rose", emoji: "🌹" }
        ]
    },
    S: {
        letterName: "S",
        phoneme: "s sound",
        displaySound: "/s/",
        audio: "audio/s.mp3",
        words: [
            { word: "Sun", emoji: "☀️" },
            { word: "Star", emoji: "⭐" },
            { word: "Snake", emoji: "🐍" },
            { word: "Strawberry", emoji: "🍓" },
            { word: "Snail", emoji: "🐌" },
            { word: "Shark", emoji: "🦈" }
        ]
    },
    T: {
        letterName: "T",
        phoneme: "t sound",
        displaySound: "/t/",
        audio: "audio/t.mp3",
        words: [
            { word: "Tiger", emoji: "🐯" },
            { word: "Tree", emoji: "🌳" },
            { word: "Train", emoji: "🚂" },
            { word: "Turtle", emoji: "🐢" },
            { word: "Tomato", emoji: "🍅" },
            { word: "Telephone", emoji: "📞" }
        ]
    },
    U: {
        letterName: "U",
        phoneme: "short u",
        displaySound: "/ŭ/",
        audio: "audio/u.mp3",
        words: [
            { word: "Umbrella", emoji: "☂️" },
            { word: "Up", emoji: "⬆️" },
            { word: "Under", emoji: "⬇️" },
            { word: "Ugly", emoji: "👹" },
            { word: "Umpire", emoji: "🧑‍⚖️" },
            { word: "Uncle", emoji: "👨" }
        ]
    },
    V: {
        letterName: "V",
        phoneme: "v sound",
        displaySound: "/v/",
        audio: "audio/v.mp3",
        words: [
            { word: "Van", emoji: "🚐" },
            { word: "Violin", emoji: "🎻" },
            { word: "Volcano", emoji: "🌋" },
            { word: "Vase", emoji: "🏺" },
            { word: "Vegetables", emoji: "🥦" },
            { word: "Vest", emoji: "🦺" }
        ]
    },
    W: {
        letterName: "W",
        phoneme: "w sound",
        displaySound: "/w/",
        audio: "audio/w.mp3",
        words: [
            { word: "Water", emoji: "💧" },
            { word: "Whale", emoji: "🐳" },
            { word: "Watch", emoji: "⌚" },
            { word: "Watermelon", emoji: "🍉" },
            { word: "Wolf", emoji: "🐺" },
            { word: "Worm", emoji: "🪱" }
        ]
    },
    X: {
        letterName: "X",
        phoneme: "ks sound",
        displaySound: "/ks/",
        audio: "audio/x.mp3",
        words: [
            { word: "Fox", emoji: "🦊" },
            { word: "Box", emoji: "📦" },
            { word: "Six", emoji: "6️⃣" },
            { word: "Mix", emoji: "🥣" },
            { word: "Taxi", emoji: "🚕" },
            { word: "X-ray", emoji: "🩻" }
        ]
    },
    Y: {
        letterName: "Y",
        phoneme: "y sound",
        displaySound: "/j/",
        audio: "audio/y.mp3",
        words: [
            { word: "Yak", emoji: "🐂" },
            { word: "Yacht", emoji: "⛵" },
            { word: "Yarn", emoji: "🧶" },
            { word: "Yogurt", emoji: "🥛" },
            { word: "Yellow", emoji: "💛" }
        ]
    },
    Z: {
        letterName: "Z",
        phoneme: "z sound",
        displaySound: "/z/",
        audio: "audio/z.mp3",
        words: [
            { word: "Zebra", emoji: "🦓" },
            { word: "Zoo", emoji: "🏟️" },
            { word: "Zipper", emoji: "🤐" },
            { word: "Zero", emoji: "0️⃣" },
            { word: "Zucchini", emoji: "🥒" }
        ]
    }
};

/* ── Constants ── */

var LETTERS = Object.keys(phonicsData);

var TILE_COLORS = [
    "#ff6b6b", "#ff9f43", "#feca57", "#48dbfb", "#0abde3",
    "#10ac84", "#ee5a24", "#a78bfa", "#f472b6", "#34d399",
    "#fb923c", "#60a5fa", "#c084fc", "#f87171", "#fbbf24",
    "#2dd4bf", "#818cf8", "#fb7185", "#a3e635", "#e879f9",
    "#22d3ee", "#f97316", "#8b5cf6", "#ef4444", "#14b8a6",
    "#eab308"
];

var currentLetterIndex = -1;

/* ── DOM References ── */

var gridEl = document.getElementById("letter-grid");
var detailEl = document.getElementById("letter-detail");
var bigLetterEl = document.getElementById("big-letter");
var bigLetterLowerEl = document.getElementById("big-letter-lower");
var phonemeLabelEl = document.getElementById("phoneme-label");
var phonemeNameEl = document.getElementById("phoneme-name");
var phonemePlayBtn = document.getElementById("phoneme-play-btn");
var audioStatusEl = document.getElementById("audio-status");
var wordCardsEl = document.getElementById("word-cards");
var printAreaEl = document.getElementById("print-area");

/* ── Event Listeners ── */

document.getElementById("back-btn").addEventListener("click", showGrid);
document.getElementById("prev-btn").addEventListener("click", function () { navigate(-1); });
document.getElementById("next-btn").addEventListener("click", function () { navigate(1); });
phonemePlayBtn.addEventListener("click", function () { playPhonemeAudio(LETTERS[currentLetterIndex]); });
document.getElementById("print-current-btn").addEventListener("click", function () { printCards(false); });
document.getElementById("print-all-btn").addEventListener("click", function () { printCards(true); });

/* ── Grid ── */

function buildGrid() {
    gridEl.innerHTML = "";
    LETTERS.forEach(function (letter, i) {
        var btn = document.createElement("button");
        btn.className = "letter-tile";
        btn.textContent = letter;
        btn.style.background = TILE_COLORS[i];
        btn.setAttribute("aria-label", "Letter " + letter);
        btn.addEventListener("click", function () { showDetail(i); });
        gridEl.appendChild(btn);
    });
}

function showGrid() {
    detailEl.classList.add("hidden");
    gridEl.classList.remove("hidden");
    currentLetterIndex = -1;
}

/* ── Detail View ── */

function showDetail(index) {
    currentLetterIndex = index;
    var letter = LETTERS[index];
    var data = phonicsData[letter];

    gridEl.classList.add("hidden");
    detailEl.classList.remove("hidden");

    bigLetterEl.textContent = data.letterName;
    bigLetterLowerEl.textContent = data.letterName.toLowerCase();
    bigLetterEl.style.animation = "none";
    void bigLetterEl.offsetWidth;
    bigLetterEl.style.animation = "popIn 0.4s ease";

    phonemeLabelEl.textContent = data.displaySound;
    phonemeNameEl.textContent = data.phoneme;

    audioStatusEl.classList.add("hidden");

    wordCardsEl.innerHTML = "";
    data.words.forEach(function (item, wi) {
        var card = document.createElement("div");
        card.className = "word-card";
        card.style.setProperty("--delay", (wi * 0.3) + "s");
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", "Hear the word " + item.word);

        var firstChar = item.word.charAt(0);
        var rest = item.word.slice(1);
        card.innerHTML =
            '<span class="word-emoji" style="--delay:' + (wi * 0.3) + 's">' + item.emoji + '</span>' +
            '<span class="word-text"><span class="highlight">' + escapeHtml(firstChar) + '</span>' + escapeHtml(rest) + '</span>' +
            '<span class="word-play-hint">tap to hear word 🔊</span>';

        card.addEventListener("click", function () { speakWord(item.word); });
        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                speakWord(item.word);
            }
        });
        wordCardsEl.appendChild(card);
    });
}

function navigate(direction) {
    var next = currentLetterIndex + direction;
    if (next < 0) next = LETTERS.length - 1;
    if (next >= LETTERS.length) next = 0;
    showDetail(next);
}

/* ── Audio: Phoneme Sound ── */
/* Strategy:
   1. Try to play the dedicated audio file (audio/a.mp3, etc.)
   2. If audio file is missing, fall back to TTS using the first example word
      spoken in the phonics teaching pattern: "a... a... apple"
      (sound repeated, then word — avoids saying the letter NAME) */

var PHONEME_TTS_MAP = {
    A: "ah, ah, apple",
    B: "buh, buh, ball",
    C: "kuh, kuh, cat",
    D: "duh, duh, dog",
    E: "eh, eh, egg",
    F: "fff, fff, fish",
    G: "guh, guh, goat",
    H: "huh, huh, hat",
    I: "ih, ih, igloo",
    J: "juh, juh, jug",
    K: "kuh, kuh, kite",
    L: "lll, lll, lion",
    M: "mmm, mmm, monkey",
    N: "nnn, nnn, nest",
    O: "aw, aw, octopus",
    P: "puh, puh, pig",
    Q: "kwuh, kwuh, queen",
    R: "rrr, rrr, rabbit",
    S: "sss, sss, sun",
    T: "tuh, tuh, tiger",
    U: "uh, uh, umbrella",
    V: "vvv, vvv, van",
    W: "wuh, wuh, water",
    X: "ks, ks, fox",
    Y: "yuh, yuh, yak",
    Z: "zzz, zzz, zebra"
};

function playPhonemeAudio(letter) {
    var data = phonicsData[letter];
    var audio = new Audio(data.audio);
    var loadTimeout;

    audio.addEventListener("canplaythrough", function () {
        clearTimeout(loadTimeout);
        audioStatusEl.classList.add("hidden");
        audio.play();
    });

    audio.addEventListener("error", function () {
        clearTimeout(loadTimeout);
        playPhonemeFallback(letter);
    });

    loadTimeout = setTimeout(function () {
        playPhonemeFallback(letter);
    }, 1000);

    audio.load();
}

function playPhonemeFallback(letter) {
    audioStatusEl.textContent = "🔊 Using voice fallback — add audio/" + letter.toLowerCase() + ".mp3 for best results";
    audioStatusEl.classList.remove("hidden");

    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    var text = PHONEME_TTS_MAP[letter];
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.7;
    utterance.pitch = 1.1;
    utterance.volume = 0.85;

    var voice = getFemaleVoice();
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
}

/* ── Audio: Word Pronunciation (speech synthesis — full words only) ── */

function speakWord(word) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    var utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.75;
    utterance.pitch = 1.1;
    utterance.volume = 0.85;

    var voice = getFemaleVoice();
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
}

function getFemaleVoice() {
    var voices = window.speechSynthesis.getVoices();
    var femaleNames = ["zira", "hazel", "susan", "samantha", "karen", "moira",
        "fiona", "victoria", "tessa", "kate", "serena", "jenny", "aria",
        "female", "woman"];
    var femaleVoice = null;
    var englishVoice = null;

    for (var i = 0; i < voices.length; i++) {
        var v = voices[i];
        if (v.lang.indexOf("en") !== 0) continue;
        if (!englishVoice) englishVoice = v;
        var nameLower = v.name.toLowerCase();
        for (var j = 0; j < femaleNames.length; j++) {
            if (nameLower.indexOf(femaleNames[j]) !== -1) {
                femaleVoice = v;
                break;
            }
        }
        if (femaleVoice) break;
    }

    return femaleVoice || englishVoice || null;
}

if (window.speechSynthesis && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = function () {};
}

/* ── Print ── */

function printCards(allLetters) {
    var size = document.getElementById("card-size").value;
    var letters = allLetters ? LETTERS : [LETTERS[currentLetterIndex]];
    var html = '<div class="print-grid size-' + size + '">';

    letters.forEach(function (letter) {
        var data = phonicsData[letter];
        data.words.forEach(function (item) {
            html +=
                '<div class="print-card">' +
                    '<div class="print-card-letter">' + escapeHtml(data.letterName) + escapeHtml(data.letterName.toLowerCase()) + '</div>' +
                    '<div class="print-card-phoneme">' + escapeHtml(data.displaySound) + ' — ' + escapeHtml(data.phoneme) + '</div>' +
                    '<div class="print-card-emoji">' + item.emoji + '</div>' +
                    '<div class="print-card-word">' + escapeHtml(item.word) + '</div>' +
                '</div>';
        });
    });

    html += '</div>';
    printAreaEl.innerHTML = html;
    window.print();
}

/* ── Utilities ── */

function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

/* ── Keyboard Navigation ── */

document.addEventListener("keydown", function (e) {
    if (currentLetterIndex === -1) return;
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
    if (e.key === "Escape") showGrid();
});

/* ── Init ── */

buildGrid();
