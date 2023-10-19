import { useState, useEffect } from "react";

export const BookList = () => {
	const [bookList, setBookList] = useState([]);

	useEffect(() => {
		const url = "http://127.0.0.1:8000/Book/";
		const getList = async () => {
			const data = await fetch(url).then((response) => response.json());
			setBookList(data);
		};
		getList();
	}, []);

	return (
		<>
			<ul>
				{bookList?.map((book, index) => {
					return (
						<li key={index}>
							{book.name} - {book.year}
						</li>
					);
				})}
			</ul>
		</>
	);
};
