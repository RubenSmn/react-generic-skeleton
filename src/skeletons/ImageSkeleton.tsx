import React from "react";

export interface ImageSkeletonProps {
  children: React.ReactElement<HTMLImageElement>;
  isLoading?: boolean;
  round?: boolean;
}

const ImageSkeleton = ({
  children,
  isLoading = true,
  round = false,
}: ImageSkeletonProps): React.ReactElement => {
  if (isLoading === false) return <>{children}</>;

  let size;
  if (round === true) {
    const height = children.props.height;
    const width = children.props.width;

    // check which size to use
    if (height === undefined && width === undefined) {
      size = 64;
    } else if (height === undefined) {
      size = Number(width);
    } else if (width === undefined) {
      size = Number(height);
    }
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, lightgray 45%, #ddd 55%, lightgray 100%)",
        backgroundSize: "200% 200%",
        animation: "pulse 1.5s ease-in-out 0.5s infinite",
        borderRadius: round ? "50%" : 12,
        margin: 0,
        width: size ? size : "fit-content",
        height: size ?? "",
      }}
    >
      <span
        style={{
          visibility: "hidden",
        }}
      >
        {children}
      </span>
    </div>
  );
};

export default ImageSkeleton;
