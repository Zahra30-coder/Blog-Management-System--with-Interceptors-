import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api-servicez.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'] // Fixed styleUrl to styleUrls
})
export class BlogsComponent implements OnInit {
  
  constructor(private apiService: ApiService) {}
  blogData: any = [];
  public items: any[] = []; 

  ngOnInit(): void {
    this.getData();
  }




  public getData(){
    this.apiService.getPosts().subscribe(data => {
      console.log(data);
    });
  }
  // getData(){
  //   this.apiService.getPosts().subscribe({
  //     next: (successResponse)=>{
  //       console.log(successResponse)
  //     },
  //     error: (errorResponse)=>{
  //       console.log(errorResponse)
  //     }
  //   })
  // }

  deleteBlog(blogId: any) {
    console.log(blogId);
    this.apiService.deleteBlog(blogId).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }

}
