from typing import List

def spiral_copy(matrix: List[List[int]]) -> List[int]:
    left, right = 0,  len(matrix[0])-1
    top, bottom = 0, len(matrix)-1
    res = []
    while(top<=bottom and left<=right):
        for i in range(left, right+1):
            res.append(matrix[top][i])
        top+=1
        for i range(top, bottom+1):
            res.append(matrix[i][right])
        right-=1
        for i in range(right, left-1, -1):
            res.append(matrix[bottom][i])
        bottom-=1
        for i in range(bottom, top-1, -1):
            res.append(matrix[i][left])
        left+=1

# debug your code below
inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(spiral_copy(inputMatrix))