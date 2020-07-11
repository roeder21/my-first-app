import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import MembersContainer from '../components/MembersContainer';

const Members = () => {
    return (
        <>
    <Hero hero="roomsHero">
        <Banner title="kami2x members">
            <Link to="/" className="btn-primary">
                return home
            </Link>
        </Banner>
    </Hero>
    <MembersContainer />
    </>
    );
}

export default Members

