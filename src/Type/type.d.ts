type Action = {
  type: string,
  error?: string,
  items?: Array<Item>
}

interface IItem {
  category: number
  id: number
  image: Array<string>
  price: number
  title: string
}

type State = IState;
type Item = IItem;