import React from 'react'
import Card from './Card'

const Cards = () =>{
    return (
        <div className="card-container">
            <Card src={'https://ashfordcreative.com/wp-content/uploads/2019/08/iStock-987365514.jpg'} 
            name={'User Experience and Web Development'} />
            <Card src={'https://miro.medium.com/max/6000/1*JUSbO0xkXPf2jtYLMSAZ8w.jpeg'} 
            name={'Mobile Development'} />
            <Card src={'https://img.freepik.com/free-vector/abstract-wave-business-brochure-set-design_1035-12234.jpg?size=626&ext=jpg'} 
            name={'Template Layouts'} />
            <Card src={'https://devops.com/wp-content/uploads/2015/03/continuious_documentation-1280x720.jpg'} 
            name={'Continuous Documentation'} />
        </div>
    )
}


export default Cards
