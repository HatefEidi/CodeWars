function totalCarpetCircumference(innerRadius, layers, thickness) {
    let totalCircumference = 0;

    for (let i = 0; i < layers; i++) {
        let currentRadius = innerRadius + (i * thickness);
        totalCircumference += 2 * Math.PI * currentRadius;
    }

    return totalCircumference;
}

// Given values
const outerRadius = 12;  // cm
const innerRadius = 5.5; // cm
const layers = 9;
const thickness = 0.8;  // cm

const result = totalCarpetCircumference(innerRadius, layers, thickness);
console.log("Total sum of circumferences:", result.toFixed(2), "cm");
