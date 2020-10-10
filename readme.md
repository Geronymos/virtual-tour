# Open day virtual walk

A web aplication for virtual walks that are suited for open days. View each room in a 360° view and click on doors to move to the next room. 

## Features

- 360° images
- Links to other rooms

## Resources

### In use

- [A-FRAME](https://aframe.io/)
    - [a-link](https://aframe.io/docs/1.0.0/components/link.html)
    - [360° Image Gallery](https://aframe.io/docs/1.0.0/guides/building-a-360-image-gallery.html)
        - [a-sky](https://aframe.io/docs/1.0.0/primitives/a-sky.html)
        - [Asset Management System](https://aframe.io/docs/1.0.0/core/asset-management-system.html)
- [proxy-event](https://github.com/supermedium/superframe/tree/master/components/proxy-event/)
- [event-set](https://github.com/supermedium/superframe/tree/master/components/event-set/)

### Future

- [aframe-gui](https://github.com/rdub80/aframe-gui)
- [HTML Embed Component](https://github.com/supereggbert/aframe-htmlembed-component)

### Not in use anymore

- [layout](https://github.com/supermedium/superframe/tree/master/components/layout/)
- [template](https://github.com/supermedium/superframe/tree/master/components/template/)

## Data Structure

### Independent rooms 

```json
[
    {
        "name": "Chemie",
        "links": [
            "Physik",
            "Musik"
        ]
    },
    {
        "name": "Physik",
        "links": [
            "Chemie"
        ]
    },
    {
        "name": "Musik",
        "links": [
            "Chemie"
        ]
    }
] 
```

### References 

```json
{
    "rooms": [
        {
            "name": "Chemie",
            "img": "bild1.png"
        },
        {
            "name": "Physik",
            "img": "bild2.png"
        },
        {
            "name": "Musik",
            "img": "bild3.png"
        }
    ],
    "links": [
        [
            "Chemie",
            "Physik"
        ],
        [
            "Physik",
            "Musik"
        ]
    ]
}
```