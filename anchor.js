// Registering component in foo-component.js
AFRAME.registerComponent('anchor', {
    schema: {
        property: { type: 'string' }
    },
    init: function () {

    },
    update: function () {
        window.onhashchange = () => {
            this.el.setAttribute(this.data.property, location.hash)
        }
    },
    tick: function () { },
    remove: function () { },
    pause: function () { },
    play: function () { }
});