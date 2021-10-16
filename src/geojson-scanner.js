const GeoJsonValidations = require('./helpers/geojson-validations')
const GeoMath = require('./helpers/geo-math')

class GeoJsonScanner {
    static isValidPolygon(polygon) {
        try {
            return GeoJsonValidations.isValidPolygon(polygon)
        } catch (error) {
            console.log(error.message)
            return false
        }
    }
    static isValidCoordinate(coordinate) {
        try {
            return GeoJsonValidations.isValidCoordinate(coordinate)
        } catch (error) {
            console.log(error.message)
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
    static calculateDistanceBetweenPoints(point1, point2) {
        GeoJsonValidations.isValidPoint(point1)
        GeoJsonValidations.isValidPoint(point2)

        const parsedPoint1 = {
            lat: point1.coordinates[1],
            long: point1.coordinates[0]
        }
        const parsedPoint2 = {
            lat: point2.coordinates[1],
            long: point2.coordinates[0]
        }

        return GeoMath.calculateDistanceBetweenPointsInMetres(parsedPoint1, parsedPoint2)
    }
}

module.exports = GeoJsonScanner

