const userIds = ['U01', 'U02', 'U03'] ;
const orderIds = ['T01', 'T02', 'T03', 'T04'] ;
const userOrders = 
[			
    { userId: 'U01', orderIds: ['T01', 'T02'] },
    { userId: 'U02', orderIds: [] },
    { userId: 'U03', orderIds: ['T03'] },
];
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' } ;
const orderData = 
{						
    'T01': { name: 'A', price: 499 }, 
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 }, 
    'T04': { name: 'D', price: 799 }
} ;


function combine(ui,oi,uo,ud,od){
    let result = new Array(ui.length);
    for (var i = 0; i < ui.length; i++){
        let u = new Object();
        u["id"]=ui[i];
        u["name"]=ud[ui[i]];
        let tmp = new Object();
        tmp["user"] = u;
        
        let o = new Array(uo[i].orderIds.length);
        for(var j=0;j<uo[i].orderIds.length;j++){
            let x = new Object();
            x["id"] = uo[i].orderIds[j];
            x["name"] = od[x["id"]].name;
            x["price"] = od[x["id"]].price;
            o[j] = x; 
            if(j==uo[i].orderIds.length-1){
                tmp["orders"] = o;
            }
        }
        
        tmp["user"] = u;
        result[i] = tmp;
    }
    console.log(result);
}


combine(userIds,orderIds,userOrders,userData,orderData);

