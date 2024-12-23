const createHtmlTemplate = (title, author, content) => {

    const formattedContent = content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => `<p>${line}</p>`)
        .join('');

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Newsletter</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
            body {
                font-family: Lora;
                margin: 0;
                padding: 0;
                background-color: rgba(222, 215, 245, 1);
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: rgba(222, 215, 245, 1);
                border-radius: 5px;
                overflow: hidden;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: rgba(115, 82, 212, 0.8);
                color: white;
                text-align: center;
                padding: 20px;
            }
            .content {
                padding: 20px;
            }
            .footer {
                background-color: #f1f1f1;
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #666;
            }
            a {
                color: #3498db;
                text-decoration: none;
            }
            h1 {
                font-family: Libre Bodoni;
            }
            img {
                width: 40rem;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Boston University CGSA</h1>
            </div>
            <div class="content">
                <h2>${title}</h2>
                <p><strong>Author:</strong> ${author}</p>
                <p>${formattedContent}</p>
            </div>
            <div class="footer">
                <a href="https://bucgsa.org">Visit our website</a>
            </div>
        </div>
    </body>
    </html>
    `;
};

export default createHtmlTemplate;
