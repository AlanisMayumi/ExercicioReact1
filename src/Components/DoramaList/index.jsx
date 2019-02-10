import React from 'react';
import './index.css'

const ItemList= ({ dorama }) => (
    <li>
        {dorama.show.name}
    </li>
)
const DoramaList = (props) => {
    return(
        <div>
            <ul className="dorama-list">
                {props.list.map(dorama => (
                    <ItemList dorama={dorama} key={dorama.show.id}/>
                ))}
            </ul>
        </div>
    )
}
export default DoramaList;