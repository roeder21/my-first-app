import React from 'react'
import Member from './Member';
export default function MembersList({members}) {
    if (members.length === 0){
        return(
            <div className="empty-search">
                <h3>wala kami sng member nga naga match sa imo nga parameters!</h3>
            </div>
        )
    }
    
    return (
    <section className="roomslist">
        <div className="roomslist-center">
            {
                members.map(item => {
                    return <Member key={item.id} member={item}/>;
                })
            }
        </div>
    </section>
    );
    
}
