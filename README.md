# ZBSTrain

## Trains

``` json
{
    "numTrain": "string",
    "villeDepart": "string",
    "villeArrivee": "string",
    "heureDepart": "Date"
}
```

`/api/trains` :

- GET
- POST

`/api/trains/:numTrain` :

- GET
- PUT
- DELETE

## Réservations

``` json
{
    "numReservation": "string",
    "username": "string",
    "currentTrain": "string", // référence vers Train.numTrain
    "numberPlaces": "int"
}
```

`/api/reservations` :

- GET
- POST

`/api/reservations/:numReservation` :

- GET
- PUT
- DELETE
