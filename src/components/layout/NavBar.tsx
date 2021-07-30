import React from 'react'
import { Button, PageHeader } from 'antd';
import { RiShoppingCartFill } from "react-icons/ri"
import { BsFillHeartFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { resetCurrentProduct } from '../../redux';

interface Props {
	showDrawer: () => void;
}
const NavBarTitle: React.FC<{ title: string }> = ({ title }) => {
	const dispatch = useAppDispatch()
	return <Link onClick={() => dispatch(resetCurrentProduct())} to={"/"}><h2>{title}</h2></Link>
}
const NavBar: React.FC<Props> = ({ showDrawer }) => {
	return (
		<PageHeader
			className="site-page-header"
			title={<NavBarTitle title="Redux Cart" />}
			extra={[

				<Button type="link" className="wishlist-button" key="1">
					<Link to={"/wishlist"}>
						<BsFillHeartFill />
					</Link>
				</Button>,

				<Button onClick={showDrawer} type="link" style={{ fontSize: "30px" }} key="1">
					<RiShoppingCartFill />
				</Button>,
			]}
		/>
	)
}

export default NavBar
