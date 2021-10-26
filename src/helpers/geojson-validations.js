class GeoJsonValidations {
  static isValidPolygon(polygon) {
    if (!polygon) {
      throw new Error("A GeoJson Polygon must be passed to the method.");
    }
    if (Object.getPrototypeOf(polygon) !== Object.prototype) {
      throw new Error(
        'A GeoJson Polygon must be a Object with properties "type" and "coordinates".'
      );
    }
    if (polygon.type !== "Polygon") {
      throw new Error(
        'A GeoJson Polygon must have "type" property with "Polygon" value.'
      );
    }
    if (!polygon.coordinates.length || polygon.coordinates.length !== 1) {
      throw new Error(
        'A GeoJson Polygon "coordinates" property must be an Array with one Array of coordinates inside.'
      );
    }
    if (!polygon.coordinates[0].length || polygon.coordinates[0].length <= 3) {
      throw new Error(
        'A GeoJson Coordinates inside the Polygon "coordinates" property must be an Array with at least four coordinates.'
      );
    }

    polygon.coordinates[0].forEach((coordinate) => {
      GeoJsonValidations.isValidCoordinate(coordinate);
    });

    return true;
  }

  static isValidPoint(point) {
    if (!point) {
      throw new Error("A GeoJson Point must be passed to the method.");
    }
    if (Object.getPrototypeOf(point) !== Object.prototype) {
      throw new Error(
        'A GeoJson Point must be a Object with properties "type" and "coordinates".'
      );
    }
    if (point.type !== "Point") {
      throw new Error(
        'A GeoJson Point must have "type" property with "Point" value.'
      );
    }
    GeoJsonValidations.isValidCoordinate(point.coordinates);

    return true;
  }

  static isValidCoordinate(coordinate) {
    if (!coordinate) {
      throw new Error("A GeoJson Coordinate must be passed to the method.");
    }
    if (
      !coordinate.length ||
      (coordinate.length !== 2 && coordinate.length !== 3)
    ) {
      throw new Error(
        "A GeoJson Coordinate must be an Array with two values for longitude and latitude respectively"
      );
    }
    if (isNaN(coordinate[0]) || isNaN(coordinate[1])) {
      throw new Error(
        "Longitude and latitude of a GeoJson Coordinate must be of type Number."
      );
    }
    if (!(coordinate[0] >= -180 && coordinate[0] <= 180)) {
      throw new Error(
        "Longitude of a GeoJson Coordinate must have values between -180 and 180."
      );
    }
    if (!(coordinate[1] >= -90 && coordinate[1] <= 90)) {
      throw new Error(
        "Latitude of a GeoJson Coordinate must have values between -90 and 90."
      );
    }

    return true;
  }
}

module.exports = GeoJsonValidations;
