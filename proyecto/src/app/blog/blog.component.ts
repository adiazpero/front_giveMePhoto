import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../models/post';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPosts: Post[];
  listaPostsLateral: Post[];

  constructor(private blogservice: BlogService, private router: Router) {

  }


  ngOnInit() {
    this.listaPosts = this.blogservice.getAll();
    this.listaPostsLateral = this.blogservice.getAllLateral();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }







}