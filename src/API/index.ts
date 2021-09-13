export default class API {
  static async getTopSales() {
    try {
      return await fetch('http://localhost:7070/api/top-sales')
    } catch (e) {
      console.log(e)
    }
  }

  static async getCategories() {
    try {
      return await fetch('http://localhost:7070/api/categories')
    } catch (e) {
      console.log(e)
    }
  }

  static async getItems(): Promise<any> {
    try {
      return await fetch('http://localhost:7070/api/items')
    } catch (e) {
      console.log(e)
    }
  }

  static async getItem(id: number) {
    try {
      return await fetch(`http://localhost:7070/api/items?categoryId=${id}`)
    } catch (e) {
      console.log(e)
    }
  }

  static async getMoreItems(id: number) {
    try {
      return await fetch(`http://localhost:7070/api/items?categoryId=${id}&offset=6`)
    } catch (e) {
      console.log(e)
    }
  }

  static async findItem(query: string) {
    try {
      return await fetch(`http://localhost:7070/api/items?q=${query}`)
    } catch (e) {
      console.log(e)
    }
  }
}