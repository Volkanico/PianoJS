'use strict';
export class ViewLogin {
    constructor(){

    }
    closeLogin(){
        document.querySelector("button").addEventListener('click', function() {
            window.close();
        });
    }
    
}

