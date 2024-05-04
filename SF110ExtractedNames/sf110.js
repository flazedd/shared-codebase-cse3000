// Extract info from HTML
let rows = Object.values($("#tbody").children());
rows = rows.slice(1, rows.length - 2);

names = [];
shortNames = [];
websites = [];
sourceRepos = [];
packageNames = [];
rows.forEach((element, index) => {
	$(element).prepend(`<td>${index + 1}</td>`);
	let shortName = Object.values($(element).children())[2].textContent;
	$(element).append(`<td>${shortName}_${index + 1}</td>`);
	let cols = Object.values($(element).children());
	names.push(cols[1].textContent);
	shortNames.push(cols[2].textContent);
	websites.push($(cols[3]).find("a")[0].href);
	sourceRepos.push($(cols[4]).find("a")[0].href);
	packageNames.push(shortName + "_" + (index + 1));
});

// Create markdown links
websites = websites.map((x) => `[Website](${x})`);
sourceRepos = sourceRepos.map((x) => `[Source](${x})`);

// Calculate length of columns
let namesLength = Math.max(...names.map((el) => el.length));
let shortNamesLength = Math.max(...shortNames.map((el) => el.length));
let websitesLength = Math.max(...websites.map((el) => el.length));
let sourceReposLength = Math.max(...sourceRepos.map((el) => el.length));
let packageNamesLength = Math.max(...packageNames.map((el) => el.length));

// Create markdown
let markdown = `|Number|${"Name".padEnd(namesLength)}|${"Short name".padEnd(
	shortNamesLength
)}|${"Website".padEnd(websitesLength)}|${"Source".padEnd(
	sourceReposLength
)}|${"Package name".padEnd(packageNamesLength)}|\n`;
markdown +=
	"|" +
	[
		6,
		namesLength,
		shortNamesLength,
		websitesLength,
		sourceReposLength,
		packageNamesLength,
	]
		.map((x) => "".padEnd(x, "-"))
		.join("|") +
	"|\n";
for (let i = 0; i < names.length; i++) {
	markdown += `|${("" + (i + 1)).padEnd(6)}|${names[i].padEnd(
		namesLength
	)}|${shortNames[i].padEnd(shortNamesLength)}|${websites[i].padEnd(
		websitesLength
	)}|${sourceRepos[i].padEnd(sourceReposLength)}|${packageNames[i].padEnd(
		packageNamesLength
	)}|\n`;
}

// Write Markdown table to output
$("#output").html(markdown);

// Event handler for copying markdown content to clipboard by pressing the button
$("#copyMarkdownButton").on("click", () => {
	navigator.clipboard.writeText(markdown);
});
