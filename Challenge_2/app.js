const utils = require("./utils");
const express = require("express");

const app = express();

app.get("/lcm", (req, res) => {
  try {
    const nums = JSON.parse(req.query.nums);

    for (let i = 0; i < nums.length; i++) {
      if (!utils.isNaturalNum(nums[i])) {
        res.status(422).send({
          Error: "Only natural numbers may be used to calculate a LCM.",
        });
        return;
      }
    }

    if (nums.length < 2) {
      res.status(422).send({
        Error:
          "At least two natural numbers must be provided to compute the LCM.",
      });
      return;
    }

    lcm = utils.lowestCommonMultiple(nums);
    responeString = utils.formatResponsestring(nums, lcm);
    res.status(200).send({ message: responeString });
    return;
  } catch (Error) {
    res.status(400).send({ Error: "Invalid input" });
    return;
  }
});

module.exports = app;
