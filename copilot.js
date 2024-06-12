const fs = require('fs');

// Create the HTML structure
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>
    <header>
        <h1>My Portfolio</h1>
    </header>
    
    <main>
        <section>
            <h2>About Me</h2>
            <p>Add some information about yourself here.</p>
        </section>
        
        <section>
            <h2>Projects</h2>
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </section>
        
        <section>
            <h2>Contact</h2>
            <p>Add your contact information here.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; ${new Date().getFullYear()} My Portfolio</p>
    </footer>
</body>
</html>
`;

// Write the HTML to a file
fs.writeFile('/path/to/portfolio.html', html, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Portfolio created successfully!');
});