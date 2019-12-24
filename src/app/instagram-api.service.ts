import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>("http://5e02628c63d08b0014a288a2.mockapi.io/Blog")
  }

  getPostComments(postId: number):Observable<PostComment[]>{
    return this.http.get<PostComment[]>(`http://5df115fd9df6fb00142bd818.mockapi.io/api/posts/${postId}/postComments`)
  }

  postComment(postId: number, comment: PostComment){
    return this.http
    .post(`http://5df115fd9df6fb00142bd818.mockapi.io/api/posts/${postId}/postComments`, comment);
  }
}
