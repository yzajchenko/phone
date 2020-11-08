export default class PhoneStoreServices {
    constructor(){
        this.url = '/img/';
        this.PhoneData = [
            {
                id: 1,
                title: 'СМАРТФОН XIAOMI MI 5X',
                img: `${this.url}xiaomi.jpg`
            },
            {
                id: 2,
                title: 'СМАРТФОН SAMSUNG GALAXY A50',
                img: `${this.url}samsung.jpg`
            },
            {
                id: 3,
                title: 'СМАРТФОН HUAWEI P30',
                img: `${this.url}huawei.jpg`
            }
        ]
    }
    
    getPhone(){
        return new Promise((resolve)=>{
            resolve(this.PhoneData);   
        })
    }

}