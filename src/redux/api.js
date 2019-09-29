export const getProgress = async () => {
    const response = await fetch('http://pb-api.herokuapp.com/bars')
    return response.json();
}