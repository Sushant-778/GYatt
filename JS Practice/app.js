console.log('yooolo');

// scope and stuff
function one(){
    const userName='Sushant'

     function two(){
        const website='youtube'
        console.log('username');
     } 
    //  console.log(website)
     two();
}
one(); 
