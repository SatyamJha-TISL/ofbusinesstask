import React from 'react'

export const Label = ({ name, color }) => {


    return (
        <span style={{ backgroundColor: `#${color}`, color: `${color === "b60205" ? "#fff" : ""}` }} className={` issue-status`}>{name}</span>
    )
}
