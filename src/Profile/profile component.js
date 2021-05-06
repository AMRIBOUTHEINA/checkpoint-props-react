import React from "react"
import PropTypes from "prop-types";
 export const Welcome = props =>{
    console.log(props)
     return (
         <div>
      <button style={{ background: 'red' ,height: '50px' ,width: '150px' }} onClick={props.alertMyInput}> display name </button> 
     <h1> Welcome I'm {props.fullname} .I enjoy {props.bio} and i'm {props.profession}   </h1>
     {props.children}
     </div>
     
     )
    }
    Welcome.propTypes ={
        fullname:PropTypes.string,
        bio:PropTypes.string,
        profession:PropTypes.string
       
    }
    Welcome.defaultProps = {
        fullname:"allname",
        bio:"enjoying",
        profession: "occupation"
       };