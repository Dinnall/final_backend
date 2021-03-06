import React from'react';
import $ from 'jquery';

var newRestaurant = React.createClass({
   getInitialState: function (){
return {name: "", neighborhood:"", address: "", cuisine: "", cost: "0"}
  },
  handleChange(e){
if(e.target.placeholder === 'name'){
  this.setState({name: e.target.value})
} else if (e.target.placeholder === 'neighborhood'){
  this.setState({neighborhood: e.target.value})
} else if (e.target.placeholder === 'address'){
  this.setState({address: e.target.value})
} else if (e.target.placeholder === 'cuisine'){
  this.setState({cuisine: e.target.value})
} else if (e.target.name === 'Select'){
  this.setState({cost: e.target.value})
}
  },
  handleClick(e){
e.preventDefault()
console.log('STATE:', this.state)
$.ajax({
  url:'/api/restaurants',
  type: 'POST',
  data: this.state,
  success: ((data)=>{
    data ? console.log('Data is here:', data) : null
  })
})
   },
   render: function() {
     return (
       <div>
         <form>
        <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange}/>
      <input type="text" placeholder="Neighborhood" onChange={this.handleChange}/>
      <input type="text" placeholder="Address" onChange={this.handleChange}/>
      <input type="text" placeholder="Cuisine" onChange={this.handleChange}/>
      <select name="Select" onChange={this.handleChange}>
             <option value="1">$</option>
             <option value="2">$$</option>
             <option value="3">$$$</option>
             <option value="4">$$$$</option>
           </select>
      <input type="submit" value="Submit New Restaurant" onClick={this.handleClick} />
         </form>
       </div>
    )
  }
})


  export default newRestaurant;