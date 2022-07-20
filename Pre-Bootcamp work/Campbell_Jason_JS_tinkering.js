var childHeight = 50;

function displayIfChildIsAbleToRideRollerCoaster() {
    if(childHeight > 52) {
        console.log("Get on that ride, kiddo!");
    } else {
        console.log("Sorry kiddo. Maybe next year.");
    }
}
displayIfChildIsAbleToRideRollerCoaster(childHeight);
