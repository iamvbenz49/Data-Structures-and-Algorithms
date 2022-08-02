class Solution{
    delAlternate(S){
        let res = ""
        for(let i = 0 ; i < S.length ; i+=2){
             res+=S[i]  
        }
        return res
    }
}
