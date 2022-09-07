# Kreatize coding challenge

## Challenge 1:

To run:

Edit file or import `isValidBinaryTree()` and run with list given in format `['(1,2)', '(2,4)', '(7,2)']`

    $ python .\main.py

Output:

    print(isValidBinaryTree(['(1,2)', '(2,4)', '(7,2)'])) # valid
    print(isValidBinaryTree(['(2,1)', '(3,2)', '(4,3)'])) # valid
    print(isValidBinaryTree(['(2,1)', '(3,1)', '(4,1)'])) # invalid
    print(isValidBinaryTree(['(2,1)', '(3,2)', '(4,2)', '(5,1)'])) # Valid
    print(isValidBinaryTree(['(2,1)', '(10,2)', '(5,4)'])) # Invalid
    print(isValidBinaryTree(['(2,1)', '(1,2)'])) # Invalid
    print(isValidBinaryTree(
    ['(2,4)', '(5,4)', '(1,2)', '(17,2)', '(17,5)'])) # invalid

    > python .\main.py
    True
    True
    False
    True
    False
    False
    False

## Challenge 2

### Endpoints:

#### GET: /lcm

##### Parameters:

Query Parameters:

- nums - array of natural numbers given in the format of nums=[x,y,z] ex: `/lcm?nums=[7,8,9]`

##### Responses

- Code: 200

  - Description: Success

  Example Value:
  Request: `/lcm?nums=[7,8,9]`
  Response: `{"message":"The LCM of 7,8 and 9 is 504"}`

- Code: 400

  - Description: Bad request

  Example Value:
  Request: `/lcm?nums=[7,8,9`
  Response: `{"message":"Invalid input"}`

- Code: 422

  - Description: Unprocessable Entity

  Example Value:
  Request: `/lcm?nums=[7,8,-9]`
  Response: `{"Error":"Only natural numbers may be used to calculate a LCM."}`

- Code: 422

  - Description: Unprocessable Entity

  Example Value:
  Request: `/lcm?nums=[7]`
  Response: `{"Error":"At least two natural numbers must be provided to compute the LCM."}`

To run:

    npm run start

To run tests:

    npm run test
