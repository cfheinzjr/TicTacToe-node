module.exports.gameTicTacToe = function(){    return {        createInstance: function(){            return new TicTacToe();        }    };}function TicTacToe(){    // todo: remove hardcode (currently it works just for 3x3 field)    var matrix = [[0,0,0],[0,0,0],[0,0,0]];        function canMove(x,y){        return matrix[x][y] == 0;    }        function move(x, y, isMaster){        matrix[x][y] = isMaster ? 1 : 2;    }        function isWinner(){        // todo: inplement it        return false;    }        function isGameEnded(){        for(var i = 0, l = matrix.length; i < l; i++) {            for(var j =0, l2 = matrix[i].length; j < l2; j++) {                if(matrix[i][j] == 0) {                    return false;                }            }        }        return true;    }        return {        canMove: canMove,        move: move,        isWinner: isWinner,        isGameEnded: isGameEnded    };}