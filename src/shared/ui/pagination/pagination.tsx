import { PaginationNav } from "./pagination-nav.tsx";

type Props = {
  current: number;
  pagesCount: number;
  changePageNumber: (page: number) => void;
  isFetching: boolean;
};

export const Pagination = ({
  current,
  pagesCount,
  changePageNumber,
  isFetching,
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-5 mx-auto">
      <PaginationNav
        current={current}
        pagesCount={pagesCount}
        onChange={changePageNumber}
      />{" "}
      {isFetching && "⌛️"}
    </div>
  );
};
