const GeoMath = require('../src/helpers/geo-math')

const linestringsMocks = require('./mocks/linestrings')
const pointsMocks = require('./mocks/points')
describe('GeoMath tests', () => {
    describe('find intersection between lines tests', () => {
        test('should return true by founding an insterction beetween lines', () => {
            const line1 = {
                coordA: linestringsMocks.intersectedLineStrings[0].coordinates[0][0],
                coordB: linestringsMocks.intersectedLineStrings[0].coordinates[0][1],
                coordC: linestringsMocks.intersectedLineStrings[0].coordinates[1][0],
                coordD: linestringsMocks.intersectedLineStrings[0].coordinates[1][1]
            }
            const line2 = {
                coordA: linestringsMocks.intersectedLineStrings[1].coordinates[0][0],
                coordB: linestringsMocks.intersectedLineStrings[1].coordinates[0][1],
                coordC: linestringsMocks.intersectedLineStrings[1].coordinates[1][0],
                coordD: linestringsMocks.intersectedLineStrings[1].coordinates[1][1]
            }
            expect(GeoMath.findIntersectionBetweenLines(line1, line2)).toBe(true)
        })

        test('should return false by not founding an insterction beetween lines', () => {
            const line1 = {
                coordA: linestringsMocks.intersectedLineStrings[0].coordinates[0][0],
                coordB: linestringsMocks.intersectedLineStrings[0].coordinates[0][1],
                coordC: linestringsMocks.intersectedLineStrings[0].coordinates[1][0],
                coordD: linestringsMocks.intersectedLineStrings[0].coordinates[1][1]
            }
            const line2 = {
                coordA: linestringsMocks.validLineString.coordinates[0][0],
                coordB: linestringsMocks.validLineString.coordinates[0][1],
                coordC: linestringsMocks.validLineString.coordinates[1][0],
                coordD: linestringsMocks.validLineString.coordinates[1][1]
            }
            expect(GeoMath.findIntersectionBetweenLines(line1, line2)).toBe(false)
        })

        test('should return false by both lines having "0,0" coordinates', () => {
            const line1 = {
                coordA: 0,
                coordB: 0,
                coordC: 0,
                coordD: 0
            }
            const line2 = {
                coordA: 0,
                coordB: 0,
                coordC: 0,
                coordD: 0
            }
            expect(GeoMath.findIntersectionBetweenLines(line1, line2)).toBe(false)
        })
    })

    describe('calculate distance between points', () => {
        test('should return return xxx metres', () => {
            const point1 = {
                lat: pointsMocks.validPoints[0].coordinates[1],
                long: pointsMocks.validPoints[0].coordinates[0]
            }
            const point2 = {
                lat: pointsMocks.validPoints[1].coordinates[1],
                long: pointsMocks.validPoints[1].coordinates[0]
            }
            expect(Math.trunc(GeoMath.calculateDistanceBetweenPointsInMetres(point1, point2))).toBe(655)
        })
    })
})