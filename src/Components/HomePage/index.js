import React, { Component } from "react";
import "./index.css";

class HomePage extends Component {
  audioRef = React.createRef();

  handleMusic = () => {
    if (this.audioRef.current) {
      this.audioRef.current.play();
    }
  };

  render() {
    return (
      <div className="home-page-bg-container">
        <h1 className="main-heading">To My Special Person</h1>
        <div className="images-container">
          <img
            src="https://clipground.com/images/free-clipart-happy-birthday-greetings-7.jpg"
            alt="birthday-image"
            className="birthday-image"
            onClick={this.handleMusic}
          />

          <img
            src="https://greetings-day.com/wp-content/uploads/2016/01/Happy-birthday-for-her-1.jpg"
            className="birthday-image"
            alt="birthday-image"
            onClick={this.handleMusic}
          />
          <audio
            ref={this.audioRef}
            src="https://res.cloudinary.com/dq4yjeejc/video/upload/v1722511088/Lights_chosic.com_gubnld.mp3"
            style={{ display: "none" }}
          />
        </div>
        <h1 className="main-heading">
          ✨ Tap on the images above to hear a festive birthday melody! 🎶
        </h1>
      </div>
    );
  }
}

export default HomePage;
