# Commanders Dashboard API

API URL
> https://us-central1-cc-dashboard-afb15.cloudfunctions.net

# Endpoints

## getFlightCodes

#### This endpoint will return a list of all flight codes for the squadron

Format:
[url]/getFlightCodes

Params|Method
------|------
Null | GET

Example usage:
```javascript
const response = await fetch('https://us-central1-cc-dashboard-afb15.cloudfunctions.net/getFlightCodes');
const data = await response.json();
```

Example response:
```json
{
    "flights": [
        "cnms",
        "ecm",
        "hydro",
        "jets"
    ]
}
```

## getAirmen

#### The getAirmen endpoint will return an array of all the airmen within a shop/flight. 

Format:
[url]/getAirmen/[flightId]

Params | Method
-------|-------
flightId | GET

Example usage:
```javascript
const response = await fetch(`https://us-central1-cc-dashboard-afb15.cloudfunctions.net/getAirmen/${code}`);
const data = await response.json();
```

Example response:
```json
{
    "result": [
        {
            "airmanId": "18KIVD48FRLJ9ZPg9X5Y",
            "airmanData": {
                "firstName": "sam",
                "lastName": "not different",
                "evaulation": "current",
                "adls": "not current",
                "pt": "not current",
                "medical": "current"
            }
        }
    ]
}
```

## addAirman

#### Will add a single airman to the specified shop/flight

Format:
[url]/addAirman/[flightID]

Params | Method
-------|-------
flightID | POST

Example usage:
```javascript
const response = await fetch(createUrl(), {
  method: getMethod(),
  mode: 'cors',
  accept: '*/*',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    adls: adls,
    pt: pt,
    medical: medical,
    evaluation: evaluation
  })
});
const data = await response.json();
```

Example body:
```json
{
    "firstname": "Dylan",
    "lastname": "Liles",
    "PT" : "Current",
    "Medical" : "Current",
    "ADLS" : "Current",
    "Evaluation": "Current"
}
```

Example response:
```json
{
    "result": "User added succesfully"
}
```

## updateAirman

#### Updates the specified airman. NOTE: At the moment this endpoint doesn't patch, it will do a full replacement.

Format: [url]/updateAirman/[flightId]/[airmanId]

Params | Method
-------|--------
flightId | PUT
airmanId

Example usage:
```javascript
const response = await fetch(`https://us-central1-cc-dashboard-afb15.cloudfunctions.net/updateAirman/${flightId}/${airmanId}`, { method: 'PUT' } );
const data = await response.json();
```

Example body:
```json
{
    "firstName":"bubby",
    "lastName":"winston",
    "adls": "not current",
    "pt": "not current",
    "medical": "current",
    "evaulation": "current"
}
```

Example response:
```json
{
    "result": true,
    "message": "Update completed!"
}
```

## deleteAirman

#### Will delete a single airman from the specified shop/flight

Format: [url]/deleteAirman/[flightId]/[airmanId]

Params | Method
-------|-------
flightId | DELETE
airmanId |

Example usage:
```javascript
const response = await fetch(`https://us-central1-cc-dashboard-afb15.cloudfunctions.net/deleteAirman/${flightId}/${airmanId}`, { method: 'DELETE' } );
const data = await response.json();
```

Example response:
```json
{ 
  "result": "true", "message": "User deleted successfully"
}
```
