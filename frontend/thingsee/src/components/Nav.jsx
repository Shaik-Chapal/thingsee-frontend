import React from "react";
import { Link } from "@reach/router";

export default function Nav() {
	return (
		<>
			<header className="text-gray-500 bg-gray-900 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link
						to="/"
						className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
					>
						<span className="ml-3 text-xl">Thingsee</span>
					</Link>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link to="/" className="mr-5 hover:text-white">
							Home
						</Link>
						
					</nav>
					
				</div>
			</header>
		</>
	);
}
