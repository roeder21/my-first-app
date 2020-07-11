import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaBiking,FaTools,FaDribbble} from "react-icons/fa";

export default class Services extends Component {
  
   
        state ={
            services:[
                {
                    icon:<FaCocktail/>,
                title:"Free manginginom",
                info:"kay damu palahubog samun grupo kapin na ang founder namun!"
                },
                {
                    icon:<FaBiking/>,
                title:"Free Ride",
                info:"kay may motor si papi jayen nga daku! ikaw lng galing tughong gasolina!"
                },
                {
                    icon:<FaTools/>,
                    title:"Free pakay-o",
                    info:"actually bisan palahubog lng kami damu man kami talent ah, bisan wala guba, gub-on namun kag kay-uhon para simo. gusto mo try ta gub-on tsura mo?kaso amu lng na galing ang nd na namun makay-o. HAHAHA!"
                },
                {
                    icon:<FaDribbble/>,
                    title:"Free import sa basket",
                    info:"damu samun tanda magbasketball, tupong pusod sulod. charrroottt! sila lang na ya ah. tulog ko to yah! HAHAHA"
                }
            ]
        };
        render() {  
        return (
           <section className="services">
<Title title="services sang kami2x"></Title>
<div className="services-center">
    {this.state.services.map((item,index) =>{
return <article key={index} className="service">
<span>{item.icon}</span>
    <h6>{item.title}</h6>
    <p>{item.info}</p>
</article>
    })}
</div>
</section>
        );
    }
}
