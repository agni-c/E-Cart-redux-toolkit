import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

interface Props {
	onClose: () => void;
	visible: boolean
}

const DrawerComponent: React.FC<Props> = ({ onClose, visible }) => {

	return (
		<>

			<Drawer
				title="Basic Drawer"
				placement="right"
				closable={false}
				onClose={onClose}
				visible={visible}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</>
	)
}
export default DrawerComponent