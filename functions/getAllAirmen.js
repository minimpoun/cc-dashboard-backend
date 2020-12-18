const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Router = require('express');

const rt = Router();
const db = admin.firestore();

async function getAllAirmen(req, res) {
  let snapshot = await db.collection('airmen').get().then(out => out);
  let output = [];

  if (snapshot.result) {
    snapshot.data.forEach(airman => {
      output.push({
        id: airman.id,
        adls: airman.get('adls'),
        evaluation: airman.get('evaluation'),
        firstName: airman.get('firstName'),
        lastName: airman.get('lastName'),
        flightName: airman.get("flightName"),
        medical: airman.get('medical')
      })
    })
    res.status(200).send({result: true, data: output});
  }
  else
  {
    res.status(400).send({result: false, message: "sad face"});
  }
}

rt.get('/', (req, res) => getAllAirmen(req, res));

export default rt;