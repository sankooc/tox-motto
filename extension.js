const vscode = require('vscode');
const { getOne } = require('./data');
let ids;
const period = 7000
function activate(context) {
	const myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
	const update = () => {
		myStatusBarItem.text = getOne();
		myStatusBarItem.alignment
		myStatusBarItem.show()
	}
	update()
	ids = setInterval(update, period);
}

function deactivate() {
	clearInterval(ids)
}

module.exports = {
	activate,
	deactivate
}
