// Quantity number change, checking and get total function
function handleQuantityChange(airClass, isIncrease) {
    const airClassInput = document.getElementById(airClass + '-quantity');
    const airClassQuantity = parseFloat(airClassInput.value);
    let airClassNewQuantity = airClassQuantity;
    if (isIncrease == true) {
        airClassNewQuantity = airClassQuantity + 1;
    }
    if (isIncrease == false && airClassQuantity > 0) {
        airClassNewQuantity = airClassQuantity - 1;
    }
    airClassInput.value = airClassNewQuantity;

    let airClassTotal = 0;
    if (airClass == 'first-class') {
        airClassTotal = airClassNewQuantity * 150;
    }
    if (airClass == 'economy') {
        airClassTotal = airClassNewQuantity * 100;
    }
    document.getElementById(airClass + '-total').innerText = airClassTotal;
    calculateTotal ();
    document.getElementById('show-'+ airClass +'-quantity').innerText = airClassNewQuantity;
    document.getElementById('show-'+ airClass +'-total').innerText = airClassTotal;
}

// Calculate subtotal, vat and total function
function calculateTotal () {
    const fistClassQuantity = getQuantityNumber('first-class');

    const economyQuantity = getQuantityNumber('economy');

    const subtotal = fistClassQuantity * 150 + economyQuantity * 100;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('show-subtotal').innerText = subtotal;

    const vat = Math.floor(subtotal * 0.1);
    document.getElementById('vat').innerText = vat;
    document.getElementById('show-vat').innerText = vat;

    const total = subtotal + vat;
    document.getElementById('total').innerText = total;
    document.getElementById('show-total').innerText = total;
}

// Get air class quantity number function 
function getQuantityNumber (airClass) {
    const airClassInput = document.getElementById(airClass + '-quantity');
    const airClassQuantity = parseFloat(airClassInput.value);
    return airClassQuantity;
}

// Book Now Button Event Handler
const bookNowBtn = document.getElementById('book-now');
    bookNowBtn.addEventListener('click', function() {
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';
    const bookingConfirmationArea = document.getElementById('booking-confirmation-area');
    bookingConfirmationArea.style.display = 'block';

    const flyingForm = document.getElementById('flying-form').value;
    document.getElementById('show-flying-from').innerText = flyingForm;

    const flyingTo = document.getElementById('flying-to').value;
    document.getElementById('show-flying-to').innerText = flyingTo;

    const departureDate = document.getElementById('departure-date').value;
    document.getElementById('show-departure').innerText = departureDate;

    const returnDate = document.getElementById('return-date').value;
    document.getElementById('show-return').innerText = returnDate;
})