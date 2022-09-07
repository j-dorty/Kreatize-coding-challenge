# Coding Challenges for the JavaScript Engineer Position at KREATIZE GmbH

Hi there! 👋 Thanks for your interest in KREATIZE and for taking the time so solve these coding challenges.

We know that coding challenges can sometimes be time-consuming and because of that can be unfair to candidates with less time to spare, so we designed the following challenges to be ideally completed within two hours.

## Challenge #1

Write a function `isValidBinaryTree(inputTree = String[]) => bool`, which takes in a string array in the format `['(x, y)', ... , '(a, b)']` and returns a `bool`. This function parses the string, and determines whether the input string can correctly form a valid binary tree or not. Each entry in the string represents a pair of integers `(x, y)`, where `x` is the child of `y`, and all the integers should be unique within the tree (meaning there can only be one node in the tree with the given value).

For example, the input string array `['(1,2)', '(2,4)', '(7,2)']` forms the following tree:

```text
       4
      /
     2
    / \
   1   7
```

which is a proper binary tree. In this case, a call to `isValidBinaryTree` is expected to return `true`.

Make sure to comment your function for readability – just remember that you don't need to comment each line of code 😉.

You can do this challenge in the programming language of your choice, but you are not allowed to use any
external libraries/packages.

## Challenge #2

Design a simple web server using a JavaScript-based framework (such as Node.js with Express) that is able to do the following:

- Runs locally on port 8080.
- Has a `GET` request at the URL `localhost:8080/lcm?[queryParams]`.
- This `GET` request take an array of natural numbers and finds their least common multiple (LCM).
- If valid natural numbers are provided, the server should calculate the LCM, then respond with the message `The LCM of {naturalNumbers} is {lcm}` (where `{naturalNumbers}` is the input array formatted as `a, b, c, ... and z` and `{lcm}` is the LCM) and an HTTP status code of 200.
- If non-natural numbers are provided, the server should respond with the error `Only natural numbers may be used to calculate a LCM.` and the HTTP status code should be set to 422.
- If the request receives less than two natural numbers, then the server should respond with the error `At least two natural numbers must be provided to compute the LCM.` and the HTTP status code should be set to 422.

Make sure to document all your methods, write some unit tests, and provide a README for your project with setup/installation/testing instructions.

Feel free to use any external libraries/packages in this challenge – no need to reinvent the wheel here 🙃.

## Submission

Please create a repository on GitHub with your solutions to these challenges. If you would like to use a private repository, make sure to share it with `ato-kreatize` and `jonahlk` so we can have a look at your solutions.

We hope you'll enjoy working on these challenges, and we wish you good luck! 🍀
