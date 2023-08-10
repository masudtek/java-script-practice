// convert your gems to diamond

function gemsToDiamond(x, y, z) {
  if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
    return "Please Enter a valid number input ";
  } else if (x < 0 || y < 0 || z < 0) {
    return "Please Enter a positive number input";
  } else {
    const friend1 = 21;
    const friend2 = 32;
    const friend3 = 43;
    const total = x * friend1 + y * friend2 + z * friend3;
    if (total > 2000) {
      return total - 2000;
    } else {
      return total;
    }
  }
}

console.log(gemsToDiamond(1, 15, 12));
