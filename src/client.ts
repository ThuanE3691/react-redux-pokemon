export default async function callApi(api: string) {
	try {
		const response = await fetch(api);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
