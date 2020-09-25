// Registering component in foo-component.js
AFRAME.registerComponent('portal', {
    schema: {
        from: { type: 'string', default: '#' },
        to: { type: 'asset', default: '#' },
        title: { type: 'string', default: '#' }
    },
    init: function () {
        const link = document.createElement("a-link");
        console.log(this);
        link.setAttribute('link',{
            title: this.data.title,
            href: `#${this.data.to.id}`,
            image: this.data.to
        });
        this.el.append(link);
     },
    update: function () { 
    },
    tick: function () { },
    remove: function () { },
    pause: function () { },
    play: function () { }
});