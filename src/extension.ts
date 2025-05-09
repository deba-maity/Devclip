import * as vscode from 'vscode';

const clipboardStorage: { [key: number]: string } = {};

export function activate(context: vscode.ExtensionContext) {
    for (let i = 1; i <= 10; i++) {
        let copyCommand = vscode.commands.registerCommand(`extension.copy${i}`, () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const selection = editor.document.getText(editor.selection);
                clipboardStorage[i] = selection;
                vscode.window.showInformationMessage(`Copied to slot ${i}`);
            }
        });

        let pasteCommand = vscode.commands.registerCommand(`extension.paste${i}`, () => {
            const editor = vscode.window.activeTextEditor;
            if (editor && clipboardStorage[i]) {
                editor.edit(editBuilder => {
                    editBuilder.replace(editor.selection, clipboardStorage[i]);
                });
                vscode.window.showInformationMessage(`Pasted from slot ${i}`);
            }
        });

        context.subscriptions.push(copyCommand, pasteCommand);
    }

    let historyCommand = vscode.commands.registerCommand('extension.showClipboardHistory', () => {
        const historyList = Object.keys(clipboardStorage).map(key => `Slot ${key}: ${clipboardStorage[parseInt(key)] || "(empty)"}`);
        vscode.window.showQuickPick(historyList, { placeHolder: "Clipboard History" });
    });

    context.subscriptions.push(historyCommand);
}

export function deactivate() {}
