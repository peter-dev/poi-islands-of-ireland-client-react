export function calculateAverageRating(ratings) {
    let avgRating = -1;
    let totalRatingScore = 0;
    if (ratings.length > 0) {
        for (let r of ratings) {
            totalRatingScore = totalRatingScore + r.score;
        }
        avgRating = (totalRatingScore / ratings.length).toFixed(1);
    }
    return avgRating;
}