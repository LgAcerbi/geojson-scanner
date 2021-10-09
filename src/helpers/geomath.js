function checkIntersectionBetweenLines(line1,line2) {
    let det, gamma, lambda;
    det = (line1.coordC - line1.coordA) * (line2.coordD - line2.coordB) - (line2.coordC - line2.coordA) * (line1.coordD - line1.coordB);
    if (det === 0) {
      return false;
    } else {
      lambda = ((line2.coordD - line2.coordB) * (line2.coordC - line1.coordA) + (line2.coordA - line2.coordC) * (line2.coordD - line1.coordB)) / det;
      gamma = ((line1.coordB - line1.coordD) * (line2.coordC- line1.coordA) + (line1.coordC - line1.coordA) * (line2.coordD - line1.coordB)) / det;
      return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
}

module.exports = { checkIntersectionBetweenLines }
