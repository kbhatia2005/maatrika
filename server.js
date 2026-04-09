const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// YAHAN DHAYAN DO: Agar folder 'Public' hai toh 'Public' likho, agar 'public' hai toh 'public'
const publicPath = path.join(__dirname, 'Public'); 

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    const indexPath = path.join(publicPath, 'index.html');
    
    // Check kar rahe hain ki file asliyat mein wahan hai ya nahi
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.log("❌ Error: index.html nahi mili is raste par:", indexPath);
            res.status(404).send("Bhai, index.html file nahi mil rahi! Check karo folder ka naam.");
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server LIVE at: http://localhost:${PORT}`);
});