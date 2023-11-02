import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Card = ({ children, onClick }: Props) => {
	return (
		<div
			className="card"
			onClick={e => {
				if (onClick instanceof Function) {
					onClick(e);
				}
			}}
		>
			{children}
		</div>
	);
};

export default Card;
