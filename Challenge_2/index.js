const utils = require("./utils");
const express = require("express");

const app = express();
const port = 8080;

app.get("/lcm", (req, res) => {
  try {
    const nums = JSON.parse(req.query.nums);

    for (let i = 0; i < nums.length; i++) {
      if (!utils.isNaturalNum(nums[i])) {
        res.status(422).send({
          Error: "Only natural numbers may be used to calculate a LCM.",
        });
      }
    }

    if (nums.length < 2) {
      res.status(422).send({
        Error:
          "At least two natural numbers must be provided to compute the LCM.",
      });
    }

    lcm = utils.lowestCommonMultiple(nums);
    responeString = utils.formatResponsestring(nums, lcm);
    res.status(200).send({ message: responeString });
  } catch (Error) {
    res.status(400).send({ Error: "Invalid input" });
  }
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
