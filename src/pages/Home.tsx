import { Card } from "../Components";
import { PlusSquare, FileText } from "react-feather";

const Home = () => {
	return (
		<div>
			<div className="centered">
				<Card onClick={e => e.target}>
					<PlusSquare />
					Create Template
				</Card>
				<Card onClick={e => e.target}>
					<FileText />
					Use Existing Template
				</Card>
			</div>
		</div>
	);
};

export default Home;
