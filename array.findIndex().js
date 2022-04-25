const comments = [
  { text: `Love this!`, id: 524423 },
  { text: `Super good`, id: 823423 },
  { text: `You are the best`, id: 2039842 },
  { text: `Ramen is my fav food ever`, id: 123523 },
  { text: `Nice Nice Nice!`, id: 542328 },
];

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with ID od 823423

let index = comments.findIndex(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(index); // {text: 'Super good', id: 823423}

index = comments.findIndex((comment) => comment.id === 823423);
console.log(index); // {text: 'Super good', id: 823423}

//comments.splice(index, 1);
//console.log(comments);
// 0: {text: 'Love this!', id: 524423}
// 1: {text: 'You are the best', id: 2039842}
// 2: {text: 'Ramen is my fav food ever', id: 123523}
// 3: {text: 'Nice Nice Nice!', id: 542328}

newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.log(newComments);
// 0: {text: 'Love this!', id: 524423}
// 1: {text: 'You are the best', id: 2039842}
// 2: {text: 'Ramen is my fav food ever', id: 123523}
// 3: {text: 'Nice Nice Nice!', id: 542328}
