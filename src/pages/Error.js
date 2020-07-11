import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
export default function Error() {
    return <Hero hero="defaultHero">
<Banner title ="404" subtitle="nagay minango kay ang ginapangita mo nga page wala diri.">
    <Link to="/" className = "btn-primary">
        return home
    </Link>
</Banner>

    </Hero>
}
