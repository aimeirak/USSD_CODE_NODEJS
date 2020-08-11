const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  // Read variables sent via POST from our SDK
  const {sessionId, serviceCode, phoneNumber, text } = req.body;

  console.log('####################', req.body);
  let response = "";
  if (text === ""){
    console.log(text);
    // This is the first request. Note how we start the response with CON
    response = `CON Hitamo Icyo Wifuza
        1. KUBONANA NUMUGANGA
        2. GUFATA IBIPIMO MURUGO`;
  } else if (text === "1"){
    // Business logic for first level response
    response = `CON HITAMO KUBONANA NUMUGANGA WA
        1. Cardiology
        2. Gynecology
        3. Neurosurgery
        4. Cardiothoracic
        5. Pediatrics
        6. Orthopedics
        7. Internal medicine`;
  } else if (text === "2") {
    // Business logic for first level response
    // This is a terminal request. Note how we start the response with END
    response = `END Biracyarimo gukorwaho  mwihangane`;
  } else if (text === "1*1") {
    // This is a second level response where the user selected 1 in the first instance
    const accountNumber = "Cardiology";
    // This is a terminal request. Note how we start the response with END
    response = `END uhisemo  ${accountNumber}`;
  } else if (text === "1*2") {
    // This is a second level response where the user selected 1 in the first instance
    const accountNumber = "Gynecology";
    // This is a terminal request. Note how we start the response with END
    response = `END uhisemo ${accountNumber}`;
  }
  else if(text === "1*3"){
      // This is a second level response where the user selected 1 in the first instance
    const accountNumber = "Neurosurgery";
    // This is a terminal request. Note how we start the response with END
    response = `END uhisemo ${accountNumber}`;
  }
  else if(text === "1*4"){
    // This is a second level response where the user selected 1 in the first instance
  const accountNumber = "Cardiothoracic";
  // This is a terminal request. Note how we start the response with END
  response = `END uhisemo ${accountNumber}`;
}
else if(text === "1*5"){
    // This is a second level response where the user selected 1 in the first instance
  const accountNumber = "Pediatrics";
  // This is a terminal request. Note how we start the response with END
  response = `END uhisemo ${accountNumber}`;
}
else if(text === "1*6"){
    // This is a second level response where the user selected 1 in the first instance
  const accountNumber = "Orthopedics";
  // This is a terminal request. Note how we start the response with END
  response = `END uhisemo ${accountNumber}`;
}
else if(text === "1*7"){
    // This is a second level response where the user selected 1 in the first instance
  const accountNumber = "Internal medicine";
  // This is a terminal request. Note how we start the response with END
  response = `END uhisemo ${accountNumber}`;
}

  // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
  // DONE!!!
});
module.exports = router;