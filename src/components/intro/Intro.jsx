import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/betterme.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Mikhail J. Abaya Lajom</h1>
          <h3>Software Engineer <span></span></h3>
        </div>
        <a href="#portfolio">
        <img src="assets/down-arrow.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
