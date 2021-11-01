class GeoMath {
  static findIntersectionBetweenLines(line1, line2) {
    const det =
      (line1.pointB[0] - line1.pointA[0]) *
        (line2.pointB[1] - line2.pointA[1]) -
      (line2.pointB[0] - line2.pointA[0]) * (line1.pointB[1] - line1.pointA[1]);
    if (det === 0) {
      return false;
    } else {
      const lambda =
        ((line2.pointB[1] - line2.pointA[1]) *
          (line2.pointB[0] - line1.pointA[0]) +
          (line2.pointA[0] - line2.pointB[0]) *
            (line2.pointB[1] - line1.pointA[1])) /
        det;
      const gamma =
        ((line1.pointA[1] - line1.pointB[1]) *
          (line2.pointB[0] - line1.pointA[0]) +
          (line1.pointB[0] - line1.pointA[0]) *
            (line2.pointB[1] - line1.pointA[1])) /
        det;
      return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
    }
  }

  static calculateDistanceBetweenPointsInMetres(point1, point2) {
    const earthRadiusInMetres = 6371e3;
    const point1LatInRadians = (point1.lat * Math.PI) / 180;
    const point2LatInRadians = (point2.lat * Math.PI) / 180;
    const latDeltaInRadians =
      ((point2LatInRadians - point1LatInRadians) * Math.PI) / 180;
    const longDeltaInRadians = ((point2.long - point1.long) * Math.PI) / 180;

    const a =
      Math.sin(latDeltaInRadians / 2) * Math.sin(latDeltaInRadians / 2) +
      Math.cos(point1LatInRadians) *
        Math.cos(point2LatInRadians) *
        Math.sin(longDeltaInRadians / 2) *
        Math.sin(longDeltaInRadians / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusInMetres * c;
  }
}

module.exports = GeoMath;
