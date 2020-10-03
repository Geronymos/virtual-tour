// Registering component in foo-component.js
AFRAME.registerComponent('portal', {
    schema: {
        domain: { type: 'selector', default: '#image-360' },
        from: { type: 'asset', default: '#' },
        to: { type: 'asset', default: '#' },
        title: { type: 'string', default: '#' }
    },
    init: function () {
        console.log(this);
        this.link = document.createElement("a-link");
        this.link.className = 'link';
        this.el.append(this.link);
    },

    update: function () {
        this.link.setAttribute('link', {
            title: this.data.title,
            href: `#${this.data.to}`,
            image: this.data.to
        });
    },
    tick: function () {
        const domain_image = this.data.domain.components.material.data.src;
        const is_from_in_scene = this.data.from == domain_image;
        const is_to_in_scene = this.data.to == domain_image;
        const is_in_scene = is_from_in_scene || is_to_in_scene;

        // console.log(domain_image, this.data.from)

        this.el.object3D.visible = is_in_scene;

        this.link.setAttribute('link', {
            title: this.data.title,
            href: `#${is_to_in_scene ? this.data.from.id : this.data.to.id}`,
            image: is_to_in_scene ? this.data.from : this.data.to
        });
     },
    remove: function () { },
    pause: function () { },
    play: function () { }
});