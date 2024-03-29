import React, { Component } from 'react';
import interact from 'interactjs';
import './Jeu1.css';
import cheval from './images/cheval.jpg';

class Jeu1 extends Component {

    dragMoveListener(event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    componentDidMount() {
        interact('.draggable')
            .draggable({
                // enable inertial throwing
                inertia: true,
                // keep the element within the area of it's parent
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                // enable autoScroll
                autoScroll: true,

                // call this function on every dragmove event
                onmove: this.dragMoveListener,
                // call this function on every dragend event
                onend: function (event) {
                    var textEl = event.target.querySelector('p')

                    textEl && (textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                            .toFixed(2) + 'px')
                }
            })
        window.dragMoveListener = this.dragMoveListener
    }

    render() {
        return (
            <div>
                <h2>Jeu 1</h2>
                <div id="drag-1" class="draggable">
                    <p> You can drag one element </p>
                </div>
                <img src={cheval} alt="Logo" id="drag-2" class="draggable"/>      
            </div>
        );
    }
}

export default Jeu1;