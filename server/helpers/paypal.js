const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AeStuWg59E7O7skKB21mG6oFCDQbnTADgLzyaLnmDtRfLNh0bZhtjwQXsmTLH93oxf4Vucf_9l3TW2Ak",
  client_secret: "EOAqnJT74_aXy6p6wLjsFKTRporsoDRlpATaiNTqDHGoOpr_HNDVHnu1Z_VH3MW4pskod3tE60oBH1x9",
});

module.exports = paypal;