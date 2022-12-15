memo = {
   
}
def grid(m,n):
    if (m,n) in memo:
        return memo[m,n]
    elif m==0 or n == 0:
        return 0
    elif m == 1 or n == 1:
        return 1
    memo[m,n]=memo[n,m] = grid(m-1,n) + grid(m,n-1)
    return memo[m,n]
print(grid(18,121))

"""
   you can only take right and front to reach end in (m,n)
 grid"""
