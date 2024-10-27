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
                <h1 className="about_title">About Us</h1>
                <p className="about_description" style={{marginTop: '-5px'}}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Libero massa commodo quisque convallis est montes platea.
                    Tristique suscipit pharetra vitae condimentum nisi ipsum.
                    Justo vestibulum laoreet ipsum sagittis nisl ex!
                    Imperdiet rhoncus efficitur maximus, vulputate dignissim aliquet mus.
                    Finibus purus pellentesque eros laoreet adipiscing.
                    <br /><br />
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Enim amet id nec magnis tristique. Eros consequat sed viverra sagittis lacus.
                    Lobortis ornare accumsan montes, ipsum venenatis imperdiet.
                    Purus pellentesque maecenas porta facilisi turpis molestie rhoncus ornare volutpat.
                    Nec dapibus augue turpis vestibulum congue mus.
                    Ligula felis consectetur condimentum nascetur risus quis.
                </p>
            </div>
            <div className="about_eboardContainer">
                <h1 className="about_title">E-Board</h1>
                <div className="about_eboardPicturesWrapper">
                    <div className="about_eboardPictureContainer">
                        <img src={Seheni} className="about_eboardPicture" />
                        <div className="about_description">
                            <p>Seheni Kariyawasan (she/her)</p>
                            <p><i>Director</i></p>
                        </div>
                    </div>
                    <div className="about_eboardPictureContainer">
                        <img src={Morgan} className="about_eboardPicture" />
                        <div className="about_description">
                            <p>Morgan Brennan (she/her)</p>
                            <p><i>Student Orgs Coordinator</i></p>
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
                        <img src={Yihsi} className="about_eboardPicture" />
                        <div className="about_description">
                            <p>Yihsi Huang (she/her)</p>
                            <p><i>Volunteer Coordinator</i></p>
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