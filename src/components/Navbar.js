import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';

export default function Navbar(props) {
    return (
        props.mode &&
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.aboutText}</a>
                        </li>


                    </ul>

                </div>
                <button type="button" className="btn btn-primary mx-3" onClick={props.blueMode}>Blue</button>
                <button type="button" className="btn btn-secondary mx-3" onClick={props.greyMode}>Grey</button>
                <button type="button" className="btn btn-success mx-3" onClick={props.greenMode}>Green</button>
                <button type="button" className="btn btn-danger mx-3" onClick={props.redMode}>Red</button>
                <button type="button" className="btn btn-warning mx-3" onClick={props.yellowMode}>Yellow</button>
                <button type="button" className="btn btn-info mx-3" onClick={props.skyMode}>Sky</button>
                <button type="button" className="btn btn-light mx-3" onClick={props.lightMode}>Light</button>
                <button type="button" className="btn btn-dark mx-3" onClick={props.darkMode}>Dark</button>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} Mode`}</label>
                </div>
            </nav>
        </>
    )

}

Navbar.defaultProps = {
    title: 'Akshat',
    aboutText: "Likho Kuch"
};
Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired } 