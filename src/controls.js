import m from "mithril"
import { sceneBase } from './index'

function handleAddSquare(event) {
    sceneBase.push(m("a-box", {
        position: "-1 3 -3",
        rotation: "0 45 0",
        color: "#4CC3D9",
    }))
}

function changeCamera(event) {
    var secondCameraEl = document.querySelector('#main-camera');
    secondCameraEl.setAttribute('camera', 'active', true);
}

function ButtonsContainer() {
    return {
        view: () => (
            <div class="buttons-container">
                {m("button", { class: "btn export", onclick: handleAddSquare}, "Add square primitive")}
                {m("button", { class: "btn change", onclick: changeCamera}, "Change cam")}
            </div>
        )
    }
}

const Controls = [
    <ButtonsContainer/>
]

export default Controls