import React, {FC} from "react";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

interface GreetingProps {
	isLoggedIn: boolean
}

const Greeting:FC<GreetingProps> = (props) => {
   const isLoggedIn = props.isLoggedIn;
   
		if (isLoggedIn) {
			return <UserGreeting />;
		}
		return <GuestGreeting />;
};

export default Greeting;
