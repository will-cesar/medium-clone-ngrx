import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';

import {FeedComponent} from './components/feed/feed.component';
import {FeedService} from './services/feed.service';
import {GetFeedEffect} from './store/effects/get-feed.effect';
import {reducers} from 'src/app/auth/store/reducers';
import {ErrorMessageModule} from '../error-message/error-message.module';
import {LoadingModule} from '../loading/loading.module';
import {PaginationModule} from '../pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
