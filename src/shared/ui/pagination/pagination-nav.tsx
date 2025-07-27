import { getPaginationPages } from "./utils/get-pagination-pages.ts";

type Props = {
  current: number;
  pagesCount: number;
  onChange: (page: number) => void;
};

const SIBLING_COUNT = 1;

export const PaginationNav = ({ current, pagesCount, onChange }: Props) => {
  const pages = getPaginationPages(current, pagesCount, SIBLING_COUNT);

  return (
    <div className="flex items-center justify-center gap-3">
      {pages.map((item, idx) =>
        item === "..." ? (
          <span className="px-3 py-2" key={`ellipsis-${idx}`}>
            ...
          </span>
        ) : (
          <button
            key={item}
            className={
              item === current
                ? `${"px-3 py-2 bg-transparent border border-gray-500 rounded-sm cursor-pointer text-white transition-colors duration-200"} ${"text-black bg-gray-400 font-bold"}`
                : "px-3 py-2 bg-transparent border border-gray-500 rounded-sm cursor-pointer text-white transition-colors duration-200"
            }
            onClick={() => item !== current && onChange(Number(item))}
            disabled={item === current}
            type="button"
          >
            {item}
          </button>
        ),
      )}
    </div>
  );
};
