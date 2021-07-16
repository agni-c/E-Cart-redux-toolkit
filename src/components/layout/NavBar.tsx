import React from 'react'
import { Button, PageHeader } from 'antd';
import { RiShoppingCartFill } from "react-icons/ri"

interface Props {
	showDrawer: () => void;
}

const NavBar: React.FC<Props> = ({ showDrawer }) => {
	return (
		<PageHeader
			className="site-page-header"
			title="Redux Cart"
			extra={[
				<Button onClick={showDrawer} type="link" style={{ fontSize: "30px" }} key="1">
					<RiShoppingCartFill />
				</Button>,
			]}
		/>
	)
}

export default NavBar
