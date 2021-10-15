const GeoJsonScanner = require('../src/geojson-scanner')
const polygonsMock = require('./mocks/polygons')

describe('GeoJson Scanner tests', () => {
    describe('Scan loop in a polygon tests', () => {
        test('should return true, to a polygon with loop', () => {
            expect(GeoJsonScanner.polygonLoop(polygonsMock.polygonWithLoop)).toBe(true)
        })

        test('should return false, to a polygon without loop', () => {
            expect(GeoJsonScanner.polygonLoop(polygonsMock.polygonWithoutLoop)).toBe(false)
        })
    })
})

