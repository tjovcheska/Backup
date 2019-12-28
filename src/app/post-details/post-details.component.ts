import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstagramApiService } from '../instagram-api.service';

export interface DialogData {
  clickedPost: Post;
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postComments: PostComment[] = [];
  newComment: PostComment;
  //postDescription: Description[] = [];
  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<PostDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apiService: InstagramApiService) {

      this.newComment= { id: this.data.clickedPost.id, 
                      accountName: '@BeautyCorner', 
                      comment: '',
                      photoUrl: 'https://i.pinimg.com/564x/1d/dc/18/1ddc1884f47081b1d966a54b6a3af44e.jpg',
                      fullName: 'BeautyCorner'};
                      
      this.apiService.getPostComments(this.data.clickedPost.id)
          .subscribe((comments)=>{
            this.postComments = comments;
          });
    }

    onComment(){

      this.apiService.postComment(this.data.clickedPost.id,this.newComment)
      .subscribe(()=>{
        console.log("Posted new comment");
      });

      this.newComment.comment='';
    }
}