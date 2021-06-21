import React from 'react'

const WFHeaderSectionPost = ({ Header }) => {
    const {
        title,path
    } = Header.fields
    return (
        <li className="nav-item">
            <a className="nav-link" href={path}>
                {title}
            </a>
        </li>
    )

}
export default WFHeaderSectionPost