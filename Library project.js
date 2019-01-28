class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title(){
    return this._title
  }
  
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  
  get ratings(){
    return this._ratings;
  }
  
  set isCheckedOut(checkedOut){
    this._isCheckedOut = checkedOut;
  }
  
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._ischeckedOut
  }
  
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    let lengthOfArray = this._ratings.length;
    return ratingsSum / lengthOfArray;
  }
  addRating(ratings){
    this._ratings.push(ratings);
  }
}

class Book extends Media {
  constructor(author ,title ,pages){
    super(title)
    this._author = author;
    this._pages = pages;
  }
  
  get author(){
    return this._author;
  }
  
  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director(){
    return this._director;
  }
  
  get runTime(){
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History Of Nearly Everything', 544);


const speed = new Movie('Jan de Bont', 'Speed', 116);
