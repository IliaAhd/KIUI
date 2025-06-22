/**
 * Fetches menu data from JSON file
 * @returns {Promise<Object|null>}
 */
async function getMenuData() {
  try {
    const response = await fetch("./src/components/data.json");
    if (!response.ok) throw new Error("Failed to fetch menu data");
    const result = await response.json();
    return result.menu;
  } catch (error) {
    console.error("Error loading menu:", error);
    return null;
  }
}
async function getBoxData() {
  try {
    const response = await fetch("./src/components/data.json");
    if (!response.ok) throw new Error("Failed to fetch menu data");
    const result = await response.json();
    return result.box;
  } catch (error) {
    console.error("Error loading menu:", error);
    return null;
  }
}
export { getMenuData };
