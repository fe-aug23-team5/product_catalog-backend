enum SortByType {
  Newest = 'newest',
  Cheapest = 'cheapest',
  Name = 'name',
}

export interface QueryParams {
  sortBy?: SortByType;
  page?: string;
  perPage?: string | 'all';
  order?: 'ASC' | 'DESC';
  query?: string;
}
