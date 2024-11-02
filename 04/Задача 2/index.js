function FahrInCel (Fahr) {
    return Fahr * 1.8 + 32
}

function CelInFahr (Cel) {
    return (Cel - 32) / 1.8
}
console.log(FahrInCel(28))
console.log(CelInFahr(300))
console.log(CelInFahr(82.4))