



import React from 'react'
import MembersFilter from './MembersFilter';
import MembersList from './MembersList';
import { withMemberConsumer } from '../context';
import Loading from './Loading';

function MemberContainer({ context }) {
const {loading, sortedMembers, members } = context;
if (loading){
    return <Loading/>;
    }
                        return(
                            <>
                           
                            <MembersFilter members={members}/>
                            <MembersList members={sortedMembers}/>
                        </>
                        );

}

export default withMemberConsumer(MemberContainer);
// export default function MembersContainer() {
//     return (

//         <MemberConsumer>
//             {
//                 (value)=>{
//                     const {loading,sortedMembers,members} = value
// if(loading){
//     return <Loading></Loading>;
// }
//                     return(
//                         <div>
//                         hello from room container
//                         <MembersFilter members={members}/>
//                         <MembersList member={sortedMembers}/>
//                     </div>
//                     );
                    
//                 }
//             }
//         </MemberConsumer>
      
//     )
// }
