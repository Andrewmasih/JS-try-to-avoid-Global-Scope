let theAnswer= 42;

function displayAnswer ()     {
  console.log (theAnswer); /*try uncommenting the console.log or try using the 'return' */
}

displayAnswer ();

function displayAnswer () {
  let theAnswer = 42;
  console.log (theAnswer);
}

displayAnswer()
/* the scope is inside the fuction, this is called 'local scope' it allows us to limited our varibles visibility */



/* we can not trust that other script will not corrupt our 'global variables', could store large amount of data causing memory management issues.
its good pratice to avoid creating variables in the 'global scope' */


