"use-strict";

import {Service} from "./service.js";

(function(){
    
    const regForm = document.querySelector("#userRegForm");
    const loginForm = document.querySelector("#userLogForm");
    regForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const fields = event.currentTarget.querySelectorAll("input");
        const name = fields[0].value;
        const email = fields[1].value;
        const password = fields[2].value;
        const pwrepeat = fields[3].value;
        if(password !== pwrepeat){
            console.log("Passwords don't match!");
            return
        }
        const user = {
            name:name,
            email:email,
            password:password
        }
        const users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
    });

    loginForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const fields = event.currentTarget.querySelectorAll("input");
        const name = fields[0].value;
        const password = fields[1].value;
        const users = JSON.parse(localStorage.getItem("users"));

        const foundUser = users.filter((u)=>{
            if(u.name === name && u.password === password){
                return u;
            }
        });

        if(foundUser.length > 0){
            console.log("Welcome "+foundUser[0].name);
        }else{
            console.log("Go away hacker!");
        }

    });
    
}());