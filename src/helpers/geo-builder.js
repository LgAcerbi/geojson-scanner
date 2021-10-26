class GeoBuilder {
  static createLinesFromCoordinates(coordinates) {
    const lines = coordinates.map((coordinate, index) => {
      const pointA = coordinate;
      const pointB = coordinates[index + 1] || coordinates[0];

      return { pointA, pointB };
    });

    lines.pop();
    return lines;
  }
}
module.exports = GeoBuilder;
