import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() boardWidth: any;
  @Input() boardHeight: any;

  cellHeight = 10;
  cellWidth = 10;
  
  board = {
    width: 0,
    height: 0,
    cellNum: 0,
    initialLiving: 10,
  };
  canvas: any;
  context: any;

  constructor() { }

  ngOnInit(): void {
    this.getBoardStats();
    this.setup();
    this.paintBoard(this.context);
  }

  paintBoard(context: CanvasRenderingContext2D) {
    this.drawGrid(context);

    this.fillBoard(context);
  }

  drawGrid(context: CanvasRenderingContext2D) {
    let lineX = 0;
    let lineY = 0;
    let dx = 10;
    let dy = 10;

    while (lineX <= this.board.width) {
      context.beginPath();
      context.moveTo(lineX, 0);
      context.lineTo(lineX, this.board.height);
      context.stroke();

      lineX += dx;
    }
    context.save();
    while (lineY <= this.board.height) {
      context.beginPath();
      context.moveTo(0, lineY);
      context.lineTo(this.board.width, lineY);
      context.stroke();

      lineY += dy;
    }
  }

  fillBoard(context: CanvasRenderingContext2D) {
    let i = 0;

    while (i < this.board.initialLiving) {
      let randX = Math.floor(Math.random() * this.board.width / this.cellWidth) * this.cellWidth;
      let randY = Math.floor(Math.random() * this.board.height / this.cellHeight) * this.cellHeight;

      context.fillStyle = '#3f51b5';
      context.fillRect(randX, randY, this.cellWidth, this.cellHeight);
      i++;
    }
  }

  getBoardStats() {
    this.board.height = this.boardHeight;
    this.board.width = this.boardWidth;
    this.board.cellNum = this.board.height * this.board.width;
  }

  setup() {
    this.canvas = document.getElementById('game-board');
    this.canvas.height = this.board.height;
    this.canvas.width = this.board.width;
    this.context = this.canvas.getContext('2d');
  }

}
