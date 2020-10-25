import { Component,createElement } from './framework'

class Carousel extends Component {
  constructor() {
   super()
   this.attributes = Object.create(null)
  }
  render() {
    return document.createElement("div");
  }
}

let d = [
  "https://www.pig66.com/uploadfile/2018/0129/20180129054218295.png",
  "https://www.pig66.com/uploadfile/2018/0129/20180129054219278.png",
  "https://www.pig66.com/uploadfile/2018/0129/20180129054219130.png",
  "https://www.pig66.com/uploadfile/2018/0129/20180129054219699.png",
  "https://www.pig66.com/uploadfile/2018/0129/20180129054220366.png",
];

let a = <Carousel src={d}/>;
a.mountTo(document.body)