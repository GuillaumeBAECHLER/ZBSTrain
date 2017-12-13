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
    "currentTrain": "string", // => Train.numTrain
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

## Clients

- Back-Office : Gestion des trains : https://github.com/GuillaumeBAECHLER/ZBSTrain
- Consultation des trains et réservation des places : https://github.com/tsauvajon/fraudeursdu34
