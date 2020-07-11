import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedMembers from '../components/FeaturedMember';


export default function Home()
 {
    return (
    <>
    <Hero hero="defaultHero">
<Banner title="Kami2x pero kun mag-intra ka kita2x na eh" subtitle="lupok gani bulcan.. tsura mo pa ayhan?">

<Link to="/members" className = "btn-primary">
kami2x members
</Link>
</Banner>
    </Hero>
    <Services/>
    <FeaturedMembers/>
  
    </>
    );
}




