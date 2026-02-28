import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card-panel',
  templateUrl:'cardPanel.html',
  styleUrl: 'cardPanel.css',
  standalone: true,
  imports: [RouterModule,TranslateModule],
})
export class CardPanel {

}
