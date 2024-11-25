/**
 * @description       : 
 * @author            : Sangram Keshari Upadhyaya
 * @group             : 
 * @last modified on  : 14-09-2024
 * @last modified by  : Sangram Keshari Upadhyaya
 * Modifications Log
 * Ver   Date         Author                      Modification
 * 1.0   14-09-2024   Sangram Keshari Upadhyaya   Initial Version
**/
import { LightningElement } from 'lwc';

export default class Lwc_getterMethods extends LightningElement {

    // What is Getter ? When to use ?

    /*
    
    When we want to use an expression in html of lwc, it's not directly achievable, so for this getter is used.
    When a method is appended with get keyword it becomes getter.

    **** JS ****
    numbersTen = [1,2,3,4,5,6,7,8,9,10];
    num1 = 10;
    num2 = 21;

    **** html ****
    <div>numbersTen[0]</div>
    <div>{num1 * num2}</div>

    ==> Not Allowed

    Syntax ::

    **** JS ****
    get getterMethod() {
        return expression;

    **** html ****
    <div>{getterMethod}</div>

    */

    activeUsers = ['Sangram', 'Rakesh', 'Bablu'];
    uniqueNumber;

    getUniqueNumber(evt){
        this.uniqueNumber = evt.target.value;
    }

    // getter
    get activeUsersNames(){
        return this.activeUsers[this.uniqueNumber] ? this.activeUsers[this.uniqueNumber]: 'No User Found';
    }
    
}