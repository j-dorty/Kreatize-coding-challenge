# Valid Binary Tree requires:

# All nodes have 2 children or less
# No cycles
# Every node must have at max 1 parent
# Only 1 node can have 0 parents (the root)
# There can only be a single connected component

import sys


def parseStringArray(str_arr):
    """
    This function parses the given string array to an int array
    to allow multi digit numbers to be assesed
    eg:
    ['(1,2)', '(2,4)', '(7,2)'] => [(1,2), (2,4), (7,2)] 
    """

    int_arr = []

    for item in str_arr:
        parts = item.split(",")

        for i in range(len(parts)):
            parts[i] = int(parts[i].replace("(", "").replace(")", ""))

        int_arr.append(tuple(parts))

    return int_arr


def isValidBinaryTree(str_arr):
    """
    This function takes an array of string tuples and returns
    true is the input can form a valid binary tree as according
    to the criteria above
    eg:
    ['(1,2)', '(2,4)', '(7,2)'] => True
    """

    int_arr = parseStringArray(str_arr)

    adj_list = {}  # map of nodes to list of connect nodes
    parents = {}  # map of nodes to number of parents

    for child, parent in int_arr:
        if parent not in adj_list:  # initialize map if new nodes
            adj_list[parent] = []
        if parent not in parents:
            parents[parent] = 0
        if child not in parents:
            parents[child] = 0

        # update connected nodes and parent count
        adj_list[parent].append(child)
        parents[child] += 1

        # if parent has more than 2 children or child has more than one parent return false
        if len(adj_list[parent]) == 3 or parents[child] == 2:
            return False

    # root node is node with no parent
    root = [node for node, value in parents.items() if value == 0]

    if len(root) > 1:  # not valid if more than one node with no parent or none (only one root node)
        return False
    elif len(root) == 0:
        return False

    return True


if __name__ == "__main__":

    print(isValidBinaryTree(['(1,2)', '(2,4)', '(7,2)']))  # valid
    print(isValidBinaryTree(['(2,1)', '(3,2)', '(4,3)']))  # valid
    print(isValidBinaryTree(['(2,1)', '(3,1)', '(4,1)']))  # invalid
    print(isValidBinaryTree(['(2,1)', '(3,2)', '(4,2)', '(5,1)']))  # Valid
    print(isValidBinaryTree(['(2,1)', '(10,2)', '(5,4)']))  # Invalid
    print(isValidBinaryTree(['(2,1)', '(1,2)']))  # Invalid
    print(isValidBinaryTree(
        ['(2,4)', '(5,4)', '(1,2)', '(17,2)', '(17,5)']))  # invalid
