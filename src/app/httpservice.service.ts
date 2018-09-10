import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  public allObjs;
  public currentObjs;
  public baseUrl = "https://anapioficeandfire.com/api/";

  public getAllBooks():any{

  }

  public getAllCharacter():any{
    
  }

  public getAllhouses():any{
    
  }

  public getSingleBooks(bookId):any{

  }

  public geSingleCharacter(characterId):any{
    
  }

  public getSinglehouses(houseId):any{
    
  }
  constructor() { }
}
