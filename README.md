# 🎨 Phonics Fun

A colourful, cartoon-style phonics learning web app for parents and kids. Helps users understand English letter sounds clearly with interactive examples and printable flashcards.

**🌐 Live Demo:** [pawankaplay1988.github.io/phonics-fun](https://pawankaplay1988.github.io/phonics-fun/)

## Features

- **A–Z Letter Grid** — Tap any letter to explore its phoneme sound
- **Phoneme Audio** — Dedicated play button for each letter's sound (audio file or TTS fallback)
- **5–6 Example Words** — Each letter shows words with emoji images and tap-to-hear pronunciation
- **Speech Synthesis** — Soft female voice reads full words slowly and clearly
- **Print Flashcards** — Generate printable cards in small/medium/large sizes
- **Responsive Design** — Works on mobile, tablet, and desktop
- **Keyboard Navigation** — Arrow keys to move between letters, Escape to go back

## Who is this for?

Parents and children from non-English backgrounds (e.g., Marathi-speaking) who find phonics difficult. The UI is simple, intuitive, and visually engaging so that even beginners can use it easily.

## Tech Stack

- HTML, CSS, Vanilla JavaScript — no frameworks
- Web Speech API for word pronunciation
- Google Fonts (Fredoka One, Nunito)
- Emoji-based images for fast loading

## Run Locally

Simply open `index.html` in any modern browser:

```bash
# Clone the repo
git clone https://github.com/pawankaplay1988/phonics-fun.git
cd phonics-fun

# Open in browser (Windows)
start index.html

# Open in browser (macOS)
open index.html

# Or use a local server
npx serve .
```

## Adding Phonics Audio Files

For best results, add real phoneme audio recordings in the `audio/` folder:

```
audio/a.mp3
audio/b.mp3
...
audio/z.mp3
```

Each file should contain only the phoneme sound (not the letter name). See [audio/README.md](audio/README.md) for detailed instructions and a pronunciation guide.

Without audio files, the app uses a TTS fallback that works immediately.

## Architecture

| Concept | Implementation |
|---------|---------------|
| Phoneme sounds | Audio files (`audio/*.mp3`) with TTS fallback |
| Word pronunciation | Web Speech API (female voice, slow rate) |
| Letter name vs phoneme | Clearly separated in data model |
| Print | CSS media queries with configurable card sizes |

## License

MIT
