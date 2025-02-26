import './affiliated-clubs.css'

function AffiliatedClubs() {
    return (
        <>
            <h1 className="clubs_title">Affiliated Clubs</h1>
            <div className="form_description">
                    <p style={{ fontSize: '1.5rem' }}>This page serves as an introduction to our affiliated clubs at Boston University. Feel free to check out their Instagram and Linktree or email them using the links below!</p>
                </div>
            <div className="clubs_item">
                <h3>Trans Listening Circle</h3>
                <h5><a href="https://www.instagram.com/bu_tlc"><i>@bu_tlc</i></a> – <a href="mailto:translisteningcircle@gmail.com">translisteningcircle@gmail.com</a></h5>
            </div>
            <div className="clubs_item">
                <h3>Students for Justice in Palestine</h3>
                <h5><a href="https://www.instagram.com/bu_sjp"><i>@bu_sjp</i></a> – <a href="https://linktr.ee/BUSJP">Linktree</a> – <a href="mailto:bostonuniversitysjp@gmail.com">bostonuniversitysjp@gmail.com</a></h5>
            </div>
            <div className="clubs_item">
                <h3>Students for Reproductive Freedom</h3>
                <h5><a href="https://www.instagram.com/bostonusrf"><i>@bostonusrf</i></a> – <a href="https://linktr.ee/bostonusrf">Linktree</a> – <a href="mailto:bostonusrf@gmail.com">bostonusrf@gmail.com</a></h5>
            </div>
            <div className="clubs_item">
                <h3>Period. The Menstrual Movement</h3>
                <h5><a href="https://www.instagram.com/periodatbu"><i>@periodatbu</i></a> – <a href="mailto:period@bu.edu">period@bu.edu</a></h5>
            </div>
            <div className="clubs_item">
                <h3>Young Democratic Socialists</h3>
                <h5><a href="https://www.instagram.com/ydsaatbu"><i>@ydsaatbu</i></a> – <a href="https://linktr.ee/BUYDSA">Linktree</a> – <a href="mailto:ydsabu@gmail.com">ydsabu@gmail.com</a></h5>
            </div>
        </>
    )
}

export default AffiliatedClubs