import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  posts = [
    { title: "Post 1", body: "This is post one" },
    { title: "Post 2", body: "This is post two" }
  ];

  output: any = '';

  constructor() { }

  ngOnInit() {
    // // callback 
    this.iscall(this.callshow);

    // promises
    this.promise();
    this.promise2();
    this.allPromises();
    // getposts
    // this.getposts();
    // async/await
    this.init();
  }

  // callback
  callshow() {
    console.log("This is a function");
  }

  iscall(callback) {
    callback();
  }

  // promises
  promise() {
    let p = new Promise((resolve, reject) => {
      let a = 2;
      if (a == 2) {
        resolve("Because It is success!");
      } else {
        reject("Because It is failed!");
      }
    })

    p.then((message) => {
      console.log('This is resolved ' + message);
    }).catch((message) => {
      console.log('This is rejected ' + message);
    })
  }

  // example2
  promise2() {
    let userLeft = false;
    let userWatching = true;
    let p = new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left',
          message: 'Message from User Left'
        })
      } else if (userWatching) {
        reject({
          name: 'User Watching',
          message: 'Message from user Watching'
        })
      } else {
        resolve("Success!");
      }
    })

    p.then((msg) => {
      console.log(msg);
    }).catch((error) => {
      console.log(error.name + ' ' + error.message);
    })
  }

  allPromises() {
    let one = new Promise((resolve, reject) => {
      resolve("Video 1 recorded!")
    })
    let two = new Promise((resolve, reject) => {
      resolve("Video 2 recorded!")
    })
    let three = new Promise((resolve, reject) => {
      resolve("Video 3 recorded!")
    })

    Promise.all([one, two, three]).then((msg) => {
      console.log(msg);
    })
  }

  // getposts
  getposts() {
    this.posts.forEach((post) => {
      this.output += `<div>${post.title}</div>`;
    })
  }

  // with promise
  createPost(post){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.posts.push(post);
        let error = false;
        if(!error){
          resolve("Success!")
        } else {
          reject("Error")
        }
      }, 3000);
    })
  }

  // asyn/await
  async init(){
    await this.createPost({ title: "Post 3", body: "This is post three" });
    this.getposts();
  }

  

}
