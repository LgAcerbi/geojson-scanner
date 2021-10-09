const GeoJsonScanner = require('../src/geojson-scanner')
const { polygonWithLoop, polygonWithoutLoop } = require('./mocks/polygons')

describe('GeoJson Scanner tests', () => {
    describe('Scann loop in a polygon tests', () => {
        test('should return true, to a polygon with loop', () => {
            expect(GeoJsonScanner.geometryLoop(polygonWithLoop)).toBe(true)
        })

        test('should return false, to a polygon without loop', () => {
            expect(GeoJsonScanner.geometryLoop(polygonWithoutLoop)).toBe(false)
        })
    })
})

