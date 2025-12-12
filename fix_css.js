const fs = require('fs');
// Write pure ASCII/UTF-8 without BOM
fs.writeFileSync('index.css', Buffer.from('@import "tailwindcss";\n'));
console.log('index.css created');
