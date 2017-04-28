function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  for (let i=0; i < rankedLists.length; i++) {
    document.querySelectorAll('.ranked-list')[i].innerHTML=`parseInt(rankedLists[i].innerHTML)++`
  }
}

function deepestChild() {
  do {
    var nodes = document.querySelector('#grand-node')
  } while (nodes.querySelector(':first-child').length > 0) {
    nodes = nodes.querySelector(':first-child')
  }
  return nodes
}
