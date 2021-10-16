const GeoJsonValidations = require('../src/helpers/geojson-validations')
const polygonsMock = require('./mocks/polygons')
const featuresMock = require('./mocks/features')
const coordinatesMock = require('./mocks/coordinates')
const pointsMock = require('./mocks/points')

describe('GeoJson Validations tests', () => {
    describe('Coordinate validations tests', () => {
        test('should return true to a valid Coordinate', () => {
            expect(GeoJsonValidations.isValidCoordinate(coordinatesMock.validCoordinate)).toBe(true)
        })
        test('should throw error by invalid longitude', () => {
            expect(() => GeoJsonValidations.isValidCoordinate(coordinatesMock.invalidLongitudeCoordinate)).toThrow('Longitude of a GeoJson Coordinate must have values between -180 and 180.')
        })
        test('should throw error by invalid latitude', () => {
            expect(() => GeoJsonValidations.isValidCoordinate(coordinatesMock.invalidLatitudeCoordinate)).toThrow('Latitude of a GeoJson Coordinate must have values between -90 and 90.')
        })
        test('should throw error by invalid latitude/longitude values type', () => {
            expect(() => GeoJsonValidations.isValidCoordinate(coordinatesMock.invalidCoordinateByValuesTypes)).toThrow('Longitude and latitude of a GeoJson Coordinate must be of type Number.')
        })
        test('should throw error by empty Coordinate', () => {
            expect(() => GeoJsonValidations.isValidCoordinate()).toThrow('A GeoJson Coordinate must be passed to the method.')
        })
        test('should throw error by invalid values quantity in Coordinate array', () => {
            expect(() => GeoJsonValidations.isValidCoordinate({})).toThrow('A GeoJson Coordinate must be an Array with two values for longitude and latitude respectively')
            expect(() => GeoJsonValidations.isValidCoordinate([1, 1, 1, 1, 1])).toThrow('A GeoJson Coordinate must be an Array with two values for longitude and latitude respectively')
            expect(() => GeoJsonValidations.isValidCoordinate([5])).toThrow('A GeoJson Coordinate must be an Array with two values for longitude and latitude respectively')
        })
    })
    describe('Polygon validations tests', () => {
        test('should return true to a valid Polygon', () => {
            expect(GeoJsonValidations.isValidPolygon(polygonsMock.polygonWithoutLoop)).toBe(true)
        })

        test('should throw error by empty Polygon', () => {
            expect(() => GeoJsonValidations.isValidPolygon()).toThrow('A GeoJson Polygon must be passed to the method.')
        })

        test('should throw error by Polygon not being a Object', () => {
            expect(() => GeoJsonValidations.isValidPolygon([])).toThrow('A GeoJson Polygon must be a Object with properties \"type\" and \"coordinates\".')
        })

        test('should throw error by Polygon doesn\'t having "type" property with value "Polygon"', () => {
            expect(() => GeoJsonValidations.isValidPolygon(featuresMock.validFeature)).toThrow('A GeoJson Polygon must have \"type\" property with \"Polygon\" value.')
        })

        test('should throw error by invalid Polygon "coordinates" property', () => {
            expect(() => GeoJsonValidations.isValidPolygon(polygonsMock.polygonWithInvalidCoordinates)).toThrow('A GeoJson Polygon \"coordinates\" property must be an Array with one Array of coordinates inside.')
        })

        test('should throw error by invalid count of Coordinates inside the Polygon "coordinates" property', () => {
            expect(() => GeoJsonValidations.isValidPolygon(polygonsMock.polygonWithInvalidCoordinatesQuantity)).toThrow('A GeoJson Coordinates inside the Polygon \"coordinates\" property must be an Array with at least three coordinates.')
        })
    })
    describe('Point validations tests', () => {
        test('should return true to a valid Point', () => {
            expect(GeoJsonValidations.isValidPoint(pointsMock.validPoints[0])).toBe(true)
        })

        test('should throw error by empty Point', () => {
            expect(() => GeoJsonValidations.isValidPoint()).toThrow('A GeoJson Point must be passed to the method.')
        })

        test('should throw error by Point not being a Object', () => {
            expect(() => GeoJsonValidations.isValidPoint([])).toThrow('A GeoJson Point must be a Object with properties \"type\" and \"coordinates\".')
        })

        test('should throw error by Point doesn\'t having "type" property with value "Point"', () => {
            expect(() => GeoJsonValidations.isValidPoint(featuresMock.validFeature)).toThrow('A GeoJson Point must have \"type\" property with \"Point\" value.')
        })

        test('should throw error by invalid Point "coordinates" property', () => {
            expect(() => GeoJsonValidations.isValidPoint(pointsMock.pointWithInvalidCoordinates)).toThrow('Longitude of a GeoJson Coordinate must have values between -180 and 180.')
        })
    })
})

