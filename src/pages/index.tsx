import { useState } from 'react';
import { Button } from '../components';

const Index = () => {
	const [is, setIs] = useState(false);

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
		</div>
	);
};

export default Index;
