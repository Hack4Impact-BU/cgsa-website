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
                font-family: 'Lora', sans-serif;
                margin: 0;
                padding: 0;
                background-color: rgba(222, 215, 245, 1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .container {
                max-width: 600px;
                margin-right: 10px;
                margin-left: 10px;
                background: white;
                overflow: hidden;
            }
            .header {
                color: black;
                padding: 0px;
            }
            .section {
                padding: 15px;
                border-bottom: dashed 0.2rem rgba(115, 82, 212, 1);
                padding-bottom: 30px;
                text-align: center;
            }
            .section:last-of-type {
                border-bottom: none;
            }
            .newsletter {
                text-align: left;
            }
            .footer {
                background-color: #f1f1f1;
                text-align: center;
                font-size: 1rem;
                color: #666;
                max-width: 600px;
                margin-right: 10px;
                margin-left: 10px;
                overflow: hidden;
            }
            a {
                color: #3498db;
                text-decoration: none;
            }
            h1, h2 {
                font-family: 'Libre Bodoni', sans-serif;
            }
            h1 {
                font-size: 1.2rem;
            }
            h2 {
                font-size: 1.2rem;
                margin: 0;
                margin-bottom: 0.5rem;
            }
            p {
                font-size: 1.0rem;
            }
            img {
                max-width: 400px;
            }
            .social-icons img {
                width: 24px;
                margin: 0 5px;
            }
            .executive-board {
                line-height: 1.5;
                background-color: rgba(222, 215, 245, 0.3);
                margin: 30px 0px 30px 0px;
                padding-bottom: 15px;
                border-bottom: none;
            }
            .executive-board p {
                margin: 0;
                font-size: 1rem;
            }
            .title {
                font-family: 'Libre Bodoni', sans-serif;
                font-size: 1.4rem;
                padding: 0px 15px 0px 15px;
            }
            .title b {
                font-family: WhitneyMedium, sans-serif;
            }
            .separator {
                background-color: rgba(222, 215, 245, 1);
                height: 0.3rem;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <!-- Header -->
            <div class="header">
                <p class="title"><b>Boston University</b> <br> Center for Gender, Sexuality, and Activism</p>
                <div class="separator"></div>
            </div>

            <!-- Welcome Section -->
            
                <div class="section newsletter">
                    <h1>${title}</h1>
                    <p><em>${author}</em></p>
                    ${formattedContent}
                </div>
                <!-- Other sections remain unchanged -->
            

                <!-- Volunteer Section -->
                <div class="section">
                    <h1>Help us keep the CGSA running smoothly!</h1>
                    <p>Volunteers are super important to the CGSA, and help us make sure everything runs smoothly during the semester. We are really grateful for your help in keeping the space open so that we can provide resources to students!</p>
                    <img src="https://i.imgur.com/yvyEC8q.png" alt="Volunteers Needed">
                </div>

                <!-- Social Media Section -->
                <div class="section">
                    <h1>Keeping Up with CGSA</h1>
                    <p>Follow us on social media to stay updated with our events!</p>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/bucgsa" target="_blank"><img src="https://i.imgur.com/rEiuiC7.png" alt="Instagram"></a>
                        <a href="https://x.com/bucgsa" target="_blank"><img src="https://i.imgur.com/iUncriW.png" alt="Twitter"></a>
                    </div>
                </div>

            <!-- Executive Board Section -->
            <div class="section executive-board">
                <h2>CGSA Executive Board</h2>
                <p>Director: Seheni Kariyawasan (she/her)</p>
                <p>Student Orgs Coordinator: Morgan Brennan (she/her)</p>
                <p>Social Media Coordinator: Jilline Foote (she/they)</p>
                <p>Volunteer Coordinator: Yishi Huang (she/her)</p>
                <p>Space Coordinator: Tania Torres (she/her)</p>
                <p>Treasurer: Aakash Khurana (he/him)</p>
            </div>
        </div>
        <!-- Footer -->
        <div class="footer">
            <p>Boston University | Center for Gender, Sexuality, and Activism</p>
            <p>775 Commonwealth Ave, Boston, MA 02215</p>
            <p>Contact: <a href="mailto:cgsa@bu.edu">cgsa@bu.edu</a></p>
        </div>
        </div>
    </body>
    </html>
    `;
};

export default createHtmlTemplate;