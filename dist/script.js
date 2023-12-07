const url = `https://maps.google.com/maps?q=ADDRESS&t=&z=13&ie=UTF8&iwloc=&output=embed`;
const addressInput = document.getElementById('address');
const gmapIframe = document.getElementById('gmapIframe');
const searchButton = document.getElementById('searchButton');

function mapUrl(address) {
    return url.replace('ADDRESS', address);
}

function setAddress(address) {
    if (!address || address.trim().length < 1) {
        return;
    }
    gmapIframe.setAttribute('src', mapUrl(address));
}

function setEventListeners() {    
    searchButton.addEventListener('click', (e) => { setAddress(addressInput.value) });
}

function startup() {
    setAddress('Denton, Texas');
    setEventListeners();
}

startup();