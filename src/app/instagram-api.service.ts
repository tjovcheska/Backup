import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {

  constructor(private http: HttpClient) { }

  getPosts(pageNumber: number):Observable<Post[]>{
    return this.http.get<Post[]>(`http://5e02628c63d08b0014a288a2.mockapi.io/Blog?page=${pageNumber}&limit=5`)
  }

  getPostComments(postId: number):Observable<PostComment[]>{
    return this.http.get<PostComment[]>(`http://5e02628c63d08b0014a288a2.mockapi.io/Blog/${postId}/BlogComments`)
  }

  postComment(postId: number, comment: PostComment){
    return this.http
    .post(`http://5e02628c63d08b0014a288a2.mockapi.io/Blog/${postId}/BlogComments`, comment);
  }

 /* getDescription (postId: number):Observable<Description[]>
{
  return this.http.get<Description[]>(`http://5e02628c63d08b0014a288a2.mockapi.io/Blog/${postId}/BlogDescription`);
}*/

getPostDescription(postId: number):Observable<PostDescription[]>{
  return this.http.get<PostDescription[]>(`http://5e02628c63d08b0014a288a2.mockapi.io/Blog/${postId}/BlogDescription`)
}
}
