const moviesList = [
    {movieName: "Flash", price: 7},
    {movieName: "Spiderman", price: 5},
    {movieName: "Batman", price: 4},
];
// const comedyList = [
//     {artist: "Tanmay", price: 8, time: 2},
//     {artist: "Varun", price: 10, time: 1.5},
//     {artist: "Kunal", price: 7, time: 1},
// ]
// just for practice
// const selectArtist = document.getElementById("selectArtist");
// comedyList.forEach(comedy => {
//     const options = document.createElement('option');
//     options.value = comedy.price;
//     options.textContent = comedy.time;
//     options.text = comedy.artist;
//     selectArtist.appendChild(options);
// })

// updating the dropdown menu
const selectMovie = document.getElementById("selectMovie");
moviesList.forEach(movie => {
    const option = document.createElement('option');
    option.value = movie.price;
    option.textContent = movie.movieName;
    selectMovie.appendChild(option);
});

const movieName=document.getElementById("movieName");
const moviePrice=document.getElementById("moviePrice");
const totalPrice=document.getElementById("totalPrice");

let currentPrice=7; //Default movie price of Default movie;
let selectedSeats=[];

function updateMovieDetails(){
    movieName.textContent = selectMovie.options[selectMovie.selectedIndex].text;
    currentPrice=parseInt(selectMovie.value);
    moviePrice.textContent=`$ ${currentPrice}`;
    updateTotalPrice();
}

selectMovie.addEventListener('change',updateMovieDetails);

// handle seat selection
const seats=document.querySelectorAll("#seatCont .seat:not(.occupied)");
seats.forEach((seat,index)=>{
    seat.addEventListener('click',()=>{
        if (seat.classList.contains("selected")){
            seat.classList.remove("selected");
            selectedSeats=selectedSeats.filter(s=>s!==index);
        }else {
            seat.classList.add("selected");
            selectedSeats.push(index);
        }
        updateTotalPrice();
        updateSelectedSeatsHolder();
    });
});

function updateTotalPrice(){
    const total=selectedSeats.length*currentPrice;
    totalPrice.textContent=`$ ${total}`;
}

function updateSelectedSeatsHolder(){
    const selectedSeatsHolder=document.getElementById("selectedSeatsHolder");
    const numberOfSeat=document.getElementById("numberOfSeat");
    selectedSeatsHolder.innerHTML='';
    if (selectedSeats.length===0){
        selectedSeatsHolder.textContent="No Seat Selected";
        numberOfSeat.textContent=0;
    }else {
        selectedSeats.forEach(seatIndex =>{
            const seatSpan=document.createElement("span");
            seatSpan.textContent=`Seat ${seatIndex +1}`;
            selectedSeatsHolder.appendChild(seatSpan);
        });
        numberOfSeat.textContent=selectedSeats.length;
    }
}

// handle continue button
const proceedBtn = document.getElementById("proceedBtn");
proceedBtn.addEventListener("click", () => {
    if (selectedSeats.length === 0) {
        alert("Oops no seat Selected");
    } else {
        alert("Yayy! Your Seats have been booked");
        selectedSeats.forEach(index => {
            seats[index].classList.remove("selected");
            seats[index].classList.add("occupied");
        });
        resetSelection();
    }
});

// Handle cancel button
const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener("click", () => {
    selectedSeats.forEach(index => {
        seats[index].classList.remove("selected");
    });
    resetSelection();
});

function resetSelection() {
    selectedSeats = [];
    updateTotalPrice();
    updateSelectedSeatsHolder();
}