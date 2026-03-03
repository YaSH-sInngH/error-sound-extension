const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');

let lastPlayed = 0;
const COOLDOWN = 1500;

function playSound(context, fileName) {
    const now = Date.now();
    if (now - lastPlayed < COOLDOWN) return;
    lastPlayed = now;

    const soundPath = path.join(context.extensionPath, 'sounds', fileName);

    let command;
    if (process.platform === 'darwin') {
        command = `afplay "${soundPath}"`;
    } else if (process.platform === 'win32') {
        command = `powershell -c (New-Object Media.SoundPlayer '${soundPath}').PlaySync();`;
    } else {
        command = `aplay "${soundPath}"`;
    }

    exec(command);
}

function activate(context) {
    console.log("Meme Dev Sounds Activated 🚀");

    // 🔊 faaa.wav — syntax/code errors in the editor
    context.subscriptions.push(
        vscode.languages.onDidChangeDiagnostics(() => {
            const diagnostics = vscode.languages.getDiagnostics();
            const hasError = diagnostics.some(([_, diags]) =>
                diags.some(d => d.severity === vscode.DiagnosticSeverity.Error)
            );
            if (hasError) {
                playSound(context, 'faaa.wav');
            }
        })
    );

    // 🔊 kya-cheda-bhosdi.wav — terminal command fails (non-zero exit code)
    context.subscriptions.push(
        vscode.window.onDidEndTerminalShellExecution((event) => {
            const exitCode = event.exitCode;
            if (exitCode !== undefined && exitCode !== 0) {
                playSound(context, 'kya-cheda-bsd.wav');
            }
        })
    );
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};