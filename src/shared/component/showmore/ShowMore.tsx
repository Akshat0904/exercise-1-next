import { useState } from "react";

interface IProps {
  expandHeight: number;
  collapseHeight: number;
  content: string;
}

const ShowMore = ({
  expandHeight,
  collapseHeight,
  content,
}: IProps): JSX.Element => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (): void => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="font-dmSans">
      <p
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: showMore ? `${expandHeight}px` : `${collapseHeight}px`,
        }}
      >
        {content}
      </p>
      <button
        className="text-at-primary text-base leading-7 mt-2 flex gap-2 items-center"
        onClick={toggleShowMore}
      >
        {showMore ? "Show less" : "Show more"}
        <span className={(showMore && "rotate-180") || ""}>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#0073CF"
              fill=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ShowMore;
