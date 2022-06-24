function isPalindrome(word) {
  // Write your algorithm here
  const words = word.length
  for (let i = 0; i < words /2; i ++ ){
    if(word[i] !== word[words -1 -i]){
      return false;
    }
  }
  return true;
}
console.log("abba");

// console.log(robot);

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The problem is asking for a palindrome 
  solution in that if a string is palindrome,
  i.e can be reversed without changing it's meaning, 
  returns true and vice-versa.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
