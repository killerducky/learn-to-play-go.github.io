const updateCapturesFunc = (node) => {
    if(!!document.getElementById("black-captures")){
        document.getElementById("black-captures").innerText = node.info.captures[JGO.BLACK];
    }
    
    if(!!document.getElementById("white-captures")){
        document.getElementById("white-captures").innerText = node.info.captures[JGO.WHITE];
    }
}

const runSetup = (jsetup) => {

jsetup.create("board", function(canvas) {
    canvas.addListener("click", (coord, ev) => {
        var opponent = player == JGO.BLACK ? JGO.WHITE : JGO.BLACK;
  
        // clear hover away - it'll be replaced or then it will be an illegal move
        // in any case so no need to worry about putting it back afterwards
        if (lastHover)
          jboard.setType(new JGO.Coordinate(lastX, lastY), JGO.CLEAR);
  
        lastHover = false;
  
        var play = jboard.playMove(coord, player, ko);
  
        if (play.success) {
          node = jrecord.createNode(true);
          node.info.captures[player] += play.captures.length; // tally captures
          node.setType(coord, player); // play stone
          node.setType(play.captures, JGO.CLEAR); // clear opponent's stones
  
          if (lastMove) node.setMark(lastMove, JGO.MARK.NONE); // clear previous mark
          if (ko) node.setMark(ko, JGO.MARK.NONE); // clear previous ko mark
  
          node.setMark(coord, JGO.MARK.CIRCLE); // mark move
          lastMove = coord;
  
          if (play.ko) node.setMark(play.ko, JGO.MARK.CIRCLE); // mark ko, too
          ko = play.ko;
  
          player = opponent;
          updateCapturesFunc(node);
        } else alert("Illegal move: " + play.errorMsg);
    });

    canvas.addListener("mousemove", (coord, ev) => {
        if (
            coord.i == -1 ||
            coord.j == -1 ||
            (coord.i == lastX && coord.j == lastY)
          )
            return;
    
          if (lastHover)
            // clear previous hover if there was one
            jboard.setType(new JGO.Coordinate(lastX, lastY), JGO.CLEAR);
    
          lastX = coord.i;
          lastY = coord.j;
    
          if (
            jboard.getType(coord) == JGO.CLEAR &&
            jboard.getMark(coord) == JGO.MARK.NONE
          ) {
            jboard.setType(
              coord,
              player == JGO.WHITE ? JGO.DIM_WHITE : JGO.DIM_BLACK
            );
            lastHover = true;
          } else lastHover = false;
    });

    canvas.addListener("mouseout", (ev) => {
        if (lastHover)
            jboard.setType(new JGO.Coordinate(lastX, lastY), JGO.CLEAR);

        lastHover = false;
    });
  });
}