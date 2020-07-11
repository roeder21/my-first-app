import React from 'react'
import {useContext} from 'react';
import {MemberContext} from "../context";
import Title from "../components/Title";

//get all unique values
const getUnique = (items,value) => {
return [...new Set(items.map(item => item[value]))]
};
export default function MembersFilter({members}) {
    const context = useContext(MemberContext);
    const {
        handleChange,
        position,
        price,
        minPrice,
        maxPrice
    } = context;
//get unique types
let positions = getUnique(members,"position");
//add all     
positions = ["all", ...positions];
// map to jsx
positions = positions.map((item, index) => {
return <option value={item} key={index}>{item}</option>
}) 
return (
        <section className="filter-container">
          <Title title="search members"/>
          <form className="filter-form">
              {/*select position*/}
              <div className="form-group">
                  <label htmlFor="position">position</label>
             <select name="position" id="position" value={position} className="form-control" onChange = {handleChange}>
                {positions}
             </select> 
             </div>
              {/*end select type*/}
                {/*talent fee*/}
                <div className="form-group">
<label htmlFor="price">talent fee ${price}</label>
            <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"></input> 
              
             </div>
              {/*talent fee*/}
          </form>
        </section>
    );
}
