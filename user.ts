class User {
    protected name:string;
    protected email:string;
    role: number;

    constructor(name: string, email: string, role: number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getName():string{
        return this.name
    }
    setName(name:string){
        this.name=name
    }
    getEmail():string{
        return this.email
    }
    setEmail(email:string){
        this.email=email
    }
    getRole():number{
        return this.role
    }
    setRole(role:number){
        this.role=role
    }
}
class AllUsers {
    private users:User[]=[]
    constructor() {
    }
    getAll():User[]{
        return this.users
    }
    add(user:User){
        this.users.push(user)
    }
    getAdm(user:User){
        if (user.role===1){
            console.log('admin')
        }else console.log('user')
    }
}
let user=new User('viet','a2f22',1);
let user1=new User('nam','a2ddd2',2);
let user2=new User('dan','a1rrf2',2);
let user3=new User('choi','a1fd54622',2);
let user4=new User('vl','34634t2',2);
// console.log(user4.isAdmin())
let allUsers=new AllUsers()
allUsers.add(user)
allUsers.add(user1)
allUsers.add(user2)
allUsers.add(user3)
allUsers.add(user4)
console.table(allUsers.getAll())
allUsers.getAdm(user1)