export const getData = async (url) => {
	const reply = await fetch(url);
	if (!reply.ok) {
		throw new Error ('Data could not be downloaded!');
	}
	return reply.json();
};