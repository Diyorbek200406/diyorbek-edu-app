import { Heading, Tag, Text } from '../components';

const Index = () => {
	return (
		<div>
			<Heading tag='h3'>Hello World!</Heading>
			<Text size='l'>Text Component</Text>
			<Tag size='m' color='red'>
				Red
			</Tag>

			<Tag size='m' color='green'>
				Green
			</Tag>

			<Tag size='m' color='primary'>
				Primary
			</Tag>
		</div>
	);
};

export default Index;
