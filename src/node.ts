import { NodeData } from './types/ClassData'

export default class Node implements NodeData {
  constructor(public url: string) {}
}
