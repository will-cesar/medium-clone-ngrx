import {ArticleInteface} from 'src/app/shared/types/article.interface';

export interface GetFeedResponseInterface {
  articles: ArticleInteface[];
  articlesCount: number;
}
