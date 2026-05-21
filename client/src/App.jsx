function App() {
  return (
      <>
        <header>
          <nav>
            <div className="nav-bar-main">
              <i className="fa-solid fa-tower-cell"></i>
              <h3>RadioReady</h3>
            </div>
            <div className="nav-bar-links">
              <a className="nav-bar-btn">Features</a>
              <a className='nav-bar-btn'>Commands</a>
              <a className="nav-bar-btn">How It Works?</a>
              <a className="nav-bar-btn">Leaderboard</a>
            </div>
            <a className="styled-btn">
              <i className="fa-brands fa-discord"></i>
              <p className="styled-btn-text">Add to Discord</p>
            </a>
          </nav>
        </header>
        <main>
          <section className="home-section">
            <p className="home-section-tag">Home</p>
            <section className="home-main-content">
              <div className="syllabus-card">
                <i className="fa-regular fa-star"></i>
                <p>RSGB Foundation V1.6 syllabus</p>
              </div>
              <h1>Ace your <span className="home-title-span">Foundation</span> amateur radio exam</h1>
              <h2>RadioReady is a newly made discord bot that quizzes you on real RSGB Foundation exam questions without even having to leave discord aswell as tools like QCode and bandplan search up commands and a competative leaderboard.</h2>
              <section className="home-btns">
                <a className="styled-btn">
                  <i className="fa-brands fa-discord"></i>
                  <p className="styled-btn-text">Add to your server</p>
                </a>
                <a className="styled-btn">
                  <i className="fa-solid fa-book"></i>
                  <p className="styled-btn-text">View commands</p>
                </a>
              </section>
              <section className="home-facts">
                <div className="home-fact">
                  <h4 className="fact-main-text">70+</h4>
                  <p className="fact-sub-text">Real exam questions</p>
                </div>
                <div className="home-fact">
                  <h4 className="fact-main-text">3</h4>
                  <p className="fact-sub-text">Communities using it</p>
                </div>
                <div className="home-fact">
                  <h4 className="fact-main-text">V1.6</h4>
                  <p className="fact-sub-text">RSGB syllabus</p>
                </div>
                <div className="home-fact">
                  <h4 className="fact-main-text">Free</h4>
                  <p className="face-sub-text">Always</p>
                </div>
              </section>
            </section>
          </section>
        </main>
      </>
  )
}

export default App