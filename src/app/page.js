export default function Home() {
  return (
    <main>
      <div className="main-div">
      <div className="main-left-div">
        <div>
          <label>A beautifull house</label>
          <label className="main-title-label">Furniture.</label>
          <p className="main-explanation-label">Find out the most efficient way to start</p>
          <p className="main-explanation-label">organizing your home. Begin by creating</p>
          <p className="main-explanation-label">storage space.</p>
        </div>
        <div className="main-left-image">
           <img src="sample/main-sample/main-sample-img.jpeg" />
        </div>
      </div>
      <div className="main-center-div">
        <div className="center-in-img-div"></div>
        <div className="center-in-explanation-div">
          01.<br/> A beatifull chair <br/>
          A collection of simple, minimal <br/>
          chairs and seating
        </div>
      </div>
      <div className="main-right-div">
        <div className="main-right-slider">
          <img src="/sample/hairshotsample/sample1.jpeg" />
        </div>
        <div className="main-right-slider">
        <img src="/sample/hairshotsample/sample2.jpeg" />
        </div>
        <div className="main-right-slider">
        <img src="/sample/hairshotsample/sample3.jpeg" />
        </div>
      </div>
      </div>
      <div className="main-under-div">
        <div className="first-image-div">
          <img src="sample/main-sample/main-sample-img2.jpg"/>
        </div>
      </div>
    </main>
  )
}
