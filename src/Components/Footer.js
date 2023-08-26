import React from 'react'

export const Footer = () => {

    const myStyle = {
        backgroundImage: "url('https://files.sciastra.com/footermain.jpg')",
        backgroundSize: 'cover',
    };
    return (
        <div className='mt-5'>
            <footer className="text-center text-lg-start " style={myStyle}>

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block"  >
                        <span className=' text-light fw-bold'>Get connected with me on social networks:</span>
                    </div>

                    <div>

                        <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/chinu.negi.1213?mibextid=ZbWKwL" target="_blank" rel="noreferrer" role="button"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" target="_blank" rel="noreferrer" role="button"><i class="fab fa-google"></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/dishant_negi_/" target="_blank" rel="noreferrer" role="button"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/dishant-negi-42200b237" target="_blank" rel="noreferrer" role="button"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/dishant2582" target="_blank" rel="noreferrer" role="button"><i class="fab fa-github"></i></a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">

                                <h6 className="text-uppercase text-light fw-bold mb-4">
                                    <img className='' src="https://sciastra.com/Assets/Images/newsciastra.jpg" alt="..." style={{ width: "60px", height: "60px" }} />SciAstra
                                </h6>
                                <p className='text-light '>Home</p>
                                <p className='text-light '>Courses</p>
                                <p className='text-light '>Blog</p>
                                <p className='text-light '>Free Materials</p>
                                <p className='text-light '>Contact Us</p>

                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4  text-light">Contact</h6>
                                <p className=' text-light'><i className="fas fa-home me-3  text-light"></i> Ramnagar, Nainital, India</p>
                                <p className=' text-light'>
                                    <i className="fas fa-envelope me-3  text-light "></i> negidishant5@gmail.com
                                </p>
                                <p className=' text-light'><i className="fas fa-phone me-3  text-light"></i> +91 9389937075</p>
                                <p className=' text-light'><i className="fas fa-print me-3  text-light"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-4 fw-bold  text-light">
                    WEB ASSIGNMENT BY DISHANT NEGI
                </div>

            </footer>
        </div>
    )
}
