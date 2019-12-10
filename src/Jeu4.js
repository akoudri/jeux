import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import cheval from './images/cheval.jpg';
import singe from './images/singe.jpg';
import serpent from './images/serpent.jpg';

import './Jeu4.css';

class Jeu4 extends Component {
    render() {
        return (
            <div class="toto">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={cheval}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={singe}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={serpent}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Jeu4;