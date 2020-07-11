import React, { Component } from 'react'
import {MemberContext} from '../context';
import Loading from "./Loading";
import Member from "./Member";
import Title from "./Title";
export default class Featuredmember extends Component {
    static contextType = MemberContext
    render() {
      let {loading, featuredMembers: members} = this.context
      members = members.map(member =>{
          return <Member key={member.id} member={member}/>
      })
        return (
            <section className="featured-rooms">
                <Title title="kami2x rankings & positions"/>
        <div className="featured-rooms-center">{loading ? <Loading />: members }</div>

                
               
              
               
            </section>
        );
    }
}
