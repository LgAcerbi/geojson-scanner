const GeoMath = require("../src/helpers/geo-math");

const linestringsMocks = require("./mocks/linestrings");
const pointsMocks = require("./mocks/points");
describe("GeoMath tests", () => {
  describe("find intersection between lines tests", () => {
    test("should return true by founding an insterction beetween lines", () => {
      const line1 = {
        pointA: [
          linestringsMocks.intersectedLineStrings[0].coordinates[0][0],
          linestringsMocks.intersectedLineStrings[0].coordinates[0][1],
        ],
        pointB: [
          linestringsMocks.intersectedLineStrings[0].coordinates[1][0],
          linestringsMocks.intersectedLineStrings[0].coordinates[1][1],
        ],
      };
      const line2 = {
        pointA: [
          linestringsMocks.intersectedLineStrings[1].coordinates[0][0],
          linestringsMocks.intersectedLineStrings[1].coordinates[0][1],
        ],
        pointB: [
          linestringsMocks.intersectedLineStrings[1].coordinates[1][0],
          linestringsMocks.intersectedLineStrings[1].coordinates[1][1],
        ],
      };
      expect(GeoMath.findIntersectionBetweenLines(line1, line2)).toBe(true);
    });

    test("should return false by not founding an insterction beetween lines", () => {
      const line1 = {
        pointA: [
          linestringsMocks.intersectedLineStrings[0].coordinates[0][0],
          linestringsMocks.intersectedLineStrings[0].coordinates[0][1],
        ],
        pointB: [
          linestringsMocks.intersectedLineStrings[0].coordinates[1][0],
          linestringsMocks.intersectedLineStrings[0].coordinates[1][1],
        ],
      };
      const line2 = {
        pointA: [
          linestringsMocks.validLineString.coordinates[0][0],
          linestringsMocks.validLineString.coordinates[0][1],
        ],
        pointB: [
          linestringsMocks.validLineString.coordinates[1][0],
          linestringsMocks.validLineString.coordinates[1][1],
        ],
      };
      expect(GeoMath.findIntersectionBetweenLines(line1, line2)).toBe(false);
    });

    test('should return false by both lines having "0,0" coordinates', () => {
      const line1 = {
        pointA: [0, 0],
        pointB: [0, 0],
      };
      const line2 = {
        pointA: [0, 0],
        pointB: [0, 0],
      };
      expect(GeoMath.findIntersectionBetweenLines(line1, line2)).toBe(false);
    });
  });

  describe("calculate distance between points", () => {
    test("should return return xxx metres", () => {
      const point1 = {
        lat: pointsMocks.validPoints[0].coordinates[1],
        long: pointsMocks.validPoints[0].coordinates[0],
      };
      const point2 = {
        lat: pointsMocks.validPoints[1].coordinates[1],
        long: pointsMocks.validPoints[1].coordinates[0],
      };
      expect(
        Math.trunc(
          GeoMath.calculateDistanceBetweenPointsInMetres(point1, point2)
        )
      ).toBe(655);
    });
  });
});
