export interface Anime {
  anime: {
    broadcast: {
      day_of_the_week: string;
      start_time: string;
    };
    genres: {
      id: number;
      name: string;
    }[];
    id: number;
    main_picture: {
      large: string;
      medium: string;
    };
    mean: number;
    media_type: string;
    num_episodes: 13;
    source: string;
    studios: {
      id: number;
      name: string;
    }[];
    synopsis: string;
    title: string;
    start_date: string;
    alternative_titles: {
      synonyms: string[],
      en: string,
      ja: string
  }
  };
}