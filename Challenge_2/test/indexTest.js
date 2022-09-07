const express = require("express");
const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

describe("GET calculate LCM of given array of nums", () => {
  it("Should return correct value of LCM and status 200 for given array", async () => {
    request(app)
      .get("/lcm?nums=[1,2,3]")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.equal("The LCM of 1,2 and 3 is 6");
      });
  });

  it("Should return correct error message and status 422 if given array with non natural numbers", async () => {
    request(app)
      .get("/lcm?nums=[1,-2,3.5]")
      .expect(422)
      .then((res) => {
        expect(res.body).to.be.equal(
          "Only natural numbers may be used to calculate a LCM."
        );
      });
  });

  it("Should return correct error message and status 422 if given array with less than 2 natural numbers", async () => {
    request(app)
      .get("/lcm?nums=[3]")
      .expect(422)
      .then((res) => {
        expect(res.body).to.be.equal(
          "At least two natural numbers must be provided to compute the LCM."
        );
      });
  });

  it("Should return correct error message and status 400 if given incorrect input", async () => {
    request(app)
      .get("/lcm?nums=[3")
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.equal("Invalid input");
      });

    request(app)
      .get("/lcm?nums=1")
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.equal("Invalid input");
      });

    request(app)
      .get("/lcm?nums={1,2}")
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.equal("Invalid input");
      });
  });
});
