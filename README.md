# 🔊 Meme Dev Sounds

> Plays meme sounds when you write bad code or run a wrong command in terminal.

---

## Install

Make sure you have [Node.js](https://nodejs.org) and [VS Code](https://code.visualstudio.com) installed.

```bash
git clone https://github.com/your-username/meme-dev-sounds.git
cd meme-dev-sounds
npm install
npm install -g vsce
vsce package
code --install-extension meme-dev-sounds-0.0.1.vsix
```

Restart VS Code. Done. ✅

---

## What It Does

| Trigger | Sound |
|---------|-------|
| Syntax / code error in editor | `faaa.wav` |
| Terminal command fails | `kya-cheda-bhosdi.wav` |

---

## Not Working?

If terminal sounds aren't playing, add this to your VS Code `settings.json`:

```json
"terminal.integrated.shellIntegration.enabled": true
```

---

## Add Your Own Sounds

Drop any `.wav` file into the `sounds/` folder and wire it up in `extension.js`:

```javascript
playSound(context, 'your-sound.wav');
```

---

## ⚠️ Publishing Note

If you share this publicly, make sure your audio files are original or royalty-free. Sounds from movies, reels, or YouTube can get your extension taken down. For personal use, no issues.
