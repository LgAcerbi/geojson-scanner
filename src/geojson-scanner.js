const GeoMath = require("./helpers/geo-math");
const GeoBuilder = require("./helpers/geo-builder");
const GeoJsonValidations = require("./helpers/geojson-validations");

class GeoJsonScanner {
  static isValidPolygon(polygon) {
    try {
      return GeoJsonValidations.isValidPolygon(polygon);
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
  static isValidCoordinate(coordinate) {
    try {
      return GeoJsonValidations.isValidCoordinate(coordinate);
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
  static polygonLoop(polygon) {
    GeoJsonValidations.isValidPolygon(polygon);

    const coordinates = polygon.coordinates[0];

    if (coordinates.length > 4) {
      const lines = GeoBuilder.createLinesFromCoordinates(coordinates);
      return lines.reduce((prev, line) => {
        return lines.some(
          (otherLine) =>
            GeoMath.findIntersectionBetweenLines(line, otherLine) || prev
        );
      }, false);
    }

    return false;
  }

  static calculateDistanceBetweenPoints(point1, point2) {
    GeoJsonValidations.isValidPoint(point1);
    GeoJsonValidations.isValidPoint(point2);

    const parsedPoint1 = {
      lat: point1.coordinates[1],
      long: point1.coordinates[0],
    };
    const parsedPoint2 = {
      lat: point2.coordinates[1],
      long: point2.coordinates[0],
    };

    return GeoMath.calculateDistanceBetweenPointsInMetres(
      parsedPoint1,
      parsedPoint2
    );
  }
}

module.exports = GeoJsonScanner;
