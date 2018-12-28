class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
    get title (){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut (value){
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus (){
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating(){
    let ratingSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    let averageRating = ratingSum / (this._ratings.length);
    return averageRating;
  }

  addRating(number){
    return this._ratings.push(number);
  }

}

class Book extends Media {
  constructor(author, title, pages){
    super(title);
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
