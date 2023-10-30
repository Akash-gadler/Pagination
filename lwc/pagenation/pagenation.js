import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/Accountcontroller.accountlist';
export default class Pagenation extends LightningElement {


recordsToDisplay;
recorsize=5;
totalpage;
currentpage=1;
totalrecord;
start;
end;
visibleRecord = [];
finalrecord = [];
@wire(getAccount) acclist({data,error})
{
    if(data)
    {
        this.recordsToDisplay=data;
        this.visibleRecord=[...data];
        // this.visibleRecord=data.slice(0,5);
        // console.log(this.visibleRecord);
        // this.finalrecord=this.visibleRecord.slice(0,5);
        // this.finalrecord.forEach(element => {
        //     console.log('OUTPUT : ',element);
        // });
        this.totalpage=Math.ceil(data.length/this.recorsize);
        this.updateRecords()
    }
    
}
previousHandler()
{
     if(this.currentpage>1)
    {
        this.currentpage=this.currentpage-1;
        this.updateRecords()
    }
}
// async // 
nextHandler()
{
    this.visibleRecord=[...this.recordsToDisplay];
    console.log('OUTPUT : ',this.visibleRecord);
    if(this.currentpage<this.totalpage)
    {
        this.currentpage=this.currentpage+1;
        this.updateRecords();
    }

}
updateRecords()
{
    console.log('OUTPUT : ',this.visibleRecord.length);
    //let start = (this.currentpage-1)*this.recordSize;
    //let end = (this.recordsize*this.currentpage);
    let updatedCurrentpg = this.currentpage-1;
    let updatedRecpg = this.recorsize;
    let currentpg = this.currentpage;

    let start1 = updatedCurrentpg * updatedRecpg;
    let end2 = updatedRecpg * currentpg;
    console.log('Start:',start1);
    console.log('End:',end2);
   
   this.finalrecord=this.visibleRecord.slice(start1,end2);
        this.finalrecord.forEach(element => {
            console.log('OUTPUT : ',element);
        });
    console.log(this.visibleRecord);
}


}