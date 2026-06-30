import { Service, signal } from '@angular/core';

@Service()
export class Auth2Service {


   isloggedIn = signal<boolean>(false)


  login():void {
    this.isloggedIn.set(true)

  }

  logout():void {
    this.isloggedIn.set(false)
  }


}
