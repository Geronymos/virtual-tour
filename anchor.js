// Registering component in foo-component.js
AFRAME.registerComponent('anchor', {
    schema: {
        property: { type: 'string' },
        delay: { type: 'int', default: 0 },
    },
    init: function () {
        const {property, delay} = this.data;
        // this.setProperty(property, 0);
        this.el.setAttribute(property, location.hash);
    },
    update: function () {
        const {property, delay} = this.data;
        window.onhashchange = () => this.setProperty(property, delay);
    },
    setProperty: function (property, delay) {
        this.el.emit("fade");
        window.setTimeout(() => {
            this.el.setAttribute(property, location.hash);
        }, delay)
    },
    tick: function () { },
    remove: function () { },
    pause: function () { },
    play: function () { }
});