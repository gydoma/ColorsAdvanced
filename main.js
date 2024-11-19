function readColors() {
    const filePath = 'data.csv';
    const colors = [];

    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');

            for (let i = 0; i < lines.length; i++) {
                const columns = lines[i].split(',');

                if (columns.length >= 2) {
                    const colorName = columns[0].replace(/"/g, '');
                    const colorHex = columns[1].replace(/"/g, '');

                    colors.push({ colorName, colorHex });
                }
            }

            console.log(colors);
        })
        .catch(error => {
            console.error('Error reading data.csv:', error);
        });
}

readColors();

// div#meaning's text and color
// div#color's text and color

// div.check div.cross