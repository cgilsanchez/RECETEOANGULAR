import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { timer } from 'rxjs';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone:true,
 
})
export class SplashPage implements OnInit {
  router: any;

  
  ngOnInit() {
    timer(5000).subscribe(_=>{
      this.router.navigate(['/home']);
    });
  }

}