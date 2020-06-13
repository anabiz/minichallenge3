function wordSearch(board, word) {
    let c =0
    var res=""
    for(let a=0; a<board.length;a++){
        for(let b=0; b<board[a].length; b++){
            if (board[a][b]===word[0]){
               if(checkNext(board, word, a, b, 0, res,0)){
                   return true;
               }
                //console.log(checkNext(board, word, a, b, 0, res,0))
                //console.log(res)
            }
        }
    }
    return false
}
    function checkNext(board, word, a, b, c, counter1,k){
        
        console.log(counter1)
        if(counter1==word){return counter1}
        if((a<0||a>=board.length||b<0||b>=board[a].length||board[a][b] !== word[c])){
            k++
            return ;
        }
        counter1 +=board[a][b];
        board[a][b]=0;
        console.log(counter1)
        
       // if(counter1!==word){
        
       if(checkNext(board,word, a-1, b, c+1, counter1,k++)){return true}
        if(checkNext(board,word, a+1, b, c+1, counter1,k++)){return true}
        if(checkNext(board,word, a, b-1, c+1, counter1,k++)){return true}
        if(checkNext(board,word, a, b+1, c+1, counter1,k++)){return true}
       // }
    //}
    board[a][b]=word[c];
    }


    console.log(
        wordSearch([
          ["D", "E", "C", "A", "C"],
          ["E", "D", "E", "O", "N"],
          ["E", "A", "D", "D", "O"],
          ["C", "G", "O", "E", "G"],
          ["C", "A", "N", "C", "A"],
      ],
      "DECAGON"
        ));
      
      
     /* console.log(
        wordSearch([
        ["P", "R", "A", "B", "C"],
        ["R", "N", "O", "O", "T"],
        ["E", "A", "I", "O", "O"],
        ["C", "I", "S", "E", "L"],
        ], "PRECISELY")
      );
      
      
      console.log(
        wordSearch([
        ["C", "D", "Y", "C", "X"],
        ["A", "N", "Y", "Z", "X"],
        ["T", "F", "Z", "A", "T"],
        ["M", "D", "B", "U", "T"],
        ],
          "CAT")
      );
      
        // should be true
      
      console.log(wordSearch([
          ["O", "A", "V", "P", "Z"],
          ["H", "S", "I", "F", "X"],
          ["T", "M", "A", "K", "K"],
          ["S", "U", "B", "E", "Y"],
        ], "FISH"));
      
      
      console.log(wordSearch([
        ["D", "S", "A", "N", "C"],
        ["I", "N", "O", "I", "T"],
        ["T", "A", "T", "R", "O"],
        ["M", "F", "O", "U", "T"],
      ],
      
        "SANCTIONS"));

     */ 
      
module.exports = wordSearch;


function dfr(){
    var a=0;
    if(a){
        console.log("yes")
    }else{
        console.log(a)
    }
}

dfr()