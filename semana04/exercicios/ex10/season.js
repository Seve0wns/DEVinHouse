function getSeason(month) {
    return seasons.find(season => month <= season.end).season;
}
function season() {
    let input = new Date(document.getElementById("date").value), res;
    input.setDate(input.getDate() + 1);
    if (input.getDate() >= 22) {
        input.setMonth(input.getMonth() + 1);
    }
    res = getSeason(input.getMonth());
    document.getElementById("season").innerText = res;
    document.getElementById("cover").src = res + ".jpg";
}
const seasons = [
    { season: "Verão", end: 2 },
    { season: "Outono", end: 5 },
    { season: "Inverno", end: 8 },
    { season: "Primavera", end: 11 }
]