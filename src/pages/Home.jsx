import "../musicPlayer.js";
function Home() {
  return (
    <>
      <header>
        <nav className="initialNav">
          <ul className="initialNavList">
            <li>
              <a
                href="https://instagram.com/paleapolloband"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="instagramLogo" src="/media/instagram.png" />
              </a>
            </li>
            <li>
              <a href="mailto:paleapollo@gmail.com">
                <img className="emailLogo" src="/media/email.png" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="pageContainer">
          <section className="landingPageImgSection">
            <div className="logoContainer">
              <img
                className="nameLogo"
                src="/media/PALEAPOLLO_WHITELOGO_TRANSPARENT.png"
                alt="Pale Apollo Logo"
              />
              <img
                className="pillar"
                src="/media/PALEAPOLLO_pillar.png"
                alt="Pale Apollo Pillar Logo"
              />
            </div>
          </section>

          <section className="tagLineContainer">
            <h3 className="tagLineText">Inorganic Sound Played Organically</h3>
          </section>

          <section className="music">
            <section className="musicPlayer">
              <img
                className="albumArt"
                src="/media/New_album_art.jpg"
                alt="album artwork"
              />
              <div className="nowPlayingTrackListContainer">
                <section className="nowPlaying">
                  <h2 className="trackName"></h2>
                  <input
                    type="range"
                    defaultValue="0"
                    className="progressBar"
                  />
                  <div className="controls">
                    <button className="previousButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                        />
                      </svg>
                    </button>
                    <button className="playButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <button className="nextButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                        />
                      </svg>
                    </button>
                  </div>
                </section>
                <section className="trackListContainer">
                  <div className="trackListing">
                    <ul>
                      <li>1. Kintsugi</li>
                      <li>2. Cope</li>
                    </ul>
                  </div>
                </section>
                <section className="contactSection">
                  <div className="contactContainer">
                    <a
                      href="https://paleapollo.bandcamp.com/"
                      className="contactButton"
                    >
                      Purchase
                    </a>
                  </div>
                </section>
              </div>
            </section>
            {/* don't need to set the src here it gets set by playTrackOrder.src = trackList[trackListIndex].file in playTracks function in JS file */}
            <audio id="audioPlayer"></audio>
          </section>
        </div>
      </main>
    </>
  );
}
export default Home;
