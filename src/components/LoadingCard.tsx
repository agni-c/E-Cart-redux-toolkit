import React from 'react'
import { Card, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Avatar from 'antd/lib/avatar/avatar';

const LoadingCard: React.FC = () => {
	return (
		<Card
			style={{ width: 300, marginTop: 16 }}
		>
			<Skeleton loading={true} avatar active>
				<Meta
					avatar={
						<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					}
					title="Card title"
					description="This is the description"
				/>
			</Skeleton>
		</Card>
	)
}

export default LoadingCard
