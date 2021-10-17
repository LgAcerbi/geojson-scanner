# Geojson-Scanner
Library that has utilities to examine and extract info of the GeoJson structures, such as Polygon, Point, LineString and many others.

#
## Getting Started

Install GeoJson-Scanner with [npm](https://www.npmjs.com/package/geojson-scanner):

```shell
npm i geojson-scanner
```

Import GeoJson-Scanner in your file:
```javascript
const GeoJsonScanner = require('geojson-scanner')
```

Then you have access to all methods, let's validate if this object is a valid GeoJson Polygon
```javascript
const GeoJsonScanner = require('geojson-scanner')

const polygon = {
    type: "Polygon",
    coordinates: [
        [
            [
              -43.06640625,
              44.213709909702054
            ],
            [
              -49.92187499999999,
              37.16031654673677
            ],
            [
              -31.81640625,
              38.41055825094609
            ],
            [
              -43.06640625,
              44.213709909702054
            ]
          ]
        ]
    }

console.log(GeoJsonScanner.isValidPolygon(polygon)) // Logs true

```

