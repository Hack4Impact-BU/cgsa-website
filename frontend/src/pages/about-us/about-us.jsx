import './about-us.css';
import Akaash from '../../assets/akaash.png'
import Jiline from '../../assets/jiline.png'
import Morgan from '../../assets/morgan.png'
import Seheni from '../../assets/seheni.jpg'
import Tania from '../../assets/tania.png'
import Yihsi from '../../assets/yihsi.png'

function AboutUs() {
    return (
        <div className="about_wrapper">
            <div className="about_mainContainer">
                <h1 className="page_title">About Us</h1>
                <p className="about_description" style={{marginTop: '-5px'}}>
                The Center for Gender, Sexuality, and Activism (CGSA) at Boston University is a student-led space committed to fostering inclusion, equality, and social justice for individuals of all genders and sexualities. Guided by a social justice framework, the CGSA works to dismantle systems of gender-based oppression and violence, advocating for the full empowerment and representation of women, queer, and trans students. Through dynamic community-building, the CGSA promotes open and challenging dialogue, supports student activism, and provides essential resources, education, and programming to cultivate awareness and drive meaningful change within the Boston University community and beyond.
                </p>
            </div>
            <div className="about_eboardContainer">
                <h1 className="about_title">E-Board</h1>
                <div className="about_eboardPicturesWrapper">
                    <div className="about_eboardPictureContainer">
                        <img src={Yihsi} className="about_eboardPicture" />
                        <div className="about_description">
                            <p>Yihsi Huang (she/her)</p>
                            <p><i>Director & Volunteer Coordinator</i></p>
                        </div>
                    </div>
                    <div className="about_eboardPictureContainer">
                        <img src={Jiline} className="about_eboardPicture" />
                        <div className="about_description">
                            <p>Jiline Foote (she/they)</p>
                            <p><i>Social Media Coordinator</i></p>
                        </div>
                    </div>
                    <div className="about_eboardPictureContainer">
                        <img src={Tania} className="about_eboardPicture" />
                        <div className="about_description">
                            <p>Tania Torres (she/her)</p>
                            <p><i>Space Coordinator</i></p>
                        </div>
                    </div>
                    <div className="about_eboardPictureContainer">
                        <img src={Akaash} className="about_eboardPicture" />
                        <div className="about_description">
                            <p>Akaash Khurana (he/him)</p>
                            <p><i>Treasurer</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs