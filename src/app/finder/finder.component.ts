import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  userName: any;
  userProfile: object;
  loading = true;
  storedData: string;

  constructor(private client: HttpClient, private toastr: ToastrService) { }


  ngOnInit() {
  }
  getUserDetails() {
    delete this.userProfile;
    this.loading = false;
    this.storedData = localStorage.getItem(this.userName);
    if (this.storedData) {
      console.log("cached");
      this.loading = true;

      this.userProfile = JSON.parse(this.storedData);

    } else {
      // tslint:disable-next-line: max-line-length
      return this.client.get(environment.baseUrl + this.userName + '?access_token=27a366e23422d197284fe8b9cb0fce28de545ffc').subscribe(res => {
        this.loading = true;
        this.userProfile = res;
        localStorage.setItem(this.userName, JSON.stringify(this.userProfile));
      }, (error) => {
        this.toastr.error('No user  found', '', {
          timeOut: 3000
        });
        this.loading = true;
        console.log(error);
      });

    }
  }
}

