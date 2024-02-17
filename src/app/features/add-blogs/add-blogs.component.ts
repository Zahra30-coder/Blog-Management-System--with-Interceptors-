import { Component } from '@angular/core';
import { ApiService } from '../../services/api-servicez.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent {

  addBlog!: FormGroup;

  constructor(private blogs: ApiService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addBlog = this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addBlog.valid) {
      console.log(this.addBlog.value);
    }
  }

  saveData() {
    this.blogs.addPosts(this.addBlog.value).subscribe(
      result => {
        console.log('Blog added successfully:', result);
        this.addBlog.reset();
      },
      error => {
        console.error('Error adding blog:', error);
      }
    );
  }
}
