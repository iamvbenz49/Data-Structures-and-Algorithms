def dfsOfGraph(self, V, adj):
        ls = []
        vis = [0]*V
        def dfs(node):
            if vis[node]==0:
                vis[node]=1
                ls.append(node)
                for i in adj[node]:
                    dfs(i)
        dfs(0)
        return ls
