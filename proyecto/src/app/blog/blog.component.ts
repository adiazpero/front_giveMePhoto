import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPosts: Post[];
  listaPostsLateral: Post[];

  constructor(private blogservice: BlogService) {

  }


  ngOnInit() {
    this.listaPosts = this.blogservice.getAll();

    this.listaPostsLateral = this.blogservice.getAllLateral();
  }







}