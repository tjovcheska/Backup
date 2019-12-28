import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostDetailsComponent } from './post-details/post-details.component';
import { InstagramApiService } from './instagram-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BEAUTY CORNER';

  posts: Post[] = [];

  pageNumber: number=1;

  constructor(public dialog: MatDialog, private apiService: InstagramApiService) {

    /*this.apiService.getPosts().subscribe((receivedPosts)=>{
      this.posts = receivedPosts;
    });*/
    this.getPosts();
  }

  onClick(post: Post){
    const dialogRef = this.dialog.open(PostDetailsComponent, {
      width: '750px',
      height: '700px',
      data: {clickedPost: post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onLoadMore()
  {
    this.pageNumber++;
    this.getPosts();
  }

  onLoadBack()
  {
    this.pageNumber--;
    this.getPosts();
  }

  getPosts()
  {
    this.apiService.getPosts(this.pageNumber).subscribe((receivedPosts)=>
    {
      this.posts = receivedPosts;
    });
  }
}
