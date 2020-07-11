import React from 'react'
import {Link} from 'react-router-dom';
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types"; 
export default function Member({member}) {
   const {name,slug,images,price} = member;
    return (
        <article className="room">
           <div className="img-container">

               <img src={images[0] || defaultImg} alt="founder"/>
               <div className="price-top">
    <h6>${price}</h6>
    <p>Talent Fee</p>
               </div>
               <Link to={`/members/${slug}`} className="btn-primary room-link">lantawa da</Link>
    <p className="room-info">{name}</p>
           </div>
        </article>
    );
}

Member.propTypes = {
    member:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}
