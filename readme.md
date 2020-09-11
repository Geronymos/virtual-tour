# Open day virtual walk

A web aplication for virtual walks that are suited for open days. View each room in a 360° view and click on doors to move to the next room. 

## Features

- 360° images
- Links to other rooms

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