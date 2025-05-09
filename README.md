# Devclip - VS Code Clipboard Slots

Devclip lets you copy and paste text using 10 separate clipboard slots with keyboard shortcuts.

## How to Use

- **Ctrl + Shift + 1** → Copy selected text to Slot 1  
- **Ctrl + Shift + 2** → Copy to Slot 2  
- ...  
- **Ctrl + Shift + 10** → Copy to Slot 10

- **Ctrl + Alt + 1** → Paste from Slot 1  
- **Ctrl + Alt + 2** → Paste from Slot 2  
- ...  
- **Ctrl + Alt + 10** → Paste from Slot 10

- **Ctrl + C then 0** → Show clipboard history (see what’s in each slot)

## Notes

- Works only inside the editor when text is selected.
- Clipboard data is stored temporarily and cleared when VS Code restarts.

## Install Locally

```bash
vsce package
code --install-extension devclip-0.0.1.vsix
```
