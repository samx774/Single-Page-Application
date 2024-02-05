import homeImage from './cloud1-removebg-preview.jpg'

function Home() {
    return <>
        <section className="home py-5 d-flex justify-content-center align-items-center text-center">
            <div>
                <div className="home-img mx-auto mb-3">
                    <img className='home-img' src={homeImage} alt="#"/>
                </div>
                <div className="main-info text-white">
                    <h1 className='main-text'>START FRAMEWORK</h1>
                    <div className="lines d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-white"></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3 bg-white"></div>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </section>
    </>
}

export default Home;