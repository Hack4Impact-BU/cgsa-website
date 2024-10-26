import './about-us.css';
import Placeholder from '../../assets/image_placeholder.jpg';

function AboutUs() {
    return (
        <div className="about_wrapper">
            <div className="about_mainContainer">
                <h1 className="about_title">About Us</h1>
                <p className="about_description">
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
                <h1 className="about_title">Eboard</h1>
                <div className="about_eboardPicturesWrapper">
                    <div className="about_eboardPictureContainer">
                        <img src={Placeholder} className="about_eboardPicture" />
                        <p className="about_description">First Last</p>
                    </div>
                    <div className="about_eboardPictureContainer">
                        <img src={Placeholder} className="about_eboardPicture" />
                        <p className="about_description">First Last</p>
                    </div>
                    <div className="about_eboardPictureContainer">
                        <img src={Placeholder} className="about_eboardPicture" />
                        <p className="about_description">First Last</p>
                    </div>
                    <div className="about_eboardPictureContainer">
                        <img src={Placeholder} className="about_eboardPicture" />
                        <p className="about_description">First Last</p>
                    </div>
                    <div className="about_eboardPictureContainer">
                        <img src={Placeholder} className="about_eboardPicture" />
                        <p className="about_description">First Last</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs