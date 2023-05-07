import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AllPermissions } from 'src/app/model/permissions.model';
import { PostsService } from 'src/app/services.service';
import { Permissions } from 'src/app/model/permissions.model';


@Component({
  selector: 'app-awardthing', 
  templateUrl: './awardthing.component.html',
  styleUrls: ['./awardthing.component.css']
})
export class AwardthingComponent implements OnInit, OnDestroy {
  posts: any;
  permissions: any;
  awardPermissions: { id: any, name:any,entityType: any, permissionType: any }[] = [];
  name:any;

  constructor(private service: PostsService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe((response: any) => {
        this.posts = response;
        this.permissions = this.posts[0].permissions;
        this.permissions.forEach((permission: any) => {
           console.log('permission', permission);
          if (permission.entityType === 'Class') {
            console.log('Sam Kold', permission);
            this.awardPermissions.push(permission);
          }
        });
        //  console.log('Sam Kolder', this.awardPermissions)
        // this.permissions.map((permission: any) => {
        //   console.log('Sam Kolder', permission)
        // })
      });
  }
}




