import React from 'react'

function Home(){
    return(
        <div>
            <br />
            <div className="jumbotron">
                <h1 className="display-4">Welcome!</h1>
                <h4 className="lead">Hi, Thanks for visiting the site</h4>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
    )
}

export default Home