import React, { Component } from 'react'
// import items from './data';
import Client from './Contentful';



const MemberContext = React.createContext();


 class MemberProvider extends Component {
    state = {
       members: [],
       sortedMembers: [],
        featuredMembers: [],
        loading: true,
        position:"all",
        price: 0,
        minPrice: 0,
        maxPrice: 0
    };
    //getData
getData = async () => {
    try {
        let response = await Client.getEntries({content_type: "gs",
        order: "sys.createdAt"
    });
        let members = this.formatData(response.items);
        let featuredMembers = members.filter(member => member.featured === true);
        let maxPrice = Math.max(...members.map(item => item.price));
        
        this.setState({
            members, 
            featuredMembers, 
            sortedMembers:members, 
            loading:false, 
            price: maxPrice, 
            maxPrice
        });
    } catch (error) {
        console.log(error);
    }
}

    componentDidMount(){
        this.getData()
       
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
        let member = { ...item.fields, images, id};
        return member;
        
        
        });
        return tempItems;
    }
getMember = (slug) => {
    let tempMembers = [...this.state.members]
    const member = tempMembers.find(member => member.slug===slug);
    return member;
};
handleChange = event => {
const target = event.target;
const value = event.type === 'checkbox' ? target.checked : target.value;
const name = event.target.name;
this.setState(
    {
    [name]:value
},
this.filterMembers
);

};
  
filterMembers = () => {
    let{
         members,
         position,
         price,
        
    } = this.state;

    let tempMembers = [...members];

    price =  parseInt(price);

    if(position !== 'all'){
        tempMembers = tempMembers.filter(member => member.position === position )
    }
 //filter by price
 tempMembers = tempMembers.filter( member => member.price <= price);
    

    this.setState({
        sortedMembers:tempMembers

    })

};
    render() {
        return (
            <MemberContext.Provider value={{ ...this.state, getMember: this.getMember, handleChange: this.handleChange}}>
                {this.props.children}
            </MemberContext.Provider>
        )
    }
}
const MemberConsumer = MemberContext.Consumer

export function withMemberConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <MemberConsumer>
            {value => <Component {...props} context = {value}/>}
        </MemberConsumer>
    }
}


export{MemberProvider, MemberConsumer, MemberContext};
