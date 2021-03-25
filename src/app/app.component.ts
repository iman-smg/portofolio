import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portofolio';
  cvBlock='hide';
  proToko='show';
  showCv()
  {
    if (this.cvBlock =='show')
    {
      this.cvBlock = 'hide'
      this.proToko = 'hide'
      console.warn(this.cvBlock)
    }
    else{
      this.cvBlock = 'show'
      this.proToko = 'hide'
      console.warn(this.cvBlock)
    }
  }
  showToko()
  {
    if (this.proToko =='show')
    {
      this.cvBlock = 'hide'
      this.proToko='hide'
    }
    else{
      this.cvBlock = 'hide'
      this.proToko='show'
    }
  }
}
