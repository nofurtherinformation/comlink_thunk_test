
export class TestClass{
  private list : Array<string>=[];
  constructor(){}

  async addToList(item:string): Promise<Array<string>>{
    await new Promise((resolve,reject)=> setTimeout(resolve,2000))
    this.list.push(item)
    return this.list 
  }
}

