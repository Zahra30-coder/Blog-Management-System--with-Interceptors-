import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api-servicez.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  uBlog!: FormGroup;
  blogData: any;
  currentParamsId: string = '';

  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.uBlog = this.formBuilder.group({
      name: [''],
      designation: ['']
    });

    this.router.params.subscribe((paramsResponse: any) => {
      this.currentParamsId = paramsResponse.id;
      this.initBlogForm(this.currentParamsId);
    });
  }

  public initBlogForm(paramsId: any) {
    this.apiService.getSingleBlog(paramsId).subscribe((result: any) => {
      this.blogData = result;
      this.uBlog.patchValue({
        name: this.blogData.name,
        designation: this.blogData.designation
      });
    });
  }

  updateBlog() {
    const updatedBlogData = this.uBlog.value;
    const blogId = this.currentParamsId;

    this.apiService.editPosts(blogId, updatedBlogData).subscribe(
      editBlog => {
        console.log('Blog updated successfully:', editBlog);
      },
      error => {
        console.error('Error updating blog:', error);
      }
    );
  }
}
