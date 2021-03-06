import React from 'react'

function AppContainer(props) {
    const {children}=props

    return (
        <div className="container-fluid" style={{marginTop:30}}>
            {children}
        </div>
    )
}

export default AppContainer
