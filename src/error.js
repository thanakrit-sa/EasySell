import React, { Component } from 'react'

export default class error extends Component {
    render() {
        return (
            <>
                <div class="d-flex flex-column flex-root">
                    <div class="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30" style={{backgroundImage: `url(assets/media/error/bg1.jpg)`}}>
                        <h1 class="font-weight-boldest text-dark-75 mt-15" style={{fontSize: `10rem`}}>404</h1>
                        <p class="font-size-h3 text-muted font-weight-normal">OOPS! Something went wrong here</p>
                    </div>
                </div>
            </>
        )
    }
}
