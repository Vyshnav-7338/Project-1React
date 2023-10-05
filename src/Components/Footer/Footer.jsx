import React from 'react'
import { FaLinkedin, FaFacebook, FaTwitter, FaGooglePlusG, FaHome, FaMailBulk, FaPhone, } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <footer class="page-footer font-small mdb-color pt-4" >
            <div class="container text-center text-md-left">
                <div class="row text-center text-md-left mt-3 pb-3">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                    </div>

                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Menu Link</h6>
                        <p>
                            <Link className='Link' to='/'>Home</Link>
                        </p>
                        <p>
                            <Link className='Link' to='/Complaints'>Complaints</Link>
                        </p>
                        <p>
                            <Link className='Link' to='/About'>About</Link>
                        </p>
                        <p>
                            <Link className='Link' to='/Contactus'>Contact us</Link>
                        </p>
                    </div>
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                        <p>
                            <Link className='Link' to='/'>Govt.Site</Link>
                        </p>
                        <p>
                            <Link className='Link' to='/'>Kerala Police</Link>
                        </p>
                        <p>
                            <Link className='Link' to='/'>Help</Link>
                        </p>
                    </div>
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p>
                            <FaHome /> Abc CDE, ABC,123, Kerala
                        </p>
                        <p>
                            <FaMailBulk /> ***@gmail.com
                        </p>
                        <p>
                            <FaPhone /> + 99 22* *** **
                        </p>

                    </div>

                </div>
                <hr />
                <div class="row d-flex align-items-center">
                    <div class="col-md-7 col-lg-8">
                        <p class="text-center text-md-left">© 2023 Copyright:
                            <Link className='Copyright' to='/'> <strong> vsr.com</strong></Link>
                        </p>

                    </div>
                    <div class="col-md-5 col-lg-4 ml-lg-0">
                        <div class="text-center text-md-right">
                            <ul class="list-unstyled list-inline">
                                <li class="list-inline-item">
                                    <Link class="btn-floating btn-sm rgba-white-slight mx-1">
                                        <FaFacebook />
                                    </Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link class="btn-floating btn-sm rgba-white-slight mx-1">
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link class="btn-floating btn-sm rgba-white-slight mx-1">
                                        <FaGooglePlusG />
                                    </Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link class="btn-floating btn-sm rgba-white-slight mx-1">
                                        <FaLinkedin />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
