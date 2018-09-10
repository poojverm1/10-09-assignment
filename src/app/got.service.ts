import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  public allObj = [
    {
      "seriesId":"1",
      "url": "https://www.anapioficeandfire.com/api/characters/583",
      "name": "Jon Snow",
      "gender": "Male",
      "culture": "Northmen",
      "born": "In 283 AC",
      "died": "",
      "titles": [
        "Lord Commander of the Night's Watch"
      ],
      "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://www.anapioficeandfire.com/api/houses/362"
      ],
      "books": [
        "https://www.anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [
        "https://www.anapioficeandfire.com/api/books/1",
        "https://www.anapioficeandfire.com/api/books/2",
        "https://www.anapioficeandfire.com/api/books/3",
        "https://www.anapioficeandfire.com/api/books/8"
      ],
      "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
        "Season 6"
      ],
      "playedBy": [
        "Kit Harington"
      ]
    },
    {
      "seriesId":"2",
      "url": "https://www.anapioficeandfire.com/api/characters/583",
      "name": "Tyrion",
      "gender": "Male",
      "culture": "Northmen",
      "born": "In 283 AC",
      "died": "",
      "titles": [
        "Lord Commander of the Night's Watch"
      ],
      "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://www.anapioficeandfire.com/api/houses/362"
      ],
      "books": [
        "https://www.anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [
        "https://www.anapioficeandfire.com/api/books/1",
        "https://www.anapioficeandfire.com/api/books/2",
        "https://www.anapioficeandfire.com/api/books/3",
        "https://www.anapioficeandfire.com/api/books/8"
      ],
      "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
        "Season 6"
      ],
      "playedBy": [
        "Kit Harington"
      ]
    },
    {
      "seriesId":"3",
      "url": "https://www.anapioficeandfire.com/api/characters/583",
      "name": "Khaleesi",
      "gender": "Female",
      "culture": "Dothraki",
      "born": "In 118 AC",
      "died": "",
      "titles": [
        "Lord Commander of the Night's Watch"
      ],
      "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://www.anapioficeandfire.com/api/houses/362"
      ],
      "books": [
        "https://www.anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [
        "https://www.anapioficeandfire.com/api/books/1",
        "https://www.anapioficeandfire.com/api/books/2",
        "https://www.anapioficeandfire.com/api/books/3",
        "https://www.anapioficeandfire.com/api/books/8"
      ],
      "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
        "Season 6"
      ],
      "playedBy": [
        "Kit Harington"
      ]
    }
  ]

  public getAllObjs(){
    return this.allObj;
  }
  public currentObj;
  public getSingleInformation(currentBlogId):any{
    for(let obj of this.allObj){
      if(obj.seriesId == currentBlogId){
        this.currentObj = obj;
      }
    }
    console.log(this.currentObj);
    return this.currentObj;
  }
  constructor() { 
    console.log("Service is called");
  }
}
