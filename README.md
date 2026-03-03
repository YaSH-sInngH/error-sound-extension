# 🔊 Meme Dev Sounds

A VS Code extension that plays meme sound effects when you mess up — because your errors deserve an audience.

---

## Sounds

| Sound | Trigger |
|-------|---------|
| `faaa.wav` | Syntax / code error appears in the editor (red squiggles) |
| `kya-cheda-bhosdi.wav` | A terminal command fails (non-zero exit code) |

---

## Requirements

- VS Code **1.93+** (for shell integration API)
- Shell integration must be enabled (on by default). If terminal sounds aren't working, add this to `settings.json`:
```json
"terminal.integrated.shellIntegration.enabled": true
```

---

## How to Run (Development)

1. Open this folder in VS Code
2. Press **F5** — launches a new Extension Development Host window
3. Make a syntax error in any file → `faaa.wav` plays
4. Run a bad terminal command like `blah` → `kya-cheda-bhosdi.wav` plays

---

## How to Install Permanently
```bash
npm install -g vsce
vsce package
code --install-extension *.vsix
```

---

## How to Share / Distribute

### Option 1 — VS Code Marketplace (Recommended)
Publish publicly so anyone can find and install it with one click.
```bash
vsce publish
```

Requires a free Azure DevOps account. Once published, updates are automatic for all users:
```bash
vsce publish patch   # bump version + push update
```

### Option 2 — GitHub + Direct Install (No Marketplace)
Push to GitHub and let people install it manually. Still free, no account needed.
```bash
git clone your-repo
cd meme-dev-sounds
npm install
vsce package
code --install-extension *.vsix
```

---

## How It Works

- **Code errors** — `onDidChangeDiagnostics` fires when linter/compiler errors appear. Any error-level diagnostic triggers the sound.
- **Terminal errors** — `onDidEndTerminalShellExecution` captures exit codes. Any non-zero exit code triggers the sound. Works with bash, zsh, PowerShell, cmd, git, npm, etc.

A **1500ms cooldown** prevents sound spam.

---

## Adding More Sounds

Drop a `.wav` into the `sounds/` folder and call it in `extension.js`:
```javascript
playSound(context, 'your-sound.wav');
```

> **Windows note:** Only `.wav` files are supported on Windows. macOS supports any format `afplay` handles. Linux requires `aplay`.

---

## ⚠️ Legal Note (If Publishing Publicly)

Be careful with audio files if you publish to the Marketplace. Sounds taken from movies, YouTube, or Instagram reels can trigger copyright takedowns.

Safe options:
- Record your own voice
- Use royalty-free sounds
- Create original parody sounds

If it's just for **private/personal use** → no problem at all.