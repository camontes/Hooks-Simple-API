import React from 'react'
import {useResources} from '../components/useResources'

const ResourceList = ({resource}) =>{

    const resources = useResources(resource);

    return(
        <div>
            <h1>{resource}</h1>
           <ul>
               {resources.map(record => (
                   <li key = {record.id}>
                       {record.title}
                   </li>
               ))}
           </ul>
        </div>
    )
}

export default ResourceList;