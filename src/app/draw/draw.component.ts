import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.initDraw(document.getElementById('canvas'));

}


// initDraw(canvas) {

//   setMouse(e) {
//         var ev = e || window.event; //Moz || IE
//         if (ev.pageX) { //Moz
//             mouse.x = ev.pageX + window.pageXOffset;
//             mouse.y = ev.pageY + window.pageYOffset;
//         } else if (ev.clientX) { //IE
//             mouse.x = ev.clientX + document.body.scrollLeft;
//             mouse.y = ev.clientY + document.body.scrollTop;
//         }
//     };
  
//     var mouse = {
//         x: 0,
//         y: 0,
//         startX: 0,
//         startY: 0
//     };
//     var element = null;
  
//     canvas.onmousemove = function (e) {
//         this.setMouse(e);
//         if (element !== null) {
//             element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
//             element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
//             element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
//             element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
//         }
//     }
  
//     canvas.onclick = function (e) {
//         if (element !== null) {
//             element = null;
//             canvas.style.cursor = "default";
//             console.log("finsihed.");
//         } else {
//             console.log("begun.");
//             mouse.startX = mouse.x;
//             mouse.startY = mouse.y;
//             element = document.createElement('div');
//             element.className = 'rectangle'
//             element.style.left = mouse.x + 'px';
//             element.style.top = mouse.y + 'px';
//             canvas.appendChild(element)
//             canvas.style.cursor = "crosshair";
//         }
//     }
//   }
//     }
// }

}