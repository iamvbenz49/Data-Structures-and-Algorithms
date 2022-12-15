memo = {

}
def fibo(n):
    if n in memo:
        return memo[n]
    if n == 1 or n==2:
        return 1
    else:
        memo[n] = fibo(n-1)+fibo(n-2)
    return memo[n]
print(fibo(100))