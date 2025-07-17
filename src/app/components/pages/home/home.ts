import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  posts: Post[] = [];
  featuredPost: Post | null = null;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.featuredPost = posts[0];
    });
  }

  trackByPostId(index: number, post: Post): number {
    return post.id;
  }

  getPostRoute(id: number): string {
    return `/post/${id}`;
  }

  getCategoryRoute(category: string): string {
    return `/category/${category.toLowerCase().replace(' ', '-')}`;
  }
}
