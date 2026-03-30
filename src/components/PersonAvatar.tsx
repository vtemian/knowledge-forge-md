const sizeClasses = {
  sm: "w-6 h-6 text-[10px]",
  md: "w-9 h-9 text-sm",
  lg: "w-10 h-10 text-base",
  xl: "w-12 h-12 text-lg",
};

const PersonAvatar = ({ name, size = "md" }: { name: string; size?: keyof typeof sizeClasses }) => (
  <span
    className={`${sizeClasses[size]} rounded-full bg-primary/10 text-primary font-semibold inline-flex items-center justify-center shrink-0`}
  >
    {name.charAt(0).toUpperCase()}
  </span>
);

export default PersonAvatar;
