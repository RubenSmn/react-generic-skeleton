export interface TextSkeletonProps {
  children: string | number;
}

const TextSkeleton = ({ children }: TextSkeletonProps): React.ReactElement => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, lightgray 45%, #ddd 55%, lightgray 100%)",
        backgroundSize: "200% 200%",
        animation: "pulse 1.5s ease-in-out 0.5s infinite",
        borderRadius: 12,
        margin: 0,
        width: "fit-content",
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

export default TextSkeleton;
