memo = { 

}
ls = []
def canSum(arr,n,memo):
    if n==0:
        return []
    elif n<0:
        return None
    elif n in memo:
        return memo[n]
    for i in arr:
        k = canSum(arr,n-i,memo)
        if k != None:

            memo[n] = k +[i]
            return memo[n]
    memo[n] = None
    return memo[n]

print(canSum([2,3,4],7,memo))