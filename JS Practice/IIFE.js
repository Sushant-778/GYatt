//immediately invoked function expressions

//normal func declaration
function yolo(){
    console.log('db connected');
}
yolo();

(function yolos(){  // named IIFE
    console.log('db connected');
})();

(()=>{              // unnamed IIFE
    console.log('db connected');
})();

//syntax
//  ()()
// ( ()=>{})()