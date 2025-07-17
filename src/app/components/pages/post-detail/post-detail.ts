import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule, MatDividerModule],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css'
})
export class PostDetail implements OnInit {
  post: Post | null = null;
  relatedPosts: Post[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadPost(id);
    });
  }

  loadPost(id: number) {
    this.loading = true;
    this.postService.getPost(id).subscribe((post: Post | undefined) => {
      this.post = post || null;
      this.loading = false;
      
      if (this.post) {
        this.loadRelatedPosts();
      }
    });
  }

  loadRelatedPosts() {
    if (!this.post) return;
    
    this.postService.getPostsByCategory(this.post.category).subscribe((posts: Post[]) => {
      this.relatedPosts = posts.filter(p => p.id !== this.post!.id).slice(0, 3);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  navigateToPost(id: number) {
    this.router.navigate(['/post', id]);
  }
}
