const comments = [
  { text: `Love this!`, id: 524423 },
  { text: `Super good`, id: 823423 },
  { text: `You are the best`, id: 2039842 },
  { text: `Ramen is my fav food ever`, id: 123523 },
  { text: `Nice Nice Nice!`, id: 542328 },
];

// Array.prototype.find()
// Find is like filter, but instead return just the one you are looking for
//Find the comment with the ID of 823423
let comment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(comment); // {text: 'Super good', id: 823423}

comment = comments.find((comment) => comment.id === 823423);
console.log(comment); // {text: 'Super good', id: 823423}
