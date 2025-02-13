export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageUrl?: string;
}

export function Card({ title, description, imageUrl, ...props }: CardProps) {
  return (
    <div  {...props}>
      <div >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
