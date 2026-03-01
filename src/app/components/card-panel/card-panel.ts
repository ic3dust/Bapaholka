import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

//for future props
interface Card{
  id: number;
}

@Component({
  selector: 'app-card-panel',
  templateUrl:'cardPanel.html',
  styleUrl: 'cardPanel.css',
  standalone: true,
  imports: [RouterModule,TranslateModule, CommonModule],
})
export class CardPanel {

allCards: Card[] = [
  {id:1},{id:2},{id:3},{id:4},{id:5},
  {id:6},{id:7},{id:8},{id:9},{id:10}
];

cards: Card[] = this.allCards.slice(0, 5);
protected Math: typeof Math = Math;
nextIndex = 5; // next card to load
  swipeState: 'like' | 'dislike' | null = null;
  activeIndex=2;
  isDragging = false;
dragOffsetX = 0;
dragOffsetY = 0;
startX = 0;
startY = 0;




onCardClick(event: MouseEvent, index: number) {
  if (this.getPos(index) !== 0) return;// don't execute if otehr card is clicked

  if (!this.isDragging) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
  } else {
    this.isDragging = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
  }
}

getPos(index: number): number {
  let pos = index - this.activeIndex;
  const len = this.cards.length;
  //"shuffle"
  if (pos > len / 2) pos -=len;
  if (pos < -len / 2) pos +=len;
  return pos;//-2 to +2 range(5 cards)
}

onMouseMove(event: MouseEvent) {
  if (!this.isDragging || this.swipeState) return; // stop if already swiping + prevent triggerSwipe
  this.dragOffsetX = event.clientX - this.startX;
  this.dragOffsetY = Math.max(-100, Math.min(100, event.clientY - this.startY)); // from -100 to ... (from 100 downwards ...)

  if (this.dragOffsetX > 500) {
    this.triggerSwipe('right');
  } else if (this.dragOffsetX < -500) {
    this.triggerSwipe('left');
  }
}
triggerSwipe(direction: 'left' | 'right') {
  this.swipeState = direction === 'right' ? 'like' : 'dislike';
  this.isDragging = false;
  setTimeout(() => {this.swipe(direction);this.swipeState=null;}, 500);
}

swipe(direction: 'left' | 'right') {
  const len = this.cards.length;
  const swipedPos = this.activeIndex; // save current active card index in swipedPos

  if (direction === 'right') {
    this.activeIndex = (this.activeIndex + 1) % len;//%len to keep the num inside of bounds, bc %5 gives only: 0,1,2,4
  } else {
    this.activeIndex = (this.activeIndex - 1 + len) % len;//+len to tackle negative index
  }

  // swiped card = next from pool
  if (this.nextIndex < this.allCards.length) {
    this.cards[swipedPos] = this.allCards[this.nextIndex++];
  }

  this.isDragging = false;
  this.dragOffsetX = 0;
  this.dragOffsetY = 0;
  this.swipeState = null;
}

onDragCancel() {
  if (this.swipeState) return; // don't cancel if swiping
  this.isDragging = false;
  this.dragOffsetX = 0;
  this.dragOffsetY = 0;
}




}
