// Registering component in foo-component.js
AFRAME.registerComponent('portal', {
    schema: {
        domain: { type: 'selector', default: '#image-360' },
        startEvent: { type: 'string' },
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
        this.el.addEventListener(this.data.startEvent, () => this.changePortal());
        this.changePortal();
    },
    changePortal: function () {
        console.log("hashchange", this);
        // const domain_image = this.data.domain.components.material.data.src;
        const domain_image = this.data.domain.components.anchor.image.split("#")[1];
        const is_from_in_scene = this.data.from.id == domain_image;
        const is_to_in_scene = this.data.to.id == domain_image;
        const is_in_scene = is_from_in_scene || is_to_in_scene;

        this.el.object3D.visible = is_in_scene;
        this.link.className = is_in_scene ? "link": "";

        this.link.setAttribute('link', {
            title: this.data.title,
            href: `#${is_to_in_scene ? this.data.from.id : this.data.to.id}`,
            image: is_to_in_scene ? this.data.from : this.data.to
        });
    },
    tick: function () { },
    remove: function () { },
    pause: function () { },
    play: function () { }
});