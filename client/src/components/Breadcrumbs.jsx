import React, {Component} from 'react';

class Breadcrumbs extends Component {
    render() {
        return (
            <section className="breadcrumbs">
                <div className="container">

                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>About</li>
                    </ol>
                    <h2>About</h2>

                </div>
            </section>
        );
    }
}

export default Breadcrumbs;