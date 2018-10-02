 import Sequelize from 'sequelize'
const sequelize = new Sequelize('nodelover','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:1000 // 连接在释放之前可以空闲的最长时间(以毫秒为单位)
    }
})

const S = Sequelize

interface UserAttributes{
    email:string;
    name:string
}
interface UserInstance extends Sequelize.Instance<UserAttributes>{
    id:number;
    createAt:Date;
    updateAt:Date;
    email:string;
    name:string;
}
const User = sequelize.define<UserInstance,UserAttributes>('User',{
    email:S.STRING,
    name:S.STRING
});
(User as any).prototype.say = function(this:UserInstance){
 console.log('name' + this.name)
}
interface BookAttributes{
    status:"inSale"|"noSale";
    description:string;
    title:string;
    author:string
}
interface BookInstance extends Sequelize.Instance<BookAttributes>{
    id:number;
    createAt:Date;
    updateAt:Date;
    status:"inSale"|"noSale";
    description:string;
    title:string;
    author:string
}
const Book = sequelize.define<BookInstance,BookAttributes>("book",{
  id:{
      type:S.INTEGER,
      autoIncrement:true,
      primarykey:true,
      unique:true
  },
  description:S.TEXT,
  status:{
      type:S.ENUM,
      values:['inSale','noSale'],
      validate:{
          isIn:{
              
          }
      }
  }  
})
async function main() {
    try{
        await sequelize.authenticate()
        console.log('sequelize已经连接成功啦！')
        process.exit(0)
    }catch(e){
        console.log(e)
    }
}
main()