import React from 'react';
import "./style.scss"

const index = () => {
    return (
        <>
            <footer className="footer">
                <div className="container bb">
                    <div className="footer-flex">
                        <ul className="footer__ul">
                            <li className="footer__ul__logo list-unstyled">
                                <i class="fa-brands fa-github me-3 fs-3"></i>
                               2022 GitHub, Inc.
                            </li>
                        </ul>

                        <ul className="footer__ul2">
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a '>
                                Terms</a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>Privacy</a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>
                                Security</a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>Status
                            </a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>Docs</a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>Contact GitHub</a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>Pricing</a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>API</a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>Training</a></li>
                            <li className="li__footer__ul__li2"><a href="#" className='li__footer__ul__li2__a'>Blog</a></li>
                            <li className="li__footer__ul__li2"><a href="#"
                                className='li__footer__ul__li2__a'>About</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default index;