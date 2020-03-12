import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../../feed.service';
import { PostId } from '../../Models/postId.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-post-like',
  templateUrl: './post-like.component.html',
  styleUrls: ['./post-like.component.css']
})
export class PostLikeComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  pictureLikeUrl: string = 'data:image/jpeg;base64,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';
  pictureUnlikeUrl: string = 'data:image/jpeg;base64,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';
  
  listLikes: number[] = [];
  imageLike: string;
  @Input() postId: number;
  countLikes:number = 0;
  isLike: boolean = true;
  post: PostId;

  ngOnInit() {
    this.imageLike = this.pictureUnlikeUrl;
    this.feedService.getAllLikesPosts(this.postId).subscribe(list => {
      this.listLikes = list;
      this.countLikes = this.listLikes.length;
    });
    this.post = {
      PostId: null
    };
  };

  changePicture(){
    debugger
    this.post.PostId = this.postId;
    if(this.imageLike == this.pictureUnlikeUrl){
      this.imageLike = this.pictureLikeUrl;
      this.feedService.insertLikePost(this.post);
    }
    else{
      this.imageLike = this.pictureUnlikeUrl;
    }
    this.changeLength();
  }
  changeLength(){
    if(this.isLike){
      this.countLikes = this.listLikes.length+1;
      this.isLike = false;
    }
    else{
      this.isLike = true;
      this.countLikes = this.listLikes.length;
    }
  }
}
