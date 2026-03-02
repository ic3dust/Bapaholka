import { Component, ViewChild, ElementRef, Inject, PLATFORM_ID, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-canvas',
  standalone: true,
  template: `<canvas #nameCanvas height="80" style="display:block; max-width:100%; overflow:hidden;"></canvas>`
})
export class Canvas {
  @ViewChild('nameCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    afterNextRender(() => {
      const canvas = document.querySelector('app-canvas canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        const fallback=document.createElement('p');
        fallback.textContent='2d canvas is not supported :(';
        canvas.parentElement?.appendChild(fallback);
        return
      };

      const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$%^&*()[]{}!?';
      const gen = (len:number) => Array.from(
        {length: len},
        ()=>list[Math.floor(Math.random()*list.length)]
      ).join('');

      const [a,o, u, i, e, a1, o1, u1, e1,i1]=Array.from({length: 10},()=>gen(5));
      console.log(a);

      const is =[i,a1,o,a,u,i1,o,u1,i1,e1,e,u,o1];
      
      const spacing = 32;
      canvas.width = is.length * spacing + 30; // dynamic width

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#fed722");
    gradient.addColorStop(1, "#f75700");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const letters: Record<string, (x: number, y: number) => void> = {
        [e1]: (x, y) => {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + 40);
          ctx.arc(x + 10, y + 40, 10, Math.PI, 0,true);
          ctx.lineTo(x + 20, y);
          ctx.stroke();
        },
        [i1]: (x, y) => {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + 50);
          ctx.moveTo(x, y);
          ctx.arc(x + 10, y + 12, 12, -Math.PI / 2, Math.PI / 2);
          ctx.stroke();
        },
        [u1]: (x, y) => {
          ctx.beginPath();
          ctx.moveTo(x + 20, y);
          ctx.lineTo(x, y);
          ctx.lineTo(x, y + 50);
          ctx.lineTo(x + 20, y + 50);
          ctx.moveTo(x, y + 25);
          ctx.lineTo(x + 15, y + 25);
          ctx.stroke();
        },
        [o]: (x, y) => {
          ctx.beginPath();
          ctx.arc(x + 10, y + 10, 10, 0, Math.PI, true);
          ctx.arc(x + 10, y + 40, 10, 0, Math.PI);
          ctx.stroke();
        },
        [u]: (x, y) => {
          ctx.beginPath();
          ctx.moveTo(x + 10, y);
          ctx.lineTo(x, y + 50);
          ctx.moveTo(x + 10, y);
          ctx.lineTo(x + 20, y + 50);
          ctx.moveTo(x + 5, y + 30);
          ctx.lineTo(x + 15, y + 30);
          ctx.stroke();
        },
        [a1]: (x, y) => {
          ctx.beginPath();
          ctx.ellipse(x + 10, y + 25, 10, 25, 0, 0, Math.PI * 2);
          ctx.stroke();
        },
        [e]: (x, y) => {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + 50);
          ctx.moveTo(x, y);
          ctx.arc(x + 10, y + 12, 12, -Math.PI / 2, Math.PI / 2);
          ctx.moveTo(x + 8, y + 24);
          ctx.lineTo(x + 20, y + 50);
          ctx.stroke();
        },
        [a]: (x, y) => {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + 20, y);
          ctx.moveTo(x + 10, y);
          ctx.lineTo(x + 10, y + 50);
          ctx.stroke();
        },
        [i]: (x, y) => {
          ctx.beginPath();
          ctx.ellipse(x + 15, y + 25, 10, 40, 0, Math.PI * 0.7, Math.PI * 1.3);
          ctx.stroke();
        },
        [o1]: (x, y) => {
          ctx.beginPath();
          ctx.ellipse(x, y + 25, 10, 40, 0, -Math.PI * 0.3, Math.PI * 0.3);
          ctx.stroke();
        }
        
      };
      is.forEach((letter, i) => letters[letter](15 + i * 32, 15));
    });
  }
}