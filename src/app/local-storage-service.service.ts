import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {
isAvailable():boolean{
  try{
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }catch(e){
    return false
  }
}

setItem(key:string,value:string):void{
  if(this.isAvailable()){
    localStorage.setItem(key,value);
  }else{
    console.warn('localStorage nu este disponibil ')
  }
}
getItem(key:string):string|null{
  if(this.isAvailable()){
    return localStorage.getItem(key);
  }
  console.warn('localStorage nu este disponibil');
  return null
}
removeItem(key:string):void{
  if(this.isAvailable()){
    localStorage.removeItem(key)
  }
}
  constructor() { }
}
