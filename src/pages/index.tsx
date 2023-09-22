import { useState } from 'react';
import { Button, Input, Rating, TextArea } from '../components';

const Index = () => {
	const [is, setIs] = useState(false);
	const [rating, setRating] = useState<number>(4);

	return (
		<div style={{ padding: '50px' }}>
			<Button appearance='primary' arrow='down'>
				My Button
			</Button>
			<Button appearance='primary' arrow='right'>
				My Button
			</Button>
			<Button appearance='ghost' arrow='down'>
				My Button
			</Button>
			<Button appearance='ghost' arrow={is ? 'right' : 'down'} onClick={() => setIs(prev => !prev)}>
				My Button
			</Button>

			<Input placeholder='Enter' />

			<TextArea placeholder='Message' />

			<Rating rating={rating} setRating={setRating} isEditabled={true} />
		</div>
	);
};

export default Index;
