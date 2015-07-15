/**
 * Created by Heon on 15. 7. 1.
 */

function Graph(v,e){
	this.vector = v;
	this.edge = e;
	this.adj = new Array(v);
	for(var i = 0;i <v ; i++){
		this.adj[i] = new Array(v);
	}
}

var visited = new Array(Graph.vector);
function DFS(graph, u){
	visited[u] = true;
//	console.log(graph)
	for(var v = 1; v<graph.vector; v++){
		if(!visited[v] && graph.adj[u][v]){
			console.log(u+'에서 '+v+'로 이동');
			DFS(graph, v);
		}
	}
};

function BFS(graph, u){
	visited[u]=true;
	var arr = [];
	arr.push(u);
	while(arr.length>0){
		u = arr.shift();
		for( var v = 1; v<graph.vector; v++){
			if(!visited[v] && graph.adj[u][v]){
				console.log(u+'에서 '+v+'로 이동');
				visited[v]=true;
				arr.push(v);
			}
		}
	}
}


var graph = new Graph(9, 10);
graph.adj[1][2] = true;
graph.adj[2][1] = true;
graph.adj[2][4] = true;
graph.adj[4][2] = true;
graph.adj[4][8] = true;
graph.adj[8][4] = true;
graph.adj[8][5] = true;
graph.adj[5][8] = true;
graph.adj[8][6] = true;
graph.adj[6][8] = true;
graph.adj[8][7] = true;
graph.adj[7][8] = true;
graph.adj[2][5] = true;
graph.adj[5][2] = true;
graph.adj[3][6] = true;
graph.adj[6][3] = true;
graph.adj[3][7] = true;
graph.adj[7][3] = true;
graph.adj[1][3] = true;
graph.adj[3][1] = true;
console.log(graph)
DFS(graph, 1);
console.log('--------------------')
var visited = new Array(Graph.vector);
BFS(graph, 1);

console.log(4 << 1)
console.log((8).toString(2));
console.log(parseInt((100).toString(2),2));

console.log(testString.charAt(0));