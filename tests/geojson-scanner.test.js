const GeoJsonScanner = require('../src/geojson-scanner')
const polygonsMock = require('./mocks/polygons')
const coordinatesMock = require('./mocks/coordinates')

describe('GeoJson Scanner tests', () => {
    describe('Scan loop in a polygon tests', () => {
        test('should return true, to a polygon with loop', () => {
            expect(GeoJsonScanner.polygonLoop(polygonsMock.polygonWithLoop)).toBe(true)
        })

        test('should return false, to a polygon without loop', () => {
            expect(GeoJsonScanner.polygonLoop(polygonsMock.polygonWithoutLoop)).toBe(false)
        })
    })

    describe('Validate polygon tests', () => {
        test('should return true to a valid polygon', () => {
            expect(GeoJsonScanner.isValidPolygon(polygonsMock.polygonWithoutLoop)).toBe(true)
        })

        test('should return false to an invalid polygon', () => {
            expect(GeoJsonScanner.isValidPolygon(polygonsMock.polygonWithInvalidCoordinates)).toBe(false)
        })
    })

    describe('Validate coordinate tests', () => {
        test('should return true, to a valid coordinate', () => {
            expect(GeoJsonScanner.isValidCoordinate(coordinatesMock.validCoordinate)).toBe(true)
        })

        test('should return false, to an invalid coordinate', () => {
            expect(GeoJsonScanner.isValidCoordinate(coordinatesMock.invalidLatitudeCoordinate)).toBe(false)
        })
    })
})

