import React from "react";
import Fab from "../Floating_Button/FloatingButton";
import Chat_Bot from "../ChatBot/Chatbot";
import { useState } from "react";

/**
 * @author
 * @function Layout
 **/

export const Layout = (props) => {
	const [showCB, setShowCB] = useState(false);
	const handleCB = () => {
		if(showCB){
			setShowCB(false)
		}
		else{
			setShowCB(true)
		}
	}
	return (
		<>
			<div style={{ marginTop: '125px' }}>
				<a onClick={handleCB}>
					<Fab />
				</a>
				{
					showCB === true ? <Chat_Bot /> : null
				}
				{props.children}
			</div>

		</>
	);
};