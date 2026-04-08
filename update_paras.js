const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./src', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        // regex to find <p className="...">
        const regex = /<p\s+className="([^"]*)"/g;
        
        let modified = false;
        content = content.replace(regex, (match, classes) => {
            // If it has leading-relaxed (which implies multi-line text) or max-w- (which implies paragraph width constraint)
            if ((classes.includes('leading-relaxed') || classes.includes('text-gray-') || classes.includes('leading-')) && !classes.includes('text-justify') && !classes.includes('uppercase')) {
                modified = true;
                let newClasses = `text-justify ${classes}`;
                newClasses = newClasses.replace('text-center ', '').replace(' text-center', '');
                newClasses = newClasses.replace('text-right ', '').replace(' text-right', '');
                return `<p className="${newClasses}"`;
            }
            return match;
        });

        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${filePath}`);
        }
    }
});
