import { Component } from '@angular/core';
import { PostsService } from 'src/app/services.service';

@Component({
  selector: 'app-classthing',
  templateUrl: './classthing.component.html',
  styleUrls: ['./classthing.component.css']
})
export class ClassthingComponent {
  posts: any;
  permissions: any;
  awardPermissions: { id: any, name:any,entityType: any, permissionType: any }[] = [];
  name:any;

  constructor(private service: PostsService) { }

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
