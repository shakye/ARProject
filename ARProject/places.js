
window.onload = () => {
    let method;
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';
    let div = document.querySelector('.instructions');
    div.innerText = "hello";


    // if you want to statically add places, de-comment following line:
    method = 'static';
    if (method === 'static') {
        let places = staticLoadPlaces();
        return renderPlaces(places);
    }

};

function staticLoadPlaces() {
    return [
        {
            name: "Nice Place",
            location: {
                lat: 6.839720, // change here latitude if using static data
                lng: 79.991620, // change here longitude if using static data
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;


        // add place name
        const model = document.createElement('a-entity');

        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/arrow/scene.gltf');
        model.setAttribute('animation', 'property: rotation; dur: 3000; easing: linear; loop: true; from:0 0 0; to: 0 360 0;');
        model.setAttribute('scale', '5 5 5');

        alert(place.name);

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
document.querySelector('a-entity').addEventListener('click', function (evt) {
    let div = document.querySelector('.instructions');
    div.innerText = "place.name";
});