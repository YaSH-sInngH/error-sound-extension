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
```

Then: **Extensions panel → `···` menu → Install from VSIX**

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