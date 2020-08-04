document.addEventListener('DOMContentLoaded', () => {

  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZ2VtdHoiLCJhIjoiY2p4bTJjcmdpMGNnZDNubXUya2hrMWh6cCJ9.75ax8N9lxMUC9r_dZsPOEg';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-99.1653181, 19.4212802],
    zoom: 14
  })


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const center = [position.coords.longitude, position.coords.latitude]
        const puntito = new mapboxgl.Marker({
            draggable: true,
            color: 'red'
          })
          .setLngLat(center)
          .addTo(map)
      },
      () => console.log('Error in the geolocation service.'))
  } else {
    console.log('Browser does not support geolocation.')
  }
}, false)