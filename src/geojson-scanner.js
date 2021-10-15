const GeoJsonValidations = require('./helpers/geojson-validations')
const GeoMath = require('./helpers/geo-math')

class GeoJsonScanner {
    static isValidPolygon(polygon) {
        try {
            return GeoJsonValidations.isValidPolygon(polygon)
        } catch (error) {
            console.log(error)
            return false
        }
    }
    static isValidCoordinate(coordinate) {
        try {
            return GeoJsonValidations.isValidCoordinate(coordinate)
        } catch (error) {
            console.log(error)
            return false
        }
    }
    static polygonLoop(polygon) {
        GeoJsonValidations.isValidPolygon(polygon)
        const foundLoop = polygon.coordinates[0].some((coordinate, index) => {
            if (polygon.coordinates[0][index + 3] !== undefined) {
                const line1 = {
                    coordA: polygon.coordinates[0][index][0], coordB: polygon.coordinates[0][index][1],
                    coordC: polygon.coordinates[0][index + 1][0], coordD: polygon.coordinates[0][index + 1][1]
                }

                const line2 = {
                    coordA: polygon.coordinates[0][index + 2][0], coordB: polygon.coordinates[0][index + 2][1],
                    coordC: polygon.coordinates[0][index + 3][0], coordD: polygon.coordinates[0][index + 3][1]
                }
                if (GeoMath.findIntersectionBetweenLines(line1, line2)) return true;
            }
        })
        return foundLoop
    }
}

module.exports = GeoJsonScanner

