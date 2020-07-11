import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {MemberContext} from '../context';
import StyledHero from '../components/StyledHero';
export default class Singlemember extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state ={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = MemberContext;
    // componentDidMount(){}
    render() {
        const  {getMember} = this.context;
        const member = getMember(this.state.slug);
        if(!member){
            return( <div className="error">
                <h3>nagay minango bla kay keyboard warrior ka man abi.tsss!</h3>
                <Link to="/members" className="btn-primary">back to members</Link>
            </div>
            );
        }
const {name,position,bio,price,talents,images,slug} = member;
const [mainImg,...defaultImg]= images

        return ( 
            <>
           <StyledHero img={mainImg ||this.state.defaultBcg}>
               <Banner title={`${name}. -${slug}`}>
                   <Link to='/members' className='btn-primary'>
                       back to members
                   </Link>
               </Banner>
           </StyledHero>
           <section className="single-room">
               <div className="single-room-images">
                  {defaultImg.map((item, index)=>{
                     return   <img key={index} src={item} alt={name}/>;
                   })}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                       <h3>Bio</h3>
                <p>{bio}</p>
                   </article>
                   <article className="info">
                       <h3>info</h3>
                       <h6>Position : {position}</h6>
                <h6>talent fee : ${price}</h6>
              
                   </article>
               </div>
           </section>
           <section className="room-extras">
               <h6>Talents</h6>
               <ul className="extras">
                   {talents.map((item,index)=>{
                       return <li key = {index}>• {item}</li>
                   })}
               </ul>
           </section>
           </>
        )
    }
}
