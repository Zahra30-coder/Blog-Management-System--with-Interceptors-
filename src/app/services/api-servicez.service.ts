import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly url = "http://localhost:3000";
  public getUrl = "/emps"
  public PostsUrl = '/getPosts';
  public addPostsUrl = '/addPost';
  public getSinglePostsUrl = '/getPost';
  public editPostsUrl = '/updatePost';
  public deletePostURl = '/deletePost';

  constructor(private http: HttpClient) {}

  public getPosts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YourAccessToken',  // Include your token if required
      // Add any other headers as needed
    });
    // return this.http.get(this.url + this.PostsUrl);
    return this.http.get(this.url +this.getUrl,{ headers });

  }

  public addPosts(blog: any): Observable<any> {
    // return this.http.post(this.url + this.addPostsUrl, blog);
    console.log(blog);
    return this.http.post(this.url, blog);
  }

  public getSingleBlog(blogId: string): Observable<any> {
    return this.http.get(this.url + this.getSinglePostsUrl + '/' + blogId);
  }

  public editPosts(blogId: string, blog: any): Observable<any> {
    return this.http.put(this.url + this.editPostsUrl + '/' + blogId, blog);
  }

  public deleteBlog(blogId: string): Observable<any> {
    // return this.http.delete(this.url + this.deletePostURl + '/' + blogId);
    console.log(blogId);
    return this.http.delete(`${this.url}/${blogId}`);
  }
}
