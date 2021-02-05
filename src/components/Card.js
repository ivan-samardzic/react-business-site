import React from 'react'

const Card = (props) =>{
    return (
        <div className="card">
            <img src={props.src} className="card-image" />
            <div className="card-details">
                <h3 className="card-name">{props.name}</h3>
                <p className="card-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a ultrices lacus. 
                Maecenas posuere consectetur rutrum. Nunc sit amet tempus urna. Vivamus pulvinar elit et luctus fringilla. 
                Cras tincidunt nunc ut mi iaculis auctor.   </p>
            </div>
        </div>
    )
}

export default Card
