export default (function() {

    let zoomLevel = 1;
    
    function Zoom(zoomSensitivity = 0.1) {
        this.zoomSensitivity = zoomSensitivity;
    }

    Zoom.prototype.init = function() {
        document.addEventListener('wheel', function(event) {   
            const camera = document.getElementById('main-camera');

            if (event.deltaY < 0 ) {
                camera.setAttribute('zoom', zoomLevel+=0.1);
            }

            if (event.deltaY > 0 && zoomLevel >= 0.2) {
                camera.setAttribute('zoom', zoomLevel-=0.1);
                
            }
        })
    }

    return Zoom;
})()