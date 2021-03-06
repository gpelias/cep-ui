export interface Content {
  content: Object[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    }
    offset: number;
    pageSize: number;
    paageNumber: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  last: boolean;
  totalElements: number;
  size: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
