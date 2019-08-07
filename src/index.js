var m = require("mithril")

import Controls from './controls'
import ZoomHandler from './handlers'

export const sceneBase = [
    m("a-entity", {
        position: "0 0 0"
    },
    m("a-camera", { id: "main-camera", zoom: 2 })),
    m("a-box", {
        position: "-1 0.5 -3",
        rotation: "0 45 0",
        color: "#888888",
    }),
    m("a-sphere", {
        position: "0 1.25 -5",
        radius: "1.25",
        color: "#888888",
    }),
    m("a-cylinder", {
        position: "1 0.75 -3",
        radius: "0.5",
        height: "1.5",
        color: "#888888",
    }),
    m("a-plane", {
        position: "0 0 -4",
        rotation: "-90 0 0",
        width: "4",
        height: "4",
        color: "#ff69b4",
    }),
    m("a-sky", {
        color: "#ECECEC",
    })
]

const FullScene = {
    view: function() {
        return (
            <div>
                {m("a-scene", sceneBase.concat(Controls))}
            </div>
        )
    }
}

m.mount(document.body, FullScene)

const zoom = new ZoomHandler('0.1');
zoom.init();