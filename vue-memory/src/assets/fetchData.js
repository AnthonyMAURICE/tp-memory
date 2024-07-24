const savedData = JSON.parse(sessionStorage.gameInfo)

async function getData(){
    const response = await fetch(`../../src/assets/theme/${savedData.gameTheme}.json`)
    const data = await response.json()
    return data
}
const result = await getData()
export default result