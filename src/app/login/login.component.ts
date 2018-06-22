import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';


import {  AuthenticationService } from '../authentication.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    name="";
    pssw="";

    constructor(
        public router: Router,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.authenticationService.logout();
    }

    onLoggedin(user:string,pssw:string):void {
        // console.log(user,pssw)
        this.authenticationService.login(user,pssw)
            .subscribe(credentials=>{
                // console.log(credentials)
                if (!!credentials.token){
                    this.router.navigate(['/dashboard'])
                }else{
                    alert("error al iniciar sesion")
                }
            }
                // credentials=>console.log(credentials)
            );
        
    }


}
