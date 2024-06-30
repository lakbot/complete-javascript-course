/*
The challenge 3 is mentioned separately here because in udemy, the bonus questions were not there inside the code IDE part
*/


// const scoreDolphins= (96 + 108 + 89)/3;
// const scoreKoalas = (88 + 91 + 110)/3;

// if (scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas){
//     console.log("Koalas win the trophy");
// } else{
//     console.log("Both win the trophy");
// }

const MIN_SCORE = 100;

// BONUS
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= MIN_SCORE) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= MIN_SCORE) {
    console.log("Koalas win the trophy");
}
else if (scoreKoalas === scoreDolphins && scoreKoalas >= MIN_SCORE && scoreDolphins >= MIN_SCORE) {
    console.log("It's a draw");
} else {
    console.log('No team wins')
}