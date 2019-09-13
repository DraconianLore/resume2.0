import React, {Component} from 'react';

export default class Contact extends Component {


render() {
return (
  <div className="section">
            <h1 className="contact-cent">Steven Wing</h1>
            <h2 className="contact-cent"><em>Full Stack Web Developer</em></h2>
            <div className="contact-box">
                <div>
                    <h3>
                        <i className="far fa-envelope"> </i>
                        <a href="mailto: Steven.Thomas.Wing@gmail.com">
                            Steven.Thomas.Wing@gmail.com
                        </a>
                    </h3>
                    <h3>
                        <i className="fas fa-mobile-alt"> </i>
                        <a href="tel:+1236-558-3609">
                            236-558-3609
                        </a>
                    </h3>
                    <h3>
                        <i className="fab fa-github"> </i>
                        <a href="https://github.com/DraconianLore">
                            DraconianLore
                        </a>
                    </h3>
                    <h3>
                        <i className="fab fa-linkedin"> </i>
                        <a href="https://www.linkedin.com/in/steven-wing">
                            Steven-Wing
                        </a>
                    </h3>
                </div>
            </div>
        </div>
)
}
}