export function copyToClipboard(text: string) {
	var type = `text/html`;
	var blob = new Blob([text], {type});
	var data = [new ClipboardItem({[type]: blob})];
	navigator.clipboard.write(data);
}
