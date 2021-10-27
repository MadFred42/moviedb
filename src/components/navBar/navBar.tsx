import React, { useContext } from 'react';
import { Context } from '../..';

function NavBar() {
    const movieStore: any = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
        <a className="navbar-brand" href="/">My movieDB</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Popular</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Last released</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Top rated</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Genres
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    movieStore.genres.map((genre: string) => <a key={genre} className="dropdown-item" href="#">{genre}</a>)
                }
                </div>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 d-flex">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    );
}

export default NavBar;