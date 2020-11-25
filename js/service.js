'use strict';

export class Service {
    constructor() {
        
    }

    async getUsers(url){
        const users = await fetch(url)
        .then(response => response.json())
        .then((data)=>{
           return data;
        });
        return users;
    }

    async createUser(url, user){
        const response = await fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(user) 
          });
          return response.json(); 
    }
}

