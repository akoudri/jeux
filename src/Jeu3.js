import React, { Component } from 'react';
import interact from 'interactjs';
import './Jeu3.css';

class Jeu3 extends Component {
    componentDidMount() {
        interact('.resize-drag')
            .draggable({
                onmove: window.dragMoveListener,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent'
                    })
                ]
            })
            .resizable({
                // resize from all edges and corners
                edges: { left: true, right: true, bottom: true, top: true },

                modifiers: [
                    // keep the edges inside the parent
                    interact.modifiers.restrictEdges({
                        outer: 'parent',
                        endOnly: true
                    }),

                    // minimum size
                    interact.modifiers.restrictSize({
                        min: { width: 100, height: 50 }
                    })
                ],

                inertia: true
            })
            .on('resizemove', function (event) {
                var target = event.target
                var x = (parseFloat(target.getAttribute('data-x')) || 0)
                var y = (parseFloat(target.getAttribute('data-y')) || 0)

                // update the element's style
                target.style.width = event.rect.width + 'px'
                target.style.height = event.rect.height + 'px'

                // translate when resizing from top or left edges
                x += event.deltaRect.left
                y += event.deltaRect.top

                target.style.webkitTransform = target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)'

                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
                target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
            })
    }

    render() {
        return (
            <div>
                <h2>Jeu 3</h2>
                <div class="resize-container">
                    <div class="resize-drag">
                        Resize from any edge or corner
                    </div>
                </div>
            </div>
        );
    }
}

export default Jeu3;