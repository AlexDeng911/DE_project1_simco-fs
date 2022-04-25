const express = require('express');
const article = express();
const path = require('path');
const port = process.env.PORT || 5000; 
article.use(express.static('public')); 
article.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}); article.listen(port, () =>
    console.log(`Server is running on: http://localhost:${port}`));