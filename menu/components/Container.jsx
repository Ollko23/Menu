import React from 'react'

function Container({ title, children, id }) {
    return (
        <>
            <div className="container" id={id}>
                <h3>{title}: </h3>
                {children}
            </div>
        </>
    )
}

export default Container