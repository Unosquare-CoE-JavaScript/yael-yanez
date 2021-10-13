import { ContentItem, Elements } from "@kentico/kontent-delivery";

class Movie extends ContentItem {
  public title: Elements.TextElement;
  public plot: Elements.RichTextElement;
  public released: Elements.DateTimeElement;
  public length: Elements.NumberElement;
  public poster: Elements.AssetsElement;
  public category: Elements.MultipleChoiceElement;
}

export default Movie;
